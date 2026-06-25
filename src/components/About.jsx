import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiCode, FiShield, FiCloud, FiCpu, FiUsers, FiGitBranch } from "react-icons/fi";

const highlights = [
  { icon: <FiCpu />, label: "Artificial Intelligence", desc: "Building ML models and AI-powered applications" },
  { icon: <FiShield />, label: "Cybersecurity", desc: "FinTech security, SIM swap protection, secure systems" },
  { icon: <FiCloud />, label: "Cloud Computing", desc: "Microsoft Azure certified, cloud-native deployments" },
  { icon: <FiCode />, label: "Full Stack Dev", desc: "React, Flask, Python — end-to-end product development" },
  { icon: <FiUsers />, label: "Hackathons", desc: "Competing and collaborating on rapid innovation" },
  { icon: <FiGitBranch />, label: "Open Source", desc: "Contributing to the global developer community" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">
            01 — About Me
          </p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl">
            Who I <span className="text-gradient-purple">am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5"
          >
            <p className="text-gray-300 leading-relaxed text-lg">
              I'm a Computer Science Engineering student at{" "}
              <span className="text-cyan-400 font-medium">Chandigarh University</span>,
              driven by a passion for building technology that solves real problems.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My journey spans Artificial Intelligence, Cybersecurity, Cloud Computing, and
              Full Stack Development. I love the challenge of combining these disciplines into
              cohesive, impactful products.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Outside academics, I actively participate in hackathons, contribute to open source
              projects, and explore the intersection of AI and security — building things I'd
              want to use myself.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              {["Python", "React", "Flask", "Azure", "OpenCV", "Streamlit"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-mono glass border border-white/10 text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-2 gap-3">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="glass border border-white/5 rounded-2xl p-4 hover:border-cyan-400/20 transition-all duration-300 group"
                whileHover={{ y: -3 }}
              >
                <div className="text-cyan-400 text-xl mb-2 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="font-display font-semibold text-sm text-white mb-1">
                  {item.label}
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
