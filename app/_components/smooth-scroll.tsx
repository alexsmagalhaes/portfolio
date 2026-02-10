"use client";

import "lenis/dist/lenis.css";
import ReactLenis, { type LenisRef } from "lenis/react";
import { type ReactNode, useRef } from "react";

interface ScrollSmoothProps {
  children: ReactNode;
}

export function SmoothScroll({ children }: Readonly<ScrollSmoothProps>) {
  const lenisRef = useRef<LenisRef>(null);

  const lenisOptions = {
    duration: 1.2,
    easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    smoothTouch: false,
    autoResize: true,
    wheelMultiplier: 1,
    smoothWheel: true,
  };

  return (
    <ReactLenis ref={lenisRef} root autoRaf={false} options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
