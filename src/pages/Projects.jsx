import React from 'react';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-10">
          <h1 className="text-4xl font-bold text-left animate-fade-in">
            My <span className="text-green-400 inline-block hover:scale-105 transition-transform duration-300">Projects</span>
          </h1>
          <p className="text-xl text-gray-400">Explore my latest work and technical achievements</p>
        </div>

        {/* Project Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Header */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-100 group-hover:text-green-400 transition-colors duration-300">
                  {project.title}
                </h2>
                <p className="mt-4 text-gray-400 text-lg leading-relaxed">{project.description}</p>
              </div>

              {/* Flexible Container */}
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="relative">
                  <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-800/50">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Content Container */}
                <div className="space-y-6">
                  {/* Features Section */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-green-400 flex items-center gap-2">
                      <span className="w-8 h-[2px] bg-green-400"/>
                      Key Features
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {project.features.map((feature, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-center gap-3 group/item"
                        >
                          <span className="text-green-400 transform group-hover/item:translate-x-1 transition-transform duration-300">→</span>
                          <span className="text-gray-300 group-hover/item:text-green-400 transition-colors duration-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-green-400 flex items-center gap-2">
                      <span className="w-8 h-[2px] bg-green-400"/>
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-lg text-sm font-medium
                          hover:bg-green-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-8 pt-4">
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-all duration-300 group/link"
                    >
                      <span className="text-lg font-medium">View Live Demo</span>
                      <span className="transform group-hover/link:translate-x-2 transition-transform duration-300">→</span>
                    </a>
                     <a
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 text-gray-400 hover:text-green-400 transition-all duration-300 group/link"
                    >
                      <span className="text-lg font-medium"></span>
                      <span className="transform group-hover/link:translate-x-2 transition-transform duration-300"></span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Divider Line */}
              {index !== projects.length - 1 && (
                <div className="mt-16 border-t border-gray-800" />
              )}
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 relative">
          <div className="absolute inset-0 bg-green-400/5 rounded-2xl backdrop-blur-sm" />
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
            {[
              { value: projects.length, label: "Projects Completed", icon: "📊" },
              { value: "100%", label: "Client Satisfaction", icon: "⭐" },
              { value: "500+", label: "Development Hours", icon: "⚡" },
              { value: "4", label: "Core Technologies", icon: "🛠" }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-6 rounded-xl text-center hover:bg-gray-700/50 
                transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/10"
              >
                <div className="text-3xl sm:text-4xl mb-3">{stat.icon}</div>
                <h3 className="text-2xl sm:text-3xl font-bold text-green-400 mb-2 break-words">
                  {stat.value}
                </h3>
                <p className="text-gray-400 font-medium break-words">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
};

export default Projects;
