import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Command, ArrowRight, User, Briefcase, FolderGit2, Cpu, GraduationCap, Mail, Terminal, X } from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");

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
            className="w-full max-w-xl bg-[#181410] border-2 border-[#c5a059] text-[#f4f1ea] shadow-2xl font-serif overflow-hidden"
          >
            <div className="flex items-center px-4 py-3 border-b border-[#c5a059]/40 bg-black/60">
              <Search size={18} className="text-[#c5a059] mr-3" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="TYPE A COMMAND OR SECTION NAME..."
                className="w-full bg-transparent text-[#f4f1ea] text-xs font-serif uppercase tracking-wider outline-none placeholder:text-[#d2c9b8]/50 font-bold"
              />
              <button
                onClick={onClose}
                className="p-1 text-[#d2c9b8] hover:text-[#e5c178] transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-2 max-h-72 overflow-y-auto space-y-1 font-serif text-xs">
              {filteredActions.length > 0 ? (
                filteredActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <a
                      key={action.id}
                      href={action.href}
                      onClick={onClose}
                      className="flex items-center justify-between p-3 bg-white/5 hover:bg-[#c5a059] hover:text-[#181410] transition-all border border-[#c5a059]/20 group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={16} className="text-[#c5a059] group-hover:text-[#181410]" />
                        <span className="font-bold uppercase tracking-wider">{action.label}</span>
                      </div>
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  );
                })
              ) : (
                <div className="p-4 text-center text-[#d2c9b8]/60 text-xs font-bold uppercase tracking-widest">
                  NO MATCHING COMMANDS FOUND.
                </div>
              )}
            </div>

            <div className="px-4 py-2 bg-black/80 border-t border-[#c5a059]/40 flex items-center justify-between text-[10px] font-serif tracking-widest text-[#d2c9b8] uppercase">
              <div className="flex items-center gap-2">
                <Command size={12} className="text-[#c5a059]" />
                <span>BROADSHEET QUICK DISPATCH NAV</span>
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
