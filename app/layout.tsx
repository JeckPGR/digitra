import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { AppShell } from "./components/app-shell";
import { LanguageProvider } from "./components/language-provider";
import { ThemeProvider } from "./components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digitra - Digital Transformation",
  description:
    "Digitra adalah partner web development, company profile, landing page, automation, dan desain visual untuk evolusi digital bisnis.",
  icons: {
    icon: "/digitra-transparent.png",
    apple: "/digitra-transparent.png",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
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
      </body>
    </html>
  );
}
