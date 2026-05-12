"use client";

import Link from "next/link";
import { whatsappLink } from "../lib/site";
import { useLanguage } from "./language-provider";
import { PageDecor } from "./page-decor";
import { WhatsAppCta } from "./whatsapp-cta";

const showcaseCards = [
  {
    title: "Launch Grid",
    category: "Campaign",
    accent: "from-[#ff8c61] to-[#ffd166]",
    blocks: ["Product story", "Offer hook", "CTA frame"],
  },
  {
    title: "Brand Feed",
    category: "Identity",
    accent: "from-[#8be9fd] to-[#25d366]",
    blocks: ["Tone visual", "Color rhythm", "Content pillars"],
  },
  {
    title: "Promo Set",
    category: "Sales",
    accent: "from-[#c084fc] to-[#ff8c61]",
    blocks: ["Carousel intro", "Value stack", "Closing CTA"],
  },
  {
    title: "Story Pack",
    category: "Engagement",
    accent: "from-[#25d366] to-[#f9f9f9]",
    blocks: ["Quick poll", "Soft sell", "DM trigger"],
  },
  {
    title: "Reels Cover",
    category: "Motion",
    accent: "from-[#ffd166] to-[#8be9fd]",
    blocks: ["Cover title", "Hook line", "Series badge"],
  },
];

