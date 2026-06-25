import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiCloud, FiAward, FiExternalLink } from "react-icons/fi";

const certs = [
  {
    title: "Microsoft Azure AI Fundamentals",
    code: "AI-900",
    issuer: "Microsoft",
    year: "2024",
    color: "#22d3ee",
    gradient: "from-cyan-500/15 to-blue-500/5",
    border: "hover:border-cyan-400/30",
    icon: <FiCloud />,
    desc: "Core concepts of machine learning, computer vision, NLP, and conversational AI on Azure.",
    verify: "#",
  },
  {
    title: "Microsoft Azure Fundamentals",
    code: "AZ-900",
    issuer: "Microsoft",
    year: "2024",
    color: "#8b5cf6",
    gradient: "from-purple-500/15 to-blue-500/5",
    border: "hover:border-purple-400/30",
    icon: <FiCloud />,
    desc: "Cloud concepts, Azure services, pricing, SLAs, and cloud architecture best practices.",
    verify: "#",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="section-padding relative bg-[#0d0d0d]">
      <div className="absolute top-0 left-1/2 w-96 h-64 bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">
            04 — Certifications
          </p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl">
            Industry <span className="text-gradient-purple">Recognition</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.code}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              className={`glass border border-white/5 ${cert.border} rounded-2xl p-6 transition-all duration-300 group`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: `${cert.color}18`, color: cert.color }}
                >
                  {cert.icon}
                </div>
                <span
                  className="text-2xl font-display font-black opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{ color: cert.color }}
                >
                  {cert.code}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-white text-base mb-1">
                {cert.title}
              </h3>
              <p className="text-xs font-mono text-gray-500 mb-3">
                {cert.issuer} · {cert.year}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{cert.desc}</p>

              {/* Badge + verify */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs" style={{ color: cert.color }}>
                  <FiAward size={13} />
                  <span className="font-mono">Certified</span>
                </div>
                <a
                  href={cert.verify}
                  className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition-colors"
                >
                  Verify <FiExternalLink size={11} />
                </a>
              </div>

              {/* Accent bar */}
              <div
                className="mt-4 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg,${cert.color},transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
