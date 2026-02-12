"use client";

import Image from "next/image";
import gsap from "gsap";
import { useGsap } from "@/lib/gsap";
import { GALLERY_IMAGES } from "@/content/site-config";

export default function Gallery() {
  const containerRef = useGsap(() => {
    gsap.fromTo(
      "[data-gallery-header] > *",
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: "[data-gallery-section]", start: "top 80%" },
      }
    );

    const filmstrip = document.querySelector("[data-filmstrip]") as HTMLElement | null;
    if (!filmstrip) return;
    const scrollDist = filmstrip.scrollWidth - window.innerWidth + 80;

    gsap.to(filmstrip, {
      x: -scrollDist,
      ease: "none",
      scrollTrigger: {
        trigger: "[data-gallery-section]",
        start: "top 20%",
        end: () => `+=${scrollDist + 200}`,
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      },
    });

    document.querySelectorAll("[data-gallery-img]").forEach((img) => {
      gsap.to(img, {
        y: -20, ease: "none",
        scrollTrigger: { trigger: img.parentElement!, start: "top bottom", end: "bottom top", scrub: true },
      });
    });
  });

  return (
    <section
      ref={containerRef}
      data-gallery-section
      className="overflow-hidden"
      style={{ padding: "var(--spacing-section) 0", background: "var(--color-navy-950)" }}
    >
      <div data-gallery-header className="container-site mb-12 md:mb-16">
        <p className="section-label" style={{ opacity: 0 }}>On the Water</p>
        <h2 className="font-display text-section" style={{ color: "var(--color-sand-50)", opacity: 0 }}>
          Life Looks Better from Here
        </h2>
      </div>

      <div data-filmstrip className="flex gap-4 lg:gap-6 pl-5 md:pl-8 lg:pl-12 will-change-transform">
        {GALLERY_IMAGES.map((img, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 rounded-2xl overflow-hidden"
            style={{ width: "clamp(300px, 35vw, 480px)", aspectRatio: "3/4", background: "rgba(15,32,56,0.3)" }}
          >
            <Image data-gallery-img src={img.src} alt={img.alt} fill className="object-cover" sizes="480px" loading="lazy" />
            <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(4,13,26,0.4), transparent)" }} />
          </div>
        ))}
      </div>
    </section>
  );
}