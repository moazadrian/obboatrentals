"use client";

import Link from "next/link";
import Image from "next/image";
import { fadeUpStagger, useGsap } from "@/lib/gsap";
import { useBooking } from "@/lib/booking-context";
import { RENTAL_PRODUCTS, RENTAL_INCLUSIONS, RENTAL_REQUIREMENTS } from "@/content/rentals";
import {
  ClockIcon, UsersIcon, RestroomIcon, SpeakerIcon, ShieldIcon, AnchorIcon, SeatIcon, ChevronRightIcon, PawIcon, CoolerIcon,
} from "@/components/ui/Icons";

const ICON_MAP: Record<string, React.FC<{ className?: string; size?: number }>> = {
  shield: ShieldIcon, restroom: RestroomIcon, anchor: AnchorIcon,
  seating: SeatIcon, stereo: SpeakerIcon, stable: AnchorIcon,
  pet: PawIcon, cooler: CoolerIcon,
};

export default function RentalsContent() {
  const { open } = useBooking();

  const containerRef = useGsap(() => {
    fadeUpStagger("[data-rentals-header] > *", { trigger: "[data-rentals-section]", stagger: 0.1 });
    fadeUpStagger("[data-rental-card]", { trigger: "[data-rental-cards]", stagger: 0.15, y: 40 });
    fadeUpStagger("[data-inclusion-item]", { trigger: "[data-inclusions]", stagger: 0.06, y: 20 });
    fadeUpStagger("[data-req-item]", { trigger: "[data-requirements]", stagger: 0.1, y: 30 });
  });

  return (
    <div ref={containerRef}>
      {/* ── Hero ── */}
      <section data-rentals-section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--color-navy-950), rgba(10,22,40,0.6))" }} />
        <div className="relative container-site">
          <div data-rentals-header className="text-center max-w-2xl mx-auto">
            <p className="section-label gsap-hidden">Choose Your Experience</p>
            <h1 className="font-display text-section gsap-hidden" style={{ color: "var(--color-sand-50)" }}>
              Boat Rentals in Orange Beach
            </h1>
            <p className="mt-4 leading-relaxed gsap-hidden" style={{ color: "rgba(243,234,212,0.5)" }}>
              Pristine Leisure Cat catamarans, fully equipped and ready for your adventure. The area's only boats with bathrooms.
            </p>
          </div>
        </div>
      </section>

      {/* ── Comparison Cards ── */}
      <section className="relative" style={{ padding: "var(--spacing-section) 0", background: "var(--color-navy-950)" }}>
        <div className="container-site">
          <div data-rental-cards className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {RENTAL_PRODUCTS.map((rental) => (
              <article
                key={rental.id}
                data-rental-card
                className="group relative rounded-2xl overflow-hidden gsap-hidden"
                style={{
                  background: "rgba(15,32,56,0.4)",
                  border: "1px solid rgba(255,255,255,0.04)",
                  transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(-6px)";
                  el.style.borderColor = "rgba(77,208,200,0.2)";
                  el.style.boxShadow = "0 20px 50px -12px rgba(0,0,0,0.4), 0 0 30px -10px rgba(77,208,200,0.08)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(0)";
                  el.style.borderColor = "rgba(255,255,255,0.04)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src={rental.image}
                    alt={rental.title}
                    fill
                    className="object-cover group-hover:scale-105"
                    style={{ transition: "transform 6s cubic-bezier(0.16,1,0.3,1)" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(4,13,26,0.8), transparent)" }} />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-body font-semibold" style={{ background: "var(--color-teal-500)", color: "var(--color-navy-950)" }}>
                    {rental.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <h2 className="font-display text-2xl lg:text-3xl mb-2" style={{ color: "var(--color-sand-50)" }}>
                    {rental.title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(243,234,212,0.5)" }}>
                    {rental.tagline}
                  </p>

                  {/* Quick specs */}
                  <div className="grid grid-cols-2 gap-3 mb-6 pb-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <div className="flex items-center gap-2">
                      <ClockIcon size={16} className="opacity-40" />
                      <span className="text-sm font-medium" style={{ color: "rgba(243,234,212,0.6)" }}>{rental.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <UsersIcon size={16} className="opacity-40" />
                      <span className="text-sm font-medium" style={{ color: "rgba(243,234,212,0.6)" }}>Up to {rental.maxPax} guests</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldIcon size={16} className="opacity-40" />
                      <span className="text-sm font-medium" style={{ color: "rgba(243,234,212,0.6)" }}>Age {rental.minAge}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <RestroomIcon size={16} className="opacity-40" />
                      <span className="text-sm font-medium" style={{ color: "rgba(243,234,212,0.6)" }}>Restroom onboard</span>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button onClick={() => open(rental.bookingUrl)} className="btn-primary flex-1 text-center text-sm whitespace-nowrap">
                      Book {rental.shortTitle}
                    </button>
                    <Link href={`/rentals/${rental.slug}`} className="btn-outline flex-1 text-center text-sm flex items-center justify-center gap-1 whitespace-nowrap">
                      Details <ChevronRightIcon size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section data-inclusions className="relative" style={{ padding: "var(--spacing-section) 0" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--color-navy-950), rgba(10,22,40,0.3), var(--color-navy-950))" }} />
        <div className="relative container-site">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="section-label">Every Rental Includes</p>
            <h2 className="font-display text-section" style={{ color: "var(--color-sand-50)" }}>
              Fully Equipped, Ready to Go
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto">
            {RENTAL_INCLUSIONS.map((item) => {
              const IconComp = ICON_MAP[item.icon];
              return (
                <div key={item.label} data-inclusion-item className="p-5 rounded-2xl text-center gsap-hidden" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
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

      {/* ── Requirements Callout ── */}
      <section data-requirements className="relative" style={{ padding: "var(--spacing-section) 0", background: "var(--color-navy-950)" }}>
        <div className="container-site max-w-3xl">
          <div className="text-center mb-12 md:mb-16">
            <p className="section-label">Before You Book</p>
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
                <div key={req.title} data-req-item className="p-6 rounded-2xl flex gap-4 gsap-hidden" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
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
          <div className="text-center mt-10">
            <Link href="/know-before-you-go" className="btn-outline text-sm">Full Details — Know Before You Go</Link>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="relative" style={{ padding: "var(--spacing-section) 0" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--color-navy-950), rgba(10,22,40,0.4))" }} />
        <div className="relative container-site text-center max-w-xl">
          <h2 className="font-display text-section" style={{ color: "var(--color-sand-50)" }}>
            Ready to Get on the Water?
          </h2>
          <p className="mt-4 leading-relaxed mb-8" style={{ color: "rgba(243,234,212,0.5)" }}>
            Book your premium boat rental today. Spots fill up fast during peak season.
          </p>
          <button onClick={() => open()} className="btn-primary text-sm">Book Now</button>
        </div>
      </section>

      {/* ── Mobile Sticky CTA ── */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-4 pb-6" style={{ background: "linear-gradient(to top, var(--color-navy-950), rgba(4,13,26,0.95) 80%, transparent)" }}>
        <button onClick={() => open()} className="btn-primary w-full py-4 text-sm">Book Your Rental</button>
      </div>
    </div>
  );
}