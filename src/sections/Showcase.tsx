import Section from "../components/Section";
import Reveal from "../components/Reveal";
import Flow from "../components/Flow";
import { pipeline, showcase } from "../data/content";

export default function Showcase() {
  return (
    <Section id="automation" title="How I automate BIM workflows" intro="A repeating pattern: start from an engineering problem, turn it into data and logic, and let Revit or AutoCAD produce the model or documentation.">
      <Reveal>
        <div className="rounded border border-ink-700 bg-ink-900 p-5">
          <Flow steps={pipeline} horizontal label="BIM automation pipeline (conceptual)" />
        </div>
      </Reveal>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {showcase.map((s, i) => (
          <Reveal key={s.t} delay={i * 50}>
            <div className="h-full rounded border border-ink-700 p-5 transition-colors hover:border-accent">
              <h3 className="font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-mute">{s.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
