"use client";

import { useState } from "react";

const katakana = "アアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789@#$%&*";

export default function Hero() {
  const [heroText1, setHeroText1] = useState("SERGIO AYALA");
  const [heroText2, setHeroText2] = useState("// ART DIRECTOR");

  const triggerGlitch = (text: string, setText: (val: string) => void) => {
    let iteration = 0;
    const interval = setInterval(() => {
      setText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) return text[index];
            return katakana[Math.floor(Math.random() * katakana.length)];
          })
          .join("")
      );
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 2;
    }, 30);
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center px-4 md:px-12 py-16 cyber-grid overflow-hidden border-b border-[#2A2A38]">
      <div className="max-w-6xl mx-auto w-full z-10 space-y-6">
        {/* Header Telemetry */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2A2A38]/60 pb-3">
          <div className="flex items-center gap-2 text-xs text-[#E4002B] font-mono tracking-widest uppercase">
            <span className="w-2 h-2 bg-[#E4002B] animate-ping"></span>
            <span>// ARCHIVAL IDENTIFIER: ART DIRECTOR & CREATIVE DEVELOPER</span>
          </div>
          <div className="text-xs text-slate-500 font-mono tracking-widest">
            「 セルヒオ・アヤラ // サイバーパンク GUI 」
          </div>
        </div>

        {/* High-Impact Typography Titles with Character Swap Glitch */}
        <div className="space-y-1">
          <h1
            onMouseEnter={() => triggerGlitch("SERGIO AYALA", setHeroText1)}
            onMouseLeave={() => setHeroText1("SERGIO AYALA")}
            className="font-syne font-black text-5xl sm:text-7xl md:text-9xl tracking-tighter uppercase leading-none glitch-hover cursor-default select-none text-white"
          >
            {heroText1}
          </h1>
          <h2
            onMouseEnter={() => triggerGlitch("// ART DIRECTOR", setHeroText2)}
            onMouseLeave={() => setHeroText2("// ART DIRECTOR")}
            className="font-syne font-extrabold text-3xl sm:text-5xl md:text-7xl tracking-tight text-[#E4002B] uppercase leading-none glitch-hover cursor-default select-none"
          >
            {heroText2}
          </h2>
        </div>

        {/* Hero Paragraph & Panel */}
        <div className="grid md:grid-cols-3 gap-6 pt-4 items-start">
          <div className="md:col-span-2 space-y-4">
            <p className="text-sm md:text-base text-slate-300 font-mono leading-relaxed max-w-2xl border-l-2 border-[#E4002B] pl-4">
              Building 80s/90s retro-anime, industrial cyberpunk, and high-impact digital experiences. Merging aggressive typography, GPU-accelerated motion shaders, and full-stack system architecture into award-winning web products.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-2 font-mono">
              <a href="#work" className="hud-box px-6 py-3 text-xs uppercase font-bold tracking-widest text-white hover:bg-[#E4002B] hover:text-white transition-all flex items-center gap-2 group">
                <span>[ EXPLORE EXHIBITS ]</span>
                <span class="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href="#contact" className="px-6 py-3 text-xs uppercase font-bold tracking-widest text-slate-400 border border-[#2A2A38] hover:border-white hover:text-white transition-all">
                [ TRANSMIT MESSAGE ]
              </a>
            </div>
          </div>

          <div className="hud-box p-4 space-y-3 text-xs font-mono text-slate-300">
            <div className="flex justify-between border-b border-[#2A2A38] pb-1">
              <span className="text-[#A0A0B0]">SUBJECT:</span>
              <span className="text-white font-bold">AYUSH RAJ / SERGIO</span>
            </div>
            <div className="flex justify-between border-b border-[#2A2A38] pb-1">
              <span className="text-[#A0A0B0]">FRAMEWORK:</span>
              <span className="text-[#00F0FF] font-bold">NEXT.JS / GSAP / TAILWIND</span>
            </div>
            <div className="flex justify-between border-b border-[#2A2A38] pb-1">
              <span className="text-[#A0A0B0]">GRAPHICS CORE:</span>
              <span className="text-[#00FF66] font-bold">CANVAS / CHROMATIC 60FPS</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#A0A0B0]">DEPLOYMENT:</span>
              <span className="text-[#E4002B] font-bold">VERIFIED OPERATIONAL</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
