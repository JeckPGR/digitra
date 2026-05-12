"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "./language-provider";

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
  const { copy } = useLanguage();
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
        <div className="grid grid-cols-2 rounded-full border border-border-dark bg-paper p-1 text-sm font-semibold text-paper-muted">
          {tabs.map((tab) => (
            <button
              className={`rounded-full px-4 py-2 transition ${
                activeTab === tab.key
                  ? "bg-accent text-accent-foreground shadow-accent"
                  : "hover:text-paper-foreground"
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

      <div className="tab-panel mt-6 grid gap-4 lg:grid-cols-2" key={activeTab}>
        {packages.map((item) => (
          <article
            className={`flex h-full flex-col rounded-lg border p-6 ${
              item.featured
                ? "border-accent bg-surface text-surface-foreground"
                : "border-border-dark bg-paper text-paper-foreground"
            }`}
            key={`${active.label}-${item.name}`}
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-accent-strong">
                  {item.label}
                </p>
                <h4 className="mt-2 text-2xl font-semibold">{item.name}</h4>
              </div>
              <p className="text-2xl font-semibold">{item.price}</p>
            </div>
            <ul
              className={`mt-6 grid flex-1 gap-3 text-sm leading-6 sm:grid-cols-2 ${
                item.featured ? "text-muted" : "text-paper-muted"
              }`}
            >
              {item.features.map((feature) => (
                <li
                  className={`border-t pt-3 ${
                    item.featured ? "border-border" : "border-border-dark"
                  }`}
                  key={feature}
                >
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
