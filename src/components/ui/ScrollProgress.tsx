import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1 pointer-events-none bg-[#181410]/10">
      <motion.div
        className="h-full bg-gradient-to-r from-[#c5a059] via-[#e5c178] to-[#c5a059] origin-left shadow-[0_0_10px_rgba(197,160,89,0.5)]"
        style={{ scaleX }}
      />
    </div>
  );
}
