"use client";

import HomeCard from "../Landing/Card/HomeCard";
import home1 from "@/public/home1.png";
import { useSearchParams } from "next/navigation";
import PropertyCard from "./Card/PropertyCard";

const Properties = () => {
  const created = useSearchParams().get("created");

  return (
    <main className="flex flex-col gap-6">
      <h2 className="text-2xl font-medium text-black">
        {" "}
        Results
        <span className="text-sm text-[#808080]"> in Sctotland</span>
      </h2>
      <section className="flex flex-wrap gap-6">
        <PropertyCard />
        <PropertyCard />
      </section>
    </main>
  );
};

export default Properties;
