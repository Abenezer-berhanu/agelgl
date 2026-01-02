"use client";
import {
  domAnimation,
  LazyMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { JSX, useRef } from "react";
import * as m from "motion/react-m";

const HorizontalScroll = ({
  contents,
}: {
  contents: {
    title: string;
    description: string;
    content: JSX.Element;
  }[];
}) => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);

  return (
    <section ref={targetRef} className="relative h-[290vh] bg-[#F2F2F2]">
      <LazyMotion features={domAnimation}>
        <div className="sticky top-0 flex flex-col h-screen overflow-hidden bg-neutral-50/50 backdrop-blur-sm">
          <div className="shrink-0 px-8 pt-12 pb-4">
            <m.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-5xl sm:text-8xl font-bold text-neutral-900"
            >
              About Us
            </m.h2>
          </div>

          <div className="flex h-full w-full items-center overflow-hidden pl-4">
            <m.div style={{ x }} className="flex gap-8 px-4">
              {contents.map((card, idx) => {
                return (
                  <m.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ amount: 0.5 }}
                    transition={{
                      duration: 1,
                      delay: idx * 0.1,
                      ease: "backOut",
                    }}
                    className="w-[80vw] h-[70vh] shrink-0 rounded-3xl border border-neutral-200 shadow-xl overflow-hidden relative"
                  >
                    <div className="absolute inset-0 z-0 w-full h-full">
                      {card.content}
                    </div>

                    <div className="relative z-10 p-8 w-full h-full flex items-start justify-end">
                      <div className="p-4 rounded-xl bg-white/40 backdrop-blur-sm shadow-lg border-neutral-100 max-w-xl">
                        <h3 className="text-3xl font-bold mb-3 text-neutral-900">
                          {card.title}
                        </h3>
                        <p className="text-black sm:text-lg leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </m.div>
                );
              })}
            </m.div>
          </div>
        </div>
      </LazyMotion>
    </section>
  );
};

export default HorizontalScroll;
