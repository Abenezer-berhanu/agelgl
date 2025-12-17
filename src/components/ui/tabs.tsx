"use client";
import { useState, useEffect, useRef } from "react";
import * as m from "motion/react-m";
import { cn } from "@/lib/utils";
import { domAnimation, LazyMotion } from "motion/react";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  // --- PERFORMANCE OPTIMIZED AUTO-SCROLL LOGIC ---
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only run logic if the component is in the viewport
      if (rect.top <= 0 && rect.bottom > windowHeight) {
        const totalHeight = rect.height - windowHeight;
        const progress = Math.abs(rect.top) / totalHeight;

        const index = Math.min(
          propTabs.length - 1,
          Math.floor(progress * propTabs.length)
        );

        // Only update state if the tab actually changed to save performance
        if (propTabs[index].value !== active.value) {
          moveSelectedTabToTop(index);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active, propTabs]);

  return (
    <div ref={containerRef} className="relative w-full h-[300vh]">
      <div className="sticky top-2 w-full">
        <h2 className="text-4xl md:text-7xl font-semibold my-5 px-4 md:px-0">
          Our Services
        </h2>
        <div
          className={cn(
            "flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto no-scrollbar sm:overflow-visible no-visible-scrollbar max-w-full w-full px-4 md:px-0",
            containerClassName
          )}
        >
          {propTabs.map((tab, idx) => (
            <button
              key={tab.title}
              onClick={() => moveSelectedTabToTop(idx)}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className={cn(
                "relative px-3 py-2 md:px-4 md:py-2 rounded-full text-sm md:text-base whitespace-nowrap",
                tabClassName
              )}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {active.value === tab.value && (
                <LazyMotion features={domAnimation}>
                  <m.div
                    layoutId="clickedbutton"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                    className={cn(
                      "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full",
                      activeTabClassName
                    )}
                  />
                </LazyMotion>
              )}

              <span className="relative block text-black dark:text-white h-full">
                {tab.title}
              </span>
            </button>
          ))}
        </div>
        <FadeInDiv
          tabs={tabs}
          active={active}
          key={active.value}
          hovering={hovering}
          className={cn("mt-8 md:mt-20 px-4 md:px-0", contentClassName)}
        />
      </div>
    </div>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full h-[50vh] md:h-[68vh]">
      {tabs.map((tab, idx) => (
        <LazyMotion key={tab.value} features={domAnimation}>
          <m.div
            key={tab.value}
            layoutId={tab.value}
            style={{
              scale: 1 - idx * 0.1,
              top: hovering ? idx * -40 : 0,
              zIndex: -idx,
              opacity: idx < tabs.length ? 1 - idx * 0.02 : 0,
            }}
            animate={{
              y: isActive(tab) ? [0, 40, 0] : 0,
            }}
            className={cn("w-full h-full absolute top-0 left-0", className)}
          >
            {tab.content}
          </m.div>
        </LazyMotion>
      ))}
    </div>
  );
};
