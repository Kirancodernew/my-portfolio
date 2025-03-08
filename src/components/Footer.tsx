'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for dark mode preference
    const isDarkMode = document.documentElement.classList.contains('dark');
    setDarkMode(isDarkMode);

    // Set up a mutation observer to detect changes to the dark mode class
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDarkMode = document.documentElement.classList.contains('dark');
          setDarkMode(isDarkMode);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-12 transition-colors duration-300 ${
      darkMode 
        ? 'bg-gray-900 text-gray-200' 
        : 'bg-gray-100 text-gray-800'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="#home" className="text-2xl font-bold text-primary">
              Rathod Sai Kiran
            </Link>
            <p className={`mt-2 max-w-md ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              A passionate full-stack developer focused on creating efficient and user-friendly web applications.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/Kirancodernew"
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-primary transition-colors text-xl ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/princekiran"
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-primary transition-colors text-xl ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:saikiran.rathod1305@gmail.com"
                className={`hover:text-primary transition-colors text-xl ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className="bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors"
              aria-label="Scroll to top"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>

        <div className={`mt-8 pt-8 flex flex-col md:flex-row justify-between items-center border-t ${
          darkMode ? 'border-gray-800' : 'border-gray-300'
        }`}>
          <p className={`text-sm ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            &copy; {currentYear} Rathod Sai Kiran. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <Link href="#home" className={`hover:text-primary transition-colors text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className={`hover:text-primary transition-colors text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className={`hover:text-primary transition-colors text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className={`hover:text-primary transition-colors text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 