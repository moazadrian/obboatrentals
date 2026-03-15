"use client";

import Link from "next/link";
import { fadeUpStagger, useGsap } from "@/lib/gsap";
import { CONTACT_HERO, CONTACT_INFO, DOCK_INFO, QUICK_ACTIONS } from "@/content/contact";
import {
  MapPinIcon, ClockIcon, FacebookIcon,
} from "@/components/ui/Icons";

const QUICK_ICON_MAP: Record<string, React.FC<{ className?: string; size?: number }>> = {
  phone: ClockIcon, email: MapPinIcon, map: MapPinIcon, facebook: FacebookIcon,
};

export default function ContactContent() {
  const containerRef = useGsap(() => {
    fadeUpStagger("[data-contact-header] > *", { trigger: "[data-contact-hero]", stagger: 0.1 });
    fadeUpStagger("[data-quick-action]", { trigger: "[data-quick-actions]", stagger: 0.1, y: 20 });
    fadeUpStagger("[data-contact-detail]", { trigger: "[data-contact-details]", stagger: 0.1, y: 30 });
    fadeUpStagger("[data-dock-card]", { trigger: "[data-dock-info]", stagger: 0.1, y: 30 });
  });

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section data-contact-hero className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--color-navy-950), rgba(10,22,40,0.6))" }} />
        <div className="relative container-site">
          <div data-contact-header className="text-center max-w-2xl mx-auto">
            <p className="section-label gsap-hidden">We&apos;re Here to Help</p>
            <h1 className="font-display text-section gsap-hidden" style={{ color: "var(--color-sand-50)" }}>
              {CONTACT_HERO.headline}
            </h1>
            <p className="mt-4 leading-relaxed gsap-hidden" style={{ color: "rgba(243,234,212,0.5)" }}>
              {CONTACT_HERO.subhead}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section data-quick-actions className="relative" style={{ padding: "var(--spacing-section) 0", background: "var(--color-navy-950)" }}>
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4 max-w-3xl mx-auto">
            {QUICK_ACTIONS.map((action) => (
              <a
                key={action.label}
                href={action.href}
                target={action.icon === "facebook" || action.icon === "map" ? "_blank" : undefined}
                rel={action.icon === "facebook" || action.icon === "map" ? "noopener noreferrer" : undefined}
                data-quick-action
                className="p-5 rounded-2xl text-center gsap-hidden"
                style={{
                  background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
                  transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)", cursor: "pointer", textDecoration: "none",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.borderColor = "rgba(77,208,200,0.3)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div className="flex justify-center mb-3" style={{ color: "var(--color-teal-400)" }}>
                  {(() => { const Ic = QUICK_ICON_MAP[action.icon]; return Ic ? <Ic size={24} /> : null; })()}
                </div>
                <p className="font-body font-semibold text-sm" style={{ color: "var(--color-sand-50)" }}>{action.label}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Details + Map */}
      <section data-contact-details className="relative" style={{ padding: "var(--spacing-section) 0" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--color-navy-950), rgba(10,22,40,0.3), var(--color-navy-950))" }} />
        <div className="relative container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-start">
            <div className="space-y-6">
              <div data-contact-detail className="p-6 rounded-2xl gsap-hidden" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
                <h3 className="font-body font-semibold text-sm mb-3" style={{ color: "var(--color-sand-100)" }}>Phone</h3>
                <a href={CONTACT_INFO.phoneHref} className="text-lg font-display" style={{ color: "var(--color-teal-400)", textDecoration: "none" }}>
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div data-contact-detail className="p-6 rounded-2xl gsap-hidden" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
                <h3 className="font-body font-semibold text-sm mb-3" style={{ color: "var(--color-sand-100)" }}>Email</h3>
                <a href={CONTACT_INFO.emailHref} className="text-sm font-body" style={{ color: "var(--color-teal-400)", textDecoration: "none" }}>
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div data-contact-detail className="p-6 rounded-2xl gsap-hidden" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
                <h3 className="font-body font-semibold text-sm mb-3" style={{ color: "var(--color-sand-100)" }}>Address</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(243,234,212,0.6)" }}>
                  {CONTACT_INFO.addressOneLine}
                </p>
                <a
                  href={CONTACT_INFO.googleMapsLink}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-block mt-2 text-xs font-body font-medium"
                  style={{ color: "var(--color-teal-400)" }}
                >
                  Get Directions →
                </a>
              </div>
            </div>
            <div data-contact-detail className="rounded-2xl overflow-hidden gsap-hidden" style={{ border: "1px solid rgba(255,255,255,0.04)", aspectRatio: "4/3" }}>
              <iframe
                src={CONTACT_INFO.googleMapsEmbed}
                title="OB Boat Rentals Location"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dock Info */}
      <section data-dock-info className="relative" style={{ padding: "var(--spacing-section) 0", background: "var(--color-navy-950)" }}>
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="section-label">Getting Here</p>
            <h2 className="font-display text-section" style={{ color: "var(--color-sand-50)" }}>{DOCK_INFO.headline}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 max-w-4xl mx-auto">
            {DOCK_INFO.items.map((item) => (
              <div key={item.title} data-dock-card className="p-6 rounded-2xl gsap-hidden" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
                <h3 className="font-body font-semibold text-sm mb-2" style={{ color: "var(--color-sand-100)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(243,234,212,0.45)" }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative" style={{ padding: "var(--spacing-section) 0" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--color-navy-950), rgba(10,22,40,0.4))" }} />
        <div className="relative container-site text-center max-w-xl">
          <h2 className="font-display text-section" style={{ color: "var(--color-sand-50)" }}>Ready to Book?</h2>
          <p className="mt-4 leading-relaxed mb-8" style={{ color: "rgba(243,234,212,0.5)" }}>
            Give us a call or book online. We&apos;ll get you on the water.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={CONTACT_INFO.phoneHref} className="btn-primary text-sm">Call {CONTACT_INFO.phone}</a>
            <Link href="/rentals" className="btn-outline text-sm">View Rentals</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
