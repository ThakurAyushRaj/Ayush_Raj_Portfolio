import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Calendar, CheckCircle2 } from "lucide-react";
import { CaseFile } from "@/lib/data";

interface ProjectModalProps {
  project: CaseFile | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-[#f4f1ea] border-2 border-[#181410] text-[#181410] shadow-2xl z-10 max-h-[90vh] flex flex-col overflow-hidden font-serif"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b-2 border-[#181410] bg-[#181410] text-[#f4f1ea]">
            <div className="flex items-center gap-3">
              <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#c5a059]">
                {project.exhibit || "EXHIBIT"}
              </span>
              <span className="text-sm font-anton tracking-wide uppercase text-[#f4f1ea]">
                {project.title}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1 text-[#d2c9b8] hover:text-[#e5c178] transition-colors rounded hover:bg-white/10"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[calc(90vh-140px)]">
            {/* Image Banner */}
            <div className="border border-[#181410] p-1 bg-[#181410]/5 overflow-hidden">
              <img
                src={project.imagePlaceholder}
                alt={project.title}
                className="w-full h-[220px] sm:h-[300px] object-cover filter grayscale contrast-125 broadsheet-photo"
              />
            </div>

            {/* Title & Metadata */}
            <div className="space-y-2 border-b border-[#181410] pb-4">
              <h3 className="font-anton text-2xl sm:text-4xl uppercase tracking-tight text-[#181410]">
                {project.headline || project.title}
              </h3>
              <p className="text-base italic text-[#524b42] font-semibold">
                {project.subtitle}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs tracking-wider uppercase pt-2 font-bold text-[#524b42]">
                <span className="flex items-center gap-1">
                  <Calendar size={13} className="text-[#c5a059]" />
                  {project.date}
                </span>
                <span>•</span>
                <span>CLIENT: {project.client}</span>
                <span>•</span>
                <span className="text-[#c5a059] bg-[#181410] px-2 py-0.5">
                  STATUS: {project.status}
                </span>
              </div>
            </div>

            {/* Story / Description */}
            <div className="space-y-3">
              <h4 className="text-xs font-serif uppercase tracking-[0.2em] font-bold text-[#181410] border-b border-[#181410]/30 pb-1">
                DISPATCH SUMMARY &amp; ARCHITECTURE
              </h4>
              {project.storyParagraphs && project.storyParagraphs.length > 0 ? (
                project.storyParagraphs.map((para, idx) => (
                  <p key={idx} className="broadsheet-justify text-sm sm:text-base leading-relaxed text-[#181410]">
                    {para}
                  </p>
                ))
              ) : (
                <p className="broadsheet-justify text-sm sm:text-base leading-relaxed text-[#181410]">
                  {project.description}
                </p>
              )}
            </div>

            {/* Key Findings Grid */}
            {project.keyFindings && project.keyFindings.length > 0 && (
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-serif uppercase tracking-[0.2em] font-bold text-[#181410] border-b border-[#181410]/30 pb-1">
                  SYSTEM METRICS &amp; FINDINGS
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.keyFindings.map((finding, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#181410]/5 border border-[#181410] flex items-center justify-between text-xs"
                    >
                      <span className="font-semibold text-[#524b42] uppercase">{finding.label}</span>
                      <span className="font-bold text-[#181410]">{finding.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Chips */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-serif uppercase tracking-[0.2em] font-bold text-[#181410]">
                TECHNOLOGY MATRIX
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#181410] text-[#f4f1ea] text-xs font-serif uppercase tracking-wider font-bold border border-[#c5a059]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="p-4 sm:p-6 border-t-2 border-[#181410] bg-[#e8e4da] flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-serif italic text-[#524b42] flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#c5a059]" />
              <span>Verified production codebase in repository</span>
            </div>

            <div className="flex items-center gap-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#c5a059] hover:bg-[#e5c178] text-[#181410] text-xs uppercase tracking-wider font-bold border border-[#181410] flex items-center gap-2 transition-all hover:scale-105"
                >
                  <ExternalLink size={14} />
                  <span>LAUNCH LIVE DEMO</span>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#181410] hover:bg-[#302922] text-[#f4f1ea] text-xs uppercase tracking-wider font-bold border border-[#181410] flex items-center gap-2 transition-all hover:scale-105"
                >
                  <Github size={14} />
                  <span>VIEW CODEBASE</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
