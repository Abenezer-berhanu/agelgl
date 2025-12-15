"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  LazyMotion,
  useMotionValueEvent,
  useScroll,
  domAnimation,
} from "motion/react";
import * as m from "motion/react-m";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto overflow-x-hidden rounded-md p-10"
        ref={ref}
      >
        <div className="div relative flex items-start px-4 sm:w-1/2">
          <div className="w-full">
            {content.map((item, index) => (
              <div key={item.title + index} className="sm:my-20 sm:h-[40vh]">
                <m.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-3xl sm:text-4xl font-bold text-slate-900"
                >
                  {item.title}
                </m.h2>
                <m.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-lg mt-10 max-sm:mb-10 w-full text-slate-700"
                >
                  {item.description}
                </m.p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
        <m.div
          key={activeCard}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={cn(
            "sticky top-0 hidden h-full w-1/2 overflow-hidden rounded-md bg-white lg:block",
            contentClassName
          )}
        >
          {content[activeCard].content ?? null}
        </m.div>
      </m.div>
    </LazyMotion>
  );
};
