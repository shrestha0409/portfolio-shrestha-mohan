import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiPython, SiCplusplus, SiJavascript, SiHtml5, SiCss,
  SiReact, SiTailwindcss, SiFlask, SiSqlite, SiGit,
  SiGithub, SiVscodium
} from "react-icons/si";
import { FiCode, FiCloud } from "react-icons/fi";

const groups = [
  {
    label: "Programming",
    color: "from-cyan-400 to-blue-500",
    skills: [
      { name: "Python", icon: <SiPython />, level: 90 },
      { name: "C++", icon: <SiCplusplus />, level: 75 },
      { name: "JavaScript", icon: <SiJavascript />, level: 70 },
    ],
  },
  {
    label: "Frontend",
    color: "from-purple-400 to-pink-500",
    skills: [
      { name: "HTML", icon: <SiHtml5 />, level: 92 },
      { name: "CSS", icon: <SiCss />, level: 85 },
      { name: "React", icon: <SiReact />, level: 72 },
      { name: "Tailwind", icon: <SiTailwindcss />, level: 80 },
    ],
  },
  {
    label: "Backend",
    color: "from-emerald-400 to-cyan-500",
    skills: [
      { name: "Flask", icon: <SiFlask />, level: 82 },
      { name: "SQLite", icon: <SiSqlite />, level: 78 },
    ],
  },
  {
    label: "Tools & Cloud",
    color: "from-orange-400 to-rose-500",
    skills: [
      { name: "Git", icon: <SiGit />, level: 88 },
      { name: "GitHub", icon: <SiGithub />, level: 88 },
      { name: "VS Code", icon: <FiCode />, level: 95 },
      { name: "Azure", icon: <FiCloud />, level: 68 },
    ],
  },
];

function SkillBar({ name, icon, level, delay, color }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 text-gray-300 text-sm font-medium">
          <span className="text-base text-gray-400 group-hover:text-cyan-400 transition-colors">
            {icon}
          </span>
          {name}
        </div>
        <span className="text-xs font-mono text-gray-500">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, var(--from), var(--to))` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
        >
          <div
            className={`h-full w-full rounded-full bg-gradient-to-r ${color}`}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section-padding relative bg-[#0d0d0d]">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">
            02 — Skills
          </p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl">
            Tech <span className="text-gradient-cyan">Stack</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
              className="glass border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-1 h-6 rounded-full bg-gradient-to-b ${group.color}`} />
                <h3 className="font-display font-semibold text-white">{group.label}</h3>
              </div>
              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    delay={gi * 0.1 + si * 0.06}
                    color={group.color}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
