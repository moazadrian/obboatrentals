"use client";

import Image from "next/image";
import { fadeUpStagger, useGsap } from "@/lib/gsap";
import { EXPERIENCES } from "@/content/site-config";
import { ClockIcon, UsersIcon, RestroomIcon, SpeakerIcon } from "@/components/ui/Icons";

const STAT_ICONS: Record<string, React.FC<{ className?: string; size?: number }>> = {
  Hours: ClockIcon, Seats: UsersIcon, Restroom: RestroomIcon, Bluetooth: SpeakerIcon,
};

export default function Experiences() {
  const containerRef = useGsap(() => {
    fadeUpStagger("[data-exp-header] > *", { trigger: "[data-exp-section]", stagger: 0.1 });
    fadeUpStagger("[data-exp-card]", { trigger: "[data-exp-section]", stagger: 0.15, y: 50 });
  });

  return (
    <section ref={containerRef} id="experiences" data-exp-section className="relative" style={{ padding: "var(--spacing-section) 0", background: "var(--color-navy-950)" }}>
      <div className="container-site">
        <div data-exp-header className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="section-label" style={{ opacity: 0 }}>Choose Your Experience</p>
          <h2 className="font-display text-section" style={{ color: "var(--color-sand-50)", opacity: 0 }}>Three Ways to Get on the Water</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {EXPERIENCES.map((exp) => (
            <article key={exp.id} data-exp-card className="group relative rounded-2xl overflow-hidden"
              style={{ background: "rgba(15,32,56,0.4)", border: "1px solid rgba(255,255,255,0.04)", transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)", opacity: 0 }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 60px -12px rgba(0,0,0,0.5)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)"; }}>
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image src={exp.image} alt={exp.title} fill className="object-cover" style={{ transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)" }} sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(4,13,26,0.85), rgba(4,13,26,0.15), transparent)" }} />
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full glass text-xs font-body font-semibold" style={{ color: "var(--color-sand-50)" }}>{exp.duration}</div>
              </div>

              <div className="p-6 lg:p-8">
                <h3 className="font-display text-2xl mb-2" style={{ color: "var(--color-sand-50)" }}>{exp.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(243,234,212,0.45)" }}>{exp.tagline}</p>

                {/* Quick stats row */}
                <div className="flex items-center gap-4 mb-6 pb-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  {exp.stats.map((stat) => {
                    const key = stat.includes("Hour") ? "Hours" : stat.includes("Seat") ? "Seats" : stat;
                    const IconComp = STAT_ICONS[key];
                    return (
                      <div key={stat} className="flex items-center gap-1.5">
                        {IconComp && <IconComp size={14} className="opacity-40" />}
                        <span className="text-xs font-medium" style={{ color: "rgba(243,234,212,0.4)" }}>{stat}</span>
                      </div>
                    );
                  })}
                </div>

                {/* CTA — direct Peek link or disabled Coming Soon */}
                {exp.bookingUrl ? (
                  <a
                    href={exp.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 rounded-xl text-sm font-body font-semibold text-center"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      color: "var(--color-sand-100)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      textDecoration: "none",
                      transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
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
                    Book Now
                  </a>
                ) : (
                  <button
                    disabled
                    className="w-full py-3 rounded-xl text-sm font-body font-semibold"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      color: "rgba(243,234,212,0.25)",
                      border: "1px solid rgba(255,255,255,0.03)",
                      cursor: "not-allowed",
                    }}
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}