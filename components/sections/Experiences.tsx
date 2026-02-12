"use client";

import Image from "next/image";
import { fadeUpStagger, useGsap } from "@/lib/gsap";
import { EXPERIENCES } from "@/content/site-config";
import { useBooking } from "@/lib/booking-context";

export default function Experiences() {
  const { open } = useBooking();

  const containerRef = useGsap(() => {
    fadeUpStagger("[data-exp-header] > *", { trigger: "[data-exp-section]", stagger: 0.1 });
    fadeUpStagger("[data-exp-card]", { trigger: "[data-exp-section]", stagger: 0.15, y: 60 });
  });

  return (
    <section
      ref={containerRef}
      id="experiences"
      data-exp-section
      className="relative"
      style={{ padding: "var(--spacing-section) 0", background: "var(--color-navy-950)" }}
    >
      <div className="container-site">
        <div data-exp-header className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="section-label" style={{ opacity: 0 }}>Choose Your Experience</p>
          <h2 className="font-display text-section" style={{ color: "var(--color-sand-50)", opacity: 0 }}>
            Three Ways to Get on the Water
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {EXPERIENCES.map((exp) => (
            <article
              key={exp.id}
              data-exp-card
              className="group relative rounded-2xl overflow-hidden"
              style={{
                background: "rgba(15,32,56,0.4)",
                border: "1px solid rgba(255,255,255,0.04)",
                transition: "all 0.7s var(--ease-luxe)",
                opacity: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 24px 64px -12px rgba(0,0,0,0.5)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)";
              }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover"
                  style={{ transition: "transform 0.7s var(--ease-luxe)" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(4,13,26,0.8), rgba(4,13,26,0.15), transparent)" }} />
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full glass text-xs font-body font-semibold" style={{ color: "var(--color-sand-50)" }}>
                  {exp.duration}
                </div>
              </div>

              <div className="p-6 lg:p-8">
                <h3 className="font-display text-2xl mb-2" style={{ color: "var(--color-sand-50)" }}>{exp.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(243,234,212,0.45)" }}>{exp.tagline}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.badges.map((badge) => (
                    <span
                      key={badge}
                      className="font-body font-medium uppercase px-3 py-1 rounded-full"
                      style={{ fontSize: "0.68rem", letterSpacing: "0.06em", border: "1px solid rgba(255,255,255,0.06)", color: "rgba(243,234,212,0.35)" }}
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <button
                  onClick={open}
                  className="w-full py-3 rounded-xl text-sm font-body font-semibold"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    color: "var(--color-sand-100)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    cursor: "pointer",
                    transition: "all 0.5s var(--ease-luxe)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--color-teal-500)";
                    e.currentTarget.style.color = "var(--color-navy-950)";
                    e.currentTarget.style.borderColor = "var(--color-teal-500)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    e.currentTarget.style.color = "var(--color-sand-100)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  }}
                >
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}