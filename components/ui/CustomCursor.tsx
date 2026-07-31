"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hovering, setHovering]   = useState(false);
  const [visible,  setVisible]    = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const dotX   = useSpring(mouseX, { stiffness: 450, damping: 28, mass: 0.3 });
  const dotY   = useSpring(mouseY, { stiffness: 450, damping: 28, mass: 0.3 });
  const ringX  = useSpring(mouseX, { stiffness: 140, damping: 24, mass: 0.6 });
  const ringY  = useSpring(mouseY, { stiffness: 140, damping: 24, mass: 0.6 });

  useEffect(() => {
    if (typeof window === "undefined" || "ontouchstart" in window) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onOver = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.tagName === "A" || t.tagName === "BUTTON" || t.closest("[data-cursor='hover']"))
        setHovering(true);
    };

    const onOut = () => setHovering(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [mouseX, mouseY, visible]);

  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      {/* Small dot */}
      <motion.div
        className="fixed top-0 left-0 z-[99999] pointer-events-none rounded-full"
        style={{
          x: dotX, y: dotY,
          translateX: "-50%", translateY: "-50%",
          background: "#16140F",
        }}
        animate={{ width: hovering ? 6 : 4, height: hovering ? 6 : 4, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.15 }}
      />

      {/* Outer ring — square on hover (editorial stamp feel) */}
      <motion.div
        className="fixed top-0 left-0 z-[99998] pointer-events-none"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width:  hovering ? 40 : 24,
          height: hovering ? 40 : 24,
          borderRadius: hovering ? "0px" : "50%",
          opacity: visible ? (hovering ? 0.8 : 0.4) : 0,
          borderColor: hovering ? "#C83232" : "rgba(22, 20, 15, 0.4)",
        }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 left-0 z-[99998] pointer-events-none border"
      />
    </>
  );
}
