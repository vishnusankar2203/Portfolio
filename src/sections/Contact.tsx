import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { profile as p } from "../data/content";

export default function Contact() {
  return (
    <Section id="contact" title="Let's build smarter BIM workflows.">
      <Reveal>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="max-w-md text-mute">Open to BIM automation, Revit add-in and AEC technology work. Email is the quickest way to reach me.</p>
            <a href={`mailto:${p.email}`} className="mt-6 inline-flex rounded bg-accent px-5 py-3 text-sm font-medium text-ink-950 transition-colors hover:bg-white">Email me</a>
          </div>
          <dl className="space-y-4">
            <div><dt className="text-sm text-mute">Email</dt><dd><a className="hover:text-accent" href={`mailto:${p.email}`}>{p.email}</a></dd></div>
            <div><dt className="text-sm text-mute">Phone</dt><dd><a className="hover:text-accent" href={`tel:${p.phone}`}>{p.phone}</a></dd></div>
            <div><dt className="text-sm text-mute">GitHub</dt><dd><a className="hover:text-accent" href={p.github} target="_blank" rel="noreferrer">{p.github}</a></dd></div>
            <div><dt className="text-sm text-mute">LinkedIn</dt><dd><a className="hover:text-accent" href={p.linkedin} target="_blank" rel="noreferrer">{p.linkedin}</a></dd></div>
          </dl>
        </div>
      </Reveal>
    </Section>
  );
}
