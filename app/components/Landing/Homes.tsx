"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import HomeCard from "./Card/HomeCard";
import home1 from "@/public/home1.png";

const homes = [
  {
    img: home1,
    name: "Modern Villa Kostrena",
    address: "Kostrena, Croatia",
    price: 680000,
    beds: 4,
    baths: 3,
    sqft: 2260,
  },
  {
    img: home1,
    name: "Seaside Apartment",
    address: "Opatija, Croatia",
    price: 420000,
    beds: 2,
    baths: 2,
    sqft: 1033,
  },
  {
    img: home1,
    name: "Stone House Istria",
    address: "Rovinj, Croatia",
    price: 545000,
    beds: 3,
    baths: 2,
    sqft: 1776,
  },
];

const Homes = () => {
  return (
    <main className="bg-[#f8f8f6] py-24 font-sans lg:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="text-3xl font-semibold tracking-[-0.035em] text-zinc-950 sm:text-4xl">
              Featured Properties
            </h2>

            <p className="mt-3 text-base text-zinc-500">
              Explore our latest homes for sale and rent.
            </p>
          </motion.div>

          <div className="hidden items-center gap-3 sm:flex">
            <button
              type="button"
              aria-label="Previous properties"
              className="grid size-11 place-items-center rounded-full border border-black/10 bg-white transition hover:border-black/25 hover:bg-zinc-950 hover:text-white"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              type="button"
              aria-label="Next properties"
              className="grid size-11 place-items-center rounded-full border border-black/10 bg-white transition hover:border-black/25 hover:bg-zinc-950 hover:text-white"
            >
              <ArrowRight size={18} />
            </button>

            <button className="ml-3 text-sm font-semibold text-zinc-900 underline-offset-4 hover:underline">
              View all properties
            </button>
          </div>
        </div>

        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: 0.15,
                staggerChildren: 0.12,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {homes.map((home) => (
            <HomeCard key={home.name} {...home} />
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default Homes;
