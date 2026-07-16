"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

type ProjectListProps = {
  projects: Project[];
};

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <ul className="mt-14 space-y-16 md:mt-20 md:space-y-24">
      {projects.map((project, index) => (
        <motion.li
          key={project.slug}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.75,
            delay: index * 0.06,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group grid gap-6 border-t border-line pt-8 md:grid-cols-12 md:gap-10"
        >
          <div className="md:col-span-5">
            <p className="font-[family-name:var(--font-montserrat)] text-sm tracking-[0.14em] text-muted uppercase">
              {project.category} · {project.year}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-serif)] text-4xl leading-none tracking-[-0.03em] md:text-5xl">
              {project.title}
            </h2>
            <p className="mt-4 max-w-md font-[family-name:var(--font-montserrat)] text-muted">
              {project.description}
            </p>
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-sm tracking-[0.14em] text-ink uppercase transition-colors hover:text-muted"
              >
                View on Instagram
                <span aria-hidden>↗</span>
              </a>
            ) : null}
          </div>

          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-[16/10] overflow-hidden md:col-span-7"
            >
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </motion.div>
            </a>
          ) : (
            <div className="relative aspect-[16/10] overflow-hidden md:col-span-7">
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </motion.div>
            </div>
          )}
        </motion.li>
      ))}
    </ul>
  );
}
