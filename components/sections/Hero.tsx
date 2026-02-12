"use client";

import gsap from "gsap";
import { useGsap } from "@/lib/gsap";
import { HERO } from "@/content/site-config";
import { useBooking } from "@/lib/booking-context";

export default function Hero() {
  const { open } = useBooking();

  const containerRef = useGsap(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    tl.fromTo("[data-hero-media]", { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.6, ease: "power4.inOut" })
      .fromTo("[data-hero-overlay]", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.8")
      .fromTo("[data-hero-headline]", { clipPath: "inset(0 0 100% 0)", opacity: 0 }, { clipPath: "inset(0 0 0% 0)", opacity: 1, duration: 1.2, ease: "power3.out" }, "-=0.6")
      .fromTo("[data-hero-sub]", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
      .fromTo("[data-hero-ctas]", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.3")
      .fromTo("[data-hero-scroll]", { opacity: 0 }, { opacity: 1, duration: 0.6 }, "-=0.1");
  });

  return (
    <section ref={containerRef} className="relative flex items-center justify-center overflow-hidden" style={{ height: "100vh", minHeight: 600, maxHeight: 1200 }}>
      <div data-hero-media className="absolute inset-0" style={{ clipPath: "inset(100% 0% 0% 0%)" }}>
        <div className="absolute inset-0">
          <video
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            controls={false}
            disablePictureInPicture
            disableRemotePlayback
          >
            {/* mp4 first for iOS Safari which doesn't support webm */}
            <source src={HERO.videoSrc.replace(".webm", ".mp4")} type="video/mp4" />
            <source src={HERO.videoSrc} type="video/webm" />
          </video>
        </div>
        <div data-hero-overlay className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(4,13,26,0.25), rgba(4,13,26,0.1), rgba(4,13,26,0.5))", opacity: 0 }} />
      </div>

      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.03, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />

      <div className="relative z-10 container-site text-center max-w-3xl">
        <h1 data-hero-headline className="font-display text-hero whitespace-pre-line" style={{ color: "var(--color-sand-50)", clipPath: "inset(0 0 100% 0)", opacity: 0, textShadow: "0 2px 20px rgba(4,13,26,0.4)" }}>
          {HERO.headline}
        </h1>
        <p data-hero-sub className="mt-6 text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(243,234,212,0.8)", opacity: 0, textShadow: "0 1px 12px rgba(4,13,26,0.3)" }}>
          {HERO.subhead}
        </p>
        <div data-hero-ctas className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" style={{ opacity: 0 }}>
          <a href={HERO.ctaPrimary.href} className="btn-outline">{HERO.ctaPrimary.label}</a>
          <button onClick={open} className="btn-primary">{HERO.ctaSecondary.label}</button>
        </div>
      </div>

      <div data-hero-scroll className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ opacity: 0 }}>
        <span className="font-body uppercase" style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.3em", color: "rgba(243,234,212,0.25)" }}>Scroll</span>
        <div className="relative overflow-hidden" style={{ width: 1, height: 32, background: "linear-gradient(to bottom, rgba(243,234,212,0.25), transparent)" }}>
          <div className="absolute inset-x-0 top-0 animate-bounce" style={{ height: 12, background: "rgba(77,208,200,0.6)" }} />
        </div>
      </div>
    </section>
  );
}