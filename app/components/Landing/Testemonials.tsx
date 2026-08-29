import Image from "next/image";
import stars from "@/public/stars.png.png";
import ClientCard from "./Card/ClientCard";
import client1 from "@/public/client1.png";
import client2 from "@/public/client2.png";
import client3 from "@/public/client3.png";

const Testemonials = () => {
  return (
    <main className="bg-[#f9f9f9] items-center py-30 px-50 roboto flex flex-col 
    gap-15 min-[1210px]:items-stretch">
        <article className="flex flex-col justify-center items-center mx-10
        flex-wrap gap-15 min-[1210px]:flex-row min-[1210px]:justify-between">
            <h2 className="text-black text-[40px] font-bold">What our customers are<br/> saying us?</h2>
            <div className="flex gap-15">
                <div className="flex flex-col gap-6">
                    <h3 className="text-black text-[26px] font-bold">10m+</h3>
                    <p className="text-black text-[15px]">Happy People</p>
                </div>
                <div className="flex flex-col gap-6">
                    <h3 className="text-black text-[26px] font-bold">4.88</h3>
                    <p className="text-black text-[15px]">Overall rating</p>
                    <Image 
                        src={stars}
                        alt="Stars icons"
                    />
                </div>
            </div>
        </article>

        <article className="flex gap-10 flex-wrap items-center justify-center">
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
        </article>
    </main>
  )
}

export default Testemonials