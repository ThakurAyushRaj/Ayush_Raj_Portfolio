"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { label: "Front Page", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActive] = useState("home");
  const [menuOpen, setMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 280);
      const ids = ["home", "work", "stack", "experience", "contact"];
      const pos = window.scrollY + window.innerHeight / 3;
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= pos) {
          setActive(ids[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setMenu(false);
    const id = href.replace("#", "");
    if (window.location.pathname !== "/") {
      window.location.href = `/${href}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const currentDateFormatted = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      {/* ── TOP UTILITY & MASTHEAD BAR ───────────────────── */}
      <div className="bg-paper text-ink border-b border-ink/20">
        
        {/* Utility Top Bar */}
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-2 flex flex-wrap justify-between items-center font-grotesk text-xs tracking-wider uppercase text-ink-muted border-b border-ink/15">
          <div>Greater Noida, India • Vol. III • The Investigation Edition</div>
          <div className="hidden sm:block font-medium">{currentDateFormatted}</div>
          <div className="hidden md:block">28°C · Greater Noida · clear sky</div>
        </div>

        {/* Primary Title Block */}
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8 text-center">
          <h1 className="font-caslon text-6xl sm:text-8xl md:text-9xl font-normal tracking-tight leading-none text-ink select-none">
            {personalInfo.name.toUpperCase()}
          </h1>
          <p className="font-serif italic text-base sm:text-lg text-ink-muted mt-2 tracking-wide">
            The Personal Record of a Web Developer
          </p>
        </div>

        {/* Horizontal Navigation Menu between double rule lines */}
        <div className="border-double-y bg-paper">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-2.5 flex items-center justify-between">
            
            <nav className="hidden md:flex items-center gap-8 font-grotesk text-sm font-medium text-ink">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <button
                    key={link.label}
                    onClick={() => go(link.href)}
                    className={`transition-colors hover:text-stamp ${
                      isActive ? "text-stamp font-bold underline underline-offset-4" : "text-ink"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            <a
              href={`mailto:${personalInfo.email}`}
              className="hidden md:inline-flex items-center font-grotesk text-xs font-bold tracking-widest uppercase px-4 py-2 bg-ink text-paper hover:bg-stamp transition-colors"
            >
              Hire him →
            </a>

            {/* Mobile menu button */}
            <div className="md:hidden flex justify-between items-center w-full">
              <span className="font-caslon font-bold text-lg">{personalInfo.name}</span>
              <button
                onClick={() => setMenu(!menuOpen)}
                className="font-mono text-xs uppercase px-3 py-1.5 border border-ink"
              >
                MENU [☰]
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* ── STICKY NAVBAR ON SCROLL ───────────────────────── */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50 bg-paper/95 backdrop-blur-md border-b-2 border-ink shadow-sm"
          >
            <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-12 flex items-center justify-between">
              <button
                onClick={() => go("#home")}
                className="font-caslon text-xl font-bold text-ink hover:text-stamp transition-colors"
              >
                {personalInfo.name}
              </button>

              <nav className="hidden md:flex items-center gap-8 font-grotesk text-xs uppercase tracking-wider">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => go(link.href)}
                    className="text-ink hover:text-stamp transition-colors font-medium"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>

              <a
                href={`mailto:${personalInfo.email}`}
                className="font-grotesk text-xs font-bold tracking-widest uppercase px-4 py-1.5 bg-ink text-paper hover:bg-stamp transition-colors"
              >
                Hire him →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-50 bg-paper p-6 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center border-b-2 border-ink pb-4">
              <span className="font-caslon text-xl font-bold">{personalInfo.name}</span>
              <button
                onClick={() => setMenu(false)}
                className="font-mono text-sm uppercase px-3 py-1 border border-ink"
              >
                CLOSE [✕]
              </button>
            </div>

            <div className="flex flex-col gap-6 py-12">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => go(link.href)}
                  className="font-caslon italic text-3xl text-left text-ink hover:text-stamp"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <a
              href={`mailto:${personalInfo.email}`}
              className="font-grotesk text-center text-sm tracking-widest font-bold uppercase py-4 bg-ink text-paper"
            >
              Hire him →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
