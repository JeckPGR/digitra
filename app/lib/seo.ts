import type { MetadataRoute } from "next";

const localSiteUrl = "http://localhost:3000";
const productionSiteUrl = "https://www.digitra.site";

type SitemapRoute = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

function getFallbackSiteUrl() {
  return process.env.NODE_ENV === "production"
    ? productionSiteUrl
    : localSiteUrl;
}

export const sitemapRoutes: SitemapRoute[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/services", changeFrequency: "weekly", priority: 0.9 },
  { path: "/services/gas", changeFrequency: "monthly", priority: 0.8 },
  {
    path: "/services/company-profile-landing-page",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { path: "/services/designs", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
];

function normalizeSiteUrl(url: string | undefined) {
  if (!url) {
    return getFallbackSiteUrl();
  }

  const trimmedUrl = url.trim();

  if (!trimmedUrl) {
    return getFallbackSiteUrl();
  }

  const urlWithProtocol = /^https?:\/\//i.test(trimmedUrl)
    ? trimmedUrl
    : `https://${trimmedUrl}`;

  return urlWithProtocol.replace(/\/+$/, "");
}

export function getSiteUrl() {
  return normalizeSiteUrl(
    process.env.NEXT_PUBLIC_SITE_URL ??
      process.env.SITE_URL ??
      process.env.VERCEL_PROJECT_PRODUCTION_URL ??
      process.env.VERCEL_URL,
  );
}

export function absoluteUrl(path = "/") {
  const siteUrl = getSiteUrl();
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return normalizedPath === "/" ? siteUrl : `${siteUrl}${normalizedPath}`;
}
