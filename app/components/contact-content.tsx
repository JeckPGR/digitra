"use client";

import { siteConfig, whatsappLink } from "../lib/site";
import { useLanguage } from "./language-provider";
import { PageDecor } from "./page-decor";
import { WhatsAppCta, WhatsAppIcon } from "./whatsapp-cta";

export function ContactContent() {
  const { copy, language } = useLanguage();
  const { contactPage, serviceHighlights, whatsapp } = copy;

  return (
    <main className="page-transition flex-1 bg-surface text-surface-foreground">
      <section className="relative overflow-hidden px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <PageDecor tone="contact" />
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-base font-semibold text-accent">
              {contactPage.hero.eyebrow}
            </p>
            <h1 className="mt-6 text-5xl font-semibold leading-[0.96] tracking-normal sm:text-7xl">
              {contactPage.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
              {contactPage.hero.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppCta
                href={whatsappLink(contactPage.hero.topic, language)}
              >
                {contactPage.hero.primaryCta}
              </WhatsAppCta>
              <a
                className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-card px-7 text-sm font-semibold text-card-foreground transition hover:border-accent hover:text-accent"
                href={`mailto:${siteConfig.email}`}
              >
                {contactPage.hero.secondaryCta}
              </a>
            </div>
          </div>

          <aside className="rounded-lg border border-border bg-card p-6">
            <p className="text-2xl font-semibold">{contactPage.brief.title}</p>
            <p className="mt-3 text-sm leading-7 text-muted">
              {contactPage.brief.description}
            </p>
            <div className="mt-6 grid gap-3 text-sm">
              {contactPage.brief.items.map((item, index) => (
                <div
                  className="flex items-center gap-3 rounded-lg border border-border bg-surface p-4"
                  key={item}
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                    {index + 1}
                  </span>
                  <span className="text-muted">{item}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="relative overflow-hidden bg-panel px-5 py-12 text-panel-foreground sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <PageDecor align="right" tone="services" />
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-base font-semibold text-accent-strong">
              {contactPage.topics.eyebrow}
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
              {contactPage.topics.title}
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {serviceHighlights.map((service) => (
              <a
                className="flex h-full flex-col rounded-lg border border-border-dark bg-paper p-6 text-paper-foreground shadow-card transition hover:-translate-y-1 hover:border-whatsapp"
                href={whatsappLink(service.title, language)}
                key={service.title}
                rel="noreferrer"
                target="_blank"
              >
                <p className="text-sm font-semibold text-accent-strong">
                  {service.eyebrow}
                </p>
                <h3 className="mt-4 text-2xl font-semibold leading-tight">
                  {service.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-paper-muted">
                  {service.summary}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-whatsapp">
                  <WhatsAppIcon />
                  {whatsapp.consultViaWhatsApp}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <PageDecor tone="faq" />
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-base font-semibold text-accent">
              {contactPage.route.eyebrow}
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
              {contactPage.route.title}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {contactPage.route.cards.map((card) => (
              <ContactCard
                action={card.action}
                description={card.description}
                href={
                  card.title === "Email"
                    ? `mailto:${siteConfig.email}`
                    : whatsappLink(card.topic, language)
                }
                key={card.title}
                title={card.title}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactCard({
  action,
  description,
  href,
  title,
}: {
  action: string;
  description: string;
  href: string;
  title: string;
}) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-card p-6">
      <p className="text-2xl font-semibold">{title}</p>
      <p className="mt-4 flex-1 text-sm leading-7 text-muted">{description}</p>
      {href.startsWith("https://wa.me") ? (
        <WhatsAppCta className="mt-6" href={href} tone="text">
          {action}
        </WhatsAppCta>
      ) : (
        <a
          className="mt-6 inline-flex text-sm font-semibold text-accent"
          href={href}
        >
          {action}
        </a>
      )}
    </article>
  );
}
