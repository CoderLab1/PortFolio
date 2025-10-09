import React, { useMemo } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { useState, useEffect } from 'react';


const Skills = () => {
  const [headerRef, isHeaderIntersecting] = useIntersectionObserver({ threshold: 0.1 })
  const [containerRef, isContainerIntersecting] = useIntersectionObserver({ threshold: 0.1 })

  const skills = useMemo(() => [
    { name: 'React', level: 90, icon: '⚛️', color: 'from-cyan-500 to-blue-500' },
    { name: 'JavaScript', level: 95, icon: '🟨', color: 'from-yellow-400 to-orange-500' },
    { name: 'HTML/CSS', level: 95, icon: '🌐', color: 'from-orange-500 to-red-500' },
    { name: 'Node.js', level: 85, icon: '🟩', color: 'from-green-500 to-emerald-500' },
    { name: 'MongoDB', level: 80, icon: '🍃', color: 'from-green-400 to-teal-500' },
    { name: 'UI/UX Design', level: 85, icon: '🎨', color: 'from-purple-500 to-pink-500' },
  ], [])

  return (
    <section id="skills" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-gradient-to-br from-blue-800 to-purple-800 rounded-full opacity-20 animate-float"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-br from-purple-800 to-pink-800 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2
            ref={headerRef}
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-700 transform ${isHeaderIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
          >
            Skills & Expertise
          </h2>
          <p
            className={`text-lg md:text-xl text-gray-400 max-w-3xl mx-auto transition-all duration-700 delay-200 transform ${isHeaderIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
          >
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div
          ref={containerRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <SkillBar
              key={skill.name}
              skill={skill}
              index={index}
              shouldAnimate={isContainerIntersecting}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
const SkillBar = ({ skill, index, shouldAnimate }) => {


  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.3 })

  // Track if animation has already played
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (shouldAnimate && isIntersecting) {
      setHasAnimated(true); // Trigger animation once
    }
  }, [shouldAnimate, isIntersecting]);

  const isVisible = hasAnimated;


  return (
    <div
      ref={ref}
      className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-gray-700 hover:border-gray-600"
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
            {skill.icon}
          </span>
          <span className="text-white font-semibold text-lg">{skill.name}</span>
        </div>
        <span className="text-gray-300 font-medium bg-gray-700/50 px-3 py-1 rounded-full text-sm">
          {skill.level}%
        </span>
      </div>

      <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
        <div
          className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out ${isVisible ? 'w-full' : 'w-0'
            }`}
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${index * 150 + 300}ms`
          }}
        >
          {/* Animated shine effect */}
          <div className="h-full w-10 bg-white/20 animate-shine rounded-full transform skew-x-12"></div>
        </div>
      </div>

      {/* Progress indicator dots */}
      <div className="flex justify-between mt-2 px-1">
        {[0, 25, 50, 75, 100].map((point) => (
          <div
            key={point}
            className={`w-1 h-1 rounded-full ${skill.level >= point ? 'bg-gray-400' : 'bg-gray-600'
              }`}
          />
        ))}
      </div>
    </div>
  )
}

<style jsx>{`
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

@keyframes shine {
  0% { transform: translateX(-100%) skewX(-12deg); }
  100% { transform: translateX(200%) skewX(-12deg); }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-shine {
  animation: shine 3s ease-in-out infinite;
}
      `}</style>

export default Skills