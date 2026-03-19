// src/components/About.tsx
import { personalInfo } from "@/data/portfolio";
import { MapPin, Mail, Phone } from "lucide-react";

const timeline = [
  {
    year: "Sep 2025 – Present",
    title: "Master of Computer Applications",
    subtitle: "Anna University",
    location: "Guindy, Chennai",
    detail: "GPA — 7.0  ·  Currently pursuing",
    type: "education",
  },
  {
    year: "Mar – Aug 2025",
    title: "Associate Software Engineer",
    subtitle: "CognitiveMobile Technologies PVT",
    location: "St Thomas Mount, Chennai",
    detail: "Angular · TypeScript · NodeJS · Frontend",
    type: "work",
  },
  {
    year: "Apr – Oct 2024",
    title: "Associate Customer Support",
    subtitle: "Sutherland Global Services",
    location: "Perungalathur, Chennai",
    detail: "BPO Non-Voice Process · Chat Support",
    type: "work",
  },
  {
    year: "2019 – 23",
    title: "BE Mechanical Engineering",
    subtitle: "Government College of Engineering",
    location: "Tirunelveli",
    detail: "CGPA — 7.73",
    type: "education",
  },
  {
    year: "2018 – 19",
    title: "12th Standard",
    subtitle: "Zion Matriculation and Higher Secondary School",
    location: "Madambakkam",
    detail: "Percentage — 81.5%",
    type: "education",
  },
  {
    year: "2016 – 17",
    title: "10th Standard",
    subtitle: "Zion Matriculation and Higher Secondary School",
    location: "Madambakkam",
    detail: "Percentage — 93%",
    type: "education",
  },
];

export default function About() {
  return (
    <section id="about" className="py-12 px-6 md:px-10 lg:px-20 max-w-screen-xl mx-auto w-full">

      {/* ── Section header ─────────────────────────────────────────── */}
      <p className="text-text-secondary text-sm uppercase tracking-widest mb-3">
        who i am
      </p>
      <h2 className="text-4xl font-semibold text-text-primary mb-10">About Me</h2>

      {/* ── Top: Intro + Quick Info ─────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">

        {/* Left — bio text */}
        <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
          <p>
            I'm an{" "}
            <span className="text-text-primary font-semibold">
              Associate Software Engineer
            </span>{" "}
            from Chennai with hands-on experience building responsive Angular
            frontends and Python-based backend services.
          </p>
          <p>
            I worked at{" "}
            <span className="text-accent font-medium">
              CognitiveMobile Technology
            </span>{" "}
            developing the Cybot chatbot interface — an appointment scheduling
            and tracking system — using Angular, TypeScript, and PrimeNG.
          </p>
          <p>
            Currently pursuing my{" "}
            <span className="text-text-primary font-semibold">
              MCA at Anna University
            </span>
            , I'm expanding my skills into full-stack development with FastAPI,
            PostgreSQL, and cloud deployments.
          </p>
          <p>
            I'm actively looking for roles where I can contribute to real-world
            products while growing as a developer.
          </p>
        </div>

        {/* Right — Quick Info card */}
        <div className="bg-bg-secondary border border-border rounded-2xl p-7 space-y-5 hover:border-border-light transition-all duration-300">
          <h3 className="text-text-primary font-semibold text-lg mb-5">
            Quick Info
          </h3>

          {[
            { icon: MapPin, label: "Location", value: personalInfo.location },
            { icon: Mail,   label: "Email",    value: personalInfo.email    },
            { icon: Phone,  label: "Phone",    value: personalInfo.phone    },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Icon size={16} className="text-accent" />
              </div>
              <div>
                {/* ✅ Fix 2 — label now clearly visible */}
                <p className="text-text-secondary text-xs font-medium uppercase tracking-wider mb-0.5">
                  {label}
                </p>
                <p className="text-text-primary text-base">{value}</p>
              </div>
            </div>
          ))}

          <div className="pt-4 border-t border-border">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm w-full text-center block"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* ── Timeline ────────────────────────────────────────────────── */}
      <div>
        <p className="text-text-secondary text-sm uppercase tracking-widest mb-3">
          my journey
        </p>
        <h3 className="text-3xl font-semibold text-text-primary mb-10">
          Timeline
        </h3>

        <div className="relative">
          {/* Central vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-border to-transparent" />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className="relative flex items-center justify-between gap-4">

                  {/* Left side content */}
                  <div className={`w-[46%] ${isLeft ? "block" : "invisible"}`}>
                    {isLeft && (
                      <div className="bg-bg-secondary border border-border rounded-xl p-5 hover:border-accent/40 hover:shadow-[0_0_20px_rgba(0,212,200,0.05)] transition-all duration-300 text-right">
                        <span
                          className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${
                            item.type === "work"
                              ? "bg-indigo-soft/10 text-indigo-soft border border-indigo-soft/20"
                              : "bg-accent/10 text-accent border border-accent/20"
                          }`}
                        >
                          {item.year}
                        </span>
                        <h4 className="text-text-primary font-semibold text-base mb-1">
                          {item.title}
                        </h4>
                        <p className="text-accent text-sm mb-0.5">{item.subtitle}</p>
                        <p className="text-text-secondary text-xs mb-2">{item.location}</p>
                        <p className="text-text-secondary text-xs font-mono border-t border-border pt-2 mt-2">
                          {item.detail}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                    <div
                      className={`w-4 h-4 rounded-full border-2 border-bg-primary ${
                        item.type === "work" ? "bg-indigo-soft" : "bg-accent"
                      }`}
                    />
                  </div>

                  {/* Right side content */}
                  <div className={`w-[46%] ${!isLeft ? "block" : "invisible"}`}>
                    {!isLeft && (
                      <div className="bg-bg-secondary border border-border rounded-xl p-5 hover:border-accent/40 hover:shadow-[0_0_20px_rgba(0,212,200,0.05)] transition-all duration-300 text-left">
                        <span
                          className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${
                            item.type === "work"
                              ? "bg-indigo-soft/10 text-indigo-soft border border-indigo-soft/20"
                              : "bg-accent/10 text-accent border border-accent/20"
                          }`}
                        >
                          {item.year}
                        </span>
                        <h4 className="text-text-primary font-semibold text-base mb-1">
                          {item.title}
                        </h4>
                        <p className="text-accent text-sm mb-0.5">{item.subtitle}</p>
                        <p className="text-text-secondary text-xs mb-2">{item.location}</p>
                        <p className="text-text-secondary text-xs font-mono border-t border-border pt-2 mt-2">
                          {item.detail}
                        </p>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-8 mt-16 pt-8 border-t border-border">
            <div className="flex items-center gap-2 text-text-secondary text-sm">
              <div className="w-3 h-3 rounded-full bg-accent" />
              Education
            </div>
            <div className="flex items-center gap-2 text-text-secondary text-sm">
              <div className="w-3 h-3 rounded-full bg-indigo-soft" />
              Work Experience
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}