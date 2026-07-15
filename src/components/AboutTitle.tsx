"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const titles = [
  "bout me",
  " pilot",
  " 4.0 student",
  " biomedical researcher",
  " content creator",
  " lifelong learner",
  " teacher",
  " gym rat",
] as const;

type AboutTitleProps = {
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  holdMs?: number;
  startDelay?: number;
};

export function AboutTitle({
  className,
  typeSpeed = 72,
  deleteSpeed = 42,
  holdMs = 2200,
  startDelay = 200,
}: AboutTitleProps) {
  const prefersReducedMotion = useReducedMotion();
  const [started, setStarted] = useState(!!prefersReducedMotion);
  const [titleIndex, setTitleIndex] = useState(0);
  const [charCount, setCharCount] = useState(
    prefersReducedMotion ? titles[0].length : 0,
  );
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">(
    prefersReducedMotion ? "holding" : "typing",
  );
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!started || prefersReducedMotion) return;

    const current = titles[titleIndex];
    let timeoutId: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (charCount === 0 && titleIndex === 0) {
        timeoutId = setTimeout(() => setCharCount(1), startDelay);
      } else if (charCount < current.length) {
        timeoutId = setTimeout(() => setCharCount((c) => c + 1), typeSpeed);
      } else {
        timeoutId = setTimeout(() => setPhase("holding"), 0);
      }
    } else if (phase === "holding") {
      timeoutId = setTimeout(() => setPhase("deleting"), holdMs);
    } else {
      if (charCount > 0) {
        timeoutId = setTimeout(() => setCharCount((c) => c - 1), deleteSpeed);
      } else {
        timeoutId = setTimeout(() => {
          setTitleIndex((i) => (i + 1) % titles.length);
          setPhase("typing");
        }, 120);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [
    started,
    prefersReducedMotion,
    phase,
    charCount,
    titleIndex,
    typeSpeed,
    deleteSpeed,
    holdMs,
    startDelay,
  ]);

  const visible = titles[titleIndex].slice(0, charCount);
  const showCursor = !prefersReducedMotion && phase !== "holding";

  return (
    <h2
      ref={ref}
      className={className}
      aria-label={`A${titles[titleIndex]}`}
    >
      <span aria-hidden>
        <span>A </span>
        <span className="italic">{visible}</span>
        {showCursor ? (
          <span
            className="ml-0.5 inline-block w-[2px] animate-pulse bg-ink align-[-0.1em]"
            style={{ height: "0.85em" }}
          />
        ) : null}
      </span>
    </h2>
  );
}
