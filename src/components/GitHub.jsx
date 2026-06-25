import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiGithub, FiStar, FiGitCommit, FiGitMerge } from "react-icons/fi";

const stats = [
  { label: "Total Commits", value: "450+", icon: <FiGitCommit />, color: "#22d3ee" },
  { label: "GitHub Stars", value: "30+", icon: <FiStar />, color: "#8b5cf6" },
  { label: "Pull Requests", value: "25+", icon: <FiGitMerge />, color: "#10b981" },
  { label: "Repositories", value: "20+", icon: <FiGithub />, color: "#f59e0b" },
];

export default function GitHub() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const username = "shresthaMohan"; // UPDATE THIS

  return (
    <section id="github" className="section-padding relative">
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-emerald-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">
            05 — Open Source
          </p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl">
            GitHub <span className="text-gradient-cyan">Activity</span>
          </h2>
        </motion.div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass border border-white/5 rounded-2xl p-5 text-center hover:border-white/10 transition-all group"
              whileHover={{ y: -3 }}
            >
              <div className="flex items-center justify-center mb-3 text-2xl" style={{ color: s.color }}>
                {s.icon}
              </div>
              <div className="font-display font-bold text-2xl text-white mb-1">{s.value}</div>
              <div className="text-gray-500 text-xs">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* GitHub cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glass border border-white/5 rounded-2xl overflow-hidden"
          >
            <div className="p-4 border-b border-white/5">
              <h4 className="font-display text-sm text-gray-400">GitHub Stats</h4>
            </div>
            <div className="flex items-center justify-center p-4 min-h-[180px] bg-transparent">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&text_color=9ca3af&icon_color=22d3ee&title_color=ffffff&bg_color=00000000&border_color=1f1f1f&hide_border=false`}
                alt="GitHub Stats"
                className="max-w-full"
                onError={(e) => { e.target.style.display = "none"; }}
              />
            </div>
          </motion.div>

          {/* Streak */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.38, duration: 0.6 }}
            className="glass border border-white/5 rounded-2xl overflow-hidden"
          >
            <div className="p-4 border-b border-white/5">
              <h4 className="font-display text-sm text-gray-400">Contribution Streak</h4>
            </div>
            <div className="flex items-center justify-center p-4 min-h-[180px]">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=transparent&ring=22d3ee&fire=8b5cf6&currStreakLabel=22d3ee&sideLabels=9ca3af&border=1f1f1f&dates=6b7280&background=00000000`}
                alt="GitHub Streak"
                className="max-w-full"
                onError={(e) => { e.target.style.display = "none"; }}
              />
            </div>
          </motion.div>

          {/* Top Languages */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.46, duration: 0.6 }}
            className="glass border border-white/5 rounded-2xl overflow-hidden"
          >
            <div className="p-4 border-b border-white/5">
              <h4 className="font-display text-sm text-gray-400">Top Languages</h4>
            </div>
            <div className="flex items-center justify-center p-4 min-h-[180px]">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&text_color=9ca3af&title_color=ffffff&bg_color=00000000&border_color=1f1f1f`}
                alt="Top Languages"
                className="max-w-full"
                onError={(e) => { e.target.style.display = "none"; }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
