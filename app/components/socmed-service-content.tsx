"use client";

import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "../lib/site";
import { useLanguage } from "./language-provider";
import { PageDecor } from "./page-decor";
import { ProductImageModal } from "./product-image-modal";
import { WhatsAppCta } from "./whatsapp-cta";

const designShowcases = [
  {
    title: "Brosur",
    image: "/Design/Brosur.jpeg",
  },
  {
    title: "JWS Graphic",
    image: "/Design/DesignGrafis-JWS.jpeg",
  },
  {
    title: "StudioIn Graphic",
    image: "/Design/DesignGrafis-StudioIn.jpeg",
  },
  {
    title: "Bakery Logo",
    image: "/Design/Logo-Bakery.jpeg",
  },
  {
    title: "Fresh Laundry Logo",
    image: "/Design/Logo-FreshLaundry.jpeg",
  },
  {
    title: "Jokiwithsora Logo",
    image: "/Design/Logo-Jokiwithsora.jpeg",
  },
  {
    title: "Kelra Logo",
    image: "/Design/Logo-Kelra.jpeg",
  },
  {
    title: "MakPhung Logo",
    image: "/Design/Logo-MakPhung.jpeg",
  },
  {
    title: "Studio Logo",
    image: "/Design/Logo-Studio.jpeg",
  },
  {
    title: "Teras Graha Logo",
    image: "/Design/Logo-TerasGraha.jpeg",
  },
] as const;

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
            "Digitra membantu brand menyusun konten Instagram yang konsisten, mudah dibaca, dan siap dipakai untuk campaign harian maupun peluncuran produk.",
          primaryCta: "Diskusi Paket Socmed",
          secondaryCta: "Lihat Alur",
          overviewLabel: "Detail layanan",
          detailTitle:
            "Paket visual brand untuk feed, logo, dan brosur yang siap dipakai.",
          detailDescription:
            "Layanan ini mencakup desain feed media sosial, logo usaha, dan brosur promosi yang disesuaikan dengan karakter brand, target audiens, serta kebutuhan campaign.",
          showcaseEyebrow: "Design Showcase",
          showcaseTitle: "Contoh visual dari portfolio design Digitra.",
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
            "Logo",
            "Brosur",
          ],
        }
      : {
          back: "Back to Services",
          eyebrow: "Social Media Studio",
          title:
            "Feeds, stories, and campaign visuals that feel polished from the first swipe.",
          description:
            "Digitra helps brands shape Instagram content that is consistent, easy to scan, and ready for daily campaigns or product launches.",
          primaryCta: "Discuss Socmed Package",
          secondaryCta: "See Workflow",
          overviewLabel: "Service detail",
          detailTitle:
            "Brand visuals for feeds, logos, and brochures that are ready to use.",
          detailDescription:
            "This service covers social media feed design, business logos, and promotional brochures shaped around the brand character, audience, and campaign needs.",
          showcaseEyebrow: "Design Showcase",
          showcaseTitle: "Visual examples from Digitra's design portfolio.",
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
            "Logo",
            "Brochure",
          ],
        };

  const carouselItems = [...designShowcases, ...designShowcases];

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
                className="inline-flex h-12 items-center justify-center rounded-full border border-accent bg-card px-6 text-sm font-semibold text-accent transition hover:bg-accent hover:text-white"
                href="#workflow"
              >
                {labels.secondaryCta}
              </a>
            </div>
          </div>

          <div className="socmed-glow relative rounded-lg border border-border bg-card p-5 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {labels.overviewLabel}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              {labels.detailTitle}
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted">
              {labels.detailDescription}
            </p>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
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
                <ShowcaseImage item={item} key={`${item.image}-${index}`} />
              ))}
            </div>
          </div>
          <div className="socmed-carousel overflow-hidden">
            <div
              className="socmed-carousel-track flex w-max gap-5 px-5 sm:px-8 lg:px-10"
              data-direction="reverse"
            >
              {carouselItems.map((item, index) => (
                <ShowcaseImage
                  item={item}
                  key={`${item.image}-reverse-${index}`}
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

function ShowcaseImage({
  item,
}: {
  item: (typeof designShowcases)[number];
}) {
  return (
    <article className="group w-45 shrink-0 overflow-hidden rounded-lg border border-border bg-card shadow-card sm:w-55">
      <ProductImageModal
        alt={`${item.title} showcase`}
        className="relative block w-full cursor-zoom-in overflow-hidden border-0 bg-transparent p-0 text-left"
        src={item.image}
      >
        <div className="relative aspect-4/5 overflow-hidden bg-surface">
          <Image
            alt={`${item.title} showcase`}
            className="object-cover object-center transition duration-500 group-hover:scale-[1.025]"
            fill
            sizes="(min-width: 1024px) 220px, 180px"
            src={item.image}
          />
        </div>
      </ProductImageModal>
    </article>
  );
}
