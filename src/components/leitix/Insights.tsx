import { Reveal } from "./Reveal";

const entries = [
  {
    topic: "Automation",
    title: "Wann Automatisierung mehr Aufwand erzeugt als sie spart",
  },
  {
    topic: "AI",
    title: "Dokumentenerkennung: was vor dem Modell entschieden werden muss",
  },
  {
    topic: "Systeme",
    title: "Integration statt Ersatz – wann sich ein Zwischenschritt lohnt",
  },
];

export function Insights() {
  return (
    <section className="border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
            <div className="min-w-0">
              <p className="text-[0.68rem] font-semibold tracking-[0.32em] text-primary uppercase">
                Insights
              </p>
              <h2 className="mt-4 font-display text-xl font-bold tracking-[0.04em] text-foreground uppercase sm:text-2xl">
                Fachthemen in Vorbereitung
              </h2>
            </div>
            <p className="text-xs tracking-[0.16em] text-muted-foreground/70 uppercase">
              Entwurf · noch nicht veröffentlicht
            </p>
          </div>
        </Reveal>

        <ul className="mt-10 grid gap-px sm:grid-cols-3">
          {entries.map((e) => (
            <Reveal key={e.title} as="li" className="hairline rounded-sm px-6 py-7">
                <div className="flex items-center gap-3">
                  <span className="text-[0.62rem] tracking-[0.28em] text-primary uppercase">
                    {e.topic}
                  </span>
                  <span className="h-px flex-1 bg-border" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-[0.95rem] leading-snug text-foreground/85">{e.title}</h3>
                <p className="mt-4 text-[0.68rem] tracking-[0.18em] text-muted-foreground/60 uppercase">
                  Platzhalter
                </p>
              </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
