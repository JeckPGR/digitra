"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { whatsappLink } from "../lib/site";
import { useLanguage } from "./language-provider";
import { WhatsAppIcon } from "./whatsapp-cta";

const icons = {
  "/": HomeIcon,
  "/services": ServicesIcon,
  "/contact": ContactIcon,
};

export function MobileBottomNav() {
  const pathname = usePathname();
  const { copy, language } = useLanguage();
  const { navLinks, whatsapp } = copy;

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 px-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-4 gap-2 rounded-full border border-border bg-card/95 p-1.5 shadow-[0_-16px_46px_rgba(0,0,0,0.18)] backdrop-blur-xl">
        {navLinks.map((link) => {
          const active =
            link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
          const Icon = icons[link.href as keyof typeof icons];

          return (
            <Link
              aria-current={active ? "page" : undefined}
              className={`flex h-12 items-center justify-center gap-1 rounded-full px-2 text-xs font-semibold transition ${
                active
                  ? "bg-accent text-accent-foreground"
                  : "text-muted hover:bg-surface hover:text-surface-foreground"
              }`}
              href={link.href}
              key={link.href}
            >
              <Icon />
              <span className="hidden min-[390px]:inline">{link.label}</span>
            </Link>
          );
        })}
        <a
          aria-label={whatsapp.startProjectLabel}
          className="flex h-12 items-center justify-center rounded-full bg-whatsapp px-2 text-whatsapp-foreground transition hover:bg-whatsapp-strong"
          href={whatsappLink(whatsapp.defaultTopic, language)}
          rel="noreferrer"
          target="_blank"
        >
          <WhatsAppIcon />
        </a>
      </div>
    </nav>
  );
}

function HomeIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="m3 10.5 9-7 9 7" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M9 21v-6h6v6" />
    </svg>
  );
}

function ServicesIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h10" />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
    </svg>
  );
}
