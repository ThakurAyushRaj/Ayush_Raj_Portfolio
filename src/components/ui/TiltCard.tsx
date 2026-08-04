import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltAmount?: number;
  scaleAmount?: number;
  onClick?: () => void;
}

export default function TiltCard({
  children,
  className = "",
  tiltAmount = 12,
  scaleAmount = 1.02,
  onClick,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

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
    setGlarePosition({ x: glareX, y: glareY, opacity: 0.25 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{
        rotateX,
        rotateY,
      }}
      whileHover={{ scale: scaleAmount }}
      transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.5 }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      className={`relative ${className}`}
    >
      {/* Dynamic Metallic Glare Layer */}
      <div
        className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300 rounded-inherit"
        style={{
          opacity: glarePosition.opacity,
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(229, 193, 120, 0.35) 0%, rgba(255, 255, 255, 0) 65%)`,
        }}
      />
      {children}
    </motion.div>
  );
}
