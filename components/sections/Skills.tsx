"use client";

import { motion } from "framer-motion";
import { Layout, Server, Smartphone } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "FRONTEND ENGINEERING",
      icon: Layout,
      skills: [
        { name: "React.js", level: "EXPERT", pct: "95%" },
        { name: "Next.js 14", level: "ADVANCED", pct: "90%" },
        { name: "TypeScript", level: "ADVANCED", pct: "88%" },
        { name: "Tailwind CSS", level: "EXPERT", pct: "96%" },
        { name: "HTML5 / CSS3 / JS (ES6+)", level: "EXPERT", pct: "98%" },
        { name: "Framer Motion", level: "INTERMEDIATE", pct: "82%" },
      ],
    },
    {
      title: "BACKEND & DATABASES",
      icon: Server,
      skills: [
        { name: "Node.js & Express.js", level: "EXPERT", pct: "92%" },
        { name: "MongoDB & Mongoose", level: "ADVANCED", pct: "88%" },
        { name: "MySQL & SQL Schemas", level: "INTERMEDIATE", pct: "80%" },
        { name: "RESTful API Architecture", level: "EXPERT", pct: "95%" },
        { name: "JWT Authentication", level: "ADVANCED", pct: "90%" },
        { name: "Slack & Google APIs", level: "ADVANCED", pct: "86%" },
      ],
    },
    {
      title: "MOBILE & CLOUD INFRASTRUCTURE",
      icon: Smartphone,
      skills: [
        { name: "React Native (Expo)", level: "ADVANCED", pct: "88%" },
        { name: "Flutter", level: "INTERMEDIATE", pct: "78%" },
        { name: "Firebase (Auth & FCM)", level: "ADVANCED", pct: "86%" },
        { name: "AWS (S3, Lambda, EC2)", level: "INTERMEDIATE", pct: "75%" },
        { name: "Vercel & Netlify", level: "ADVANCED", pct: "92%" },
        { name: "Git & GitHub Workflows", level: "EXPERT", pct: "96%" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-b-4 border-white/20 swiss-grid-pattern">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-12"
      >
        {/* Section Header */}
        <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-white/30 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-[#FF3000] font-black text-sm">04.</span>
            <span className="text-xs font-black uppercase tracking-widest text-white">
              TECHNICAL MATRIX // SYSTEM CAPABILITIES
            </span>
          </div>
          <span className="text-xs font-black uppercase tracking-widest text-white/60">
            FRAMEWORK CLASSIFICATION
          </span>
        </motion.div>

        {/* Section Title */}
        <motion.h2 variants={fadeUp} className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-tight max-w-4xl">
          FULL STACK HARDWARE & SOFTWARE SPECIFICATION.
        </motion.h2>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="swiss-card p-6 space-y-6 flex flex-col justify-between text-white"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b-2 border-white/20 pb-4">
                    <h3 className="text-sm font-black uppercase tracking-wider text-white">{cat.title}</h3>
                    <div className="p-2 bg-white text-black">
                      <Icon size={18} />
                    </div>
                  </div>

                  <div className="space-y-4 font-sans">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1">
                        <div className="flex items-center justify-between text-xs font-black">
                          <span className="text-white uppercase">{skill.name}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-[#FF3000] text-[10px]">{skill.pct}</span>
                            <span className="text-[10px] px-1.5 py-0.5 bg-white text-black tracking-widest">
                              {skill.level}
                            </span>
                          </div>
                        </div>
                        {/* Progress Bar */}
                        <div className="w-full h-2 bg-black/60 border border-white/30 overflow-hidden">
                          <div
                            className="h-full bg-[#FF3000] transition-all duration-500"
                            style={{ width: skill.pct }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-white/20 text-[10px] font-black uppercase text-white/60 tracking-widest flex items-center justify-between">
                  <span>MODULE 0{idx + 1}</span>
                  <span className="text-[#FF3000]">100% OPERATIONAL</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}





