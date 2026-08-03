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
      // Lerp mouse position for liquid smooth movement
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.18;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.18;

      const { x: mx, y: my } = mouseRef.current;
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // Only draw blueprint projection lines if mouse is inside viewport and not over a button
      if (mx > 0 && my > 0 && !isHoveringButtonRef.current) {
        // ─── 1. FULL-SCREEN HORIZONTAL & VERTICAL BLUEPRINT PROJECTION LINES ───
        ctx.beginPath();
        // Full horizontal axis line
        ctx.moveTo(0, Math.round(my));
        ctx.lineTo(width, Math.round(my));

        // Full vertical axis line
        ctx.moveTo(Math.round(mx), 0);
        ctx.lineTo(Math.round(mx), height);

        ctx.strokeStyle = "rgba(24, 20, 16, 0.12)";
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]); // Dashed architectural drafting line
        ctx.stroke();
        ctx.setLineDash([]); // Reset dash

        // ─── 2. DRAFTING COMPASS CIRCLES & CROSSHAIR AURA ───
        // Inner compass ring
        ctx.beginPath();
        ctx.arc(mx, my, 28, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(197, 160, 89, 0.4)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Outer compass ring
        ctx.beginPath();
        ctx.arc(mx, my, 55, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(24, 20, 16, 0.15)";
        ctx.lineWidth = 0.8;
        ctx.setLineDash([2, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

        // 4 Corner drafting tick marks
        const tickLength = 8;
        ctx.strokeStyle = "rgba(197, 160, 89, 0.7)";
        ctx.lineWidth = 1.2;

        // Top tick
        ctx.beginPath();
        ctx.moveTo(mx, my - 28);
        ctx.lineTo(mx, my - 28 - tickLength);
        ctx.stroke();
        // Bottom tick
        ctx.beginPath();
        ctx.moveTo(mx, my + 28);
        ctx.lineTo(mx, my + 28 + tickLength);
        ctx.stroke();
        // Left tick
        ctx.beginPath();
        ctx.moveTo(mx - 28, my);
        ctx.lineTo(mx - 28 - tickLength, my);
        ctx.stroke();
        // Right tick
        ctx.beginPath();
        ctx.moveTo(mx + 28, my);
        ctx.lineTo(mx + 28 + tickLength, my);
        ctx.stroke();

        // ─── 3. ARCHITECTURAL COORDINATE BADGE ───
        const coordText = `X:${Math.round(mx)} • Y:${Math.round(my)}`;
        ctx.font = "bold 9px 'JetBrains Mono', monospace";
        const textMetrics = ctx.measureText(coordText);
        const padding = 5;
        const badgeW = textMetrics.width + padding * 2;
        const badgeH = 16;
        const badgeX = mx + 16;
        const badgeY = my - 24;

        // Badge background box
        ctx.fillStyle = "rgba(24, 20, 16, 0.9)";
        ctx.fillRect(badgeX, badgeY, badgeW, badgeH);

        // Badge border
        ctx.strokeStyle = "rgba(197, 160, 89, 0.8)";
        ctx.lineWidth = 1;
        ctx.strokeRect(badgeX, badgeY, badgeW, badgeH);

        // Badge text
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
      {/* Content Container */}
      <div className="relative z-10">{children}</div>

      {/* Blueprint Canvas Overlay */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-20"
        style={{ opacity: 0.95 }}
      />
    </div>
  );
}

export default MinimalBroadsheetBackground;
