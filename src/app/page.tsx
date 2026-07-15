import Image from "next/image";
import Link from "next/link";
import { AboutPanel } from "@/components/AboutPanel";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";
import { Hero } from "@/components/Hero";
import { ScatteredWords } from "@/components/ScatteredWords";

const awards = [
  {
    date: "Jan 2026",
    amount: "$12,000",
    title: "Department of Computer Science Award",
    description: (
      <>
        Awarded by the <em>Department of Computer Science</em> to an outstanding
        undergraduate student to pursue research in the field of computer
        science.
      </>
    ),
  },
  {
    date: "July 2024",
    amount: "$12,000",
    title: "Howard Ferguson Admission Scholarship",
    description: (
      <>
        Awarded by <em>the University of Toronto</em> to an outstanding student
        entering University College from outside Ontario.
      </>
    ),
  },
  {
    date: "May 2024",
    amount: "$70,000",
    title: "TD Scholarship for Community Leadership",
    description: (
      <>
        Awarded by <em>TD Bank</em> for outstanding commitment to community
        leadership.
      </>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <AboutPanel />

      <section
        id="explore"
        className="relative w-full scroll-mt-24 overflow-hidden bg-bg-deep px-5 py-16 md:px-8 md:py-24"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(18,24,31,0.07)]"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="relative overflow-hidden">
            <ScatteredWords />
            <div className="relative z-10">
              <FadeIn>
                <p className="font-[family-name:var(--font-montserrat)] text-sm tracking-[0.16em] text-muted uppercase">
                  My work
                </p>
                <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-serif)] text-4xl leading-none tracking-[-0.03em] md:text-5xl">
                  Take a look at what I've been up to.
                </h2>
              </FadeIn>

              {/* Explore cards */}
              <div className="mt-12 grid gap-6 md:mt-14 md:grid-cols-2 md:gap-8">
            <FadeIn delay={0.05}>
              <Link
                href="/software"
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-bg shadow-[0_2px_12px_rgba(18,24,31,0.06)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(18,24,31,0.12)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src="/images/portfoli.jpg"
                    alt="Software projects and research"
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-8 md:p-10">
                  <div>

                    <h3 className="mt-3 font-[family-name:var(--font-serif)] text-3xl leading-none tracking-[-0.03em] md:text-4xl">
                      Soft<span className="italic">ware</span>
                    </h3>
                    <p className="mt-4 max-w-sm font-[family-name:var(--font-montserrat)] text-muted">
                      Cool things I&apos;ve built.
                    </p>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-sm tracking-[0.14em] text-ink uppercase">
                    Explore
                    <span
                      aria-hidden
                      className="inline-block transition-transform duration-300 group-hover:translate-x-1.5"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Link
                href="/portfolio"
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-bg shadow-[0_2px_12px_rgba(18,24,31,0.06)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(18,24,31,0.12)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src="/images/software.jpg"
                    alt="Portfolio collaborations and creative work"
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-8 md:p-10">
                  <div>
                    <h3 className="mt-3 font-[family-name:var(--font-serif)] text-3xl leading-none tracking-[-0.03em] md:text-4xl">
                      Creative Port<span className="italic">folio</span>
                    </h3>
                    <p className="mt-4 max-w-sm font-[family-name:var(--font-montserrat)] text-muted">
                      My favourite creative projects.
                    </p>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-sm tracking-[0.14em] text-ink uppercase">
                    Explore
                    <span
                      aria-hidden
                      className="inline-block transition-transform duration-300 group-hover:translate-x-1.5"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </FadeIn>
          </div>
            </div>
          </div>

          {/* Awards */}
          <div className="relative mt-16 overflow-hidden md:mt-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-[6%] -bottom-[30%] z-0 h-[clamp(28rem,80vw,48rem)] w-[clamp(20rem,55vw,34rem)] opacity-[0.38] md:left-[2%] md:-bottom-[22%]"
            >
              <Image
                src="/images/awards_flower.png"
                alt=""
                fill
                className="object-contain object-bottom-left mix-blend-multiply"
                sizes="(max-width: 768px) 55vw, 34rem"
              />
            </div>

            <div className="relative z-10">
              <FadeIn delay={0.08}>
                <h3 className="mt-3 max-w-2xl font-[family-name:var(--font-serif)] text-3xl leading-none tracking-[-0.03em] md:text-4xl">
                  Scholarships & awards.
                </h3>
              </FadeIn>
              <ul className="mt-8 divide-y divide-line border-y border-line md:mt-10">
                {awards.map((award, index) => (
                  <FadeIn
                    key={`${award.date}-${award.title}`}
                    delay={index * 0.05}
                  >
                    <li className="grid gap-3 py-6 md:grid-cols-[6.5rem_5.5rem_minmax(0,1fr)] md:items-baseline md:gap-8 md:py-7">
                      <span className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.12em] text-muted uppercase">
                        {award.date}
                      </span>
                      <span className="font-[family-name:var(--font-montserrat)] text-sm tracking-[0.04em] text-ink md:text-base">
                        {award.amount}
                      </span>
                      <div>
                        <p className="font-[family-name:var(--font-serif)] text-xl tracking-[-0.02em] md:text-2xl">
                          {award.title}
                        </p>
                        <p className="mt-2 max-w-2xl font-[family-name:var(--font-montserrat)] text-sm leading-relaxed text-muted md:text-base">
                          {award.description}
                        </p>
                      </div>
                    </li>
                  </FadeIn>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative w-full scroll-mt-24 bg-bg-deep px-5 py-16 md:px-8 md:py-24"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(18,24,31,0.07)]"
        />
        <div className="relative z-10 mx-auto w-full max-w-3xl">
          <FadeIn>
            <h2 className="mt-3 font-[family-name:var(--font-serif)] text-4xl leading-none tracking-[-0.03em] md:text-5xl">
              Let's talk!
            </h2>
            <p className="mt-4 max-w-xl font-[family-name:var(--font-montserrat)] text-muted md:text-lg">
              Have a question, an idea, or just want to chat? Drop a note below.
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <ContactForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
