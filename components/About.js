import { FaLaptopCode, FaPaintBrush, FaGlobe } from "react-icons/fa";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 ">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-10">
        
        {/* عکس */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-64 h-64 relative rounded-full overflow-hidden shadow-lg border-4 border-indigo-300">
            <Image
              src="/profile.jpg"
              alt="My Photo"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>

        {/* متن و آیکون‌ها */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-white font-hero mb-6">{"About Me"}</h2>
          <p className="text-white text-lg leading-relaxed mb-8">
            {"I am a creative and detail-oriented front-end developer with a passion for clean UI, accessibility, and performance. I enjoy building beautiful web interfaces using React and Tailwind CSS."}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition">
              <FaLaptopCode className="text-indigo-600 text-4xl mx-auto mb-2" />
              <p className="text-sm text-gray-600">{"Clean Code"}</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition">
              <FaPaintBrush className="text-indigo-600 text-4xl mx-auto mb-2" />
              <p className="text-sm text-gray-600">{"Creative Design"}</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition">
              <FaGlobe className="text-indigo-600 text-4xl mx-auto mb-2" />
              <p className="text-sm text-gray-600">{"Responsive Layout"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
