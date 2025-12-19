"use client";
import { useEffect, useRef } from "react";

interface OptimizedVideoProps {
  mp4Src: string;
}

export function OptimizedVideo({ mp4Src }: OptimizedVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force the browser to load video data early
    video.load();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      playsInline
      muted
      loop
      preload="auto"
      className="w-full h-full object-cover rounded-lg shadow-md"
    >
      <source src={mp4Src} type="video/mp4" />
    </video>
  );
}
