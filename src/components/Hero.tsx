
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react'

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="min-h-screen flex items-center justify-center relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              alt="Alex Thompson"
              className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-500"
            />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Alex Thompson</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Full-stack developer specializing in React and Node.js. 
            I build beautiful, scalable web applications that solve real-world problems.
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a
              href="https://github.com/alexthompson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/alexthompson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/alexthompson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              View My Work
              <ArrowDown className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </div>
    </section>
  )
}