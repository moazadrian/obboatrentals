"use client";

import { useEffect, useState } from "react";
import { useBooking } from "@/lib/booking-context";

export default function StickyCTA() {
  const { open } = useBooking();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-40 lg:hidden"
      style={{
        transition: "all 0.5s var(--ease-luxe)",
        transform: visible ? "translateY(0)" : "translateY(100%)",
        opacity: visible ? 1 : 0,
      }}
    >
      <div
        className="px-5 py-3"
        style={{
          background: "rgba(4,13,26,0.9)",
          backdropFilter: "blur(24px)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <button onClick={open} className="btn-primary w-full text-sm py-3.5">
          Book Now
        </button>
      </div>
    </div>
  );
}