"use client";

import Link from "next/link";
import Image from "next/image";
import { fadeUpStagger, useGsap } from "@/lib/gsap";
import { PAGE_BACKGROUNDS, CONTACT, CRUISE_DETAILS } from "@/content/site-config";
import {
  ClockIcon, UsersIcon, ShieldIcon, ChevronRightIcon,
} from "@/components/ui/Icons";

export default function SunsetCruiseContent() {
  const containerRef = useGsap(() => {
    fadeUpStagger("[data-sunset-header] > *", { trigger: "[data-sunset-hero]", stagger: 0.1 });
    fadeUpStagger("[data-sunset-detail]", { trigger: "[data-sunset-details]", stagger: 0.1, y: 30 });
    fadeUpStagger("[data-highlight-item]", { trigger: "[data-highlights]", stagger: 0.08, y: 20 });
  });

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section data-sunset-hero className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <Image src={PAGE_BACKGROUNDS["sunset-cruise"]} alt="Sunset cruise on the Gulf Coast" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(4,13,26,0.6), rgba(4,13,26,0.85))" }} />
        <div className="relative container-site">
          <div data-sunset-header className="text-center max-w-2xl mx-auto">
            <p className="section-label gsap-hidden">{CRUISE_DETAILS.duration} · {CRUISE_DETAILS.capacity}</p>
            <h1 className="font-display text-section gsap-hidden" style={{ color: "var(--color-sand-50)" }}>
              {CRUISE_DETAILS.title}
            </h1>
            <p className="mt-4 leading-relaxed gsap-hidden" style={{ color: "rgba(243,234,212,0.5)" }}>
              {CRUISE_DETAILS.description}
            </p>
            <div className="mt-6 flex items-center justify-center gap-6 gsap-hidden">
              <div className="flex items-center gap-2">
                <ClockIcon size={16} className="opacity-40" />
                <span className="text-sm" style={{ color: "rgba(243,234,212,0.6)" }}>{CRUISE_DETAILS.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <UsersIcon size={16} className="opacity-40" />
                <span className="text-sm" style={{ color: "rgba(243,234,212,0.6)" }}>{CRUISE_DETAILS.capacity}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldIcon size={16} className="opacity-40" />
                <span className="text-sm" style={{ color: "rgba(243,234,212,0.6)" }}>{CRUISE_DETAILS.minAge}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section data-sunset-details className="relative" style={{ padding: "var(--spacing-section) 0", background: "var(--color-navy-950)" }}>
        <div className="container-site max-w-3xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
            <div data-sunset-detail className="p-6 rounded-2xl text-center gsap-hidden" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
              <p className="font-body font-semibold text-lg mb-1" style={{ color: "var(--color-accent)" }}>{CRUISE_DETAILS.price}</p>
              <p className="text-xs" style={{ color: "rgba(243,234,212,0.4)" }}>Per Cruise (Private)</p>
            </div>
            <div data-sunset-detail className="p-6 rounded-2xl text-center gsap-hidden" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
              <p className="font-body font-semibold text-lg mb-1" style={{ color: "var(--color-teal-400)" }}>{CRUISE_DETAILS.duration}</p>
              <p className="text-xs" style={{ color: "rgba(243,234,212,0.4)" }}>Cruise Duration</p>
            </div>
            <div data-sunset-detail className="p-6 rounded-2xl text-center gsap-hidden" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
              <p className="font-body font-semibold text-lg mb-1" style={{ color: "var(--color-sand-50)" }}>{CRUISE_DETAILS.boat}</p>
              <p className="text-xs" style={{ color: "rgba(243,234,212,0.4)" }}>Your Vessel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section data-highlights className="relative" style={{ padding: "var(--spacing-section) 0" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--color-navy-950), rgba(10,22,40,0.3), var(--color-navy-950))" }} />
        <div className="relative container-site max-w-2xl">
          <div className="text-center mb-12 md:mb-16">
            <p className="section-label">What to Expect</p>
            <h2 className="font-display text-section" style={{ color: "var(--color-sand-50)" }}>Cruise Highlights</h2>
          </div>
          <div className="space-y-3">
            {CRUISE_DETAILS.highlights.map((item, i) => (
              <div key={i} data-highlight-item className="flex items-center gap-4 p-4 rounded-xl gsap-hidden" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(232,165,75,0.1)", color: "var(--color-accent)" }}>
                  <ChevronRightIcon size={14} />
                </div>
                <p className="font-body font-medium text-sm" style={{ color: "rgba(243,234,212,0.7)" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative" style={{ padding: "var(--spacing-section) 0", background: "var(--color-navy-950)" }}>
        <div className="container-site text-center max-w-xl">
          <h2 className="font-display text-section" style={{ color: "var(--color-sand-50)" }}>Book Your Sunset Cruise</h2>
          <p className="mt-4 leading-relaxed mb-8" style={{ color: "rgba(243,234,212,0.5)" }}>
            Call us to reserve your private dolphin sunset cruise. Availability is limited, especially during peak season.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={CONTACT.phoneHref} className="btn-primary text-sm">Call {CONTACT.phone}</a>
            <Link href="/contact" className="btn-outline text-sm">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
