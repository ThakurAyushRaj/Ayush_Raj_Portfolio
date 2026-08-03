"use client";

import { motion } from "framer-motion";
import { Code, Layout, Server, Database, Cloud, Terminal, Cpu, HardDrive, Layers, GitBranch, Box, Smartphone } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { InteractiveFolder } from "@/components/ui/InteractiveFolder";

export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      icon: Code,
      color: "#3B82F6",
      label: "LANGS",
      description: "Core languages for building full-stack web & mobile applications.",
      skills: ["JavaScript", "TypeScript", "Dart"],
      folderItems: [
        <div key="1" className="flex items-center gap-1 text-[11px] font-black text-amber-600 uppercase tracking-tighter">JS</div>,
        <div key="2" className="flex items-center gap-1 text-[11px] font-black text-blue-600 uppercase tracking-tighter">TS</div>,
        <div key="3" className="flex items-center gap-1 text-[11px] font-black text-cyan-600 uppercase tracking-tighter">DART</div>,
      ],
      infoDetails: [
        "JavaScript (ES6+) — Asynchronous logic, DOM APIs & Event Loop",
        "TypeScript — Static typing, Generics, Interfaces & Strict compiler",
        "Dart — OOP language powering cross-platform Flutter applications"
      ]
    },
    {
      category: "Frontend & Mobile",
      icon: Layout,
      color: "#5227FF",
      label: "UI/MOB",
      description: "Responsive UI & native cross-platform mobile frameworks.",
      skills: ["React.js", "React Native", "Flutter", "HTML5", "CSS3", "Tailwind CSS"],
      folderItems: [
        <Layout key="1" className="w-5 h-5 text-indigo-600" />,
        <Smartphone key="2" className="w-5 h-5 text-purple-600" />,
        <Code key="3" className="w-5 h-5 text-sky-500" />,
      ],
      infoDetails: [
        "React.js — Modular component architecture, Hooks & State management",
        "React Native — Native mobile apps for iOS & Android with unified code",
        "Flutter — High-performance widget system & custom mobile UI layouts"
      ]
    },
    {
      category: "Backend",
      icon: Server,
      color: "#10B981",
      label: "API/NODE",
      description: "Scalable server architectures & RESTful API endpoints.",
      skills: ["Node.js", "Express.js"],
      folderItems: [
        <Server key="1" className="w-5 h-5 text-emerald-600" />,
        <Cpu key="2" className="w-5 h-5 text-teal-600" />,
        <Terminal key="3" className="w-5 h-5 text-slate-700" />,
      ],
      infoDetails: [
        "Node.js — Non-blocking event-driven backend JavaScript runtime",
        "Express.js — Lightweight REST API routing & middleware pipeline",
        "REST APIs — Authentication, JWT Tokens & Rate Limiting"
      ]
    },
    {
      category: "Databases",
      icon: Database,
      color: "#D97706",
      label: "DATABASES",
      description: "Relational & NoSQL database design and schema optimization.",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
      folderItems: [
        <Database key="1" className="w-5 h-5 text-amber-600" />,
        <HardDrive key="2" className="w-5 h-5 text-orange-600" />,
        <Layers key="3" className="w-5 h-5 text-yellow-600" />,
      ],
      infoDetails: [
        "MongoDB — Document database, Mongoose aggregation & indexing",
        "MySQL — Relational database modeling, complex joins & SQL queries",
        "Firebase — Firestore NoSQL, Realtime Sync & Push Notifications"
      ]
    },
    {
      category: "Cloud & Tools",
      icon: Cloud,
      color: "#EC4899",
      label: "DEVOPS",
      description: "Cloud infrastructure, version control & CI/CD deployment.",
      skills: ["AWS", "Git", "GitHub"],
      folderItems: [
        <Cloud key="1" className="w-5 h-5 text-pink-600" />,
        <GitBranch key="2" className="w-5 h-5 text-red-500" />,
        <Box key="3" className="w-5 h-5 text-purple-500" />,
      ],
      infoDetails: [
        "AWS — Cloud services including S3 storage, Lambda & CloudFront",
        "Git — Distributed version control, branching & merge workflows",
        "GitHub — Repository management, Actions CI/CD & collaboration"
      ]
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
          <p className="text-sm text-[#64748B]">Click on any card&apos;s folder tab to open and view detailed tech information.</p>
        </motion.div>

        {/* Skill Category Cards with Interactive Folders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group, idx) => {
            const Icon = group.icon;
            const isDark = idx % 2 === 1; // Dark black-blue contrast cards!
            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className={`p-6 rounded-2xl space-y-4 transition-all shadow-md relative group/card ${
                  isDark
                    ? "bg-[#0F172A] text-[#F9F6F0] border border-[#0F172A]"
                    : "bg-[#FFFFFF] text-[#0F172A] border border-[#E2E8F0] hover:border-[#0F172A]/40"
                }`}
              >
                <div className={`flex items-center justify-between border-b pb-3 ${isDark ? "border-[#1E293B]" : "border-[#E2E8F0]"}`}>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl ${isDark ? "bg-[#1E293B] text-[#D97706]" : "bg-[#F1F5F9] text-[#1E40AF]"}`}>
                      <Icon size={18} />
                    </div>
                    <h3 className={`text-base font-bold tracking-tight ${isDark ? "text-[#F9F6F0]" : "text-[#0F172A]"}`}>
                      {group.category}
                    </h3>
                  </div>

                  {/* Embedded InteractiveFolder inside small card */}
                  <div className="relative flex-shrink-0 -mr-2 -mt-2">
                    <InteractiveFolder 
                      size={0.65} 
                      color={group.color} 
                      label={group.label}
                      infoTitle={group.category}
                      description={group.description}
                      infoDetails={group.infoDetails}
                      items={group.folderItems}
                    />
                  </div>
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

