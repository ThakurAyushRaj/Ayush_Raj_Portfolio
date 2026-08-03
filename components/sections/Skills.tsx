"use client";

import { motion } from "framer-motion";
import { Code, Layout, Server, Database, Cloud } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      icon: Code,
      skills: ["JavaScript", "TypeScript", "Dart"],
    },
    {
      category: "Frontend & Mobile",
      icon: Layout,
      skills: ["React.js", "React Native", "Flutter", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      category: "Backend",
      icon: Server,
      skills: ["Node.js", "Express.js"],
    },
    {
      category: "Databases",
      icon: Database,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
    },
    {
      category: "Cloud & Tools",
      icon: Cloud,
      skills: ["AWS", "Git", "GitHub"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#342D45]/60">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="space-y-12"
      >
        {/* Section Header */}
        <motion.div variants={fadeUp} className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#4FD1C5] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#F2A65A]" />
            <span>03 // Skills & Technologies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F6F3EE] tracking-tight">
            Technical stack & engineering tools.
          </h2>
        </motion.div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group, idx) => {
            const Icon = group.icon;
            const isWarm = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-[#272138]/80 border border-[#342D45] backdrop-blur-sm space-y-4 hover:border-[#4FD1C5]/40 transition-all shadow-lg"
              >
                <div className="flex items-center gap-3 border-b border-[#342D45] pb-3">
                  <div className={`p-2 rounded-xl ${isWarm ? "bg-[#F2A65A]/15 text-[#F2A65A]" : "bg-[#4FD1C5]/15 text-[#4FD1C5]"}`}>
                    <Icon size={18} />
                  </div>
                  <h3 className="text-base font-bold text-[#F6F3EE] tracking-tight">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {group.skills.map((skill, sIdx) => (
                    <motion.span
                      key={sIdx}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1A1725] text-[#F6F3EE] border border-[#342D45] hover:bg-[#F2A65A] hover:text-[#1A1725] hover:border-[#F2A65A] transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
