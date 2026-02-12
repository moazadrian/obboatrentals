import Link from "next/link";
import Image from "next/image";
import { PAGE_BACKGROUNDS } from "@/content/site-config";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image src={PAGE_BACKGROUNDS.contact} alt="" fill className="object-cover" sizes="100vw" priority />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(4,13,26,0.7), rgba(4,13,26,0.85))" }} />
      <div className="relative z-10 text-center max-w-md px-5">
        <p className="section-label">Coming Soon</p>
        <h1 className="font-display text-section" style={{ color: "var(--color-sand-50)" }}>Contact Us</h1>
        <p className="mt-4 leading-relaxed" style={{ color: "rgba(243,234,212,0.5)" }}>
          We&apos;re building something special. Check back soon.
        </p>
        <Link href="/" className="btn-primary mt-8 inline-flex">Back to Home</Link>
      </div>
    </section>
  );
}