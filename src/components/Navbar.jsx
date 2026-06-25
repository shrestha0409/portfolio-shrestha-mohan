import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";

const links = ["Home","About","Skills","Projects","Certifications","Contact"];

export default function Navbar({ darkMode, toggleDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-white/5 py-3" : "py-5"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="font-display font-bold text-2xl cursor-pointer"
          onClick={() => scrollTo("Home")}
        >
          <span className="text-gradient-cyan">SM</span>
        </motion.div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className={`relative px-4 py-2 text-sm font-body transition-colors duration-200 rounded-md ${
                  active === link ? "text-cyan-400" : "text-gray-400 hover:text-white"
                }`}
              >
                {active === link && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-md bg-white/5"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative">{link}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleDark}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white"
          >
            {open ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/5"
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="w-full text-left px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
