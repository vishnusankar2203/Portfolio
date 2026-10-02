import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { achievements } from "../data/content";

export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements">
      <ul className="grid gap-4 md:grid-cols-2">
        {achievements.map((a) => (
          <li key={a}><Reveal><p className="h-full rounded border-l-2 border-accent bg-ink-900 p-5 text-paper/90">{a}</p></Reveal></li>
        ))}
      </ul>
    </Section>
  );
}
