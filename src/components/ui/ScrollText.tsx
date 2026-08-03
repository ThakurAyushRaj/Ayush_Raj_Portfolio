import { motion } from "framer-motion";

interface ScrollTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "blockquote";
  delay?: number;
}

export default function ScrollText({
  text,
  className = "",
  as = "h2",
  delay = 0,
}: ScrollTextProps) {
  const words = text.split(" ");

  const Component = motion[as];

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.05,
            delayChildren: delay,
          },
        },
      }}
      className={`${className} flex flex-wrap gap-x-[0.25em] gap-y-1`}
    >
      {words.map((word, idx) => (
        <span key={idx} className="inline-block overflow-hidden py-0.5">
          <motion.span
            variants={{
              hidden: {
                opacity: 0,
                y: "120%",
                rotateX: -25,
                skewY: 3,
              },
              visible: {
                opacity: 1,
                y: "0%",
                rotateX: 0,
                skewY: 0,
                transition: {
                  duration: 0.6,
                  ease: [0.215, 0.61, 0.355, 1],
                },
              },
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
