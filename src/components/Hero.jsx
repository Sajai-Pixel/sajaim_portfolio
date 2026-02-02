import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  // Texts to type out
  const texts = [
    "Hi, I’m Sajai M", "Web Developer"
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    let timeout = null;

    // When the full text is typed, pause before deleting
    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);

      // When fully deleted, move to next text and start typing
    } else if (isDeleting && text === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }, 500);

      // Otherwise, keep typing or deleting one character at a time
    } else {
      const delay = isDeleting ? 40 : 120;
      timeout = setTimeout(() => {
        setText((prev) =>
          isDeleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
        );
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <section
      id="home"
      className="
    relative h-screen flex items-center justify-center text-center overflow-hidden
    bg-[linear-gradient(to_right,#4f4f4f3a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f3a_1px,transparent_1px)]
    dark:bg-brand-dark
    bg-size-[60px_60px] "
    >
      <div className="relative z-10 p-6 max-w-4xl mx-auto">

        {/* Heading */}
        <motion.h1
          className="
        text-3xl md:text-7xl font-extrabold
        text-brand-dark dark:text-white
        leading-tight mb-4
      "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {text}
          <motion.span
            className="inline-block w-[3px] bg-brand-dark dark:bg-white ml-1"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.h1>

        {/* Sub content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Frontend Developer specializing in React, JavaScript, and UI Design.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-4 mt-8">

            <a
              href="#projects"
              className="
            bg-brand-green text-white
            px-8 py-4 rounded-xl font-semibold
            hover:bg-green-700
            transition-all duration-300
            shadow-lg hover:shadow-xl
            w-full md:w-auto text-center
          "
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="
            bg-transparent
            border-2 border-brand-green
            text-brand-green
            px-8 py-4 rounded-xl font-semibold
            hover:bg-brand-green hover:text-white
            transition-all duration-300
            w-full md:w-auto text-center
          "
            >
              Contact Me
            </a>

          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about">
          <i className="fa-solid fa-arrow-down text-2xl text-gray-500 dark:text-gray-400"></i>
        </a>
      </div>
    </section>

  );
};

export default Hero;
