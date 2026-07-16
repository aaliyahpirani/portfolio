import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

export type SoftwareProject = {
  year: string;
  category: string;
  title: string;
  description: string;
  tech: string[];
  href?: string;
  accent: string;
};

type SoftwareProjectShowcaseProps = {
  projects: SoftwareProject[];
};

function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: SoftwareProject;
  index: number;
  featured?: boolean;
}) {
  const number = String(index + 1).padStart(2, "0");

  const inner = (
    <>
      {/* Oversized index */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-4 -right-2 font-[family-name:var(--font-serif)] text-[clamp(5rem,14vw,8rem)] leading-none tracking-[-0.08em] select-none"
        style={{ color: project.accent, opacity: 0.14 }}
      >
        {number}
      </span>

      {/* Accent wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-28 opacity-80"
        style={{
          background: `linear-gradient(180deg, ${project.accent}22 0%, transparent 100%)`,
        }}
      />

      {/* Accent tick */}
      <div
        aria-hidden
        className="absolute top-0 left-8 h-1 w-12 rounded-full transition-all duration-500 group-hover:w-20"
        style={{ backgroundColor: project.accent }}
      />

      <div className="relative z-10 flex h-full flex-col">
        <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.16em] text-muted uppercase">
          {project.category}
          <span className="mx-2 text-line">·</span>
          {project.year}
        </p>

        <h2
          className={`mt-4 font-[family-name:var(--font-serif)] leading-[1.05] tracking-[-0.03em] ${
            featured
              ? "text-3xl md:text-4xl lg:text-5xl"
              : "text-2xl md:text-3xl"
          }`}
        >
          {project.title}
        </h2>

        <p
          className={`mt-4 font-[family-name:var(--font-montserrat)] leading-relaxed text-muted ${
            featured ? "max-w-2xl text-base md:text-lg" : "text-sm md:text-base"
          }`}
        >
          {project.description}
        </p>

        <div className="mt-auto pt-8">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line bg-bg/60 px-3 py-1 font-[family-name:var(--font-montserrat)] text-[0.65rem] tracking-[0.08em] text-muted uppercase backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.href ? (
            <span className="mt-6 inline-flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-sm tracking-[0.14em] text-ink uppercase">
              View on GitHub
              <span
                aria-hidden
                className="inline-block transition-transform duration-300 group-hover:translate-x-1.5"
              >
                ↗
              </span>
            </span>
          ) : null}
        </div>
      </div>
    </>
  );

  const className = `group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line/70 bg-bg p-8 shadow-[0_2px_16px_rgba(18,24,31,0.05)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(18,24,31,0.1)] md:p-10 ${
    featured ? "min-h-[22rem]" : "min-h-[20rem]"
  }`;

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

export function SoftwareProjectShowcase({
  projects,
}: SoftwareProjectShowcaseProps) {
  const [featured, ...rest] = projects;

  return (
    <div className="mt-14 md:mt-20">
      {featured ? (
        <FadeIn>
          <ProjectCard project={featured} index={0} featured />
        </FadeIn>
      ) : null}

      <div className="mt-6 columns-1 gap-6 sm:columns-2 lg:mt-8 lg:gap-8">
        {rest.map((project, index) => (
          <FadeIn
            key={`${project.year}-${project.title}`}
            delay={(index + 1) * 0.05}
            className="mb-6 break-inside-avoid lg:mb-8"
          >
            <ProjectCard project={project} index={index + 1} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
