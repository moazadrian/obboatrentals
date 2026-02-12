"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { useBooking } from "@/lib/booking-context";
import { prefersReducedMotion } from "@/lib/gsap";
import { BOOKING } from "@/content/site-config";
import { XIcon, ChevronRightIcon, ClockIcon } from "@/components/ui/Icons";

export default function BookingModal() {
  const { isOpen, close } = useBooking();
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const panel = panelRef.current;
    if (!overlay || !panel) return;

    if (prefersReducedMotion()) {
      overlay.style.display = isOpen ? "flex" : "none";
      if (isOpen) document.body.style.overflow = "hidden";
      else document.body.style.overflow = "";
      return;
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
      const tl = gsap.timeline();
      tl.set(overlay, { display: "flex" })
        .fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" })
        .fromTo(panel, { x: "100%" }, { x: "0%", duration: 0.5, ease: "power3.out" }, "-=0.15");
      setTimeout(() => closeBtnRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
      const tl = gsap.timeline();
      tl.to(panel, { x: "100%", duration: 0.35, ease: "power3.in" })
        .to(overlay, { opacity: 0, duration: 0.2, onComplete: () => { overlay.style.display = "none"; } }, "-=0.1");
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  const handleTabKey = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== "Tab") return;
    // Simple focus trap within panel
    const panel = panelRef.current;
    if (!panel) return;
    const focusable = panel.querySelectorAll<HTMLElement>("button, a, [tabindex]");
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] hidden"
      role="dialog" aria-modal="true" aria-label="Book your experience"
      onKeyDown={handleTabKey}
      style={{ display: "none" }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0" style={{ background: "rgba(4,13,26,0.6)", backdropFilter: "blur(8px)" }} onClick={close} />

      {/* Panel — right side on desktop, full on mobile */}
      <div
        ref={panelRef}
        className="absolute right-0 top-0 bottom-0 w-full sm:w-[440px] flex flex-col"
        style={{ background: "var(--color-navy-900)", borderLeft: "1px solid rgba(255,255,255,0.06)", boxShadow: "-20px 0 60px rgba(0,0,0,0.4)", transform: "translateX(100%)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
          <h2 className="font-display text-xl" style={{ color: "var(--color-sand-50)" }}>Book Your Experience</h2>
          <button ref={closeBtnRef} onClick={close} className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ color: "rgba(243,234,212,0.4)", transition: "all 0.3s" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-sand-50)"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(243,234,212,0.4)"; e.currentTarget.style.background = "transparent"; }}
            aria-label="Close">
            <XIcon size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 flex flex-col justify-center gap-4">
          <p className="text-sm text-center mb-2" style={{ color: "rgba(243,234,212,0.5)" }}>Select an experience to book</p>

          {/* Half Day */}
          <a href={BOOKING.halfDay.url} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)", textDecoration: "none" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.borderColor = "rgba(77,208,200,0.3)"; e.currentTarget.style.transform = "translateX(4px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = "translateX(0)"; }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(43,181,173,0.1)" }}>
              <ClockIcon size={22} className="text-teal-400" />
            </div>
            <div className="flex-1">
              <p className="font-body font-semibold text-base" style={{ color: "var(--color-sand-50)" }}>{BOOKING.halfDay.label}</p>
              <p className="text-sm mt-0.5" style={{ color: "rgba(243,234,212,0.4)" }}>{BOOKING.halfDay.subtitle}</p>
            </div>
            <ChevronRightIcon size={20} className="opacity-30 flex-shrink-0" />
          </a>

          {/* Full Day */}
          <a href={BOOKING.fullDay.url} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)", textDecoration: "none" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.borderColor = "rgba(77,208,200,0.3)"; e.currentTarget.style.transform = "translateX(4px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = "translateX(0)"; }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(232,165,75,0.1)" }}>
              <ClockIcon size={22} className="text-accent" />
            </div>
            <div className="flex-1">
              <p className="font-body font-semibold text-base" style={{ color: "var(--color-sand-50)" }}>{BOOKING.fullDay.label}</p>
              <p className="text-sm mt-0.5" style={{ color: "rgba(243,234,212,0.4)" }}>{BOOKING.fullDay.subtitle}</p>
            </div>
            <ChevronRightIcon size={20} className="opacity-30 flex-shrink-0" />
          </a>
        </div>

        {/* Footer */}
        <div className="p-6 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <p className="text-xs" style={{ color: "rgba(243,234,212,0.25)" }}>
            Secure booking powered by Peek
          </p>
        </div>
      </div>
    </div>
  );
}