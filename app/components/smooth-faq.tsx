"use client";

import { useId, useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type SmoothFaqProps = {
  items: readonly FaqItem[];
};

export function SmoothFaq({ items }: SmoothFaqProps) {
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();

  return (
    <div className="mt-8 grid gap-3 text-left">
      {items.map((faq, index) => {
        const isOpen = openIndex === index;
        const answerId = `faq-answer-${index}`;

        return (
          <article
            className="rounded-lg border border-border bg-card p-5"
            key={faq.question}
          >
            <button
              aria-controls={`${baseId}-${answerId}`}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 text-left font-semibold"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              type="button"
            >
              <span>{faq.question}</span>
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-accent transition ${
                  isOpen ? "rotate-45 bg-surface" : "bg-card"
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`faq-panel grid ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
              id={`${baseId}-${answerId}`}
            >
              <div className="overflow-hidden">
                <p className="pt-4 text-sm leading-7 text-muted">
                  {faq.answer}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
