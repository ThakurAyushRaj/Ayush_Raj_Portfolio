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
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E2E8F0]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="space-y-12"
      >
        <motion.div variants={fadeUp} className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#D97706] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#0F172A]" />
            <span>04 // Career Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Professional trajectory & SDE history.
          </h2>
        </motion.div>

        <div ref={containerRef} className="relative pl-6 sm:pl-8 space-y-12">
          <div className="absolute left-2.5 sm:left-3.5 top-3 bottom-3 w-[2px] bg-[#CBD5E1]" />

          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-2.5 sm:left-3.5 top-3 bottom-3 w-[2px] bg-[#0F172A]"
          />

          {experiences.map((exp, idx) => {
            const isDark = idx === 0;
            return (
              <motion.div
                key={exp.id}
                variants={fadeUp}
                className="relative group"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className={`absolute -left-6 sm:-left-8 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center shadow-md transition-colors ${
                    isDark ? "bg-[#0F172A] border-[#0F172A]" : "bg-[#FFFFFF] border-[#0F172A]"
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${isDark ? "bg-[#D97706]" : "bg-[#1E40AF]"}`} />
                </motion.div>

                <div className={`p-6 sm:p-8 rounded-2xl space-y-4 shadow-md transition-all ${
                  isDark
                    ? "bg-[#0F172A] text-[#F9F6F0] border border-[#0F172A]"
                    : "bg-[#FFFFFF] text-[#0F172A] border border-[#E2E8F0] hover:border-[#0F172A]/40"
                }`}>
                  <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-4 ${isDark ? "border-[#1E293B]" : "border-[#E2E8F0]"}`}>
                    <div>
                      <span className={`inline-block px-3 py-0.5 rounded-full text-[11px] font-semibold border mb-2 ${
                        isDark
                          ? "bg-[#1E293B] text-[#D97706] border-[#334155]"
                          : "bg-[#F1F5F9] text-[#1E40AF] border-[#E2E8F0]"
                      }`}>
                        {exp.type}
                      </span>
                      <h3 className={`text-xl font-bold tracking-tight ${isDark ? "text-[#F9F6F0]" : "text-[#0F172A]"}`}>
                        {exp.role}
                      </h3>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 text-sm font-semibold hover:underline transition-colors mt-0.5 ${
                          isDark ? "text-[#D97706]" : "text-[#1E40AF]"
                        }`}
                      >
                        <span>{exp.company}</span>
                        <ExternalLink size={13} />
                      </a>
                    </div>

                    <div className={`flex flex-col sm:items-end text-xs space-y-1 ${isDark ? "text-[#CBD5E1]" : "text-[#475569]"}`}>
                      <div className={`flex items-center gap-1.5 font-medium ${isDark ? "text-[#F9F6F0]" : "text-[#0F172A]"}`}>
                        <Calendar size={14} className={isDark ? "text-[#D97706]" : "text-[#1E40AF]"} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className={`space-y-2.5 text-sm font-normal leading-relaxed ${isDark ? "text-[#CBD5E1]" : "text-[#475569]"}`}>
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3">
                        <span className={`font-bold mt-1 text-xs ${isDark ? "text-[#D97706]" : "text-[#1E40AF]"}`}>▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
