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
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E2E8F0]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="space-y-12"
      >
        {/* Section Header */}
        <motion.div variants={fadeUp} className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1E40AF] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#D97706]" />
            <span>03 // Skills & Technologies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Technical stack & engineering tools.
          </h2>
        </motion.div>

        {/* Skill Category Cards with Dark Contrast Cards in Between */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group, idx) => {
            const Icon = group.icon;
            const isDark = idx % 2 === 1; // Dark black-blue contrast cards!
            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className={`p-6 rounded-2xl space-y-4 transition-all shadow-md ${
                  isDark
                    ? "bg-[#0F172A] text-[#F9F6F0] border border-[#0F172A]"
                    : "bg-[#FFFFFF] text-[#0F172A] border border-[#E2E8F0] hover:border-[#0F172A]/40"
                }`}
              >
                <div className={`flex items-center gap-3 border-b pb-3 ${isDark ? "border-[#1E293B]" : "border-[#E2E8F0]"}`}>
                  <div className={`p-2 rounded-xl ${isDark ? "bg-[#1E293B] text-[#D97706]" : "bg-[#F1F5F9] text-[#1E40AF]"}`}>
                    <Icon size={18} />
                  </div>
                  <h3 className={`text-base font-bold tracking-tight ${isDark ? "text-[#F9F6F0]" : "text-[#0F172A]"}`}>
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {group.skills.map((skill, sIdx) => (
                    <motion.span
                      key={sIdx}
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-default ${
                        isDark
                          ? "bg-[#1E293B] text-[#F9F6F0] border-[#334155] hover:bg-[#D97706] hover:text-[#0F172A]"
                          : "bg-[#F1F5F9] text-[#0F172A] border-[#E2E8F0] hover:bg-[#0F172A] hover:text-[#F9F6F0]"
                      }`}
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
