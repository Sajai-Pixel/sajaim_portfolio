import React from 'react'

// One accent per category — the color now encodes the platform
// instead of just decorating. Full static class strings so Tailwind
// doesn't purge them.
const categoryConfig = {
  Custom: {
    icon: 'fa-code',
    strip: 'bg-amber-400',
    divider: 'bg-amber-400',
    pill: 'bg-amber-400/10 text-amber-700 ring-amber-500/30 dark:text-amber-300 dark:ring-amber-400/30',
    link: 'text-amber-600 hover:text-amber-500 dark:text-amber-400 dark:hover:text-amber-300',
    border: 'hover:border-amber-400/60',
  },
  OpenCart: {
    icon: 'fa-cart-shopping',
    strip: 'bg-sky-400',
    divider: 'bg-sky-400',
    pill: 'bg-sky-400/10 text-sky-700 ring-sky-500/30 dark:text-sky-300 dark:ring-sky-400/30',
    link: 'text-sky-600 hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300',
    border: 'hover:border-sky-400/60',
  },
  Shopify: {
    icon: 'fa-bag-shopping',
    strip: 'bg-emerald-500',
    divider: 'bg-emerald-500',
    pill: 'bg-emerald-500/10 text-emerald-700 ring-emerald-500/30 dark:text-emerald-300 dark:ring-emerald-400/30',
    link: 'text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300',
    border: 'hover:border-emerald-500/60',
  },
}

const ProjectCard = ({ project }) => {
  const style = categoryConfig[project.category] ?? categoryConfig.Custom

  return (
    <div
      className={`group flex flex-col rounded-2xl overflow-hidden
        bg-white dark:bg-gray-800
        border border-gray-200 dark:border-white/10 ${style.border}
        shadow-sm hover:shadow-xl dark:shadow-lg
        hover:-translate-y-1.5 transition-all duration-300`}
    >
      {/* The single color moment — a thin accent strip */}
      <div className={`h-1 w-full ${style.strip}`} />

      <div className="flex flex-col flex-1 p-6">
        {/* Category pill */}
        <span
          className={`self-start inline-flex items-center gap-1.5 mb-5
            text-xs font-medium px-2.5 py-1 rounded-full ring-1 ring-inset ${style.pill}`}
        >
          <i className={`fa-solid ${style.icon} text-[10px]`} />
          {project.category}
        </span>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-snug">
          {project.title}
        </h3>

        <div className={`w-10 h-0.5 rounded-full mt-3 mb-4 ${style.divider}`} />

        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Neutral tech chips — kept quiet so the accent leads */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((techItem, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-600 ring-1 ring-inset ring-gray-200
                dark:bg-white/5 dark:text-gray-300 dark:ring-white/10
                px-2.5 py-1 text-xs font-medium rounded-md"
            >
              {techItem}
            </span>
          ))}
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-auto inline-flex items-center gap-2 text-sm font-semibold
            transition-colors duration-200 ${style.link}`}
        >
          View Project
          <i className="fa-solid fa-arrow-right text-xs transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  )
}

export default ProjectCard