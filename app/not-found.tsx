import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--color-navy-950)" }}
    >
      <div className="relative z-10 text-center max-w-lg px-5">
        <p className="section-label">Page Not Found</p>
        <h1
          className="font-display text-section"
          style={{ color: "var(--color-sand-50)" }}
        >
          404
        </h1>
        <p
          className="mt-4 leading-relaxed"
          style={{ color: "rgba(243,234,212,0.5)" }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/rentals" className="btn-outline">
            View Rentals
          </Link>
        </div>
      </div>
    </section>
  );
}
