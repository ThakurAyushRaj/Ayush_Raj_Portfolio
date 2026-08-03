"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { num: "01", name: "ABOUT", href: "#about" },
    { num: "02", name: "EXPERIENCE", href: "#experience" },
    { num: "03", name: "PROJECTS", href: "#projects" },
    { num: "04", name: "SKILLS", href: "#skills" },
    { num: "05", name: "EDUCATION", href: "#education" },
    { num: "06", name: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Brand Emblem */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-black text-white flex items-center justify-center font-extrabold text-sm tracking-tighter group-hover:bg-[#FF3000] transition-colors">
            AR
          </div>
          <div className="flex flex-col">
            <span className="font-black text-sm tracking-widest uppercase text-black group-hover:text-[#FF3000] transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[10px] font-bold tracking-wider text-black/60 uppercase">
              // SYS 1950.SWISS
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-black tracking-wider text-black">
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

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex px-4 py-2 text-xs font-black uppercase tracking-widest text-white bg-black border-2 border-black hover:bg-[#FF3000] transition-all"
          >
            GITHUB [EXT]
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-black hover:bg-black hover:text-white transition-colors border-2 border-black"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b-4 border-black px-6 py-6 space-y-3 font-black">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base tracking-widest text-black hover:text-[#FF3000] py-2 border-b border-black/10"
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
              className="block w-full text-center py-3 text-xs font-black uppercase tracking-widest text-white bg-black hover:bg-[#FF3000] transition-colors"
            >
              GITHUB [EXTERNAL]
            </a>
          </div>
        </div>
      )}
    </header>
  );
}


