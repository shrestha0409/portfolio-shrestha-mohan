import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import { HiDownload } from "react-icons/hi";
import Particles from "./Particles";
import TypingText from "./TypingText";
import Hero3D from "./Hero3D";

export default function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <Particles />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={0}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-cyan-400/20 text-cyan-400 text-xs font-mono mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Available for opportunities
            </motion.div>

            <motion.h1
              variants={fadeUp} initial="hidden" animate="show" custom={1}
              className="font-display font-bold text-5xl lg:text-7xl leading-[1.05] mb-4"
            >
              Shrestha<br />
              <span className="text-gradient-cyan">Mohan</span>
            </motion.h1>

            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={2}
              className="text-xl lg:text-2xl text-gray-400 mb-2 font-body h-8"
            >
              <TypingText />
            </motion.div>

            <motion.p
              variants={fadeUp} initial="hidden" animate="show" custom={3}
              className="text-gray-500 text-sm font-mono tracking-wider mb-8"
            >
              CS Engineering · Chandigarh University
            </motion.p>

            <motion.p
              variants={fadeUp} initial="hidden" animate="show" custom={4}
              className="text-gray-400 text-base leading-relaxed max-w-md mb-10"
            >
              Building AI, Cybersecurity and Smart City Solutions. Passionate about creating
              technology that makes a real-world difference.
            </motion.p>

            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={5}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById("projects").scrollIntoView({ behavior: "smooth" }); }}
                className="px-6 py-3 rounded-xl font-semibold text-sm text-bg transition-all duration-200 hover:scale-105"
                style={{ background: "linear-gradient(135deg,#22d3ee,#8b5cf6)" }}
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 rounded-xl font-semibold text-sm text-white glass border border-white/10 flex items-center gap-2 hover:border-cyan-400/30 hover:bg-white/5 transition-all duration-200"
              >
                <HiDownload size={16} /> Download Resume
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={6}
              className="flex items-center gap-4"
            >
              {[
                { icon: <FiGithub size={20} />, href: "https://github.com/shrestha0409", label: "GitHub" },
                { icon: <FiLinkedin size={20} />, href: "https://www.linkedin.com/in/shrestha-mohan-700246378", label: "LinkedIn" },
                { icon: <FiMail size={20} />, href: "mailto:shresthamohan0406@gmail.com", label: "Email" },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl glass border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-200 hover:scale-110"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — 3D object */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative h-[420px] lg:h-[520px] flex items-center justify-center"
          >
            {/* Glow ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full border border-cyan-400/10 animate-spin-slow" />
              <div className="absolute w-48 h-48 rounded-full border border-purple-400/10 animate-[spin_14s_linear_infinite_reverse]" />
            </div>
            <div className="absolute w-72 h-72 rounded-full bg-cyan-500/5 blur-3xl" />
            <Hero3D />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <FiArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
