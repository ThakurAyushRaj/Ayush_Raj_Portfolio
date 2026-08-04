import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface TextScrambleProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "div" | "p";
  duration?: number;
  scrambleOnHover?: boolean;
}

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789✦❖❦▲§#$&@▓░";

export default function TextScramble({
  text,
  className = "",
  as = "span",
  duration = 0.8,
  scrambleOnHover = false, // Disabled by default so it does NOT repeat on every hover!
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const ref = useRef<HTMLElement>(null);
  // Runs strictly ONCE when scrolling into view
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const hasAnimatedRef = useRef(false);

  const startScramble = () => {
    if (hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    let frame = 0;
    const totalFrames = Math.max(20, Math.floor(duration * 60));

    const animate = () => {
      frame++;
      const progress = frame / totalFrames;
      const revealedLength = Math.floor(text.length * progress);

      const scrambled = text
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (index < revealedLength) {
            return text[index];
          }
          if (index === revealedLength) {
            return GLYPHS[Math.floor(Math.random() * 8)];
          }
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join("");

      setDisplayText(scrambled);

      if (frame < totalFrames) {
        requestAnimationFrame(animate);
      } else {
        setDisplayText(text);
      }
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (isInView && !hasAnimatedRef.current) {
      startScramble();
    }
  }, [isInView, text]);

  const Component = as as any;

  return (
    <Component
      ref={ref}
      onMouseEnter={() => {
        if (scrambleOnHover && !hasAnimatedRef.current) {
          startScramble();
        }
      }}
      className={`inline-block cursor-default ${className}`}
    >
      {displayText}
    </Component>
  );
}
