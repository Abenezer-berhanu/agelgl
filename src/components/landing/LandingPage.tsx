"use client";
import Link from "next/link";
import Antigravity from "../Antigravity";
import LandingLogo from "../LandingLogo";
import { PointerHighlight } from "../ui/pointer-highlight";
import { motion } from "motion/react";
import { navbarLinks } from "@/lib/exporter";
import { Button } from "../ui/button";

function LandingPage() {
  return (
    // CHANGE 1: Use min-h-screen for better mobile height and ensure padding/margins work
    <div className="w-full min-h-screen pt-20 pb-10 relative">
      {/* CHANGE 2: Antigravity background container - adjusted height to min-h-full */}
      <div className="hidden sm:block absolute top-0 left-0 min-h-full w-full z-0">
        <Antigravity
          count={700}
          magnetRadius={10}
          ringRadius={10}
          waveSpeed={5}
          waveAmplitude={2}
          particleSize={0.5}
          lerpSpeed={0.05}
          color={"#1842e7"}
          autoAnimate={true}
          particleVariance={0.5}
        />
      </div>

      <div className="h-full w-full flex flex-col items-center justify-center relative z-10 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <LandingLogo />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-3xl leading-snug sm:text-5xl md:text-6xl whitespace-pre-line max-w-[1000px] mx-auto text-center my-5"
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {/* CHANGE 6: Adjusted paragraph font size for better mobile readability */}
          <p className="text-base sm:text-lg my-5 max-w-[800px] mx-auto text-center px-2">
            We ensure every piece of software is fast enough to meet demand,
            flexible enough to evolve with your market, and reliable enough to
            trust with your mission-critical operations.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          // CHANGE 7: Added flex-wrap to the buttons container for small screens
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
        </motion.div>
      </div>
    </div>
  );
}

export default LandingPage;
