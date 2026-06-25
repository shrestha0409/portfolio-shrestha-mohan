import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursor) {
        cursor.style.left = mouseX + "px";
        cursor.style.top = mouseY + "px";
      }
    };

    const animate = () => {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      if (follower) {
        follower.style.left = followerX + "px";
        follower.style.top = followerY + "px";
      }
      requestAnimationFrame(animate);
    };

    const onEnter = () => {
      if (cursor) cursor.style.transform = "translate(-50%,-50%) scale(2)";
      if (follower) follower.style.borderColor = "rgba(139,92,246,0.8)";
    };
    const onLeave = () => {
      if (cursor) cursor.style.transform = "translate(-50%,-50%) scale(1)";
      if (follower) follower.style.borderColor = "rgba(34,211,238,0.4)";
    };

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a,button,[data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    animate();

    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
}
