"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { ArrowUpRight, Github, Code2 } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#342D45]/60">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-12"
      >
        {/* Section Header */}
        <motion.div variants={fadeUp} className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#F2A65A] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#4FD1C5]" />
            <span>02 // Featured Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F6F3EE] tracking-tight">
            Production builds & open source applications.
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, pIdx) => {
            const isWarm = pIdx % 2 === 0;
            return (
              <motion.div
                key={project.id}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.015 }}
                className="p-6 sm:p-7 rounded-2xl bg-[#272138]/80 border border-[#342D45] backdrop-blur-sm flex flex-col justify-between space-y-6 group hover:border-[#4FD1C5]/50 hover:shadow-2xl hover:shadow-[#4FD1C5]/10 transition-all duration-200"
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between text-xs font-semibold text-[#B3ABCF]">
                    <div className={`flex items-center gap-1.5 ${isWarm ? "text-[#F2A65A]" : "text-[#4FD1C5]"}`}>
                      <Code2 size={15} />
                      <span>{project.tech[0]}</span>
                    </div>
                    <span className="text-[#B3ABCF]/60 font-mono text-[11px]">0{project.id}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#F6F3EE] group-hover:text-[#4FD1C5] transition-colors tracking-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#B3ABCF] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#1A1725] text-[#F6F3EE] border border-[#342D45] group-hover:border-[#F2A65A]/40 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-4 border-t border-[#342D45] flex items-center justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F6F3EE] group-hover:text-[#F2A65A] transition-colors"
                  >
                    <Github size={15} />
                    <span>View on GitHub</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
