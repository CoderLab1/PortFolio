import React, { useState } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { toast } from 'react-hot-toast';
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [ref1, isIntersecting1] = useIntersectionObserver({ threshold: 0.1 })
  const [ref2, isIntersecting2] = useIntersectionObserver({ threshold: 0.1 })
  const [ref3, isIntersecting3] = useIntersectionObserver({ threshold: 0.1 })

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      toast.success(data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.log(err);
      toast.error("Error sending email");
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Elements - Responsive Sizes */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-2xl lg:blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-2xl lg:blur-3xl opacity-40 animate-pulse"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header - Responsive */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 mb-4 sm:mb-6">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300">Get In Touch</span>
          </div>

          <h2
            ref={ref1}
            className={`fade-in-up text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4 sm:mb-6 ${isIntersecting1 ? 'animate-slide-up' : ''
              }`}
          >
            Let's Work Together
          </h2>

          <p
            className={`fade-in-up text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-4 ${isIntersecting1 ? 'animate-slide-up' : 'opacity-0'
              }`}
          >
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life and create something amazing.
          </p>
        </div>

        {/* Main Content Grid - Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Info - Enhanced Responsiveness */}
          <div
            ref={ref2}
            className={`fade-in-up ${isIntersecting2 ? 'animate-slide-up' : 'opacity-0'}`}
          >
            <div className="relative rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl sm:shadow-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95">
              {/* Header with Enhanced Design - Responsive */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2">
                    Let's Connect
                  </h3>
                  <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
                </div>
                
                {/* WhatsApp Icon - Enhanced Responsiveness */}
                <a
                  href="https://wa.me/919993723864?text=Hello%20Tanish,%20I%20want%20to%20connect%20with%20you"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-center sm:self-auto group relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white rounded-xl sm:rounded-2xl flex items-center justify-center text-lg sm:text-xl lg:text-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1"
                  aria-label="Chat on WhatsApp"
                >
                  <FaWhatsapp className="group-hover:scale-110 transition-transform duration-300" />
                  
                  {/* Floating Animation Effect */}
                  <div className="absolute inset-0 border-2 border-green-400 rounded-xl sm:rounded-2xl animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Tooltip - Hidden on mobile */}
                  <div className="hidden sm:block absolute -top-10 sm:-top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs font-semibold px-2 sm:px-3 py-1 sm:py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                    Chat on WhatsApp
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-gray-900 rotate-45"></div>
                  </div>
                </a>
              </div>

              {/* Contact Info List - Enhanced Responsiveness */}
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-gray-50 to-white dark:from-gray-700 dark:to-gray-600 rounded-xl sm:rounded-2xl hover:from-blue-50 hover:to-blue-100 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-lg sm:hover:shadow-xl border border-gray-200 dark:border-gray-600 hover:border-blue-200 dark:hover:border-blue-800 overflow-hidden"
                  >
                    {/* Animated Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Icon Container - Responsive */}
                    <div className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-slate-800 to-gray-900 dark:from-slate-300 dark:to-gray-400 group-hover:from-blue-600 group-hover:to-purple-600 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center text-white text-base sm:text-lg lg:text-xl group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                      {info.icon}
                    </div>
                    
                    {/* Text Content - Responsive */}
                    <div className="relative z-10 flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 truncate text-sm sm:text-base">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300 truncate text-xs sm:text-sm">
                        {info.value}
                      </p>
                    </div>
                    
                    {/* Hover Arrow - Hidden on mobile */}
                    <div className="relative z-10 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-blue-500 dark:text-blue-400 hidden sm:block">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-4 sm:mt-6 text-center">
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  Typically respond within 2 hours
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form - Responsive */}
          <div
            ref={ref3}
            className={`fade-in-up ${isIntersecting3 ? 'animate-slide-up' : 'opacity-0'}`}
          >
            <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg sm:shadow-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-gray-200 dark:border-gray-600 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-500 shadow-sm text-sm sm:text-base"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-gray-200 dark:border-gray-600 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-500 shadow-sm text-sm sm:text-base"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-gray-200 dark:border-gray-600 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-500 resize-none shadow-sm text-sm sm:text-base"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="group-hover:translate-x-1 transition-transform duration-300 hidden sm:inline">→</span>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
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

export default Contact