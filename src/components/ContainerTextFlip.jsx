import React, { useState, useEffect, useId } from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

export function ContainerTextFlip({
  words = ["Vibecoder", "Designer", "Architect"],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700,
}) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(100);
  const textRef = React.useRef(null);

  const updateWidthForWord = () => {
    if (textRef.current) {
      // Add some padding to the text width (30px on each side)
      const textWidth = textRef.current.scrollWidth + 30;
      setWidth(textWidth);
    }
  };

  useEffect(() => {
    // Update width whenever the word changes
    updateWidthForWord();
  }, [currentWordIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      // Width will be updated in the effect that depends on currentWordIndex
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval]);

  return (
    <motion.p
      layout
      layoutId={`words-here-${id}`}
      animate={{ width }}
      transition={{ duration: animationDuration / 2000 }}
      className={cn(
        "relative inline-block rounded-lg px-3 pt-2 pb-2.5 text-center",
        "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold",
        "bg-gradient-to-b from-[#915EFF]/25 via-[#915EFF]/15 to-[#915EFF]/10",
        "border border-[#915EFF]/40",
        "shadow-[0_4px_15px_rgba(145,94,255,0.25),inset_0_1px_0_rgba(255,255,255,0.1)]",
        "backdrop-blur-sm",
        className
      )}
      key={words[currentWordIndex]}
    >
      <motion.div
        transition={{
          duration: animationDuration / 1000,
          ease: "easeInOut",
        }}
        className={cn("inline-block", textClassName)}
        ref={textRef}
        layoutId={`word-div-${words[currentWordIndex]}-${id}`}
      >
        <motion.div className="inline-block">
          {words[currentWordIndex].split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                delay: index * 0.02,
              }}
              className="text-[#915EFF] drop-shadow-[0_0_8px_rgba(145,94,255,0.5)]"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.p>
  );
}

