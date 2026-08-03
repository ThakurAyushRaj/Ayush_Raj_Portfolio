"use client";

import { motion } from "framer-motion";
import { personalInfo, stats } from "@/lib/data";
import { Code2, Server, Smartphone, Cloud } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function About() {
  const highlightIcons = [Code2, Server, Smartphone, Cloud];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E2E8F0]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-12"
      >
        {/* Section Header */}
        <motion.div variants={fadeUp} className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1E40AF] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#D97706]" />
            <span>01 // About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Building features that solve real-world workflows.
          </h2>
        </motion.div>

        {/* Bio Grid (7:5 layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Bio text block */}
          <motion.div variants={fadeUp} className="lg:col-span-7 space-y-6 text-[#475569] text-base sm:text-lg leading-relaxed">
            <p className="border-l-4 border-[#0F172A] pl-4 py-1 text-[#0F172A] font-semibold">
              Full-stack developer experienced in building and shipping production features across the MERN and MEAN stacks, React Native, and Flutter.
            </p>
            <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
              Currently at <strong className="text-[#0F172A]">aNquest Media</strong>, developing CRM and EMR products that power lead and patient workflows for real estate and healthcare clients. Strong foundation in REST API design and both relational and NoSQL databases, with an expanding focus on AWS and system design.
            </p>
          </motion.div>

          {/* Highlights Grid (2x2) with Dark Contrast cards in between! */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => {
              const Icon = highlightIcons[idx % highlightIcons.length];
              const isDark = idx % 2 === 1; // Alternating dark black-blue cards!
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`p-5 rounded-2xl space-y-2 flex flex-col justify-between transition-all shadow-md ${
                    isDark
                      ? "bg-[#0F172A] text-[#F9F6F0] border border-[#0F172A]"
                      : "bg-[#FFFFFF] text-[#0F172A] border border-[#E2E8F0] hover:border-[#0F172A]/40"
                  }`}
                >
                  <div className={`p-2.5 rounded-xl w-fit ${
                    isDark ? "bg-[#1E293B] text-[#D97706]" : "bg-[#F1F5F9] text-[#1E40AF]"
                  }`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${isDark ? "text-[#F9F6F0]" : "text-[#0F172A]"}`}>{stat.value}</div>
                    <div className={`text-xs font-semibold mt-0.5 ${isDark ? "text-[#CBD5E1]" : "text-[#475569]"}`}>{stat.label}</div>
                    <div className={`text-[11px] font-medium ${isDark ? "text-[#94A3B8]" : "text-[#64748B]"}`}>{stat.sub}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
