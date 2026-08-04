import React, { useState } from "react";
import { motion } from "framer-motion";
import ScotchTape from "./ScotchTape";

interface TapedCardProps {
  children: React.ReactNode;
  className?: string;
  tapePosition?: "top-corners" | "top-center" | "diagonal" | "none";
  tapeColor?: "gold" | "cyan" | "mint" | "coral" | "paper";
  initialRotate?: number;
  dataCursorLabel?: string;
  onClick?: () => void;
}

export default function TapedCard({
  children,
  className = "",
  tapePosition = "top-corners",
  tapeColor = "gold",
  initialRotate = -0.7,
  dataCursorLabel,
  onClick,
}: TapedCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor-label={dataCursorLabel}
      className="relative group select-none cursor-pointer w-full h-full"
    >
      <motion.div
        animate={{
          rotate: isHovered ? 0 : initialRotate,
          y: isHovered ? -4 : 0,
          scale: isHovered ? 0.96 : 1,
          boxShadow: isHovered
            ? "0 25px 50px -10px rgba(0, 0, 0, 0.4), 0 0 25px rgba(197, 160, 89, 0.25)"
            : "0 10px 20px -5px rgba(0, 0, 0, 0.2)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 26, mass: 0.4 }}
        className={`relative transition-colors duration-300 ${className}`}
      >
        {/* ─── REALISTIC SCOTCH TAPE OVERLAYS WITH CONTRASTING COLOURS ─── */}
        {tapePosition === "top-corners" && (
          <>
            <ScotchTape angle={-12} color={tapeColor} className="-top-3 left-6" />
            <ScotchTape angle={12} color={tapeColor} className="-top-3 right-6" />
          </>
        )}

        {tapePosition === "top-center" && (
          <ScotchTape angle={-2} color={tapeColor} className="-top-3 left-1/2 -translate-x-1/2" width="w-20" />
        )}

        {tapePosition === "diagonal" && (
          <>
            <ScotchTape angle={-45} color={tapeColor} className="-top-3 -left-3" />
            <ScotchTape angle={-45} color={tapeColor} className="-bottom-3 -right-3" />
          </>
        )}

        {/* Modern Light Sheen Sweep on Hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none z-20" />

        {children}
      </motion.div>
    </div>
  );
}
