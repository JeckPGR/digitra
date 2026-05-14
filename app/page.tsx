"use client";

import Image from "next/image";
import Link from "next/link";
import { CountUpNumber } from "./components/count-up-number";
import { CtaPanel } from "./components/cta-panel";
import { useLanguage } from "./components/language-provider";
import { PageDecor } from "./components/page-decor";
import { ProductImageModal } from "./components/product-image-modal";
import { SmoothFaq } from "./components/smooth-faq";
import { WhatsAppCta } from "./components/whatsapp-cta";
import { whatsappLink } from "./lib/site";

const workShowcases = [
  {
    title: "Charcoal Pro",
    label: "Company Profile",
    image: "/lancom/CharcoalPro-CompanyProfile.png",
  },
  {
    title: "Paja Barbershop",
    label: "Booking App",
    image: "/lancom/PajaBarbershop-BookingApp.png",
  },
  {
    title: "Tani Premium",
    label: "Landing Page",
    image: "/lancom/TaniPremium.Landing.png",
  },
  {
    title: "Fashion Retail POS",
    label: "GAS Automation",
    image: "/GAS/BusinessFashion-V2.png",
  },
  {
    title: "F&B Management",
    label: "GAS Dashboard",
    image: "/GAS/BusinessFnB-V2.png",
  },
  {
    title: "Digital Reseller App",
    label: "Business System",
    image: "/GAS/BusinessAppPremium-V2.png",
  },
  {
    title: "Job Application",
    label: "Workflow System",
    image: "/GAS/JobApplication-V2.png",
  },
];

const designShowcases = [
  {
    title: "Brosur",
    label: "Design",
    image: "/Design/Brosur.jpeg",
  },
  {
    title: "JWS Graphic",
    label: "Design",
    image: "/Design/DesignGrafis-JWS.jpeg",
  },
  {
    title: "StudioIn Graphic",
    label: "Design",
    image: "/Design/DesignGrafis-StudioIn.jpeg",
  },
  {
    title: "Bakery Logo",
    label: "Logo",
    image: "/Design/Logo-Bakery.jpeg",
  },
  {
    title: "Fresh Laundry Logo",
    label: "Logo",
    image: "/Design/Logo-FreshLaundry.jpeg",
  },
  {
    title: "Jokiwithsora Logo",
    label: "Logo",
    image: "/Design/Logo-Jokiwithsora.jpeg",
  },
  {
    title: "Kelra Logo",
    label: "Logo",
    image: "/Design/Logo-Kelra.jpeg",
  },
  {
    title: "MakPhung Logo",
    label: "Logo",
    image: "/Design/Logo-MakPhung.jpeg",
  },
  {
    title: "Studio Logo",
    label: "Logo",
    image: "/Design/Logo-Studio.jpeg",
  },
  {
    title: "Teras Graha Logo",
    label: "Logo",
    image: "/Design/Logo-TerasGraha.jpeg",
  },
];

