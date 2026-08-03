import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { ArrowUpRight, Github, Code2 } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E2E8F0]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-12"
      >
        <motion.div variants={fadeUp} className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#D97706] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#0F172A]" />
            <span>02 // Featured Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Production builds & open source applications.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, pIdx) => {
            const isDark = pIdx % 2 === 1;
            return (
              <motion.div
                key={project.id}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.015 }}
                className={`p-6 sm:p-7 rounded-2xl flex flex-col justify-between space-y-6 transition-all duration-200 shadow-md ${
                  isDark
                    ? "bg-[#0F172A] text-[#F9F6F0] border border-[#0F172A] hover:shadow-xl hover:shadow-[#0F172A]/20"
                    : "bg-[#FFFFFF] text-[#0F172A] border border-[#E2E8F0] hover:border-[#0F172A]/50 hover:shadow-lg"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <div className={`flex items-center gap-1.5 ${isDark ? "text-[#D97706]" : "text-[#1E40AF]"}`}>
                      <Code2 size={15} />
                      <span>{project.tech[0]}</span>
                    </div>
                    <span className={`font-mono text-[11px] ${isDark ? "text-[#94A3B8]" : "text-[#64748B]"}`}>0{project.id}</span>
                  </div>

                  <h3 className={`text-xl font-bold tracking-tight transition-colors ${
                    isDark ? "text-[#F9F6F0] hover:text-[#D97706]" : "text-[#0F172A] hover:text-[#1E40AF]"
                  }`}>
                    {project.title}
                  </h3>

                  <p className={`text-sm leading-relaxed ${isDark ? "text-[#CBD5E1]" : "text-[#475569]"}`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className={`px-2.5 py-1 rounded-md text-xs font-medium border ${
                          isDark
                            ? "bg-[#1E293B] text-[#F9F6F0] border-[#334155]"
                            : "bg-[#F1F5F9] text-[#0F172A] border-[#E2E8F0]"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`pt-4 border-t flex items-center justify-between ${isDark ? "border-[#1E293B]" : "border-[#E2E8F0]"}`}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors ${
                      isDark ? "text-[#F9F6F0] hover:text-[#D97706]" : "text-[#0F172A] hover:text-[#1E40AF]"
                    }`}
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