export function SocmedServiceContent() {
  const { language } = useLanguage();

  const labels =
    language === "id"
      ? {
          back: "Kembali ke Services",
          eyebrow: "Social Media Studio",
          title:
            "Feed, story, dan campaign visual yang terasa rapi sejak swipe pertama.",
          description:
            "Kolaborasi Digitra x Sorative membantu brand menyusun konten Instagram yang konsisten, mudah dibaca, dan siap dipakai untuk campaign harian maupun peluncuran produk.",
          primaryCta: "Diskusi Paket Socmed",
          secondaryCta: "Lihat Alur",
          lockupLabel: "Creative collaboration",
          showcaseEyebrow: "Showcase Direction",
          showcaseTitle: "Ritme visual untuk konten yang terus bergerak.",
          processEyebrow: "Workflow Khusus",
          processTitle:
            "Dari brief bisnis ke sistem konten yang siap jalan.",
          closingTitle: "Siap bikin feed brand lebih niat?",
          closingDescription:
            "Kirim target akun, referensi visual, dan kebutuhan posting. Kami bantu susun arah desain yang cocok untuk brand Anda.",
          closingCta: "Mulai via WhatsApp",
          steps: [
            "Mapping karakter brand, target audiens, dan pilar konten.",
            "Pembuatan mood direction, grid rhythm, dan komponen visual.",
            "Produksi desain feed, story, cover, dan asset campaign sesuai scope.",
          ],
          deliverables: [
            "Feed design",
            "Story pack",
            "Cover reels",
            "Caption direction",
          ],
        }
      : {
          back: "Back to Services",
          eyebrow: "Social Media Studio",
          title:
            "Feeds, stories, and campaign visuals that feel polished from the first swipe.",
          description:
            "The Digitra x Sorative collaboration helps brands shape Instagram content that is consistent, easy to scan, and ready for daily campaigns or product launches.",
          primaryCta: "Discuss Socmed Package",
          secondaryCta: "See Workflow",
          lockupLabel: "Creative collaboration",
          showcaseEyebrow: "Showcase Direction",
          showcaseTitle: "A visual rhythm for content that keeps moving.",
          processEyebrow: "Special Workflow",
          processTitle: "From business brief to a content system ready to run.",
          closingTitle: "Ready to make your brand feed sharper?",
          closingDescription:
            "Send your account goals, visual references, and posting needs. We will shape a design direction that fits your brand.",
          closingCta: "Start on WhatsApp",
          steps: [
            "Map brand character, target audience, and content pillars.",
            "Create mood direction, grid rhythm, and visual components.",
            "Produce feed, story, cover, and campaign assets based on scope.",
          ],
          deliverables: [
            "Feed design",
            "Story pack",
            "Reels covers",
            "Caption direction",
          ],
        };

  const carouselItems = [...showcaseCards, ...showcaseCards];

  return (
    <main className="page-transition flex-1 overflow-hidden bg-surface text-surface-foreground">
      <section className="relative overflow-hidden px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-24">
        <PageDecor tone="services" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Link
              className="inline-flex h-10 items-center rounded-full border border-border bg-card px-4 text-sm font-semibold text-muted transition hover:border-accent hover:text-accent"
              href="/services"
            >
              {labels.back}
            </Link>
            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {labels.eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.96] tracking-normal sm:text-7xl">
              {labels.title}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              {labels.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppCta href={whatsappLink("paket social media", language)}>
                {labels.primaryCta}
              </WhatsAppCta>
              <a
                className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-card px-6 text-sm font-semibold text-card-foreground transition hover:border-accent hover:text-accent"
                href="#workflow"
              >
                {labels.secondaryCta}
              </a>
            </div>
          </div>

          <div className="socmed-glow relative rounded-lg border border-border bg-card p-5 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                {labels.lockupLabel}
              </p>
              <span className="h-2 w-2 rounded-full bg-whatsapp shadow-[0_0_22px_rgba(37,211,102,0.72)]" />
            </div>
            <CollabLogo />
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {labels.deliverables.map((item) => (
                <div
                  className="rounded-md border border-border bg-surface/50 px-3 py-4"
                  key={item}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-12 sm:py-14 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            {labels.showcaseEyebrow}
          </p>
          <h2 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            {labels.showcaseTitle}
          </h2>
        </div>

        <div className="mt-10 space-y-5">
          <div className="socmed-carousel overflow-hidden">
            <div className="socmed-carousel-track flex w-max gap-5 px-5 sm:px-8 lg:px-10">
              {carouselItems.map((item, index) => (
                <ShowcaseCard item={item} key={`${item.title}-${index}`} />
              ))}
            </div>
          </div>
          <div className="socmed-carousel overflow-hidden">
            <div
              className="socmed-carousel-track flex w-max gap-5 px-5 sm:px-8 lg:px-10"
              data-direction="reverse"
            >
              {carouselItems.map((item, index) => (
                <ShowcaseCard
                  item={item}
                  key={`${item.title}-reverse-${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-24"
        id="workflow"
      >
        <PageDecor align="right" tone="process" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {labels.processEyebrow}
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
              {labels.processTitle}
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {labels.steps.map((step, index) => (
              <article
                className="rounded-lg border border-border bg-card p-6"
                key={step}
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-sm font-semibold text-accent-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-5 text-sm leading-7 text-muted">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-28">
        <div className="socmed-glow mx-auto max-w-7xl rounded-lg border border-border bg-card p-6 sm:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-4xl font-semibold leading-tight">
                {labels.closingTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
                {labels.closingDescription}
              </p>
            </div>
            <WhatsAppCta href={whatsappLink("paket social media", language)}>
              {labels.closingCta}
            </WhatsAppCta>
          </div>
        </div>
      </section>
    </main>
  );
}

function CollabLogo() {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      <span className="rounded-md bg-surface px-4 py-3 text-2xl font-black uppercase tracking-normal text-surface-foreground sm:text-4xl">
        Digitra
      </span>
      <span className="grid h-10 w-10 place-items-center rounded-full border border-accent/50 text-lg font-semibold text-accent">
        x
      </span>
      <span className="rounded-md border border-border bg-surface/40 px-4 py-3 text-2xl font-black uppercase tracking-normal text-surface-foreground sm:text-4xl">
        Sorative
      </span>
    </div>
  );
}

function ShowcaseCard({
  item,
}: {
  item: (typeof showcaseCards)[number];
}) {
  return (
    <article className="w-[250px] shrink-0 overflow-hidden rounded-lg border border-border bg-card shadow-[0_18px_48px_rgba(0,0,0,0.16)] sm:w-[300px]">
      <div className={`h-36 bg-gradient-to-br ${item.accent} p-4`}>
        <div className="flex h-full flex-col justify-between rounded-md bg-surface/25 p-4 backdrop-blur-sm">
          <span className="w-fit rounded-full bg-surface/70 px-3 py-1 text-xs font-semibold text-surface-foreground">
            {item.category}
          </span>
          <p className="max-w-[11rem] text-2xl font-semibold leading-tight text-white">
            {item.title}
          </p>
        </div>
      </div>
      <div className="space-y-3 p-5">
        {item.blocks.map((block) => (
          <div className="flex items-center gap-3" key={block}>
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-sm font-semibold text-muted">{block}</span>
          </div>
        ))}
      </div>
    </article>
  );
}
