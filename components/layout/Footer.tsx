"use client";

import { personalInfo } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-paper text-ink border-double-t pt-12 pb-16">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b-2 border-ink pb-12">
          
          {/* Column 1: Copyright note */}
          <div>
            <h4 className="font-grotesk text-xs font-bold tracking-widest uppercase text-ink-muted mb-3">
              PRINT & IMPRINT
            </h4>
            <p className="font-serif text-sm text-ink-muted leading-relaxed">
              © {new Date().getFullYear()} The Ayush Raj Times · All rights reserved · Printed in Greater Noida.
            </p>
            <p className="font-serif italic text-xs text-ink-muted mt-2">
              A web developer in Greater Noida, India. Hand-set in Libre Caslon Display & Space Grotesk.
            </p>
          </div>

          {/* Column 2: Navigation Section Shortcuts */}
          <div>
            <h4 className="font-grotesk text-xs font-bold tracking-widest uppercase text-ink-muted mb-3">
              SECTION SHORTCUTS
            </h4>
            <ul className="flex flex-col gap-2 font-caslon text-base">
              <li>
                <a href="#work" className="hover:text-stamp transition-colors">
                  Selected Works (Exhibits)
                </a>
              </li>
              <li>
                <a href="#stack" className="hover:text-stamp transition-colors">
                  The Stack (Forensics Table)
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-stamp transition-colors">
                  Experience (Known Whereabouts)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-stamp transition-colors">
                  Contact (Submit a Tip)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Links */}
          <div>
            <h4 className="font-grotesk text-xs font-bold tracking-widest uppercase text-ink-muted mb-3">
              WIRE SERVICES
            </h4>
            <ul className="flex flex-col gap-2 font-mono text-xs text-ink">
              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stamp link-pencil uppercase tracking-wider font-bold"
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stamp link-pencil uppercase tracking-wider font-bold"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-stamp link-pencil uppercase tracking-wider font-bold"
                >
                  Email ↗
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Case Closed Stamp Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold tracking-widest text-stamp-bright border border-stamp-bright px-3 py-1 uppercase -rotate-2">
              CASE CLOSED
            </span>
            <span className="font-serif italic text-xs text-ink-muted">
              The Investigation Edition
            </span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Reopen the case — Back to top"
            className="font-grotesk text-xs font-bold tracking-widest uppercase border-2 border-ink px-5 py-2 hover:bg-paper-warm transition-colors shadow-xs"
          >
            REOPEN THE CASE ↑
          </button>
        </div>

      </div>
    </footer>
  );
}
