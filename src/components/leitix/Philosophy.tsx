import { SectionHead } from "./SectionHead";
import { Reveal } from "./Reveal";

const principles = [
  { title: "Verstehen", text: "Erst den Prozess verstehen, dann Software entwickeln." },
  { title: "Verbinden", text: "Bestehende Systeme und Daten sinnvoll zusammenführen." },
  { title: "Vereinfachen", text: "Technologie soll Komplexität reduzieren, nicht neue schaffen." },
];

export function Philosophy() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface-2/40 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 15% 0%, oklch(0.28 0.05 258 / 45%), transparent 65%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
        <div>
          <SectionHead
            eyebrow="Philosophie"
            title="Standard reicht nicht immer."
            intro="Viele digitale Prozesse entstehen aus Kompromissen. LEITIX verfolgt einen anderen Ansatz. Wir analysieren reale Abläufe, erkennen unnötige Arbeitsschritte und entwickeln Lösungen, die sich dem Unternehmen anpassen – nicht umgekehrt."
          />
        </div>

        <ul className="flex flex-col">
          {principles.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 120}>
              <div className="group flex gap-6 border-t border-border py-8 last:border-b">
                <span className="font-display text-xs font-semibold tracking-[0.2em] text-primary/70">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-[0.16em] text-foreground uppercase">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {p.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
