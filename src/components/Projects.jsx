import React from 'react'
import ProjectCard from './ProjectCard'
import projects from '../assets/projects.js'

const Projects = () => {
    return (
        <section
            id="projects"
            className="
    section-padding
    bg-brand-gray dark:bg-brand-dark
    scroll-reveal visible
  "
        >
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                        My Projects
                    </h2>

                    <p className="text-gray-500 dark:text-gray-400 mt-4">
                        A selection of my work. See something you like? Let's talk.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

            </div>
        </section>

    )
}

export default Projects
