import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-display font-bold text-xl text-gradient-cyan">SM</span>
          <p className="text-gray-600 text-xs mt-1 font-mono">
            © {new Date().getFullYear()} Shrestha Mohan · Built with React & ❤️
          </p>
        </div>

        <div className="flex items-center gap-4">
          {[
            { icon: <FiGithub size={18} />, href: "https://github.com/shrestha0409" },
            { icon: <FiLinkedin size={18} />, href: "https://www.linkedin.com/in/shrestha-mohan-700246378" },
            { icon: <FiMail size={18} />, href: "mailto:shresthamohan0406@gmail.com" },
          ].map(({ icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-gray-600 hover:text-cyan-400 transition-colors"
            >
              {icon}
            </a>
          ))}

          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="ml-2 p-2 rounded-xl glass border border-white/10 text-gray-400 hover:text-white hover:border-cyan-400/30 transition-all"
          >
            <FiArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
