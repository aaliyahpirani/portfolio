"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "/#home", id: "home", label: "Home" },
  { href: "/#about", id: "about", label: "About" },
  { href: "/#contact", id: "contact", label: "Contact" },
];

const workItems = [
  { href: "/software", id: "software", label: "Software projects" },
  { href: "/portfolio", id: "portfolio", label: "Portfolio" },
];

export function Nav() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState("home");
  const [workOpen, setWorkOpen] = useState(false);
  const workRef = useRef<HTMLDivElement>(null);

  const workActive =
    activeId === "work" ||
    activeId === "software" ||
    activeId === "portfolio" ||
    pathname.startsWith("/software") ||
    pathname.startsWith("/portfolio");

  useEffect(() => {
    if (pathname !== "/") {
      if (pathname.startsWith("/software")) setActiveId("software");
      else if (pathname.startsWith("/portfolio")) setActiveId("portfolio");
      else setActiveId("");
      return;
    }

    setActiveId("home");

    const sections = ["home", "about", "explore", "contact"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          const id = visible[0].target.id;
          setActiveId(id === "explore" ? "work" : id);
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

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (workRef.current && !workRef.current.contains(event.target as Node)) {
        setWorkOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setWorkOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: "-110%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-auto fixed inset-x-0 top-0 z-[100] border-b border-line/40 bg-bg/40 backdrop-blur-sm"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-end px-5 py-3.5 md:px-10 md:py-4">
        <nav className="flex items-center gap-8 font-[family-name:var(--font-montserrat)] text-[11px] tracking-[0.2em] text-ink/55 uppercase md:gap-12 md:text-xs">
          {links.slice(0, 2).map((link) => {
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

          {/* My Work dropdown */}
          <div
            ref={workRef}
            className="relative"
            onMouseEnter={() => setWorkOpen(true)}
            onMouseLeave={() => setWorkOpen(false)}
          >
            <button
              type="button"
              aria-expanded={workOpen}
              aria-haspopup="true"
              onClick={() => setWorkOpen((open) => !open)}
              className={`relative flex items-center gap-1.5 py-1 transition-colors duration-300 hover:text-ink ${
                workActive ? "text-ink" : ""
              }`}
            >
              MY WORK
              <span
                aria-hidden
                className={`inline-block text-[0.65em] transition-transform duration-300 ${
                  workOpen ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
              {workActive ? (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 h-px w-full bg-ink/40"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              ) : null}
            </button>

            <AnimatePresence>
              {workOpen ? (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute top-full right-0 pt-2"
                >
                  <div className="min-w-[12rem] rounded-xl border border-line/60 bg-bg/95 py-2 shadow-[0_8px_24px_rgba(18,24,31,0.1)] backdrop-blur-md">
                    {workItems.map((item) => {
                      const active = activeId === item.id;
                      return (
                        <Link
                          key={item.id}
                          href={item.href}
                          onClick={() => setWorkOpen(false)}
                          className={`block px-4 py-2.5 tracking-[0.14em] transition-colors duration-200 hover:bg-bg-deep hover:text-ink ${
                            active ? "text-ink" : "text-ink/55"
                          }`}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          {links.slice(2).map((link) => {
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
