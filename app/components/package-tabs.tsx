"use client";

import { useMemo, useState } from "react";
import { whatsappLink } from "../lib/site";
import { useLanguage } from "./language-provider";
import { WhatsAppCta } from "./whatsapp-cta";

type Package = {
  name: string;
  price: string;
  label: string;
  featured?: boolean;
  features: readonly string[];
};

type PackageTabsProps = {
  landingPackages: readonly Package[];
  companyProfilePackages: readonly Package[];
};

type ActiveTab = "landing" | "company";

export function PackageTabs({
  companyProfilePackages,
  landingPackages,
}: PackageTabsProps) {
  const [activeTab, setActiveTab] = useState<ActiveTab>("landing");
  const { copy, language } = useLanguage();
  const tabs = useMemo(
    () => [
      {
        key: "landing" as const,
        ...copy.packageTabs.landing,
      },
      {
        key: "company" as const,
        ...copy.packageTabs.company,
      },
    ],
    [copy.packageTabs],
  );
  const active = tabs.find((tab) => tab.key === activeTab) ?? tabs[0];
  const packages = useMemo(
    () => (activeTab === "landing" ? landingPackages : companyProfilePackages),
    [activeTab, companyProfilePackages, landingPackages],
  );

  return (
    <div className="mt-12">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div className="max-w-3xl">
          <h3 className="text-2xl font-semibold">{active.label}</h3>
          <p className="mt-3 text-sm leading-7 text-muted-dark">
            {active.description}
          </p>
        </div>
        <div className="grid grid-cols-2 rounded-full border border-border-dark bg-surface/10 p-1 text-sm font-semibold text-muted-dark">
          {tabs.map((tab) => (
            <button
              className={`rounded-full px-4 py-2 transition ${
                activeTab === tab.key
                  ? "bg-accent text-accent-foreground shadow-accent"
                  : "hover:text-panel-foreground"
              }`}
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="tab-panel mt-6 grid gap-5 lg:grid-cols-2" key={activeTab}>
        {packages.map((item) => (
          <article
            className={`group relative isolate flex h-full overflow-hidden rounded-xl border p-7 transition duration-300 hover:-translate-y-1 ${
              item.featured
                ? "border-accent bg-card text-card-foreground shadow-accent"
                : "border-border-dark bg-surface/10 text-panel-foreground hover:border-accent/70"
            }`}
            key={`${active.label}-${item.name}`}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-accent" />
            <div
              className={`absolute -right-16 -top-16 h-36 w-36 rounded-full bg-accent/10 blur-2xl transition duration-300 group-hover:bg-accent/20 ${
                item.featured ? "opacity-100" : "opacity-60"
              }`}
            />
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-accent">
                  {item.label}
                </p>
                <h4 className="mt-2 text-2xl font-semibold">{item.name}</h4>
              </div>
              <div className="sm:text-right">
                <p className="text-2xl font-semibold">{item.price}</p>
                <span className="mt-2 inline-flex rounded-full border border-accent/35 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {item.features.length} {language === "id" ? "poin" : "benefits"}
                </span>
              </div>
            </div>
            <ul
              className={`mt-7 grid flex-1 gap-3 text-sm leading-6 sm:grid-cols-2 ${
                item.featured ? "text-muted" : "text-muted-dark"
              }`}
            >
              {item.features.map((feature) => (
                <li
                  className={`flex gap-3 border-t pt-3 ${
                    item.featured ? "border-border" : "border-border-dark"
                  }`}
                  key={feature}
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <WhatsAppCta
              className="mt-7 h-11 w-full px-5"
              href={whatsappLink(`${active.label} ${item.name}`, language)}
              tone="blue"
            >
              {copy.whatsapp.askPackage}
            </WhatsAppCta>
          </article>
        ))}
      </div>
    </div>
  );
}
