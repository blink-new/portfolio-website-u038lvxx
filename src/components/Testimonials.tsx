
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO at HealthTech Solutions",
    content: "Alex developed our health tracking platform from scratch. His technical expertise and attention to detail resulted in a product that exceeded our expectations. The platform has been crucial to our business growth.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder of CryptoVest",
    content: "Working with Alex on our cryptocurrency dashboard was fantastic. He brought innovative solutions to complex challenges and delivered a product that our users love. His expertise in real-time data handling is impressive.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Emily Watson",
    role: "Product Manager at TaskFlow",
    content: "Alex transformed our project management workflow with his robust API solution. His understanding of backend architecture and security best practices was evident throughout the development process.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Here's what clients say about working with me
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-lg"
          >
            <Quote className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-6" />
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 italic">"{testimonials[currentIndex].content}"</p>
            <div className="flex items-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-600 dark:text-gray-300">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </motion.div>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}