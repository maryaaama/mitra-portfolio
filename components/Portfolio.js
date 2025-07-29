"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center font-sans">
          My Portfolio
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              className="grid gap-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* 👇 دکمه See More / See Less */}
        {projects.length > 4 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 text-white border border-white rounded-full hover:bg-white hover:text-black transition duration-300"
            >
              {showAll ? "See Less" : "See More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
