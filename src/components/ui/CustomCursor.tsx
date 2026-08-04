import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [cursorLabel, setCursorLabel] = useState<string | null>(null);
  const [clickRipples, setClickRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) return;
    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

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
        return;
      } else {
        setCursorLabel(null);
      }

      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.closest("button") !== null ||
        target.closest("a") !== null ||
        target.getAttribute("role") === "button" ||
        target.classList.contains("interactive") ||
        target.classList.contains("btn");

      setIsHovered(isInteractive);
    };

    const onMouseDown = (e: MouseEvent) => {
      setIsClicked(true);
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setClickRipples((prev) => [...prev.slice(-4), newRipple]);
      setTimeout(() => {
        setClickRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 700);
    };

    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
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
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden select-none">
      {/* ─── CLICK DRAFTING COMPASS RIPPLES ─── */}
      <AnimatePresence>
        {clickRipples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ scale: 0.2, opacity: 0.9, rotate: 0 }}
            animate={{ scale: 3.5, opacity: 0, rotate: 90 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
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

      {/* ─── ARCHITECTURAL DRAFTING LENS RING ─── */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#c5a059] pointer-events-none flex items-center justify-center"
        animate={{
          x: mousePosition.x - (cursorLabel ? 32 : 16),
          y: mousePosition.y - (cursorLabel ? 32 : 16),
          width: cursorLabel ? 64 : 32,
          height: cursorLabel ? 64 : 32,
          scale: isClicked ? 0.75 : isHovered && !cursorLabel ? 1.6 : 1,
          borderColor: isHovered ? "#e5c178" : "#c5a059",
          backgroundColor: cursorLabel ? "rgba(24, 20, 16, 0.85)" : isHovered ? "rgba(197, 160, 89, 0.15)" : "transparent",
        }}
        transition={{
          type: "spring",
          damping: 24,
          stiffness: 350,
          mass: 0.35,
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

      {/* ─── CENTRAL PRECISION CROSSHAIR DOT ─── */}
      {!cursorLabel && (
        <motion.div
          className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#181410] border border-[#c5a059] pointer-events-none"
          animate={{
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            scale: isHovered ? 1.5 : isClicked ? 0.7 : 1,
            backgroundColor: isHovered ? "#e5c178" : "#181410",
          }}
          transition={{
            type: "spring",
            damping: 38,
            stiffness: 850,
            mass: 0.06,
          }}
        />
      )}
    </div>
  );
}

export default CustomCursor;
