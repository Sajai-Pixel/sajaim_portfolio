import React from 'react'
const ProjectCard = ({ project }) => {
    return (
        <div
            id="project-card-1"
            className="
    group
    bg-white dark:bg-gray-800
    rounded-2xl overflow-hidden
    shadow-md hover:shadow-2xl
    hover:-translate-y-2 transition-all duration-300
    border border-brand-orange/80 dark:border-brand-orange/60
  "
        >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
                <img
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    src={project.image}
                    alt={project.title}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
          text-white text-lg sm:text-xl font-semibold
          flex items-center gap-2
          hover:text-brand-green transition-colors duration-200
        "
                    >
                        View Project
                        <i className="fa-solid fa-arrow-right text-xl transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-brand-dark dark:text-white">
                    {project.title}
                </h3>

                <div className="w-16 h-0.5 bg-brand-green my-2"></div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((techItem, index) => (
                        <span
                            key={index}
                            className="
            bg-green-100 text-green-800
            dark:bg-green-900/30 dark:text-green-300
            px-3 py-1 text-xs font-medium rounded-full
          "
                        >
                            {techItem}
                        </span>
                    ))}
                </div>
            </div>
        </div>

    )
}
export default ProjectCard