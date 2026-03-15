"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--color-navy-950)" }}
    >
      <div className="relative z-10 text-center max-w-lg px-5">
        <p className="section-label">Something Went Wrong</p>
        <h1
          className="font-display text-section"
          style={{ color: "var(--color-sand-50)" }}
        >
          Oops
        </h1>
        <p
          className="mt-4 leading-relaxed"
          style={{ color: "rgba(243,234,212,0.5)" }}
        >
          We hit a snag loading this page. Please try again.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={reset} className="btn-primary">
            Try Again
          </button>
          <a href="/" className="btn-outline">
            Back to Home
          </a>
        </div>
      </div>
    </section>
  );
}
