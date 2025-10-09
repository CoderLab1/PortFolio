import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

// Import images
import musicalMeetImg from '../assets/muscialMeet.png'
import taskAppImg from '../assets/Store.png'
import portfolioImg from '../assets/RentalHouse.png'

// Icons
const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const Projects = () => {
  const [ref1, isIntersecting1] = useIntersectionObserver({ threshold: 0.1 })
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    {
      id: 1,
      title: 'MusicalMeet',
      subtitle: 'Online Platform for Musical Collaboration',
      description: 'MusicalMeet is a web platform connecting musicians, singers, and enthusiasts, enabling collaboration, sharing creations, discovering talent, and building a creative community.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
      img: musicalMeetImg,
      liveLink: 'https://www.musicalmeet.com/',
      sourceLink: 'https://github.com/1siddharth/frontend-musical',
      featured: true,
    },
    {
      id: 2,
      title: 'PhoneStore',
      subtitle: 'E-commerce Web Application for Mobile Phones',
      description: 'PhoneStore is a responsive e-commerce web app showcasing mobile phones, featuring product filtering, detailed pages, and a user-friendly cart with seamless checkout experience.',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Context API'],
      img: taskAppImg,
      liveLink: 'https://phonestore-hjks.vercel.app/',
      sourceLink: 'https://github.com/CoderLab1/phonestore',
      featured: true,
    },
    {
      id: 3,
      title: 'Rental House',
      subtitle: 'Property Management Platform',
      description: 'A responsive property management platform for rental houses, featuring property listings, booking management, user authentication, and real-time availability tracking.',
      tags: ['React', 'Node.js', 'MongoDB', 'JWT', 'REST API'],
      img: portfolioImg,
      liveLink: 'https://yourportfolio.com',
      sourceLink: 'https://github.com/CoderLab1/rentalwebapplication',
      featured: false,
    },
  ]

  const allTags = ['All', ...new Set(projects.flatMap(project => project.tags))]

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter))

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-20"></div>
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            ref={ref1}
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-700 transform ${isIntersecting1 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
          >
            Featured Projects
          </h2>
          <p
            className={`text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 transition-all duration-700 delay-200 transform ${isIntersecting1 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
          >
            Here are some of my recent projects that showcase my skills and creativity in web development.
          </p>

          {/* Filter Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeFilter === tag
                  ? 'bg-yellow-500 text-gray-900 shadow-lg shadow-yellow-500/25'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700'
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More Section */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Interested in seeing more of my work?</p>
          <a
            href="https://github.com/CoderLab1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl text-white font-medium hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <GithubIcon />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({ project, index }) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 })
  const [isHovered, setIsHovered] = useState(false)

  const tagColors = {
    React: 'from-blue-500/20 to-blue-600/20 text-blue-300 border-blue-500/30',
    'Node.js': 'from-green-500/20 to-green-600/20 text-green-300 border-green-500/30',
    MongoDB: 'from-green-400/20 to-green-500/20 text-green-200 border-green-400/30',
    Express: 'from-gray-500/20 to-gray-600/20 text-gray-300 border-gray-500/30',
    'Socket.io': 'from-orange-500/20 to-orange-600/20 text-orange-300 border-orange-500/30',
    Firebase: 'from-yellow-500/20 to-yellow-600/20 text-yellow-300 border-yellow-500/30',
    'Tailwind CSS': 'from-cyan-500/20 to-cyan-600/20 text-cyan-300 border-cyan-500/30',
    'Context API': 'from-purple-500/20 to-purple-600/20 text-purple-300 border-purple-500/30',
    JWT: 'from-pink-500/20 to-pink-600/20 text-pink-300 border-pink-500/30',
    'REST API': 'from-indigo-500/20 to-indigo-600/20 text-indigo-300 border-indigo-500/30',
  }


  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isIntersecting) {
      setHasAnimated(true); // Trigger animation once
    }
  }, [isIntersecting]);

  const isVisible = hasAnimated;

  return (
    <div
      ref={ref}
      className={`group bg-gray-800/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50 transition-all duration-500 flex flex-col h-full ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      style={{
        transitionDelay: `${index * 150}ms`,
        transform: isHovered ? 'translateY(-8px) scale(1.02)' : ''
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image with Overlay */}
      <div className="relative h-48 w-full overflow-hidden flex-shrink-0">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 text-xs font-bold rounded-full shadow-lg">
              ⭐ Featured
            </span>
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 bg-white text-gray-900 p-3 rounded-2xl hover:bg-yellow-400 shadow-lg"
          >
            <ExternalLinkIcon />
          </a>
          <a
            href={project.sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 bg-gray-800 text-white p-3 rounded-2xl hover:bg-gray-700 shadow-lg"
          >
            <GithubIcon />
          </a>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-white mb-1 leading-tight">
            {project.title}
          </h3>
          <p className="text-yellow-400 text-sm font-medium mb-3">
            {project.subtitle}
          </p>
          <p className="text-gray-400 mb-4 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r border transition-all duration-300 hover:scale-105 ${tagColors[tag] || 'from-gray-500/20 to-gray-600/20 text-gray-300 border-gray-500/30'
                  }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto pt-4 border-t border-gray-700/50">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:from-yellow-400 hover:to-orange-400"
          >
            <ExternalLinkIcon />
            Live Demo
          </a>
          <a
            href={project.sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 flex-1 px-4 py-3 rounded-xl border border-gray-600 text-gray-300 font-medium hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105"
          >
            <GithubIcon />
            Source
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects