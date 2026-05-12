"use client";

import Image from "next/image";
import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useId,
  useState,
} from "react";
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
  const [aspectRatio, setAspectRatio] = useState(16 / 10);
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

  useEffect(() => {
    if (!isOpen) return;

    const image = new window.Image();
    image.onload = () => {
      if (image.naturalWidth > 0 && image.naturalHeight > 0) {
        setAspectRatio(image.naturalWidth / image.naturalHeight);
      }
    };
    image.src = src;
  }, [isOpen, src]);

  const panelStyle = {
    "--pim-aspect-ratio": aspectRatio,
    "--pim-frame-width": `min(94vw, calc(90vh * ${aspectRatio}))`,
  } as CSSProperties;

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
              style={panelStyle}
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
        className={
          className
            ? `zoom-trigger ${className}`
            : "zoom-trigger relative block cursor-zoom-in overflow-hidden text-left"
        }
        onClick={() => setIsOpen(true)}
        type="button"
      >
        {children}
        <span className="zoom-trigger-icon" aria-hidden="true">
          <svg
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="10.75"
              cy="10.75"
              r="5.25"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M15 15L20 20"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.8"
            />
            <path
              d="M10.75 8.45V13.05M8.45 10.75H13.05"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.7"
            />
          </svg>
        </span>
      </button>
      {modal}
    </>
  );
}
