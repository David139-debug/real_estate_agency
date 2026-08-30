import img from "@/public/luxury.png";
import Image from "next/image";
import total from "@/public/total.png";

const Luxury = () => {
  return (
    <main
      className="bg-white roboto flex gap-15 py-30 justify-center 
    items-center sm:flex-row flex-col lg:px-50 px-10"
    >
      <article className="relative">
        <Image
          src={total}
          alt="Total clients"
          className="absolute top-6 left-5"
        />
        <Image src={img} alt="Luxury image" />
      </article>

      <article className="flex flex-col gap-8 items-start text-left">
        <h2 className="text-black font-medium text-[40px] text-left">
          Local expertise for
          <br /> luxury homes
        </h2>
        <p className="text-black max-w-150.75">
          Pellentesque egestas elementum egestas faucibus sem. Velit nunc
          egestas ut morbi. Leo diam diam nibh eget fermentum massa pretium. Mi
          mauris nulla ac dictum ut mauris non.
        </p>
        <button
          className="bg-black text-white rounded-xl flex
            items-center gap-5 py-3 px-5 cursor-pointer"
        >
          Learn More
          <svg
            width="15"
            height="13"
            viewBox="0 0 15 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2_3732)">
              <path
                d="M0.877444 5.81815H12.8881L8.28902 1.43891C8.0482 1.20959 8.03887 0.828601 8.26825 0.587851C8.49733 0.347402 8.87842 0.337772 9.11954 0.567087L14.3719 5.56867C14.5991 5.79617 14.7247 6.09832 14.7247 6.42003C14.7247 6.74142 14.5991 7.04387 14.3613 7.2813L9.11925 12.2727C9.00275 12.3836 8.85344 12.4388 8.70413 12.4388C8.54519 12.4388 8.38625 12.3762 8.26795 12.2519C8.03857 12.0112 8.0479 11.6305 8.28872 11.4012L12.9071 7.0219H0.877444C0.54511 7.0219 0.275391 6.75226 0.275391 6.42003C0.275391 6.08779 0.54511 5.81815 0.877444 5.81815Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_3732">
                <rect width="15" height="12.84" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </article>
    </main>
  );
};

export default Luxury;
