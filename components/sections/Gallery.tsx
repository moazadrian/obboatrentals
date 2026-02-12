"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/gsap";
import { GALLERY_IMAGES } from "@/content/site-config";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isDesktop;
}

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const filmstripRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const filmstrip = filmstripRef.current;
    const header = headerRef.current;
    if (!section || !filmstrip) return;

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
      // Header blur-fade
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

      // Desktop only: GSAP horizontal scroll with pin
      if (isDesktop) {
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
              end: () => `+=${scrollDistance * 0.8}`,
              scrub: 1,
              pin: true,
              pinReparent: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });
        }
      }
      // Mobile: no GSAP horizontal scroll — uses native overflow-x swipe
    }, section);

    return () => ctx.revert();
  }, [isDesktop]);

  return (
    <section
      ref={sectionRef}
      data-gallery-section
      className="relative overflow-hidden"
      style={{ padding: "var(--spacing-section) 0 0", background: "var(--color-navy-950)" }}
    >
      <div ref={headerRef} className="container-site mb-12 md:mb-16">
        <p className="section-label gsap-hidden">On the Water</p>
        <h2 className="font-display text-section gsap-hidden" style={{ color: "var(--color-sand-50)" }}>Life Looks Better from Here</h2>
      </div>

      {/*
        Mobile: overflow-x-auto for native swipe scrolling + snap
        Desktop: overflow visible, GSAP handles horizontal movement
      */}
      <div
        ref={filmstripRef}
        className={`flex gap-4 lg:gap-6 pl-5 md:pl-8 lg:pl-12 pr-5 md:pr-0 ${
          isDesktop
            ? ""
            : "overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        }`}
        style={{
          willChange: isDesktop ? "transform" : "auto",
          paddingBottom: "var(--spacing-section)",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {GALLERY_IMAGES.map((img, i) => (
          <div
            key={i}
            className={`relative flex-shrink-0 rounded-2xl overflow-hidden ${isDesktop ? "" : "snap-center"}`}
            style={{
              width: isDesktop ? "clamp(280px, 35vw, 480px)" : "80vw",
              aspectRatio: "3/4",
              background: "rgba(15,32,56,0.3)",
            }}
          >
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