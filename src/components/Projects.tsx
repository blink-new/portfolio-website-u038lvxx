
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: "HealthTrack Pro",
    description: "A comprehensive health tracking platform built with React, Node.js, and MongoDB. Features include workout planning, nutrition tracking, and progress analytics.",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "fullstack",
    github: "https://github.com/alexthompson/healthtrack-pro",
    live: "https://healthtrack-pro.com",
    tech: ["React", "Node.js", "MongoDB", "Express", "Chart.js"]
  },
  {
    title: "CryptoWatch",
    description: "Real-time cryptocurrency tracking dashboard with price alerts and portfolio management. Built with React and cryptocurrency APIs.",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "frontend",
    github: "https://github.com/alexthompson/cryptowatch",
    live: "https://cryptowatch-app.com",
    tech: ["React", "TypeScript", "WebSocket", "Tailwind CSS"]
  },
  {
    title: "TaskFlow API",
    description: "A robust REST API for task management with authentication, role-based access control, and real-time notifications.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "backend",
    github: "https://github.com/alexthompson/taskflow-api",
    live: "https://api.taskflow.dev/docs",
    tech: ["Node.js", "Express", "PostgreSQL", "Redis", "JWT"]
  },
  {
    title: "WeatherNow",
    description: "Beautiful weather application with location-based forecasts, animated weather icons, and severe weather alerts.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "frontend",
    github: "https://github.com/alexthompson/weather-now",
    live: "https://weather-now.app",
    tech: ["React", "OpenWeather API", "Framer Motion", "Geolocation API"]
  },
  {
    title: "ChatHub",
    description: "Real-time chat application with group messaging, file sharing, and end-to-end encryption.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "fullstack",
    github: "https://github.com/alexthompson/chathub",
    live: "https://chathub.io",
    tech: ["React", "Socket.io", "Node.js", "MongoDB", "WebRTC"]
  }
]

const categories = ["all", "frontend", "backend", "fullstack"]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects = projects.filter(project => 
    selectedCategory === "all" || project.category === selectedCategory
  )

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="flex justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full capitalize ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <Github className="w-6 h-6 text-gray-900" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <ExternalLink className="w-6 h-6 text-gray-900" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}