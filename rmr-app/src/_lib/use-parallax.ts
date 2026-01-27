"use client";

import { useEffect, useRef } from "react";

interface ParallaxOptions {
  speed?: number;
  direction?: "up" | "down";
}

export function useParallax(options: ParallaxOptions = {}) {
  const { speed = 0.5, direction = "up" } = options;
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const updateParallax = () => {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Check if element is in viewport
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const range = viewportHeight + rect.height;
        const progress = (viewportHeight - rect.top) / range;

        // Travel distance - adjust 400 for more/less movement
        const travelDistance = -200 * speed;
        const parallaxOffset =
          (progress - 0.5) * travelDistance * (direction === "up" ? 1 : -1);

        const inner = element.querySelector<HTMLDivElement>(
          "[data-parallax-inner]",
        );
        if (inner) {
          inner.style.transform = `translate3d(0, ${parallaxOffset}px, 0)`;
        }
      }
      rafRef.current = requestAnimationFrame(updateParallax);
    };

    rafRef.current = requestAnimationFrame(updateParallax);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [speed, direction]);

  return { ref };
}
