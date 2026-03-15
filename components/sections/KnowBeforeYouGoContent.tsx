"use client";

import Link from "next/link";
import { useBooking } from "@/lib/booking-context";
import { fadeUpStagger, useGsap } from "@/lib/gsap";
import { RENTAL_REQUIREMENTS, RENTAL_BRING, RENTAL_FAQS } from "@/content/rentals";
import FaqAccordion from "@/components/ui/FaqAccordion";
import {
  ShieldIcon, AnchorIcon, SeatIcon, ChevronRightIcon,
} from "@/components/ui/Icons";

const ICON_MAP: Record<string, React.FC<{ className?: string; size?: number }>> = {
  shield: ShieldIcon, anchor: AnchorIcon, seating: SeatIcon, stable: AnchorIcon,
};

export default function KnowBeforeYouGoContent() {
  const { open } = useBooking();

  const containerRef = useGsap(() => {
    fadeUpStagger("[data-kbyg-header] > *", { trigger: "[data-kbyg-hero]", stagger: 0.1 });
    fadeUpStagger("[data-req-card]", { trigger: "[data-requirements]", stagger: 0.1, y: 30 });
    fadeUpStagger("[data-bring-item]", { trigger: "[data-bring-list]", stagger: 0.06, y: 20 });
    fadeUpStagger("[data-faq-section] > *", { trigger: "[data-faq-section]", stagger: 0.1, y: 30 });
  });

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section data-kbyg-hero className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--color-navy-950), rgba(10,22,40,0.6))" }} />
        <div className="relative container-site">
          <div data-kbyg-header className="text-center max-w-2xl mx-auto">
            <p className="section-label gsap-hidden">Before You Board</p>
            <h1 className="font-display text-section gsap-hidden" style={{ color: "var(--color-sand-50)" }}>
              Know Before You Go
            </h1>
            <p className="mt-4 leading-relaxed gsap-hidden" style={{ color: "rgba(243,234,212,0.5)" }}>
              Requirements, what to bring, FAQs, and everything you need for your trip.
            </p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section data-requirements className="relative" style={{ padding: "var(--spacing-section) 0", background: "var(--color-navy-950)" }}>
        <div className="container-site max-w-3xl">
          <div className="text-center mb-12 md:mb-16">
            <p className="section-label">Requirements</p>
            <h2 className="font-display text-section" style={{ color: "var(--color-sand-50)" }}>
              {RENTAL_REQUIREMENTS.headline}
            </h2>
            <p className="mt-4 leading-relaxed" style={{ color: "rgba(243,234,212,0.45)" }}>
              {RENTAL_REQUIREMENTS.subhead}
            </p>
          </div>
          <div className="space-y-4">
            {RENTAL_REQUIREMENTS.items.map((req) => {
              const IconComp = ICON_MAP[req.icon];
              return (
                <div key={req.title} data-req-card className="p-6 rounded-2xl flex gap-4 gsap-hidden" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
                  <div className="flex-shrink-0 mt-1" style={{ color: "var(--color-accent)" }}>
                    {IconComp && <IconComp size={22} />}
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-sm mb-1" style={{ color: "var(--color-sand-100)" }}>{req.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(243,234,212,0.45)" }}>{req.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section data-bring-list className="relative" style={{ padding: "var(--spacing-section) 0" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--color-navy-950), rgba(10,22,40,0.3), var(--color-navy-950))" }} />
        <div className="relative container-site max-w-2xl">
          <div className="text-center mb-12 md:mb-16">
            <p className="section-label">Pack Smart</p>
            <h2 className="font-display text-section" style={{ color: "var(--color-sand-50)" }}>What to Bring</h2>
          </div>
          <div className="space-y-3">
            {RENTAL_BRING.map((item, i) => (
              <div key={i} data-bring-item className="flex items-center gap-4 p-4 rounded-xl gsap-hidden" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(43,181,173,0.1)", color: "var(--color-teal-400)" }}>
                  <ChevronRightIcon size={14} />
                </div>
                <p className="font-body font-medium text-sm" style={{ color: "rgba(243,234,212,0.7)" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section data-faq-section className="relative" style={{ padding: "var(--spacing-section) 0", background: "var(--color-navy-950)" }}>
        <div className="container-site max-w-2xl">
          <div className="text-center mb-12 md:mb-16 gsap-hidden">
            <p className="section-label">Common Questions</p>
            <h2 className="font-display text-section" style={{ color: "var(--color-sand-50)" }}>Frequently Asked Questions</h2>
          </div>
          <div className="gsap-hidden">
            <FaqAccordion items={RENTAL_FAQS} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative" style={{ padding: "var(--spacing-section) 0" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--color-navy-950), rgba(10,22,40,0.4))" }} />
        <div className="relative container-site text-center max-w-xl">
          <h2 className="font-display text-section" style={{ color: "var(--color-sand-50)" }}>Ready to Book?</h2>
          <p className="mt-4 leading-relaxed mb-8" style={{ color: "rgba(243,234,212,0.5)" }}>
            Now that you know the details, let&apos;s get you on the water.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={open} className="btn-primary text-sm">Book Now</button>
            <Link href="/rentals" className="btn-outline text-sm">View Rentals</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
