import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
  id="experience"
  className="
    py-24
    bg-white dark:bg-brand-dark
    scroll-reveal visible
  "
>
  <div className="container mx-auto px-6">

    {/* Header */}
    <div className="text-center max-w-2xl mx-auto mb-16">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
        Education &amp; Experience
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mt-4">
        My professional journey and academic background.
      </p>
    </div>

    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-200 dark:bg-gray-700"></div>

      <div className="space-y-12">

        {/* Experience 1 */}
        <div className="relative group">
          <div className="md:flex items-center">
            <div className="md:w-1/2 md:pr-8 text-right">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                2025 - Present
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Web Developer
              </h3>
              <p className="text-brand-green font-medium">
                Globosoft Solutions
              </p>
            </div>

            <div
              className="
                hidden md:block w-8 h-8 rounded-full
                bg-white dark:bg-brand-dark
                border-2 border-brand-green
                absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2
                group-hover:bg-brand-green
                transition-colors duration-300
              "
            ></div>

            <div
              className="
                md:w-1/2 md:pl-8 mt-4 md:mt-0 p-6
                bg-gray-50 dark:bg-gray-800
                rounded-2xl
                border border-gray-200 dark:border-gray-700
                group-hover:border-brand-green
                transition-colors duration-300
              "
            >
              <p className="text-gray-600 dark:text-gray-300">
                Working on the development and customization of eCommerce websites using Shopify and OpenCart, focusing on theme customization, UI improvements, responsive design, and maintaining consistent user experience while supporting performance and content updates.
              </p>
            </div>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="relative group">
          <div className="md:flex items-center flex-row-reverse">
            <div className="md:w-1/2 md:pl-8 text-left">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                2024
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                MERN Full Stack Course
              </h3>
              <p className="text-brand-orange font-medium">
                Luminar Technolab
              </p>
            </div>

            <div
              className="
                hidden md:block w-8 h-8 rounded-full
                bg-white dark:bg-brand-dark
                border-2 border-brand-orange
                absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2
                group-hover:bg-brand-orange
                transition-colors duration-300
              "
            ></div>

            <div
              className="
                md:w-1/2 md:pr-8 mt-4 md:mt-0 p-6
                bg-gray-50 dark:bg-gray-800
                rounded-2xl
                border border-gray-200 dark:border-gray-700
                group-hover:border-brand-orange
                transition-colors duration-300
              "
            >
              <p className="text-gray-600 dark:text-gray-300">
                Completed a comprehensive MERN stack course covering MongoDB, Express.js, React, and Node.js, with hands-on experience in building responsive user interfaces, RESTful APIs, basic authentication, and full-stack project development.
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="relative group">
          <div className="md:flex items-center">
            <div className="md:w-1/2 md:pr-8 text-right">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                2021 - 2024
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                B.Sc. in Computer Science
              </h3>
              <p className="text-brand-green font-medium">
                University of Calicut
              </p>
            </div>

            <div
              className="
                hidden md:block w-8 h-8 rounded-full
                bg-white dark:bg-brand-dark
                border-2 border-brand-green
                absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2
                group-hover:bg-brand-green
                transition-colors duration-300
              "
            ></div>

            <div
              className="
                md:w-1/2 md:pl-8 mt-4 md:mt-0 p-6
                bg-gray-50 dark:bg-gray-800
                rounded-2xl
                border border-gray-200 dark:border-gray-700
                group-hover:border-brand-green
                transition-colors duration-300
              "
            >
              <p className="text-gray-600 dark:text-gray-300">
                Completed a Bachelor’s degree in Computer Science with a strong foundation in programming, data structures, databases, and web technologies, along with practical exposure to software development concepts and problem-solving.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

  );
}

export default Experience;