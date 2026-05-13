"use client";

import Link from "next/link";
import { type Language, whatsappLink } from "../lib/site";
import { WhatsAppCta } from "./whatsapp-cta";

const pricingGroups = [
  {
    eyebrow: "Logo",
    title: "Logo Design",
    description:
      "Paket logo untuk bisnis baru maupun brand yang ingin tampil lebih matang dengan file akhir siap pakai.",
    topic: "paket Logo Design",
    tiers: [
      {
        name: "Starter",
        price: "Rp 200K",
        note: "Untuk logo usaha baru",
        features: ["3 konsep logo", "All file format", "3x revisi"],
      },
      {
        name: "Top",
        price: "Rp 400K",
        note: "Pilihan paling seimbang",
        featured: true,
        features: ["4 konsep logo", "All file format", "4x revisi", "3D mockup"],
      },
      {
        name: "Premium",
        price: "Rp 750K",
        note: "Untuk brand yang butuh output lebih matang",
        features: [
          "5 konsep logo",
          "VIP support",
          "All file format",
          "Revisi fleksibel",
          "3D mockup",
        ],
      },
    ],
  },
  {
    eyebrow: "Print & Promo",
    title: "Brosur / Poster",
    description:
      "Paket desain promosi untuk materi cetak maupun digital, cocok untuk campaign, menu, promo, dan presentasi bisnis.",
    topic: "paket Brosur atau Poster",
    tiers: [
      {
        name: "Easy",
        price: "Rp 25K",
        note: "Untuk kebutuhan promosi ringan",
        features: ["2 desain", "All file format", "2x revisi"],
      },
      {
        name: "Medium",
        price: "Rp 50K",
        note: "Untuk materi promosi yang lebih lengkap",
        featured: true,
        features: ["3 desain", "All file format", "2x revisi", "3D mockup"],
      },
      {
        name: "Hard",
        price: "Rp 75K",
        note: "Untuk desain premium dengan support ekstra",
        features: [
          "3 desain premium",
          "VIP support",
          "All file format",
          "3x revisi",
          "3D mockup",
        ],
      },
    ],
  },
] as const;

const feedFeatures = [
  "Jumlah konten fleksibel",
  "Visual direction",
  "CTA copywriting",
  "File siap upload",
] as const;

type DesignPackageCardsProps = {
  language: Language;
};

export function DesignPackageCards({ language }: DesignPackageCardsProps) {
  return (
    <div className="space-y-12">
      {pricingGroups.map((group) => (
        <section
          className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start"
          key={group.title}
        >
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              {group.eyebrow}
            </p>
            <h3 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              {group.title}
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
              {group.description}
            </p>
          </div>

          <div className="grid auto-cols-[minmax(260px,82vw)] grid-flow-col gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:auto-cols-auto md:grid-flow-row md:grid-cols-3 md:overflow-visible md:pb-0 md:snap-none">
            {group.tiers.map((tier) => {
              const isFeatured = "featured" in tier && tier.featured;

              return (
                <article
                  className={`relative flex min-h-90 snap-start flex-col overflow-hidden rounded-lg border bg-card p-5 transition duration-300 hover:-translate-y-1 hover-shadow-card sm:p-6 ${
                    isFeatured
                      ? "border-accent shadow-accent"
                      : "border-border hover:border-accent"
                  }`}
                  key={tier.name}
                >
                  {isFeatured ? (
                    <span className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                      Best value
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
                    href={whatsappLink(`${group.topic} ${tier.name}`, language)}
                    tone="blue"
                  >
                    Chat Paket {tier.name}
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
              Social Media Feeds
            </p>
            <h3 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Paket feed dibuat custom sesuai target konten.
            </h3>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              Kirim jumlah posting, referensi akun, target campaign, dan
              kebutuhan caption. Digitra bantu susun arah visual, CTA
              copywriting, serta scope desain yang paling efisien sebelum
              produksi dimulai.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {feedFeatures.map((feature) => (
                <span
                  className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-muted"
                  key={feature}
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <WhatsAppCta
              className="h-11 px-5"
              href={whatsappLink(
                "paket feeds social media custom dengan CTA copywriting",
                language,
              )}
            >
              Chat Paket Feeds Custom
            </WhatsAppCta>
            <Link
              className="inline-flex h-11 items-center justify-center rounded-full border border-accent bg-card px-5 text-sm font-semibold text-accent transition hover:bg-accent hover:text-white"
              href="/services/socmed"
            >
              Lihat Detail Feeds
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
