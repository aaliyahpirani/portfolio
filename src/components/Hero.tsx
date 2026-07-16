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

  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 32,
    restDelta: 0.0001,
  });

  const nameX = useTransform(
    smooth,
    [0, 1],
    prefersReducedMotion ? ["0vw", "0vw"] : ["0vw", "-55vw"],
  );
  const nameOpacity = useTransform(
    smooth,
    [0, 0.75],
    prefersReducedMotion ? [1, 1] : [1, 0.35],
  );

  const flowersX = useTransform(
    smooth,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["0%", "18%"],
  );
  const flowersY = useTransform(
    smooth,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["0%", "-12%"],
  );
  const flowersRotate = useTransform(
    smooth,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, 8],
  );

  const portraitY = useTransform(
    smooth,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["0%", "12%"],
  );
  const portraitScale = useTransform(
    smooth,
    [0, 1],
    prefersReducedMotion ? [1, 1] : [1, 1.06],
  );

  const introX = useTransform(
    smooth,
    [0, 1],
    prefersReducedMotion ? ["0vw", "0vw"] : ["0vw", "-18vw"],
  );
  const locationX = useTransform(
    smooth,
    [0, 1],
    prefersReducedMotion ? ["0vw", "0vw"] : ["0vw", "14vw"],
  );
  const locationOpacity = useTransform(
    smooth,
    [0, 0.55],
    prefersReducedMotion ? [1, 1] : [1, 0],
  );
  const greetingY = useTransform(
    smooth,
    [0, 1],
    prefersReducedMotion ? ["0px", "0px"] : ["0px", "40px"],
  );
  const greetingOpacity = useTransform(
    smooth,
    [0, 0.5],
    prefersReducedMotion ? [0.5, 0.5] : [0.5, 0],
  );
  const ctaOpacity = useTransform(
    smooth,
    [0, 0.4],
    prefersReducedMotion ? [1, 1] : [1, 0],
  );
  const ctaY = useTransform(
    smooth,
    [0, 0.4],
    prefersReducedMotion ? [0, 0] : [0, 24],
  );

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex h-[100svh] scroll-mt-24 flex-col overflow-hidden bg-bg-deep px-5 pt-8 pb-8 md:px-10 md:pt-10 md:pb-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-[rgba(18,24,31,0.07)]"
      />
      <h1 className="sr-only">Aaliyah Pirani</h1>

      {/* Corner flowers — top right, oversized and cropped */}
      <motion.div
        style={{ x: flowersX, y: flowersY, rotate: flowersRotate }}
        className="pointer-events-none absolute -top-[18%] -right-[22%] z-10 h-[clamp(24rem,72vw,48rem)] w-[clamp(28rem,82vw,56rem)] md:-top-[17%] md:-right-[10%]"
      >
        <motion.div
          animate={
            prefersReducedMotion
              ? undefined
              : { y: [0, -10, 0], rotate: [0, -1.5, 0] }
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative h-full w-full"
        >
          <Image
            src="/icons/cornerflowers.png"
            alt=""
            fill
            className="object-contain object-top-right mix-blend-lighten"
            sizes="(max-width: 768px) 82vw, 56rem"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Portrait — bottom-aligned, head sits on the name */}
      <motion.div
        style={{ y: portraitY, scale: portraitScale }}
        className="pointer-events-none absolute bottom-0 left-1/2 z-20 h-[105%] w-[min(110vw,52rem)] -translate-x-1/2 md:h-[112%] md:w-[min(68vw,62rem)]"
      >
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={
            prefersReducedMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 1, y: [0, -6, 0] }
          }
          transition={
            prefersReducedMotion
              ? { duration: 1, delay: 0.25, ease }
              : {
                  opacity: { duration: 1, delay: 0.25, ease },
                  y: {
                    duration: 6,
                    delay: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }
          }
          className="relative h-full w-full"
        >
          <Image
            src="/images/beachportrait.png"
            alt="Portrait of Aaliyah Pirani"
            fill
            priority
            quality={100}
            className="object-contain object-bottom mix-blend-lighten"
            sizes="(max-width: 768px) 110vw, 62rem"
          />
        </motion.div>
      </motion.div>

      {/* Descriptor — right of portrait */}
      <motion.p
        aria-hidden
        style={{ y: greetingY, opacity: greetingOpacity }}
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55, ease }}
        className="pointer-events-none absolute bottom-[10%] left-[58%] z-30 max-w-[16rem] text-left font-[family-name:var(--font-montserrat)] text-[clamp(1.1rem,2.2vw,1.5rem)] leading-snug tracking-tight text-[#6b5344]/65 lowercase md:bottom-[12%] md:left-[60%] md:max-w-[18rem]"
      >
        software engineer.
        <br />
        researcher.
        <br />
        content creator.
      </motion.p>

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col">
        {/* Name block — behind portrait */}
        <div className="relative flex flex-1 flex-col items-center justify-center">
          <motion.p
            style={{ x: introX }}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="absolute top-[28%] left-0 z-[5] font-[family-name:var(--font-imbue)] text-[clamp(2.5rem,7vw,10rem)] tracking-[0.04em] text-black/60 lowercase md:top-[4%] md:left-[-2%]"
          >
            my name is
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
            className="pointer-events-none absolute left-1/2 z-[8] w-screen -translate-x-1/2"
          >
            <motion.p
              aria-hidden
              style={{ x: nameX, opacity: nameOpacity }}
              className="flex w-full items-baseline justify-center gap-[0.12em] px-2 py-[0.12em] font-[family-name:var(--font-serif)] text-[clamp(4.75rem,15vw,18rem)] leading-none tracking-[-0.1em] whitespace-nowrap text-ink select-none"
            >
              <span className="opacity-[0.28]">
                r<span className="italic">Pirani </span>
              </span>
              <span>
                 Aali<span className="italic">yah</span> Pir
                <span className="italic">ani</span>
              </span>
              <span className="opacity-[0.28]">Aaliyah</span>
            </motion.p>
          </motion.div>

          <motion.div
            style={{ x: locationX, opacity: locationOpacity }}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            className="pointer-events-none absolute top-[58%] right-[2%] z-[25] text-right font-[family-name:var(--font-montserrat)] text-lg leading-tight tracking-tight text-ink lowercase md:top-[75%] md:right-[0%] md:text-2xl"
          >
            <p>born in calgary</p>
            <p>building in toronto</p>
          </motion.div>
        </div>

        {/* Bottom row */}
        <div className="relative z-30 mt-auto flex items-end justify-between gap-6 pb-2">
          {/* CTAs — bottom left */}
          <motion.div
            style={{ opacity: ctaOpacity, y: ctaY }}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease }}
            className="flex translate-x-4 -translate-y-4 flex-col items-start gap-3 md:translate-x-8 md:-translate-y-6"
          >
            <a
              href="/resume.pdf"
              download
              style={{ color: "#ffffff" }}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white bg-[#825e4c] px-7 py-3 font-[family-name:var(--font-montserrat)] text-sm tracking-[0.08em] lowercase shadow-[0_2px_8px_rgba(255,255,255,0.35),0_4px_12px_rgba(130,94,76,0.15)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white hover:bg-[#6f4f3f] hover:shadow-[0_3px_10px_rgba(255,255,255,0.45),0_6px_16px_rgba(130,94,76,0.2)] active:translate-y-0 md:px-8 md:py-3.5 md:text-base"
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-[-2px]">
                resume
              </span>
              <span
                aria-hidden
                className="relative z-10 inline-block translate-x-[-4px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              >
                →
              </span>
            </a>
            <a
              href="mailto:hello@example.com"
              style={{ color: "#ffffff" }}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white bg-[#825e4c] px-7 py-3 font-[family-name:var(--font-montserrat)] text-sm tracking-[0.08em] lowercase shadow-[0_2px_8px_rgba(255,255,255,0.35),0_4px_12px_rgba(130,94,76,0.15)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white hover:bg-[#6f4f3f] hover:shadow-[0_3px_10px_rgba(255,255,255,0.45),0_6px_16px_rgba(130,94,76,0.2)] active:translate-y-0 md:px-8 md:py-3.5 md:text-base"
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-[-2px]">
                contact
              </span>
              <span
                aria-hidden
                className="relative z-10 inline-block translate-x-[-4px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              >
                →
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
