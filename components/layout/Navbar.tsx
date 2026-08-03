"use client";

import { useState, useEffect } from "react";
import { Menu, X, Clock, Command } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { CommandPalette } from "@/components/ui/CommandPalette";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const ist = now.toLocaleTimeString("en-US", { timeZone: "Asia/Kolkata", hour12: false });
      const utc = now.toLocaleTimeString("en-US", { timeZone: "UTC", hour12: false });
      setTimeString(`IST ${ist} // UTC ${utc}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { num: "01", name: "ABOUT", href: "#about" },
    { num: "02", name: "EXPERIENCE", href: "#experience" },
    { num: "03", name: "PROJECTS", href: "#projects" },
    { num: "04", name: "SKILLS", href: "#skills" },
    { num: "05", name: "EDUCATION", href: "#education" },
    { num: "06", name: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#090A0F]/90 backdrop-blur-md border-b-4 border-white/20 font-sans">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          {/* Brand Emblem */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-white text-black flex items-center justify-center font-extrabold text-sm tracking-tighter group-hover:bg-[#FF3000] group-hover:text-white transition-colors border-2 border-white">
              AR
            </div>
            <div className="flex flex-col">
              <span className="font-black text-sm tracking-widest uppercase text-white group-hover:text-[#FF3000] transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[10px] font-bold tracking-wider text-white/60 uppercase">
                // SYS 1950.SWISS
              </span>
            </div>
          </a>

          {/* Live Swiss Time Display */}
          <div className="hidden xl:flex items-center gap-2 text-[10px] font-black tracking-widest text-white/80 bg-white/10 px-3 py-1.5 border border-white/30">
            <Clock size={12} className="text-[#FF3000]" />
            <span>{timeString || "IST --:--:-- // UTC --:--:--"}</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 text-xs font-black tracking-wider text-white">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#FF3000] transition-colors flex items-center gap-1 group py-1"
              >
                <span className="text-[#FF3000] text-[10px]">{link.num}.</span>
                <span>{link.name}</span>
              </a>
            ))}
          </nav>

          {/* CTA Buttons, Command Palette Trigger & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Quick Command Palette Button */}
            <button
              onClick={() => setCommandPaletteOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-white bg-white/10 border border-white/30 hover:bg-[#FF3000] hover:border-[#FF3000] transition-all"
              title="Press Ctrl+K or Cmd+K"
            >
              <Command size={12} className="text-[#FF3000]" />
              <span>⌘K QUICK NAV</span>
            </button>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex px-4 py-2 text-xs font-black uppercase tracking-widest text-black bg-white border-2 border-white hover:bg-[#FF3000] hover:text-white hover:border-[#FF3000] transition-all"
            >
              GITHUB [EXT]
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-white hover:text-black transition-colors border-2 border-white/40"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#090A0F] border-b-4 border-white/30 px-6 py-6 space-y-3 font-black text-white">
            {/* Mobile Clock & Quick Nav */}
            <div className="flex items-center justify-between gap-2 text-[10px] font-black tracking-widest text-white/80 bg-white/10 px-3 py-2 border border-white/30 mb-3">
              <div className="flex items-center gap-1.5">
                <Clock size={12} className="text-[#FF3000]" />
                <span>{timeString}</span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setCommandPaletteOpen(true);
                }}
                className="text-[#FF3000] underline uppercase"
              >
                ⌘K NAV
              </button>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base tracking-widest text-white hover:text-[#FF3000] py-2 border-b border-white/10"
              >
                <span className="text-[#FF3000] text-xs mr-2">{link.num}.</span>
                {link.name}
              </a>
            ))}
            <div className="pt-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 text-xs font-black uppercase tracking-widest text-black bg-white hover:bg-[#FF3000] hover:text-white transition-colors"
              >
                GITHUB [EXTERNAL]
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </>
  );
}





