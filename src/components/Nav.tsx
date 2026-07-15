"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "/#home", id: "home", label: "Home" },
  { href: "/#about", id: "about", label: "About" },
  { href: "/#at-a-glance", id: "at-a-glance", label: "At a glance" },
  { href: "/work", id: "work", label: "Work" },
];

export function Nav() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    if (pathname !== "/") {
      setActiveId(pathname.startsWith("/work") ? "work" : "");
      return;
    }

    setActiveId("home");

    const sections = ["home", "about", "at-a-glance"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: "-110%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-auto fixed inset-x-0 top-0 z-[100] border-b border-line/40 bg-bg/40 backdrop-blur-sm"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-end px-5 py-3.5 md:px-10 md:py-4">
        <nav className="flex items-center gap-8 font-[family-name:var(--font-montserrat)] text-[11px] tracking-[0.2em] text-ink/55 uppercase md:gap-12 md:text-xs">
          {links.map((link) => {
            const active = activeId === link.id;
            return (
              <Link
                key={link.id}
                href={link.href}
                className="relative py-1 transition-colors duration-300 hover:text-ink"
              >
                <span className={active ? "text-ink" : undefined}>{link.label}</span>
                {active ? (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 h-px w-full bg-ink/40"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>
      </div>
    </motion.header>
  );
}
