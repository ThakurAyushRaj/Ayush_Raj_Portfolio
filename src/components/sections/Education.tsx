import { motion } from "framer-motion";
import { education } from "@/lib/data";
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Scroll } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { InteractiveFolder } from "@/components/ui";

export default function Education() {
  const eduFolders = [
    {
      color: "#1E40AF",
      label: "B.TECH",
      infoTitle: "Degree Credential",
      description: "Bachelor of Technology in Computer Science — IIMT College of Engineering (2021-2025)",
      infoDetails: [
        "Major — Computer Science & Engineering",
        "Key Coursework — Data Structures, DBMS, Software Engineering",
        "Institution — IIMT College of Engineering, Greater Noida"
      ],
      items: [
        <GraduationCap key="1" className="w-5 h-5 text-indigo-600" />,
        <Award key="2" className="w-5 h-5 text-amber-600" />,
        <BookOpen key="3" className="w-5 h-5 text-blue-600" />
      ]
    },
    {
      color: "#D97706",
      label: "CLASS XII",
      infoTitle: "Senior Secondary",
      description: "Class XII Senior Secondary Education — BSEB Patna (2021)",
      infoDetails: [
        "Board — Bihar School Examination Board (BSEB)",
        "Location — Patna, Bihar",
        "Specialization — Science Stream & Mathematics"
      ],
      items: [
        <Scroll key="1" className="w-5 h-5 text-amber-600" />,
        <BookOpen key="2" className="w-5 h-5 text-orange-600" />,
        <Award key="3" className="w-5 h-5 text-red-500" />
      ]
    },
    {
      color: "#0F172A",
      label: "CLASS X",
      infoTitle: "High School",
      description: "Class X Secondary School Certificate — CBSE New Delhi (2019)",
      infoDetails: [
        "Board — Central Board of Secondary Education (CBSE)",
        "Location — New Delhi",
        "Foundation — Science, Mathematics & English"
      ],
      items: [
        <Scroll key="1" className="w-5 h-5 text-slate-700" />,
        <BookOpen key="2" className="w-5 h-5 text-emerald-600" />,
        <Award key="3" className="w-5 h-5 text-sky-600" />
      ]
    }
  ];

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E2E8F0]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="space-y-12"
      >
        <motion.div variants={fadeUp} className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1E40AF] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#D97706]" />
            <span>05 // Education & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Academic qualifications & foundation.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((item, idx) => {
            const isDark = idx === 0;
            const eduFolder = eduFolders[idx % eduFolders.length];

            return (
              <motion.div
                key={item.id}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className={`p-6 rounded-2xl space-y-4 flex flex-col justify-between transition-all shadow-md relative group/card ${
                  isDark
                    ? "bg-[#0F172A] text-[#F9F6F0] border border-[#0F172A]"
                    : "bg-[#FFFFFF] text-[#0F172A] border border-[#E2E8F0] hover:border-[#0F172A]/40"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded-xl w-fit ${
                      isDark ? "bg-[#1E293B] text-[#D97706]" : "bg-[#F1F5F9] text-[#1E40AF]"
                    }`}>
                      <GraduationCap size={22} />
                    </div>

                    <div className="relative flex-shrink-0 -mr-2 -mt-2">
                      <InteractiveFolder
                        size={0.6}
                        color={eduFolder.color}
                        label={eduFolder.label}
                        infoTitle={eduFolder.infoTitle}
                        description={eduFolder.description}
                        infoDetails={eduFolder.infoDetails}
                        items={eduFolder.items}
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className={`text-lg font-bold tracking-tight ${isDark ? "text-[#F9F6F0]" : "text-[#0F172A]"}`}>
                      {item.degree}
                    </h3>
                    <p className={`text-xs font-semibold mt-1 ${isDark ? "text-[#CBD5E1]" : "text-[#475569]"}`}>
                      {item.institution}
                    </p>
                  </div>
                </div>

                <div className={`pt-3 border-t flex items-center justify-between text-xs font-medium ${
                  isDark ? "border-[#1E293B] text-[#CBD5E1]" : "border-[#E2E8F0] text-[#475569]"
                }`}>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className={isDark ? "text-[#D97706]" : "text-[#1E40AF]"} />
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
