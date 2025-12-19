"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
interface FloatingImagesProps {
  images: { src: string; class: string }[];
  centerWidth?: number;
  centerHeight?: number;
}

export function FloatingImages({ images }: FloatingImagesProps) {
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    itemsRef.current.forEach((el, i) => {
      if (!el) return;

      gsap.to(el, {
        y: () => gsap.utils.random(-12, 12),
        duration: gsap.utils.random(2.5, 4.5),
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: gsap.utils.random(0, 1.5),
      });
    });

    return () => {
      gsap.killTweensOf(itemsRef.current);
    };
  }, []);
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      {images.map((img, i) => (
        <div
          ref={(el) => {
            if (el) itemsRef.current[i] = el;
          }}
          key={i}
          className={`${img.class} absolute`}
        >
          <Image
            src={img.src}
            width={50}
            height={50}
            alt=""
            className="object-cover opacity-10 sm:opacity-100"
            unoptimized
          />
        </div>
      ))}
    </div>
  );
}
