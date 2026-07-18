import { FadeIn } from "@/components/FadeIn";
import { ProjectList } from "@/components/ProjectList";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Portfolio — Aaliyah Pirani",
  description:
    "Prior collaborations and notable work — content, brand partnerships, and storytelling.",
};

export default function PortfolioPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pt-28 pb-24 md:px-8 md:pt-36 md:pb-32">
      <FadeIn>
        <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-serif)] text-5xl leading-none tracking-[-0.04em] md:text-7xl">
          Collaborations & Notable w<span className="italic">ork</span>
        </h1>
        <p className="mt-6 max-w-xl font-[family-name:var(--font-montserrat)] text-lg text-muted">
          My favourite projects!
        </p>
      </FadeIn>

      <ProjectList projects={projects} />
    </section>
  );
}
