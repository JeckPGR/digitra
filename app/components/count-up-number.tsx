"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type CountUpNumberProps = {
  value: string;
  duration?: number;
};

let countUpStatus: "idle" | "pending" | "played" = "idle";

export function CountUpNumber({ value, duration = 1200 }: CountUpNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(value.replace(/\s+/g, ""));

  const parts = useMemo(() => {
    const normalized = value.replace(/\s+/g, "");
    const match = normalized.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);

    if (!match) {
      return null;
    }

    return {
      prefix: match[1],
      target: Number(match[2]),
      suffix: match[3],
      decimals: match[2].includes(".") ? match[2].split(".")[1].length : 0,
      finalValue: normalized,
    };
  }, [value]);

  useEffect(() => {
    if (!parts || !ref.current) {
      return;
    }

    if (countUpStatus === "played") {
      return;
    }

    if (countUpStatus === "idle") {
      countUpStatus = "pending";
      window.setTimeout(() => {
        countUpStatus = "played";
      }, 250);
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      countUpStatus = "played";
      return;
    }

    let frame = 0;
    let startedAt = 0;
    let hasPlayed = false;

    const animate = (time: number) => {
      if (!startedAt) {
        startedAt = time;
      }

      const progress = Math.min((time - startedAt) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      const current = parts.target * eased;
      const formatted = current.toLocaleString("id-ID", {
        maximumFractionDigits: parts.decimals,
        minimumFractionDigits: parts.decimals,
      });

      setDisplayValue(`${parts.prefix}${formatted}${parts.suffix}`);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(parts.finalValue);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasPlayed) {
          return;
        }

        hasPlayed = true;
        setDisplayValue(`${parts.prefix}0${parts.suffix}`);
        frame = requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.45 },
    );

    observer.observe(ref.current);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [duration, parts, value]);

  return <span ref={ref}>{displayValue}</span>;
}
