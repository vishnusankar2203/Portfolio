import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { profile } from "../data/content";

const focus = ["Python and C# development", "Revit API, pyRevit and add-in development", "AutoCAD automation", "MEP and Civil workflow automation", "AI and BIM integration through MCP", "Server-client architecture and data analysis"];

export default function About() {
  return (
    <Section id="about" title="Engineering, BIM and software in one profile">
      <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <p className="text-lg leading-relaxed text-paper">{profile.summary}</p>
          <p className="mt-4 text-mute">My background is mechanical engineering (diploma) followed by a B.Tech in Artificial Intelligence and Data Science. Languages: {profile.languages}.</p>
        </Reveal>
        <Reveal delay={100}>
          <h3 className="text-lg font-semibold">What I work on</h3>
          <ul className="mt-3 space-y-2 border-l border-accent/60 pl-4 text-mute">
            {focus.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
