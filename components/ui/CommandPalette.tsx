"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Command, ArrowRight, User, Briefcase, FolderGit2, Cpu, GraduationCap, Mail, Terminal, X } from "lucide-react";
import { personalInfo } from "@/lib/data";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");

  // Handle ESC key and Ctrl+K key shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const actions = [
    { id: "hero", label: "GOTO 00. INTRODUCTION // HERO", icon: Terminal, href: "#hero" },
    { id: "about", label: "GOTO 01. BACKGROUND INTEL // ABOUT", icon: User, href: "#about" },
    { id: "experience", label: "GOTO 02. CAREER CHRONOLOGY // EXPERIENCE", icon: Briefcase, href: "#experience" },
    { id: "projects", label: "GOTO 03. SELECTED WORKS // PROJECTS", icon: FolderGit2, href: "#projects" },
    { id: "skills", label: "GOTO 04. TECHNICAL MATRIX // SKILLS", icon: Cpu, href: "#skills" },
    { id: "education", label: "GOTO 05. ACADEMIC CREDENTIALS // EDUCATION", icon: GraduationCap, href: "#education" },
    { id: "contact", label: "GOTO 06. TRANSMISSION PROTOCOL // CONTACT", icon: Mail, href: "#contact" },
  ];

  const filteredActions = actions.filter((action) =>
    action.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl bg-[#090A0F] border-2 border-[#FF3000] text-white shadow-[0_0_30px_rgba(255,48,0,0.3)] font-sans swiss-grid-pattern overflow-hidden"
          >
            {/* Input Bar */}
            <div className="flex items-center px-4 py-3 border-b-2 border-white/20 bg-black/80">
              <Search size={18} className="text-[#FF3000] mr-3" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="TYPE A COMMAND OR SECTION NAME..."
                className="w-full bg-transparent text-white text-xs font-black uppercase tracking-wider outline-none placeholder:text-white/40"
              />
              <button
                onClick={onClose}
                className="p-1 text-white/60 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* Actions List */}
            <div className="p-2 max-h-72 overflow-y-auto space-y-1 font-mono text-xs">
              {filteredActions.length > 0 ? (
                filteredActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <a
                      key={action.id}
                      href={action.href}
                      onClick={onClose}
                      className="flex items-center justify-between p-3 bg-white/5 hover:bg-[#FF3000] hover:text-white transition-colors border border-white/10 group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={16} className="text-[#FF3000] group-hover:text-white" />
                        <span className="font-bold uppercase tracking-wider">{action.label}</span>
                      </div>
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  );
                })
              ) : (
                <div className="p-4 text-center text-white/50 text-xs font-bold uppercase tracking-widest">
                  NO MATCHING COMMANDS FOUND.
                </div>
              )}
            </div>

            {/* Footer hints */}
            <div className="px-4 py-2 bg-black border-t border-white/20 flex items-center justify-between text-[10px] font-black tracking-widest text-white/50 uppercase">
              <div className="flex items-center gap-2">
                <Command size={12} className="text-[#FF3000]" />
                <span>SWISS SYSTEM QUICK NAV</span>
              </div>
              <span>ESC TO CLOSE</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CommandPalette;
