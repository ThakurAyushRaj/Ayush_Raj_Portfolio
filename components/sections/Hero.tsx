"use client";

import { personalInfo } from "@/lib/data";
import { ArrowRight, MapPin, Mail, Github, Linkedin, Briefcase } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="space-y-8">
        {/* Status pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span>{personalInfo.company} — {personalInfo.title}</span>
        </div>

        {/* Hero Title & Headline */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Hi, I'm <span className="text-blue-500">{personalInfo.name}</span>.
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300">
            {personalInfo.tagline}
          </h2>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-400 max-w-3xl leading-relaxed">
          {personalInfo.about}
        </p>

        {/* Info Highlights */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 pt-2">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-blue-400" />
            <span>{personalInfo.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase size={16} className="text-blue-400" />
            <span>SDE at <a href={personalInfo.companyUrl} target="_blank" rel="noopener noreferrer" className="text-gray-200 underline hover:text-blue-400">{personalInfo.company}</a></span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-blue-400" />
            <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-400 transition-colors">
              {personalInfo.email}
            </a>
          </div>
        </div>

        {/* CTA Actions */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/20"
          >
            <span>View Featured Work</span>
            <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#232E42] bg-[#131B2A] hover:bg-[#1C263B] text-gray-200 font-semibold text-sm transition-all"
          >
            Get In Touch
          </a>
          <div className="flex items-center gap-3 pl-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-[#232E42] bg-[#131B2A] text-gray-400 hover:text-white hover:border-blue-500/40 transition-all"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-[#232E42] bg-[#131B2A] text-gray-400 hover:text-white hover:border-blue-500/40 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

