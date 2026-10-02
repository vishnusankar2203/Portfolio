import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { education } from "../data/content";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((e) => (
          <Reveal key={e.degree}>
            <div className="h-full rounded border border-ink-700 bg-ink-900 p-5">
              <h3 className="font-semibold">{e.degree}</h3>
              <p className="mt-1 text-mute">{e.school}</p>
              <p className="mt-3 text-sm">{e.year} · {e.score}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
