"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 28,
    restDelta: 0.001,
  });

  const aaliyahAway = useTransform(
    smoothProgress,
    [0, 1],
    prefersReducedMotion ? ["0vw", "0vw"] : ["0vw", "-70vw"],
  );
  const piraniAway = useTransform(
    smoothProgress,
    [0, 1],
    prefersReducedMotion ? ["0vw", "0vw"] : ["0vw", "70vw"],
  );
  const scriptAway = useTransform(
    smoothProgress,
    [0, 1],
    prefersReducedMotion ? ["0vw", "0vw"] : ["0vw", "-35vw"],
  );

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-[100svh] scroll-mt-24 flex-col overflow-hidden px-5 pt-10 pb-8 md:px-10 md:pt-12 md:pb-10"
    >
      <h1 className="sr-only">Aaliyah Pirani</h1>

      {/* Portrait — large, anchored to bottom of home */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease }}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 mx-auto h-[78%] w-[min(88vw,36rem)] md:h-[85%] md:w-[min(52vw,42rem)]"
      >
        <Image
          src="/images/portrait.png"
          alt="Portrait of Aaliyah Pirani"
          fill
          priority
          quality={100}
          className="object-contain object-bottom drop-shadow-[18px_28px_40px_rgba(18,24,31,0.22)] mix-blend-lighten"
          sizes="(max-width: 768px) 88vw, 42rem"
        />
      </motion.div>

      {/* Main stage */}
      <div className="relative mx-auto flex w-full max-w-6xl flex-1 items-center justify-center">
        {/* Greeting — big slanted handwriting behind */}
        <motion.div
          style={{ x: scriptAway }}
          className="pointer-events-none absolute top-[16%] left-[-8%] z-[5] w-[120%] max-w-none md:top-[12%] md:left-[-6%]"
        >
          <motion.p
            aria-hidden
            initial={
              prefersReducedMotion
                ? { opacity: 0.22, rotate: -8 }
                : { opacity: 0, rotate: -14, y: 20 }
            }
            animate={{ opacity: 0.22, rotate: -8, y: 0 }}
            transition={{ duration: 1.1, delay: 0.1, ease }}
            className="origin-left font-[family-name:var(--font-sue-ellen)] text-[clamp(4.5rem,16vw,11rem)] leading-[0.95] tracking-[0.02em] text-ink select-none"
          >
            Hi. If you&apos;re new here..
          </motion.p>
          <motion.p
            aria-hidden
            initial={
              prefersReducedMotion
                ? { opacity: 0.22, rotate: -8 }
                : { opacity: 0, rotate: -14, y: 20 }
            }
            animate={{ opacity: 0.22, rotate: -8, y: 0 }}
            transition={{ duration: 1.1, delay: 0.18, ease }}
            className="origin-left mt-[-0.1em] font-[family-name:var(--font-sue-ellen)] text-[clamp(4.5rem,16vw,11rem)] leading-[0.95] tracking-[0.02em] text-ink select-none"
          >
            my name is
          </motion.p>
        </motion.div>

        {/* First name — centered, behind photo, exits left */}
        <motion.div
          style={{ x: aaliyahAway }}
          className="pointer-events-none absolute top-[36%] left-1/2 z-10 -translate-x-1/2 md:top-[32%]"
        >
          <motion.p
            aria-hidden
            initial={prefersReducedMotion ? { x: 0 } : { x: "-70vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 1.05, delay: 0.2, ease }}
            className="font-[family-name:var(--font-serif)] text-[clamp(5rem,22vw,13rem)] leading-[0.82] tracking-[-0.01em] text-ink underline decoration-from-font underline-offset-[0.08em] select-none"
          >
            Aali<span className="italic">yah</span>
          </motion.p>
        </motion.div>

        {/* Last name — right of center, in front, exits right */}
        <motion.div
          style={{ x: piraniAway }}
          className="pointer-events-none absolute right-[2%] bottom-[6%] z-30 md:right-0 md:bottom-[2%]"
        >
          <motion.p
            aria-hidden
            initial={prefersReducedMotion ? { x: 0, opacity: 0.92 } : { x: "70vw", opacity: 0.92 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.05, delay: 0.35, ease }}
            className="font-[family-name:var(--font-serif)] text-[clamp(4rem,18vw,11rem)] leading-[0.82] tracking-[-0.01em] text-ink select-none"
          >
            Pirani
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom credits */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.65, ease }}
        className="relative z-40 mt-auto flex items-end justify-between pt-4 text-[10px] tracking-[0.14em] text-ink uppercase md:text-xs"
      >
        <p>Calgary</p>
        <p className="text-right">Toronto</p>
      </motion.div>
    </section>
  );
}
