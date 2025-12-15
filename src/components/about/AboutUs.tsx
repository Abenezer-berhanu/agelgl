"use client";
import { content } from "@/lib/exporter";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { useEffect, useRef, useState } from "react";
import { domAnimation, LazyMotion } from "motion/react";
import * as m from "motion/react-m";

function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setIsAtTop(rect.top <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="my-30" id="about" ref={containerRef}>
      <LazyMotion features={domAnimation}>
        <m.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-8xl font-bold sm:mb-10 sm:p-10 max-sm:text-center"
        >
          About Us
        </m.h2>
      </LazyMotion>
      <m.div
        className="h-[80vh]"
        style={{ pointerEvents: isAtTop ? "auto" : "none" }}
      >
        <StickyScroll content={content} />
      </m.div>
    </div>
  );
}

export default AboutUs;
