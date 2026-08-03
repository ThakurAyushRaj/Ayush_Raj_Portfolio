"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { ArrowRight, MapPin, Mail, Briefcase, Terminal, Play } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Hero() {
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "SWISS CLI v2.6.0 [INIT VERIFIED]",
    "Type 'help' or click quick command buttons below."
  ]);

  const runCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    let response = "";
    if (cleanCmd === "help") {
      response = "AVAILABLE COMMANDS: bio | stack | projects | contact | status | clear";
    } else if (cleanCmd === "bio") {
      response = `SUBJECT: ${personalInfo.name} // ROLE: ${personalInfo.title} @ ${personalInfo.company} // EXP: 3+ Years`;
    } else if (cleanCmd === "stack") {
      response = "CORE STACK: React.js, Next.js 14, Node.js, Express, MongoDB, MySQL, React Native, Flutter, AWS";
    } else if (cleanCmd === "projects") {
      response = "SELECTED WORKS: [1] ERP Website [2] Slack Attendance Bot [3] Attendance Tracker Mobile App";
    } else if (cleanCmd === "contact") {
      response = `EMAIL: ${personalInfo.email} // TEL: ${personalInfo.phone} // LOCATION: ${personalInfo.location}`;
    } else if (cleanCmd === "status") {
      response = "SYSTEM STATUS: OPERATIONAL // 100% HEALTH // AVAILABLE FOR NEW PROJECTS";
    } else if (cleanCmd === "clear") {
      setTerminalLogs([]);
      setTerminalInput("");
      return;
    } else {
      response = `COMMAND NOT RECOGNIZED: '${cmd}'. Type 'help' for command directory.`;
    }
    setTerminalLogs((prev) => [...prev, `> ${cmd}`, response]);
    setTerminalInput("");
  };

  return (
    <section id="hero" className="border-b-4 border-white/20 swiss-grid-pattern pt-28 pb-20 md:pt-36 md:pb-28 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden relative">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
      >
        {/* Main Left Column (7 cols) */}
        <div className="lg:col-span-7 space-y-8 flex flex-col justify-between">
          <div className="space-y-6">
            {/* Top Functional Header */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-white/30 pb-4">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[#FF3000]"></span>
                <span className="text-xs font-black uppercase tracking-widest text-white">
                  SYS // FULL STACK DEVELOPMENT ARCHITECTURE
                </span>
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-white/60">
                00. INTRODUCTION
              </span>
            </motion.div>

            {/* Massive Swiss Typography Heading */}
            <motion.div variants={fadeUp} className="space-y-2">
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6rem] font-black text-white tracking-tighter uppercase leading-[0.9]">
                AYUSH RAJ
              </h1>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#FF3000] tracking-tight uppercase leading-tight">
                // FULL STACK DEVELOPER
              </h2>
            </motion.div>

            {/* Objective Narrative Text Block */}
            <motion.p variants={fadeUp} className="text-base sm:text-xl font-medium text-white/90 max-w-2xl leading-relaxed border-l-4 border-[#FF3000] pl-4 py-1">
              {personalInfo.about}
            </motion.p>
          </div>

          {/* CTAs and Direct Links */}
          <motion.div variants={fadeUp} className="space-y-6 pt-4">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="swiss-btn-primary px-8 py-4 text-xs font-black flex items-center gap-2 group"
              >
                <span>EXPLORE SELECTED WORKS [03]</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="swiss-btn-secondary px-8 py-4 text-xs font-black"
              >
                INITIATE CONTACT [06]
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs font-black tracking-wider text-white/80 pt-2 border-t-2 border-white/20">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[#FF3000]" />
                <span>{personalInfo.location.toUpperCase()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={14} className="text-[#FF3000]" />
                <span>SDE @ <a href={personalInfo.companyUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#FF3000]">{personalInfo.company.toUpperCase()}</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#FF3000]" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-[#FF3000]">
                  {personalInfo.email.toUpperCase()}
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Interactive Command Terminal Column (5 cols) */}
        <motion.div
          variants={fadeUp}
          className="lg:col-span-5 border-2 border-white/40 bg-black/90 backdrop-blur-md text-white p-6 flex flex-col justify-between font-mono relative overflow-hidden shadow-2xl"
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-white/20 pb-3 text-xs font-bold tracking-widest uppercase">
              <div className="flex items-center gap-2 text-[#FF3000]">
                <Terminal size={14} />
                <span>SWISS CLI TERMINAL // INTERACTIVE</span>
              </div>
              <span className="text-white/60">SYS 2.6</span>
            </div>

            {/* Terminal Logs Output */}
            <div className="space-y-2 h-44 overflow-y-auto text-xs font-mono pr-2 scrollbar-thin">
              {terminalLogs.map((log, idx) => (
                <div key={idx} className={log.startsWith(">") ? "text-[#FF3000] font-bold" : "text-gray-300"}>
                  {log}
                </div>
              ))}
            </div>

            {/* Quick Command Chips */}
            <div className="pt-2 border-t border-white/20 space-y-2">
              <div className="text-[10px] font-bold tracking-widest text-white/50 uppercase">PRESET COMMAND CHIPS:</div>
              <div className="flex flex-wrap gap-2">
                {["bio", "stack", "projects", "contact", "status", "clear"].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => runCommand(cmd)}
                    className="px-2 py-1 bg-white/10 hover:bg-[#FF3000] text-white text-[10px] font-bold uppercase tracking-widest border border-white/20 transition-colors"
                  >
                    &gt; {cmd}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Command Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (terminalInput) runCommand(terminalInput);
            }}
            className="pt-4 mt-4 border-t border-white/20 flex items-center gap-2"
          >
            <span className="text-[#FF3000] font-bold text-xs">&gt;</span>
            <input
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              placeholder="type 'help', 'bio', 'stack'..."
              className="flex-1 bg-transparent text-white text-xs font-mono outline-none border-b border-white/30 focus:border-[#FF3000] py-1"
            />
            <button type="submit" className="p-1 text-white hover:text-[#FF3000] transition-colors" title="Execute">
              <Play size={14} />
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}







