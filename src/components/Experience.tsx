'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaExternalLinkAlt } from 'react-icons/fa';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Freelancing Project',
      company: 'Stat Delight',
      date: 'Dec - 2024',
      description: [
        'Engineered a fully responsive website for Stat Delight, resulting in a 35% increase in organic traffic and enhanced user engagement metrics, including an average session duration improvement from 2 to over 5 minutes.',
        'Led client interactions to gather and analyze project requirements, ensuring a 100% alignment with business objectives and improving project delivery efficiency.',
        'Managed end-to-end project workflows, enhancing client satisfaction by 30%, while applying user-centric design principles to optimize usability and engagement.'
      ],
      link: 'https://react-statdelight-d37a5.web.app/'
    },
    {
      title: 'Node.js Intern',
      company: 'Navodita Infotech',
      date: '25/07/2024 – 24/08/2024',
      description: [
        'Collaborated and optimized a scalable RESTful API for a blog platform, integrating secure user authentication, CRUD operations, and comment management, leading to a 40% improvement in API response efficiency.'
      ],
      link: 'https://drive.google.com/file/d/1BS71gQuP7FhU9eJLyWY39Q0I9xmmGG1J/view'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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

  return (
    <section id="experience" className="section bg-gray-50 dark:bg-gray-900">
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
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary"></div>

          {/* Experience items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col md:flex-row mb-12 relative ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white dark:border-gray-900 z-10"></div>

              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                <div className="bg-white dark:bg-dark-blue rounded-lg shadow-md p-6 transition-transform hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <FaBriefcase className="text-2xl text-primary mr-3" />
                      <h3 className="text-xl font-bold text-dark dark:text-light">{exp.title}</h3>
                    </div>
                    {exp.link && (
                      <a 
                        href={exp.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                        aria-label="View project"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                  <div className="mb-4">
                    <span className="text-lg font-semibold text-secondary dark:text-white">{exp.company}</span>
                    <span className="block text-sm text-gray-600 dark:text-white mt-1">{exp.date}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 