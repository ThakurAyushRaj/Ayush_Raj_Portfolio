import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

interface IlluminatedNameProps {
  name: string;
  className?: string;
}

export const IlluminatedName: React.FC<IlluminatedNameProps> = ({ name, className = "" }) => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <span
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-block cursor-default group select-none ${className}`}
    >
      {/* ─── Ambient Glow Backdrop (Spotlight Aura for Off-White) ─── */}
      <span
        className="absolute -inset-x-6 -inset-y-4 rounded-3xl opacity-75 blur-2xl transition-all duration-700 pointer-events-none group-hover:opacity-100 group-hover:blur-3xl"
        style={{
          background: isHovered
            ? `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(217, 119, 6, 0.3), rgba(30, 58, 138, 0.25), transparent 75%)`
            : "radial-gradient(circle at 50% 50%, rgba(217, 119, 6, 0.2), rgba(30, 58, 138, 0.15), transparent 70%)",
        }}
      />

      {/* ─── Secondary Warm Halo ─── */}
      <span className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-amber-500/15 via-blue-600/15 to-amber-600/15 opacity-60 blur-md group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />

      {/* ─── Glowing Base Layer for Neon Spread ─── */}
      <span
        className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#B45309] bg-clip-text text-transparent opacity-50 blur-[3px] select-none pointer-events-none transition-all duration-300 group-hover:opacity-85 group-hover:blur-[5px]"
        aria-hidden="true"
      >
        {name}
      </span>

      {/* ─── Foreground Text with Off-White High-Contrast Shimmer ─── */}
      <span className="relative z-10 font-extrabold bg-gradient-to-r from-[#090D16] via-[#1E3A8A] via-45% to-[#C2410C] bg-[length:220%_100%] bg-clip-text text-transparent animate-text-shimmer drop-shadow-sm group-hover:drop-shadow-[0_4px_16px_rgba(194,65,12,0.2)] transition-all duration-300">
        {name}
      </span>

      {/* ─── Interactive Light Beam Overlay on Hover ─── */}
      <span
        className="absolute inset-0 z-20 bg-clip-text text-transparent pointer-events-none transition-opacity duration-300 font-extrabold"
        style={{
          opacity: isHovered ? 1 : 0,
          backgroundImage: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(194, 65, 12, 0.95) 0%, rgba(30, 58, 138, 0.9) 35%, rgba(9, 13, 22, 0.95) 70%)`,
          WebkitBackgroundClip: "text",
        }}
        aria-hidden="true"
      >
        {name}
      </span>

      {/* ─── Illuminated Underline Beam ─── */}
      <span className="absolute -bottom-1.5 left-0 right-0 h-[3px] rounded-full overflow-hidden pointer-events-none">
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C2410C]/35 to-transparent" />
        <motion.span
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 3.2,
            ease: "easeInOut",
          }}
          className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-[#D97706] to-transparent shadow-[0_0_12px_#D97706]"
        />
      </span>

      {/* ─── Sparkle Light Particles on Hover ─── */}
      {isHovered && (
        <span className="absolute -top-3 right-0 flex gap-1 pointer-events-none z-30">
          <motion.span
            initial={{ scale: 0, opacity: 0, y: 5 }}
            animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0], y: -12 }}
            transition={{ duration: 1, repeat: Infinity, delay: 0 }}
            className="text-amber-500 text-xs select-none"
          >
            ✦
          </motion.span>
          <motion.span
            initial={{ scale: 0, opacity: 0, y: 5 }}
            animate={{ scale: [0, 1, 0], opacity: [0, 0.9, 0], y: -16 }}
            transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
            className="text-blue-500 text-xs select-none"
          >
            ✧
          </motion.span>
        </span>
      )}
    </span>
  );
};

export default IlluminatedName;
