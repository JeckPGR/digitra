type PageDecorProps = {
  align?: "left" | "right";
  tone?: "hero" | "process" | "services" | "testimonial" | "faq" | "contact";
};

const toneClasses = {
  hero: {
    orb: "bg-accent/18",
    ring: "border-accent/45",
    line: "bg-accent/35",
    dot: "bg-accent",
  },
  process: {
    orb: "bg-whatsapp/12",
    ring: "border-whatsapp/30",
    line: "bg-whatsapp/24",
    dot: "bg-whatsapp",
  },
  services: {
    orb: "bg-accent/14",
    ring: "border-accent/35",
    line: "bg-accent/28",
    dot: "bg-accent",
  },
  testimonial: {
    orb: "bg-surface/10",
    ring: "border-accent-strong/30",
    line: "bg-accent-strong/25",
    dot: "bg-accent-strong",
  },
  faq: {
    orb: "bg-whatsapp/10",
    ring: "border-accent/30",
    line: "bg-whatsapp/20",
    dot: "bg-accent",
  },
  contact: {
    orb: "bg-whatsapp/12",
    ring: "border-whatsapp/35",
    line: "bg-accent/30",
    dot: "bg-whatsapp",
  },
};

export function PageDecor({ align = "left", tone = "hero" }: PageDecorProps) {
  const sideClass = align === "left" ? "left-6" : "right-6";
  const oppositeClass = align === "left" ? "right-[12%]" : "left-[12%]";
  const orbSideClass = align === "left" ? "-right-20" : "-left-20";
  const palette = toneClasses[tone];

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <span
        className={`${orbSideClass} decor-blob absolute top-14 h-52 w-52 rounded-full ${palette.orb} blur-2xl`}
      />
      <span
        className={`${sideClass} decor-float absolute top-12 h-14 w-14 rounded-full border ${palette.ring}`}
      />
      <span
        className={`${oppositeClass} doodle-line decor-float-slow absolute top-20 h-7 w-7 rotate-12 text-accent/45`}
      />
      <span
        className={`${sideClass} decor-sway absolute bottom-10 h-2.5 w-24 rotate-[-8deg] rounded-full ${palette.line}`}
      />
      <span
        className={`decor-pulse absolute bottom-8 right-[20%] h-2 w-2 rounded-full ${palette.dot}`}
      />
    </div>
  );
}
