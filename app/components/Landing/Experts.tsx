import ExpertCard from "./Card/ExpertCard";
import expert1 from "@/public/john.png";
import expert2 from "@/public/thomas.png";
import expert3 from "@/public/tom.png";
import expert4 from "@/public/samuel.png";

const Experts = () => {
  return (
    <main className="bg-white roboto px-46.25 py-30">
        <article className="flex flex-col gap-3 items-center mb-10">
            <h2 className="text-black text-[40px] font-medium">Meet Our Team Of Experts</h2>
            <p className="text-[17px] text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </article>

        <article className="flex gap-8 flex-wrap justify-center">
            <ExpertCard 
                img={expert1}
                name="John Powell"
                job="Service Support"
            />
            <ExpertCard 
                img={expert2}
                name="Thomas Powell"
                job="Marketing"
            />
            <ExpertCard 
                img={expert3}
                name="Tom Wilson"
                job="Designer"
            />
            <ExpertCard 
                img={expert4}
                name="Samuel Palmer"
                job="Marketing"
            />
        </article>
    </main>
  )
}

export default Experts