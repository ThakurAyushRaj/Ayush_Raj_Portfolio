import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Play, Check, Copy, Sparkles, RefreshCw } from "lucide-react";

interface CommandOption {
  cmd: string;
  label: string;
  output: string[];
}

export default function LiveTerminal() {
  const commands: CommandOption[] = [
    {
      cmd: "ayush --status",
      label: "STATUS",
      output: [
        "✔ ROLE: Software Development Engineer @ aNquest Media",
        "✔ LOCATION: Greater Noida / Patna / New Delhi",
        "✔ STATUS: Active SDE Practice & Production Builds",
        "✔ AVAILABILITY: Accepting Select Commissions",
      ],
    },
    {
      cmd: "ayush --stack",
      label: "CORE STACK",
      output: [
        "★ FRONTEND: React.js, TypeScript, Next.js, Tailwind CSS",
        "★ BACKEND:  Node.js, Express.js, Microservices, REST APIs",
        "★ DATABASE: MongoDB, MySQL, Mongoose, Data Schemas",
        "★ MOBILE:   React Native, Flutter, Dart, Firebase FCM",
        "★ DEVOPS:   AWS (Amplify, S3, Lambda), Vercel, Docker",
      ],
    },
    {
      cmd: "ayush --systems",
      label: "LIVE SYSTEMS",
      output: [
        "► Real Estate CRM Engine (High-throughput lead flows)",
        "► Healthcare EMR Platform (Patient records & clinical workflows)",
        "► Enterprise ERP Platform (Finance, HR & Inventory consolidated)",
        "► Slack Attendance Automation Bot (Google Workspace OAuth)",
      ],
    },
    {
      cmd: "ayush --metrics",
      label: "METRICS",
      output: [
        "[+] Experience: 4+ Years Full-Stack Engineering",
        "[+] Apps Shipped: 10+ Live Production & Mobile Systems",
        "[+] System Uptime: 99.9% Microservice Reliability",
        "[+] Code Quality: 100% Type-Safe TypeScript Architecture",
      ],
    },
  ];

  const [activeCmd, setActiveCmd] = useState<CommandOption>(commands[0]);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(activeCmd.output.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-[#090807] font-mono text-xs text-white overflow-hidden select-none">
      {/* Terminal Title Bar */}
      <div className="bg-[#181410] border-b border-white/30 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-stone-300 inline-block" />
            <span className="w-3 h-3 rounded-full bg-stone-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-stone-700 inline-block" />
          </div>
          <span className="text-[11px] font-bold text-white uppercase tracking-widest pl-2 flex items-center gap-1.5">
            <Terminal size={13} className="text-white" />
            <span>AYUSH_RAJ_SDE_SHELL_v4.7.sh</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="px-2.5 py-1 bg-black border border-white/60 hover:bg-white hover:text-black text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 transition-all cursor-pointer"
          >
            {copied ? <Check size={12} className="text-white" /> : <Copy size={12} />}
            <span>{copied ? "COPIED" : "COPY OUTPUT"}</span>
          </button>
        </div>
      </div>

      {/* Terminal Command Selector Pills (High Contrast Black & White) */}
      <div className="p-3 bg-black border-b border-white/20 flex flex-wrap gap-2">
        {commands.map((c) => (
          <button
            key={c.cmd}
            onClick={() => setActiveCmd(c)}
            className={`px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer border ${
              activeCmd.cmd === c.cmd
                ? "bg-white text-black border-white shadow-[0_0_12px_rgba(255,255,255,0.5)] font-black"
                : "bg-black text-stone-300 border-white/40 hover:border-white hover:text-white"
            }`}
          >
            <Play size={10} className={activeCmd.cmd === c.cmd ? "fill-black" : "fill-white"} />
            <span>{c.label}</span>
          </button>
        ))}
      </div>

      {/* Terminal Output Window */}
      <div className="p-6 space-y-4 min-h-[220px] bg-black font-mono text-xs">
        <div className="flex items-center gap-2 text-white font-bold">
          <span className="text-stone-300">guest@ayush-raj-sde:~$</span>
          <span className="text-white underline font-mono">{activeCmd.cmd}</span>
          <span className="w-2 h-4 bg-white animate-pulse inline-block" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCmd.cmd}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-2 pt-1 border-t border-white/20"
          >
            {activeCmd.output.map((line, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15, delay: idx * 0.05 }}
                className="text-white font-medium leading-relaxed flex items-start gap-2"
              >
                <span className="text-white select-none">▸</span>
                <span>{line}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Terminal Status Bar */}
      <div className="bg-[#181410] border-t border-white/30 px-4 py-2 flex items-center justify-between text-[10px] text-stone-300 uppercase font-bold">
        <div className="flex items-center gap-2">
          <Sparkles size={11} className="text-white" />
          <span>INTERACTIVE CYBER-EDITORIAL COMMAND SHELL</span>
        </div>
        <div className="flex items-center gap-1 text-white">
          <RefreshCw size={10} className="animate-spin" />
          <span>READY</span>
        </div>
      </div>
    </div>
  );
}
