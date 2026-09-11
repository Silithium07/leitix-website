import { SectionHead } from "./SectionHead";
import { Reveal } from "./Reveal";

const services = [
  {
    no: "01",
    key: "SOFTWARE",
    title: "Individuelle Softwarelösungen",
    text: "Von spezialisierten Business-Anwendungen bis zu kompletten digitalen Plattformen.",
  },
  {
    no: "02",
    key: "AI",
    title: "Künstliche Intelligenz",
    text: "KI sinnvoll in bestehende Prozesse integrieren – für Analyse, Erkennung, Assistenz und Automatisierung.",
  },
  {
    no: "03",
    key: "AUTOMATION",
    title: "Prozessautomatisierung",
    text: "Wiederkehrende Abläufe verbinden, vereinfachen und automatisieren.",
  },
  {
    no: "04",
    key: "DIGITAL SYSTEMS",
    title: "Digitale Systeme",
    text: "Daten, Anwendungen und bestehende Systeme intelligent miteinander verbinden.",
  },
];

export function Services() {
  return (
    <section id="leistungen" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Leistungen"
          title="Technologie, die Arbeit einfacher macht."
          intro="LEITIX entwickelt digitale Lösungen dort, wo Standardsoftware an ihre Grenzen stößt."
        />

        <ul className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border sm:mt-20 lg:grid-cols-2">
          {services.map((s, i) => (
            <Reveal as="li" key={s.no} delay={i * 90}>
              <article className="group relative h-full overflow-hidden bg-surface/40 p-8 transition-colors duration-500 hover:bg-surface/80 sm:p-12">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, oklch(0.72 0.19 255 / 80%), transparent)",
                  }}
                />
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-sm font-bold tracking-[0.2em] text-primary/80">
                    {s.no}
                  </span>
                  <span className="font-display text-xs font-semibold tracking-[0.28em] text-muted-foreground uppercase">
                    {s.key}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-[0.02em] text-foreground sm:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {s.text}
                </p>
                <div
                  aria-hidden="true"
                  className="mt-10 h-px w-16 bg-border transition-all duration-500 group-hover:w-28 group-hover:bg-primary/60"
                />
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
