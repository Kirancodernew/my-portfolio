'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is near the top of the viewport (with some offset)
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check for dark mode preference
    if (localStorage.theme === 'dark' || 
        (!('theme' in localStorage) && 
         window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    // Update state first
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    // Then update DOM and localStorage
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
    
    // Log for debugging
    console.log('Dark mode toggled:', newDarkMode);
  };

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    if (isOpen) {
      toggleMenu();
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? darkMode
            ? 'bg-gray-900/95 backdrop-blur-sm shadow-md py-2' 
            : 'bg-white/95 backdrop-blur-sm shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          href="#home" 
          className="text-2xl font-bold text-primary"
          onClick={() => handleNavClick('home')}
        >
          Sai Kiran
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => handleNavClick(link.id)}
              className={`transition-colors relative ${
                activeSection === link.id
                  ? 'text-primary font-medium'
                  : 'text-dark dark:text-light hover:text-primary dark:hover:text-primary'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
              )}
            </Link>
          ))}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors duration-300 ${
              darkMode 
                ? 'bg-gray-700 text-gray-200' 
                : 'bg-gray-200 text-gray-800'
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-indigo-700" />}
          </button>
        </div>

        {/* Mobile Navigation Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleDarkMode}
            className={`p-2 mr-2 rounded-full transition-colors duration-300 ${
              darkMode 
                ? 'bg-gray-700 text-gray-200' 
                : 'bg-gray-200 text-gray-800'
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-indigo-700" />}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-dark dark:text-light"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden shadow-lg transition-colors duration-300 ${
          darkMode 
            ? 'bg-gray-800 text-gray-200' 
            : 'bg-white text-gray-800'
        }`}>
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors py-2 ${
                  activeSection === link.id
                    ? 'text-primary font-medium'
                    : 'hover:text-primary'
                }`}
                onClick={() => handleNavClick(link.id)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 