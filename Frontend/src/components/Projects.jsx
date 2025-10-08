import React from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

// Import images
import musicalMeetImg from '../assets/muscialMeet.png'
import taskAppImg from '../assets/Store.png'
import portfolioImg from '../assets/RentalHouse.png'

const Projects = () => {
  const [ref1, isIntersecting1] = useIntersectionObserver()

  const projects = [
    {
      id: 1,
      title: 'MusicalMeet – Online Platform for Musical Collaboration',
      description:
        'MusicalMeet is a web platform connecting musicians, singers, and enthusiasts, enabling collaboration, sharing creations, discovering talent, and building a creative community, showcasing skills in interactive, user-friendly, music-focused web development.',
      tags: ['React', 'Node.js', 'MongoDB'],
      img: musicalMeetImg,
      liveLink: 'https://www.musicalmeet.com/',
      sourceLink: 'https://github.com/1siddharth/frontend-musical',
    },
    {
      id: 2,
      title: 'PhoneStore – E-commerce Web Application for Mobile Phones',
      description:
        'PhoneStore is a responsive e-commerce web app showcasing mobile phones, featuring product filtering, detailed pages, and a user-friendly cart, demonstrating skills in modern, scalable, and interactive React-based web development.',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      img: taskAppImg,
      liveLink: 'https://phonestore-hjks.vercel.app/',
      sourceLink: 'https://github.com/CoderLab1/phonestore',
    },
    {
      id: 3,
      title: 'Rental Web House – Property Management Platform',
      description:
        'A responsive property management platform for rental houses, featuring property listings, booking management, and user authentication, showcasing skills in full-stack web development.',
      tags: ['React', 'Node.js', 'MongoDB'],
      img: portfolioImg,
      liveLink: 'https://yourportfolio.com',
      sourceLink: 'https://github.com/CoderLab1/rentalwebapplication',
    },
  ]

  return (
    <section id="projects" className="py-12 bg-white dark:bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2
            ref={ref1}
            className={`fade-in text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 ${
              isIntersecting1 ? 'visible' : ''
            }`}
          >
            Featured Projects
          </h2>
          <p
            className={`fade-in text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto ${
              isIntersecting1 ? 'visible' : ''
            }`}
          >
            Here are some of my recent projects that showcase my skills and creativity.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({ project, index }) => {
  const [ref, isIntersecting] = useIntersectionObserver()

  const tagColors = {
    'React': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-200 dark:border-blue-800',
    'Node.js': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border border-green-200 dark:border-green-800',
    'MongoDB': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-800',
    'Firebase': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 border border-orange-200 dark:border-orange-800',
    'Tailwind CSS': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800'
  }

  return (
    <div
      ref={ref}
      className={`fade-in project-card bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-500 hover:scale-105 flex flex-col h-full ${
        isIntersecting ? 'visible' : ''
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Project Image */}
      <div className="relative h-48 w-full overflow-hidden flex-shrink-0">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Card content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${tagColors[tag]}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons - Fixed at bottom */}
        <div className="flex gap-3 mt-auto pt-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 dark:bg-yellow-500 dark:hover:bg-yellow-400 text-white dark:text-gray-900 font-medium transition-all duration-300 transform hover:scale-105 text-center shadow-lg hover:shadow-xl"
          >
            Live Demo
          </a>
          <a
            href={project.sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 text-center"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects