import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/logo.png";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-gray-900 dark:text-white">
          <img src={logo} alt="" width="128px" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {["Home", "About", "Experience", "Projects", "Contact"].map(
            (item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-600 dark:text-white hover:text-[#27ae60] transition-colors duration-300 group"
              >
                {item}
                {/* underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#27ae60] transition-all duration-300 group-hover:w-full"></span>
              </a>
            )
          )}
        </div>

        <div>
        {/* Resume Button */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-[#27ae60] me-2 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
        >
          Resume
        </a>
        <ThemeToggle/>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
        
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-sm shadow-md py-4 px-6 space-y-4 text-center animate-fade-in">
          {["Home", "About", "Experience", "Projects", "Contact"].map(
            (item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-700 hover:text-[#27ae60] transition-colors duration-300 relative group"
                onClick={() => setMenuOpen(false)}
              >
                {item}
                <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] bg-[#27ae60] transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
              </a>
            )
          )}

          <a
            href="#contact"
            className="inline-block bg-[#27ae60] text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
