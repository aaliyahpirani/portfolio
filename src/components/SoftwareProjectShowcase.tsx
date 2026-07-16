import Link from "next/link";
import { DeviceFrame } from "@/components/DeviceFrame";
import { FadeIn } from "@/components/FadeIn";

export type SoftwareProject = {
  year: string;
  category: string;
  title: string;
  description: string;
  tech: string[];
  href?: string;
  device: "laptop" | "phone" | "tablet" | "desktop" | "embedded";
  accent: string;
};

type SoftwareProjectShowcaseProps = {
  projects: SoftwareProject[];
};

export function SoftwareProjectShowcase({
  projects,
}: SoftwareProjectShowcaseProps) {
  return (
    <div className="mt-14 space-y-20 md:mt-20 md:space-y-28">
      {projects.map((project, index) => {
        const reversed = index % 2 === 1;

        const text = (
          <div className="flex flex-col justify-center">
            <p className="font-[family-name:var(--font-montserrat)] text-sm tracking-[0.14em] text-muted uppercase">
              {project.category} · {project.year}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-serif)] text-3xl leading-none tracking-[-0.03em] md:text-4xl lg:text-5xl">
              {project.title}
            </h2>
            <p className="mt-4 max-w-xl font-[family-name:var(--font-montserrat)] text-sm leading-relaxed text-muted md:text-base">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line px-3.5 py-1 font-[family-name:var(--font-montserrat)] text-[0.65rem] tracking-[0.08em] text-muted uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.href ? (
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit items-center gap-2 font-[family-name:var(--font-montserrat)] text-sm tracking-[0.14em] text-ink uppercase transition-colors hover:text-muted"
              >
                View on GitHub
                <span aria-hidden>↗</span>
              </Link>
            ) : null}
          </div>
        );

        const device = (
          <div className="group flex items-center justify-center py-4 md:py-0">
            <div className="transition-transform duration-500 ease-out group-hover:-translate-y-2">
              <DeviceFrame
                device={project.device}
                accent={project.accent}
                label={project.tech[0] ?? project.category}
              />
            </div>
          </div>
        );

        return (
          <FadeIn key={`${project.year}-${project.title}`} delay={index * 0.05}>
            <article className="grid items-center gap-10 border-t border-line pt-12 md:grid-cols-2 md:gap-14 md:pt-16">
              <div className={reversed ? "md:order-2" : ""}>{text}</div>
              <div className={reversed ? "md:order-1" : ""}>{device}</div>
            </article>
          </FadeIn>
        );
      })}
    </div>
  );
}
