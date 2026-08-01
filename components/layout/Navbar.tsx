"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [clock, setClock] = useState("00:00:00 UTC");
  const [sfxOn, setSfxOn] = useState(true);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setClock(now.toUTCString().slice(17, 25) + " UTC");
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[80] bg-[#070709]/90 backdrop-blur-md border-b border-[#2A2A38] px-4 md:px-8 py-3 flex items-center justify-between text-xs font-mono">
      {/* Brand */}
      <div className="flex items-center gap-3">
        <a href="#hero" className="font-syne font-extrabold text-sm tracking-wider text-white hover:text-[#E4002B] transition-colors flex items-center gap-2">
          <span className="w-2 h-2 bg-[#E4002B]"></span>
          SERGIO AYALA <span className="text-[#A0A0B0] font-mono font-normal text-xs">// AYUSH RAJ</span>
        </a>
        <span className="hidden md:inline-block text-[10px] bg-[#E4002B]/10 text-[#E4002B] px-2 py-0.5 border border-[#E4002B]/30">
          80S ANIME HUD
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-6 text-[11px] uppercase tracking-widest text-slate-400">
        <a href="#hero" className="hover:text-[#E4002B] transition-colors font-bold text-white">// 01.HERO</a>
        <a href="#work" className="hover:text-[#E4002B] transition-colors">// 02.WORKS</a>
        <a href="#specs" className="hover:text-[#E4002B] transition-colors">// 03.SPECS</a>
        <a href="#contact" className="hover:text-[#E4002B] transition-colors">// 04.CONTACT</a>
      </nav>

      {/* Status Bar Controls */}
      <div className="flex items-center gap-4">
        <div className="hidden sm:block text-[11px] text-[#A0A0B0] font-mono">{clock}</div>
        <button
          onClick={() => setSfxOn(!sfxOn)}
          className="flex items-center gap-1.5 text-[10px] uppercase border border-[#2A2A38] px-2.5 py-1 text-slate-300 hover:border-[#E4002B] hover:text-[#E4002B] transition-all"
        >
          <span className={`w-1.5 h-1.5 rounded-full ${sfxOn ? "bg-[#00FF66]" : "bg-red-500"}`}></span>
          <span>SFX: {sfxOn ? "ON" : "OFF"}</span>
        </button>
      </div>
    </header>
  );
}
