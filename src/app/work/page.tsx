import { FadeIn } from "@/components/FadeIn";
import { ProjectList } from "@/components/ProjectList";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Work — Aaliyah Pirani",
  description: "Selected photography, brand, and editorial projects.",
};

export default function WorkPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pt-28 pb-24 md:px-8 md:pt-36 md:pb-32">
      <FadeIn>
        <p className="text-sm tracking-[0.16em] text-muted uppercase">Work</p>
        <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-5xl leading-none tracking-[-0.04em] md:text-7xl">
          Projects shaped by light, type, and place.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          Swap these placeholders for your own case studies. Each row already
          animates in on scroll and gently zooms on hover.
        </p>
      </FadeIn>

      <ProjectList projects={projects} />
    </section>
  );
}
