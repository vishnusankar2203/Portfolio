import Section from "../components/Section";
import Reveal from "../components/Reveal";
import Flow from "../components/Flow";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <Section id="projects" title="Projects" intro="Diagrams are conceptual summaries of each project, not exact production architecture.">
      <div className="space-y-6">
        {projects.map((p) => (
          <Reveal key={p.title}>
            <article className="grid gap-6 rounded border border-ink-700 bg-ink-900 p-5 transition-colors hover:border-accent md:grid-cols-[1fr_230px] md:p-7">
              <div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-1 text-mute">{p.short}</p>
                <dl className="mt-5 space-y-3 text-sm">
                  {([["Problem", p.problem], ["Technical approach", p.approach], ["My contribution", p.contribution], ["Outcome", p.outcome]] as const).map(([k, v]) => (
                    <div key={k}><dt className="font-medium text-accent">{k}</dt><dd className="mt-0.5 text-paper/90">{v}</dd></div>
                  ))}
                </dl>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                  {p.tech.map((t) => <li key={t} className="rounded bg-ink-800 px-2.5 py-1 text-xs">{t}</li>)}
                </ul>
              </div>
              <div className="self-center">
                <Flow steps={p.flow} label={`${p.title} flow (conceptual)`} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
