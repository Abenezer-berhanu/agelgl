"use client";
import Link from "next/link";
import Antigravity from "../Antigravity";
import { PointerHighlight } from "../ui/pointer-highlight";
import { LazyMotion, domAnimation } from "motion/react";
import * as m from "motion/react-m";
import { navbarLinks } from "@/lib/exporter";
import { Button } from "../ui/button";
import { AnimatedWords } from "../AnimatedWords";

function LandingPage() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="relative w-full h-[80vh] pt-20 pb-10 overflow-hidden">
        {/* Background */}
        <div className="hidden sm:block absolute inset-0 z-0 opacity-70">
          <Antigravity
            count={1200}
            magnetRadius={6}
            ringRadius={6}
            waveSpeed={2.5}
            waveAmplitude={2}
            particleSize={0.4}
            lerpSpeed={0.05}
            color="#1842e7"
            autoAnimate
          />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6">
          {/* Headline */}
          <div className="text-3xl sm:text-5xl md:text-6xl font-semibold text-center max-w-275 leading-snug">
            <AnimatedWords text="We build Software that performs" />

            <div className="flex justify-center flex-wrap mt-2">
              <PointerHighlight
                rectangleClassName="bg-green-500 border-neutral-300"
                pointerClassName="text-green-500 h-3 w-3"
                containerClassName="inline-block mr-1"
              >
                <span className="relative z-10">Faster,</span>
              </PointerHighlight>

              <span className="mx-2">
                <AnimatedWords text="Lovable &" />
              </span>

              <PointerHighlight
                rectangleClassName="dark:bg-neutral-700 border-blue-500"
                containerClassName="inline-block"
              >
                <AnimatedWords text="Maximum uptime." />
              </PointerHighlight>
            </div>
          </div>

          {/* Description */}
          <m.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-base sm:text-lg my-6 max-w-200 text-center">
              We ensure every piece of software is fast enough to meet demand,
              flexible enough to evolve with your market, and reliable enough to
              trust with your mission-critical operations.
            </p>
          </m.div>

          {/* Actions */}
          <m.div
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex gap-3 flex-wrap justify-center"
          >
            <Link href={navbarLinks[2].href}>
              <Button className="px-6 py-3">
                How we implement Your software
              </Button>
            </Link>

            <Link href={String(navbarLinks.at(-1)?.href)}>
              <Button variant="ghost" className="px-6 py-3">
                Contact Us
              </Button>
            </Link>
          </m.div>
        </div>
      </div>
    </LazyMotion>
  );
}

export default LandingPage;
