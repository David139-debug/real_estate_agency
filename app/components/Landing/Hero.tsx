"use client";

import Image from "next/image";
import bg from "@/public/hero_bg.webp";
import SearchBar from "./SearchBar/SearchBar";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Hero = () => {
  const router = useRouter();
  const MotionImage = motion(Image);

  return (
    <main className="relative flex flex-col items-center min-h-screen justify-center">
      <MotionImage
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: { duration: 1 },
        }}
        src={bg}
        alt="Hero background"
        fill
        priority
        className="object-cover -z-10 opacity-70 inset-0 bg-black/25"
      />
      <div className="inset-0 bg-black/25 absolute" />
      <article
        className="roboto flex flex-col gap-5
      text-center items-center z-20"
      >
        <motion.button
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            transition: {
              delay: 1,
              duration: 1,
            },
          }}
          className="border border-white text-white
        px-9 py-3 rounded-4xl cursor-pointer hover:bg-[#ebebeb]
        hover:text-black transition"
          onClick={() => router.push("/properties")}
        >
          LET US GUIDE YOUR HOME
        </motion.button>
        <motion.h1
          initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0)",
            transition: {
              duration: 0.8,
              delay: 0.5,
            },
          }}
          viewport={{ once: true }}
          className="text-6xl text-white"
        >
          Find a place that feels like home.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            transition: {
              delay: 1.5,
              duration: 1,
            },
          }}
          className="text-white text-[15px]"
        >
          Discover a curated collection of properties designed for modern
          living.
        </motion.p>
      </article>
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0)",
          transition: {
            duration: 0.8,
            delay: 0.5,
          },
        }}
        viewport={{ once: true }}
        className="z-20"
      >
        <SearchBar />
      </motion.div>

      <motion.section
        initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
        whileInView={{
          opacity: 1,
          clipPath: "inset(0 0% 0 0)",
          transition: {
            duration: 1,
            delay: 1,
          },
        }}
        viewport={{ once: true }}
        className="lg:block hidden z-20"
      >
        <article className="flex gap-30 absolute bottom-2 right-55 z-10">
          <div className="flex flex-col">
            <h3 className="text-3xl text-black">680</h3>
            <p className="text-[15px] text-black">Awward Winning</p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-3xl text-black">8K+</h3>
            <p className="text-[15px] text-black">Happy Customer</p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-3xl text-black">500+</h3>
            <p className="text-[15px] text-black">Property Ready</p>
          </div>
        </article>
        <div className="absolute bottom-0 right-0 translate-y-4">
          <svg
            width="900"
            height="93"
            viewBox="0 0 900 93"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect width="900" height="92.5" fill="url(#pattern0_2_3967)" />
            <defs>
              <pattern
                id="pattern0_2_3967"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_2_3967"
                  transform="scale(0.00111111 0.0108108)"
                />
              </pattern>
              <image
                id="image0_2_3967"
                width="900"
                height="80"
                preserveAspectRatio="none"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA4QAAABQCAYAAABBCbufAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANySURBVHgB7d2BbdNAFMfhKxN0AzJCR8gGMAIbwAaMABswAiMwAiOFc4iKKGlIYvv87t33SZYrdYK/Xn/uQ+Gsw+HwVF/7+rytz64+T6df7QoAAEACD4WjOgAf6+tDfd6V3+PvsQAAACQ29CB8MQL3BQAAYCBDDsLTEPxYn0/FJRAAABjUUIPQEAQAAPhjmEFYx+C+vr4VH4UBAAA4elOSm66C9flSf/xRjEEAAIBnqS+EdQjuiiEIAABwVtoL4elPRH8WYxAAAOCslIOwjsHpwzHTZdCHYwAAAF6RbhDWMfi5vr4WAAAALkrVEJ4ug8YgAADAFdIMwjoG39fX9wIAAMBVUgzC09dEpw/IaAYBAACu1P0gnP7PYPE1UQAAgJtl+KjM9BGZXQEAAOAmXV8IfUQGAADgft0OQt0gAADAPF0OQt0gAADAfL02hLpBAACAmbq7EOoGAQAAltHVINQNAgAALKebQagbBAAAWFZPDaFuEAAAYEFdXAh1gwAAAMsLPwh1gwAAAOsIPQh1gwAAAOuJ3hDqBgEAAFYS9kKoGwQAAFhXyEGoGwQAAFhfuEGoGwQAAGgjYkOoGwQAAGgg1IVQNwgAANBOmEGoGwQAAGgrxCDUDQIAALQXpSHUDQIAADS2+YVQNwgAALCNTQehbhAAAGA7mw1C3SAAAMC2tmwIdYMAAAAb2uRCqBsEAADYXvNBqBsEAACIoekg1A0CAADE0boh1A0CAAAE0exCqBsEAACIpckg1A0CAADEs/og1A0CAADE1KIh1A0CAAAEtOqFUDcIAAAQ12qDUDcIAAAQ2yqDUDcIAAAQ31oNoW4QAAAguMUvhLpBAACAPiw6CHWDAAAA/VhsEOoGAQAA+rJkQ6gbBAAA6MgiF0LdIAAAQH9mD0LdIAAAQJ9mDULdIAAAQL/mNoS6QQAAgE7dfSHUDQIAAPTtrkGoGwQAAOjfzYNQNwgAAJDDPQ2hbhAAACCBmy6EukEAAIA8rh6EukEAAIBcrhqEukEAAIB8rm0IdYMAAADJ/PdCqBsEAADI6eIg1A0CAADk9eog1A0CAADkdqkh1A0CAAAkdvZCqBsEAADI759BqBsEAAAYw1+DUDcIAAAwjpcNoW4QAABgEM8XQt0gAADAWI6DUDcIAAAwngfdIAAAwJimhlA3CAAAMKBftxUKA9UyYeQAAAAASUVORK5CYII="
              />
            </defs>
          </svg>
        </div>
      </motion.section>
    </main>
  );
};

export default Hero;
