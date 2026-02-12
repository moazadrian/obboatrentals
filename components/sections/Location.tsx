"use client";

import Image from "next/image";
import { clipReveal, fadeUpStagger, useGsap } from "@/lib/gsap";
import { LOCATION } from "@/content/site-config";
import { useBooking } from "@/lib/booking-context";

export default function Location() {
  const { open } = useBooking();

  const containerRef = useGsap(() => {
    fadeUpStagger("[data-loc-content] > *", { trigger: "[data-loc-section]", stagger: 0.12, y: 40 });
    clipReveal("[data-loc-image]", { trigger: "[data-loc-section]", direction: "right", duration: 1.2 });
  });

  return (
    <section ref={containerRef} data-loc-section style={{ padding: "var(--spacing-section) 0", background: "var(--color-navy-950)" }}>
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div data-loc-content>
            <p className="section-label" style={{ opacity: 0 }}>Our Location</p>
            <h2 className="font-display text-section" style={{ color: "var(--color-sand-50)", opacity: 0 }}>
              {LOCATION.tagline}
            </h2>
            <p className="mt-5 leading-relaxed max-w-md" style={{ color: "rgba(243,234,212,0.45)", opacity: 0 }}>
              {LOCATION.description}
            </p>
            <div className="mt-8" style={{ opacity: 0 }}>
              <button onClick={open} className="btn-primary">Plan Your Day</button>
            </div>
          </div>

          <div
            data-loc-image
            className="relative rounded-2xl overflow-hidden"
            style={{ aspectRatio: "4/3", background: "rgba(15,32,56,0.3)", clipPath: "inset(0% 100% 0% 0%)" }}
          >
            <Image src={LOCATION.image} alt={LOCATION.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" loading="lazy" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(4,13,26,0.3), transparent)" }} />
            <div className="absolute bottom-6 left-6 px-4 py-2 rounded-full glass">
              <span className="text-sm font-body font-medium" style={{ color: "var(--color-sand-50)" }}>📍 {LOCATION.name}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}