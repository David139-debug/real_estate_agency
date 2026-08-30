"use client";

import Image, { StaticImageData } from "next/image";
import {
  Bath,
  BedDouble,
  Heart,
  MapPin,
  MoveUpRight,
  Ruler,
} from "lucide-react";
import { motion } from "framer-motion";

type HomeCardProps = {
  img: StaticImageData;
  name: string;
  address: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
};

const HomeCard = ({
  img,
  name,
  address,
  price,
  beds,
  baths,
  sqft,
}: HomeCardProps) => {
  return (
    <motion.article
      variants={{
        hidden: {
          opacity: 0,
          y: 35,
          filter: "blur(5px)",
        },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 0.6,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      whileHover={{ y: -6 }}
      className="group cursor-pointer overflow-hidden rounded-[22px] border border-black/[0.08] bg-white text-left shadow-[0_8px_35px_rgba(0,0,0,0.04)] transition-[border-color,box-shadow] duration-500 hover:border-black/15 hover:shadow-[0_20px_55px_rgba(0,0,0,0.10)]"
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <Image
          src={img}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5" />

        <span className="absolute left-4 top-4 rounded-full bg-[#1f4b43] px-3 py-2 text-xs font-semibold tracking-wide text-white">
          FOR SALE
        </span>

        <button
          type="button"
          aria-label={`Save ${name}`}
          className="absolute cursor-pointer right-4 top-4 grid size-10 place-items-center rounded-full bg-white/95 text-zinc-500 shadow-sm backdrop-blur transition hover:scale-105 hover:text-red-500"
        >
          <Heart size={19} />
        </button>

        <span className="absolute bottom-4 right-4 rounded-full bg-black/55 px-3 py-1.5 text-xs text-white backdrop-blur">
          12 photos
        </span>
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold tracking-[-0.02em] text-zinc-950">
              {name}
            </h3>

            <div className="mt-2 flex items-center gap-1.5 text-sm text-zinc-500">
              <MapPin size={15} />
              <span>{address}</span>
            </div>
          </div>

          <p className="shrink-0 text-lg font-semibold text-[#1f4b43]">
            ${price.toLocaleString("en-US")}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 border-y border-black/[0.07] py-4 text-sm text-zinc-600">
          <span className="flex items-center gap-2">
            <BedDouble size={17} />
            {beds} beds
          </span>

          <span className="flex items-center gap-2">
            <Bath size={17} />
            {baths} baths
          </span>

          <span className="flex items-center gap-2">
            <Ruler size={17} />
            {sqft} sqft
          </span>
        </div>

        <button className="mt-5 cursor-pointer flex w-full items-center justify-between text-sm font-semibold text-zinc-900">
          View property
          <MoveUpRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </button>
      </div>
    </motion.article>
  );
};

export default HomeCard;
