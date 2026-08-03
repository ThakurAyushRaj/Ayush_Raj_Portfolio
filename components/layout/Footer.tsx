"use client";

import { personalInfo } from "@/lib/data";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#342D45]/80 bg-[#1A1725]/90 backdrop-blur-md py-12 px-4 sm:px-6 lg:px-8 text-[#B3ABCF] font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Info */}
        <div className="space-y-1 text-center md:text-left">
          <div className="text-[#F6F3EE] font-bold text-base tracking-tight">
            {personalInfo.name} — {personalInfo.title}
          </div>
          <p className="text-xs text-[#B3ABCF]/70">
            SDE @ {personalInfo.company} • {personalInfo.location}
          </p>
        </div>

        {/* Center Socials */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-[#272138] border border-[#342D45] text-[#B3ABCF] hover:text-[#4FD1C5] hover:border-[#4FD1C5]/40 transition-all"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-[#272138] border border-[#342D45] text-[#B3ABCF] hover:text-[#4FD1C5] hover:border-[#4FD1C5]/40 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2.5 rounded-xl bg-[#272138] border border-[#342D45] text-[#B3ABCF] hover:text-[#F2A65A] hover:border-[#F2A65A]/40 transition-all"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>

        {/* Back-to-Top Control */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#272138] hover:bg-[#342D45] border border-[#342D45] text-xs font-semibold text-[#B3ABCF] hover:text-[#F6F3EE] transition-all group"
        >
          <span>Back to Top</span>
          <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform text-[#F2A65A]" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-[#272138] text-center text-xs text-[#B3ABCF]/50">
        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved. Built with Next.js, TypeScript, Tailwind CSS & Framer Motion.
      </div>
    </footer>
  );
}
