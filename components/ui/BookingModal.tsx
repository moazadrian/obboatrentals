"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { useBooking } from "@/lib/booking-context";
import { prefersReducedMotion } from "@/lib/gsap";

export default function BookingModal() {
  const { isOpen, close } = useBooking();
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const footerBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const panel = panelRef.current;
    if (!overlay || !panel) return;

    if (prefersReducedMotion()) {
      overlay.style.display = isOpen ? "flex" : "none";
      return;
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
      const tl = gsap.timeline();
      tl.set(overlay, { display: "flex" })
        .fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" })
        .fromTo(panel, { opacity: 0, y: 40, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out" }, "-=0.1");
      setTimeout(() => closeBtnRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
      const tl = gsap.timeline();
      tl.to(panel, { opacity: 0, y: 20, duration: 0.25, ease: "power2.in" })
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
    const first = closeBtnRef.current;
    const last = footerBtnRef.current;
    if (!first || !last) return;
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] items-center justify-center p-5 hidden"
      role="dialog" aria-modal="true" aria-label="Book your experience"
      onKeyDown={handleTabKey}
    >
      <div className="absolute inset-0" style={{ background: "rgba(4,13,26,0.8)", backdropFilter: "blur(12px)" }} onClick={close} />

      <div
        ref={panelRef}
        className="relative w-full max-w-lg rounded-3xl overflow-hidden"
        style={{ background: "var(--color-navy-900)", border: "1px solid rgba(255,255,255,0.06)", boxShadow: "0 32px 80px -12px rgba(0,0,0,0.6)" }}
      >
        <div className="flex items-center justify-between p-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
          <h2 className="font-display text-xl" style={{ color: "var(--color-sand-50)" }}>Book Your Experience</h2>
          <button
            ref={closeBtnRef}
            onClick={close}
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ color: "rgba(243,234,212,0.4)", transition: "all 0.3s" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-sand-50)"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(243,234,212,0.4)"; e.currentTarget.style.background = "transparent"; }}
            aria-label="Close booking modal"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="p-8 text-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(43,181,173,0.1)" }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--color-teal-400)" }}>
              <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
            </svg>
          </div>
          <h3 className="font-display text-2xl mb-3" style={{ color: "var(--color-sand-50)" }}>Coming Soon</h3>
          <p className="text-sm leading-relaxed max-w-xs mx-auto mb-8" style={{ color: "rgba(243,234,212,0.45)" }}>
            Our online booking system is being set up. In the meantime, call or text us to reserve your spot on the water.
          </p>
          <a href="tel:6195550123" className="btn-primary w-full max-w-xs mx-auto">Call to Book — (619) 555-0123</a>
          <p className="mt-4 text-xs" style={{ color: "rgba(243,234,212,0.2)" }}>Peek booking integration coming in Phase 2</p>
        </div>

        <div className="p-4 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <button
            ref={footerBtnRef}
            onClick={close}
            className="text-sm"
            style={{ color: "rgba(243,234,212,0.3)", background: "none", border: "none", cursor: "pointer", transition: "color 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-sand-100)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(243,234,212,0.3)")}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}