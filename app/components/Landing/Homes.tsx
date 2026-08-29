import HomeCard from "./Card/HomeCard"
import home1 from "@/public/home1.png"

const Homes = () => {
  return (
    <main className="relative bg-[#F9F9F9] roboto flex flex-col gap-7 items-center
    text-center py-30">
        <div className="flex flex-col gap-3">
            <h2 className="text-black font-bold text-[40px]">Homes For You</h2>
            <p className="text-[17px] text-black">Based on your view history</p>
        </div>
        <div className="absolute left-39 bottom-90 bg-white
        border-2 border-[#e9e9e9] py-3 px-5 rounded-2xl
        cursor-pointer">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2_3720)">
                <path d="M3.98633 6.47461L9.44531 11.9336L8.91211 12.4922L2.89453 6.47461L8.91211 0.482422L9.44531 1.01562L3.98633 6.47461Z" fill="black"/>
                </g>
                <defs>
                <clipPath id="clip0_2_3720">
                <rect width="13" height="13" fill="white" transform="matrix(1 0 0 -1 0 13)"/>
                </clipPath>
                </defs>
            </svg>
        </div>
        <article className="flex flex-wrap items-center justify-center gap-5">
            <HomeCard 
                img={home1}
                name="Skyper Pool Apartment"
                address="1020 Test Ovo"
                price={280.000}
                beds={4}
                baths={2}
                sqft={450}
            />
            <HomeCard 
                img={home1}
                name="Skyper Pool Apartment"
                address="1020 Test Ovo"
                price={280.000}
                beds={4}
                baths={2}
                sqft={450}
            />
            <HomeCard 
                img={home1}
                name="Skyper Pool Apartment"
                address="1020 Test Ovo"
                price={280.000}
                beds={4}
                baths={2}
                sqft={450}
            />
        </article>
        <div className="absolute right-39 bottom-90 bg-white
        border-2 border-[#e9e9e9] py-3 px-5 rounded-2xl
        cursor-pointer">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2_3723)">
                <path d="M10.1055 6.47461L4.08789 12.4922L3.55469 11.9336L9.01367 6.47461L3.55469 1.01562L4.08789 0.482422L10.1055 6.47461Z" fill="black"/>
                </g>
                <defs>
                <clipPath id="clip0_2_3723">
                <rect width="13" height="13" fill="white" transform="matrix(1 0 0 -1 0 13)"/>
                </clipPath>
                </defs>
            </svg>
        </div>
    </main>
  )
}

export default Homes