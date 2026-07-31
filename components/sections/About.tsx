"use client";

import { personalInfo } from "@/lib/data";
import ScrollText from "@/components/ui/ScrollText";

export default function About() {
  return (
    <section id="about" className="bg-paper text-ink py-16 border-b-2 border-ink overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex justify-between items-center py-4 font-gothic text-xs tracking-widest uppercase text-ink-soft border-y-2 border-ink mb-12">
          <div>BACKGROUND INTEL</div>
          <div>CASE FILE NO. 01</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="font-mono text-xs tracking-widest text-stamp font-bold uppercase block mb-3">
              THE SUBJECT RECORD
            </span>

            {/* Scroll-driven animated text heading */}
            <ScrollText
              text="Building software products that solve real team workflows."
              className="font-serif text-4xl sm:text-5xl font-normal leading-tight mb-6"
            />

            {/* Scroll-driven animated text paragraph */}
            <ScrollText
              text={personalInfo.about}
              as="p"
              className="font-serif text-lg leading-relaxed text-ink dropcap"
              delay={0.15}
            />
          </div>

          <div className="border-2 border-ink p-6 md:p-8 bg-paper-bright flex flex-col gap-6 shadow-sm">
            <span className="font-gothic text-xs font-bold tracking-widest uppercase text-ink-soft border-b border-ink/20 pb-3">
              CORE STACK & DEPLOYMENT CAPABILITIES
            </span>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "PRIMARY STACK", val: "MERN & MEAN Stack" },
                { label: "MOBILE FRAMS", val: "React Native & Flutter" },
                { label: "DATA LAYER", val: "MongoDB, MySQL, Postgres" },
                { label: "CLOUD INFRA", val: "AWS, Vercel, Firebase" }
              ].map((item, idx) => (
                <div key={idx} className="border border-ink/30 p-3.5 bg-paper/60 hover:bg-paper-warm transition-colors">
                  <span className="font-gothic text-[10px] tracking-widest uppercase text-ink-soft block mb-1">
                    {item.label}
                  </span>
                  <span className="font-serif font-bold text-base text-ink">{item.val}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-ink/20 pt-4">
              <span className="font-gothic text-xs font-bold tracking-widest uppercase text-ink-soft block mb-3">
                CURRENT ENGAGEMENTS
              </span>
              <p className="font-serif italic text-sm text-ink-soft">
                Developing full-stack features for aNquest Media's CRM and EMR products in Greater Noida.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
