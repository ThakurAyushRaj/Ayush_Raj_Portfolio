import React from "react";

interface ScotchTapeProps {
  className?: string;
  angle?: number;
  width?: string;
  color?: "gold" | "cyan" | "mint" | "coral" | "paper";
}

export default function ScotchTape({
  className = "",
  angle = -12,
  width = "w-16",
  color = "gold",
}: ScotchTapeProps) {
  const colorStyles = {
    gold: "from-[#fef3c7]/85 via-[#fffbe6]/95 to-[#fef3c7]/85 border-[#c5a059]/40",
    cyan: "from-[#e0f2fe]/85 via-[#f0f9ff]/95 to-[#e0f2fe]/85 border-[#38bdf8]/50",
    mint: "from-[#d1fae5]/85 via-[#ecfdf5]/95 to-[#d1fae5]/85 border-[#34d399]/50",
    coral: "from-[#ffedd5]/85 via-[#fff7ed]/95 to-[#ffedd5]/85 border-[#fb923c]/50",
    paper: "from-[#f1f5f9]/85 via-[#f8fafc]/95 to-[#f1f5f9]/85 border-[#94a3b8]/40",
  };

  return (
    <div
      style={{ transform: `rotate(${angle}deg)`, transformOrigin: "center center" }}
      className={`absolute h-6 ${width} z-30 pointer-events-none ${className}`}
    >
      {/* ─── REALISTIC TAPE WALL SHADOW ─── */}
      <div className="absolute inset-0 bg-black/30 blur-[1.5px] translate-y-[2px] translate-x-[1px] -z-10 rounded-sm" />

      {/* ─── TAPED MEMBRANE WITH JAGGED DISPENSER TORN EDGES & TRANSLUCENCY ─── */}
      <div
        className={`w-full h-full relative overflow-hidden bg-gradient-to-r ${colorStyles[color]} backdrop-blur-[2px] border-y shadow-inner`}
        style={{
          clipPath:
            "polygon(0% 15%, 4% 0%, 8% 18%, 12% 2%, 16% 16%, 20% 0%, 24% 14%, 28% 0%, 32% 16%, 36% 0%, 40% 14%, 44% 0%, 48% 16%, 52% 0%, 56% 14%, 60% 0%, 64% 16%, 68% 0%, 72% 14%, 76% 0%, 80% 16%, 84% 0%, 88% 14%, 92% 0%, 96% 16%, 100% 0%, 100% 85%, 96% 100%, 92% 84%, 88% 100%, 84% 84%, 80% 100%, 76% 84%, 72% 100%, 68% 84%, 64% 100%, 60% 84%, 56% 100%, 52% 84%, 48% 100%, 44% 84%, 40% 100%, 36% 84%, 32% 100%, 28% 84%, 24% 100%, 20% 84%, 16% 100%, 12% 84%, 8% 100%, 4% 84%, 0% 100%)",
        }}
      >
        {/* Subtle Adhesive Air Bubble / Micro Crinkle Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_45%,rgba(255,255,255,0.2)_50%,transparent_55%)] [background-size:6px_6px]" />

        {/* Diagonal Gloss Specular Highlight Streak */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent transform -skew-x-12" />
      </div>
    </div>
  );
}
