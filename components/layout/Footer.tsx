"use client";

import Link from "next/link";
import { NAV_LINKS, SITE, CONTACT, SOCIAL } from "@/content/site-config";
import { FacebookIcon } from "@/components/ui/Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.04)", background: "var(--color-navy-950)" }}>
      <div className="container-site py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <Link href="/" className="font-display text-2xl tracking-tight" style={{ color: "var(--color-sand-50)" }}>{SITE.name}</Link>
            <p className="mt-3 text-sm leading-relaxed max-w-xs" style={{ color: "rgba(232,217,184,0.45)" }}>{SITE.shortTagline}</p>
            <div className="flex gap-4 mt-6">
              {SOCIAL.map((s) => (
                <a key={s.platform} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.platform}
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ border: "1px solid rgba(255,255,255,0.1)", color: "rgba(232,217,184,0.4)", transition: "all 0.3s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-teal-400)"; e.currentTarget.style.borderColor = "rgba(77,208,200,0.4)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(232,217,184,0.4)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}>
                  <FacebookIcon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="section-label mb-5">Navigate</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm" style={{ color: "rgba(243,234,212,0.4)", transition: "color 0.3s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-sand-50)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(243,234,212,0.4)")}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5">
            <h4 className="section-label mb-5">Contact</h4>
            <ul className="space-y-3 text-sm" style={{ color: "rgba(243,234,212,0.4)" }}>
              <li><a href={`tel:${CONTACT.phone}`} style={{ transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-sand-50)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(243,234,212,0.4)")}>{CONTACT.phone}</a></li>
              <li><a href={`mailto:${CONTACT.email}`} style={{ transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-sand-50)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(243,234,212,0.4)")}>{CONTACT.email}</a></li>
              <li style={{ whiteSpace: "pre-line" }}>{CONTACT.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <p className="text-xs" style={{ color: "rgba(232,217,184,0.2)" }}>© {year} {SITE.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}