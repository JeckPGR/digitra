"use client";

import Link from "next/link";
import { whatsappLink } from "../lib/site";
import { useLanguage } from "./language-provider";
import { PageDecor } from "./page-decor";
import { WhatsAppCta } from "./whatsapp-cta";

type DetailKind = "gas" | "website";

type ServiceDetailContentProps = {
  kind: DetailKind;
};

export function ServiceDetailContent({ kind }: ServiceDetailContentProps) {
  const { copy, language } = useLanguage();
  const { servicesPage, whatsapp } = copy;
  const isGas = kind === "gas";
  const service = isGas ? servicesPage.gas : servicesPage.website;
  const detail = service.detail;
  const examples = isGas ? copy.gasExamples : copy.serviceHighlights.slice(0, 2);
  const packages = isGas
    ? copy.gasExamples
    : [...copy.landingPackages, ...copy.companyProfilePackages];

  const labels =
    language === "id"
      ? {
          back: "Kembali ke Services",
          overview: "Ringkasan layanan",
          media: "Area visual",
          includes: "Apa saja yang dibahas",
          exampleTitle: isGas ? "Contoh kebutuhan GAS" : "Pilihan website",
          packageTitle: isGas ? "Format pengerjaan" : "Paket awal",
          ctaTitle: "Siap bahas kebutuhan detail?",
          ctaDescription:
            "Kirim brief singkat, nanti scope bisa disesuaikan dengan workflow dan materi yang sudah tersedia.",
          cta: "Konsultasi via WhatsApp",
          placeholderNote:
            "Area ini disiapkan untuk gambar, screenshot, mockup, atau preview workflow.",
        }
      : {
          back: "Back to Services",
          overview: "Service overview",
          media: "Visual area",
          includes: "What this covers",
          exampleTitle: isGas ? "GAS use cases" : "Website options",
          packageTitle: isGas ? "Work format" : "Starter packages",
          ctaTitle: "Ready to discuss the details?",
          ctaDescription:
            "Send a short brief and the scope can be adjusted to your workflow and available materials.",
          cta: "Consult via WhatsApp",
          placeholderNote:
            "This area is prepared for images, screenshots, mockups, or workflow previews.",
        };

  return (
    <main className="page-transition flex-1 bg-surface text-surface-foreground">
      <section className="relative overflow-hidden px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-24">
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
              <p className="text-base font-semibold text-accent">
                {service.eyebrow}
              </p>
              <h1 className="mt-4 text-5xl font-semibold leading-[0.96] tracking-normal sm:text-7xl">
                {service.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
                {service.description}
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
              <p className="text-sm font-semibold text-accent">
                {labels.overview}
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight">
                {detail.title}
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted">
                {detail.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-panel px-5 py-12 text-panel-foreground sm:px-8 sm:py-14 lg:px-10 lg:py-24">
        <PageDecor align="right" tone={isGas ? "faq" : "hero"} />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="text-base font-semibold text-accent-strong">
                {labels.media}
              </p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
                {detail.eyebrow}
              </h2>
              <p className="mt-5 text-sm leading-7 text-paper-muted">
                {labels.placeholderNote}
              </p>
            </div>
            <div className="grid min-h-80 place-items-center rounded-lg border border-dashed border-border-dark bg-paper p-8 text-center text-paper-muted">
              <div>
                <div className="mx-auto h-24 w-40 rounded-md border border-current opacity-45" />
                <p className="mt-5 text-sm font-semibold">
                  {detail.imageLabel}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {detail.groups.map((group) => (
              <article
                className="rounded-lg border border-border-dark bg-paper p-6 text-paper-foreground"
                key={group.title}
              >
                <p className="text-lg font-semibold">{group.title}</p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-paper-muted">
                  {group.items.map((item) => (
                    <li className="border-t border-border-dark pt-3" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-24">
        <PageDecor tone={isGas ? "process" : "services"} />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-base font-semibold text-accent">
                {labels.includes}
              </p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
                {labels.exampleTitle}
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {examples.map((item) => (
                <article
                  className="rounded-lg border border-border bg-card p-6"
                  key={item.title}
                >
                  <p className="text-xl font-semibold">{item.title}</p>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    {"description" in item ? item.description : item.summary}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-lg border border-border bg-card p-6 sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-base font-semibold text-accent">
                  {labels.packageTitle}
                </p>
                <h2 className="mt-3 text-3xl font-semibold">
                  {isGas ? detail.groups[2].title : service.title}
                </h2>
              </div>
              <WhatsAppCta
                className="h-11 px-5"
                href={whatsappLink(service.title, language)}
              >
                {labels.cta}
              </WhatsAppCta>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {packages.slice(0, 4).map((item, index) => (
                <article
                  className="rounded-lg border border-border bg-surface p-5"
                  key={
                    "name" in item
                      ? `${item.label}-${item.name}-${index}`
                      : item.title
                  }
                >
                  <p className="font-semibold">
                    {"name" in item ? item.name : item.title}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-accent">
                    {"price" in item ? item.price : whatsapp.customGas}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    {"description" in item
                      ? item.description
                      : item.features.slice(0, 3).join(", ")}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-12 sm:px-8 sm:pb-14 lg:px-10 lg:pb-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-lg border border-border bg-card p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-3xl font-semibold">{labels.ctaTitle}</p>
            <p className="mt-3 text-sm leading-7 text-muted">
              {labels.ctaDescription}
            </p>
          </div>
          <WhatsAppCta href={whatsappLink(service.title, language)}>
            {labels.cta}
          </WhatsAppCta>
        </div>
      </section>
    </main>
  );
}
