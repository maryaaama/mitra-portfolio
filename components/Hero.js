import Image from "next/image";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative text-white overflow-hidden pt-28"> {/* فاصله بیشتر از بالا */}
      <div className="absolute inset-0 z-0 animate-stars bg-stars"></div>

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16">
        {/* متن سمت چپ */}
        <div className="max-w-xl space-y-4 md:space-y-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight font-hero tracking-tight">
            Hi, I am Maryam <br />
            <span className="text-indigo-400">A Front-End Developer</span>
          </h1>

          <p className="text-base md:text-lg leading-relaxed font-light tracking-wide font-sans">
            I build modern and responsive websites with beautiful design and performance in mind
          </p>

          <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full shadow-md hover:shadow-xl transition duration-300 transform hover:translate-y-[-2px] active:translate-y-[1px]">
            View My Work
          </button>

          <div className="flex gap-4 text-3xl text-white drop-shadow mt-4">
            <FaReact className="hover:scale-125 transition duration-300" />
            <FaHtml5 className="hover:scale-125 transition duration-300" />
            <FaCss3Alt className="hover:scale-125 transition duration-300" />
          </div>
        </div>

        {/* عکس سمت راست با ترنزیشن */}
        <div className="flex-shrink-0 group transition-all duration-700 ease-in-out">
          <Image
            src="/hero.jpg"
            alt="Hero Image"
            width={320}
            height={320}
            className="rounded-xl shadow-2xl transform transition duration-500 group-hover:scale-105 group-hover:rotate-1"
            priority
          />
        </div>
      </div>
    </section>
  );
}
