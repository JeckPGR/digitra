"use client";

import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "../lib/site";
import { CtaPanel } from "./cta-panel";
import { useLanguage } from "./language-provider";
import { PageDecor } from "./page-decor";
import { ProductImageModal } from "./product-image-modal";
import { WhatsAppCta } from "./whatsapp-cta";

type DetailKind = "gas" | "website";

type ServiceDetailContentProps = {
  kind: DetailKind;
};

const CATEGORY_COLORS: Record<string, { badge: string; bar: string }> = {
  Retail: {
    badge: "border-orange-500/30 bg-orange-500/15 text-orange-400",
    bar: "bg-orange-400",
  },
  Reseller: {
    badge: "border-violet-500/30 bg-violet-500/15 text-violet-400",
    bar: "bg-violet-400",
  },
  "F&B": {
    badge: "border-emerald-500/30 bg-emerald-500/15 text-emerald-400",
    bar: "bg-emerald-400",
  },
  HR: {
    badge: "border-sky-500/30 bg-sky-500/15 text-sky-400",
    bar: "bg-sky-400",
  },
  "Company Profile": {
    badge: "border-amber-500/30 bg-amber-500/15 text-amber-300",
    bar: "bg-amber-300",
  },
  "Booking App": {
    badge: "border-cyan-500/30 bg-cyan-500/15 text-cyan-300",
    bar: "bg-cyan-300",
  },
  "Landing Page": {
    badge: "border-lime-500/30 bg-lime-500/15 text-lime-300",
    bar: "bg-lime-300",
  },
  default: {
    badge: "border-accent/30 bg-accent/15 text-accent",
    bar: "bg-accent",
  },
};

function inferCategory(title: string): string {
  if (/company|profile|charcoal/i.test(title)) return "Company Profile";
  if (/booking|barber|paja/i.test(title)) return "Booking App";
  if (/landing|tani/i.test(title)) return "Landing Page";
  if (/fashion|retail|pos/i.test(title)) return "Retail";
  if (/reseller/i.test(title)) return "Reseller";
  if (/f&b|fnb|food|resto/i.test(title)) return "F&B";
  if (/job|hr|rekrut/i.test(title)) return "HR";
  return "default";
}

function getShowcaseCategory(item: Readonly<{ title: string; badge?: string }>) {
  return item.badge ?? inferCategory(item.title);
}

