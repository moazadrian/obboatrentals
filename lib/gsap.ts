"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useGsap(callback: () => void, deps: React.DependencyList = []) {
  const ref = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    if (!ref.current || prefersReducedMotion()) return;
    const ctx = gsap.context(() => callback(), ref);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return ref;
}

export function fadeUpStagger(
  selector: string,
  opts?: { stagger?: number; duration?: number; y?: number; trigger?: string; start?: string }
) {
  const { stagger = 0.12, duration = 0.9, y = 40, trigger, start = "top 85%" } = opts ?? {};
  gsap.fromTo(selector, { opacity: 0, y }, {
    opacity: 1, y: 0, duration, stagger, ease: "power3.out",
    scrollTrigger: trigger ? { trigger, start, toggleActions: "play none none none" } : undefined,
  });
}

export function clipReveal(
  selector: string,
  opts?: { direction?: "up" | "down" | "left" | "right"; duration?: number; trigger?: string; start?: string }
) {
  const { direction = "up", duration = 1.4, trigger, start = "top 80%" } = opts ?? {};
  const clips: Record<string, { from: string; to: string }> = {
    up: { from: "inset(100% 0% 0% 0%)", to: "inset(0% 0% 0% 0%)" },
    down: { from: "inset(0% 0% 100% 0%)", to: "inset(0% 0% 0% 0%)" },
    left: { from: "inset(0% 100% 0% 0%)", to: "inset(0% 0% 0% 0%)" },
    right: { from: "inset(0% 0% 0% 100%)", to: "inset(0% 0% 0% 0%)" },
  };
  gsap.fromTo(selector, { clipPath: clips[direction].from }, {
    clipPath: clips[direction].to, duration, ease: "power4.inOut",
    scrollTrigger: trigger ? { trigger, start, toggleActions: "play none none none" } : undefined,
  });
}

export function parallaxMedia(
  selector: string,
  opts?: { speed?: number; trigger?: string; start?: string; end?: string }
) {
  const { speed = 50, trigger, start = "top bottom", end = "bottom top" } = opts ?? {};
  gsap.to(selector, {
    y: speed, ease: "none",
    scrollTrigger: { trigger: trigger ?? selector, start, end, scrub: true },
  });
}