import { profile } from "../data/content";
import profilePhoto from "../My Photo.jpeg";

const btn = "inline-flex items-center justify-center rounded px-5 py-3 text-sm font-medium transition-colors";

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-h" className="blueprint-grid relative overflow-hidden border-b border-ink-700 pt-14">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-14 md:py-20 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="text-accent">{profile.name}</p>
          <h1 id="hero-h" className="mt-3 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">{profile.role}</h1>
          <p className="mt-4 text-xl text-paper sm:text-2xl">{profile.headline}</p>
          <p className="mt-4 max-w-xl text-mute">{profile.sub}</p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Core technologies">
            {profile.heroTags.map((t) => <li key={t} className="rounded border border-ink-600 bg-ink-900 px-3 py-1 text-sm">{t}</li>)}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className={`${btn} bg-accent text-ink-950 hover:bg-white`}>View projects</a>
            <a href={profile.resume} download className={`${btn} border border-ink-600 hover:border-accent`}>Download resume</a>
            <a href="#contact" className={`${btn} border border-ink-600 hover:border-accent`}>Contact me</a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative aspect-[4/5] w-full max-w-[21rem] overflow-hidden rounded-[1.75rem] border border-ink-600 bg-gradient-to-br from-emerald-900/80 via-ink-950 to-ink-900 shadow-[0_20px_60px_rgba(10,15,20,0.7)] sm:max-w-[23rem] lg:max-w-[25rem]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(74,222,128,0.35),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(34,197,94,0.18),transparent_25%)]" />
            <img
              src={profilePhoto}
              alt={`${profile.name} portrait`}
              className="relative z-10 h-full w-full scale-[1.02] object-cover"
              style={{ objectPosition: "center 20%" }}
            />
            <div className="absolute inset-x-0 bottom-0 z-20 h-14 bg-gradient-to-t from-ink-950/70 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
