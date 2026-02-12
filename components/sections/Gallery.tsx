"use client";

import { fadeUpStagger, useGsap } from "@/lib/gsap";
import { WHY_US } from "@/content/site-config";

export default function WhyUs() {
  const containerRef = useGsap(() => {
    fadeUpStagger("[data-why-header] > *", { trigger: "[data-why-section]", stagger: 0.1 });
    fadeUpStagger("[data-why-badge]", { trigger: "[data-why-grid]", stagger: 0.08, y: 30 });
  });

  return (
    <section
      ref={containerRef}
      data-why-section
      className="relative overflow-hidden"
      style={{ padding: "var(--spacing-section) 0" }}
    >
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--color-navy-950), rgba(10,22,40,0.5), var(--color-navy-950))" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none" style={{ width: 600, height: 600, background: "rgba(43,181,173,0.03)", filter: "blur(120px)" }} />

      <div className="relative container-site">
        <div data-why-header className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <p className="section-label" style={{ opacity: 0 }}>The OB Difference</p>
          <h2 className="font-display text-section" style={{ color: "var(--color-sand-50)", opacity: 0 }}>
            Not Your Average Rental
          </h2>
          <p className="mt-4 leading-relaxed" style={{ color: "rgba(243,234,212,0.45)", opacity: 0 }}>
            Every detail is considered — from the premium leather seating to the full restroom onboard. This is boating done right.
          </p>
        </div>

        <div data-why-grid className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto">
          {WHY_US.map((item) => (
            <div
              key={item.label}
              data-why-badge
              className="group relative p-6 lg:p-8 rounded-2xl text-center"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.04)",
                transition: "all 0.5s var(--ease-luxe)",
                opacity: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)";
              }}
            >
              <div className="text-3xl mb-4" style={{ transition: "transform 0.5s var(--ease-luxe)" }}>{item.icon}</div>
              <p className="font-body font-medium text-sm leading-snug" style={{ color: "rgba(250,245,235,0.75)" }}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}