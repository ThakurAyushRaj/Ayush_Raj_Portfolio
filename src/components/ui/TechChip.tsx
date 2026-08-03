import { motion } from "framer-motion";
import { chipReveal } from "@/lib/motion";

interface TechChipProps {
  label: string;
  size?: "sm" | "md";
}

export default function TechChip({ label, size = "sm" }: TechChipProps) {
  return (
    <motion.span
      variants={chipReveal}
      className={`
        inline-flex items-center font-mono font-medium tracking-wide
        border rounded-full px-3
        transition-all duration-200
        ${size === "sm"
          ? "text-xs py-1"
          : "text-sm py-1.5"
        }
        bg-accent-dim border-accent/20 text-accent/80
        hover:border-accent hover:text-accent hover:bg-accent/10
        cursor-default
      `}
      style={{
        background: "rgba(0,255,135,0.06)",
        borderColor: "rgba(0,255,135,0.2)",
        color: "rgba(0,255,135,0.75)",
      }}
      whileHover={{
        borderColor: "rgba(0,255,135,0.6)",
        color: "rgba(0,255,135,1)",
        backgroundColor: "rgba(0,255,135,0.12)",
        transition: { duration: 0.15 },
      }}
    >
      {label}
    </motion.span>
  );
}
