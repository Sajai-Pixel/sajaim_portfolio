import React, { useState, useMemo } from 'react'
import ProjectCard from './ProjectCard'
import projects from '../assets/projects.js'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const categories = useMemo(() => {
    const unique = [...new Set(projects.map((p) => p.category).filter(Boolean))]
    return ['All', ...unique]
  }, [])

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <section
      id="projects"
      className="section-padding py-0 bg-brand-gray dark:bg-brand-dark scroll-reveal visible"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            My Projects
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4">
            A selection of my work. See something you like? Let's talk.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeFilter === category
                  ? 'bg-brand-orange text-white border-brand-orange shadow-md'
                  : 'bg-white text-gray-600 border-transparent hover:border-brand-orange/60 hover:text-brand-orange dark:bg-gray-800 dark:text-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid — key forces a clean re-render when the filter changes */}
        <div key={activeFilter} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-8">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  )
}

export default Projects