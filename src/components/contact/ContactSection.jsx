import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { siGithub } from 'simple-icons/icons';

const ContactSection = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Let's <span className="text-green-400">Connect</span>
        </h2>
        <div className="flex flex-col items-center space-y-6">
          <p className="text-gray-400 text-center max-w-2xl">
            I'm currently open to new opportunities and collaborations.
            Feel free to reach out if you'd like to work together!
          </p>
          <div className="flex space-x-6">
            <a
              href="azaib5101@gmail.com"
              className="flex items-center text-green-400 hover:text-green-300"
            >
              <Mail className="w-6 h-6 mr-2" />
              Email
            </a>

            <a
              href="https://github.com/AkhtarZeb5101/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-green-400 hover:text-green-300"
            >
              <img
                src={`data:image/svg+xml,${encodeURIComponent(siGithub.svg)}`}
                alt="GitHub"
                className="w-6 h-6 mr-2"
              />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/akhtar-zeb-bacha-155670236"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-green-400 hover:text-green-300"
            >
              <Linkedin className="w-6 h-6 mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
