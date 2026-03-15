"use client";

import Image from "next/image";
import Link from "next/link";
import { useBooking } from "@/lib/booking-context";
import { fadeUpStagger, useGsap } from "@/lib/gsap";
import { BOATS_HERO, BOAT_SPECS, BOAT_COMFORT_FEATURES, BOAT_SAFETY_FEATURES, BOAT_GALLERY } from "@/content/boats";
import {
  RestroomIcon, AnchorIcon, SeatIcon, SpeakerIcon, ShieldIcon, ClockIcon, UsersIcon,
} from "@/components/ui/Icons";

const ICON_MAP: Record<string, React.FC<{ className?: string; size?: number }>> = {
  restroom: RestroomIcon, seating: SeatIcon, stereo: SpeakerIcon,
  stable: AnchorIcon, anchor: AnchorIcon, shield: ShieldIcon,
};

const SPEC_ITEMS = [
  { label: "Type", value: BOAT_SPECS.type, Icon: AnchorIcon },
  { label: "Capacity", value: BOAT_SPECS.capacity, Icon: UsersIcon },
  { label: "Engine", value: BOAT_SPECS.engine, Icon: ClockIcon },
  { label: "Length", value: BOAT_SPECS.length, Icon: ShieldIcon },
];

export default function BoatsContent() {
  const { open } = useBooking();

  const containerRef = useGsap(() => {
    fadeUpStagger("[data-boats-header] > *", { trigger: "[data-boats-hero]", stagger: 0.1 });
    fadeUpStagger("[data-spec-card]", { trigger: "[data-specs]", stagger: 0.1, y: 30 });
    fadeUpStagger("[data-comfort-card]", { trigger: "[data-comfort]", stagger: 0.08, y: 30 });
    fadeUpStagger("[data-safety-card]", { trigger: "[data-safety]", stagger: 0.1, y: 30 });
    fadeUpStagger("[data-gallery-img]", { trigger: "[data-boat-gallery]", stagger: 0.1, y: 30 });
  });

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section data-boats-hero className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <Image src={BOATS_HERO.image} alt="" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(4,13,26,0.7), rgba(4,13,26,0.85))" }} />
        <div className="relative container-site">
          <div data-boats-header className="text-center max-w-2xl mx-auto">
            <p className="section-label gsap-hidden">Premium Pontoons</p>
            <h1 className="font-display text-section gsap-hidden" style={{ color: "var(--color-sand-50)" }}>
              {BOATS_HERO.headline}
            </h1>
            <p className="mt-4 leading-relaxed gsap-hidden" style={{ color: "rgba(243,234,212,0.5)" }}>
              {BOATS_HERO.subhead}
            </p>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section data-specs className="relative" style={{ padding: "var(--spacing-section) 0", background: "var(--color-navy-950)" }}>
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="section-label">At a Glance</p>
            <h2 className="font-display text-section" style={{ color: "var(--color-sand-50)" }}>Boat Specifications</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto">
            {SPEC_ITEMS.map((spec) => (
              <div key={spec.label} data-spec-card className="p-6 rounded-2xl text-center gsap-hidden" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
                <div className="flex justify-center mb-3" style={{ color: "var(--color-teal-400)" }}>
                  <spec.Icon size={24} />
                </div>
                <p className="font-body font-semibold text-sm mb-1" style={{ color: "var(--color-sand-50)" }}>{spec.value}</p>
                <p className="text-xs" style={{ color: "rgba(243,234,212,0.4)" }}>{spec.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comfort Features */}
      <section data-comfort className="relative" style={{ padding: "var(--spacing-section) 0" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--color-navy-950), rgba(10,22,40,0.3), var(--color-navy-950))" }} />
        <div className="relative container-site">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="section-label">Comfort & Amenities</p>
            <h2 className="font-display text-section" style={{ color: "var(--color-sand-50)" }}>Built for Your Comfort</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-5xl mx-auto">
            {BOAT_COMFORT_FEATURES.map((feat) => {
              const IconComp = ICON_MAP[feat.icon];
              return (
                <div key={feat.id} data-comfort-card className="p-6 rounded-2xl gsap-hidden" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(43,181,173,0.1)", color: "var(--color-teal-400)" }}>
                      {IconComp && <IconComp size={20} />}
                    </div>
                    <h3 className="font-body font-semibold text-sm" style={{ color: "var(--color-sand-100)" }}>{feat.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(243,234,212,0.45)" }}>{feat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section data-safety className="relative" style={{ padding: "var(--spacing-section) 0", background: "var(--color-navy-950)" }}>
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="section-label">Safety First</p>
            <h2 className="font-display text-section" style={{ color: "var(--color-sand-50)" }}>Your Safety, Our Priority</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 max-w-4xl mx-auto">
            {BOAT_SAFETY_FEATURES.map((feat) => {
              const IconComp = ICON_MAP[feat.icon];
              return (
                <div key={feat.id} data-safety-card className="p-6 rounded-2xl flex gap-4 gsap-hidden" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
                  <div className="flex-shrink-0 mt-1" style={{ color: "var(--color-accent)" }}>
                    {IconComp && <IconComp size={22} />}
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-sm mb-1" style={{ color: "var(--color-sand-100)" }}>{feat.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(243,234,212,0.45)" }}>{feat.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section data-boat-gallery className="relative" style={{ padding: "var(--spacing-section) 0" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--color-navy-950), rgba(10,22,40,0.4))" }} />
        <div className="relative container-site">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="section-label">See for Yourself</p>
            <h2 className="font-display text-section" style={{ color: "var(--color-sand-50)" }}>Boat Gallery</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4 max-w-5xl mx-auto">
            {BOAT_GALLERY.map((img, i) => (
              <div key={i} data-gallery-img className="relative rounded-2xl overflow-hidden gsap-hidden" style={{ aspectRatio: "4/3" }}>
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative" style={{ padding: "var(--spacing-section) 0", background: "var(--color-navy-950)" }}>
        <div className="container-site text-center max-w-xl">
          <h2 className="font-display text-section" style={{ color: "var(--color-sand-50)" }}>Ready to Get on the Water?</h2>
          <p className="mt-4 leading-relaxed mb-8" style={{ color: "rgba(243,234,212,0.5)" }}>
            Book your premium boat rental today. Spots fill up fast during peak season.
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
