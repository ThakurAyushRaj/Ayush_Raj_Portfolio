import { motion } from "framer-motion";

interface RubberStampProps {
  text: string;
  subtext?: string;
  color?: "gold" | "red" | "emerald";
  className?: string;
  rotate?: number;
}

export default function RubberStamp({
  text,
  subtext = "SET IN INK • MMXXVI",
  color = "gold",
  className = "",
  rotate = -6,
}: RubberStampProps) {
  const colorClasses = {
    gold: "border-[#c5a059] text-[#e5c178] bg-[#c5a059]/10 shadow-[0_0_15px_rgba(197,160,89,0.3)]",
    red: "border-red-600 text-red-400 bg-red-900/20 shadow-[0_0_15px_rgba(220,38,38,0.3)]",
    emerald: "border-emerald-600 text-emerald-400 bg-emerald-900/20 shadow-[0_0_15px_rgba(16,185,129,0.3)]",
  };

  return (
    <motion.div
      initial={{ rotate, scale: 0.95 }}
      whileHover={{
        rotate: 0,
        scale: 1.1,
        y: -4,
      }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={`inline-flex flex-col items-center justify-center p-2.5 border-2 border-dashed uppercase tracking-widest font-serif font-black select-none cursor-pointer ${colorClasses[color]} ${className}`}
    >
      <div className="text-xs font-anton tracking-wider">{text}</div>
      {subtext && <div className="text-[8px] font-mono tracking-widest opacity-80 pt-0.5">{subtext}</div>}
    </motion.div>
  );
}
