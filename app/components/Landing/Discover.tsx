"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import living from "@/public/living.png";

const contentContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.12,
    },
  },
};

const contentItem = {
  hidden: {
    opacity: 0,
    x: -25,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const Discover = () => {
  return (
    <main className="roboto bg-white px-30 py-46.25">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.25,
        }}
        className="flex items-center justify-center overflow-hidden bg-[#f9f9f9] xl:justify-between"
      >
        <motion.article
          variants={contentContainer}
          className="flex flex-col items-start gap-5 px-21.5 py-37.5 text-left"
        >
          <motion.h3
            variants={contentItem}
            className="text-[40px] font-medium text-black"
          >
            Discover Our Finest
            <br />
            Selection
          </motion.h3>

          <motion.p variants={contentItem} className="text-[16px] text-black">
            Pellentesque egestas elementum egestas faucibus sem. Velit
            <br />
            nunc egestas ut morbi. Leo diam diam.
          </motion.p>

          <motion.button
            variants={contentItem}
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="group flex items-center gap-5 rounded-2xl bg-black px-8 py-5 text-white"
          >
            Discover
            <motion.svg
              width="15"
              height="13"
              viewBox="0 0 15 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <g clipPath="url(#clip0_2_3916)">
                <path
                  d="M0.877444 5.81839H12.8881L8.28902 1.43915C8.0482 1.20983 8.03887 0.828845 8.26825 0.588095C8.49733 0.347646 8.87842 0.338016 9.11954 0.567331L14.3719 5.56891C14.5991 5.79642 14.7247 6.09856 14.7247 6.42027C14.7247 6.74167 14.5991 7.04411 14.3613 7.28154L9.11925 12.2729C9.00275 12.3839 8.85344 12.439 8.70413 12.439C8.54519 12.439 8.38625 12.3764 8.26795 12.2522C8.03857 12.0114 8.0479 11.6307 8.28872 11.4014L12.9071 7.02214H0.877444C0.54511 7.02214 0.275391 6.7525 0.275391 6.42027C0.275391 6.08803 0.54511 5.81839 0.877444 5.81839Z"
                  fill="white"
                />
              </g>

              <defs>
                <clipPath id="clip0_2_3916">
                  <rect width="15" height="12.84" fill="white" />
                </clipPath>
              </defs>
            </motion.svg>
          </motion.button>
        </motion.article>

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              clipPath: "inset(0 0 0 100%)",
            },
            visible: {
              opacity: 1,
              clipPath: "inset(0 0 0 0%)",
              transition: {
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className="hidden self-stretch overflow-hidden xl:block"
        >
          <motion.div
            variants={{
              hidden: {
                scale: 1.08,
              },
              visible: {
                scale: 1,
                transition: {
                  duration: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            className="h-full"
          >
            <Image
              src={living}
              alt="Living room"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default Discover;
