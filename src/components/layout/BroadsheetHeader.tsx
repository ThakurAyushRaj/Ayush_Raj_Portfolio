import { useEffect, useState } from "react";
import { personalInfo } from "@/lib/data";
import { Download, Search, Clock, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import TextScramble from "@/components/ui/TextScramble";
import InkDrawUnderline from "@/components/ui/InkDrawUnderline";
import Magnetic from "@/components/ui/Magnetic";
import PressSeal from "@/components/ui/PressSeal";
import { audioHaptic } from "@/components/ui/AudioHaptic";

interface BroadsheetHeaderProps {
  onOpenCommandPalette?: () => void;
}

export default function BroadsheetHeader({ onOpenCommandPalette }: BroadsheetHeaderProps) {
  const [timeStr, setTimeStr] = useState<string>("");
  const [soundActive, setSoundActive] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleToggleSound = () => {
    const active = audioHaptic.toggleSound();
    setSoundActive(active);
  };

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full bg-[#f4f1ea] border-b-2 border-[#181410] text-[#181410] select-none">
      {/* ─── 0. RUNNING MARQUEE INFORMATION TICKER BANNER ─── */}
      <div className="bg-[#181410] text-[#c5a059] text-[11px] font-serif uppercase tracking-[0.25em] py-1.5 overflow-hidden border-b border-[#c5a059]/40 flex items-center relative">
        <div className="whitespace-nowrap flex gap-8 animate-[marquee_26s_linear_infinite]">
          <span>✦ SDE PRACTICE AT ANQUEST MEDIA</span>
          <span>•</span>
          <span>FULL-STACK MERN / MEAN &amp; MOBILE SYSTEMS ARCHITECTURE</span>
          <span>•</span>
          <span>ACCEPTING SELECT COMMISSIONS</span>
          <span>•</span>
          <span>✦ SDE PRACTICE AT ANQUEST MEDIA</span>
          <span>•</span>
          <span>FULL-STACK MERN / MEAN &amp; MOBILE SYSTEMS ARCHITECTURE</span>
          <span>•</span>
          <span>ACCEPTING SELECT COMMISSIONS</span>
          <span>•</span>
        </div>
      </div>

      {/* ─── 1. MINIMAL TOP EDITION BAR ─── */}
      <div className="border-b border-[#181410] py-2 px-4 sm:px-8 flex items-center justify-between text-xs font-serif uppercase tracking-[0.2em] text-[#181410]">
        <div className="flex items-center gap-2 font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          <TextScramble text="SOFTWARE DEVELOPMENT ENGINEER" />
        </div>

        <div className="flex items-center gap-5 text-[11px] font-semibold">
          <span className="hidden sm:inline">GREATER NOIDA, INDIA</span>

          {/* Sound Toggle */}
          <motion.button
            whileHover={{ scale: 0.94 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleToggleSound}
            data-cursor-label="AUDIO"
            className="px-2 py-0.5 border border-[#181410] bg-[#181410]/5 hover:bg-[#181410] hover:text-[#f4f1ea] transition-all flex items-center gap-1.5 font-bold cursor-pointer"
            title="Toggle Mechanical Typewriter Sound"
          >
            {soundActive ? <Volume2 size={11} className="text-[#c5a059]" /> : <VolumeX size={11} />}
            <span>AUDIO: {soundActive ? "ON" : "OFF"}</span>
          </motion.button>

          {timeStr && (
            <span className="hidden md:inline-flex items-center gap-1 text-[#c5a059] bg-[#181410] px-2 py-0.5 font-bold">
              <Clock size={10} />
              {timeStr}
            </span>
          )}
        </div>
      </div>

      {/* ─── 2. ELEGANT SPACIOUS MASTHEAD NAMEPLATE WITH INK DRAW UNDERLINE ─── */}
      <div className="py-7 sm:py-10 px-4 text-center relative flex items-center justify-center border-b border-[#181410]">
        {/* Press Seal Emblem Logo on Top Left */}
        <div className="hidden lg:block absolute left-8 xl:left-14 top-1/2 -translate-y-1/2 z-20">
          <PressSeal />
        </div>

        <motion.a
          whileHover={{ scale: 0.98 }}
          href="#hero"
          className="inline-block group"
          data-cursor-label="MASTHEAD"
        >
          <h1 className="font-radley font-bold text-5xl sm:text-7xl lg:text-[92px] tracking-[0.05em] uppercase text-[#181410] leading-none">
            <InkDrawUnderline color="#c5a059">
              <TextScramble text={personalInfo.name} as="span" />
            </InkDrawUnderline>
          </h1>
          <div className="text-xs font-serif uppercase tracking-[0.28em] text-[#181410] font-bold mt-4">
            <TextScramble text="FULL-STACK SDE • MERN & MOBILE SYSTEMS" />
          </div>
        </motion.a>
      </div>

      {/* ─── 3. UNCLUTTERED NAVIGATION & ACTION ROW ─── */}
      <nav className="py-3 px-4 sm:px-8 flex flex-wrap items-center justify-between gap-4 text-xs font-serif uppercase tracking-[0.2em] text-[#181410] font-bold">
        <div className="flex flex-wrap items-center gap-6 sm:gap-8 mx-auto sm:mx-0">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              whileHover={{ scale: 0.94 }}
              href={link.href}
              data-cursor-label="NAV"
              onClick={() => audioHaptic.playClick()}
              className="hover:underline underline-offset-4 decoration-1 decoration-[#181410] hover:text-[#c5a059] transition-all cursor-pointer"
            >
              <TextScramble text={link.name} />
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-3 mx-auto sm:mx-0">
          {onOpenCommandPalette && (
            <Magnetic strength={0.3}>
              <motion.button
                whileHover={{ scale: 0.94 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  audioHaptic.playClick();
                  onOpenCommandPalette();
                }}
                data-cursor-label="SEARCH"
                className="px-3 py-1.5 bg-[#181410]/5 border border-[#181410] hover:bg-[#181410] hover:text-[#f4f1ea] transition-all flex items-center gap-1.5 text-[11px] font-bold cursor-pointer shadow-sm"
                title="Open Command Palette (Ctrl+K)"
              >
                <Search size={12} />
                <span>SEARCH</span>
                <kbd className="px-1 text-[9px] bg-[#181410]/10 border border-[#181410]/40 rounded font-mono">⌘K</kbd>
              </motion.button>
            </Magnetic>
          )}

          <Magnetic strength={0.35}>
            <motion.a
              whileHover={{ scale: 0.94 }}
              whileTap={{ scale: 0.9 }}
              href={personalInfo.resume}
              download="Ayush_Raj_CV.docx"
              data-cursor-label="CV (.DOCX)"
              onClick={() => audioHaptic.playClick()}
              className="px-3.5 py-1.5 bg-[#181410] text-[#f4f1ea] hover:bg-[#c5a059] hover:text-[#181410] transition-all inline-flex items-center gap-1.5 font-bold border border-[#181410] cursor-pointer shadow-md text-[11px]"
              title="Download Ayush Raj CV (.docx)"
            >
              <Download size={13} />
              <span>DOWNLOAD CV</span>
            </motion.a>
          </Magnetic>
        </div>
      </nav>
    </header>
  );
}
