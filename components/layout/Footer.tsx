"use client";

import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t-4 border-black bg-white py-12 px-4 md:px-8 font-sans swiss-grid-pattern">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Column */}
        <div className="md:col-span-6 space-y-3">
          <div className="inline-block bg-[#FF3000] text-white px-2 py-0.5 text-[10px] font-black tracking-widest uppercase">
            // SWISS TYPOGRAPHIC ARCHIVE
          </div>
          <h3 className="text-2xl font-black uppercase text-black tracking-tight">
            {personalInfo.name} — {personalInfo.title}
          </h3>
          <p className="text-xs font-semibold text-black/70 max-w-md">
            {personalInfo.tagline} Building full-stack CRM, EMR, and scalable enterprise products at {personalInfo.company}.
          </p>
        </div>

        {/* Center Column Links */}
        <div className="md:col-span-3 space-y-2">
          <div className="text-xs font-black text-black/40 uppercase tracking-widest border-b-2 border-black pb-1">
            DIRECTORY
          </div>
          <ul className="space-y-1 text-xs font-bold uppercase tracking-wider text-black">
            <li><a href="#about" className="hover:text-[#FF3000] transition-colors">01. ABOUT</a></li>
            <li><a href="#experience" className="hover:text-[#FF3000] transition-colors">02. EXPERIENCE</a></li>
            <li><a href="#projects" className="hover:text-[#FF3000] transition-colors">03. PROJECTS</a></li>
            <li><a href="#skills" className="hover:text-[#FF3000] transition-colors">04. SKILLS</a></li>
            <li><a href="#education" className="hover:text-[#FF3000] transition-colors">05. EDUCATION</a></li>
            <li><a href="#contact" className="hover:text-[#FF3000] transition-colors">06. CONTACT</a></li>
          </ul>
        </div>

        {/* Right Column Socials */}
        <div className="md:col-span-3 space-y-2">
          <div className="text-xs font-black text-black/40 uppercase tracking-widest border-b-2 border-black pb-1">
            NETWORK
          </div>
          <ul className="space-y-1 text-xs font-bold uppercase tracking-wider text-black">
            <li>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF3000] transition-colors">
                GITHUB [EXT] →
              </a>
            </li>
            <li>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF3000] transition-colors">
                LINKEDIN [EXT] →
              </a>
            </li>
            <li>
              <a href={`mailto:${personalInfo.email}`} className="hover:text-[#FF3000] transition-colors">
                EMAIL TRANSMISSION →
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t-2 border-black flex flex-col sm:flex-row items-center justify-between text-[11px] font-black uppercase text-black/60 gap-2">
        <div>© {new Date().getFullYear()} {personalInfo.name}. OBJECTIVE DIGITAL COMMUNICATION.</div>
        <div>DESIGN SYSTEM: INTERNATIONAL TYPOGRAPHIC STYLE</div>
      </div>
    </footer>
  );
}


