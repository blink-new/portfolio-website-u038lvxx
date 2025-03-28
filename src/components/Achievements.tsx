
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { Trophy, Users, Code, Star, Coffee, Award } from 'lucide-react'

interface Achievement {
  icon: JSX.Element;
  value: number;
  suffix?: string;
  title: string;
  description: string;
}

const AnimatedCounter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      const duration = 2000 // 2 seconds
      const steps = 60
      const stepDuration = duration / steps
      let currentStep = 0

      const timer = setInterval(() => {
        if (currentStep < steps) {
          setCount(Math.ceil((value * ++currentStep) / steps))
        } else {
          clearInterval(timer)
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }
  }, [inView, value])

  return (
    <span ref={ref} className="text-4xl font-bold text-blue-600 dark:text-blue-400">
      {count}
      {suffix}
    </span>
  )
}

export default function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const achievements: Achievement[] = [
    {
      icon: <Trophy className="w-8 h-8" />,
      value: 15,
      suffix: '+',
      title: 'Awards Won',
      description: 'Recognition for excellence in development and design'
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: 50,
      suffix: 'K+',
      title: 'Happy Clients',
      description: 'Satisfied customers worldwide'
    },
    {
      icon: <Code className="w-8 h-8" />,
      value: 100,
      suffix: 'K+',
      title: 'Lines of Code',
      description: 'Clean, efficient, and maintainable code written'
    },
    {
      icon: <Star className="w-8 h-8" />,
      value: 25,
      suffix: '+',
      title: 'Projects Completed',
      description: 'Successful project deliveries'
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      value: 1000,
      suffix: '+',
      title: 'Cups of Coffee',
      description: 'Fuel for coding sessions'
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: 5,
      suffix: '+',
      title: 'Years Experience',
      description: 'Professional development expertise'
    }
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
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & Milestones
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Key accomplishments and milestones throughout my journey
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.title}
              variants={itemVariants}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-300 opacity-10"></div>
              <div className="relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-blue-600 dark:text-blue-400">
                    {achievement.icon}
                  </div>
                </div>
                <div className="text-center">
                  <AnimatedCounter value={achievement.value} suffix={achievement.suffix} />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}