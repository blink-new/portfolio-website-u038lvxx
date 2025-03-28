
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Database, Layout, Smartphone, Server, Brush } from 'lucide-react'

interface Skill {
  name: string;
  level: number;
  icon: JSX.Element;
  technologies: string[];
}

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories: Skill[] = [
    {
      name: 'Frontend Development',
      level: 90,
      icon: <Layout className="w-6 h-6" />,
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux']
    },
    {
      name: 'Backend Development',
      level: 85,
      icon: <Server className="w-6 h-6" />,
      technologies: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs']
    },
    {
      name: 'Database',
      level: 80,
      icon: <Database className="w-6 h-6" />,
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Prisma']
    },
    {
      name: 'Mobile Development',
      level: 75,
      icon: <Smartphone className="w-6 h-6" />,
      technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo']
    },
    {
      name: 'UI/UX Design',
      level: 70,
      icon: <Brush className="w-6 h-6" />,
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'Design Systems']
    },
    {
      name: 'DevOps',
      level: 65,
      icon: <Code2 className="w-6 h-6" />,
      technologies: ['Docker', 'AWS', 'CI/CD', 'Kubernetes', 'Git']
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A comprehensive overview of my technical expertise and capabilities
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  {skill.icon}
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
              </div>

              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Proficiency</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                  />
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}