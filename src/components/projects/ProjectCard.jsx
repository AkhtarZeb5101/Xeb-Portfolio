import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { siGithub } from 'simple-icons/icons';

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className="mb-15">
      <h2 className="text-4xl font-bold mb-6 text-green-400">
        {project.title}
      </h2>
      
      <div className={`flex flex-col lg:flex-row gap-8 ${!isEven && 'lg:flex-row-reverse'}`}>
        <div className="lg:w-1/2">
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-green-400">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="lg:w-1/2 space-y-6">
          <p className="text-gray-300 leading-relaxed">
            {project.description}
          </p>
          
          <div>
            <h4 className="text-sm font-semibold text-green-400 mb-2">Key Features:</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 text-green-400">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-green-400 mb-2">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span 
                  key={i} 
                  className="text-xs bg-gray-800 text-green-400 px-2 py-1 rounded border border-green-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4 pt-4">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-green-400 text-gray-900 rounded-md hover:bg-green-500 hover:scale-105 transition-transform"
            >
              View Live
            </a>
            <a
              href={project.github}
              target="_blank"
//               rel="noopener noreferrer"
//               className="px-6 py-2 border border-green-400 text-green-400 rounded-md hover:bg-green-400 hover:text-gray-900 hover:scale-105 transition-transform"
            >

            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
