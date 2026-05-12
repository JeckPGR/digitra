"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { siteConfig, whatsappLink } from "../lib/site";
import { LanguageSwitcher } from "./language-switcher";
import { useLanguage } from "./language-provider";
import { MobileBottomNav } from "./mobile-bottom-nav";
import { ThemeSwitcher } from "./theme-switcher";
import { useTheme } from "./theme-provider";
import { WhatsAppCta, WhatsAppIcon } from "./whatsapp-cta";

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { copy, language } = useLanguage();
  const { navLinks, site, whatsapp } = copy;
  // Ubah ukuran logo di sini jika ingin menyesuaikan tinggi/lebar.
  const logoSize = {
    mobile: { className: "h-8", height: 32, width: 112 },
    desktop: { className: "h-10", height: 44, width: 150 },
    footer: { className: "h-10", height: 44, width: 150 },
  };

  return (
    <div className="flex min-h-screen flex-col pb-24 pt-18 lg:pb-0 lg:pt-0">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-surface/96 backdrop-blur-xl lg:hidden">
        <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" aria-label="Digitra home">
            <DigitraLogo {...logoSize.mobile} priority />
          </Link>
          <div className="flex items-center gap-1 rounded-full border border-border bg-card/70 p-1">
            <LanguageSwitcher compact />
            <ThemeSwitcher compact />
          </div>
        </div>
      </header>

      <header className="sticky top-0 z-50 hidden bg-surface/92 backdrop-blur-xl lg:block">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-10">
          <Link href="/" aria-label="Digitra home">
            <DigitraLogo {...logoSize.desktop} priority />
          </Link>

          <nav className="flex items-center gap-2 rounded-full border border-border bg-card/70 p-1 text-sm text-muted">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-4 py-2 font-semibold transition ${
                    active
                      ? "bg-accent text-accent-foreground shadow-accent"
                      : "text-muted hover:bg-accent/10 hover:text-card-foreground"
                  }`}
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1 rounded-full border border-border bg-card/70 p-1">
            <ThemeSwitcher compact />
            <LanguageSwitcher compact />
          </div>
        </div>
      </header>

      {children}

      <a
        aria-label={whatsapp.chatWhatsApp}
        className="fixed bottom-8 right-8 z-50 hidden h-16 w-16 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-whatsapp transition hover:-translate-y-1 hover:bg-whatsapp-strong lg:inline-flex"
        href={whatsappLink(whatsapp.defaultTopic, language)}
        rel="noreferrer"
        target="_blank"
        title={whatsapp.chatWhatsApp}
      >
        <WhatsAppIcon className="h-7 w-7 shrink-0 text-white"  />
      </a>

      <footer className="bg-surface pb-10 pt-10 text-surface-foreground sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-lg bg-card p-8 sm:p-10">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
              <div>
                <DigitraLogo {...logoSize.footer} />
                <p className="mt-4 max-w-md text-sm leading-7 text-muted">
                  {site.tagline}.
                </p>
              </div>
              <div>
                <p className="font-semibold">{site.menuTitle}</p>
                <div className="mt-4 flex flex-col gap-2 text-sm text-muted">
                  {navLinks.map((link) => (
                    <Link
                      className="transition hover:text-accent"
                      href={link.href}
                      key={link.href}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-semibold">{site.contactTitle}</p>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {site.contactDescription}
                </p>
                <WhatsAppCta
                  className="mt-5 h-11 px-5"
                  href={whatsappLink(whatsapp.newBriefTopic, language)}
                >
                  {site.contactCta}
                </WhatsAppCta>
              </div>
            </div>
          </div>
          <p className="mt-8 text-center text-xs text-muted">
            &copy; {siteConfig.founded} {siteConfig.name}. {site.copyright}
          </p>
        </div>
      </footer>
      <MobileBottomNav />
    </div>
  );
}

function DigitraLogo({
  className,
  height,
  priority = false,
  width,
}: {
  className: string;
  height: number;
  priority?: boolean;
  width: number;
}) {
  const { theme } = useTheme();
  const src =
    theme === "dark"
      ? "/Digitra-Logo-Dark-transparent.png"
      : "/digitra-transparent.png";

  return (
    <Image
      alt="Digitra"
      className={`${className} w-auto object-contain`}
      height={height}
      priority={priority}
      src={src}
      width={width}
    />
  );
}
