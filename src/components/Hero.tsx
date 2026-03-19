// src/components/Hero.tsx
"use client";

import { useEffect, useState } from "react";
import { personalInfo } from "@/data/portfolio";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const roles = [
  "Angular Developer",
  "Full Stack Engineer",
  "Python Developer",
  "PostgreSQL Enthusiast",
];

export default function Hero() {
  const [roleIndex, setRoleIndex]   = useState(0);
  const [displayed, setDisplayed]   = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex,  setCharIndex]  = useState(0);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayed(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
          if (charIndex + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), 1800);
          }
        } else {
          setDisplayed(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
          if (charIndex - 1 === 0) {
            setIsDeleting(false);
            setRoleIndex((r) => (r + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollToAbout = () =>
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-3 overflow-hidden">
      {/* Background grid + gradient */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid-pattern opacity-100 pointer-events-none" />
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent/5 rounded-full blur-3xl pointer-events-none animate-glow-pulse" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Greeting chip */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-medium mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-4 animate-fade-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          {personalInfo.name.split(" ").slice(0, 2).join(" ")}
          <br />
          <span className="text-accent">{personalInfo.name.split(" ").slice(2).join(" ")}</span>
        </h1>

        {/* Typewriter role */}
        <p
          className="text-xl md:text-2xl text-text-secondary font-mono mb-6 h-8 animate-fade-up"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          <span className="text-indigo-soft">&gt;</span>{" "}
          {displayed}
          <span className="animate-pulse text-accent">|</span>
        </p>

        {/* Tagline */}
        <p
          className="text-text-secondary text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          {personalInfo.tagline}
          {" "}Based in{" "}
          <span className="text-text-primary">{personalInfo.location}.</span>
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          <button
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary"
          >
            Get In Touch
          </button>
          <button
            onClick={() =>
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-outline"
          >
            View Projects
          </button>
        </div>

        {/* Social Icons */}
        <div
          className="flex items-center justify-center gap-5 animate-fade-up"
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          {[
            { icon: Github,   href: personalInfo.github,              label: "GitHub"   },
            { icon: Linkedin, href: personalInfo.linkedin,            label: "LinkedIn" },
            { icon: Mail,     href: `mailto:${personalInfo.email}`,   label: "Email"    },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-lg border border-border flex items-center justify-center
                         text-text-secondary hover:text-accent hover:border-accent/50
                         transition-all duration-200 hover:-translate-y-0.5"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-muted
                   hover:text-accent transition-colors flex flex-col items-center gap-1 text-xs"
      >
        <span>scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </button>
    </section>
  );
}