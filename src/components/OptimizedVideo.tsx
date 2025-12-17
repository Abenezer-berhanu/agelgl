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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Play only when in view
          video.play().catch((err) => {
            // Browsers block autoplay if not muted, but we have 'muted' prop
            console.warn("Video play interrupted:", err);
          });
        } else {
          // Pause when out of view to save resources
          video.pause();
        }
      },
      {
        // Trigger when 10% of the video is visible
        threshold: 0.1,
      }
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      playsInline
      muted
      loop
      autoPlay
      // 'metadata' allows the browser to grab dimensions without downloading the whole file
      preload="metadata"
      className="w-full h-full object-cover rounded-lg shadow-md"
    >
      <source src={mp4Src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
