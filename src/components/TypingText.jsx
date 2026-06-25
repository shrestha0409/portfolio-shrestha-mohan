import { useState, useEffect } from "react";

const roles = ["AI Enthusiast", "Cybersecurity Learner", "Full Stack Developer", "Problem Solver"];

export default function TypingText() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) {
      const t = setTimeout(() => setPause(false), 1500);
      return () => clearTimeout(t);
    }

    const full = roles[roleIdx];
    const speed = deleting ? 40 : 80;

    const t = setTimeout(() => {
      if (!deleting) {
        if (displayed.length < full.length) {
          setDisplayed(full.slice(0, displayed.length + 1));
        } else {
          setPause(true);
          setDeleting(true);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(displayed.slice(0, -1));
        } else {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(t);
  }, [displayed, deleting, pause, roleIdx]);

  return (
    <span className="text-gradient-cyan font-display font-semibold">
      {displayed}
      <span className="animate-pulse text-cyan-400">|</span>
    </span>
  );
}
