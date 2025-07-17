"use client";
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-lg">
      <img
        src={project.image}
        alt={project.title}
        className="h-auto max-w-full transition-transform duration-300 ease-in-out group-hover:scale-105 rounded-lg"
      />
    </a>
  );
};
export default ProjectCard;