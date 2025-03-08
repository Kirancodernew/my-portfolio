'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, 
  FaGitAlt, FaAws, FaFigma, FaPython, FaDocker
} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', icon: <FaHtml5 className="text-[#E34F26]" />, level: 95 },
        { name: 'CSS', icon: <FaCss3Alt className="text-[#1572B6]" />, level: 90 },
        { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" />, level: 90 },
        { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" />, level: 85 },
        { name: 'React.js', icon: <FaReact className="text-[#61DAFB]" />, level: 90 },
        { name: 'Next.js', icon: <SiNextdotjs className="text-dark dark:text-light" />, level: 85 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" />, level: 90 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" />, level: 85 },
        { name: 'Express.js', icon: <SiExpress className="text-dark dark:text-light" />, level: 85 },
        { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" />, level: 80 },
        { name: 'SQL', icon: <FaDatabase className="text-[#4479A1]" />, level: 80 },
        { name: 'Python', icon: <FaPython className="text-[#3776AB]" />, level: 75 },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" />, level: 85 },
        { name: 'AWS', icon: <FaAws className="text-[#232F3E]" />, level: 70 },
        { name: 'Docker', icon: <FaDocker className="text-[#2496ED]" />, level: 65 },
        { name: 'Figma', icon: <FaFigma className="text-[#F24E1E]" />, level: 75 },
      ]
    }
  ];

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

  return (
    <section id="skills" className="section bg-light dark:bg-dark">
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
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world.
            Here are my main areas of expertise and the technologies I use regularly.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-dark-blue rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-bold mb-6 text-center text-dark dark:text-light border-b border-gray-200 dark:border-gray-700 pb-3">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-2xl mr-2">{skill.icon}</span>
                        <span className="font-medium text-dark dark:text-light">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        className="bg-primary h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.3 + (skillIndex * 0.1) }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6 text-dark dark:text-light">
            Additional <span className="text-primary">Skills</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Data Structures', 'Algorithms', 'OOP', 'REST API', 'Responsive Design', 'UI/UX', 'Problem Solving', 'Team Collaboration', 'Project Management', 'Agile Methodology'].map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-white dark:bg-dark-blue rounded-full shadow-sm text-dark dark:text-light border border-gray-200 dark:border-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 