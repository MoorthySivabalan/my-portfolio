import ScrollReveal from "@/components/ScrollReveal";
import { projects } from "@/data/portfolio";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-12 px-3 md:px-10 lg:px-20 bg-bg-secondary">
      <div className="max-w-screen-xl mx-auto w-full">
        <p className="section-subtitle">what i've built</p>
        <h2 className="section-title">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} direction="up" delay={i * 100}>
              <div
                className="card flex flex-col justify-between group
                         hover:shadow-[0_0_30px_rgba(0,212,200,0.06)]
                         hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {project.featured && (
                    <span className="badge text-xs mb-4 inline-block">Featured</span>
                  )}
                  <h3 className="text-text-primary font-semibold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded bg-bg-tertiary text-text-muted
                                 border border-border font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent transition-colors flex items-center gap-1.5 text-xs"
                    >
                      <Github size={14} /> Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent transition-colors flex items-center gap-1.5 text-xs"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                  {!project.github && !project.live && (
                    <span className="text-text-muted text-xs">Private project</span>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}