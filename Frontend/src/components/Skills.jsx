import React from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const Skills = () => {
  const [ref1, isIntersecting1] = useIntersectionObserver()
  const [ref2, isIntersecting2] = useIntersectionObserver()

  const skills = [
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'JavaScript', level: 95, icon: '🟨' },
    { name: 'HTML/CSS', level: 95, icon: '🌐' },
    { name: 'Node.js', level: 85, icon: '🟩' },
    { name: 'MongoDB', level: 80, icon: '🍃' },
    { name: 'UI/UX Design', level: 85, icon: '🎨' },
  ]

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-gradient-to-br from-blue-900 to-purple-900 dark:from-blue-400 dark:to-purple-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-br from-purple-900 to-pink-900 dark:from-purple-400 dark:to-pink-400 rounded-full opacity-20 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2
            ref={ref1}
            className={`fade-in text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 ${isIntersecting1 ? 'visible' : ''
              }`}
          >
            Skills & Expertise
          </h2>
          <p
            className={`fade-in text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto ${isIntersecting1 ? 'visible' : ''
              }`}
          >
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-2 gap-12">
          <div ref={ref2} className={`fade-in space-y-6 ${isIntersecting2 ? 'visible' : ''}`}>
            {skills.slice(0, 3).map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
          <div className="fade-in space-y-6">
            {skills.slice(3).map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const SkillBar = ({ skill }) => {
  const [ref, isIntersecting] = useIntersectionObserver()

  return (
    <div
      ref={ref}
      className="skill-item bg-white dark:bg-gray-800 rounded-xl p-4 shadow hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</span>
        </div>
        <span className="text-gray-500 dark:text-gray-400 font-medium">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
        <div
          className={`bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-yellow-400 dark:to-orange-500 h-3 rounded-full transform transition-all duration-1000 ${isIntersecting ? 'w-full' : 'w-0'
            }`}
          style={{ width: `${isIntersecting ? skill.level : 0}%` }}
        ></div>
      </div>
    </div>
  )
}

export default Skills
