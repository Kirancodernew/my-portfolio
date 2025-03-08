'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaCode, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section bg-light dark:bg-dark">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark dark:text-light">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-dark dark:text-light">
              I'm a <span className="text-primary">Full Stack Developer</span> with a passion for creating efficient solutions
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              I am a web developer with experience in building full-stack applications using React.js, Node.js, MongoDB, and SQL. 
              I have successfully completed over five full-stack projects, focusing on scalable and efficient solutions.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              I enjoy optimizing code and database structures to improve performance. I collaborate effectively to deliver 
              high-quality applications on time. My goal is to create user-friendly applications that solve real-world problems.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-dark dark:text-light">Name:</span>
                <span className="text-gray-700 dark:text-gray-300">Rathod Sai Kiran</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-dark dark:text-light">Email:</span>
                <a href="mailto:saikiran.rathod1305@gmail.com" className="text-primary hover:underline">
                  saikiran.rathod1305@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-dark dark:text-light">Location:</span>
                <span className="text-gray-700 dark:text-gray-300">Hyderabad, Telangana</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-dark dark:text-light">Availability:</span>
                <span className="text-green-600 dark:text-green-400">Available for hire</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-dark-blue rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <FaGraduationCap className="text-3xl text-primary mr-4" />
                <h4 className="text-xl font-bold text-dark dark:text-light">Education</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Bachelor of Technology in Electronics and Communication Engineering<br />
                National Institute of Technology Agartala (NITA) – 8.0 CGPA<br />
                2020-2024
              </p>
            </div>

            <div className="bg-white dark:bg-dark-blue rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <FaCode className="text-3xl text-primary mr-4" />
                <h4 className="text-xl font-bold text-dark dark:text-light">Coding Skills</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Solved 180+ problems on LeetCode and 150+ on GeeksforGeeks, focusing on data structures, 
                algorithms, and efficient coding practices.
              </p>
            </div>

            <div className="bg-white dark:bg-dark-blue rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <FaLaptopCode className="text-3xl text-primary mr-4" />
                <h4 className="text-xl font-bold text-dark dark:text-light">Development Focus</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                I specialize in creating responsive, user-friendly web applications with clean code and 
                optimal performance. My focus is on delivering high-quality solutions that meet client needs.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 