import { SectionHead } from "./SectionHead";
import { Reveal } from "./Reveal";

const steps = [
  { no: "01", title: "Prozessaufnahme", text: "Den realen Ablauf, Rollen, Ausnahmen und Medienbrüche verstehen." },
  { no: "02", title: "Daten & Regeln", text: "Quellen, Entscheidungen und wiederholbare Geschäftsregeln klären." },
  { no: "03", title: "Software & Integration", text: "Eine nutzbare Lösung bauen und bestehende Systeme verbinden." },
  { no: "04", title: "Betrieb & Ausbau", text: "Im Alltag prüfen, dokumentieren und gezielt weiterentwickeln." },
];

export function Process() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead eyebrow="Arbeitsweise" title="Erst Prozess verstehen. Dann Software bauen." />

        <ol className="relative mt-14 grid gap-10 sm:mt-20 lg:grid-cols-4 lg:gap-8">
          <div
            aria-hidden="true"
            className="light-line absolute top-[7px] right-0 left-0 hidden h-px lg:block"
          />
          <div
            aria-hidden="true"
            className="light-line absolute top-0 bottom-0 left-[7px] w-px lg:hidden"
            style={{
              background:
                "linear-gradient(180deg, transparent, oklch(0.7 0.17 255 / 45%), transparent)",
            }}
          />
          {steps.map((s, i) => (
            <Reveal as="li" key={s.no} delay={i * 120} className="relative pl-10 lg:pl-0">
              <span
                aria-hidden="true"
                className="light-node absolute top-1 left-1 h-3 w-3 rounded-full lg:left-0"
              />
              <div className="lg:pt-10">
                <span className="font-display text-xs font-bold tracking-[0.24em] text-primary/80">
                  {s.no}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold tracking-[0.14em] text-foreground uppercase">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
