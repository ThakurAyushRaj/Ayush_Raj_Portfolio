import { motion } from "framer-motion";

interface InkDrawUnderlineProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
  delay?: number;
}

export default function InkDrawUnderline({
  children,
  color = "#c5a059",
  className = "",
  delay = 0.2,
}: InkDrawUnderlineProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <svg
        className="absolute -bottom-1 left-0 w-full h-3 overflow-visible pointer-events-none z-0"
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 2,14 Q 30,4 50,14 T 98,12"
          fill="none"
          stroke={color}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{
            pathLength: { duration: 0.9, delay, ease: "easeOut" },
            opacity: { duration: 0.2, delay },
          }}
        />
      </svg>
    </span>
  );
}
