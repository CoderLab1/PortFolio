import React, { useState, useEffect } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { MdOutlineAttachEmail } from "react-icons/md"
import { FaPhoneSquareAlt, FaWhatsapp } from "react-icons/fa"
import { IoLocationOutline } from "react-icons/io5"

const Contact = () => {
  const [ref1, isIntersecting1] = useIntersectionObserver({ threshold: 0.1 })
  const [ref2, isIntersecting2] = useIntersectionObserver({ threshold: 0.1 })

  const [headerAnimated, setHeaderAnimated] = useState(false);
  useEffect(() => {
    if (isIntersecting1) setHeaderAnimated(true);
  }, [isIntersecting1]);

  const [cardAnimated, setCardAnimated] = useState(false);
  useEffect(() => {
    if (isIntersecting2) setCardAnimated(true);
  }, [isIntersecting2]);


  const contactInfo = [
    {
      icon: <MdOutlineAttachEmail />,
      title: 'Email',
      value: 'ashuyadav64393@gmail.com',
      link: 'mailto:ashuyadav64393@gmail.com'
    },
    {
      icon: <FaPhoneSquareAlt />,
      title: 'Phone',
      value: '+91 99937 23864',
      link: 'tel:+919993723864'
    },
    {
      icon: <IoLocationOutline />,
      title: 'Location',
      value: 'Bangalore, Karnataka',
      link: 'https://maps.google.com/?q=Bangalore,Karnataka'
    },
  ]

  return (
    <section id="contact" className="py-16 lg:py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-900/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-900/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>

      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/20 border border-blue-800 mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-blue-300">Get In Touch</span>
          </div>

          <h2
            ref={ref1}
            className={`fade-in-up text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6 ${headerAnimated ? 'animate-slide-up' : ''}`}
          >
            Let's Work Together
          </h2>

          <p
            className={`fade-in-up text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed ${headerAnimated ? 'animate-slide-up' : 'opacity-0'}`}
          >
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life and create something amazing.
          </p>

        </div>

        <div
          ref={ref2}
          className={`fade-in-up ${cardAnimated ? 'animate-slide-up' : 'opacity-0'}`}
        >
          <div className="relative rounded-3xl p-8 shadow-2xl border border-gray-700 bg-gray-800 backdrop-blur-sm bg-opacity-95">
            <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
              <div className="flex-1">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                  Let's Connect
                </h3>
                <div className="w-44 ml-1 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
              </div>

              <a
                href="https://wa.me/919993723864?text=Hello%20Tanish,%20I%20want%20to%20connect%20with%20you"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl flex items-center justify-center text-2xl shadow-xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1"
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp className="group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 border-2 border-green-400 rounded-2xl animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="hidden sm:block absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs font-semibold px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                  Chat on WhatsApp
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-gray-900 rotate-45"></div>
                </div>
              </a>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-4 p-4 bg-gray-700 rounded-2xl hover:bg-gray-600 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-lg border border-gray-600 hover:border-blue-800 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:from-blue-600 group-hover:to-purple-600 rounded-xl flex items-center justify-center text-white text-lg group-hover:scale-110 transition-all duration-500 shadow-lg">
                    {info.icon}
                  </div>
                  <div className="relative z-10 flex-1 min-w-0">
                    <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300 truncate text-base">
                      {info.title}
                    </h4>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 truncate text-sm">
                      {info.value}
                    </p>
                  </div>
                  <div className="relative z-10 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-blue-400 hidden sm:block">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Typically respond within 2 hours
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .fade-in-up { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
        .fade-in-up.animate-slide-up { opacity: 1; transform: translateY(0); }
      `}</style>
    </section>
  )
}

export default Contact
