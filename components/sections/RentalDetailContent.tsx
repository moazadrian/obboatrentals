"use client";

import Link from "next/link";
import Image from "next/image";
import { useBooking } from "@/lib/booking-context";
import { fadeUpStagger, useGsap } from "@/lib/gsap";
import { type RentalProduct, RENTAL_INCLUSIONS } from "@/content/rentals";
import {
  ClockIcon, UsersIcon, ShieldIcon, RestroomIcon, AnchorIcon, SeatIcon, SpeakerIcon, ChevronRightIcon,
} from "@/components/ui/Icons";

const ICON_MAP: Record<string, React.FC<{ className?: string; size?: number }>> = {
  shield: ShieldIcon, restroom: RestroomIcon, anchor: AnchorIcon,
  seating: SeatIcon, stereo: SpeakerIcon, stable: AnchorIcon,
};

export default function RentalDetailContent({ rental }: { rental: RentalProduct }) {
  const { open } = useBooking();

  const containerRef = useGsap(() => {
    fadeUpStagger("[data-detail-header] > *", { trigger: "[data-detail-hero]", stagger: 0.1 });
    fadeUpStagger("[data-who-item]", { trigger: "[data-who-section]", stagger: 0.08, y: 20 });
    fadeUpStagger("[data-timeline-item]", { trigger: "[data-timeline]", stagger: 0.1, y: 30 });
    fadeUpStagger("[data-step-card]", { trigger: "[data-itinerary]", stagger: 0.1, y: 30 });
    fadeUpStagger("[data-incl-item]", { trigger: "[data-inclusions]", stagger: 0.06, y: 20 });
  });

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section data-detail-hero className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <Image src={rental.image} alt={rental.title} fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(4,13,26,0.7), rgba(4,13,26,0.85))" }} />
        <div className="relative container-site">
          <div data-detail-header className="text-center max-w-2xl mx-auto">
            <p className="section-label gsap-hidden">{rental.duration} · Up to {rental.maxPax} Guests</p>
            <h1 className="font-display text-section gsap-hidden" style={{ color: "var(--color-sand-50)" }}>
              {rental.title}
            </h1>
            <p className="mt-4 leading-relaxed gsap-hidden" style={{ color: "rgba(243,234,212,0.5)" }}>
              {rental.description}
            </p>
            <div className="mt-6 flex items-center justify-center gap-6 gsap-hidden">
              <div className="flex items-center gap-2">
                <ClockIcon size={16} className="opacity-40" />
                <span className="text-sm" style={{ color: "rgba(243,234,212,0.6)" }}>{rental.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <UsersIcon size={16} className="opacity-40" />
                <span className="text-sm" style={{ color: "rgba(243,234,212,0.6)" }}>Up to {rental.maxPax} guests</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldIcon size={16} className="opacity-40" />
                <span className="text-sm" style={{ color: "rgba(243,234,212,0.6)" }}>Age {rental.minAge}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section data-who-section className="relative" style={{ padding: "var(--spacing-section) 0", background: "var(--color-navy-950)" }}>
        <div className="container-site max-w-2xl">
          <div className="text-center mb-12 md:mb-16">
            <p className="section-label">Perfect For</p>
            <h2 className="font-display text-section" style={{ color: "var(--color-sand-50)" }}>Who It&apos;s For</h2>
          </div>
          <div className="space-y-3">
            {rental.whoItsFor.map((item, i) => (
              <div key={i} data-who-item className="flex items-center gap-4 p-4 rounded-xl gsap-hidden" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(43,181,173,0.1)", color: "var(--color-teal-400)" }}>
                  <ChevronRightIcon size={14} />
                </div>
                <p className="font-body font-medium text-sm" style={{ color: "rgba(243,234,212,0.7)" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Perfect Day Timeline */}
      <section data-timeline className="relative" style={{ padding: "var(--spacing-section) 0" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--color-navy-950), rgba(10,22,40,0.3), var(--color-navy-950))" }} />
        <div className="relative container-site max-w-2xl">
          <div className="text-center mb-12 md:mb-16">
            <p className="section-label">Sample Itinerary</p>
            <h2 className="font-display text-section" style={{ color: "var(--color-sand-50)" }}>Your Perfect Day</h2>
          </div>
          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-px" style={{ background: "rgba(77,208,200,0.15)" }} />
            <div className="space-y-6">
              {rental.perfectDay.map((entry, i) => (
                <div key={i} data-timeline-item className="flex gap-5 gsap-hidden">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center relative z-10" style={{ background: "var(--color-navy-950)", border: "2px solid rgba(77,208,200,0.3)" }}>
                    <ClockIcon size={14} className="text-teal-400" />
                  </div>
                  <div className="pt-1.5">
                    <p className="font-body font-semibold text-xs mb-1" style={{ color: "var(--color-teal-400)" }}>{entry.time}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(243,234,212,0.6)" }}>{entry.activity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section data-itinerary className="relative" style={{ padding: "var(--spacing-section) 0", background: "var(--color-navy-950)" }}>
        <div className="container-site max-w-3xl">
          <div className="text-center mb-12 md:mb-16">
            <p className="section-label">Step by Step</p>
            <h2 className="font-display text-section" style={{ color: "var(--color-sand-50)" }}>How It Works</h2>
          </div>
          <div className={`grid grid-cols-1 sm:grid-cols-2 ${rental.itinerary.length > 4 ? "lg:grid-cols-3" : ""} gap-4 lg:gap-6`}>
            {rental.itinerary.map((step) => (
              <div key={step.step} data-step-card className="p-6 rounded-2xl gsap-hidden" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{ background: "rgba(43,181,173,0.1)" }}>
                  <span className="font-body font-bold text-xs" style={{ color: "var(--color-teal-400)" }}>{step.step}</span>
                </div>
                <h3 className="font-body font-semibold text-sm mb-1" style={{ color: "var(--color-sand-100)" }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(243,234,212,0.45)" }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section data-inclusions className="relative" style={{ padding: "var(--spacing-section) 0" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--color-navy-950), rgba(10,22,40,0.3), var(--color-navy-950))" }} />
        <div className="relative container-site">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="section-label">Every Rental Includes</p>
            <h2 className="font-display text-section" style={{ color: "var(--color-sand-50)" }}>What&apos;s Included</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto">
            {RENTAL_INCLUSIONS.map((item) => {
              const IconComp = ICON_MAP[item.icon];
              return (
                <div key={item.label} data-incl-item className="p-5 rounded-2xl text-center gsap-hidden" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
                  <div className="flex justify-center mb-3" style={{ color: "var(--color-teal-400)" }}>
                    {IconComp && <IconComp size={24} />}
                  </div>
                  <p className="font-body font-medium text-xs leading-snug" style={{ color: "rgba(250,245,235,0.7)" }}>{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative" style={{ padding: "var(--spacing-section) 0", background: "var(--color-navy-950)" }}>
        <div className="container-site text-center max-w-xl">
          <h2 className="font-display text-section" style={{ color: "var(--color-sand-50)" }}>Book Your {rental.shortTitle}</h2>
          <p className="mt-4 leading-relaxed mb-8" style={{ color: "rgba(243,234,212,0.5)" }}>
            {rental.tagline} Spots fill up fast during peak season.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={open} className="btn-primary text-sm">Book {rental.shortTitle}</button>
            <Link href="/rentals" className="btn-outline text-sm">View All Rentals</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
