"use client";

import Link from "next/link";
import { whatsappLink } from "../lib/site";
import { CtaPanel } from "./cta-panel";
import { useLanguage } from "./language-provider";
import { PageDecor } from "./page-decor";
import { SmoothFaq } from "./smooth-faq";
import { WhatsAppCta } from "./whatsapp-cta";

export function DesignServiceContent() {
  const { copy, language } = useLanguage();
  const { designFaqs, designPackages, servicesPage } = copy;
  const service = servicesPage.design;
  const detail = service.detail;

  const labels =
    language === "id"
      ? {
          back: "Kembali ke Services",
          overview: "Ringkasan layanan",
          packageTitle: "Paket desain Digitra",
          packageEyebrow: "Harga & Layanan",
          faqEyebrow: "FAQ Desain",
          learnMore: "Pelajari Lebih Lanjut",
          ctaEyebrow: "Brand Visual",
          ctaTitle: "Butuh desain yang terlihat profesional dan siap dipakai?",
          ctaDescription:
            "Kirim kebutuhan desain logo, brosur, poster, atau feeds Instagram Anda. Digitra bantu pilih paket yang paling efisien untuk target bisnis dan budget.",
          cta: "Konsultasi Desain via WhatsApp",
        }
      : {
          back: "Back to Services",
          overview: "Service overview",
          packageTitle: "Digitra design packages",
          packageEyebrow: "Pricing & Services",
          faqEyebrow: "Design FAQ",
          learnMore: "Learn more",
          ctaEyebrow: "Brand Visual",
          ctaTitle: "Need professional designs that are ready to use?",
          ctaDescription:
            "Send your logo, brochure, poster, or Instagram feed design needs. Digitra will help recommend the most efficient package for your business goals and budget.",
          cta: "Consult Design via WhatsApp",
        };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: designFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="page-transition flex-1 bg-surface text-surface-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden px-5 py-12 sm:px-8 sm:py-10 lg:px-10 lg:py-24">
        <PageDecor tone="services" />
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

      <section className="relative overflow-hidden px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-24">
        <PageDecor align="right" tone="process" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              {labels.packageEyebrow}
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
              {labels.packageTitle}
            </h2>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {designPackages.map((group) => {
              const isSocmed = group.title
                .toLowerCase()
                .includes("social media");

              return (
                <article
                  className="flex h-full flex-col rounded-lg border border-border bg-card p-6"
                  key={group.title}
                >
                  <p className="text-2xl font-semibold">{group.title}</p>
                  <ul className="mt-5 flex-1 space-y-3 text-sm leading-7 text-muted">
                    {group.packages.map((item) => (
                      <li className="border-t border-border pt-3" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {isSocmed ? (
                      <Link
                        className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-4 text-sm font-semibold text-accent-foreground transition hover:bg-accent-strong hover:text-white"
                        href="/services/socmed"
                      >
                        {labels.learnMore}
                      </Link>
                    ) : null}
                    <WhatsAppCta
                      className="h-11 px-4"
                      href={whatsappLink(group.title, language)}
                      tone="blue"
                    >
                      {copy.whatsapp.askPackage}
                    </WhatsAppCta>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

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
