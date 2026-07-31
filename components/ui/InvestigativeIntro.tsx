"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InvestigativeIntro() {
  const [isVisible, setIsVisible] = useState(true);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);

  useEffect(() => {
    // Check if intro was already seen in session
    if (sessionStorage.getItem("intro_seen") === "true") {
      setIsVisible(false);
      return;
    }

    setPos({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    const handleMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;
      if ("touches" in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ("clientX" in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      }
      setPos({ x: clientX, y: clientY });
      setHasMoved(true);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };
  }, []);

  const dismiss = () => {
    sessionStorage.setItem("intro_seen", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          className="fixed inset-0 z-[100] bg-[#1A1918] text-[#F5F2EB] select-none overflow-hidden"
        >
          {/* Background obscure layer */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-20">
            <h1 className="font-serif text-6xl md:text-9xl tracking-tight text-center">
              AYUSH RAJ
            </h1>
            <p className="font-mono text-xs uppercase tracking-[0.3em] mt-4">
              THE INVESTIGATION EDITION · VOL. III
            </p>
          </div>

          {/* Spotlight Lens Layer */}
          <div
            className="absolute inset-0 pointer-events-none transition-all duration-75"
            style={{
              clipPath: `circle(140px at ${pos.x}px ${pos.y}px)`,
              background: "#F5F2EB",
              color: "#1A1918",
            }}
          >
            <div className="w-full h-full flex flex-col items-center justify-center relative p-6">
              {/* Central Visual revealed inside Lens */}
              <div className="w-64 h-64 md:w-80 md:h-80 border-4 border-[#1A1918] p-2 bg-[#EFECE6] shadow-xl flex items-center justify-center">
                <img
                  src="/api/profile-photo"
                  alt="Subject Under Investigation"
                  className="w-full h-full object-cover grayscale contrast-125"
                />
              </div>

              <span className="font-mono text-xs font-bold tracking-widest uppercase bg-[#1A1918] text-[#F5F2EB] px-3 py-1 mt-4">
                SUBJECT IDENTIFIED: AYUSH RAJ
              </span>
            </div>
          </div>

          {/* Interactive Instruction Banner */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center pointer-events-none">
            <span className="font-mono text-xs uppercase tracking-widest px-4 py-2 border border-[#F5F2EB]/30 bg-[#1A1918]/80 text-[#F5F2EB]">
              {hasMoved ? "lens focused — subject detected" : "drag the glass — find the subject"}
            </span>
          </div>

          {/* Skip Intro Floating CTA Button */}
          <button
            onClick={dismiss}
            className="absolute top-8 right-8 font-mono text-xs font-bold uppercase tracking-widest px-5 py-2.5 bg-[#F5F2EB] text-[#1A1918] hover:bg-[#A8382A] hover:text-[#F5F2EB] transition-colors shadow-lg z-[110]"
          >
            Skip intro →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
