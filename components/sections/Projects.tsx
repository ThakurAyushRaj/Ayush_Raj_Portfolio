"use client";

import { useState } from "react";
import { projects, CaseFile } from "@/lib/data";

export default function Projects() {
  const [activeModal, setActiveModal] = useState<CaseFile | null>(null);

  return (
    <section id="work" className="py-20 px-4 md:px-12 border-b border-[#2A2A38] bg-[#09090D] font-mono">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#2A2A38] pb-6">
          <div>
            <div className="text-xs text-[#E4002B] tracking-widest uppercase mb-1">// EXHIBIT CATALOGUE [{projects.length.toString().padStart(2, '0')}]</div>
            <h2 className="font-syne font-extrabold text-3xl md:text-5xl uppercase tracking-tight text-white">
              SELECTED WORKS & ARCHIVES
            </h2>
          </div>
          <div className="text-xs text-[#A0A0B0] max-w-xs">
            [ FILTER: ALL PRODUCTION APPS ] // CLICK CARD TO LOAD EXHIBIT DATA
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <article
              key={proj.id}
              onClick={() => setActiveModal(proj)}
              className="hud-box img-glitch-container group cursor-pointer p-4 flex flex-col justify-between space-y-4"
            >
              <div className="relative aspect-video bg-[#070709] overflow-hidden border border-[#2A2A38]">
                <img
                  src={proj.imagePlaceholder}
                  alt={proj.title}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute top-2 left-2 bg-[#070709]/90 text-[#E4002B] text-[10px] px-2 py-0.5 border border-[#E4002B]/40">
                  [PRJ_{proj.id.toString().padStart(2, '0')} // {proj.client.toUpperCase()}]
                </div>
                <div className="absolute bottom-2 right-2 bg-[#070709]/90 text-[#00FF66] text-[10px] px-2 py-0.5 border border-[#00FF66]/40">
                  {proj.status.toUpperCase()}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-syne font-bold text-xl text-white group-hover:text-[#E4002B] transition-colors flex items-center justify-between">
                  <span>{proj.title.toUpperCase()}</span>
                  <span className="text-xs text-[#A0A0B0]">©2026</span>
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2">
                  {proj.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#2A2A38]/60 text-[10px] text-[#A0A0B0]">
                {proj.tech.map((t, idx) => (
                  <span key={idx} className="bg-[#1F1F28] px-2 py-0.5 border border-[#2A2A38]">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* EXHIBIT MODAL / DRAWER */}
      {activeModal && (
        <div className="fixed inset-0 bg-[#070709]/95 z-[300] flex items-center justify-center p-4 backdrop-blur-md">
          <div className="hud-box max-w-2xl w-full p-6 md:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-[#2A2A38] pb-3">
              <div className="text-xs text-[#E4002B] tracking-widest">// EXHIBIT DETAIL DUMP</div>
              <button onClick={() => setActiveModal(null)} className="text-xs text-[#A0A0B0] hover:text-white uppercase">[ CLOSE ESC ]</button>
            </div>

            <div className="space-y-2">
              <h3 className="font-syne font-extrabold text-2xl md:text-3xl text-white">{activeModal.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{activeModal.description}</p>
            </div>

            <div className="space-y-2">
              <div className="text-xs text-[#A0A0B0]">// TECH STACK</div>
              <div className="flex flex-wrap gap-2 text-xs">
                {activeModal.tech.map((t, idx) => (
                  <span key={idx} className="bg-[#1F1F28] px-3 py-1 border border-[#2A2A38] text-white">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#2A2A38] flex justify-between items-center">
              <a
                href={activeModal.github}
                target="_blank"
                rel="noreferrer"
                className="hud-box px-6 py-2.5 text-xs font-mono uppercase text-white hover:bg-[#E4002B] transition-all"
              >
                [ OPEN GITHUB REPOSITORY → ]
              </a>
              <button onClick={() => setActiveModal(null)} className="text-xs text-slate-400 hover:text-white">
                [ RETURN TO ARCHIVE ]
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
