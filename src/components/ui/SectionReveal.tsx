import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { fadeUp, staggerContainer } from "@/lib/motion";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
  amount?: number;
}

export default function SectionReveal({
  children,
  className = "",
  delay = 0,
  stagger = false,
  amount = 0.2,
}: SectionRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants = stagger ? staggerContainer : fadeUp;

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={stagger ? undefined : { delay }}
    >
      {children}
    </motion.div>
  );
}
