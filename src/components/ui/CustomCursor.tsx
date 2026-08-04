import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [cursorLabel, setCursorLabel] = useState<string | null>(null);
  const [clickRipples, setClickRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  // Hardware accelerated motion values for 60/144fps responsiveness
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // Ultra-fast spring physics for outer ring (no drag, zero latency feeling)
  const ringX = useSpring(rawX, { stiffness: 1200, damping: 50, mass: 0.05 });
  const ringY = useSpring(rawY, { stiffness: 1200, damping: 50, mass: 0.05 });

  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;
    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      const clientX = e.clientX;
      const clientY = e.clientY;

      rawX.set(clientX);
      rawY.set(clientY);

      // Instant 0ms hardware accelerated translate for central dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${clientX - 4}px, ${clientY - 4}px, 0)`;
      }

      const target = e.target as HTMLElement;
      if (!target) {
        setIsHovered(false);
        setCursorLabel(null);
        return;
      }

      const labelAttr = target.getAttribute("data-cursor-label") || target.closest("[data-cursor-label]")?.getAttribute("data-cursor-label");
      if (labelAttr) {
        setCursorLabel(labelAttr);
        setIsHovered(true);
      } else {
        setCursorLabel(null);
        const isInteractive =
          target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.closest("button") !== null ||
          target.closest("a") !== null ||
          target.getAttribute("role") === "button";
        setIsHovered(isInteractive);
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      setIsClicked(true);
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setClickRipples((prev) => [...prev.slice(-3), newRipple]);
      setTimeout(() => {
        setClickRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 600);
    };

    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [rawX, rawY]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden select-none">
      {/* ─── CLICK COMPASS RIPPLES ─── */}
      <AnimatePresence>
        {clickRipples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ scale: 0.2, opacity: 0.9, rotate: 0 }}
            animate={{ scale: 3.5, opacity: 0, rotate: 90 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="fixed top-0 left-0 w-10 h-10 rounded-full border border-[#c5a059] border-dashed pointer-events-none flex items-center justify-center"
            style={{
              left: ripple.x - 20,
              top: ripple.y - 20,
            }}
          >
            <div className="w-full h-[1px] bg-[#c5a059]/40" />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* ─── ARCHITECTURAL RING (HIGH-PERFORMANCE MOTION VALUE & SPRING) ─── */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#c5a059] pointer-events-none flex items-center justify-center"
        style={{
          x: ringX,
          y: ringY,
          translateX: cursorLabel ? -32 : -16,
          translateY: cursorLabel ? -32 : -16,
          willChange: "transform",
        }}
        animate={{
          width: cursorLabel ? 64 : 32,
          height: cursorLabel ? 64 : 32,
          scale: isClicked ? 0.75 : isHovered && !cursorLabel ? 1.5 : 1,
          borderColor: isHovered ? "#e5c178" : "#c5a059",
          backgroundColor: cursorLabel ? "rgba(24, 20, 16, 0.85)" : isHovered ? "rgba(197, 160, 89, 0.15)" : "transparent",
        }}
        transition={{
          type: "spring",
          stiffness: 1200,
          damping: 50,
        }}
      >
        {cursorLabel && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[9px] font-serif uppercase tracking-widest font-black text-[#e5c178] px-1 text-center"
          >
            {cursorLabel}
          </motion.span>
        )}
      </motion.div>

      {/* ─── CENTRAL PRECISION DOT (INSTANT 0MS GPU TRANSLATE) ─── */}
      {!cursorLabel && (
        <div
          ref={dotRef}
          className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#181410] border border-[#c5a059] pointer-events-none transition-transform duration-75 ease-out"
          style={{ willChange: "transform" }}
        />
      )}
    </div>
  );
}

export default CustomCursor;
