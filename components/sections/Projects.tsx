"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, CaseFile } from "@/lib/data";
import { ExternalLink, X, Calendar, Github, Filter } from "lucide-react";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/motion";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<CaseFile | null>(null);
  const [activeFilter, setActiveFilter] = useState("ALL");

  const categories = ["ALL", "REACT / NEXT.JS", "NODE / AUTOMATION", "MOBILE"];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "ALL") return true;
    if (activeFilter === "REACT / NEXT.JS") return project.tech.some(t => t.includes("React") || t.includes("Next"));
    if (activeFilter === "NODE / AUTOMATION") return project.tech.some(t => t.includes("Node") || t.includes("Slack") || t.includes("Express"));
    if (activeFilter === "MOBILE") return project.tech.some(t => t.includes("React Native") || t.includes("Flutter") || t.includes("Firebase"));
    return true;
  });

  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-b-4 border-white/20 swiss-grid-pattern">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-12"
      >
        {/* Section Header */}
        <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-white/30 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-[#FF3000] font-black text-sm">03.</span>
            <span className="text-xs font-black uppercase tracking-widest text-white">
              SELECTED WORKS // PRODUCTION ARCHIVE [{projects.length.toString().padStart(2, '0')}]
            </span>
          </div>
          <span className="text-xs font-black uppercase tracking-widest text-white/60">
            SYSTEM EXHIBIT CATALOGUE
          </span>
        </motion.div>

        {/* Section Title & Filter Matrix */}
        <div className="space-y-6">
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-tight max-w-4xl">
            PRODUCTION APPLICATIONS & SYSTEM ARCHITECTURE.
          </motion.h2>

          {/* Category Filter Chips */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 pt-2">
            <div className="flex items-center gap-1.5 text-xs font-black text-white mr-2 uppercase tracking-widest">
              <Filter size={14} className="text-[#FF3000]" />
              <span>FILTER MATRIX:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-xs font-black uppercase tracking-wider border-2 border-white/40 transition-all ${
                  activeFilter === cat
                    ? "bg-[#FF3000] text-white border-[#FF3000]"
                    : "bg-black/60 text-white hover:bg-white hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              layout
              className="swiss-card-red p-6 sm:p-8 flex flex-col justify-between space-y-6 group cursor-pointer swiss-dots text-white"
              onClick={() => setSelectedProject(project)}
            >
              <div className="space-y-4">
                {/* Header info */}
                <div className="flex items-center justify-between gap-2 text-xs font-black uppercase tracking-widest pb-3 border-b-2 border-white/20">
                  <span className="text-[#FF3000] group-hover:text-white transition-colors">{project.scope}</span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {project.date}
                  </span>
                </div>

                {/* Title & Headline */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider opacity-80 mt-1">
                    {project.headline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm font-medium leading-relaxed font-sans opacity-90">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-black uppercase tracking-wider bg-white/10 text-white border border-white/30 group-hover:border-white transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="flex items-center justify-between pt-4 border-t-2 border-white/20 font-black text-xs uppercase tracking-widest">
                <span className="flex items-center gap-1.5 group-hover:underline">
                  <span>EXHIBIT DATA →</span>
                  <ExternalLink size={14} />
                </span>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="px-3 py-1.5 bg-white text-black group-hover:bg-black group-hover:text-white border-2 border-white transition-colors flex items-center gap-1"
                >
                  <Github size={14} />
                  <span>SRC CODE</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="bg-[#090A0F] border-4 border-white/40 max-w-3xl w-full p-6 sm:p-10 space-y-6 max-h-[90vh] overflow-y-auto swiss-grid-pattern text-white"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b-4 border-white/30 pb-4">
                <div>
                  <span className="text-xs font-black text-[#FF3000] uppercase tracking-widest">
                    EXHIBIT DETAIL // {selectedProject.scope}
                  </span>
                  <h3 className="text-3xl font-black uppercase tracking-tight text-white mt-1">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 bg-white text-black hover:bg-[#FF3000] hover:text-white transition-colors border-2 border-white"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Subtitle */}
              <p className="text-sm font-bold uppercase tracking-wider bg-white/10 p-3 border-2 border-white/30 text-white">
                {selectedProject.subtitle}
              </p>

              {/* Story */}
              <div className="space-y-3 font-sans">
                <h4 className="text-xs font-black uppercase tracking-widest text-[#FF3000] border-b-2 border-white/20 pb-1">
                  ARCHITECTURE & IMPLEMENTATION STORY
                </h4>
                {selectedProject.storyParagraphs.map((para, idx) => (
                  <p key={idx} className="text-sm font-medium text-white/90 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* Tech Stack breakdown */}
              <div className="space-y-3 font-sans">
                <h4 className="text-xs font-black uppercase tracking-widest text-[#FF3000] border-b-2 border-white/20 pb-1">
                  TECH STACK SPECIFICATION
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.techStack.map((item, idx) => (
                    <div key={idx} className="p-3 bg-white/10 border border-white/30">
                      <div className="text-xs font-black text-white uppercase">{item.name}</div>
                      <div className="text-xs font-semibold text-white/70 mt-0.5">{item.role}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Metrics */}
              <div className="space-y-3">
                <h4 className="text-xs font-black uppercase tracking-widest text-[#FF3000] border-b-2 border-white/20 pb-1">
                  SYSTEM METRICS & FINDINGS
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {selectedProject.keyFindings.map((finding, idx) => (
                    <div key={idx} className="p-3 bg-[#FF3000] text-white border-2 border-white text-center">
                      <div className="text-[10px] font-black uppercase tracking-wider">{finding.label}</div>
                      <div className="text-xs font-black uppercase mt-1">{finding.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-4 border-white/30">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="swiss-btn-primary px-6 py-3 text-xs font-black flex items-center gap-2"
                >
                  <Github size={16} />
                  <span>VIEW REPOSITORY ON GITHUB [EXT]</span>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="swiss-btn-secondary px-6 py-3 text-xs font-black"
                >
                  CLOSE EXHIBIT
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}





