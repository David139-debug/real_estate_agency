"use client";

import CategoryCard from "./Card/CategoryCard";
import town from "@/public/town.png";
import villa from "@/public/villa.png";
import apartment from "@/public/apartment.png";
import single from "@/public/single.png";
import office from "@/public/office.png";
import townInt from "@/public/townInt.webp";
import villaInt from "@/public/villaInt.jpg";
import appartmentInt from "@/public/appartmentInt.jpg";
import singleInt from "@/public/singleInt.jpg";
import officeInt from "@/public/officeInt.jpg";
import { motion } from "framer-motion";

const Categories = () => {
  return (
    <main
      className="roboto bg-white flex items-center
    justify-center flex-col gap-10 py-24"
    >
      <article className="flex flex-col gap-2 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 0.5,
            },
          }}
          viewport={{ once: true }}
          className="text-[40px] text-black"
        >
          Featured Categories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1,
              delay: 1,
            },
          }}
          viewport={{ once: true }}
          className="text-[17motion.px] text-black"
        >
          Find the right space for your lifestyle.
        </motion.p>
      </article>

      <section className="flex flex-wrap items-center justify-center gap-10">
        <CategoryCard
          img={town}
          title="Townhouses"
          content="2"
          hoverImg={townInt}
          desc="Perfectly balancing privacy and urban life."
        />
        <CategoryCard
          img={villa}
          title="Villas"
          content="10"
          hoverImg={villaInt}
          desc="A blend of luxury and functionality."
        />
        <CategoryCard
          img={apartment}
          title="Apartments"
          content="3"
          hoverImg={appartmentInt}
          desc="A blend of sophistication and functionality."
        />
        <CategoryCard
          img={single}
          title="Family Homes"
          content="5"
          hoverImg={singleInt}
          desc="A perfect family retreat with spacious living areas."
        />
        <CategoryCard
          img={office}
          title="Commercial"
          content="3"
          hoverImg={officeInt}
          desc="Innovative design for modern business needs."
        />
      </section>
    </main>
  );
};

export default Categories;
