"use client";

import Link from "next/link";
import { whatsappLink } from "../lib/site";
import { useLanguage } from "./language-provider";
import { WhatsAppCta } from "./whatsapp-cta";

export function DesignPackageCards() {
  const { copy, language } = useLanguage();
  const { bestValueLabel, feeds, sections, tierCtaPrefix } =
    copy.designPackageCards;

  return (
    <div className="space-y-12">
      {sections.map((section) => (
        <section
          className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start"
          key={section.title}
        >
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              {section.eyebrow}
            </p>
            <h3 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              {section.title}
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
              {section.description}
            </p>
          </div>

          <div className="grid auto-cols-[minmax(260px,82vw)] grid-flow-col gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:auto-cols-auto md:grid-flow-row md:grid-cols-3 md:overflow-visible md:pb-0 md:snap-none">
            {section.tiers.map((tier) => {
              const isFeatured = "featured" in tier && tier.featured;

              return (
                <article
                  className={`relative flex min-h-[360px] snap-start flex-col overflow-hidden rounded-lg border bg-card p-5 transition duration-300 hover:-translate-y-1 hover-shadow-card sm:p-6 ${
                    isFeatured
                      ? "border-accent shadow-accent"
                      : "border-border hover:border-accent"
                  }`}
                  key={tier.name}
                >
                  {isFeatured ? (
                    <span className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                      {bestValueLabel}
                    </span>
                  ) : null}

                  <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                    {tier.name}
                  </p>
                  <p className="mt-4 text-4xl font-semibold tracking-normal">
                    {tier.price}
                  </p>
                  <p className="mt-3 min-h-12 text-sm leading-6 text-muted">
                    {tier.note}
                  </p>

                  <ul className="mt-6 flex-1 space-y-3">
                    {tier.features.map((feature) => (
                      <li className="flex gap-3 text-sm leading-6" key={feature}>
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span className="text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <WhatsAppCta
                    className="mt-7 h-11 w-full px-4"
                    href={whatsappLink(`${section.topic} ${tier.name}`, language)}
                    tone="blue"
                  >
                    {tierCtaPrefix} {tier.name}
                  </WhatsAppCta>
                </article>
              );
            })}
          </div>
        </section>
      ))}

      <article className="overflow-hidden rounded-lg border border-border bg-card">
        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              {feeds.eyebrow}
            </p>
            <h3 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              {feeds.title}
            </h3>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              {feeds.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {feeds.highlights.map((item) => (
                <span
                  className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-muted"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <WhatsAppCta
              className="h-11 px-5"
              href={whatsappLink(feeds.topic, language)}
            >
              {feeds.cta}
            </WhatsAppCta>
          </div>
        </div>
      </article>
    </div>
  );
}
