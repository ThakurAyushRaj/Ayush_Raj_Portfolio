"use client";

import { forensicsTable } from "@/lib/data";

export default function Skills() {
  return (
    <section id="specs" className="py-20 px-4 md:px-12 border-b border-[#2A2A38] relative font-mono">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex items-center justify-between border-b border-[#2A2A38] pb-4">
          <div>
            <div className="text-xs text-[#E4002B] tracking-widest uppercase mb-1">// TECHNICAL SPECS & HARDWARE MATRIX</div>
            <h2 className="font-syne font-extrabold text-3xl md:text-5xl uppercase tracking-tight text-white">
              SYSTEM CAPABILITIES
            </h2>
          </div>
          <div className="hidden md:block text-xs text-[#A0A0B0]">
            [SYS_MONITOR: ACTIVE] // 60.0 FPS
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* FRONTEND CORE */}
          <div className="hud-box p-6 space-y-4">
            <div className="flex justify-between items-center border-b border-[#2A2A38] pb-2">
              <h3 className="font-syne font-bold text-lg text-white">// FRONTEND ENGINE</h3>
              <span className="text-xs text-[#00F0FF]">[98% OPT]</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex justify-between"><span>React 18 / Next.js 14</span><span className="text-[#00FF66]">PRIMARY</span></li>
              <li className="flex justify-between"><span>TypeScript</span><span className="text-[#00FF66]">STRICT</span></li>
              <li className="flex justify-between"><span>Tailwind CSS v3</span><span className="text-[#00FF66]">EXPERT</span></li>
              <li className="flex justify-between"><span>GSAP & Framer Motion</span><span className="text-[#00FF66]">60 FPS</span></li>
              <li className="flex justify-between"><span>HTML5 Canvas / WebGL</span><span className="text-[#00F0FF]">ADVANCED</span></li>
            </ul>
          </div>

          {/* BACKEND CORE */}
          <div className="hud-box p-6 space-y-4">
            <div className="flex justify-between items-center border-b border-[#2A2A38] pb-2">
              <h3 className="font-syne font-bold text-lg text-white">// BACKEND PROTOCOLS</h3>
              <span className="text-xs text-[#E4002B]">[95% OPT]</span>
            </div>
            <ul class="space-y-2 text-xs text-slate-300">
              <li className="flex justify-between"><span>Node.js / Express</span><span className="text-[#00FF66]">PRIMARY</span></li>
              <li className="flex justify-between"><span>MongoDB & Mongoose</span><span className="text-[#00FF66]">ACTIVE</span></li>
              <li className="flex justify-between"><span>MySQL / PostgreSQL</span><span className="text-[#00FF66]">ACTIVE</span></li>
              <li className="flex justify-between"><span>REST APIs / Webhooks</span><span className="text-[#00FF66]">SECURE</span></li>
              <li className="flex justify-between"><span>Slack & Google APIs</span><span className="text-[#00F0FF]">INTEGRATED</span></li>
            </ul>
          </div>

          {/* MOBILE & CLOUD */}
          <div className="hud-box p-6 space-y-4">
            <div className="flex justify-between items-center border-b border-[#2A2A38] pb-2">
              <h3 className="font-syne font-bold text-lg text-white">// MOBILE & CLOUD</h3>
              <span class="text-xs text-[#00FF66]">[92% OPT]</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex justify-between"><span>React Native & Expo</span><span className="text-[#00FF66]">CROSS-PLATFORM</span></li>
              <li className="flex justify-between"><span>Flutter</span><span className="text-[#00FF66]">SECONDARY</span></li>
              <li className="flex justify-between"><span>AWS (S3 / Lambda)</span><span className="text-[#00F0FF]">DEPLOYED</span></li>
              <li className="flex justify-between"><span>Firebase & FCM</span><span className="text-[#00FF66]">REALTIME</span></li>
              <li className="flex justify-between"><span>Vercel / CI/CD</span><span className="text-[#00FF66]">AUTOMATED</span></li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
