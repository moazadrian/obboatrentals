"use client";

import { fadeUpStagger, useGsap } from "@/lib/gsap";
import { REVIEWS } from "@/content/site-config";
import { StarIcon } from "@/components/ui/Icons";

export default function Reviews() {
  const containerRef = useGsap(() => {
    fadeUpStagger("[data-review-header] > *", { trigger: "[data-reviews-section]", stagger: 0.1 });
    fadeUpStagger("[data-review-card]", { trigger: "[data-reviews-grid]", stagger: 0.12, y: 40 });
  });

  return (
    <section ref={containerRef} data-reviews-section className="relative" style={{ padding: "var(--spacing-section) 0" }}>
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--color-navy-950), rgba(10,22,40,0.3), var(--color-navy-950))" }} />

      <div className="relative container-site">
        <div data-review-header className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <p className="section-label" style={{ opacity: 0 }}>What They&apos;re Saying</p>
          <h2 className="font-display text-section" style={{ color: "var(--color-sand-50)", opacity: 0 }}>Trusted by Gulf Coast Visitors</h2>
        </div>

        <div data-reviews-grid className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {REVIEWS.map((review, i) => (
            <blockquote key={i} data-review-card className="group relative p-8 rounded-2xl cursor-default"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.04)",
                transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
                opacity: 0,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-6px)";
                el.style.background = "rgba(255,255,255,0.05)";
                el.style.borderColor = "rgba(77,208,200,0.2)";
                el.style.boxShadow = "0 20px 50px -12px rgba(0,0,0,0.4), 0 0 30px -10px rgba(77,208,200,0.08)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.background = "rgba(255,255,255,0.02)";
                el.style.borderColor = "rgba(255,255,255,0.04)";
                el.style.boxShadow = "none";
              }}>
              {/* Stars — shift to teal on hover */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <StarIcon key={j} size={16} className="text-accent group-hover:text-teal-400 transition-colors duration-400" />
                ))}
              </div>
              {/* Quote text — brightens on hover */}
              <p className="text-sm leading-relaxed italic mb-6 group-hover:text-[rgba(243,234,212,0.75)]" style={{ color: "rgba(243,234,212,0.5)", transition: "color 0.4s ease" }}>
                &ldquo;{review.text}&rdquo;
              </p>
              <footer><cite className="not-italic font-body font-semibold text-sm" style={{ color: "var(--color-sand-100)" }}>{review.name}</cite></footer>
              {/* Big quote mark — teal glow on hover */}
              <div className="absolute top-5 right-6 font-display leading-none select-none pointer-events-none group-hover:text-[rgba(77,208,200,0.08)]" style={{ fontSize: "3.5rem", color: "rgba(255,255,255,0.03)", transition: "color 0.5s ease" }}>&ldquo;</div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}