'use client';

import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-light to-light-blue dark:from-dark dark:to-dark-blue">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-dark dark:text-light">Hi, I'm </span>
              <span className="text-primary">Rathod Sai Kiran</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-dark dark:text-light">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  1000,
                  'Web Developer',
                  1000,
                  'React.js Developer',
                  1000,
                  'Node.js Developer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-secondary"
              />
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300 max-w-lg">
              A passionate web developer with experience in building full-stack applications 
              using React.js, Node.js, MongoDB, and SQL. I focus on creating scalable and 
              efficient solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="tel:+918688634012" 
                className="btn btn-primary"
              >
                Contact Me
              </Link>
              <a 
                href="/resume.pdf" 
                className="btn btn-outline flex items-center gap-2"
                download
              >
                <HiDownload /> Download CV
              </a>
              <div className="flex items-center gap-4 mt-6">
                <a 
                  href="https://github.com/Kirancodernew" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark dark:text-light hover:text-primary dark:hover:text-primary transition-colors text-2xl"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://linkedin.com/in/princekiran" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark dark:text-light hover:text-primary dark:hover:text-primary transition-colors text-2xl"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 animate-pulse-slow"></div>
              <div className="absolute inset-2 rounded-full bg-light dark:bg-dark overflow-hidden">
                <div className="w-full h-full bg-[url('/profile-dark.png')] dark:bg-[url('/profile-white.jpeg')] bg-cover bg-center scale-125 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-20 animate-pulse-slow"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 