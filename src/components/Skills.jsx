import { motion } from "framer-motion";

const Skills = () => {
  // Parent container animation
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  // Each item animation
  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.92 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 180,
        damping: 15,
      },
    },
  };

  const skills = [
    { icon: "fa-html5", color: "#E34F26", name: "HTML", bg: "from-orange-500/10 to-red-500/5", style: "brands" },
    { icon: "fa-css3-alt", color: "#1572B6", name: "CSS", bg: "from-blue-500/10 to-cyan-500/5", style: "brands" },
    { icon: "fa-square-js", color: "#F7DF1E", name: "JavaScript", bg: "from-yellow-400/20 to-amber-500/10", style: "brands" },
    { icon: "fa-react", color: "#61DBFB", name: "React", bg: "from-cyan-400/15 to-blue-500/10", style: "brands" },
    { icon: "fa-node-js", color: "#68A063", name: "Node.js", bg: "from-green-500/10 to-emerald-600/5", style: "brands" },
    { icon: "fa-database", color: "#4DB33D", name: "MongoDB", bg: "from-green-600/10 to-lime-500/5", style: "solid" },
    { icon: "fa-figma", color: "#F24E1E", name: "Figma", bg: "from-red-500/10 to-pink-500/5", style: "brands" },
    { icon: "fa-shopify", color: "#7AB55C", name: "Shopify", bg: "from-green-400/15 to-emerald-500/10", style: "brands" },
    { icon: "fa-opencart", color: "#0073BA", name: "OpenCart", bg: "from-blue-500/10 to-indigo-500/5", style: "brands" },
  ];

  return (
    <motion.div
      className="flex md:flex-wrap flex-col md:flex-row gap-5 md:gap-6 justify-center max-w-5xl mx-auto"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          variants={item}
          whileHover={{
            scale: 1.12,
            y: -6,
            boxShadow: "0 20px 35px -10px rgba(0,0,0,0.35)",
            transition: { type: "spring", stiffness: 300, damping: 15 },
          }}
          whileTap={{ scale: 0.96 }}
          className={`
            group relative flex items-center gap-3.5
            bg-gradient-to-br ${skill.bg}
            dark:from-brand-dark/90 dark:to-brand-dark
            backdrop-blur-sm
            border border-gray-200/60 dark:border-gray-700/50
            px-6 py-3.5 rounded-2xl
            shadow-sm hover:shadow-xl transition-shadow duration-300
            cursor-pointer select-none
          `}
        >
          {/* Icon background */}
          <div
            className="flex items-center justify-center w-11 h-11 rounded-xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
            style={{ backgroundColor: `${skill.color}20` }}
          >
            <i
              className={`fa-${skill.style} ${skill.icon} text-2xl sm:text-3xl transition-all duration-300 group-hover:scale-110`}
              style={{ color: skill.color }}
            />
          </div>

          {/* Skill name */}
          <span className="font-semibold text-base sm:text-lg text-gray-800 dark:text-gray-100 tracking-tight">
            {skill.name}
          </span>

          {/* Shine overlay */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 via-white/10 to-white/0 dark:via-white/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Skills;
