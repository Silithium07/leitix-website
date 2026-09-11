import { SectionHead } from "./SectionHead";
import { Reveal } from "./Reveal";
import { MicroSystem, type SystemKind } from "./SolutionSystems";

const items = [
  {
    title: "Business Software",
    text: "Anwendungen, die exakt entlang der eigenen Abläufe entstehen.",
    kind: "modules" as SystemKind,
  },
  {
    title: "Workflow Automation",
    text: "Wiederkehrende Schritte automatisiert verbinden und überwachen.",
    kind: "workflow" as SystemKind,
  },
  {
    title: "AI & Document Intelligence",
    text: "Dokumente und unstrukturierte Daten automatisiert auslesen und einordnen.",
    kind: "document" as SystemKind,
  },
  {
    title: "Data & System Integration",
    text: "Schnittstellen zwischen bestehenden Systemen, Datenquellen und Tools.",
    kind: "integration" as SystemKind,
  },
  {
    title: "Fleet & Operations Solutions",
    text: "Operative Abläufe digital abbilden, steuern und transparent machen.",
    kind: "fleet" as SystemKind,
  },
  {
    title: "Management Systems",
    text: "Strukturierte Systeme für Steuerung, Nachweise und Auswertung.",
    kind: "dashboard" as SystemKind,
  },
];

export function Solutions() {
  return (
    <section id="loesungen" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Lösungen"
          title={
            <>
              Digitale Lösungen.
              <br className="hidden sm:block" /> Für reale Prozesse.
            </>
          }
          intro="Beispielhafte Kompetenzbereiche, in denen LEITIX Software, AI und Automation zusammenführt."
        />

        <ul className="mt-14 grid gap-5 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal as="li" key={it.title} delay={(i % 3) * 100}>
              <article className="panel group h-full rounded-sm p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/35 sm:p-8">
                <MicroSystem kind={it.kind} label={it.title} />
                <h3 className="mt-7 font-display text-base font-semibold tracking-[0.1em] text-foreground uppercase">
                  {it.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
