// src/components/Navbar.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About",      href: "#about"      },
  { label: "Experience", href: "#experience"  },
  { label: "Skills",     href: "#skills"      },
  { label: "Projects",   href: "#projects"    },
  { label: "Contact",    href: "#contact"     },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  // ── 1. Scroll detection for navbar background ──────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── 2. Intersection Observer — highlight active section ─────────────
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${id}`);
          }
        },
        {
          rootMargin: "-40% 0px -55% 0px", // triggers when section is in middle of viewport
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-hidden",
        scrolled
          ? [
            // Glossy glass effect when scrolled
            "bg-[#0a0a0f]/70",
            "backdrop-blur-xl",
            "shadow-[0_4px_24px_rgba(0,0,0,0.4)]",
            // Subtle top highlight line for glass feel
            "before:absolute before:inset-x-0 before:top-0 before:h-px",
            "before:bg-gradient-to-r before:from-transparent before:via-accent/30 before:to-transparent",
          ].join(" ")
          : "bg-transparent"
      )}
    >
      {/* Inner glow strip at bottom of navbar */}
      {scrolled && (
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      )}

      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* ── Logo: Photo + scroll to top ───────────────────────────── */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="relative group flex-shrink-0"
          aria-label="Back to top"
        >
          {/* Glow ring on hover */}
          <div className="absolute -inset-0.5 rounded-full bg-accent/0 group-hover:bg-accent/20 transition-all duration-300 blur-sm" />
          <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-border group-hover:border-accent/60 transition-all duration-300">
            <Image
              src="/photo.jpg"          // ← drop your photo as public/photo.jpg
              alt={personalInfo.name}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </button>

        {/* ── Desktop links ──────────────────────────────────────────── */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className={cn(
                  "relative text-sm transition-colors duration-200 py-1",
                  "after:absolute after:bottom-0 after:left-0 after:h-px after:rounded-full",
                  "after:bg-accent after:transition-all after:duration-300",
                  activeLink === link.href
                    ? "text-accent after:w-full"
                    : "text-text-secondary hover:text-text-primary after:w-0 hover:after:w-full"
                )}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2 px-4">
              Resume
            </a>
          </li>
        </ul>

        {/* ── Mobile hamburger ───────────────────────────────────────── */}
        <button
          className="md:hidden text-text-secondary hover:text-text-primary transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* ── Mobile menu ────────────────────────────────────────────────── */}
      {menuOpen && (
        <div className="md:hidden bg-bg-primary/90 backdrop-blur-xl border-t border-white/[0.06] px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={cn(
                    "text-sm w-full text-left transition-colors duration-200",
                    activeLink === link.href
                      ? "text-accent"
                      : "text-text-secondary hover:text-accent"
                  )}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs"
              >
              Resume
            </a>
          </li>
        </ul>
        </div>
  )
}
    </header >
  );
}