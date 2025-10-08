import React, { useState, useEffect } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import profilePic from '../assets/image.png'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import toast, { Toaster } from 'react-hot-toast';

const Hero = () => {
  const [ref, isIntersecting] = useIntersectionObserver()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-white relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'
        }`}
    >
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px] animate-pulse-slow"></div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-yellow-500/20 to-pink-500/20 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div
            ref={ref}
            className={`fade-in text-center lg:text-left order-2 lg:order-1 ${isIntersecting ? 'visible' : ''
              }`}
          >
            <div className="space-y-6">
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r dark:from-yellow-300 dark:via-yellow-200 dark:to-yellow-300 bg-clip-text text-transparent animate-gradient-x">
                  Tanish
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 font-light">
                Full Stack Developer & UI/UX Designer
              </p>

              {/* Description */}
              <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                I craft high-performing, user-focused web applications that help businesses
                grow and users stay engaged. Let's collaborate to turn ideas into reality.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <a
                  href="/Tanish_Yadav_CV.pdf"
                  download="Tanish_Yadav_Resume.pdf"
                  onClick={() => toast.success('Downloading resume...')}
                  className="group relative bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-yellow-500 dark:to-yellow-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">My Resume</span>
                </a>
                <Toaster position="bottom-center" />
                <button
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="group relative border-2 border-indigo-400 dark:border-yellow-400 text-indigo-400 dark:text-yellow-400 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-400 dark:hover:bg-yellow-400 hover:text-white dark:hover:text-gray-900 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">Get In Touch</span>
                </button>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div
            className={`fade-in mt-5 flex justify-center lg:justify-end order-1 lg:order-2 ${isIntersecting ? 'visible' : ''
              }`}
          >
            <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 group">
              {/* Main Image Container */}
              <div className="relative w-full aspect-square rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 dark:from-yellow-400 dark:to-orange-500 p-1 transform transition-transform duration-500">
                <div className="w-full h-full rounded-full bg-gray-800 dark:bg-gray-700 overflow-hidden flex items-center justify-center ">
                  <img
                    src={profilePic}
                    alt="Tanish Yadav"
                    className="w-full h-full object-cover transform transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-16 flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/tanish-yadav-811164253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 backdrop-blur-sm"
            aria-label="Visit LinkedIn profile"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
            <FaLinkedin className="text-xl group-hover:scale-110 transition-transform duration-300 relative z-10" />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-gray-600 to-gray-900 text-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 backdrop-blur-sm"
            aria-label="Visit GitHub profile"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
            <FaGithub className="text-xl group-hover:scale-110 transition-transform duration-300 relative z-10" />
          </a>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 8s ease-in-out 4s infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  )
}

export default Hero