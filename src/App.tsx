
import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Blog from './components/Blog'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 z-50"
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <Sun className="w-6 h-6 text-yellow-500" />
        ) : (
          <Moon className="w-6 h-6 text-gray-600" />
        )}
      </button>

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Blog />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App