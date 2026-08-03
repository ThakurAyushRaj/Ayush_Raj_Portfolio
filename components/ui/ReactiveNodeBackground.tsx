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

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

export function ReactiveNodeBackground({ children, className = "" }: ReactiveNodeBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse LERP & position state
  const mouseTarget = useRef({ x: -1000, y: -1000 });
  const mouseCurrent = useRef({ x: -1000, y: -1000 });
  const ripplesRef = useRef<Ripple[]>([]);
  const particlesRef = useRef<Particle[]>([]);

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

    // Mouse position listener & particle emitter
    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return;
      mouseTarget.current = { x: e.clientX, y: e.clientY };

      // Emit subtle micro-spark particles on movement
      if (Math.random() > 0.4) {
        particlesRef.current.push({
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8 - 0.2,
          life: 0,
          maxLife: 35 + Math.random() * 20,
          size: 1.5 + Math.random() * 2,
          color: Math.random() > 0.5 ? "30, 64, 175" : "217, 119, 6",
        });
      }
    };

    // Global Click ripple listener
    const handleClick = (e: MouseEvent) => {
      if (isMobile) return;
      ripplesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 5,
        maxRadius: 210,
        opacity: 0.9,
      });

      // Emit click burst particles
      for (let p = 0; p < 8; p++) {
        const angle = (Math.PI * 2 * p) / 8;
        const speed = 1.5 + Math.random() * 2;
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          maxLife: 45,
          size: 2.5,
          color: p % 2 === 0 ? "217, 119, 6" : "30, 64, 175",
        });
      }
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
            const gradient = ctx.createRadialGradient(mX, mY, 10, mX, mY, 360);
            gradient.addColorStop(0, "rgba(30, 64, 175, 0.15)"); // Royal Blue glow center
            gradient.addColorStop(0.4, "rgba(217, 119, 6, 0.08)"); // Warm Amber middle
            gradient.addColorStop(1, "rgba(249, 246, 240, 0)");
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(mX, mY, 360, 0, Math.PI * 2);
            ctx.fill();
          }

          // Node Grid System (~56px spacing)
          const spacing = 56;
          const cols = Math.ceil(width / spacing) + 1;
          const rows = Math.ceil(height / spacing) + 1;

          const activeRadius = 230;
          const maxLineDistance = 105;

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
              let opacity = 0.18;
              let color = "15, 23, 42"; // Midnight Black-Blue

              if (dist < activeRadius) {
                const ratio = 1 - dist / activeRadius;
                radius = 1.8 + ratio * 3.2;
                opacity = 0.2 + ratio * 0.8;
                // Blend royal blue and warm amber near mouse
                color = ratio > 0.5 ? "30, 64, 175" : "217, 119, 6";

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

                const alpha = lineRatio * proximityRatio * 0.6;

                // Alternate stroke color: midnight blue vs warm amber
                ctx.strokeStyle = i % 2 === 0
                  ? `rgba(30, 64, 175, ${alpha})`
                  : `rgba(217, 119, 6, ${alpha})`;
                ctx.lineWidth = 1.2;
                ctx.beginPath();
                ctx.moveTo(n1.x, n1.y);
                ctx.lineTo(n2.x, n2.y);
                ctx.stroke();
              }
            }
          }

          // 3. Render Cursor Trail Floating Micro-Sparks
          for (let p = particlesRef.current.length - 1; p >= 0; p--) {
            const pt = particlesRef.current[p];
            pt.x += pt.vx;
            pt.y += pt.vy;
            pt.life += 1;

            const alpha = (1 - pt.life / pt.maxLife) * 0.7;
            if (pt.life >= pt.maxLife || alpha <= 0) {
              particlesRef.current.splice(p, 1);
              continue;
            }

            ctx.fillStyle = `rgba(${pt.color}, ${alpha})`;
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, pt.size * (1 - pt.life / pt.maxLife), 0, Math.PI * 2);
            ctx.fill();
          }

          // 4. Render Click Pulse Ripples
          for (let k = ripplesRef.current.length - 1; k >= 0; k--) {
            const rip = ripplesRef.current[k];
            rip.radius += 3.8;
            rip.opacity -= 0.02;

            if (rip.opacity <= 0 || rip.radius >= rip.maxRadius) {
              ripplesRef.current.splice(k, 1);
              continue;
            }

            ctx.strokeStyle = `rgba(15, 23, 42, ${rip.opacity})`;
            ctx.lineWidth = 1.8;
            ctx.beginPath();
            ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
            ctx.stroke();

            // Inner royal blue ring ripple
            ctx.strokeStyle = `rgba(30, 64, 175, ${rip.opacity * 0.75})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.arc(rip.x, rip.y, Math.max(0, rip.radius - 14), 0, Math.PI * 2);
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
    <div ref={containerRef} className={`relative w-full min-h-screen bg-[#F9F6F0] text-[#0F172A] overflow-hidden ${className}`}>
      {/* ─── LAYER 1: AMBIENT CREAM & ACCENT BLOBS ────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
        {/* Blob 1 - Royal Cobalt Blue (#1E40AF) */}
        <div className="absolute -top-[12%] -left-[10%] w-[55vw] h-[55vw] max-w-[750px] max-h-[750px] rounded-full bg-[#1E40AF] opacity-[0.12] blur-[120px] md:blur-[150px] animate-aurora-slow-1" />

        {/* Blob 2 - Warm Amber (#D97706) */}
        <div className="absolute top-[25%] -right-[15%] w-[52vw] h-[52vw] max-w-[700px] max-h-[700px] rounded-full bg-[#D97706] opacity-[0.14] blur-[130px] md:blur-[160px] animate-aurora-slow-2" />

        {/* Blob 3 - Midnight Blue Accent (#0F172A) */}
        <div className="absolute bottom-[10%] left-[25%] w-[48vw] h-[48vw] max-w-[650px] max-h-[650px] rounded-full bg-[#0F172A] opacity-[0.08] blur-[110px] md:blur-[140px] animate-aurora-slow-3" />

        {/* Page Gradient Scrim Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F9F6F0]/50 to-[#F9F6F0]/90" />
      </div>

      {/* ─── LAYER 2: INTERACTIVE REACTIVE CANVAS NODE NETWORK ───────────────── */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 select-none"
      />

      {/* Hero Radial Scrim */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] pointer-events-none z-0 bg-[radial-gradient(ellipse_at_center,rgba(249,246,240,0.85)_0%,transparent_75%)]" />

      {/* Page Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default ReactiveNodeBackground;
