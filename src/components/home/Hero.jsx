import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import avatar from '../../assets/images/avatar.png';

const Hero = () => {
  return (
    <section className="pt-20 pb-10 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="w-36 h-36 rounded-full overflow-hidden mb-8 border-4 border-green-400 animate-bounce shadow-lg">
            <img
              src={avatar}
              alt="Avatar"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white drop-shadow-lg">
            <TypeAnimation
              sequence={["Hi, I'm Akhtar Zeb Bacha", 2000]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: 'inline-block' }}
            />
          </h1>
          <p className="text-gray-400 max-w-2xl mb-8">
            I'm a passionate MERN-Stack Web developer who brings designs to life with precision and creativity. With a background in Computer Science,
            I combine technical expertise and an eye for detail to craft seamless digital experiences. I'm dedicated to exceeding client expectations and delivering user-centric solutions.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/projects"
              className="bg-green-400 text-gray-900 px-6 py-3 rounded-md hover:bg-green-500 hover:scale-105 transition-transform shadow-md"
            >
              View Projects
            </Link>
            <Link
              to="/my-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-400 text-green-400 px-6 py-3 rounded-md hover:bg-green-400 hover:text-gray-900 hover:scale-105 transition-transform shadow-md"
            >
              My CV
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
