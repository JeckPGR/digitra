"use client";

import Link from "next/link";
import { whatsappLink } from "../lib/site";
import { CtaPanel } from "./cta-panel";
import { DesignPackageCards } from "./design-package-cards";
import { useLanguage } from "./language-provider";
import { PackageTabs } from "./package-tabs";
import { PageDecor } from "./page-decor";
import { WhatsAppCta } from "./whatsapp-cta";

export function ServicesContent() {
  const { copy, language } = useLanguage();
  const {
    companyProfilePackages,
    gasExamples,
    landingPackages,
    servicesPage,
    workflowSteps,
  } = copy;
  const learnMoreLabel =
    language === "id" ? "Pelajari Lebih Lanjut" : "Learn more";

  return (
    <main className="page-transition flex-1 bg-surface text-surface-foreground">
      <section className="relative overflow-hidden px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-20">
        <PageDecor tone="services" />
        <div className="mx-auto flex max-w-7xl flex-col gap-7 sm:gap-8">
          <div>
            <p className="text-base font-semibold text-accent">
              {servicesPage.hero.eyebrow}
            </p>
            <h1 className="mt-4 text-5xl font-semibold leading-[0.96] tracking-normal sm:text-7xl lg:text-8xl">
              {servicesPage.hero.title}
            </h1>
          </div>
          <div className="w-full rounded-lg border border-border bg-card p-6 sm:p-8">
            <p className="text-base leading-8 text-muted sm:text-lg">
              {servicesPage.hero.description}
            </p>
          </div>
        </div>
      </section>

      <section
        className="relative scroll-mt-24 overflow-hidden px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-32"
        id="gas"
      >
        <PageDecor align="right" tone="process" />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-base font-semibold text-accent">
                {servicesPage.gas.eyebrow}
              </p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
                {servicesPage.gas.title}
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted">
                {servicesPage.gas.description}
              </p>
              <Link
                className="mt-6 hidden h-11 items-center justify-center rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground transition hover:bg-accent-strong hover:text-white lg:inline-flex"
                href="/services/gas"
              >
                {servicesPage.gas.learnMore}
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {gasExamples.map((item) => (
                <article
                  className="flex h-full flex-col rounded-lg border border-border bg-card p-6"
                  key={item.title}
                >
                  <p className="text-2xl font-semibold leading-tight">
                    {item.title}
                  </p>
                  <p className="mt-5 flex-1 text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                  <WhatsAppCta
                    className="mt-6 h-11 px-4"
                    href={whatsappLink(`custom ${item.title}`, language)}
                    tone="blue"
                  >
                    {item.button}
                  </WhatsAppCta>
                </article>
              ))}
            </div>
          </div>
          <Link
            className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground transition hover:bg-accent-strong hover:text-white lg:hidden"
            href="/services/gas"
          >
            {servicesPage.gas.learnMore}
          </Link>
        </div>
      </section>

      <section
        className="relative scroll-mt-24 overflow-hidden bg-panel px-5 py-12 text-panel-foreground sm:px-8 sm:py-14 lg:px-10 lg:py-32"
        id="company-profile"
      >
        <PageDecor tone="hero" />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-base font-semibold text-accent-strong">
                {servicesPage.website.eyebrow}
              </p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
                {servicesPage.website.title}
              </h2>
            </div>
            <div>
              <p className="text-sm leading-7 text-muted-dark">
                {servicesPage.website.description}
              </p>
              <Link
                className="mt-5 hidden h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition hover:bg-accent-strong hover:text-white lg:inline-flex"
                href="/services/company-profile-landing-page"
              >
                {servicesPage.website.learnMore}
              </Link>
            </div>
          </div>

          <PackageTabs
            companyProfilePackages={companyProfilePackages}
            landingPackages={landingPackages}
          />
          <Link
            className="w-full mt-6 inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition hover:bg-accent-strong hover:text-white lg:hidden"
            href="/services/company-profile-landing-page"
          >
            {servicesPage.website.learnMore}
          </Link>
        </div>
      </section>

      <section
        className="relative scroll-mt-24 overflow-hidden px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-32"
        id="design"
      >
        <PageDecor align="right" tone="services" />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-base font-semibold text-accent">
                {servicesPage.design.eyebrow}
              </p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
                {servicesPage.design.title}
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted">
                {servicesPage.design.description}
              </p>
            </div>
            <Link
              className="hidden h-11 items-center justify-center rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground transition hover:bg-accent-strong hover:text-white lg:inline-flex"
              href="/services/designs"
            >
              {learnMoreLabel}
            </Link>
          </div>

          <div className="mt-10">
            <DesignPackageCards />
          </div>
          <Link
            className="w-full mt-6 inline-flex h-12 items-center justify-center rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground transition hover:bg-accent-strong hover:text-white lg:hidden"
            href="/services/designs"
          >
            {learnMoreLabel}
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden bg-panel px-5 py-12 text-panel-foreground sm:px-8 sm:py-14 lg:px-10 lg:py-32">
        <PageDecor tone="testimonial" />
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold text-accent-strong">
              {servicesPage.workflow.eyebrow}
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
              {servicesPage.workflow.title}
            </h2>
          </div>
          <div className="grid gap-4">
            {workflowSteps.map((step, index) => (
              <article
                className="rounded-lg border border-border-dark bg-paper p-6 text-paper-foreground"
                key={step.title}
              >
                <div className="flex gap-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent text-sm font-semibold text-accent-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-xl font-semibold">{step.title}</p>
                    <p className="mt-3 text-sm leading-7 text-paper-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-24">
        <PageDecor tone="contact" />
        <CtaPanel
          action={
            <Link
              className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition hover:bg-accent-strong hover:text-white"
              href="/contact"
            >
              {servicesPage.recommendation.cta}
            </Link>
          }
          description={servicesPage.recommendation.description}
          eyebrow={servicesPage.hero.eyebrow}
          title={servicesPage.recommendation.title}
        />
      </section>
    </main>
  );
}
