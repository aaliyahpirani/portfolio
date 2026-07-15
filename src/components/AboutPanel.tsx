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
import { AboutTitle } from "@/components/AboutTitle";
import { FadeIn } from "@/components/FadeIn";

const ease = [0.22, 1, 0.36, 1] as const;

export function AboutPanel() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001,
  });

  const photoY = useTransform(
    smooth,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["-6%", "6%"],
  );
  const photoScale = useTransform(
    smooth,
    [0, 0.5, 1],
    prefersReducedMotion ? [1, 1, 1] : [1.06, 1, 1.04],
  );

  const overlayY = useTransform(
    smooth,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["8%", "-8%"],
  );
  const overlayRotate = useTransform(
    smooth,
    [0, 1],
    prefersReducedMotion ? [-10, -10] : [-8, -14],
  );

  const flowerY = useTransform(
    smooth,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["8%", "-10%"],
  );
  const flowerX = useTransform(
    smooth,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["4%", "-2%"],
  );
  const flowerRotate = useTransform(
    smooth,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [-4, 6],
  );

  const textY = useTransform(
    smooth,
    [0, 1],
    prefersReducedMotion ? ["0px", "0px"] : ["40px", "-20px"],
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full scroll-mt-24 overflow-hidden bg-bg-deep"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[25] bg-gradient-to-b from-transparent via-transparent to-[rgba(18,24,31,0.07)]"
      />
      <div className="relative z-20 grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-stretch">
        <FadeIn className="relative aspect-[5/4] w-full overflow-hidden md:aspect-auto md:min-h-full">
          <motion.div
            style={{ y: photoY, scale: photoScale }}
            className="absolute inset-0"
          >
            <Image
              src="/images/AboutMe.JPG"
              alt="Aaliyah by the waterfront"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover object-[center_28%]"
              quality={95}
            />
          </motion.div>
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"
          />
          <motion.p
            style={{ y: overlayY, rotate: overlayRotate, opacity: 0.55 }}
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 0.55, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, delay: 0.15, ease }}
            className="pointer-events-none absolute right-[6%] bottom-[10%] origin-bottom-right font-[family-name:var(--font-romantic)] text-[clamp(4.5rem,11vw,9rem)] leading-none tracking-[0.02em] text-ink select-none"
          >
            about me
          </motion.p>
        </FadeIn>

        <motion.div
          style={{ y: textY }}
          className="relative flex min-w-0 flex-col justify-center overflow-hidden px-5 py-10 md:px-10 md:py-14 lg:px-14 lg:py-16"
        >
          {/* Flower — large, low-opacity background behind text */}
          <motion.div
            style={{ x: flowerX, y: flowerY, rotate: flowerRotate }}
            className="pointer-events-none absolute inset-0 z-0"
          >
            <motion.div
              animate={
                prefersReducedMotion
                  ? undefined
                  : { y: [0, -12, 0], rotate: [0, 2, 0] }
              }
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-[20%] -bottom-[25%] h-[clamp(32rem,95vw,56rem)] w-[clamp(36rem,110vw,64rem)] opacity-[0.35] md:-right-[15%] md:-bottom-[20%]"
            >
              <Image
                src="/images/aboutme_flower.png"
                alt=""
                fill
                className="object-contain object-bottom-right mix-blend-multiply"
                sizes="(max-width: 768px) 95vw, 64rem"
              />
            </motion.div>
          </motion.div>

          <div className="relative z-10">
            <FadeIn delay={0.04}>
              <AboutTitle className="max-w-xl font-[family-name:var(--font-serif)] text-3xl leading-[1.05] tracking-[-0.03em] md:text-4xl lg:text-[2.75rem]" />
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="mt-6 max-w-xl space-y-5 font-[family-name:var(--font-montserrat)] text-base leading-relaxed text-muted md:mt-8 md:text-lg">
                <p>
                  I&apos;m Aaliyah, a Computer Science and Quantitative Biology
                  student at the University of Toronto, currently working on
                  research at the MedCVR Lab involving the simulation of
                  deformable objects for medical robotics.
                </p>
                <p>
                  I got into tech because I loved math, but the part I enjoy most
                  isn&apos;t just the technical side. It&apos;s the ideas behind
                  the projects, the people I work with, and seeing something built
                  from scratch become useful in the real world.
                </p>
                <p>
                  I create content to share what I wish I knew earlier about
                  university — it started as a way to help others and became a
                  creative outlet for storytelling and design. And flying? I got
                  my pilot license simply because I thought it was cool.
                </p>
                <p>
                  I&apos;m always looking for new things to learn, build, and
                  explore.
                </p>
              </div>
            </FadeIn>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
