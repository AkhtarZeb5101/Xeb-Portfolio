import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from '../components/home/Hero';
import TechStack from '../components/home/TechStack';
import ProjectList from '../components/projects/ProjectList';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
      offset: 100, 
    });
  }, []);

  return (
    <main className="pt-16">
      <div data-aos="fade-up">
        <Hero />
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <TechStack />
      </div>

      <div data-aos="fade-up" data-aos-delay="400">
        <ProjectList />
      </div>
    </main>
  );
};

export default Home;
