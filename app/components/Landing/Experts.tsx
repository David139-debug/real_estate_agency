"use client";

import { motion } from "framer-motion";

import ExpertCard from "./Card/ExpertCard";
import expert1 from "@/public/john.png";
import expert2 from "@/public/thomas.png";
import expert3 from "@/public/tom.png";
import expert4 from "@/public/samuel.png";

const headingContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const headingItem = {
  hidden: {
    opacity: 0,
    y: 22,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const expertsContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.12,
    },
  },
};

const expertItem = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.98,
    clipPath: "inset(0 0 15% 0)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    clipPath: "inset(0 0 0% 0)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const Experts = () => {
  return (
    <main className="roboto bg-white px-46.25 py-30">
      <motion.article
        variants={headingContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.5,
        }}
        className="mb-10 flex flex-col items-center gap-3"
      >
        <motion.h2
          variants={headingItem}
          className="text-[40px] font-medium text-black"
        >
          Meet Our Team Of Experts
        </motion.h2>

        <motion.p variants={headingItem} className="text-[17px] text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </motion.p>
      </motion.article>

      <motion.article
        variants={expertsContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="flex flex-wrap justify-center gap-8"
      >
        <motion.div
          variants={expertItem}
          whileHover={{
            y: -6,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          }}
        >
          <ExpertCard img={expert1} name="John Powell" job="Service Support" />
        </motion.div>

        <motion.div
          variants={expertItem}
          whileHover={{
            y: -6,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          }}
        >
          <ExpertCard img={expert2} name="Thomas Powell" job="Marketing" />
        </motion.div>

        <motion.div
          variants={expertItem}
          whileHover={{
            y: -6,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          }}
        >
          <ExpertCard img={expert3} name="Tom Wilson" job="Designer" />
        </motion.div>

        <motion.div
          variants={expertItem}
          whileHover={{
            y: -6,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          }}
        >
          <ExpertCard img={expert4} name="Samuel Palmer" job="Marketing" />
        </motion.div>
      </motion.article>
    </main>
  );
};

export default Experts;
