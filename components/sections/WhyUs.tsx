"use client";

import { fadeUpStagger, useGsap } from "@/lib/gsap";
import { WHY_US } from "@/content/site-config";
import { WHY_US_ICONS } from "@/components/ui/Icons";

export default function WhyUs() {
  const containerRef = useGsap(() => {
    fadeUpStagger("[data-why-header] > *", { trigger: "[data-why-section]", stagger: 0.1 });
    fadeUpStagger("[data-why-badge]", { trigger: "[data-why-grid]", stagger: 0.08, y: 24 });
  });

  return (
    <section ref={containerRef} data-why-section className="relative overflow-hidden" style={{ padding: "var(--spacing-section) 0" }}>
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--color-navy-950), rgba(10,22,40,0.5), var(--color-navy-950))" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none" style={{ width: 600, height: 600, background: "rgba(43,181,173,0.03)", filter: "blur(120px)" }} />

      <div className="relative container-site">
        <div data-why-header className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <p className="section-label" style={{ opacity: 0 }}>The OB Difference</p>
          <h2 className="font-display text-section" style={{ color: "var(--color-sand-50)", opacity: 0 }}>Not Your Average Rental</h2>
          <p className="mt-4 leading-relaxed" style={{ color: "rgba(243,234,212,0.45)", opacity: 0 }}>
            Every detail is considered — from the premium leather seating to the full restroom onboard. This is boating done right.
          </p>
        </div>

        <div data-why-grid className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto">
          {WHY_US.map((item) => {
            const IconComp = WHY_US_ICONS[item.id];
            return (
              <div key={item.id} data-why-badge className="group relative p-6 lg:p-8 rounded-2xl text-center overflow-hidden cursor-default"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.04)",
                  transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
                  opacity: 0,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(-5px)";
                  el.style.background = "rgba(255,255,255,0.05)";
                  el.style.borderColor = "rgba(77,208,200,0.25)";
                  el.style.boxShadow = "0 16px 40px -10px rgba(0,0,0,0.35), 0 0 24px -8px rgba(77,208,200,0.1)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(0)";
                  el.style.background = "rgba(255,255,255,0.02)";
                  el.style.borderColor = "rgba(255,255,255,0.04)";
                  el.style.boxShadow = "none";
                }}>

                {/* Radial glow — appears on hover behind the icon */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none opacity-0 group-hover:opacity-100"
                  style={{
                    width: 120,
                    height: 120,
                    background: "radial-gradient(circle, rgba(77,208,200,0.12) 0%, transparent 70%)",
                    transition: "opacity 0.6s ease",
                  }}
                />

                {/* Icon — scales up + subtle rotate on hover */}
                <div
                  className="relative flex justify-center mb-4 group-hover:scale-110 group-hover:-rotate-3"
                  style={{
                    color: "var(--color-teal-400)",
                    transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1), color 0.4s ease",
                  }}
                >
                  {IconComp && <IconComp size={28} />}
                </div>

                {/* Label — brightens on hover */}
                <p
                  className="relative font-body font-medium text-sm leading-snug group-hover:text-[rgba(250,245,235,0.95)]"
                  style={{ color: "rgba(250,245,235,0.65)", transition: "color 0.4s ease" }}
                >
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}