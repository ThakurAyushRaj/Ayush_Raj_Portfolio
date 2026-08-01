"use client";

import { useState, FormEvent } from "react";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-12 bg-[#050508] font-mono">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <div className="border-b border-[#2A2A38] pb-4">
          <div className="text-xs text-[#E4002B] tracking-widest uppercase mb-1">// TRANSMIT SIGNAL</div>
          <h2 className="font-syne font-extrabold text-3xl md:text-5xl uppercase tracking-tight text-white">
            INITIATE CONTACT PROTOCOL
          </h2>
        </div>

        {/* Terminal Form Box */}
        <div className="hud-box p-6 md:p-8 space-y-6">
          <div className="flex justify-between items-center border-b border-[#2A2A38] pb-3 text-xs text-[#A0A0B0]">
            <span>CONSOLE: user@cyber-terminal:~$ send-transmission</span>
            <span className="text-[#E4002B]">[STATUS: WAITING_INPUT]</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="space-y-1">
              <label className="text-slate-300 block uppercase tracking-wider">// 01. YOUR NAME OR CALLSIGN</label>
              <input type="text" required placeholder="[E.G. COMMANDER / RECRUITER]" className="w-full bg-[#070709] border border-[#2A2A38] px-4 py-3 text-white focus:outline-none focus:border-[#E4002B] transition-colors" />
            </div>

            <div className="space-y-1">
              <label className="text-slate-300 block uppercase tracking-wider">// 02. DIRECT EMAIL ADDRESS</label>
              <input type="email" required placeholder="[NAME@DOMAIN.COM]" className="w-full bg-[#070709] border border-[#2A2A38] px-4 py-3 text-white focus:outline-none focus:border-[#E4002B] transition-colors" />
            </div>

            <div className="space-y-1">
              <label className="text-slate-300 block uppercase tracking-wider">// 03. TRANSMISSION MESSAGE DATA</label>
              <textarea rows={4} required placeholder="[ENTER PROJECT DETAILS OR INQUIRY DATA...]" className="w-full bg-[#070709] border border-[#2A2A38] px-4 py-3 text-white focus:outline-none focus:border-[#E4002B] transition-colors"></textarea>
            </div>

            <button type="submit" className="w-full hud-box py-4 text-xs uppercase font-bold tracking-widest text-white hover:bg-[#E4002B] transition-all border border-[#E4002B]/50 hover:border-[#E4002B]">
              [ TRANSMIT SIGNAL → ]
            </button>
          </form>

          {submitted && (
            <div className="p-4 border border-[#00FF66] bg-[#00FF66]/10 text-[#00FF66] text-xs">
              [✓] TRANSMISSION SENT SUCCESSFULLY. ACKNOWLEDGEMENT RECEIVED. EXPECT RESPONSE WITHIN 24 HOURS.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
