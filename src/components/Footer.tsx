import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-ink-700 px-5 py-8 text-sm text-mute">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. {profile.role}.</p>
        <p>Built with React, TypeScript, Three.js and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
