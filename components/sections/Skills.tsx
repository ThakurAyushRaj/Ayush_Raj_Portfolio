"use client";

import { motion } from "framer-motion";
import { Wrench, Layout, Server, Smartphone } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: Layout,
      skills: [
        { name: "React.js", level: "Expert" },
        { name: "Next.js", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "HTML5 / CSS3 / JS (ES6+)", level: "Expert" },
        { name: "Framer Motion", level: "Intermediate" },
      ],
    },
    {
      title: "Backend & Databases",
      icon: Server,
      skills: [
        { name: "Node.js & Express.js", level: "Expert" },
        { name: "MongoDB & Mongoose", level: "Advanced" },
        { name: "MySQL & SQL Schemas", level: "Intermediate" },
        { name: "RESTful API Architecture", level: "Expert" },
        { name: "JWT Authentication", level: "Advanced" },
        { name: "Slack & Google APIs", level: "Advanced" },
      ],
    },
    {
      title: "Mobile & Cloud Infrastructure",
      icon: Smartphone,
      skills: [
        { name: "React Native (Expo)", level: "Advanced" },
        { name: "Flutter", level: "Intermediate" },
        { name: "Firebase (Auth & FCM)", level: "Advanced" },
        { name: "AWS (S3, Lambda, EC2)", level: "Intermediate" },
        { name: "Vercel & Netlify", level: "Advanced" },
        { name: "Git & GitHub Workflows", level: "Expert" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-8 max-w-6xl mx-auto border-t border-[#232E42]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-12"
      >
        {/* Section Heading */}
        <motion.div variants={fadeUp} className="space-y-2">
          <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Wrench size={14} />
            <span>Skills & Technologies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical Stack & Capabilities
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl">
            A comprehensive list of technologies, frameworks, databases, and tools used to build end-to-end applications.
          </p>
        </motion.div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="clean-card p-6 space-y-6"
              >
                <div className="flex items-center gap-3 border-b border-[#232E42] pb-4">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                </div>

                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center justify-between text-sm">
                      <span className="font-medium text-gray-200">{skill.name}</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-[#131B2A] text-blue-300 border border-[#232E42]">
                        {skill.level}
                      </span>
                    </div>
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


