"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";
import { Calendar, MapPin, GraduationCap, Award, FileText, CheckCircle2 } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { InteractiveFolder } from "@/components/ui/InteractiveFolder";

export default function Education() {
  const getFolderItems = (item: typeof education[0]) => {
    return [
      <div key="1" className="flex flex-col items-center justify-center text-center p-1 text-black">
        <GraduationCap className="w-5 h-5 text-[#FF3000]" />
        <span className="text-[8px] font-black uppercase mt-0.5">{item.degree.split(' ')[0]}</span>
      </div>,
      <div key="2" className="flex flex-col items-center justify-center text-center p-1 text-black">
        <Award className="w-5 h-5 text-black" />
        <span className="text-[8px] font-black uppercase mt-0.5">8.0 CGPA</span>
      </div>,
      <div key="3" className="flex flex-col items-center justify-center text-center p-1 text-black">
        <FileText className="w-5 h-5 text-[#FF3000]" />
        <span className="text-[8px] font-black uppercase mt-0.5">VERIFIED</span>
      </div>
    ];
  };

  const folderColors = ["#FF3000", "#000000", "#FF3000"];

  return (
    <section id="education" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-b-4 border-black swiss-grid-pattern">
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
            <span className="text-[#FF3000] font-black text-sm">05.</span>
            <span className="text-xs font-black uppercase tracking-widest text-black">
              ACADEMIC CREDENTIALS // EDUCATION DOSSIER
            </span>
          </div>
          <span className="text-xs font-black uppercase tracking-widest text-black/60">
            VERIFIED QUALIFICATIONS
          </span>
        </motion.div>

        {/* Section Title */}
        <motion.h2 variants={fadeUp} className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-black tracking-tight leading-tight max-w-4xl">
          ACADEMIC BACKGROUND & QUALIFICATIONS.
        </motion.h2>

        {/* Education List with Interactive Folder Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {education.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              className="swiss-card p-6 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4 font-sans">
                {/* Interactive Folder Preview Container */}
                <div className="bg-[#F2F2F2] border-2 border-black p-6 flex flex-col items-center justify-center relative min-h-[140px] swiss-dots">
                  <div className="absolute top-2 left-2 text-[9px] font-black uppercase tracking-widest text-black/60">
                    DOSSIER NO. 0{idx + 1}
                  </div>
                  <InteractiveFolder
                    size={1.15}
                    color={folderColors[idx % folderColors.length]}
                    label={`DOSSIER 0${idx + 1}`}
                    items={getFolderItems(item)}
                  />
                  <div className="text-[10px] font-black uppercase tracking-widest text-black/70 mt-3">
                    [ CLICK TO OPEN DOSSIER ]
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="inline-flex items-center gap-1.5 text-xs font-black text-white bg-[#FF3000] px-2.5 py-1 uppercase tracking-widest border border-black">
                    <Calendar size={12} />
                    <span>{item.period}</span>
                  </div>
                  
                  <h3 className="text-xl font-black text-black uppercase leading-tight">
                    {item.degree}
                  </h3>
                  
                  <p className="text-xs font-bold text-black/70 uppercase">
                    {item.institution}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-black uppercase text-black pt-3 border-t-2 border-black">
                <div className="flex items-center gap-1">
                  <MapPin size={12} className="text-[#FF3000]" />
                  <span>{item.location}</span>
                </div>
                <span className="text-[10px] bg-black text-white px-2 py-0.5 tracking-widest flex items-center gap-1">
                  <CheckCircle2 size={10} className="text-[#FF3000]" />
                  VERIFIED
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}