export default function Home() {
  const { copy, language } = useLanguage();
  const { home, serviceHighlights, faqs } = copy;
  const workCarouselItems = [...workShowcases, ...workShowcases];
  const designCarouselItems = [...designShowcases, ...designShowcases];

  return (
    <main className="page-transition flex-1 bg-surface text-surface-foreground">
      <section className="relative overflow-hidden px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-20">
        <PageDecor tone="hero" />
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-center text-center">
            <p className="rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              {home.hero.eyebrow}
            </p>
            <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.94] tracking-normal sm:text-7xl lg:text-8xl">
              {home.hero.titlePrefix}{" "}
              <span className="text-accent">{home.hero.titleAccent}</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              {copy.site.tagline}.
            </p>
            <div className="mt-8 flex gap-3 ">
              <Link
                className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-sm font-semibold text-accent-foreground transition hover:bg-accent-strong hover:text-white"
                href="/contact"
              >
                {home.hero.primaryCta}
              </Link>
              <Link
                className="inline-flex h-12 items-center justify-center rounded-full border border-accent bg-card px-7 text-sm font-semibold text-accent! transition hover:bg-accent! hover:text-white! "
                href="/services"
              >
                {home.hero.secondaryCta}
              </Link>
            </div>
          </div>

          <div className="mt-4 grid gap-3 rounded-lg border border-border bg-card p-3 sm:grid-cols-4">
            {home.heroStats.map((stat) => (
              <div className="rounded-md bg-surface px-5 py-4" key={stat.label}>
                <p className="text-2xl font-semibold">
                  <CountUpNumber value={stat.value} />
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-28">
        <PageDecor align="right" tone="process" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-base font-semibold text-accent">
              {home.process.eyebrow}
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
              {home.process.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted">
              {home.process.description}
            </p>
          </div>

          <div className="work-carousel relative mt-12 space-y-5 overflow-hidden py-2">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-surface via-surface/80 to-transparent backdrop-blur-[2px] sm:w-32" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-surface via-surface/80 to-transparent backdrop-blur-[2px] sm:w-32" />
            <div className="work-carousel-track work-carousel-track-top flex w-max gap-5">
              {workCarouselItems.map((item, index) => (
                <WorkImageCard
                  item={item}
                  key={`${item.title}-${index}`}
                  variant="wide"
                />
              ))}
            </div>
            <div
              className="work-carousel-track work-carousel-track-bottom flex w-max gap-5"
            >
              {designCarouselItems.map((item, index) => (
                <WorkImageCard
                  item={item}
                  key={`${item.title}-design-${index}`}
                  variant="design"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Works / Our Beautiful Digital Direction section commented per request. */}

      <section className="relative overflow-hidden px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-28">
        <PageDecor tone="services" />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="text-base font-semibold text-accent">
                {home.serviceSection.eyebrow}
              </p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
                {home.serviceSection.title}
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 lg:justify-end">
              {home.serviceSection.chips.map((chip) => (
                <span
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted"
                  key={chip}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {serviceHighlights.map((service) => (
              <Link
                className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-accent"
                href={service.href}
                key={service.title}
              >
                <p className="text-sm font-semibold text-accent">
                  {service.eyebrow}
                </p>
                <h3 className="mt-4 text-2xl font-semibold leading-tight">
                  {service.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-muted">
                  {service.summary}
                </p>
                <span className="mt-7 inline-flex text-sm font-semibold text-accent">
                  {home.serviceSection.exploreCta}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-panel px-5 py-12 text-panel-foreground sm:px-8 sm:py-14 lg:px-10 lg:py-28">
        <PageDecor align="right" tone="testimonial" />
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-base font-semibold text-accent-strong">
              {home.testimonials.eyebrow}
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
              {home.testimonials.title}
            </h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
            {home.testimonials.items.map((testimonial, index) => (
              <figure
                className="testimonial-card flex h-full flex-col rounded-lg border border-border-dark bg-paper p-6 text-paper-foreground shadow-card"
                key={testimonial.name}
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <blockquote className="flex-1 text-sm leading-7 text-paper-muted">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <figcaption className="mt-6">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-paper-muted">
                    {testimonial.role}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-28">
        <PageDecor tone="faq" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-base font-semibold text-accent">
            {home.faq.eyebrow}
          </p>
          <h2 className="mt-3 text-4xl font-semibold">{home.faq.title}</h2>
          <SmoothFaq items={faqs} />
          <WhatsAppCta
            className="mt-10"
            href={whatsappLink(home.topics.faq, language)}
          >
            {home.faq.cta}
          </WhatsAppCta>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <PageDecor align="right" tone="contact" />
        <CtaPanel
          action={
            <WhatsAppCta
              href={whatsappLink(home.topics.closing, language)}
            >
              {home.closing.cta}
            </WhatsAppCta>
          }
          description={home.closing.description}
          eyebrow={copy.site.contactTitle}
          title={home.closing.title}
        />
      </section>
    </main>
  );
}

function WorkImageCard({
  item,
  variant,
}: {
  item: {
    title: string;
    label: string;
    image: string;
  };
  variant: "wide" | "design";
}) {
  const isGas = item.image.startsWith("/GAS/");
  const isDesign = variant === "design";

  return (
    <article
      className={`group shrink-0 overflow-hidden rounded-lg border border-border bg-card shadow-card ${
        isDesign ? "w-45 sm:w-55" : "w-70 sm:w-105"
      }`}
    >
      <ProductImageModal
        alt={`${item.title} ${item.label}`}
        className="relative block w-full cursor-zoom-in overflow-hidden border-0 bg-transparent p-0 text-left"
        src={item.image}
      >
        <div
          className={`relative overflow-hidden ${
            isDesign ? "aspect-4/5" : "aspect-16/10"
          } ${isGas ? "bg-slate-50" : "bg-surface"}`}
        >
          <div
            className={
              isGas
                ? "absolute -inset-x-8 -top-14 -bottom-4 sm:-inset-x-12 sm:-top-16 sm:-bottom-6"
                : "absolute inset-0"
            }
          >
            <Image
              alt={`${item.title} ${item.label}`}
              className={`transition duration-500 group-hover:scale-[1.025] ${
                isGas
                  ? "object-contain object-top"
                  : isDesign
                    ? "object-cover object-center"
                    : "object-cover object-top"
              }`}
              fill
              sizes={
                isDesign
                  ? "(min-width: 1024px) 220px, 180px"
                  : "(min-width: 1024px) 420px, 280px"
              }
              src={item.image}
            />
          </div>
        </div>
      </ProductImageModal>
    </article>
  );
}
