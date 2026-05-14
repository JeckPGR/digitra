import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AppShell } from "./components/app-shell";
import { LanguageProvider } from "./components/language-provider";
import { ThemeProvider } from "./components/theme-provider";
import { getSiteUrl } from "./lib/seo";
import "./globals.css";

const siteUrl = getSiteUrl();
const siteTitle = "Digitra | Solusi Web, Automasi Operasional & Visual Branding";
const siteDescription =
  "Penuhi semua kebutuhan digital bisnis Anda di satu tempat. Digitra melayani pembuatan website, sistem automasi operasional (GAS), hingga visual branding.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "all in one digital agency",
    "solusi digital terpadu",
    "jasa web development",
    "jasa pembuatan landing page",
    "jasa automasi bisnis",
    "sistem operasional bisnis",
    "jasa visual branding",
    "jasa desain logo",
    "desain feeds sosial media",
    "digitra",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/digitra-transparent.png",
    apple: "/digitra-transparent.png",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName: "Digitra",
    images: [
      {
        url: "/digitra-transparent.png",
        width: 756,
        height: 167,
        alt: "Digitra",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
    images: ["/digitra-transparent.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full bg-surface text-foreground">
        <Script id="digitra-init" strategy="beforeInteractive">
          {`try{var t=localStorage.getItem('digitra-theme')==='light'?'light':'dark';var l=localStorage.getItem('digitra-language')==='en'?'en':'id';document.documentElement.dataset.theme=t;document.documentElement.classList.toggle('light',t==='light');document.documentElement.lang=l}catch(e){}`}
        </Script>
        <ThemeProvider>
          <LanguageProvider>
            <AppShell>{children}</AppShell>
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
