"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { ArrowRight, MapPin, Mail, Github, Linkedin, Briefcase } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Hero() {
  return (
    <section id="hero" className="pt-28 pb-20 md:pt-36 md:pb-28 px-4 md:px-8 max-w-7xl mx-auto border-b-4 border-black swiss-grid-pattern overflow-hidden">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
      >
        {/* Main Left Column (8 cols) */}
        <div className="lg:col-span-8 space-y-8 flex flex-col justify-between">
          <div className="space-y-6">
            {/* Top Functional Header */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-black pb-4">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[#FF3000]"></span>
                <span className="text-xs font-black uppercase tracking-widest text-black">
                  SYS // FULL STACK DEVELOPMENT ARCHITECTURE
                </span>
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-black/60">
                00. INTRODUCTION
              </span>
            </motion.div>

            {/* Massive Swiss Typography Heading */}
            <motion.div variants={fadeUp} className="space-y-2">
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-black text-black tracking-tighter uppercase leading-[0.9]">
                AYUSH RAJ
              </h1>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#FF3000] tracking-tight uppercase leading-tight">
                // FULL STACK DEVELOPER
              </h2>
            </motion.div>

            {/* Objective Narrative Text Block */}
            <motion.p variants={fadeUp} className="text-base sm:text-xl font-medium text-black max-w-2xl leading-relaxed border-l-4 border-black pl-4">
              {personalInfo.about}
            </motion.p>
          </div>

          {/* CTAs and Direct Links */}
          <motion.div variants={fadeUp} className="space-y-6 pt-4">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="swiss-btn-primary px-8 py-4 text-xs font-black flex items-center gap-2 group"
              >
                <span>EXPLORE SELECTED WORKS [03]</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="swiss-btn-secondary px-8 py-4 text-xs font-black"
              >
                INITIATE CONTACT [06]
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs font-black tracking-wider text-black pt-2 border-t-2 border-black/10">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[#FF3000]" />
                <span>{personalInfo.location.toUpperCase()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={14} className="text-[#FF3000]" />
                <span>SDE @ <a href={personalInfo.companyUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#FF3000]">{personalInfo.company.toUpperCase()}</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#FF3000]" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-[#FF3000]">
                  {personalInfo.email.toUpperCase()}
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Bauhaus Geometric Composition Column (4 cols) */}
        <motion.div
          variants={fadeUp}
          className="lg:col-span-4 border-2 border-black bg-[#F2F2F2] p-6 flex flex-col justify-between swiss-dots"
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b-2 border-black pb-2 text-xs font-black tracking-widest uppercase">
              <span>SPECIFICATION MATRIX</span>
              <span className="text-[#FF3000]">2026.08</span>
            </div>

            <div className="space-y-3 font-sans">
              <div className="p-3 bg-white border-2 border-black">
                <div className="text-[10px] font-black tracking-widest text-black/50 uppercase">DEVELOPER RECORD</div>
                <div className="text-sm font-black text-black uppercase mt-0.5">{personalInfo.name}</div>
              </div>
              <div className="p-3 bg-white border-2 border-black">
                <div className="text-[10px] font-black tracking-widest text-black/50 uppercase">CORE FRAMEWORKS</div>
                <div className="text-sm font-black text-[#FF3000] uppercase mt-0.5">REACT / NEXT.JS / NODE.JS</div>
              </div>
              <div className="p-3 bg-white border-2 border-black">
                <div className="text-[10px] font-black tracking-widest text-black/50 uppercase">MOBILE ARCHITECTURE</div>
                <div className="text-sm font-black text-black uppercase mt-0.5">REACT NATIVE & FLUTTER</div>
              </div>
              <div className="p-3 bg-white border-2 border-black">
                <div className="text-[10px] font-black tracking-widest text-black/50 uppercase">SYSTEM STATUS</div>
                <div className="text-sm font-black text-black uppercase mt-0.5 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#FF3000] animate-ping"></span>
                  <span>VERIFIED OPERATIONAL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Geometric Composition graphic block */}
          <div className="pt-6 border-t-2 border-black flex items-center justify-between gap-2">
            <div className="w-10 h-10 bg-black"></div>
            <div className="w-10 h-10 bg-[#FF3000]"></div>
            <div className="w-10 h-10 rounded-full border-4 border-black"></div>
            <div className="flex-1 h-10 border-2 border-black swiss-diagonal"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}



