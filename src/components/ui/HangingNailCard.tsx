import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface HangingNailCardProps {
  children: React.ReactNode;
  className?: string;
  cardTheme?: "navy" | "emerald" | "burgundy" | "cream" | "obsidian";
  dataCursorLabel?: string;
  onClick?: () => void;
  tiltAmount?: number;
}

export default function HangingNailCard({
  children,
  className = "",
  cardTheme = "obsidian",
  dataCursorLabel,
  onClick,
  tiltAmount = 12,
}: HangingNailCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const themeStyles = {
    obsidian: "bg-[#181410] text-[#f4f1ea] border-2 border-[#c5a059]",
    navy: "bg-[#0d1b2a] text-[#f8fafc] border-2 border-[#38bdf8]",
    emerald: "bg-[#064e3b] text-[#ecfdf5] border-2 border-[#34d399]",
    burgundy: "bg-[#3b1219] text-[#fff7ed] border-2 border-[#fb923c]",
    cream: "bg-[#faf7f2] text-[#181410] border-2 border-[#181410]",
  };

  const ropeColors = {
    obsidian: { main: "#c5a059", dark: "#785817", light: "#f3e5ab" },
    navy: { main: "#38bdf8", dark: "#0369a1", light: "#bae6fd" },
    emerald: { main: "#34d399", dark: "#047857", light: "#a7f3d0" },
    burgundy: { main: "#fb923c", dark: "#c2410c", light: "#ffedd5" },
    cream: { main: "#64748b", dark: "#334155", light: "#cbd5e1" },
  };

  const rope = ropeColors[cardTheme];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rY = ((mouseX - width / 2) / (width / 2)) * tiltAmount;
    const rX = -((mouseY - height / 2) / (height / 2)) * tiltAmount;

    setRotateX(rX);
    setRotateY(rY);

    const glareX = (mouseX / width) * 100;
    const glareY = (mouseY / height) * 100;
    setGlarePos({ x: glareX, y: glareY, opacity: 0.25 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlarePos({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-cursor-label={dataCursorLabel}
      className="relative pt-12 group/hanging select-none cursor-pointer w-full h-full"
      style={{ perspective: 1000 }}
    >
      {/* ─── REALISTIC 3D METALLIC WALL NAIL (STAYS FIXED ON WALL) ─── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none w-36 h-12">
        <div className="absolute top-1 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
          {/* Shaft Shadow */}
          <div className="absolute top-3 left-2 w-2 h-4 bg-black/70 blur-[1px] transform rotate-12 -z-10" />
          
          {/* Metallic Head */}
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#e2e8f0] via-[#64748b] to-[#0f172a] border-2 border-[#1e293b] shadow-[0_4px_8px_rgba(0,0,0,0.8)] relative flex items-center justify-center">
            <div className="absolute top-0.5 left-1 w-2 h-1 bg-white/90 rounded-full blur-[0.5px]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#1e293b] border border-[#94a3b8]" />
          </div>

          <div className="w-2 h-2.5 bg-gradient-to-r from-[#475569] via-[#94a3b8] to-[#1e293b] -mt-1 shadow-md border-x border-[#0f172a]" />
        </div>
      </div>

      {/* ─── 3D SYNCHRONIZED CARD & ROPE ASSEMBLY ─── */}
      <motion.div
        animate={{
          rotateX,
          rotateY,
          scale: isHovered ? 0.96 : 1,
          boxShadow: isHovered
            ? `${-rotateY * 1.5}px ${20 + rotateX * 1.5}px 40px -5px rgba(0, 0, 0, 0.55), 0 0 25px rgba(197, 160, 89, 0.25)`
            : "0px 15px 30px -5px rgba(0, 0, 0, 0.35)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 26, mass: 0.4 }}
        style={{ transformStyle: "preserve-3d", transformOrigin: "top center" }}
        className="relative w-full h-full"
      >
        {/* ROPE ASSEMBLY LOCKED TO CARD TOP CENTER */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-36 h-14 pointer-events-none z-20 overflow-visible">
          <svg className="w-36 h-14 overflow-visible" viewBox="0 0 120 56">
            <defs>
              <filter id={`rope-shadow-${cardTheme}`} x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="4" stdDeviation="2" floodColor="#000000" floodOpacity="0.75" />
              </filter>
            </defs>

            {/* 1. ROPE WALL SHADOW */}
            <path
              d="M 60 10 C 44 26 22 42 16 56"
              fill="none"
              stroke="#000000"
              strokeWidth="3.5"
              opacity="0.5"
              filter={`url(#rope-shadow-${cardTheme})`}
            />
            <path
              d="M 60 10 C 76 26 98 42 104 56"
              fill="none"
              stroke="#000000"
              strokeWidth="3.5"
              opacity="0.5"
              filter={`url(#rope-shadow-${cardTheme})`}
            />

            {/* 2. BASE THREAD STRAND */}
            <path
              d="M 60 10 C 44 26 22 42 16 56"
              fill="none"
              stroke={rope.dark}
              strokeWidth="3.8"
              strokeLinecap="round"
            />
            <path
              d="M 60 10 C 76 26 98 42 104 56"
              fill="none"
              stroke={rope.dark}
              strokeWidth="3.8"
              strokeLinecap="round"
            />

            {/* 3. TWISTED ROPE HIGHLIGHT STRAND */}
            <path
              d="M 60 10 C 44 26 22 42 16 56"
              fill="none"
              stroke={rope.main}
              strokeWidth="2.6"
              strokeDasharray="4 2"
              strokeLinecap="round"
            />
            <path
              d="M 60 10 C 76 26 98 42 104 56"
              fill="none"
              stroke={rope.main}
              strokeWidth="2.6"
              strokeDasharray="4 2"
              strokeLinecap="round"
            />

            {/* 4. ROPE TOP SHEEN STRAND */}
            <path
              d="M 60 10 C 44 26 22 42 16 56"
              fill="none"
              stroke={rope.light}
              strokeWidth="1.2"
              strokeDasharray="2 4"
              opacity="0.9"
            />
            <path
              d="M 60 10 C 76 26 98 42 104 56"
              fill="none"
              stroke={rope.light}
              strokeWidth="1.2"
              strokeDasharray="2 4"
              opacity="0.9"
            />

            {/* ROPE LOOP OVER NAIL HEAD */}
            <path
              d="M 55 11 C 55 4 65 4 65 11"
              fill="none"
              stroke={rope.dark}
              strokeWidth="3.8"
            />
            <path
              d="M 55 11 C 55 4 65 4 65 11"
              fill="none"
              stroke={rope.main}
              strokeWidth="2.6"
              strokeDasharray="3 2"
            />
          </svg>
        </div>

        {/* CARD CONTAINER */}
        <div
          className={`relative transition-colors duration-300 rounded-none overflow-hidden ${themeStyles[cardTheme]} ${className}`}
        >
          {/* Dynamic Surface Glare Reflection Sheen */}
          <div
            className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300"
            style={{
              opacity: glarePos.opacity,
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 65%)`,
            }}
          />

          {children}
        </div>
      </motion.div>
    </div>
  );
}
