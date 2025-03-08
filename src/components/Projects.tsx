'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Blogs Management',
      description: 'A full-stack blog platform with user authentication, authorization, and CRUD operations for blog posts.',
      image: '/blog.png',
      category: 'fullstack',
      technologies: ['HTML', 'CSS', 'EJS', 'Express.js', 'Node.js', 'MongoDB'],
      liveLink: 'https://github.com/Kirancodernew/Blog_Management',
      githubLink: 'https://github.com/Kirancodernew/Blog_Management',
      features: [
        'Led the development and deployment of a user authentication and authorization system, increasing user engagement by 30%.',
        'Implemented CRUD operations to facilitate seamless user registration, login, and efficient blog post management.',
        'Designed and integrated end-to-end encryption and advanced authorization protocols, reducing security breaches by 60% and ensuring compliance with industry standards.'
      ]
    },
    {
      id: 2,
      title: 'Music Player',
      description: 'A responsive music player with drag-and-drop song ordering and real-time playback controls.',
      image: '/music-play.png',
      category: 'fullstack',
      technologies: ['React.js', 'Express.js', 'MongoDB', 'Node.js', 'Tailwind', 'Howler.js'],
      liveLink: 'https://helpful-rabanadas-16650e.netlify.app/',
      githubLink: 'https://github.com/Kirancodernew/MusicPlayer',
      features: [
        'Designed and deployed a responsive music player using React.js and Figma, featuring drag-and-drop song ordering and real-time playback controls, which improved user engagement by 30% and reduced page load time by 20%.',
        'Implemented interactive song selection and highlighting features, increasing user interaction rates by 25% and reducing user drop-off by 15% during playback.',
        'Planned secure user authentication using JWT and OAuth, enabling 1,000+ registered users to access the platform safely. Deployed the application to a production-ready environment using AWS, achieving 99.9% uptime over 6 months.'
      ]
    },
    {
      id: 3,
      title: 'Stat Delight',
      description: 'A fully responsive website for Stat Delight with enhanced user engagement metrics.',
      image: '/stat-delight.png',
      category: 'frontend',
      technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
      liveLink: 'https://react-statdelight-d37a5.web.app/',
      githubLink: 'https://react-statdelight-d37a5.web.app/',
      features: [
        'Engineered a fully responsive website, resulting in a 35% increase in organic traffic and enhanced user engagement metrics.',
        'Led client interactions to gather and analyze project requirements, ensuring a 100% alignment with business objectives.',
        'Managed end-to-end project workflows, enhancing client satisfaction by 30%, while applying user-centric design principles.'
      ]
    },
    {
      "id": 4,
      "title": "Shopsy",
      "description": "A sleek e-commerce platform built for a seamless shopping experience.",
      "image": "/shopsy.png",
      "category": "frontend",
      "technologies": ["HTML", "CSS", "JavaScript"],
      "liveLink": "https://shopsy-store.netlify.app/",
      "githubLink": "https://github.com/Kirancodernew/react-ecommerce-store/tree/master",
      "features": [
        "Developed a modern and responsive UI for a seamless shopping experience.",
        "Implemented dynamic product listings and filtering features using JavaScript.",
        "Optimized performance and accessibility to enhance user engagement."
      ]
    },
    {
      "id": 5,
      "title": "WeatherSense",
      "description": "Experience real-time weather updates with our user-friendly weather app.",
      "image": "/weathersense.png",
      "category": "frontend",
      "technologies": ["HTML", "CSS", "JavaScript", "API Integration"],
      "liveLink": "https://ubiquitous-fudge-a66691.netlify.app/",
      "githubLink": "https://github.com/Kirancodernew/weather-app",
      "features": [
        "Integrated real-time weather API for accurate weather forecasting.",
        "Designed a clean and intuitive UI with interactive weather visuals.",
        "Implemented location-based weather updates for a personalized experience."
      ]
    },
    {
      "id": 6,
      "title": "TECHBYTE",
      "description": "A news aggregation platform providing real-time, personalized news updates.",
      "image": "/techbyte.png",
      "category": "frontend",
      "technologies": ["HTML", "CSS", "JavaScript", "API Integration"],
      "liveLink": "https://bucolic-mochi-6f2ea0.netlify.app/",
      "githubLink": "https://github.com/Kirancodernew/TechByte-main",
      "features": [
        "Fetched and displayed real-time news articles using a news API.",
        "Implemented category-based news filtering for a personalized experience.",
        "Designed an engaging and mobile-responsive interface for seamless reading."
      ]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Full Stack', value: 'fullstack' },
    { name: 'Frontend', value: 'frontend' },
    { name: 'Backend', value: 'backend' }
  ];

  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark dark:text-light">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Here are some of the projects I've worked on. Each project demonstrates my skills and experience in different areas of web development.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filter.value
                    ? 'bg-primary text-white'
                    : 'bg-white dark:bg-dark-blue text-dark dark:text-light hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white dark:bg-dark-blue rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
            >
              <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                <div style={{ backgroundImage: `url(${project.image})` }} className="w-full h-full bg-cover bg-center"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-dark dark:text-light">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-white text-primary rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between mt-4">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-dark dark:text-light hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-1"
                    aria-label="GitHub Repository"
                  >
                    <FaGithub /> Code
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-dark dark:text-light hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-1"
                    aria-label="Live Demo"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-700 dark:text-gray-300">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects; 