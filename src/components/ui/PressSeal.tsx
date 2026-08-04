import { motion, useScroll, useTransform } from "framer-motion";

export default function PressSeal() {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);

  return (
    <motion.div
      style={{ rotate }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#c5a059] bg-[#181410] text-[#c5a059] p-2 flex items-center justify-center relative shadow-2xl select-none cursor-pointer group"
      title="Official Studio Seal MMXXVI"
    >
      {/* Outer Dashed Ring */}
      <div className="absolute inset-1 rounded-full border border-dashed border-[#c5a059]/60 pointer-events-none" />

      {/* SVG Circular Text */}
      <svg className="w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100">
        <path
          id="circlePath"
          d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          fill="none"
        />
        <text className="text-[8px] font-serif font-bold uppercase tracking-[0.22em] fill-[#c5a059]">
          <textPath href="#circlePath" startOffset="0%">
            ✦ AYUSH RAJ STUDIO ✦ SET IN INK ✦ SDE PRACTICE ✦
          </textPath>
        </text>
      </svg>

      {/* Inner Monogram Center */}
      <div className="absolute inset-0 flex items-center justify-center font-anton text-xl sm:text-2xl text-[#e5c178] tracking-widest font-black pointer-events-none group-hover:scale-110 transition-transform">
        AR
      </div>
    </motion.div>
  );
}
