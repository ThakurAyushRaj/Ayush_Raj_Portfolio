import React, { useEffect, useRef } from "react";

interface MinimalBroadsheetBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export function MinimalBroadsheetBackground({ children, className = "" }: MinimalBroadsheetBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });
  const isHoveringButtonRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;

      // Check if hovering over any button or link
      const target = e.target as HTMLElement | null;
      if (target) {
        const isButton =
          target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") !== null ||
          target.closest("a") !== null ||
          target.getAttribute("role") === "button" ||
          target.classList.contains("btn");

        isHoveringButtonRef.current = isButton;
      } else {
        isHoveringButtonRef.current = false;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    const spacing = 36; // Grid dot spacing

    const render = () => {
      // Lerp mouse position for silky smooth movement
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.15;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.15;

      const { x: mx, y: my } = mouseRef.current;
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // ONLY render background dots and halo if mouse is inside viewport AND NOT hovering over a button
      if (mx > 0 && my > 0 && !isHoveringButtonRef.current) {
        const cols = Math.ceil(width / spacing);
        const rows = Math.ceil(height / spacing);
        const activeRadius = 150;

        // ─── 1. DRAW SOFT INK & GOLD SPOTLIGHT HALO UNDER CURSOR ───
        const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, activeRadius * 1.2);
        gradient.addColorStop(0, "rgba(197, 160, 89, 0.14)");
        gradient.addColorStop(0.5, "rgba(24, 20, 16, 0.03)");
        gradient.addColorStop(1, "rgba(24, 20, 16, 0)");

        ctx.beginPath();
        ctx.arc(mx, my, activeRadius * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // ─── 2. DRAW DOTS ONLY AROUND THE CURSOR POSITION ───
        for (let i = 0; i <= cols; i++) {
          for (let j = 0; j <= rows; j++) {
            const gx = i * spacing;
            const gy = j * spacing;

            const dx = mx - gx;
            const dy = my - gy;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // ONLY draw dots if cursor is around them
            if (dist < activeRadius) {
              const factor = 1 - dist / activeRadius;
              const dotRadius = 0.8 + factor * 2.8;
              const alpha = factor * 0.55;

              // Draw hairline connection to mouse cursor
              if (dist < 115 && factor > 0.2) {
                ctx.beginPath();
                ctx.moveTo(gx, gy);
                ctx.lineTo(mx, my);
                ctx.strokeStyle = `rgba(24, 20, 16, ${factor * 0.2})`;
                ctx.lineWidth = 0.85;
                ctx.stroke();
              }

              // Draw dot
              ctx.beginPath();
              ctx.arc(gx, gy, dotRadius, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(24, 20, 16, ${alpha})`;
              ctx.fill();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      {/* Content Container */}
      <div className="relative z-10">{children}</div>

      {/* Interactive Canvas Overlay (Disabled automatically on button hover) */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-20"
        style={{ opacity: 0.95 }}
      />
    </div>
  );
}

export default MinimalBroadsheetBackground;
