"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import stars from "@/public/stars.png.png";
import ClientCard from "./Card/ClientCard";
import client1 from "@/public/client1.png";
import client2 from "@/public/client2.png";
import client3 from "@/public/client3.png";

const headerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const headerItem = {
  hidden: {
    opacity: 0,
    y: 25,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const statsContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.12,
    },
  },
};

const statItem = {
  hidden: {
    opacity: 0,
    y: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const cardsContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.12,
    },
  },
};

const cardItem = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.98,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const Testemonials = () => {
  return (
    <main
      className="roboto flex flex-col items-center gap-15 bg-[#f9f9f9]
      px-50 py-30 min-[1210px]:items-stretch"
    >
      <motion.article
        variants={headerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.4,
        }}
        className="mx-10 flex flex-col flex-wrap items-center justify-center
        gap-15 min-[1210px]:flex-row min-[1210px]:justify-between"
      >
        <motion.h2
          variants={headerItem}
          className="text-[40px] font-bold text-black"
        >
          What our customers are
          <br />
          saying us?
        </motion.h2>

        <motion.div variants={statsContainer} className="flex gap-15">
          <motion.div variants={statItem} className="flex flex-col gap-6">
            <motion.h3
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[26px] font-bold text-black"
            >
              10m+
            </motion.h3>

            <p className="text-[15px] text-black">Happy People</p>
          </motion.div>

          <motion.div variants={statItem} className="flex flex-col gap-6">
            <motion.h3
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[26px] font-bold text-black"
            >
              4.88
            </motion.h3>

            <p className="text-[15px] text-black">Overall rating</p>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
                x: -10,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Image src={stars} alt="Stars icons" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.article>

      <motion.article
        variants={cardsContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="flex flex-wrap items-center justify-center gap-10"
      >
        <motion.div
          variants={cardItem}
          whileHover={{
            y: -6,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          }}
        >
          <ClientCard
            img={client1}
            name="Cameron Williamson"
            job="Designer"
            text="Searches for multiplexes, property comparisons,
              and the loan estimator. Works great. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et
              dores."
          />
        </motion.div>

        <motion.div
          variants={cardItem}
          whileHover={{
            y: -6,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          }}
        >
          <ClientCard
            img={client2}
            name="Esther Howard"
            job="Marketing"
            text="Searches for multiplexes, property comparisons,
              and the loan estimator. Works great. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et
              dores."
          />
        </motion.div>

        <motion.div
          variants={cardItem}
          whileHover={{
            y: -6,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          }}
        >
          <ClientCard
            img={client3}
            name="Devon Lane"
            job="Developer"
            text="Searches for multiplexes, property comparisons,
              and the loan estimator. Works great. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et
              dores."
          />
        </motion.div>
      </motion.article>
    </main>
  );
};

export default Testemonials;
