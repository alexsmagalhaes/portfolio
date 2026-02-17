"use client";

import type { StaticImageData } from "next/image";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface VideoBackgroundProps {
  className?: string;
  children: React.ReactNode;
  fallbackImage: StaticImageData;
  priority?: boolean;
}

export function VideoBackground({
  className,
  children,
  fallbackImage,
  priority,
}: Readonly<VideoBackgroundProps>) {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  function handleReady() {
    setIsLoading(false);
  }

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    video.muted = true;
    video.playsInline = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  }, []);

  return (
    <div className={cn("bg-bg-theme-3 overflow-hidden", className)}>
      {isLoading && (
        <Image
          fill
          alt="fallback"
          placeholder="blur"
          priority={priority}
          sizes="100vw"
          src={fallbackImage}
        />
      )}

      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onCanPlay={handleReady}
        onLoadedData={handleReady}
      >
        {children}
      </video>
    </div>
  );
}
