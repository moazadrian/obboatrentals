"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/gsap";
import { GALLERY_IMAGES } from "@/content/site-config";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const filmstripRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const filmstrip = filmstripRef.current;
    const header = headerRef.current;
    if (!section || !filmstrip) return;

    // If reduced motion: reveal everything without animation
    if (prefersReducedMotion()) {
      if (header) {
        Array.from(header.children).forEach((el) => {
          (el as HTMLElement).style.opacity = "1";
          (el as HTMLElement).style.filter = "none";
        });
      }
      return;
    }

    const ctx = gsap.context(() => {
      // Header blur-fade in
      if (header) {
        gsap.fromTo(
          header.children,
          { opacity: 0, y: 30, filter: "blur(6px)" },
          {
            opacity: 1, y: 0, filter: "blur(0px)",
            stagger: 0.1, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: section, start: "top 80%", toggleActions: "play none none none" },
          }
        );
      }

      // Horizontal filmstrip scroll
      const totalWidth = filmstrip.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = totalWidth - viewportWidth + 100;

      if (scrollDistance > 0) {
        gsap.to(filmstrip, {
          x: -scrollDistance,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${scrollDistance * 1.5}`,
            scrub: 1,
            pin: true,
            pinReparent: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-gallery-section
      className="relative"
      style={{ padding: "var(--spacing-section) 0 0", background: "var(--color-navy-950)" }}
    >
      <div ref={headerRef} className="container-site mb-12 md:mb-16">
        <p className="section-label" style={{ opacity: 0 }}>On the Water</p>
        <h2 className="font-display text-section" style={{ color: "var(--color-sand-50)", opacity: 0 }}>Life Looks Better from Here</h2>
      </div>

      <div
        ref={filmstripRef}
        className="flex gap-4 lg:gap-6 pl-5 md:pl-8 lg:pl-12"
        style={{ willChange: "transform", paddingBottom: "var(--spacing-section)" }}
      >
        {GALLERY_IMAGES.map((img, i) => (
          <div key={i} className="relative flex-shrink-0 rounded-2xl overflow-hidden" style={{ width: "clamp(280px, 35vw, 480px)", aspectRatio: "3/4", background: "rgba(15,32,56,0.3)" }}>
            <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="480px" loading="lazy" />
            <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(4,13,26,0.4), transparent 60%)" }} />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-xs font-body font-medium truncate" style={{ color: "rgba(243,234,212,0.5)" }}>{img.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}