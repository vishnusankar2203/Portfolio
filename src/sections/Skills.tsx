import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <Section id="skills" title="Technical skills" intro="Grouped by how I use them in BIM automation work.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((g, i) => (
          <Reveal key={g.title} delay={i * 60} className={g.title.startsWith("BIM") ? "lg:col-span-2" : ""}>
            <div className={`h-full rounded border bg-ink-900 p-5 ${g.title.startsWith("BIM") ? "border-accent/60" : "border-ink-700"}`}>
              <h3 className="font-semibold">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => <li key={s} className="rounded bg-ink-800 px-2.5 py-1 text-sm transition-colors hover:bg-ink-700">{s}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
