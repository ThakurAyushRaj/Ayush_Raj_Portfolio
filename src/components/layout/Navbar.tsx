import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Command } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { CommandPalette } from "@/components/ui/CommandPalette";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#F9F6F0]/90 backdrop-blur-md border-b border-[#E2E8F0] py-3 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Emblem */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-[#0F172A] text-[#F9F6F0] flex items-center justify-center font-extrabold text-sm shadow-md group-hover:scale-105 transition-transform">
              AR
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-[#0F172A] group-hover:text-[#1E40AF] transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-medium text-[#475569]">
                {personalInfo.title}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#475569]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-1 hover:text-[#0F172A] transition-colors group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0F172A] group-hover:w-full transition-all duration-200" />
              </a>
            ))}
          </nav>

          {/* CTA & Actions */}
          <div className="flex items-center gap-3">
            {/* Quick Command Trigger */}
            <button
              onClick={() => setCommandPaletteOpen(true)}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF8F5] hover:bg-[#E2E8F0] border border-[#CBD5E1] text-xs text-[#475569] hover:text-[#0F172A] transition-colors shadow-sm"
              title="Press Ctrl+K or Cmd+K"
            >
              <Command size={13} className="text-[#0F172A]" />
              <span>⌘K</span>
            </button>

            {/* Filled CTA Button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0F172A] hover:bg-[#1E293B] text-[#F9F6F0] text-xs font-bold shadow-md shadow-[#0F172A]/15 transition-all hover:-translate-y-0.5"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={14} />
            </a>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-[#FAF8F5] border border-[#CBD5E1] text-[#0F172A] hover:bg-[#E2E8F0]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#F9F6F0] border-b border-[#E2E8F0] px-6 py-6 space-y-4 shadow-xl"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-[#475569] hover:text-[#0F172A] py-1 border-b border-[#E2E8F0]"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center py-3 rounded-lg bg-[#0F172A] text-[#F9F6F0] font-bold text-sm"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </>
  );
}
