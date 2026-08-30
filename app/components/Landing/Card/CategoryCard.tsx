"use client";

import Image from "next/image";
import { CategoryCardType } from "@/lib/types/CategoryCard";
import { motion } from "framer-motion";

const overlayVariants = {
  initial: {
    opacity: 0,
    scale: 1,
    filter: "brightness(100%) blur(0px)",
  },
  hover: {
    opacity: 1,
    scale: 1.1,
    filter: "blur(5px)",
    transition: {
      filter: { delay: 0.5 },
    },
  },
};

const hideVariants = {
  initial: { opacity: 1 },
  hover: { opacity: 0 },
};

const showVariants = {
  initial: { opacity: 0 },
  hover: { opacity: 1, transition: { delay: 0.5 } },
};

const CategoryCard = ({
  img,
  title,
  content,
  hoverImg,
  desc,
}: CategoryCardType) => {
  return (
    <motion.article
      className="relative roboto cursor-pointer"
      initial="initial"
      whileHover="hover"
    >
      <motion.article
        className="absolute flex flex-col gap-1
        top-30 left-5 z-20 items-center"
        variants={showVariants}
      >
        <h3
          className="text-neutral-100 text-2xl drop-shadow-lg font-semibold
          tracking-wide"
        >
          {title}
        </h3>
        <p className="text-sm text-neutral-200 tracking-wide text-center">
          {desc}
        </p>
      </motion.article>
      <Image src={img} alt="Town city image" className="rounded-2xl" />

      <motion.div className="absolute inset-0" variants={overlayVariants}>
        <div className="absolute inset-0 bg-black/15 z-20" />
        <Image
          src={hoverImg}
          fill
          alt="Office img"
          className="rounded-2xl z-10 brightness-80"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        variants={overlayVariants}
        className="absolute top-0 left-0 z-10 w-full h-full"
      ></motion.div>

      <motion.div
        className="absolute flex flex-col gap-1
        top-10 left-10"
        variants={hideVariants}
      >
        <h3 className="text-black font-bold">{title}</h3>
        <p className="text-black">{content} Properties</p>
      </motion.div>
    </motion.article>
  );
};

export default CategoryCard;
