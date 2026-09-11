import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

const points = [
  {
    index: "01",
    label: "Prozessverständnis",
    text: "Wir hören zuerst zu: Ablauf, Beteiligte, Ausnahmen. Ohne dieses Bild lässt sich nichts sinnvoll bauen.",
  },
  {
    index: "02",
    label: "Gemeinsame Priorisierung",
    text: "Wir benennen, was zuerst Wirkung hätte und was warten kann – auch wenn das weniger Umfang bedeutet.",
  },
  {
    index: "03",
    label: "Offene Einordnung",
    text: "Wenn ein Standardwerkzeug ausreicht oder ein Vorhaben zu früh ist, sagen wir das.",
  },
  {
    index: "04",
    label: "Nachvollziehbarer nächster Schritt",
    text: "Am Ende steht ein konkreter, überschaubarer nächster Schritt statt eines offenen Angebots.",
  },
];

export function Clarity() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr]">
          <SectionHead
            eyebrow="Projekt-Klarheit"
            title={
              <>
                Was Sie vor einem
                <br />
                Gespräch erwarten können.
              </>
            }
            intro="Kein Verkaufsgespräch, sondern eine sachliche Einordnung. Das ist eine Beschreibung unserer Arbeitsweise – keine Garantie über Ergebnisse."
          />
          <ul className="grid gap-px sm:grid-cols-2">
            {points.map((p) => (
              <Reveal key={p.index} as="li" className="hairline rounded-sm px-6 py-7">
                  <span className="text-[0.62rem] tracking-[0.28em] text-primary">{p.index}</span>
                  <h3 className="mt-3 font-display text-[0.95rem] font-semibold tracking-[0.08em] text-foreground uppercase">
                    {p.label}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
