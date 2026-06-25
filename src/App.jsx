import { useState, useEffect } from "react";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import GitHub from "./components/GitHub";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Simulated loading delay
    const t = setTimeout(() => setLoaded(true), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* Overlays */}
      <Cursor />
      <ScrollProgress />
      <Loader done={loaded} />

      {/* App shell */}
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <Navbar darkMode={darkMode} toggleDark={() => setDarkMode(!darkMode)} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <GitHub />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
