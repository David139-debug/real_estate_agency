const SearchBar = () => {
  return (
    <main className="flex flex-col mt-10 items-center">
        <section className="flex">
        <div className="bg-[#1A1A1A] text-white roboto text-[17px]
        hover:bg-white hover:text-black cursor-pointer px-5 py-2 rounded-tl-2xl">All</div>
        <div className="bg-[#1A1A1A] text-white roboto text-[17px]
        hover:bg-white hover:text-black cursor-pointer px-5 py-2">Sale</div>
        <div className="bg-[#1A1A1A] text-white roboto text-[17px]
        hover:bg-white hover:text-black cursor-pointer px-5 py-2 rounded-tr-2xl">Rent</div>
        </section>
        <nav className="bg-white
    rounded-2xl border-none justify-center items-center 
    xl:px-4 py-3 px-1 sm:flex hidden">
        <div className="border-r border-[#e9e9e9]
        px-5 py-4 w-full">
            <label className="text-[#969696] block mb-1">Keyword</label>
            <input type="text" placeholder="Enter Keyword" className="text-black placeholder:text-black
                                                                     w-full lg:w-58.5 outline-none" />
        </div>
        <div className="xl:px-4 py-3 px-1 ml-5 relative w-full">
            <label className="text-[#969696] block">Type</label>
            <select className="appearance-none pr-10 
            outline-none bg-transparent w-full lg:w-58.5
            text-black">
                <option value="">All Type</option>
            </select>
            <svg className="absolute right-5 bottom-1/3" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_2_3992" fill="white">
                <path d="M0 0H8V5H0V0Z"/>
                </mask>
                <g clipPath="url(#paint0_diamond_2_3992_clip_path)" data-figma-skip-parse="true" mask="url(#path-1-inside-1_2_3992)"><g transform="matrix(0.004 0 0 0.005 4 0)"><rect x="0" y="0" width="2250" height="2000" fill="url(#paint0_diamond_2_3992)" opacity="1" shapeRendering="crispEdges"/><rect x="0" y="0" width="2250" height="2000" transform="scale(1 -1)" fill="url(#paint0_diamond_2_3992)" opacity="1" shapeRendering="crispEdges"/><rect x="0" y="0" width="2250" height="2000" transform="scale(-1 1)" fill="url(#paint0_diamond_2_3992)" opacity="1" shapeRendering="crispEdges"/><rect x="0" y="0" width="2250" height="2000" transform="scale(-1)" fill="url(#paint0_diamond_2_3992)" opacity="1" shapeRendering="crispEdges"/></g></g><path d="M0 0V-5H-4V0H0ZM8 0H12V-5H8V0ZM0 5H8V-5H0V5ZM4 0V5H12V0H4ZM4 5V0H-4V5H4Z" data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_DIAMOND&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.10196078568696976,&#34;g&#34;:0.10196078568696976,&#34;b&#34;:0.10196078568696976,&#34;a&#34;:1.0},&#34;position&#34;:0.99999988079071045},{&#34;color&#34;:{&#34;r&#34;:0.0,&#34;g&#34;:0.0,&#34;b&#34;:0.0,&#34;a&#34;:0.0},&#34;position&#34;:1.0}],&#34;stopsVar&#34;:[],&#34;transform&#34;:{&#34;m00&#34;:8.0,&#34;m01&#34;:0.0,&#34;m02&#34;:0.0,&#34;m10&#34;:0.0,&#34;m11&#34;:10.0,&#34;m12&#34;:-5.0},&#34;opacity&#34;:1.0,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}" mask="url(#path-1-inside-1_2_3992)"/>
                <defs>
                <clipPath id="paint0_diamond_2_3992_clip_path"><path d="M0 0V-5H-4V0H0ZM8 0H12V-5H8V0ZM0 5H8V-5H0V5ZM4 0V5H12V0H4ZM4 5V0H-4V5H4Z" mask="url(#path-1-inside-1_2_3992)"/></clipPath><linearGradient id="paint0_diamond_2_3992" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
                <stop offset="1" stopColor="#1A1A1A"/>
                <stop offset="1" stopOpacity="0"/>
                </linearGradient>
                </defs>
            </svg>
        </div>
        <div className="flex gap-5 pr-5 ml-10">
            <button className="text-black font-medium border border-[#e9e9e9]
            flex gap-2.5 items-center text-[15px] px-6 py-4 rounded-2xl roboto">
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.68 2.95639e-05C10 2.95639e-05 9.4 0.22003 8.88 0.660029C8.36 1.10003 8.04 1.64003 7.92 2.28003H0.54C0.38 2.28003 0.25 2.33003 0.15 2.43003C0.05 2.53003 0 2.66003 0 2.82003C0 2.98003 0.05 3.12003 0.15 3.24003C0.25 3.36003 0.38 3.42003 0.54 3.42003H7.92C8.04 4.06003 8.36 4.59003 8.88 5.01003C9.4 5.43003 10 5.64003 10.68 5.64003C11.36 5.64003 11.95 5.43003 12.45 5.01003C12.95 4.59003 13.28 4.06003 13.44 3.42003H15.18C15.34 3.42003 15.47 3.36003 15.57 3.24003C15.67 3.12003 15.72 2.98003 15.72 2.82003C15.72 2.66003 15.67 2.53003 15.57 2.43003C15.47 2.33003 15.34 2.28003 15.18 2.28003H13.44C13.28 1.64003 12.95 1.10003 12.45 0.660029C11.95 0.22003 11.36 2.95639e-05 10.68 2.95639e-05ZM10.68 1.14003C11.16 1.14003 11.56 1.31003 11.88 1.65003C12.2 1.99003 12.36 2.39003 12.36 2.85003C12.36 3.31003 12.2 3.70003 11.88 4.02003C11.56 4.34003 11.16 4.50003 10.68 4.50003C10.2 4.50003 9.8 4.34003 9.48 4.02003C9.16 3.70003 9 3.31003 9 2.85003C9 2.39003 9.16 1.99003 9.48 1.65003C9.8 1.31003 10.2 1.14003 10.68 1.14003ZM5.04 5.64003C4.36 5.64003 3.77 5.85003 3.27 6.27003C2.77 6.69003 2.44 7.24003 2.28 7.92003H0.54C0.38 7.92003 0.25 7.97003 0.15 8.07003C0.05 8.17003 0 8.30003 0 8.46003C0 8.62003 0.05 8.75003 0.15 8.85003C0.25 8.95003 0.38 9.00003 0.54 9.00003H2.28C2.44 9.68003 2.77 10.23 3.27 10.65C3.77 11.07 4.36 11.28 5.04 11.28C5.72 11.28 6.32 11.07 6.84 10.65C7.36 10.23 7.68 9.68003 7.8 9.00003H15.18C15.34 9.00003 15.47 8.95003 15.57 8.85003C15.67 8.75003 15.72 8.62003 15.72 8.46003C15.72 8.30003 15.67 8.17003 15.57 8.07003C15.47 7.97003 15.34 7.92003 15.18 7.92003H7.8C7.68 7.24003 7.36 6.69003 6.84 6.27003C6.32 5.85003 5.72 5.64003 5.04 5.64003ZM5.04 6.78003C5.52 6.78003 5.92 6.94003 6.24 7.26003C6.56 7.58003 6.72 7.98003 6.72 8.46003C6.72 8.94003 6.56 9.34003 6.24 9.66003C5.92 9.98003 5.52 10.14 5.04 10.14C4.56 10.14 4.16 9.98003 3.84 9.66003C3.52 9.34003 3.36 8.94003 3.36 8.46003C3.36 7.98003 3.52 7.58003 3.84 7.26003C4.16 6.94003 4.56 6.78003 5.04 6.78003Z" fill="black"/>
                </svg>
                Filter
            </button>
            <button className="bg-[#1A1A1A] px-6 py-4 rounded-2xl text-white">Search</button>
        </div>
    </nav>
    </main>
  )
}

export default SearchBar