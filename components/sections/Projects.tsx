"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, CaseFile } from "@/lib/data";
import { FolderGit2, Github, ExternalLink, X, Calendar } from "lucide-react";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/motion";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<CaseFile | null>(null);

  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-6xl mx-auto border-t border-[#232E42]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-12"
      >
        {/* Section Heading */}
        <motion.div variants={fadeUp} className="space-y-2">
          <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 size={14} />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Production Applications & Systems
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl">
            A showcase of full-stack web applications, mobile tools, and automated backend systems built with modern engineering standards.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="clean-card p-6 flex flex-col justify-between space-y-6 group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="space-y-4">
                {/* Header info */}
                <div className="flex items-center justify-between gap-2 text-xs text-gray-400">
                  <span className="font-semibold text-blue-400">{project.scope}</span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {project.date}
                  </span>
                </div>

                {/* Title & Headline */}
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-300 mt-1">
                    {project.headline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-[#1C263B] text-blue-300 text-xs font-medium border border-blue-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-[#232E42]">
                <span className="text-xs font-semibold text-gray-300 group-hover:text-blue-400 flex items-center gap-1.5 transition-colors">
                  <span>View Project Details</span>
                  <ExternalLink size={14} />
                </span>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#131B2A] hover:bg-blue-600 text-gray-300 hover:text-white text-xs font-semibold border border-[#232E42] transition-all"
                >
                  <Github size={14} />
                  <span>GitHub</span>
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="clean-card max-w-3xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto bg-[#0B0F17] border border-[#232E42]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-[#232E42] pb-4">
                <div>
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                    {selectedProject.scope}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-[#131B2A] rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Subtitle / Overview */}
              <p className="text-gray-300 text-base leading-relaxed">{selectedProject.subtitle}</p>

              {/* Story Paragraphs */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Project Story & Architecture</h4>
                {selectedProject.storyParagraphs.map((para, idx) => (
                  <p key={idx} className="text-sm text-gray-400 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* Tech Stack breakdown */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Tech Stack Breakdown</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.techStack.map((item, idx) => (
                    <div key={idx} className="p-3 rounded bg-[#131B2A] border border-[#232E42]">
                      <div className="text-xs font-bold text-blue-400">{item.name}</div>
                      <div className="text-xs text-gray-300 mt-0.5">{item.role}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Findings / Metrics */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Key Metrics & Highlights</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {selectedProject.keyFindings.map((finding, idx) => (
                    <div key={idx} className="p-3 rounded bg-[#131B2A] border border-[#232E42] text-center">
                      <div className="text-xs text-gray-400">{finding.label}</div>
                      <div className="text-sm font-bold text-white mt-1">{finding.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#232E42]">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all"
                >
                  <Github size={16} />
                  <span>View Source Code on GitHub</span>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


