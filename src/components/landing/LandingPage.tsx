"use client";
import Link from "next/link";
import Antigravity from "../Antigravity";
import LandingLogo from "../LandingLogo";
import { PointerHighlight } from "../ui/pointer-highlight";
import { Easing, LazyMotion, domAnimation } from "motion/react";
import * as m from "motion/react-m";
import { navbarLinks } from "@/lib/exporter";
import { Button } from "../ui/button";

function LandingPage() {
  const easeOutSoft = [0.22, 1, 0.36, 1] as Easing;
  return (
    // CHANGE 1: Use min-h-screen for better mobile height and ensure padding/margins work
    <div className="w-full h-[80vh] pt-20 pb-10 relative">
      {/* CHANGE 2: Antigravity background container - adjusted height to min-h-full */}
      <div className="hidden sm:block absolute top-0 left-0 h-[80vh] w-full z-10">
        <Antigravity
          count={1500}
          magnetRadius={6}
          ringRadius={6}
          waveSpeed={3}
          waveAmplitude={2}
          particleSize={0.4}
          lerpSpeed={0.05}
          color={"#1842e7"}
          autoAnimate={true}
          particleVariance={0.5}
        />
      </div>
      <div className="h-full w-full flex flex-col items-center justify-center relative px-4 sm:px-6">
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOutSoft }}
          >
            <LandingLogo />
          </m.div>
        </LazyMotion>
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOutSoft, delay: 0.05 }}
            className="text-3xl tracking-wider leading-snug sm:text-5xl md:text-6xl font-semibold whitespace-pre-line max-w-[1100px] mx-auto text-center my-5"
          >
            We build Software that performs <br />
            <span className="flex justify-center flex-wrap">
              <PointerHighlight
                rectangleClassName="bg-green-500 border-neutral-300"
                pointerClassName="text-green-500 h-3 w-3"
                containerClassName="inline-block mr-1"
              >
                <span className="relative z-10">Faster,</span>
              </PointerHighlight>
              <span className="relative z-10 mx-1">Lovable &</span>
              <PointerHighlight
                rectangleClassName=" dark:bg-neutral-700 border-blue-500"
                containerClassName="inline-block ml-1"
              >
                <span className="relative z-10">Maximum uptime.</span>
              </PointerHighlight>
            </span>
          </m.div>
        </LazyMotion>
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOutSoft, delay: 0.15 }}
          >
            {/* CHANGE 6: Adjusted paragraph font size for better mobile readability */}
            <p className="text-base sm:text-lg my-5 max-w-[800px] mx-auto text-center px-2">
              We ensure every piece of software is fast enough to meet demand,
              flexible enough to evolve with your market, and reliable enough to
              trust with your mission-critical operations.
            </p>
          </m.div>
        </LazyMotion>
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOutSoft, delay: 0.25 }}
            className="flex gap-3 mt-4 flex-wrap justify-center"
          >
            <Link href={navbarLinks[2].href} className="relative z-10">
              <Button className="text-sm sm:text-base px-6 py-3">
                How we implement Your software 🧑‍💻
              </Button>
            </Link>
            <Link
              href={String(navbarLinks[navbarLinks.length - 1].href)}
              className="relative z-10"
            >
              <Button
                variant={"ghost"}
                className="text-sm sm:text-base px-6 py-3"
              >
                Contact Us ➡️
              </Button>
            </Link>
          </m.div>
        </LazyMotion>
      </div>
    </div>
  );
}

export default LandingPage;
