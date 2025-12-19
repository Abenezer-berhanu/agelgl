"use client";
import Link from "next/link";
import Antigravity from "../Antigravity";
import { PointerHighlight } from "../ui/pointer-highlight";
import { LazyMotion, domAnimation } from "motion/react";
import * as m from "motion/react-m";
import { icons, navbarLinks } from "@/lib/exporter";
import { Button } from "../ui/button";
import { FloatingImages } from "./FloatingIcons";

function LandingPage() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="relative w-full h-[80vh] sm:pt-20 sm:pb-10 overflow-hidden">
        <FloatingImages images={icons} />
        {/* Background */}
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

        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1], // soft ease-out
          }}
          className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6"
        >
          {/* Headline */}
          <div className="text-3xl sm:text-5xl md:text-6xl font-semibold text-center max-w-275 leading-snug">
            <m.span className="inline-block mr-2">
              We build Software that performs
            </m.span>

            <div className="flex justify-center flex-wrap mt-2">
              <PointerHighlight
                rectangleClassName="bg-green-500 border-neutral-300"
                pointerClassName="text-green-500 h-3 w-3"
                containerClassName="inline-block mr-1"
              >
                <span className="relative z-10">Faster,</span>
              </PointerHighlight>

              <span className="mx-2">
                <m.span className="inline-block mr-2">Lovable &</m.span>
              </span>

              <PointerHighlight
                rectangleClassName="dark:bg-neutral-700 border-blue-500"
                containerClassName="inline-block"
              >
                <span className="mx-2">
                  <m.span className="inline-block mr-2">Maximum uptime.</m.span>
                </span>
              </PointerHighlight>
            </div>
          </div>

          {/* Description */}
          <m.div>
            <p className="text-base sm:text-lg my-6 max-w-200 text-center">
              We ensure every piece of software is fast enough to meet demand,
              flexible enough to evolve with your market, and reliable enough to
              trust with your mission-critical operations.
            </p>
          </m.div>

          {/* Actions */}
          <m.div className="flex gap-3 flex-wrap justify-center">
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
        </m.div>
      </div>
    </LazyMotion>
  );
}

export default LandingPage;
