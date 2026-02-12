"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { NAV_LINKS, SITE } from "@/content/site-config";
import { useBooking } from "@/lib/booking-context";
import { prefersReducedMotion } from "@/lib/gsap";

export default function Header() {
  const { open } = useBooking();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuLinksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const menu = menuRef.current;
    const links = menuLinksRef.current;
    if (!menu || !links) return;

    if (prefersReducedMotion()) {
      menu.style.display = menuOpen ? "flex" : "none";
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    if (menuOpen) {
      document.body.style.overflow = "hidden";
      tl.set(menu, { display: "flex" })
        .fromTo(
          menu,
          { clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" },
          { clipPath: "circle(150% at calc(100% - 2.5rem) 2.5rem)", duration: 0.8 }
        )
        .fromTo(
          links.children,
          { opacity: 0, x: 40 },
          { opacity: 1, x: 0, stagger: 0.07, duration: 0.5 },
          "-=0.3"
        );
    } else {
      document.body.style.overflow = "";
      tl.to(links.children, {
        opacity: 0, x: -20, stagger: 0.04, duration: 0.25,
      }).to(menu, {
        clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)",
        duration: 0.6,
        onComplete: () => { menu.style.display = "none"; },
      }, "-=0.1");
    }

    return () => { tl.kill(); };
  }, [menuOpen]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      style={{
        transition: "all 0.7s var(--ease-luxe)",
        background: scrolled ? "rgba(4,13,26,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,0.04)" : "none",
      }}
    >
      <nav className="container-site flex items-center justify-between h-20">
        <Link
          href="/"
          className="relative z-10 font-display text-xl md:text-2xl tracking-tight"
          style={{ color: "var(--color-sand-50)" }}
        >
          {SITE.name}
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm font-body font-medium tracking-wide"
              style={{ color: "rgba(243,234,212,0.6)", transition: "color 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-sand-50)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(243,234,212,0.6)")}
            >
              {link.label}
              <span
                className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full"
                style={{
                  background: "var(--color-teal-400)",
                  transition: "width 0.5s var(--ease-luxe)",
                }}
              />
            </Link>
          ))}
          <button onClick={open} className="btn-primary text-xs">
            Book Now
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((p) => !p)}
          className="lg:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className="block w-6 h-0.5 origin-center"
            style={{
              background: "var(--color-sand-50)",
              transition: "all 0.5s var(--ease-luxe)",
              transform: menuOpen ? "rotate(45deg) translateY(4px)" : "none",
            }}
          />
          <span
            className="block w-6 h-0.5"
            style={{
              background: "var(--color-sand-50)",
              transition: "all 0.5s var(--ease-luxe)",
              transform: menuOpen ? "rotate(-45deg) translateY(-4px)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-40 flex-col items-center justify-center hidden"
        style={{ background: "var(--color-navy-950)" }}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div ref={menuLinksRef} className="flex flex-col items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl"
              style={{ color: "var(--color-sand-50)", transition: "color 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-teal-400)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-sand-50)")}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => { setMenuOpen(false); setTimeout(open, 400); }}
            className="btn-primary mt-4 text-base px-10 py-4"
          >
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
}