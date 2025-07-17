"use client";
import React from "react";
import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const Portfolio = () => {
  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center font-sans">
          My Portfolio
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="grid gap-4">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
