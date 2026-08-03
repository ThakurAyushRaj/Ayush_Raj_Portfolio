import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootLogs = [
  "[0.001] SYSTEM BIOS v3.84 (C) 1989-2026 CYBERDINE SYSTEMS",
  "[0.012] INITIALIZING VIBE-CODING KERNEL...",
  "[0.038] LOADING RETRO-ANIME GRAPHICS MATRIX... OK",
  "[0.065] CHROMATIC DISSOLVE ENGINE ACTIVE...",
  "[0.092] VERIFYING SUBJECT: SERGIO AYALA // AYUSH RAJ",
  "[0.120] SYSTEM BOOT COMPLETE. ACCESS GRANTED [100%]"
];

export default function InvestigativeIntro() {
  const [isVisible, setIsVisible] = useState(true);
  const [percent, setPercent] = useState(0);
  const [logs, setLogs] = useState<string[]>([bootLogs[0]]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem("intro_seen") === "true") {
      setIsVisible(false);
      return;
    }

    document.body.style.overflow = "hidden";

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 14) + 6;
      if (currentProgress > 100) currentProgress = 100;

      setPercent(currentProgress);

      if (currentProgress > 20 && bootLogs[1]) {
        setLogs(prev => prev.includes(bootLogs[1]) ? prev : [...prev, bootLogs[1]]);
      }
      if (currentProgress > 45 && bootLogs[2]) {
        setLogs(prev => prev.includes(bootLogs[2]) ? prev : [...prev, bootLogs[2]]);
      }
      if (currentProgress > 70 && bootLogs[4]) {
        setLogs(prev => prev.includes(bootLogs[4]) ? prev : [...prev, bootLogs[4]]);
      }
      if (currentProgress >= 100) {
        setLogs(prev => prev.includes(bootLogs[5]) ? prev : [...prev, bootLogs[5]]);
        clearInterval(interval);
        setTimeout(dismiss, 500);
      }
    }, 85);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  const triggerGlitchCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let frames = 0;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < 20; i++) {
        ctx.fillStyle = Math.random() > 0.5 ? "rgba(228, 0, 43, 0.3)" : "rgba(0, 240, 255, 0.3)";
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const w = Math.random() * 400 + 50;
        const h = Math.random() * 12 + 2;
        ctx.fillRect(x, y, w, h);
      }
      frames++;
      if (frames < 14) {
        requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };
    render();
  };

  const dismiss = () => {
    triggerGlitchCanvas();
    sessionStorage.setItem("intro_seen", "true");
    document.body.style.overflow = "";
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[250]" />
          
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 bg-[#050507] text-white z-[200] flex flex-col items-center justify-center p-6 select-none font-mono"
          >
            <div className="w-full max-w-xl bg-[#0E0E12]/90 border border-[#2A2A38] p-6 md:p-8 flex flex-col justify-between min-h-[320px] shadow-[0_0_50px_rgba(228,0,43,0.15)] relative">
              <div className="absolute top-[-1px] left-[-1px] w-2.5 h-2.5 border-t-2 border-l-2 border-[#E4002B]"></div>
              <div className="absolute bottom-[-1px] right-[-1px] w-2.5 h-2.5 border-b-2 border-r-2 border-[#E4002B]"></div>

              <div className="flex items-center justify-between border-b border-[#2A2A38] pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E4002B] animate-pulse"></span>
                  <span className="text-xs tracking-widest text-[#E4002B] font-bold">CYBERDINE VIBE-BOOT v3.84</span>
                </div>
                <span className="text-[10px] text-[#A0A0B0]">80S_ANIME_HUD</span>
              </div>

              <div className="my-6 space-y-1.5 text-xs text-slate-300 overflow-hidden max-h-[160px]">
                {logs.map((log, idx) => (
                  <div key={idx} className={idx === logs.length - 1 && percent === 100 ? "text-[#00FF66] font-bold" : "text-slate-300"}>
                    {log}
                  </div>
                ))}
              </div>

              <div className="space-y-2 border-t border-[#2A2A38] pt-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">
                    {percent === 100 ? "SYSTEM READY · ACCESS GRANTED" : "LOADING RETRO-ANIME GRAPHICS..."}
                  </span>
                  <span className="text-[#E4002B] font-bold">{percent}%</span>
                </div>
                <div className="w-full h-1.5 bg-[#1F1F28] overflow-hidden">
                  <div
                    className="h-full bg-[#E4002B] transition-all duration-75"
                    style={{ width: `${percent}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <button
              onClick={dismiss}
              className="mt-6 text-xs text-[#A0A0B0] hover:text-white tracking-widest uppercase border border-[#2A2A38] px-5 py-2.5 hover:border-[#E4002B] transition-all"
            >
              [ SKIP INITIALIZATION → ]
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
