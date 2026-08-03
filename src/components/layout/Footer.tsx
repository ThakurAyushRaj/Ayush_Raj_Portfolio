import { personalInfo } from "@/lib/data";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#E2E8F0] bg-[#F9F6F0]/90 backdrop-blur-md py-12 px-4 sm:px-6 lg:px-8 text-[#475569] font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Info */}
        <div className="space-y-1 text-center md:text-left">
          <div className="text-[#0F172A] font-bold text-base tracking-tight">
            {personalInfo.name} — {personalInfo.title}
          </div>
          <p className="text-xs text-[#64748B]">
            SDE @ {personalInfo.company} • {personalInfo.location}
          </p>
        </div>

        {/* Center Socials */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#CBD5E1] text-[#0F172A] hover:bg-[#0F172A] hover:text-[#F9F6F0] transition-all shadow-sm"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#CBD5E1] text-[#0F172A] hover:bg-[#0F172A] hover:text-[#F9F6F0] transition-all shadow-sm"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#CBD5E1] text-[#0F172A] hover:bg-[#0F172A] hover:text-[#F9F6F0] transition-all shadow-sm"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>

        {/* Back-to-Top Control */}
        <a
          href="#hero"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] border border-[#0F172A] text-xs font-semibold text-[#F9F6F0] transition-all group shadow-sm"
        >
          <span>Back to Top</span>
          <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform text-[#D97706]" />
        </a>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-[#E2E8F0] text-center text-xs text-[#94A3B8]">
        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved. Built with React, TypeScript, Vite, Tailwind CSS & Framer Motion.
      </div>
    </footer>
  );
}
