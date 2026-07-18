"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import type { Project } from "@/data/projects";

type ProjectListProps = {
  projects: Project[];
};

function CollabCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const number = String(index + 1).padStart(2, "0");

  const inner = (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute top-4 right-4 z-20 font-[family-name:var(--font-serif)] text-[clamp(3.5rem,8vw,5.5rem)] leading-none tracking-[-0.08em] text-white/35 select-none"
      >
        {number}
      </span>

      <div
        aria-hidden
        className="absolute top-0 left-8 z-20 h-1 w-12 rounded-full transition-all duration-500 group-hover:w-20"
        style={{ backgroundColor: project.accent }}
      />

      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={project.imageWidth}
          height={project.imageHeight}
          className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"
        />
      </div>

      <div className="relative z-10 flex flex-col p-7 md:p-8">
        <p className="flex items-center gap-2.5 font-[family-name:var(--font-montserrat)] text-xs tracking-[0.16em] text-muted uppercase">
          <span>{project.category}</span>
          <span
            aria-hidden
            className="inline-block h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ backgroundColor: project.accent }}
          />
          <span>{project.year}</span>
        </p>

        <h2 className="mt-3 font-[family-name:var(--font-serif)] text-2xl leading-[1.05] tracking-[-0.03em] md:text-3xl">
          {project.title}
        </h2>

        <p className="mt-3 font-[family-name:var(--font-montserrat)] text-sm leading-relaxed text-muted md:text-base">
          {project.description}
        </p>

        {project.href ? (
          <span className="mt-6 inline-flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-sm tracking-[0.14em] text-ink uppercase">
            View on Instagram
            <span
              aria-hidden
              className="inline-block transition-transform duration-300 group-hover:translate-x-1.5"
            >
              ↗
            </span>
          </span>
        ) : null}
      </div>
    </>
  );

  const className =
    "group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-line/70 bg-bg shadow-[0_2px_16px_rgba(18,24,31,0.05)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(18,24,31,0.1)]";

  if (project.href) {
    return (
      <Link
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {inner}
      </Link>
    );
  }

  return <article className={className}>{inner}</article>;
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="mt-14 columns-1 gap-6 sm:columns-2 md:mt-20 lg:columns-3 lg:gap-8">
      {projects.map((project, index) => (
        <FadeIn
          key={project.slug}
          delay={index * 0.05}
          className="mb-6 break-inside-avoid lg:mb-8"
        >
          <CollabCard project={project} index={index} />
        </FadeIn>
      ))}
    </div>
  );
}
