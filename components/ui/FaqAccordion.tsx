"use client";

import { useState } from "react";
import { ChevronRightIcon } from "@/components/ui/Icons";

type FaqItem = { question: string; answer: string };

export default function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.04)",
              transition: "border-color 0.3s",
              borderColor: isOpen ? "rgba(77,208,200,0.15)" : "rgba(255,255,255,0.04)",
            }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="font-body font-medium text-sm" style={{ color: "var(--color-sand-100)" }}>
                {item.question}
              </span>
              <span
                className="flex-shrink-0"
                style={{
                  color: "var(--color-teal-400)",
                  transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                  transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                <ChevronRightIcon size={16} />
              </span>
            </button>
            <div
              className="grid"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition: "grid-template-rows 0.35s cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5">
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(243,234,212,0.45)" }}>
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
