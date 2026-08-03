import { personalInfo } from "@/lib/data";
import { Download } from "lucide-react";

export default function BroadsheetHeader() {
  const navLinks = [
    { name: "The Work", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Letters", href: "#letters" },
    { name: "The Studio", href: "#about" },
    { name: "Commission", href: "#contact" },
  ];

  return (
    <header className="w-full bg-[#f4f1ea] border-b border-[#181410] text-[#181410] select-none">
      {/* ─── 1. EDITION BAR ─── */}
      <div className="border-b border-[#181410] py-2 px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-serif uppercase tracking-[0.22em] text-[#181410]">
        <span>INDEPENDENT DESIGN &amp; SDE PRACTICE</span>
        <span className="text-sm font-bold opacity-80 select-none">❦</span>
        <span>LONDON • PATNA • NEW DELHI • SYDNEY</span>
      </div>

      {/* ─── 2. SERIF MASTHEAD NAMEPLATE ─── */}
      <div className="py-6 sm:py-9 px-4 text-center broadsheet-double-rule">
        <a href="#hero" className="inline-block group">
          <h1 className="font-radley font-bold text-4xl sm:text-7xl lg:text-[96px] tracking-[0.045em] uppercase text-[#181410] leading-none transition-opacity hover:opacity-90">
            {personalInfo.name}
          </h1>
          <div className="text-[11px] font-serif uppercase tracking-[0.3em] text-[#181410] font-bold mt-2">
            THE CHRONICLE OF SOFTWARE ENGINEERING &amp; ART DIRECTION
          </div>
        </a>
      </div>

      {/* ─── 3. RULES-ROW NAVIGATION ─── */}
      <nav className="border-b border-[#181410] py-3 px-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-serif uppercase tracking-[0.22em] text-[#181410] font-semibold">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:underline underline-offset-4 decoration-1 decoration-[#181410] transition-all"
          >
            {link.name}
          </a>
        ))}
        <a
          href={personalInfo.resume}
          download="Ayush_Raj_CV.docx"
          className="px-3 py-1 bg-[#181410] text-[#f4f1ea] hover:bg-[#302922] transition-all hover:scale-105 inline-flex items-center gap-1.5 font-bold"
          title="Download Ayush Raj CV (.docx)"
        >
          <Download size={13} />
          <span>DOWNLOAD CV (DOCX)</span>
        </a>
      </nav>

      {/* ─── 4. THREE-UP DATELINE ROW ─── */}
      <div className="border-b border-[#181410] py-2.5 px-4 sm:px-8 grid grid-cols-1 md:grid-cols-3 items-center text-[11.5px] font-serif text-[#181410] gap-2 text-center md:text-left font-semibold">
        <div className="uppercase tracking-[0.2em]">
          EST. MMXIX • VOL. VIII
        </div>
        <div className="italic text-center font-serif text-xs text-[#181410]">
          &ldquo;A design &amp; software studio that sets products in ink &amp; pixels&rdquo;
        </div>
        <div className="uppercase tracking-[0.2em] text-center md:text-right flex items-center justify-center md:justify-end gap-3">
          <span>ISSUE NO. 47 • AUGUST 2026</span>
        </div>
      </div>
    </header>
  );
}
