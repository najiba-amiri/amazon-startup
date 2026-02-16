import React from "react";

type Project = {
  id: number;
  title: string;
  author: string;
  description: string;
};

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Top yellow section */}
      <div className="bg-yellow-400 h-20 w-full" />

      {/* Card body */}
      <div
        className="p-4 text-right"
        dir="rtl"
      >
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {project.title}
        </h3>

        <p className="text-sm text-gray-500 mb-3">
          {project.author}
        </p>

        <p className="text-sm text-gray-700 leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;