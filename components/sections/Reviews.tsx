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
            <blockquote key={i} data-review-card className="relative p-8 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)", transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)", opacity: 0 }}>
              <div className="flex gap-1 mb-5">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <StarIcon key={j} className="text-accent" size={16} />
                ))}
              </div>
              <p className="text-sm leading-relaxed italic mb-6" style={{ color: "rgba(243,234,212,0.5)" }}>&ldquo;{review.text}&rdquo;</p>
              <footer><cite className="not-italic font-body font-semibold text-sm" style={{ color: "var(--color-sand-100)" }}>{review.name}</cite></footer>
              <div className="absolute top-5 right-6 font-display leading-none select-none pointer-events-none" style={{ fontSize: "3.5rem", color: "rgba(255,255,255,0.03)" }}>&ldquo;</div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}