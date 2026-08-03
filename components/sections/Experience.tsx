"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { experiences } from "@/lib/data";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#342D45]/60">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="space-y-12"
      >
        {/* Section Header */}
        <motion.div variants={fadeUp} className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#F2A65A] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#4FD1C5]" />
            <span>04 // Career Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F6F3EE] tracking-tight">
            Professional trajectory & SDE history.
          </h2>
        </motion.div>

        {/* Vertical Animated Timeline */}
        <div ref={containerRef} className="relative pl-6 sm:pl-8 space-y-12">
          {/* Timeline Vertical Background Track */}
          <div className="absolute left-2.5 sm:left-3.5 top-3 bottom-3 w-[2px] bg-[#342D45]" />

          {/* Timeline Drawing Line */}
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-2.5 sm:left-3.5 top-3 bottom-3 w-[2px] bg-gradient-to-b from-[#F2A65A] to-[#4FD1C5]"
          />

          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              variants={fadeUp}
              className="relative group"
            >
              {/* Timeline Animated Node Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="absolute -left-6 sm:-left-8 top-1.5 w-6 h-6 rounded-full bg-[#1A1725] border-2 border-[#4FD1C5] flex items-center justify-center shadow-lg group-hover:bg-[#F2A65A] transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-[#F2A65A] group-hover:bg-[#1A1725] transition-colors" />
              </motion.div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#272138]/80 border border-[#342D45] backdrop-blur-sm space-y-4 hover:border-[#4FD1C5]/40 transition-all shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#342D45] pb-4">
                  <div>
                    <span className="inline-block px-3 py-0.5 rounded-full text-[11px] font-semibold bg-[#4FD1C5]/15 text-[#4FD1C5] border border-[#4FD1C5]/30 mb-2">
                      {exp.type}
                    </span>
                    <h3 className="text-xl font-bold text-[#F6F3EE] tracking-tight">
                      {exp.role}
                    </h3>
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F2A65A] hover:underline transition-colors mt-0.5"
                    >
                      <span>{exp.company}</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs text-[#B3ABCF] space-y-1">
                    <div className="flex items-center gap-1.5 font-medium text-[#F6F3EE]">
                      <Calendar size={14} className="text-[#4FD1C5]" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bullets List */}
                <ul className="space-y-2.5 text-sm text-[#B3ABCF] font-normal leading-relaxed">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <span className="text-[#F2A65A] font-bold mt-1 text-xs">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
