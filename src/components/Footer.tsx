// src/components/Footer.tsx
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 text-center text-text-muted text-xs">
      <p>
        Designed & built by{" "}
        <span className="text-accent">{personalInfo.name}</span>
        {" "}· {new Date().getFullYear()}
      </p>
      <p className="mt-1">
        Built with{" "}
        <span className="text-text-secondary">Next.js · TypeScript · Tailwind CSS</span>
      </p>
    </footer>
  );
}