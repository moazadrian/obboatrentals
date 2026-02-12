"use client";

import Link from "next/link";
import { NAV_LINKS, SITE, CONTACT, SOCIAL } from "@/content/site-config";

function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case "instagram":
      return (
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "facebook":
      return (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13.1a8.28 8.28 0 005.58 2.16V11.8a4.84 4.84 0 01-3.77-1.34V6.69h3.77z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.04)", background: "var(--color-navy-950)" }}>
      <div className="container-site py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="font-display text-2xl tracking-tight" style={{ color: "var(--color-sand-50)" }}>
              {SITE.name}
            </Link>
            <p className="mt-3 text-sm leading-relaxed max-w-xs" style={{ color: "rgba(232,217,184,0.5)" }}>
              {SITE.shortTagline}
            </p>
            <div className="flex gap-4 mt-6">
              {SOCIAL.map((s) => (
                <a
                  key={s.platform}
                  href={s.href}
                  aria-label={s.platform}
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(232,217,184,0.4)",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-teal-400)";
                    e.currentTarget.style.borderColor = "rgba(77,208,200,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(232,217,184,0.4)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  }}
                >
                  <SocialIcon name={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <h4 className="section-label mb-5">Navigate</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm"
                    style={{ color: "rgba(243,234,212,0.4)", transition: "color 0.3s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-sand-50)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(243,234,212,0.4)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="section-label mb-5">Contact</h4>
            <ul className="space-y-3 text-sm" style={{ color: "rgba(243,234,212,0.4)" }}>
              <li>
                <a href={`tel:${CONTACT.phone}`} style={{ transition: "color 0.3s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-sand-50)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(243,234,212,0.4)")}>
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} style={{ transition: "color 0.3s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-sand-50)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(243,234,212,0.4)")}>
                  {CONTACT.email}
                </a>
              </li>
              <li>{CONTACT.address}</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <h4 className="section-label mb-5">Legal</h4>
            <ul className="space-y-3 text-sm" style={{ color: "rgba(243,234,212,0.4)" }}>
              <li><Link href="/privacy" style={{ transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-sand-50)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(243,234,212,0.4)")}>Privacy Policy</Link></li>
              <li><Link href="/terms" style={{ transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-sand-50)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(243,234,212,0.4)")}>Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <p className="text-xs" style={{ color: "rgba(232,217,184,0.2)" }}>
            © {year} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}