export function ServiceDetailContent({ kind }: ServiceDetailContentProps) {
  const { copy, language } = useLanguage();
  const { servicesPage } = copy;
  const isGas = kind === "gas";
  const service = isGas ? servicesPage.gas : servicesPage.website;
  const detail = service.detail;
  const showcaseItems = isGas ? copy.gasShowcases : copy.websiteShowcases;
  const gasBenefits = isGas ? copy.gasBenefits : [];

  const labels =
    language === "id"
      ? {
          back: "Kembali ke Services",
          overview: "Ringkasan layanan",
          media: "Area visual",
          includes: "Yang Telah kami kerjakan",
          benefitsEyebrow: "Keuntungan GAS",
          benefitsTitle:
            "Kenapa Google Apps Script cocok untuk sistem internal bisnis?",
          exampleTitle: isGas ? "Showcase aplikasi GAS" : "Showcase website",
          packageTitle: isGas ? "Format pengerjaan" : "Paket awal",
          ctaEyebrow: "Custom System",
          ctaTitle: "Ingin sistem custom mengikuti bisnis Anda?",
          ctaDescription:
            "Kirim brief singkat, ruang lingkup bisa disesuaikan penuh dengan workflow dan materi yang sudah tersedia.",
          cta: "Hubungi Kami via WhatsApp",
          placeholderNote:
            "Area ini disiapkan untuk gambar, screenshot, mockup, atau preview workflow.",
        }
      : {
          back: "Back to Services",
          overview: "Service overview",
          media: "Visual area",
          includes: "Our Work",
          benefitsEyebrow: "GAS Benefits",
          benefitsTitle:
            "Why Google Apps Script works well for internal business systems",
          exampleTitle: isGas ? "GAS app showcase" : "Website showcase",
          packageTitle: isGas ? "Work format" : "Starter packages",
          ctaEyebrow: "Custom System",
          ctaTitle: "Want a system custom-built for your business?",
          ctaDescription:
            "Send a short brief — the scope can be fully adjusted to your workflow and available materials.",
          cta: "Contact Us via WhatsApp",
          placeholderNote:
            "This area is prepared for images, screenshots, mockups, or workflow previews.",
        };

  return (
    <main className="page-transition flex-1 bg-surface text-surface-foreground">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-5 py-12 sm:px-8 sm:py-10 lg:px-10 lg:py-24">
        <PageDecor tone={isGas ? "process" : "services"} />
        <div className="relative mx-auto max-w-7xl">
          <Link
            className="inline-flex h-10 items-center rounded-full border border-border bg-card px-4 text-sm font-semibold text-muted transition hover:border-accent hover:text-accent"
            href="/services"
          >
            {labels.back}
          </Link>
          <div className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-base font-semibold text-accent">{service.eyebrow}</p>
              <h1 className="mt-4 text-5xl font-semibold leading-[0.96] tracking-normal sm:text-7xl">
                {service.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
                {service.description}
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
              <p className="text-sm font-semibold text-accent">{labels.overview}</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight">{detail.title}</h2>
              <p className="mt-5 text-sm leading-7 text-muted">{detail.description}</p>
            </div>
          </div>
        </div>
      </section>

      {isGas ? (
        <section className="relative overflow-hidden px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-24">
          <PageDecor align="right" tone="services" />
          <div className="relative mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                {labels.benefitsEyebrow}
              </p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
                {labels.benefitsTitle}
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {gasBenefits.map((benefit, index) => (
                <article
                  className="flex min-h-48 flex-col rounded-lg border border-border bg-card p-5 transition duration-300 hover:-translate-y-1 hover:border-accent hover-shadow-card sm:p-6"
                  key={benefit.title}
                >
                  <span className="text-sm font-semibold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    {benefit.subtitle}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ── Showcase Grid ── */}
      <section className="relative overflow-hidden px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-24">
        <PageDecor tone={isGas ? "process" : "services"} />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              {labels.includes}
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
              {labels.exampleTitle}
            </h2>
          </div>

          <div
            className={`grid gap-5 ${
              isGas
                ? "auto-cols-[minmax(260px,82vw)] grid-flow-col snap-x snap-mandatory overflow-x-auto pb-4 md:auto-cols-auto md:grid-flow-row md:grid-cols-2 md:snap-none md:overflow-visible md:pb-0 lg:grid-cols-4"
                : "sm:grid-cols-2 xl:grid-cols-3"
            }`}
          >
            {showcaseItems.map((item) => {
              const cat = getShowcaseCategory(item);
              const colors = CATEGORY_COLORS[cat] ?? CATEGORY_COLORS.default;
              return (
                <article
                  key={item.title}
                  className={`group isolate overflow-hidden rounded-xl border border-border bg-card transition duration-300 hover-shadow-card hover:-translate-y-1.5 hover:border-accent ${
                    isGas ? "snap-start" : ""
                  }`}
                >
                  {/* Image area */}
                  <div className="relative aspect-16/10 overflow-hidden border-b border-border/70 bg-[radial-gradient(circle_at_50%_30%,rgba(255,140,97,0.14),transparent_46%),linear-gradient(135deg,rgba(249,249,249,0.045),rgba(37,211,102,0.055))]">
                    {item.image ? (
                      <ProductImageModal
                        alt={`${item.title} showcase`}
                        className="absolute inset-0 block cursor-zoom-in overflow-hidden border-0 bg-transparent p-0 text-left"
                        src={item.image}
                      >
                        <div
                          className={
                            isGas
                              ? "absolute inset-3 sm:inset-4"
                              : "absolute inset-0"
                          }
                        >
                          <Image
                            alt={`${item.title} showcase`}
                            className={`drop-shadow-card transition duration-500 group-hover:scale-[1.025] ${
                              isGas
                                ? "object-contain object-bottom"
                                : "object-cover object-top"
                            }`}
                            fill
                            sizes={
                              isGas
                                ? "(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 82vw"
                                : "(min-width: 1280px) 420px, (min-width: 640px) 50vw, 100vw"
                            }
                            src={item.image}
                            unoptimized
                          />
                        </div>
                      </ProductImageModal>
                    ) : (
                      /* Placeholder mockup */
                      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,255,117,0.10),rgba(255,255,255,0.03))] p-5">
                        <div className="h-full rounded-lg border border-border bg-card/60 p-4">
                          <div className="flex gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-accent/70" />
                            <span className="h-2 w-2 rounded-full bg-muted/40" />
                            <span className="h-2 w-2 rounded-full bg-muted/30" />
                          </div>
                          <div className="mt-4 grid gap-2.5">
                            <span className="h-3 w-3/4 rounded-full bg-muted/25" />
                            <span className="h-3 w-1/2 rounded-full bg-muted/20" />
                            <span className="mt-2 h-14 rounded-md bg-surface/60" />
                            <div className="flex gap-2">
                              <span className="h-3 w-1/3 rounded-full bg-muted/20" />
                              <span className="h-3 w-1/4 rounded-full bg-accent/20" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card body */}
                  <div className="p-4">
                    {cat !== "default" && (
                      <span
                        className={`mb-3 inline-block rounded-full border px-2.5 py-0.5 text-xs font-semibold ${colors.badge}`}
                      >
                        {cat}
                      </span>
                    )}
                    <p className="text-base font-semibold leading-tight">{item.title}</p>
                    {/* accent underline */}
                    <div className={`mt-3 h-0.5 w-8 rounded-full ${colors.bar}`} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WhatsApp CTA ── */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-28">
        <CtaPanel
          action={
            <WhatsAppCta href={whatsappLink(service.title, language)}>
              {labels.cta}
            </WhatsAppCta>
          }
          description={labels.ctaDescription}
          eyebrow={labels.ctaEyebrow}
          title={labels.ctaTitle}
        />
      </section>

    </main>
  );
}
