import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, Command } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";
import { audioHaptic } from "@/components/ui/AudioHaptic";

interface QuickNavProps {
  onOpenCommandPalette: () => void;
}

export default function QuickNav({ onOpenCommandPalette }: QuickNavProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    audioHaptic.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-3 font-serif select-none"
        >
          {/* Command Palette button */}
          <Magnetic strength={0.4}>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                audioHaptic.playClick();
                onOpenCommandPalette();
              }}
              data-cursor-label="⌘K"
              className="p-3.5 bg-[#181410] text-[#c5a059] border-2 border-[#c5a059] shadow-2xl hover:bg-[#c5a059] hover:text-[#181410] transition-colors flex items-center gap-1.5 text-xs font-bold cursor-pointer"
              title="Open Command Palette (Ctrl+K)"
            >
              <Command size={14} />
              <span className="hidden sm:inline">⌘K</span>
            </motion.button>
          </Magnetic>

          {/* Scroll to top button */}
          <Magnetic strength={0.4}>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              data-cursor-label="TOP"
              className="p-3.5 bg-[#181410] text-[#f4f1ea] border-2 border-[#181410] hover:border-[#c5a059] shadow-2xl transition-colors flex items-center justify-center cursor-pointer"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ChevronUp size={16} />
            </motion.button>
          </Magnetic>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
