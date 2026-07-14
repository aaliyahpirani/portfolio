import { FadeIn } from "@/components/FadeIn";
import { Hero } from "@/components/Hero";

const glance = [
  { label: "Focus", value: "Brand, editorial & photography" },
  { label: "Based in", value: "Open to remote" },
  { label: "Currently", value: "Building image-led stories" },
  { label: "Working with", value: "Studios, founders & magazines" },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section
        id="about"
        className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32"
      >
        <FadeIn>
          <p className="text-sm tracking-[0.16em] text-muted uppercase">
            About me
          </p>
          <h2 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-4xl leading-none tracking-[-0.03em] md:text-6xl">
            Quiet compositions, clear type, and photographs that hold a place.
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <FadeIn delay={0.08}>
            <p className="max-w-xl text-lg leading-relaxed text-muted md:text-xl">
              I&apos;m Aaliyah — a designer and photographer interested in how
              light, pacing, and typography shape a story before anyone reads a
              word. My work sits between brand systems and editorial
              photography, always aiming for calm images with room to breathe.
            </p>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className="max-w-md text-base leading-relaxed text-muted md:pt-2">
              Whether I&apos;m building a visual identity or photographing a
              landscape, I look for the same thing: a clear mood, honest detail,
              and layouts that feel intentional rather than crowded.
            </p>
          </FadeIn>
        </div>
      </section>

      <section
        id="at-a-glance"
        className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 pb-24 md:px-8 md:pb-32"
      >
        <FadeIn>
          <p className="text-sm tracking-[0.16em] text-muted uppercase">
            At a glance
          </p>
          <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-4xl leading-none tracking-[-0.03em] md:text-6xl">
            The short version.
          </h2>
        </FadeIn>

        <dl className="mt-14 divide-y divide-line border-y border-line md:mt-20">
          {glance.map((item, index) => (
            <FadeIn key={item.label} delay={index * 0.06}>
              <div className="grid gap-2 py-8 md:grid-cols-[minmax(8rem,0.35fr)_1fr] md:items-baseline md:gap-10 md:py-10">
                <dt className="text-sm tracking-[0.14em] text-muted uppercase">
                  {item.label}
                </dt>
                <dd className="font-[family-name:var(--font-display)] text-2xl tracking-[-0.02em] md:text-3xl">
                  {item.value}
                </dd>
              </div>
            </FadeIn>
          ))}
        </dl>
      </section>
    </>
  );
}
