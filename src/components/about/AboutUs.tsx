"use client";
import { aboutUsContent } from "@/lib/exporter";
import HorizontalScroll from "../HorizontalScroll";

function AboutUs() {
  return (
    <div id="about" className="relative">
      <HorizontalScroll contents={aboutUsContent} />
    </div>
  );
}

export default AboutUs;
