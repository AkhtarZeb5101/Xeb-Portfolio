import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';

const ProjectList = () => {
  return (
    <section className="min-h-screen bg-gray-800/50">
      <h1 className="text-4xl font-bold text-center pt-20">
        Featured <span className="text-green-400">Projects</span>
      </h1>
      <div className="max-w-7xl mx-auto px-4 py-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;