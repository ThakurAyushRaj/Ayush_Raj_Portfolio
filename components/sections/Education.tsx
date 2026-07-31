"use client";

import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="bg-paper text-ink py-16 border-b-2 border-ink">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex justify-between items-center py-4 font-gothic text-xs tracking-widest uppercase text-ink-soft border-y-2 border-ink mb-12">
          <div>EDUCATION & CREDENTIALS</div>
          <div>ACADEMIC DOSSIER</div>
        </div>

        {/* List of Education items */}
        <div className="border-2 border-ink bg-paper-bright divide-y divide-ink">
          {education.map((item) => (
            <div
              key={item.id}
              className="p-6 md:p-8 hover:bg-paper-warm transition-colors duration-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            >
              <div>
                <span className="font-mono text-xs font-bold text-stamp uppercase tracking-widest block mb-1">
                  {item.period}
                </span>
                <h3 className="font-serif text-2xl font-normal text-ink">
                  {item.degree}
                </h3>
                <p className="font-serif italic text-sm text-ink-soft mt-1">
                  {item.institution} · {item.location}
                </p>
              </div>

              <span className="font-mono text-[10px] uppercase font-bold tracking-widest border border-ink px-3 py-1 bg-paper/80">
                VERIFIED CREDENTIAL
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
