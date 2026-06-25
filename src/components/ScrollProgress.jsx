import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / total) * 100;
      if (barRef.current) barRef.current.style.width = progress + "%";
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="scroll-progress fixed top-0 left-0 h-[2px] z-[9997]"
      ref={barRef}
      style={{ background: "linear-gradient(90deg,#22d3ee,#8b5cf6)", width: "0%" }} />
  );
}
