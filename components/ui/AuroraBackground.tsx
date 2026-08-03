"use client";

import React, { useEffect, useRef, useState } from "react";

interface AuroraBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export function AuroraBackground({ children, className = "" }: AuroraBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroGridRef = useRef<HTMLDivElement>(null);

  // Mouse LERP coordinates
  const targetPos = useRef({ x: 0.5, y: 0.3 });
  const currentPos = useRef({ x: 0.5, y: 0.3 });
  const animFrameId = useRef<number | null>(null);
  const isVisible = useRef(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile viewport width
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Mouse move handler with normalized relative coordinates
    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return;
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      targetPos.current = { x, y };
    };

    // Page Visibility API handler to pause loops when tab is hidden
    const handleVisibilityChange = () => {
      isVisible.current = !document.hidden;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Smooth LERP render loop for mouse spotlight
    const updateSpotlight = () => {
      if (isVisible.current && !isMobile && heroGridRef.current) {
        // LERP calculation for smooth damped motion
        currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.08;
        currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.08;

        const posX = (currentPos.current.x * 100).toFixed(2);
        const posY = (currentPos.current.y * 100).toFixed(2);

        heroGridRef.current.style.setProperty("--spotlight-x", `${posX}%`);
        heroGridRef.current.style.setProperty("--spotlight-y", `${posY}%`);
      }

      animFrameId.current = requestAnimationFrame(updateSpotlight);
    };

    animFrameId.current = requestAnimationFrame(updateSpotlight);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isMobile]);

  return (
    <div ref={containerRef} className={`relative w-full min-h-screen bg-[#0A0A0B] text-white overflow-hidden ${className}`}>
      {/* ─── LAYER 1: AMBIENT CSS AURORA BLOBS ───────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
        {/* Blob 1 - Cobalt Blue */}
        <div className="absolute -top-[10%] -left-[10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-[#1D4ED8] opacity-60 blur-[100px] md:blur-[130px] animate-aurora-slow-1" />

        {/* Blob 2 - Deep Indigo/Purple */}
        <div className="absolute top-[20%] -right-[15%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full bg-[#4338CA] opacity-50 blur-[110px] md:blur-[140px] animate-aurora-slow-2" />

        {/* Blob 3 - Electric Cyan */}
        <div className="absolute top-[50%] left-[20%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full bg-[#0284C7] opacity-40 blur-[90px] md:blur-[120px] animate-aurora-slow-3" />

        {/* Blob 4 - Vibrant Amber Accent */}
        <div className="absolute -bottom-[10%] right-[10%] w-[40vw] h-[40vw] max-w-[550px] max-h-[550px] rounded-full bg-[#D97706] opacity-30 blur-[100px] md:blur-[130px] animate-aurora-slow-4" />

        {/* Lower page attenuation overlay to keep content readable during scroll */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0B]/60 to-[#0A0A0B]/85" />
      </div>

      {/* ─── LAYER 2: HERO CURSOR-REACTIVE SPOTLIGHT & GRID ───────────────────── */}
      <div
        ref={heroGridRef}
        className="fixed inset-0 pointer-events-none z-0 select-none transition-opacity duration-300"
        style={{
          ["--spotlight-x" as any]: "50%",
          ["--spotlight-y" as any]: "30%",
        }}
      >
        {/* Fine Dot Grid Canvas Pattern */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Desktop Cursor Reactive Radial Glow Spotlight */}
        {!isMobile && (
          <div
            className="absolute inset-0 opacity-80 transition-opacity duration-500"
            style={{
              background: `radial-gradient(650px circle at var(--spotlight-x) var(--spotlight-y), rgba(59, 130, 246, 0.22), rgba(67, 56, 202, 0.08) 50%, transparent 80%)`,
            }}
          />
        )}
      </div>

      {/* Main Page Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default AuroraBackground;
