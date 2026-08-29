import Image from "next/image"
import living from "@/public/living.png";

const Discover = () => {
  return (
    <main className="bg-white roboto py-46.25 px-30">
        <section className="bg-[#f9f9f9] flex justify-center xl:justify-between items-center">
            <article className="flex flex-col gap-5 px-21.5 py-37.5
            text-left items-start">
                <h3 className="text-black font-medium text-[40px]">Discover Our Finest<br/> Selection</h3>
                <p className="text-black text-[16px]">
                    Pellentesque egestas elementum egestas faucibus sem. Velit<br/>
                    nunc egestas ut morbi. Leo diam diam.
                </p>
                <button className="bg-black text-white rounded-2xl
                flex gap-5 px-8 py-5 items-center">
                    Discover
                    <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_2_3916)">
                        <path d="M0.877444 5.81839H12.8881L8.28902 1.43915C8.0482 1.20983 8.03887 0.828845 8.26825 0.588095C8.49733 0.347646 8.87842 0.338016 9.11954 0.567331L14.3719 5.56891C14.5991 5.79642 14.7247 6.09856 14.7247 6.42027C14.7247 6.74167 14.5991 7.04411 14.3613 7.28154L9.11925 12.2729C9.00275 12.3839 8.85344 12.439 8.70413 12.439C8.54519 12.439 8.38625 12.3764 8.26795 12.2522C8.03857 12.0114 8.0479 11.6307 8.28872 11.4014L12.9071 7.02214H0.877444C0.54511 7.02214 0.275391 6.7525 0.275391 6.42027C0.275391 6.08803 0.54511 5.81839 0.877444 5.81839Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_2_3916">
                        <rect width="15" height="12.84" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </button>
            </article>

            <Image 
                src={living}
                alt="Living room"
                className="xl:block hidden"
            />
        </section>
    </main>
  )
}

export default Discover