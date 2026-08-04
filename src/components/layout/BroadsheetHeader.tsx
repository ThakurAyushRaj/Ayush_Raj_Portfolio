import { useEffect, useState } from "react";
import { personalInfo } from "@/lib/data";
import { Download, Search, Clock, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import TextScramble from "@/components/ui/TextScramble";
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
          second: "2-digit",
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
    { name: "The Work", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Letters", href: "#letters" },
    { name: "The Studio", href: "#about" },
    { name: "Chronicle", href: "#experience" },
    { name: "Commission", href: "#contact" },
  ];

  return (
    <header className="w-full bg-[#f4f1ea] border-b border-[#181410] text-[#181410] select-none">
      {/* ─── 0. TICKER MARQUEE BANNER ─── */}
      <div className="bg-[#181410] text-[#c5a059] text-[11px] font-serif uppercase tracking-[0.25em] py-1.5 overflow-hidden border-b border-[#c5a059]/40 flex items-center relative">
        <div className="whitespace-nowrap flex gap-8 animate-[marquee_28s_linear_infinite]">
          <span>✦ LATEST DISPATCH: MERN / MOBILE ARCHITECTURE PLATFORMS IN PRODUCTION</span>
          <span>•</span>
          <span>SDE PRACTICE AT ANQUEST MEDIA</span>
          <span>•</span>
          <span>ACCEPTING SELECT AUTUMN &amp; WINTER COMMISSIONS</span>
          <span>•</span>
          <span>✦ LATEST DISPATCH: MERN / MOBILE ARCHITECTURE PLATFORMS IN PRODUCTION</span>
          <span>•</span>
          <span>SDE PRACTICE AT ANQUEST MEDIA</span>
          <span>•</span>
        </div>
      </div>

      {/* ─── 1. EDITION BAR ─── */}
      <div className="border-b border-[#181410] py-2 px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-serif uppercase tracking-[0.22em] text-[#181410]">
        <div className="flex items-center gap-2 font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          <TextScramble text="INDEPENDENT DESIGN & SDE PRACTICE" />
        </div>
        <span className="text-sm font-bold opacity-80 select-none">❦</span>
        <div className="flex items-center gap-4">
          <TextScramble text="LONDON • PATNA • GREATER NOIDA" />
          
          {/* Sound Synthesizer Haptic Toggle with Zoom Out on Hover */}
          <motion.button
            whileHover={{ scale: 0.94 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleToggleSound}
            data-cursor-label="AUDIO"
            className="px-2 py-0.5 border border-[#181410] bg-[#181410]/5 hover:bg-[#181410] hover:text-[#f4f1ea] transition-all flex items-center gap-1 font-bold cursor-pointer text-[10px]"
            title="Toggle Mechanical Typewriter Audio Click"
          >
            {soundActive ? <Volume2 size={11} className="text-[#c5a059]" /> : <VolumeX size={11} />}
            <span>AUDIO: {soundActive ? "ON" : "MUTED"}</span>
          </motion.button>

          {timeStr && (
            <span className="hidden md:inline-flex items-center gap-1 text-[#c5a059] bg-[#181410] px-2 py-0.5 font-bold">
              <Clock size={10} />
              {timeStr}
            </span>
          )}
        </div>
      </div>

      {/* ─── 2. SERIF MASTHEAD NAMEPLATE WITH PRESS SEAL ON TOP LEFT ─── */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="py-6 sm:py-9 px-4 text-center broadsheet-double-rule relative flex items-center justify-center"
      >
        {/* Floating Rotating Press Seal Emblem Logo on Top Left of Main Name Heading */}
        <div className="hidden lg:block absolute left-6 xl:left-12 top-1/2 -translate-y-1/2 z-20">
          <PressSeal />
        </div>

        <motion.a
          whileHover={{ scale: 0.97 }}
          href="#hero"
          className="inline-block group"
          data-cursor-label="MASTHEAD"
        >
          <h1 className="font-radley font-bold text-4xl sm:text-7xl lg:text-[96px] tracking-[0.045em] uppercase text-[#181410] leading-none transition-transform">
            <TextScramble text={personalInfo.name} />
          </h1>
          <div className="text-[11px] font-serif uppercase tracking-[0.3em] text-[#181410] font-bold mt-2 flex items-center justify-center gap-2">
            <TextScramble text="THE CHRONICLE OF SOFTWARE ENGINEERING & ART DIRECTION" />
          </div>
        </motion.a>
      </motion.div>

      {/* ─── 3. RULES-ROW NAVIGATION WITH ZOOM OUT ON HOVER ─── */}
      <nav className="border-b border-[#181410] py-3 px-4 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-serif uppercase tracking-[0.22em] text-[#181410] font-semibold">
        {navLinks.map((link) => (
          <motion.a
            key={link.name}
            whileHover={{ scale: 0.94 }}
            href={link.href}
            data-cursor-label="NAV"
            onClick={() => audioHaptic.playClick()}
            className="hover:underline underline-offset-4 decoration-1 decoration-[#181410] transition-all hover:text-[#c5a059] cursor-pointer"
          >
            <TextScramble text={link.name} />
          </motion.a>
        ))}

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
              className="px-2.5 py-1 bg-[#181410]/5 border border-[#181410] hover:bg-[#181410] hover:text-[#f4f1ea] transition-all flex items-center gap-1.5 text-[11px] font-bold cursor-pointer shadow-sm"
              title="Open Command Palette (Ctrl+K)"
            >
              <Search size={12} />
              <span>NAV</span>
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
            className="px-3 py-1 bg-[#181410] text-[#f4f1ea] hover:bg-[#302922] transition-all inline-flex items-center gap-1.5 font-bold border border-[#181410] cursor-pointer shadow-md"
            title="Download Ayush Raj CV (.docx)"
          >
            <Download size={13} />
            <span>DOWNLOAD CV (DOCX)</span>
          </motion.a>
        </Magnetic>
      </nav>

      {/* ─── 4. THREE-UP DATELINE ROW ─── */}
      <div className="border-b border-[#181410] py-2.5 px-4 sm:px-8 grid grid-cols-1 md:grid-cols-3 items-center text-[11.5px] font-serif text-[#181410] gap-2 text-center md:text-left font-semibold">
        <div className="uppercase tracking-[0.2em]">
          <TextScramble text="EST. MMXIX • VOL. VIII" />
        </div>
        <div className="italic text-center font-serif text-xs text-[#181410]">
          &ldquo;A design &amp; software studio that sets products in ink &amp; pixels&rdquo;
        </div>
        <div className="uppercase tracking-[0.2em] text-center md:text-right flex items-center justify-center md:justify-end gap-3">
          <TextScramble text="ISSUE NO. 47 • AUGUST 2026" />
        </div>
      </div>
    </header>
  );
}
