"use client";

import { motion } from "framer-motion";
import { personalInfo, stats } from "@/lib/data";
import { Code, Layers, Server, Cpu } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-b-4 border-black swiss-grid-pattern">
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
            <span className="text-[#FF3000] font-black text-sm">01.</span>
            <span className="text-xs font-black uppercase tracking-widest text-black">
              BACKGROUND INTEL // SUBJECT RECORD
            </span>
          </div>
          <span className="text-xs font-black uppercase tracking-widest text-black/60">
            DOSSIER NO. 01
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2 variants={fadeUp} className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-black tracking-tight leading-tight max-w-4xl">
          BUILDING SOFTWARE PRODUCTS THAT SHIP AND SOLVE REAL WORKFLOWS.
        </motion.h2>

        {/* Asymmetric Grid Content (7:5 ratio) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Bio Text */}
          <motion.div variants={fadeUp} className="lg:col-span-7 space-y-6 text-black leading-relaxed font-sans">
            <p className="text-base sm:text-lg font-medium border-l-4 border-[#FF3000] pl-4">
              {personalInfo.about}
            </p>
            <p className="text-sm sm:text-base font-semibold text-black/80">
              With 3+ years of hands-on full-stack development experience, Ayush Raj specializes in engineering high-throughput React/Next.js interfaces, resilient Node.js REST services, relational & document schema design (MongoDB, MySQL), and cross-platform mobile apps (React Native & Flutter).
            </p>
            
            {/* Stats Grid (2x2) */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ backgroundColor: "#FF3000", color: "#FFFFFF" }}
                  className="swiss-card p-5 cursor-default transition-all duration-150"
                >
                  <div className="text-3xl sm:text-4xl font-black tracking-tight">{stat.value}</div>
                  <div className="text-xs font-black uppercase tracking-wider mt-1">{stat.label}</div>
                  <div className="text-[10px] font-bold uppercase opacity-80">{stat.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Core Capabilities Box */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-5 border-2 border-black bg-[#F2F2F2] p-6 sm:p-8 space-y-6 swiss-diagonal"
          >
            <h3 className="text-lg font-black uppercase text-black border-b-2 border-black pb-3 flex items-center justify-between">
              <span>CORE STACK SPEC</span>
              <Cpu size={20} className="text-[#FF3000]" />
            </h3>

            <div className="space-y-4 font-sans">
              <div className="p-3 bg-white border-2 border-black space-y-1">
                <div className="text-[10px] font-black tracking-widest text-[#FF3000] uppercase flex items-center gap-1.5">
                  <Code size={12} />
                  <span>FRONTEND ENGINEERING</span>
                </div>
                <div className="text-xs font-black text-black uppercase">React.js, Next.js 14, TypeScript, Tailwind CSS</div>
              </div>

              <div className="p-3 bg-white border-2 border-black space-y-1">
                <div className="text-[10px] font-black tracking-widest text-[#FF3000] uppercase flex items-center gap-1.5">
                  <Server size={12} />
                  <span>BACKEND ARCHITECTURE</span>
                </div>
                <div className="text-xs font-black text-black uppercase">Node.js, Express.js, RESTful APIs, JWT Auth</div>
              </div>

              <div className="p-3 bg-white border-2 border-black space-y-1">
                <div className="text-[10px] font-black tracking-widest text-[#FF3000] uppercase flex items-center gap-1.5">
                  <Layers size={12} />
                  <span>MOBILE & DATA LAYER</span>
                </div>
                <div className="text-xs font-black text-black uppercase">React Native, Flutter, MongoDB, MySQL, AWS</div>
              </div>
            </div>

            <div className="pt-4 border-t-2 border-black flex justify-between items-center text-xs font-black uppercase">
              <span>CURRENT ENGAGEMENT:</span>
              <a href={personalInfo.companyUrl} target="_blank" rel="noopener noreferrer" className="text-[#FF3000] hover:underline">
                {personalInfo.company}
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}



