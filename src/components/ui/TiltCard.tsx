import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltAmount?: number;
  scaleAmount?: number;
  onClick?: () => void;
  showCornerTicks?: boolean;
}

export default function TiltCard({
  children,
  className = "",
  tiltAmount = 10,
  scaleAmount = 1.02,
  onClick,
  showCornerTicks = true,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

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
    setGlarePosition({ x: glareX, y: glareY, opacity: 0.3 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{
        rotateX,
        rotateY,
        boxShadow: isHovered
          ? "0 20px 40px -10px rgba(197, 160, 89, 0.3), 0 10px 20px -5px rgba(0, 0, 0, 0.5)"
          : "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
      }}
      whileHover={{ scale: scaleAmount }}
      transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.5 }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      className={`relative rounded-none ${className}`}
    >
      {/* ─── CORNER DRAFTING TICKS ─── */}
      {showCornerTicks && (
        <>
          <span
            className={`absolute top-1 left-1 text-[9px] z-30 transition-colors pointer-events-none ${
              isHovered ? "text-[#e5c178]" : "text-[#c5a059]/40"
            }`}
          >
            ┌
          </span>
          <span
            className={`absolute top-1 right-1 text-[9px] z-30 transition-colors pointer-events-none ${
              isHovered ? "text-[#e5c178]" : "text-[#c5a059]/40"
            }`}
          >
            ┐
          </span>
          <span
            className={`absolute bottom-1 left-1 text-[9px] z-30 transition-colors pointer-events-none ${
              isHovered ? "text-[#e5c178]" : "text-[#c5a059]/40"
            }`}
          >
            └
          </span>
          <span
            className={`absolute bottom-1 right-1 text-[9px] z-30 transition-colors pointer-events-none ${
              isHovered ? "text-[#e5c178]" : "text-[#c5a059]/40"
            }`}
          >
            ┘
          </span>
        </>
      )}

      {/* ─── DYNAMIC METALLIC GLARE & SHEEN LAYER ─── */}
      <div
        className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300 overflow-hidden"
        style={{
          opacity: glarePosition.opacity,
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(229, 193, 120, 0.35) 0%, rgba(255, 255, 255, 0) 60%)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[marquee_3s_linear_infinite]" />
      </div>

      {children}
    </motion.div>
  );
}
