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
        { name: "React.js", level: "EXPERT" },
        { name: "Next.js 14", level: "ADVANCED" },
        { name: "TypeScript", level: "ADVANCED" },
        { name: "Tailwind CSS", level: "EXPERT" },
        { name: "HTML5 / CSS3 / JS (ES6+)", level: "EXPERT" },
        { name: "Framer Motion", level: "INTERMEDIATE" },
      ],
    },
    {
      title: "BACKEND & DATABASES",
      icon: Server,
      skills: [
        { name: "Node.js & Express.js", level: "EXPERT" },
        { name: "MongoDB & Mongoose", level: "ADVANCED" },
        { name: "MySQL & SQL Schemas", level: "INTERMEDIATE" },
        { name: "RESTful API Architecture", level: "EXPERT" },
        { name: "JWT Authentication", level: "ADVANCED" },
        { name: "Slack & Google APIs", level: "ADVANCED" },
      ],
    },
    {
      title: "MOBILE & CLOUD INFRASTRUCTURE",
      icon: Smartphone,
      skills: [
        { name: "React Native (Expo)", level: "ADVANCED" },
        { name: "Flutter", level: "INTERMEDIATE" },
        { name: "Firebase (Auth & FCM)", level: "ADVANCED" },
        { name: "AWS (S3, Lambda, EC2)", level: "INTERMEDIATE" },
        { name: "Vercel & Netlify", level: "ADVANCED" },
        { name: "Git & GitHub Workflows", level: "EXPERT" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-b-4 border-black swiss-grid-pattern">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-12"
      >
        {/* Section Header */}
        <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-black pb-4">
          <div className="flex items-center gap-2">
            <span className="text-[#FF3000] font-black text-sm">04.</span>
            <span className="text-xs font-black uppercase tracking-widest text-black">
              TECHNICAL MATRIX // SYSTEM CAPABILITIES
            </span>
          </div>
          <span className="text-xs font-black uppercase tracking-widest text-black/60">
            FRAMEWORK CLASSIFICATION
          </span>
        </motion.div>

        {/* Section Title */}
        <motion.h2 variants={fadeUp} className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-black tracking-tight leading-tight max-w-4xl">
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
                className="swiss-card p-6 space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b-2 border-black pb-4">
                    <h3 className="text-sm font-black uppercase tracking-wider text-black">{cat.title}</h3>
                    <div className="p-2 bg-black text-white">
                      <Icon size={18} />
                    </div>
                  </div>

                  <div className="space-y-3 font-sans">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-center justify-between text-xs font-black p-2 bg-[#F2F2F2] border border-black/30">
                        <span className="text-black uppercase">{skill.name}</span>
                        <span className="text-[10px] px-2 py-0.5 bg-black text-white tracking-widest">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-black text-[10px] font-black uppercase text-black/60 tracking-widest flex items-center justify-between">
                  <span>MODULE 0{idx + 1}</span>
                  <span className="text-[#FF3000]">ACTIVE SPEC</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}



