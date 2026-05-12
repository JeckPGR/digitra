"use client";

import Image from "next/image";
import { type ReactNode, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";

type ProductImageModalProps = {
  alt: string;
  children: ReactNode;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  src: string;
};

export function ProductImageModal({
  alt,
  children,
  className,
  imageClassName,
  sizes = "100vw",
  src,
}: ProductImageModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const modal =
    isOpen && typeof document !== "undefined"
      ? createPortal(
          <div
            className="pim-backdrop"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) setIsOpen(false);
            }}
            role="presentation"
          >
            {/* Decorative noise grain overlay */}
            <div className="pim-grain" aria-hidden="true" />

            <div
              aria-labelledby={titleId}
              aria-modal="true"
              className="pim-panel"
              role="dialog"
            >
              <h2 className="sr-only" id={titleId}>
                {alt}
              </h2>

              {/* Close button — floated outside panel, top-right corner */}
              <button
                aria-label="Tutup preview"
                className="pim-close"
                onClick={() => setIsOpen(false)}
                type="button"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M1 1L13 13M13 1L1 13"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {/* Image container — follows image aspect ratio, max constrained */}
              <div className="pim-image-wrap">
                <Image
                  alt={alt}
                  className={`pim-image ${imageClassName ?? ""}`}
                  fill
                  sizes={sizes}
                  src={src}
                  unoptimized
                  priority
                />
                {/* Subtle bottom vignette for depth */}
                <div className="pim-vignette" aria-hidden="true" />
              </div>

              {/* Caption bar */}
              <div className="pim-caption">
                <span className="pim-caption-dot" aria-hidden="true" />
                <p className="pim-caption-text">{alt}</p>
              </div>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        aria-label={`Buka preview ${alt}`}
        className={className ?? "block cursor-zoom-in text-left"}
        onClick={() => setIsOpen(true)}
        type="button"
      >
        {children}
      </button>
      {modal}
    </>
  );
}