"use client";
import * as m from "motion/react-m";
import { Easing } from "motion/react";

const easeOutSoft: Easing = [0.22, 1, 0.36, 1];

interface AnimatedWordsProps {
  text: string;
  className?: string;
  delay?: number;
}

export function AnimatedWords({
  text,
  className,
  delay = 0,
}: AnimatedWordsProps) {
  const words = text.split(" ");

  return (
    <m.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.06,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {words.map((word, i) => (
        <m.span
          key={i}
          className="inline-block mr-2"
          variants={{
            hidden: { y: 24, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                ease: easeOutSoft,
              },
            },
          }}
        >
          {word}
        </m.span>
      ))}
    </m.div>
  );
}
