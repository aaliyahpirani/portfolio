import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { Hero } from "@/components/Hero";

const glance = [
  { label: "Studying", value: "Computer Science & Quantitative Biology" },
  { label: "Based in", value: "University of Toronto" },
  { label: "Currently", value: "Research at MedCVR Lab" },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section
        id="about"
        className="relative w-full scroll-mt-24 bg-bg-deep"
      >
        <div className="grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-stretch">
          <FadeIn className="relative aspect-[5/4] w-full overflow-hidden md:aspect-auto md:min-h-full">
            <Image
              src="/images/AboutMe.JPG"
              alt="Aaliyah by the waterfront"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover object-[center_28%]"
              quality={95}
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"
            />
            <p
              className="pointer-events-none absolute right-[6%] bottom-[10%] origin-bottom-right rotate-[-10deg] font-[family-name:var(--font-romantic)] text-[clamp(2.75rem,6vw,4.5rem)] leading-none tracking-[0.02em] text-ink select-none"
              style={{ opacity: 0.55 }}
            >
              about me
            </p>
          </FadeIn>

          <div className="flex min-w-0 flex-col justify-center px-5 py-10 md:px-10 md:py-14 lg:px-14 lg:py-16">
            <FadeIn delay={0.04}>
              <h2 className="max-w-xl font-[family-name:var(--font-display)] text-3xl leading-[1.05] tracking-[-0.03em] md:text-4xl lg:text-[2.75rem]">
                A pilot. A 4.0 student. A content creator. But why?
              </h2>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="mt-6 max-w-xl space-y-5 text-base leading-relaxed text-muted md:mt-8 md:text-lg">
                <p>
                  I&apos;m Aaliyah, a Computer Science and Quantitative Biology
                  student at the University of Toronto, currently working on
                  research at the MedCVR Lab involving the simulation of
                  deformable objects for medical robotics.
                </p>
                <p>
                  I originally got into tech because I loved math. I enjoyed the
                  process of breaking down complex problems and figuring out how
                  things worked. But as I&apos;ve spent more time in computer
                  science, I&apos;ve realized that the part I enjoy most is not
                  just the technical side. It&apos;s the ideas behind the
                  projects, the people I get to work with, and seeing how
                  something built from scratch can become useful in the real
                  world.
                </p>
                <p>
                  I started creating content for a similar reason. University can
                  feel overwhelming, and I wanted to share the things I wish I
                  knew earlier, from study strategies to navigating new
                  experiences. It started as a way to help others, but it also
                  became a creative outlet that lets me explore storytelling and
                  design.
                </p>
                <p>
                  Flying is a little different. I got my pilot license simply
                  because I thought it was cool. I enjoy the challenge, the
                  independence, and having a hobby completely separate from
                  school and work.
                </p>
                <p>
                  I&apos;m always looking for new things to learn, build, and
                  explore.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section
        id="at-a-glance"
        className="relative w-full scroll-mt-24 bg-[#ddd2c0] px-5 py-16 md:px-8 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl">
          <FadeIn>
            <p className="text-sm tracking-[0.16em] text-muted uppercase">
              At a glance
            </p>
            <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-4xl leading-none tracking-[-0.03em] md:text-5xl">
              The short version.
            </h2>
          </FadeIn>

          <dl className="mt-12 divide-y divide-line border-y border-line md:mt-16">
            {glance.map((item, index) => (
              <FadeIn key={item.label} delay={index * 0.06}>
                <div className="grid gap-2 py-7 md:grid-cols-[minmax(8rem,0.35fr)_1fr] md:items-baseline md:gap-10 md:py-9">
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
        </div>
      </section>
    </>
  );
}
