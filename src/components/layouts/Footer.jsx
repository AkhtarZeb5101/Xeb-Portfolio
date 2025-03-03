import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
  
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/AkhtarZeb5101/',
      icon: Github
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/akhtar-zeb-bacha-155670236/',
      icon: Linkedin
    },
//     {
//       name: 'Twitter',
//       href: 'https://twitter.com/neneofdgoodlife/',
//       icon: XIcon
//     },
    {
      name: 'Email',
      href: 'mailto:azaib5101@gmail.com',
      icon: Mail
    }
  ];

  return (
    <footer className="py-8 border-t border-gray-800 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                aria-label={link.name}
              >
                {React.createElement(link.icon, { className: "w-5 h-5" })}
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 text-sm text-gray-400">
            <p>© {currentYear} Akhtar Zeb Bacha.</p>
            <p className="hidden sm:block">|</p>
            <p className="flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-green-400" /> using React & Tailwind
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <a href="/" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
              Home
            </a>
            <a href="/about" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
              About
            </a>
            <a href="/projects" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
              Projects
            </a>
            <a href="/contact" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
