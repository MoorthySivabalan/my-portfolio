import ScrollReveal from "@/components/ScrollReveal";
import { skills } from "@/data/portfolio";

const categories = ["Language", "Frontend", "Backend", "Database", "Cloud", "Tools"];

export default function Skills() {
  return (
    <section id="skills" className="py-12 px-3 md:px-10 lg:px-20 bg-bg-secondary">
      <div className="max-w-screen-xl mx-auto w-full">
        <p className="section-subtitle">what i know</p>
        <h2 className="section-title">Skills</h2>

        <div className="mt-12 space-y-10">
          {categories.map((cat) => {
            const catSkills = skills.filter((s) => s.category === cat);
            if (!catSkills.length) return null;
            return (
              <div key={cat}>
                <h3 className="text-white text-xs uppercase tracking-widest mb-4 font-semibold
               drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                  {cat}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {catSkills.map((skill, i) => (
                    <ScrollReveal key={skill.name} direction="up" delay={i * 80}>
                      <div className="card group">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-text-primary text-sm font-medium">
                            {skill.name}
                          </span>
                          <span className="text-accent text-xs font-mono">{skill.level}%</span>
                        </div>
                        <div className="h-1 bg-border rounded-full overflow-hidden">
                          <div
                            className="h-full bg-accent rounded-full transition-all duration-700
                                     group-hover:bg-indigo-soft"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}