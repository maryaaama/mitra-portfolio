"use client";
import { FaLaptopCode, FaPaintBrush, FaGlobe } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-10">
        
        {/* عکس */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="w-64 h-64 relative rounded-full overflow-hidden shadow-lg border-4 border-indigo-300">
            <Image
              src="/profile.jpg"
              alt="My Photo"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </motion.div>

        {/* متن و آیکون‌ها */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.h2
            className="text-4xl font-bold text-white font-hero mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {"About Me"}
          </motion.h2>

          <motion.p
            className="text-white text-lg leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {
              "I am a creative and detail-oriented front-end developer with a passion for clean UI, accessibility, and performance. I enjoy building beautiful web interfaces using React and Tailwind CSS."
            }
          </motion.p>

          {/* کارت‌های سرویس با ترنزیشن متفاوت */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: <FaLaptopCode className="text-indigo-600 text-4xl mx-auto mb-2" />,
                title: "Clean Code",
                motionFrom: { x: -50 },
              },
              {
                icon: <FaPaintBrush className="text-indigo-600 text-4xl mx-auto mb-2" />,
                title: "Creative Design",
                motionFrom: { y: 50 },
              },
              {
                icon: <FaGlobe className="text-indigo-600 text-4xl mx-auto mb-2" />,
                title: "Responsive Layout",
                motionFrom: { x: 50 },
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, ...item.motionFrom }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="bg-white p-4 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300"
              >
                {item.icon}
                <p className="text-sm text-gray-600 text-center">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
