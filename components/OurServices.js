"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaPaintBrush, FaRocket } from "react-icons/fa";

const services = [
  {
    icon: <FaCode size={40} className="text-blue-500" />,
    title: "Web Development",
    desc: "Modern websites built with the latest technologies for speed and performance.",
  },
  {
    icon: <FaMobileAlt size={40} className="text-blue-500" />,
    title: "Responsive Design",
    desc: "Fully responsive layouts that look perfect on all devices.",
  },
  {
    icon: <FaPaintBrush size={40} className="text-blue-500" />,
    title: "UI/UX Design",
    desc: "Beautiful and user-friendly interface designs tailored to your audience.",
  },
  {
    icon: <FaRocket size={40} className="text-blue-500" />,
    title: "SEO Optimization",
    desc: "Improving visibility and ranking of your website on search engines.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const OurServices = () => {
  return (
    <section className="py-16  dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white dark:text-white font-sans">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white group-hover:text-blue-500 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
