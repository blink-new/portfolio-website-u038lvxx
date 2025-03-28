
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  const navigation = {
    main: [
      { name: 'Home', href: '#' },
      { name: 'Projects', href: '#projects' },
      { name: 'Skills', href: '#skills' },
      { name: 'Blog', href: '#blog' },
      { name: 'Contact', href: '#contact' },
    ],
    social: [
      {
        name: 'GitHub',
        href: 'https://github.com/yourusername',
        icon: Github,
        color: 'hover:text-gray-900 dark:hover:text-white'
      },
      {
        name: 'LinkedIn',
        href: 'https://linkedin.com/in/yourusername',
        icon: Linkedin,
        color: 'hover:text-blue-700 dark:hover:text-blue-400'
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/yourusername',
        icon: Twitter,
        color: 'hover:text-blue-500 dark:hover:text-blue-300'
      },
      {
        name: 'Email',
        href: 'mailto:your.email@example.com',
        icon: Mail,
        color: 'hover:text-red-600 dark:hover:text-red-400'
      },
    ],
  }

  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center mb-8" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a
                href={item.href}
                className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="flex justify-center space-x-6 mb-8">
          {navigation.social.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.name}
                href={item.href}
                className={`text-gray-400 transition-colors ${item.color}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{item.name}</span>
                <Icon className="h-6 w-6" aria-hidden="true" />
              </a>
            )
          })}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8"
        >
          <p className="text-base text-gray-400 dark:text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Alex Thompson. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500 text-center mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}