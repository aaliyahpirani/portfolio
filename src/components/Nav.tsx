"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "/#home", id: "home", label: "Home" },
  { href: "/#about", id: "about", label: "About me" },
  { href: "/#at-a-glance", id: "at-a-glance", label: "At a glance" },
];

export function Nav() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState("home");
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      setShowNav(true);
      return;
    }

    setShowNav(false);

    const about = document.getElementById("about");
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!about) return;

    // Show nav only once About me reaches the upper part of the viewport
    const updateVisibility = () => {
      const top = about.getBoundingClientRect().top;
      setShowNav(top < window.innerHeight * 0.4);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

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

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: "-110%", opacity: 0 }}
      animate={
        showNav
          ? { y: 0, opacity: 1 }
          : { y: "-110%", opacity: 0 }
      }
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-md ${
        showNav ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-end px-5 py-4 md:px-8">
        <nav className="flex items-center gap-5 text-sm text-muted md:gap-8">
          {links.map((link) => {
            const active = pathname === "/" && activeId === link.id;
            return (
              <Link
                key={link.id}
                href={link.href}
                className="relative transition-colors hover:text-ink"
              >
                <span className={active ? "text-ink" : undefined}>{link.label}</span>
                {active ? (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-px w-full bg-accent"
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
