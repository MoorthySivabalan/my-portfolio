// src/components/Experience.tsx
import { experiences, education } from "@/data/portfolio";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-12 px-3 md:px-10 lg:px-20 max-w-screen-xl mx-auto w-full">
      <p className="text-text-secondary text-sm uppercase tracking-widest mb-3">where i've been</p>
      <h2 className="text-4xl font-semibold text-text-primary mb-16">Experience & Education</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Work Experience */}
        <div>
          <h3 className="flex items-center gap-2 text-text-primary font-semibold text-xl mb-10">
            <Briefcase size={18} className="text-accent" /> Work Experience
          </h3>
          <div className="relative pl-7 border-l border-border space-y-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative">
                <div className="absolute -left-[31px] top-2 w-3.5 h-3.5 rounded-full bg-accent border-2 border-bg-primary" />
                <div className="card">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-text-primary font-semibold text-lg">{exp.role}</h4>
                      <p className="text-accent text-sm mt-0.5">{exp.company}</p>
                    </div>
                    <span className="badge text-xs whitespace-nowrap">{exp.period}</span>
                  </div>
                  <p className="text-text-secondary text-sm mb-4">{exp.location}</p>
                  <ul className="space-y-2">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="text-text-secondary text-sm flex gap-2 leading-relaxed">
                        <span className="text-accent mt-1 flex-shrink-0">›</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="flex items-center gap-2 text-text-primary font-semibold text-xl mb-10">
            <GraduationCap size={18} className="text-accent" /> Education
          </h3>
          <div className="relative pl-7 border-l border-border space-y-8">
            {education.map((edu) => (
              <div key={edu.id} className="relative">
                <div className="absolute -left-[31px] top-2 w-3.5 h-3.5 rounded-full bg-indigo-soft border-2 border-bg-primary" />
                <div className="card">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-text-primary font-semibold text-lg">{edu.degree}</h4>
                      <p className="text-indigo-soft text-sm mt-0.5">{edu.institution}</p>
                    </div>
                    {edu.current && (
                      <span className="badge text-xs bg-green-500/10 text-green-400 border-green-400/20">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-text-secondary text-sm mb-2">{edu.period}</p>
                  <p className="text-text-secondary text-sm">
                    CGPA: <span className="text-text-primary font-semibold">{edu.cgpa}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}