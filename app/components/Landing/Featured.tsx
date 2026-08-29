import FeaturedCard from "./Card/FeaturedCard"
import home1 from "@/public/home1.png";

const Featured = () => {
  return (
    <main className="relative bg-[#F9F9F9] roboto flex flex-col gap-7 items-center
    text-center py-30 px-20">
        <div className="flex flex-col gap-3">
            <h2 className="text-black font-bold text-[40px]">Homes For You</h2>
            <p className="text-[17px] text-black">Based on your view history</p>
        </div>
        <section className="flex flex-col gap-10">
            <article className="flex flex-wrap items-center justify-center gap-5">
            <FeaturedCard 
                img={home1}
                name="Skyper Pool Apartment"
                address="1020 Test Ovo"
                price={280.000}
                beds={4}
                baths={2}
                sqft={450}
            />
            <FeaturedCard 
                img={home1}
                name="Skyper Pool Apartment"
                address="1020 Test Ovo"
                price={280.000}
                beds={4}
                baths={2}
                sqft={450}
            />
            <FeaturedCard 
                img={home1}
                name="Skyper Pool Apartment"
                address="1020 Test Ovo"
                price={280.000}
                beds={4}
                baths={2}
                sqft={450}
            />
            <FeaturedCard 
                img={home1}
                name="Skyper Pool Apartment"
                address="1020 Test Ovo"
                price={280.000}
                beds={4}
                baths={2}
                sqft={450}
            />
        </article>
        <article className="flex gap-10 justify-center">
            <div className="bg-[#d0d3d3] rounded-full w-2.5 h-2.5
            cursor-pointer"></div>
            <div className="bg-[#d0d3d3] rounded-full w-2.5 h-2.5
            cursor-pointer"></div>
            <div className="bg-[#d0d3d3] rounded-full w-2.5 h-2.5
            cursor-pointer"></div>
            <div className="bg-[#d0d3d3] rounded-full w-2.5 h-2.5
            cursor-pointer"></div>
        </article>
        </section>
    </main>
  )
}

export default Featured