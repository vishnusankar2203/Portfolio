import { ReactNode } from "react";
import Reveal from "./Reveal";

export default function Section({ id, title, intro, children }: { id: string; title: string; intro?: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="mx-auto w-full max-w-6xl px-5 py-20 md:py-28">
      <Reveal>
        <h2 id={`${id}-h`} className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
        {intro && <p className="mt-3 max-w-2xl text-mute">{intro}</p>}
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}
