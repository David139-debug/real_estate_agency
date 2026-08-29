import CategoryCard from "./Card/CategoryCard"
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

const Categories = () => {
  return (
    <main className="roboto bg-white flex items-center
    justify-center flex-col gap-10 py-30">
        <article className="flex flex-col gap-2 text-center">
            <h2 className="text-[40px] text-black">Featured Categories</h2>
            <p className="text-[17px] text-black">Lorem ipsum dolor sit amet</p>
        </article>

        <section className="flex flex-wrap items-center justify-center gap-10">
            <CategoryCard 
            img={town} 
            title="Town House"
            content="2"
            hoverImg={townInt}
            desc="Perfectly balancing privacy and urban life."
            />
            <CategoryCard 
            img={villa} 
            title="Modern Villa"
            content="10"
            hoverImg={villaInt}
            desc="A blend of luxury and functionality."
             />
            <CategoryCard 
            img={apartment} 
            title="Apartment"
            content="3"
            hoverImg={appartmentInt}
            desc="A blend of sophistication and functionality."
             />
            <CategoryCard 
            img={single}
            title="Single Family"
            content="5"
            hoverImg={singleInt}
            desc="A perfect family retreat with spacious living areas."
             />
            <CategoryCard 
            img={office} 
            title="Office"
            content="3"
            hoverImg={officeInt}
            desc="Innovative design for modern business needs."
             />
        </section>
    </main>
  )
}

export default Categories