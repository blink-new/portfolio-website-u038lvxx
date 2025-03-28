
import { useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const id = target.getAttribute('href')?.slice(1)
        const element = document.getElementById(id || '')
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}