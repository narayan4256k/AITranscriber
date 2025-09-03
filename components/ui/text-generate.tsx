"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect1 = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: false, amount: 0.3 }); 
  // once:false = re-animates every time you scroll back
  // amount:0.3 = triggers when 30% of element is visible

  let wordsArray = words.split(" ");

  useEffect(() => {
  if (isInView) {
    // Animate in when visible
    animate(
      "span",
      { opacity: 1, filter: filter ? "blur(0px)" : "none" },
      { duration: duration ?? 1, delay: stagger(0.3) }
    );
  } else {
    // Animate OUT smoothly instead of instant reset
    animate(
      "span",
      { opacity: 0, filter: filter ? "blur(10px)" : "none" },
      { duration: 0.8 } // smooth fade-out
    );
  }
}, [isInView]);


  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="text-white opacity-0 "
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
  <div className={cn("font-bold", className)}>
      <div className="text-white text-xs leading-snug tracking-wide">
        {renderWords()}
      </div>
  </div>
);

};
