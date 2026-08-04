import React, { useEffect, useRef } from "react";

interface MinimalBroadsheetBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
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

    // Create subtle ambient blueprint particles
    const particles: Particle[] = Array.from({ length: 30 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 1,
      alpha: Math.random() * 0.4 + 0.1,
    }));

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;

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

    const render = () => {
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.18;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.18;

      const { x: mx, y: my } = mouseRef.current;
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // Render floating blueprint particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(197, 160, 89, ${p.alpha})`;
        ctx.fill();

        // Connect particle to mouse if within distance
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120 && !isHoveringButtonRef.current) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mx, my);
          ctx.strokeStyle = `rgba(197, 160, 89, ${(1 - dist / 120) * 0.25})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      });

      // Only draw drafting blueprint projection lines if mouse is inside viewport
      if (mx > 0 && my > 0 && !isHoveringButtonRef.current) {
        ctx.beginPath();
        ctx.moveTo(0, Math.round(my));
        ctx.lineTo(width, Math.round(my));
        ctx.moveTo(Math.round(mx), 0);
        ctx.lineTo(Math.round(mx), height);
        ctx.strokeStyle = "rgba(24, 20, 16, 0.12)";
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Compass rings
        ctx.beginPath();
        ctx.arc(mx, my, 28, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(197, 160, 89, 0.4)";
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(mx, my, 55, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(24, 20, 16, 0.15)";
        ctx.lineWidth = 0.8;
        ctx.setLineDash([2, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Coordinate Badge
        const coordText = `X:${Math.round(mx)} • Y:${Math.round(my)}`;
        ctx.font = "bold 9px 'JetBrains Mono', monospace";
        const textMetrics = ctx.measureText(coordText);
        const padding = 5;
        const badgeW = textMetrics.width + padding * 2;
        const badgeH = 16;
        const badgeX = mx + 16;
        const badgeY = my - 24;

        ctx.fillStyle = "rgba(24, 20, 16, 0.9)";
        ctx.fillRect(badgeX, badgeY, badgeW, badgeH);

        ctx.strokeStyle = "rgba(197, 160, 89, 0.8)";
        ctx.lineWidth = 1;
        ctx.strokeRect(badgeX, badgeY, badgeW, badgeH);

        ctx.fillStyle = "#e5c178";
        ctx.fillText(coordText, badgeX + padding, badgeY + 11);
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
      <div className="relative z-10">{children}</div>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-20"
        style={{ opacity: 0.95 }}
      />
    </div>
  );
}

export default MinimalBroadsheetBackground;
