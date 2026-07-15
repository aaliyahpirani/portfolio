import { FadeIn } from "@/components/FadeIn";

export const metadata = {
  title: "Software — Aaliyah Pirani",
  description:
    "Software projects and research — medical robotics, simulation, and full-stack work.",
};

const projects = [
  {
    year: "2025",
    category: "Research",
    title: "Deformable object simulation",
    description:
      "Simulation of deformable objects for medical robotics at the MedCVR Lab, University of Toronto.",
    tech: ["Python", "C++", "Simulation"],
  },
  {
    year: "2025",
    category: "Project",
    title: "Project name here",
    description:
      "Short description of what it does, the problem it solves, and what you built.",
    tech: ["Tech", "Stack", "Here"],
  },
  {
    year: "2024",
    category: "Project",
    title: "Project name here",
    description:
      "Short description of what it does, the problem it solves, and what you built.",
    tech: ["Tech", "Stack", "Here"],
  },
];

export default function SoftwarePage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pt-28 pb-24 md:px-8 md:pt-36 md:pb-32">
      <FadeIn>
        <p className="font-[family-name:var(--font-montserrat)] text-sm tracking-[0.16em] text-muted uppercase">
          Soft<span className="italic">ware</span>
        </p>
        <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-serif)] text-5xl leading-none tracking-[-0.04em] md:text-7xl">
          Things I&apos;ve researched and built.
        </h1>
        <p className="mt-6 max-w-xl font-[family-name:var(--font-montserrat)] text-lg text-muted">
          From medical robotics simulation to full-stack projects — a working
          list of what I&apos;m building and learning.
        </p>
      </FadeIn>

      <ul className="mt-14 divide-y divide-line border-y border-line md:mt-20">
        {projects.map((project, index) => (
          <FadeIn key={`${project.year}-${project.title}`} delay={index * 0.06}>
            <li className="grid gap-4 py-10 md:grid-cols-12 md:gap-10 md:py-12">
              <div className="md:col-span-3">
                <p className="font-[family-name:var(--font-montserrat)] text-sm tracking-[0.14em] text-muted uppercase">
                  {project.category} · {project.year}
                </p>
              </div>
              <div className="md:col-span-9">
                <h2 className="font-[family-name:var(--font-serif)] text-3xl leading-none tracking-[-0.03em] md:text-4xl">
                  {project.title}
                </h2>
                <p className="mt-4 max-w-2xl font-[family-name:var(--font-montserrat)] text-muted md:text-lg">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-3.5 py-1 font-[family-name:var(--font-montserrat)] text-xs tracking-[0.08em] text-muted uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          </FadeIn>
        ))}
      </ul>
    </section>
  );
}
