import Section from "../components/Section";
import Reveal from "../components/Reveal";
import Flow, { Arrow, Node } from "../components/Flow";

export default function Architecture() {
  return (
    <Section id="architecture" title="Automation architecture" intro="Two conceptual views of how I connect Revit to automation. They illustrate the approach described in my resume, not an exact production design.">
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <figure className="h-full rounded border border-ink-700 bg-ink-900 p-6">
            <figcaption className="mb-5 font-semibold">AI-driven path (MCP)</figcaption>
            <div className="mx-auto flex max-w-sm flex-col items-center">
              <Node>AI / User</Node><Arrow />
              <Node>MCP layer</Node><Arrow delay={300} />
              <Node strong>Revit automation</Node><Arrow delay={600} />
              <div className="grid w-full grid-cols-2 gap-3">
                <Node>pyRevit</Node><Node>Revit API</Node>
              </div>
              <Arrow delay={900} />
              <Node strong>BIM / engineering workflows</Node>
            </div>
          </figure>
        </Reveal>
        <Reveal delay={100}>
          <figure className="h-full rounded border border-ink-700 bg-ink-900 p-6">
            <figcaption className="mb-5 font-semibold">Standalone path (no LLM)</figcaption>
            <div className="mx-auto max-w-sm">
              <Flow label="Standalone server-client flow (conceptual)" steps={["Revit client", "Automation interface", "Server / client communication", "Structured payload", "Revit workflow"]} />
            </div>
          </figure>
        </Reveal>
      </div>
    </Section>
  );
}
