"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { ArrowRight, Mail, Github, Linkedin, MapPin, Briefcase } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1.0] },
    },
  };

  return (
    <section id="hero" className="relative min-h-[90vh] pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8 max-w-4xl"
      >
        {/* Dual-Accent Status Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#272138] border border-[#4FD1C5]/30 text-xs font-semibold text-[#4FD1C5]">
          <span className="w-2 h-2 rounded-full bg-[#F2A65A] animate-ping" />
          <span>Software Development Engineer @ {personalInfo.company}</span>
        </motion.div>

        {/* Staggered Reveal Main Headline */}
        <div className="space-y-3">
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#F6F3EE] tracking-tight leading-[1.08]"
          >
            Hi, I&apos;m <span className="bg-gradient-to-r from-[#F6F3EE] via-[#F2A65A] to-[#4FD1C5] bg-clip-text text-transparent">{personalInfo.name}</span>
          </motion.h1>
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#B3ABCF] tracking-tight"
          >
            Engineering scalable full-stack web & mobile products.
          </motion.h2>
        </div>

        {/* Role & Company Subline */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-xl text-[#B3ABCF] max-w-2xl font-normal leading-relaxed"
        >
          Full-stack developer building production MERN/MEAN features, React Native & Flutter apps, and CRM/EMR platforms that power real estate and healthcare workflows.
        </motion.p>

        {/* Meta Info Row */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-medium text-[#B3ABCF]">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-[#F2A65A]" />
            <span className="text-[#F6F3EE]">{personalInfo.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase size={16} className="text-[#4FD1C5]" />
            <span>SDE @ <a href={personalInfo.companyUrl} target="_blank" rel="noopener noreferrer" className="text-[#F6F3EE] hover:underline hover:text-[#4FD1C5] transition-colors">{personalInfo.company}</a></span>
          </div>
        </motion.div>

        {/* CTAs and Social Links */}
        <motion.div variants={itemVariants} className="pt-2 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3.5 rounded-xl bg-[#F2A65A] hover:bg-[#E08A3E] text-[#1A1725] font-bold text-sm shadow-xl shadow-[#F2A65A]/20 transition-all flex items-center gap-2 group hover:-translate-y-0.5"
          >
            <span>Explore Projects</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="px-6 py-3.5 rounded-xl bg-[#272138] hover:bg-[#342D45] border border-[#342D45] text-[#F6F3EE] font-semibold text-sm transition-all hover:-translate-y-0.5"
          >
            Contact Me
          </a>

          {/* Social Icons Row */}
          <div className="flex items-center gap-3 ml-0 sm:ml-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#342D45] w-full sm:w-auto">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-[#272138] hover:bg-[#342D45] border border-[#342D45] text-[#B3ABCF] hover:text-[#4FD1C5] transition-all hover:scale-105"
              aria-label="GitHub Repository"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-[#272138] hover:bg-[#342D45] border border-[#342D45] text-[#B3ABCF] hover:text-[#4FD1C5] transition-all hover:scale-105"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-xl bg-[#272138] hover:bg-[#342D45] border border-[#342D45] text-[#B3ABCF] hover:text-[#F2A65A] transition-all hover:scale-105"
              aria-label="Email Transmission"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
