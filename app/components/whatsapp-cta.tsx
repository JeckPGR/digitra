import type { AnchorHTMLAttributes, ReactNode } from "react";

type WhatsAppCtaProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  tone?: "solid" | "outline" | "text";
};

export function WhatsAppCta({
  children,
  className = "",
  tone = "solid",
  ...props
}: WhatsAppCtaProps) {
  const toneClass = {
    solid:
      "bg-green-500 text-white hover:bg-green-600 shadow-[0_14px_34px_rgba(37,211,102,0.24)]",
    outline:
      "border border-green-500 text-green-500 hover:bg-green-500 hover:text-white",
    text: "text-green-500 hover:text-green-600",
  }[tone];

  const shapeClass =
    tone === "text"
      ? "inline-flex items-center gap-2 text-sm font-semibold"
      : "inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition";

  return (
    <a
      className={`${shapeClass} ${toneClass} ${className}`}
      rel="noreferrer"
      target="_blank"
      {...props}
    >
      <WhatsAppIcon />
      {children}
    </a>
  );
}

export function WhatsAppIcon({
  className = "h-4 w-4 shrink-0",
}: {
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="-2 -2 28 28"
    >
      <path d="M20.52 3.48A11.84 11.84 0 0 0 12.08 0C5.5 0 .14 5.35.14 11.94c0 2.1.55 4.16 1.6 5.97L0 24l6.24-1.64a11.9 11.9 0 0 0 5.84 1.49h.01c6.58 0 11.94-5.35 11.94-11.94 0-3.19-1.24-6.19-3.51-8.43Z" />
      <path d="M17.42 14.46c-.3-.15-1.77-.88-2.04-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.22 5.1 4.51.71.31 1.27.49 1.7.63.71.23 1.36.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}
