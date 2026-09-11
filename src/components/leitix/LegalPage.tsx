import { Link } from "@tanstack/react-router";
import { LightLine } from "./LightLine";

export function LegalPage({
  heading,
  intro,
  children,
}: {
  heading: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="radial-depth min-h-[70vh] pt-36 pb-24 sm:pt-44">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <p className="text-[0.7rem] font-semibold tracking-[0.32em] text-primary uppercase">
          Rechtliches
        </p>
        <h1 className="mt-5 font-display text-3xl font-bold tracking-[0.06em] text-foreground uppercase sm:text-5xl">
          {heading}
        </h1>
        {intro ? (
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">{intro}</p>
        ) : null}
        <div className="mt-10">
          <LightLine />
        </div>

        <div className="mt-12 space-y-10">{children}</div>

        <Link
          to="/"
          className="mt-14 inline-flex rounded-sm border border-input px-6 py-3 text-[0.75rem] font-semibold tracking-[0.18em] text-foreground uppercase transition-colors hover:border-primary/60 hover:text-primary"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </main>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-base font-bold tracking-[0.14em] text-foreground uppercase sm:text-lg">
        {title}
      </h2>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
        {children}
      </div>
    </section>
  );
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2.5 h-px w-4 shrink-0 bg-primary/60" aria-hidden="true" />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}
