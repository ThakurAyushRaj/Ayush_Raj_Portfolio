"use client";

import { motion } from "framer-motion";
import { personalInfo, stats } from "@/lib/data";
import { Code2, Server, Smartphone, Cloud } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function About() {
  const highlightIcons = [Code2, Server, Smartphone, Cloud];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#342D45]/60">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-12"
      >
        {/* Section Header */}
        <motion.div variants={fadeUp} className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#4FD1C5] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#F2A65A]" />
            <span>01 // About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F6F3EE] tracking-tight">
            Building features that solve real-world workflows.
          </h2>
        </motion.div>

        {/* Bio Grid (7:5 layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Bio text block */}
          <motion.div variants={fadeUp} className="lg:col-span-7 space-y-6 text-[#B3ABCF] text-base sm:text-lg leading-relaxed">
            <p className="border-l-4 border-[#F2A65A] pl-4 py-1 text-[#F6F3EE] font-medium">
              Full-stack developer experienced in building and shipping production features across the MERN and MEAN stacks, React Native, and Flutter.
            </p>
            <p className="text-[#B3ABCF] text-sm sm:text-base leading-relaxed">
              Currently at <strong className="text-[#F6F3EE]">aNquest Media</strong>, developing CRM and EMR products that power lead and patient workflows for real estate and healthcare clients. Strong foundation in REST API design and both relational and NoSQL databases, with an expanding focus on AWS and system design.
            </p>
          </motion.div>

          {/* Highlights Grid (2x2) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => {
              const Icon = highlightIcons[idx % highlightIcons.length];
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="p-5 rounded-2xl bg-[#272138]/80 border border-[#342D45] backdrop-blur-sm space-y-2 flex flex-col justify-between group hover:border-[#4FD1C5]/50 transition-all shadow-lg"
                >
                  <div className={`p-2.5 rounded-xl w-fit transition-colors ${
                    isEven ? "bg-[#F2A65A]/15 text-[#F2A65A] group-hover:bg-[#F2A65A] group-hover:text-[#1A1725]" : "bg-[#4FD1C5]/15 text-[#4FD1C5] group-hover:bg-[#4FD1C5] group-hover:text-[#1A1725]"
                  }`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#F6F3EE] tracking-tight">{stat.value}</div>
                    <div className="text-xs font-semibold text-[#B3ABCF] mt-0.5">{stat.label}</div>
                    <div className="text-[11px] text-[#B3ABCF]/60 font-medium">{stat.sub}</div>
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
