"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type TypewriterProps = {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
};

export function Typewriter({
  text,
  className,
  speed = 42,
  startDelay = 200,
}: TypewriterProps) {
  const prefersReducedMotion = useReducedMotion();
  const [displayed, setDisplayed] = useState(prefersReducedMotion ? text : "");
  const [started, setStarted] = useState(prefersReducedMotion);
  const [done, setDone] = useState(prefersReducedMotion);
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

    let index = 0;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        index += 1;
        setDisplayed(text.slice(0, index));
        if (index >= text.length) {
          clearInterval(intervalId);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId !== undefined) clearInterval(intervalId);
    };
  }, [started, text, speed, startDelay, prefersReducedMotion]);

  return (
    <h2 ref={ref} className={className}>
      {displayed}
      {!done ? (
        <span
          aria-hidden
          className="ml-0.5 inline-block w-[2px] animate-pulse bg-ink align-[-0.1em]"
          style={{ height: "0.85em" }}
        />
      ) : null}
    </h2>
  );
}
