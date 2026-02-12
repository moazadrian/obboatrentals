"use client";

// ═══════════════════════════════════════════════════════════════
// GSAP Animation System — OB Boat Rentals
// Rich, modern, premium motion library.
// Every animation auto-cleans on unmount via useGsap.
// All respect prefers-reduced-motion.
// ═══════════════════════════════════════════════════════════════

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Use useLayoutEffect on client, useEffect on server (SSR safety)
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

// ── Core ──

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Scoped GSAP context with safe cleanup.
 * Uses useLayoutEffect so ScrollTrigger pins are reverted
 * SYNCHRONOUSLY before React removes DOM nodes.
 */
export function useGsap(callback: () => void, deps: React.DependencyList = []) {
  const ref = useRef<HTMLDivElement>(null!);
  useIsomorphicLayoutEffect(() => {
    if (!ref.current || prefersReducedMotion()) return;
    const ctx = gsap.context(() => callback(), ref);
    return () => {
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return ref;
}

// ── Presets ──

/** Classic fade up with stagger — the workhorse */
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

/** Fade up + slight blur clearing — premium "lens focus" feel */
export function blurFadeUp(
  selector: string,
  opts?: { stagger?: number; duration?: number; y?: number; blur?: number; trigger?: string; start?: string }
) {
  const { stagger = 0.1, duration = 1, y = 30, blur = 8, trigger, start = "top 85%" } = opts ?? {};
  gsap.fromTo(selector,
    { opacity: 0, y, filter: `blur(${blur}px)` },
    {
      opacity: 1, y: 0, filter: "blur(0px)", duration, stagger, ease: "power3.out",
      scrollTrigger: trigger ? { trigger, start, toggleActions: "play none none none" } : undefined,
    }
  );
}

/** Cinematic clip-path reveal — directional wipe */
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

/** Scale up from smaller — cards, images popping in */
export function scaleReveal(
  selector: string,
  opts?: { stagger?: number; duration?: number; scale?: number; trigger?: string; start?: string }
) {
  const { stagger = 0.1, duration = 0.8, scale = 0.92, trigger, start = "top 85%" } = opts ?? {};
  gsap.fromTo(selector,
    { opacity: 0, scale },
    {
      opacity: 1, scale: 1, duration, stagger, ease: "power2.out",
      scrollTrigger: trigger ? { trigger, start, toggleActions: "play none none none" } : undefined,
    }
  );
}

/** Parallax scroll for images/media — smooth depth */
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

/** Horizontal scroll filmstrip — pinned section */
export function horizontalScroll(
  filmstripSelector: string,
  sectionSelector: string,
  opts?: { scrub?: number; offset?: number }
) {
  const { scrub = 1.5, offset = 80 } = opts ?? {};
  const filmstrip = document.querySelector(filmstripSelector) as HTMLElement | null;
  if (!filmstrip) return;
  const scrollDist = filmstrip.scrollWidth - window.innerWidth + offset;

  gsap.to(filmstrip, {
    x: -scrollDist, ease: "none",
    scrollTrigger: {
      trigger: sectionSelector,
      start: "top 20%",
      end: () => `+=${scrollDist + 200}`,
      scrub,
      pin: true,
      anticipatePin: 1,
    },
  });
}

/** Draw-in line / border animation */
export function lineGrow(
  selector: string,
  opts?: { duration?: number; trigger?: string; start?: string; axis?: "x" | "y" }
) {
  const { duration = 1.2, trigger, start = "top 85%", axis = "x" } = opts ?? {};
  const prop = axis === "x" ? "scaleX" : "scaleY";
  gsap.fromTo(selector,
    { [prop]: 0 },
    {
      [prop]: 1, duration, ease: "power3.inOut", transformOrigin: axis === "x" ? "left center" : "center top",
      scrollTrigger: trigger ? { trigger, start, toggleActions: "play none none none" } : undefined,
    }
  );
}

/** Counter animation — numbers counting up */
export function countUp(
  selector: string,
  opts?: { end?: number; duration?: number; trigger?: string; start?: string }
) {
  const { end = 100, duration = 2, trigger, start = "top 85%" } = opts ?? {};
  const obj = { val: 0 };
  const el = document.querySelector(selector);
  if (!el) return;

  gsap.to(obj, {
    val: end, duration, ease: "power2.out",
    onUpdate: () => { el.textContent = Math.round(obj.val).toString(); },
    scrollTrigger: trigger ? { trigger, start, toggleActions: "play none none none" } : undefined,
  });
}

/** Staggered character/word reveal — splits text inline */
export function textRevealByWord(
  selector: string,
  opts?: { stagger?: number; duration?: number; trigger?: string; start?: string }
) {
  const { stagger = 0.04, duration = 0.7, trigger, start = "top 85%" } = opts ?? {};
  const elements = document.querySelectorAll(selector);

  elements.forEach((el) => {
    const text = el.textContent ?? "";
    const words = text.split(" ");
    el.textContent = "";

    words.forEach((word, i) => {
      const span = document.createElement("span");
      span.style.display = "inline-block";
      span.style.overflow = "hidden";
      span.style.verticalAlign = "top";
      const inner = document.createElement("span");
      inner.textContent = word + (i < words.length - 1 ? "\u00A0" : "");
      inner.style.display = "inline-block";
      inner.setAttribute("data-word", "");
      span.appendChild(inner);
      el.appendChild(span);
    });

    gsap.fromTo(
      el.querySelectorAll("[data-word]"),
      { y: "110%", opacity: 0 },
      {
        y: "0%", opacity: 1, duration, stagger, ease: "power3.out",
        scrollTrigger: trigger ? { trigger, start, toggleActions: "play none none none" } : undefined,
      }
    );
  });
}

/** Rotate in from angle — subtle 3D entrance */
export function rotateIn(
  selector: string,
  opts?: { stagger?: number; duration?: number; rotateX?: number; trigger?: string; start?: string }
) {
  const { stagger = 0.1, duration = 0.9, rotateX = 15, trigger, start = "top 85%" } = opts ?? {};
  gsap.fromTo(selector,
    { opacity: 0, y: 40, rotateX, transformPerspective: 800 },
    {
      opacity: 1, y: 0, rotateX: 0, duration, stagger, ease: "power3.out",
      scrollTrigger: trigger ? { trigger, start, toggleActions: "play none none none" } : undefined,
    }
  );
}