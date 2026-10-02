import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { experience as e } from "../data/content";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <Reveal>
        <article className="relative border-l-2 border-accent pl-6 md:pl-8">
          <span aria-hidden="true" className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-accent" />
          <h3 className="text-xl font-semibold">{e.role}</h3>
          <p className="mt-1 text-mute">{e.company}, {e.location} · {e.period}</p>
          <ul className="mt-5 max-w-3xl space-y-3 text-paper/90">
            {e.points.map((p) => <li key={p} className="flex gap-3"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" /><span>{p}</span></li>)}
          </ul>
        </article>
      </Reveal>
    </Section>
  );
}
