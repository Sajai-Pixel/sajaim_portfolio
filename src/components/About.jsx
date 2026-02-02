import React from 'react'
import Skills from './Skills'

const About = () => {
  return (
    <section
      id="about"
      className="
        section-padding
        bg-brand-gray dark:bg-brand-dark
        scroll-reveal visible
      "
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left content */}
          <div className="text-content">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              About Me
            </h2>

            <div className="w-20 h-1 bg-brand-orange mb-6"></div>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I’m a Web Developer at Globosoft Solutions with 1 year of professional experience, working on building and maintaining user-facing web applications. My day-to-day work involves HTML, CSS, JavaScript, and e-commerce platforms like Shopify and OpenCart, where I’ve handled UI customization, layout improvements, and feature updates based on business requirements.
              <br /><br />
              Alongside my current role, I’m actively learning React and modern frontend development practices, focusing on component-based architecture, state management, and reusable UI patterns. I’m building React projects to strengthen my practical understanding and prepare for a transition into a React Developer / Frontend Developer role.
              <br /><br />
              I enjoy improving interfaces, writing clean code, and continuously upgrading my skills to work on more scalable and interactive web applications.
            </p>
          </div>

          {/* Skills card */}
          <div
            id="skills-card"
            className="
              bg-white dark:bg-gray-800
              p-8 rounded-2xl shadow-lg
              border border-gray-100 dark:border-gray-700
            "
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              My Skills
            </h3>

            <Skills />
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
