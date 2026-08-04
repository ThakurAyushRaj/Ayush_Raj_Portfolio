import { useState } from "react";
import { projects, CaseFile } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Eye, Github } from "lucide-react";
import ProjectModal from "@/components/ui/ProjectModal";
import TiltCard from "@/components/ui/TiltCard";
import InkDrawUnderline from "@/components/ui/InkDrawUnderline";
import TextScramble from "@/components/ui/TextScramble";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeProject, setActiveProject] = useState<CaseFile | null>(null);

  const categories = [
    { id: "ALL", label: "ALL EDITIONS" },
    { id: "FULL-STACK", label: "FULL-STACK & ERP" },
    { id: "MOBILE", label: "MOBILE SUITES" },
    { id: "BOTS", label: "AUTOMATION & BOTS" },
  ];

  const images = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
  ];

  const romanNumerals = ["I", "II", "III", "IV", "V", "VI"];

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "ALL") return true;
    if (selectedCategory === "FULL-STACK") {
      return (
        project.tech.includes("React.js") ||
        project.tech.includes("React") ||
        project.slug.includes("erp") ||
        project.slug.includes("blog")
      );
    }
    if (selectedCategory === "MOBILE") {
      return (
        project.tech.includes("React Native") ||
        project.slug.includes("app") ||
        project.slug.includes("todo")
      );
    }
    if (selectedCategory === "BOTS") {
      return (
        project.tech.includes("Slack Bolt API") ||
        project.slug.includes("slack")
      );
    }
    return true;
  });

  return (
    <section id="projects" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#181410] text-[#181410]">
      {/* Modal Dialog */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />

      {/* ─── SECTION HEADER ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-b border-[#181410] pb-4 mb-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2"
      >
        <div>
          <span className="text-xs font-serif uppercase tracking-[0.25em] text-[#181410] font-bold">
            <TextScramble text="03 // PORTFOLIO ARCHIVES & LIVE DEMOS" />
          </span>
          <h2 className="font-anton text-4xl sm:text-5xl uppercase tracking-tight text-[#181410] mt-1 font-black">
            <InkDrawUnderline color="#c5a059">
              <TextScramble text="FROM THE PORTFOLIO PAGES" as="span" />
            </InkDrawUnderline>
          </h2>
        </div>
        <div className="text-xs font-serif uppercase tracking-[0.2em] text-[#181410] font-semibold">
          <TextScramble text="SELECTED EDITIONS, MMXIX — PRESENT" />
        </div>
      </motion.div>

      {/* ─── INTERACTIVE CATEGORY FILTER TABS WITH LAYOUT ANIMATION ─── */}
      <div className="flex flex-wrap items-center gap-3 mb-10 pb-2 border-b border-[#181410]/20">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              data-cursor-label="FILTER"
              className={`relative px-4 py-2 text-xs font-serif uppercase tracking-[0.2em] font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#181410] text-[#f4f1ea] border-[#c5a059]"
                  : "bg-transparent text-[#181410] border-[#181410]/40 hover:border-[#181410] hover:bg-[#181410]/5"
              }`}
            >
              <span>{cat.label}</span>
              {isActive && (
                <motion.div
                  layoutId="activeFilterTab"
                  className="absolute inset-0 border-2 border-[#c5a059] pointer-events-none"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* ─── BALANCED 2-COLUMN BROADSHEET GRID WITH 3D TILT CARDS ─── */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <AnimatePresence>
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.id || idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <TiltCard tiltAmount={8} scaleAmount={1.015}>
                <div
                  data-cursor-label="INSPECT"
                  className="relative group overflow-hidden border-2 border-[#c5a059] p-5 bg-[#181410] text-[#f4f1ea] flex flex-col justify-between space-y-4 shadow-xl transition-all duration-300 hover:border-[#e5c178] hover:shadow-2xl h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                  <div className="space-y-4 relative z-10">
                    {/* Photo Frame */}
                    <div
                      onClick={() => setActiveProject(project)}
                      className="border border-[#c5a059]/40 p-1 bg-black/40 overflow-hidden cursor-pointer relative group/photo"
                    >
                      <img
                        src={images[idx % images.length]}
                        alt={project.title}
                        className="w-full h-[220px] sm:h-[260px] object-cover broadsheet-photo filter grayscale contrast-125 group-hover/photo:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/photo:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-serif uppercase tracking-widest text-[#e5c178] font-bold">
                        <Eye size={16} />
                        <span>INSPECT FULL DISPATCH</span>
                      </div>
                    </div>

                    {/* Title & Date */}
                    <div className="space-y-2 border-t border-[#c5a059]/30 pt-3">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-serif">
                        <span className="uppercase tracking-[0.2em] font-black text-[#c5a059] text-sm">
                          <TextScramble text={`PLATE ${romanNumerals[idx] || idx + 1} — ${project.title}`} as="span" />
                        </span>
                        <span className="italic text-[#d2c9b8] text-[11px] font-semibold">
                          {project.date}
                        </span>
                      </div>

                      <p className="broadsheet-justify text-sm font-serif text-[#d2c9b8] leading-relaxed">
                        {project.subtitle || project.description}
                      </p>
                    </div>
                  </div>

                  {/* Tech Badges & Action Links Row */}
                  <div className="pt-4 border-t border-[#c5a059]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-serif relative z-10">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t, tIdx) => (
                        <motion.span
                          key={tIdx}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-2 py-0.5 border border-[#c5a059]/50 text-[10px] font-serif uppercase tracking-widest text-[#e5c178] bg-black/50 font-bold"
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-[0.18em] font-bold shrink-0">
                      <button
                        onClick={() => setActiveProject(project)}
                        data-cursor-label="VIEW"
                        className="px-2.5 py-1 bg-[#181410] text-[#c5a059] border border-[#c5a059] hover:bg-[#c5a059] hover:text-[#181410] transition-all flex items-center gap-1 font-bold cursor-pointer"
                      >
                        <Eye size={12} />
                        <span>INSPECT</span>
                      </button>

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor-label="DEMO"
                          className="px-2.5 py-1 bg-[#c5a059] text-[#181410] hover:bg-[#e5c178] transition-all hover:scale-105 border border-[#c5a059] font-black flex items-center gap-1 cursor-pointer"
                        >
                          <ExternalLink size={12} />
                          <span>DEMO</span>
                        </a>
                      )}

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-label="CODE"
                        className="text-[#c5a059] hover:text-[#e5c178] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <Github size={12} />
                        <span>CODE</span>
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
