import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import {
SiPython,
SiFlask,
SiSqlite,
SiOpencv,
SiStreamlit,
} from "react-icons/si";

const projects = [
{
title: "Shadow Wallet",
image: "/images/shadow-wallet.png",
subtitle: "FinTech Security Platform",
description:
"A FinTech security platform built to combat SIM Swap fraud and financial identity theft. Features shadow transaction detection, anomaly alerts, and encrypted wallet protection.",
tech: ["Flask", "SQLite", "Python"],
techIcons: [<SiFlask />, <SiSqlite />, <SiPython />],
accent: "#22d3ee",
category: "Security / FinTech",
github: "https://github.com/shrestha0409/shadow-wallet",
border: "hover:border-cyan-400/30",
},

{
title: "Urban Nervous System",
image: "/images/urban-nervous-system.png",
subtitle: "Smart City Dashboard",
description:
"A smart city analytics dashboard integrating weather data, environmental monitoring, traffic insights, and satellite imagery for better urban planning.",
tech: ["Streamlit", "Python", "Google Earth Engine"],
techIcons: [<SiStreamlit />, <SiPython />],
accent: "#8b5cf6",
category: "Smart City / Data",
github: "https://github.com/shrestha0409/Urban-Nervous-System",
demo: "https://urban-nervous-system.vercel.app",
border: "hover:border-purple-400/30",
},

{
title: "Virtual Mouse",
image: "/images/virtual-mouse.png",
subtitle: "Computer Vision Interface",
description:
"Control your computer using hand gestures. Built using OpenCV and MediaPipe for real-time cursor movement, clicking, scrolling and gesture recognition.",
tech: ["Python", "OpenCV", "MediaPipe"],
techIcons: [<SiPython />, <SiOpencv />],
accent: "#10b981",
category: "Computer Vision",
github: "https://github.com/shrestha0409/virtual_mouse",
border: "hover:border-emerald-400/30",
},
];

function ProjectCard({ project, delay }) {
const ref = useRef(null);
const inView = useInView(ref, {
once: true,
margin: "-80px",
});

return (
<motion.div
ref={ref}
initial={{ opacity: 0, y: 40 }}
animate={inView ? { opacity: 1, y: 0 } : {}}
transition={{ duration: 0.6, delay }}
whileHover={{ y: -8 }}
className={`group glass border border-white/10 ${project.border} rounded-2xl overflow-hidden transition-all duration-300`}
> <div className="relative h-52 overflow-hidden"> <img
       src={project.image}
       alt={project.title}
       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
     />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

    <span
      className="absolute top-3 right-3 text-[10px] font-mono px-3 py-1 rounded-full backdrop-blur-md border border-white/20"
      style={{ color: project.accent }}
    >
      {project.category}
    </span>

    <div className="absolute bottom-4 left-4">
      <h3
        className="text-xl font-bold"
        style={{ color: project.accent }}
      >
        {project.title}
      </h3>

      <p className="text-xs text-gray-300">
        {project.subtitle}
      </p>
    </div>
  </div>

  <div className="p-6">
    <p className="text-gray-400 text-sm leading-relaxed mb-5">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-2 mb-6">
      {project.tech.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 text-xs rounded-full glass border border-white/10 text-gray-300"
        >
          {tech}
        </span>
      ))}
    </div>

    <div className="flex gap-3">
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 glass text-gray-300 hover:text-white transition-all"
      >
        <FiGithub />
        GitHub
      </a>

      <a
        href={project.demo}
        target="_blank"
        rel="noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-white"
        style={{
          background: `linear-gradient(135deg, ${project.accent}, ${project.accent}88)`,
        }}
      >
        <FiExternalLink />
        Live Demo
      </a>
    </div>
  </div>
</motion.div>
);
}

export default function Projects() {
const ref = useRef(null);
const inView = useInView(ref, {
once: true,
margin: "-100px",
});

return ( <section id="projects" className="section-padding relative"> <div className="max-w-6xl mx-auto px-6" ref={ref}>
<motion.div
initial={{ opacity: 0, y: 20 }}
animate={inView ? { opacity: 1, y: 0 } : {}}
transition={{ duration: 0.6 }}
className="mb-16"
> <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">
03 — Projects </p>

      <h2 className="font-display font-bold text-4xl lg:text-5xl">
        What I've{" "}
        <span className="text-gradient-cyan">
          built
        </span>
      </h2>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.title}
          project={project}
          delay={index * 0.1}
        />
      ))}
    </div>
  </div>
</section>

);
}
