"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-b-4 border-white/20 swiss-grid-pattern">
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
            <span className="text-[#FF3000] font-black text-sm">02.</span>
            <span className="text-xs font-black uppercase tracking-widest text-white">
              CAREER CHRONOLOGY // KNOWN WHEREABOUTS
            </span>
          </div>
          <span className="text-xs font-black uppercase tracking-widest text-white/60">
            EMPLOYMENT RECORD
          </span>
        </motion.div>

        {/* Section Title */}
        <motion.h2 variants={fadeUp} className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-tight">
          PROFESSIONAL CAREER & DEVELOPMENT IMPACT.
        </motion.h2>

        {/* Experience Timeline Cards */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={fadeUp}
              className="swiss-card p-6 sm:p-10 space-y-6 text-white"
            >
              {/* Header block */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-white/20 pb-6">
                <div className="space-y-1">
                  <div className="inline-block bg-white text-black px-2.5 py-0.5 text-[10px] font-black tracking-widest uppercase mb-1">
                    RECORD NO. 0{exp.id} // {exp.type.toUpperCase()}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-base font-black text-[#FF3000] hover:underline uppercase tracking-wider"
                  >
                    <span>{exp.company}</span>
                    <ExternalLink size={14} />
                  </a>
                </div>

                <div className="flex flex-col md:items-end text-xs font-black text-white space-y-1 uppercase tracking-wider">
                  <div className="flex items-center gap-1.5 bg-black/60 px-3 py-1 border border-white/30">
                    <Calendar size={14} className="text-[#FF3000]" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/70 pt-1">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Achievements Bullets */}
              <ul className="space-y-3 text-white/90 text-sm sm:text-base font-medium leading-relaxed font-sans">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#FF3000] font-black text-base shrink-0 mt-0.5">■</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}




