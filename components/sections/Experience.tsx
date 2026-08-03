"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { Briefcase, Calendar, MapPin, ExternalLink, CheckCircle2 } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 md:px-8 max-w-6xl mx-auto border-t border-[#232E42]">
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
            <Briefcase size={14} />
            <span>Work Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Professional Career & Development Impact
          </h2>
        </motion.div>

        {/* Experience Timeline Cards */}
        <div className="space-y-6">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="clean-card p-6 sm:p-8 space-y-6"
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#232E42] pb-6">
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-2">
                    {exp.type}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {exp.role}
                  </h3>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-base font-semibold text-blue-400 hover:text-blue-300 transition-colors mt-1"
                  >
                    <span>{exp.company}</span>
                    <ExternalLink size={14} />
                  </a>
                </div>

                <div className="flex flex-col sm:items-end text-sm text-gray-400 space-y-1">
                  <div className="flex items-center gap-1.5 font-medium text-gray-300">
                    <Calendar size={14} className="text-blue-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs">
                    <MapPin size={14} className="text-gray-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Achievements Bullets */}
              <ul className="space-y-3 text-gray-300 text-sm sm:text-base leading-relaxed">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-blue-400 shrink-0 mt-0.5" />
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


