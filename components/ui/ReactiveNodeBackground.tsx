"use client";

import React, { useEffect, useRef, useState } from "react";

interface ReactiveNodeBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
}

export function ReactiveNodeBackground({ children, className = "" }: ReactiveNodeBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse LERP & position state
  const mouseTarget = useRef({ x: -1000, y: -1000 });
  const mouseCurrent = useRef({ x: -1000, y: -1000 });
  const ripplesRef = useRef<Ripple[]>([]);

  const animFrameId = useRef<number | null>(null);
  const isVisible = useRef(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check mobile viewport width
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Mouse position listener
    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return;
      mouseTarget.current = { x: e.clientX, y: e.clientY };
    };

    // Global Click ripple listener
    const handleClick = (e: MouseEvent) => {
      if (isMobile) return;
      ripplesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 5,
        maxRadius: 180,
        opacity: 0.9,
      });
    };

    // Page Visibility API handler
    const handleVisibilityChange = () => {
      isVisible.current = !document.hidden;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // ─── CANVAS REACTIVE NODE RENDER LOOP ──────────────────────────────────
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const render = () => {
      if (isVisible.current && ctx) {
        ctx.clearRect(0, 0, width, height);

        if (!isMobile) {
          // LERP Mouse Smooth Damping
          mouseCurrent.current.x += (mouseTarget.current.x - mouseCurrent.current.x) * 0.08;
          mouseCurrent.current.y += (mouseTarget.current.y - mouseCurrent.current.y) * 0.08;

          const mX = mouseCurrent.current.x;
          const mY = mouseCurrent.current.y;

          // Render Trail Spotlight Glow underneath nodes
          if (mX > 0 && mY > 0) {
            const gradient = ctx.createRadialGradient(mX, mY, 10, mX, mY, 320);
            gradient.addColorStop(0, "rgba(79, 209, 197, 0.18)"); // Cool Teal glow center
            gradient.addColorStop(0.5, "rgba(242, 166, 90, 0.08)"); // Warm Amber middle
            gradient.addColorStop(1, "rgba(26, 23, 37, 0)");
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(mX, mY, 320, 0, Math.PI * 2);
            ctx.fill();
          }

          // Node Grid System (~58px spacing)
          const spacing = 58;
          const cols = Math.ceil(width / spacing) + 1;
          const rows = Math.ceil(height / spacing) + 1;

          const activeRadius = 190;
          const maxLineDistance = 95;

          const activeNodes: { x: number; y: number; distToMouse: number }[] = [];

          // 1. Calculate & Draw Grid Nodes
          for (let c = 0; c < cols; c++) {
            for (let r = 0; r < rows; r++) {
              const nx = c * spacing;
              const ny = r * spacing;

              const dx = mX - nx;
              const dy = mY - ny;
              const dist = Math.sqrt(dx * dx + dy * dy);

              let radius = 1.8;
              let opacity = 0.15;
              let color = "246, 243, 238"; // Base text off-white

              if (dist < activeRadius) {
                const ratio = 1 - dist / activeRadius;
                radius = 1.8 + ratio * 2.8;
                opacity = 0.15 + ratio * 0.75;
                // Blend warm sunset amber and cool teal near mouse
                color = ratio > 0.5 ? "242, 166, 90" : "79, 209, 197";

                activeNodes.push({ x: nx, y: ny, distToMouse: dist });
              }

              ctx.fillStyle = `rgba(${color}, ${opacity})`;
              ctx.beginPath();
              ctx.arc(nx, ny, radius, 0, Math.PI * 2);
              ctx.fill();
            }
          }

          // 2. Draw Network Connection Lines between active nodes
          for (let i = 0; i < activeNodes.length; i++) {
            for (let j = i + 1; j < activeNodes.length; j++) {
              const n1 = activeNodes[i];
              const n2 = activeNodes[j];

              const dx = n1.x - n2.x;
              const dy = n1.y - n2.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < maxLineDistance) {
                const lineRatio = 1 - distance / maxLineDistance;
                const avgMouseDist = (n1.distToMouse + n2.distToMouse) / 2;
                const proximityRatio = 1 - avgMouseDist / activeRadius;

                const alpha = lineRatio * proximityRatio * 0.55;

                // Alternate stroke color: warm vs cool
                ctx.strokeStyle = i % 2 === 0
                  ? `rgba(79, 209, 197, ${alpha})`
                  : `rgba(242, 166, 90, ${alpha})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(n1.x, n1.y);
                ctx.lineTo(n2.x, n2.y);
                ctx.stroke();
              }
            }
          }

          // 3. Render Click Pulse Ripples
          for (let k = ripplesRef.current.length - 1; k >= 0; k--) {
            const rip = ripplesRef.current[k];
            rip.radius += 3.5;
            rip.opacity -= 0.022;

            if (rip.opacity <= 0 || rip.radius >= rip.maxRadius) {
              ripplesRef.current.splice(k, 1);
              continue;
            }

            ctx.strokeStyle = `rgba(242, 166, 90, ${rip.opacity})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
            ctx.stroke();

            // Inner cool teal ring ripple
            ctx.strokeStyle = `rgba(79, 209, 197, ${rip.opacity * 0.7})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(rip.x, rip.y, Math.max(0, rip.radius - 12), 0, Math.PI * 2);
            ctx.stroke();
          }
        }
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isMobile]);

  return (
    <div ref={containerRef} className={`relative w-full min-h-screen bg-[#1A1725] text-[#F6F3EE] overflow-hidden ${className}`}>
      {/* ─── LAYER 1: AMBIENT PLUM & DUAL ACCENT BLOBS ────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
        {/* Blob 1 - Warm Sunset Amber (#F2A65A) */}
        <div className="absolute -top-[12%] -left-[10%] w-[55vw] h-[55vw] max-w-[750px] max-h-[750px] rounded-full bg-[#F2A65A] opacity-25 blur-[110px] md:blur-[140px] animate-aurora-slow-1" />

        {/* Blob 2 - Cool Electric Teal (#4FD1C5) */}
        <div className="absolute top-[25%] -right-[15%] w-[52vw] h-[52vw] max-w-[700px] max-h-[700px] rounded-full bg-[#4FD1C5] opacity-25 blur-[120px] md:blur-[150px] animate-aurora-slow-2" />

        {/* Blob 3 - Deep Purple / Plum Ambient Accent */}
        <div className="absolute bottom-[10%] left-[25%] w-[48vw] h-[48vw] max-w-[650px] max-h-[650px] rounded-full bg-[#6B46C1] opacity-20 blur-[100px] md:blur-[130px] animate-aurora-slow-3" />

        {/* Page Contrast Gradient Scrim Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A1725]/60 to-[#1A1725]/90" />
      </div>

      {/* ─── LAYER 2: INTERACTIVE REACTIVE CANVAS NODE NETWORK ───────────────── */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 select-none"
      />

      {/* Soft Text Radial Scrim to Guarantee Hero Readability */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] pointer-events-none z-0 bg-[radial-gradient(ellipse_at_center,rgba(26,23,37,0.75)_0%,transparent_70%)]" />

      {/* Page Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default ReactiveNodeBackground;
