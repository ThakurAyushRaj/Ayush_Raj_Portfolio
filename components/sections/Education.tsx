"use client";

import { education } from "@/lib/data";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 md:px-8 max-w-6xl mx-auto border-t border-[#232E42]">
      <div className="space-y-12">
        {/* Section Heading */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap size={14} />
            <span>Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Academic Background & Qualifications
          </h2>
        </div>

        {/* Education List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((item) => (
            <div key={item.id} className="clean-card p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded border border-blue-500/20">
                  <Calendar size={12} />
                  <span>{item.period}</span>
                </div>
                
                <h3 className="text-lg font-bold text-white leading-snug">
                  {item.degree}
                </h3>
                
                <p className="text-sm font-medium text-gray-300">
                  {item.institution}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-gray-400 pt-3 border-t border-[#232E42]">
                <MapPin size={14} className="text-gray-400" />
                <span>{item.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

