"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#342D45]/60">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="space-y-12"
      >
        {/* Section Header */}
        <motion.div variants={fadeUp} className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#4FD1C5] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#F2A65A]" />
            <span>05 // Education & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F6F3EE] tracking-tight">
            Academic qualifications & foundation.
          </h2>
        </motion.div>

        {/* Education List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((item, idx) => {
            const isWarm = idx % 2 === 0;
            return (
              <motion.div
                key={item.id}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-[#272138]/80 border border-[#342D45] backdrop-blur-sm space-y-4 flex flex-col justify-between hover:border-[#4FD1C5]/40 transition-all shadow-lg"
              >
                <div className="space-y-3">
                  <div className={`p-2.5 rounded-xl w-fit ${isWarm ? "bg-[#F2A65A]/15 text-[#F2A65A]" : "bg-[#4FD1C5]/15 text-[#4FD1C5]"}`}>
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#F6F3EE] tracking-tight">
                      {item.degree}
                    </h3>
                    <p className="text-xs font-semibold text-[#B3ABCF] mt-1">
                      {item.institution}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#342D45] flex items-center justify-between text-xs font-medium text-[#B3ABCF]">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#F2A65A]" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={13} />
                    <span>{item.location}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
