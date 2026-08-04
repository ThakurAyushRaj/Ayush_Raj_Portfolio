import { motion } from "framer-motion";

export default function PressSeal() {
  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      whileHover={{ scale: 1.1 }}
      className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#c5a059] bg-[#181410] text-[#f4f1ea] shadow-2xl flex items-center justify-center cursor-pointer select-none group"
      title="Official Press Seal MMXXVI"
    >
      {/* Outer Dashed Rubber Stamp Border */}
      <div className="absolute inset-1 rounded-full border border-dashed border-[#c5a059]/60 pointer-events-none" />

      {/* Center Monogram Initials */}
      <div className="text-center space-y-0.5 z-10">
        <span className="font-anton text-lg sm:text-xl uppercase tracking-tighter text-[#c5a059] block font-black">
          AR
        </span>
        <span className="text-[7px] font-serif uppercase tracking-[0.25em] text-[#d2c9b8] block opacity-90">
          SDE
        </span>
      </div>

      {/* Circular Curved Text SVG Ring */}
      <svg className="absolute inset-0 w-full h-full p-1" viewBox="0 0 100 100">
        <path
          id="sealTextPath"
          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          fill="none"
        />
        <text className="text-[7.5px] font-serif uppercase tracking-[0.22em] fill-[#c5a059] font-bold">
          <textPath href="#sealTextPath" startOffset="0%">
            ✦ AYUSH RAJ ✦ SET IN INK ✦ SDE PRACTICE ✦
          </textPath>
        </text>
      </svg>
    </motion.div>
  );
}
