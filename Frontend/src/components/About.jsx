import React from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const About = () => {
  const [ref1, isIntersecting1] = useIntersectionObserver({ threshold: 0.1 })
  const [ref2, isIntersecting2] = useIntersectionObserver({ threshold: 0.1 })
  const [ref3, isIntersecting3] = useIntersectionObserver({ threshold: 0.1 })

  const services = [
    {
      icon: '💻',
      text: 'Full Stack Development',
      description: 'End-to-end web applications using modern technologies'
    },
    {
      icon: '🎨',
      text: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces and experiences'
    },
    {
      icon: '📱',
      text: 'Responsive Design',
      description: 'Perfectly optimized for all devices and screen sizes'
    },
    {
      icon: '⚡',
      text: 'Performance Optimization',
      description: 'Lightning-fast applications with optimized performance'
    },
  ]

  const stats = [
    { number: '17+', label: 'Projects Completed', suffix: '' },
    { number: '8', label: 'Months', suffix: '+', sublabel: 'Experience' },
    // { number: '100', label: 'Happy', suffix: '%', sublabel: 'Clients' },
    // { number: '24', label: 'Hour', suffix: '/7', sublabel: 'Support' }
  ]

  return (
    <section id="about" className="py-14 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full blur-3xl opacity-60 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full blur-3xl opacity-60 animate-float-delayed"></div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">About Me</span>
          </div>

          <h2
            ref={ref1}
            className={`fade-in-up text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6 ${isIntersecting1 ? 'animate-slide-up' : ''
              }`}
          >
            Crafting Digital Excellence
          </h2>

          <p
            ref={ref2}
            className={`fade-in-up text-xl md:text-2xl  text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed ${isIntersecting2 ? 'animate-slide-up' : 'opacity-0'
              }`}
            style={{ animationDelay: '0.1s' }}
          >
            I'm a passionate <span className="font-semibold text-blue-600 dark:text-blue-400">full-stack developer</span> with a keen eye for design and a love for creating seamless user experiences that make a difference.
          </p>
        </div>

        {/* Enhanced Main Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* My Journey - Enhanced */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 relative">
                My Journey
              </h3>

              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p className="text-lg leading-relaxed">
                  With over <span className="font-semibold text-gray-900 dark:text-white">8 months</span> of experience in web development, I've had the privilege of working on diverse projects ranging from innovative startups to enterprise-level applications.
                </p>

                <p className="text-lg leading-relaxed">
                  My philosophy centers around writing <span className="font-semibold text-gray-900 dark:text-white">clean, maintainable code</span> and creating <span className="font-semibold text-gray-900 dark:text-white">intuitive user interfaces</span> that make technology accessible and enjoyable for everyone.
                </p>

                <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl border border-blue-100 dark:border-gray-600">
                  <p className="text-blue-700 dark:text-blue-300 font-medium italic">
                    "Turning complex problems into simple, beautiful designs is what I love most about development."
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Statistics Grid */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="fade-in text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:translate-y-[-4px] group"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {stat.number}
                    </div>
                    {stat.suffix && (
                      <div className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                        {stat.suffix}
                      </div>
                    )}
                  </div>
                  <div className="text-gray-700 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                  {stat.sublabel && (
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {stat.sublabel}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Services Section */}
          <div
            ref={ref3}
            className={`fade-in ${isIntersecting3 ? 'animate-slide-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-600">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg">✨</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">What I Do</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Comprehensive digital solutions</p>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-3 sm:gap-4 lg:gap-6 p-4 sm:p-5 lg:p-6 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-600 hover:border-blue-200 dark:hover:border-blue-800 hover:translate-x-1 sm:hover:translate-x-2 cursor-pointer"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center text-lg sm:text-xl lg:text-2xl group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300 shadow-inner flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg lg:text-xl mb-1 sm:mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                        {service.text}
                      </h5>
                      <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed sm:leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(-1deg); }
        }
        @keyframes slide-up {
          0% { 
            opacity: 0;
            transform: translateY(30px);
          }
          100% { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        .fade-in-up.animate-slide-up {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  )
}

export default About