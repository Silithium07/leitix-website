import { useId, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type FinderKey = "dokumente" | "prozesse" | "software" | "systeme" | "daten" | "ai";

type Option = {
  key: FinderKey;
  label: string;
  text: string;
  topic: string;
  stages: string[];
  conclusion: string;
};

const options: Option[] = [
  {
    key: "dokumente",
    label: "Dokumente",
    text: "Dokumente automatisch erkennen und verarbeiten",
    topic: "Künstliche Intelligenz",
    stages: [
      "E-Mail / PDF",
      "AI Document Intelligence",
      "Daten erkennen",
      "Validieren",
      "Bestehendes System",
      "Automatisierter Workflow",
    ],
    conclusion:
      "Eingehende Dokumente werden strukturiert, geprüft und in den bestehenden Vorgang übergeben.",
  },
  {
    key: "prozesse",
    label: "Prozesse",
    text: "Wiederkehrende Arbeit automatisieren",
    topic: "Prozessautomatisierung",
    stages: [
      "Auslöser im Ablauf",
      "Regeln & Zuständigkeit",
      "Aufgabe verteilen",
      "Status sichtbar",
      "Übergabe automatisch",
      "Protokoll",
    ],
    conclusion:
      "Der Ablauf läuft am Ereignis weiter – statt an der nächsten Rückfrage. Ausnahmen werden gemeldet.",
  },
  {
    key: "software",
    label: "Software",
    text: "Excel oder manuelle Lösungen durch Software ersetzen",
    topic: "Individuelle Software",
    stages: [
      "Excel / manuelle Listen",
      "Datenmodell",
      "Fachanwendung",
      "Rollen & Rechte",
      "Auswertung",
    ],
    conclusion:
      "Ein Ort für den Vorgang: erfassen, prüfen, freigeben und auswerten in einer Anwendung.",
  },
  {
    key: "systeme",
    label: "Systeme",
    text: "Bestehende Systeme miteinander verbinden",
    topic: "Systemintegration",
    stages: [
      "System A",
      "System B",
      "Schnittstelle",
      "Abgleich & Historie",
      "Ein Datenstand",
      "Gemeinsame Sicht",
    ],
    conclusion:
      "Bestehende Systeme bleiben – die Daten finden den Weg dazwischen, versioniert und nachvollziehbar.",
  },
  {
    key: "daten",
    label: "Daten",
    text: "Daten automatisch erfassen und auswerten",
    topic: "Digitale Systeme",
    stages: [
      "Erfassung",
      "Struktur & Begriffe",
      "Prüfregeln",
      "Kennzahlen",
      "Entscheidungsgrundlage",
    ],
    conclusion:
      "Auswertungen entstehen aus verbundenen Daten statt aus manuell zusammengetragenen Listen.",
  },
  {
    key: "ai",
    label: "AI",
    text: "Künstliche Intelligenz in bestehende Abläufe integrieren",
    topic: "Künstliche Intelligenz",
    stages: [
      "Anwendungsfall",
      "Datenlage prüfen",
      "AI-Modul im Arbeitsschritt",
      "Prüfbares Ergebnis",
      "Bestehendes System",
    ],
    conclusion:
      "AI sitzt im Arbeitsschritt, nicht daneben – mit sichtbarer Grundlage für jede Entscheidung.",
  },
];

export function SolutionFinder() {
  const [active, setActive] = useState<FinderKey | null>("dokumente");
  const reduced = useReducedMotion();
  const panelId = useId();
  const option = options.find((o) => o.key === active) ?? null;

  return (
    <section id="solution-finder" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-[0.68rem] font-semibold tracking-[0.32em] text-primary uppercase">
            LEITIX Solution Finder
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-2xl leading-[1.12] font-bold tracking-[0.04em] text-foreground uppercase sm:text-4xl lg:text-[2.75rem]">
            Was würden Sie gerne verbessern?
          </h2>
          <p className="mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground sm:text-lg">
            Wählen Sie einen Bereich – wir zeigen, wie eine passende Lösungsarchitektur aussehen
            könnte.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {options.map((o, i) => {
            const on = active === o.key;
            return (
              <Reveal as="li" key={o.key} delay={(i % 3) * 90}>
                <button
                  type="button"
                  aria-pressed={on}
                  aria-controls={panelId}
                  onClick={() => setActive(on ? null : o.key)}
                  className={`edge-glow depth-lift h-full min-h-[128px] w-full rounded-sm border p-6 text-left sm:p-7 ${
                    on
                      ? "border-primary/55 bg-primary/8"
                      : "border-border bg-surface/40 hover:border-primary/35"
                  }`}
                >
                  <span className="flex items-center justify-between gap-4">
                    <span className="font-display text-base font-bold tracking-[0.16em] text-foreground uppercase sm:text-lg">
                      {o.label}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`h-2 w-2 shrink-0 rounded-full transition-colors ${
                        on ? "bg-primary" : "bg-muted-foreground/40"
                      }`}
                    />
                  </span>
                  <span className="mt-3 block text-sm leading-relaxed text-muted-foreground">
                    {o.text}
                  </span>
                </button>
              </Reveal>
            );
          })}
        </ul>

        <div id={panelId} aria-live="polite" className="mt-12 sm:mt-16">
          {option ? (
            <div className="panel rounded-sm p-6 sm:p-10" key={option.key}>
              <p className="text-[0.62rem] font-semibold tracking-[0.3em] text-primary uppercase">
                Lösungsarchitektur · {option.label}
              </p>

              <ol className="mt-8 flex flex-col gap-0 lg:flex-row lg:items-stretch">
                {option.stages.map((s, i) => (
                  <li key={s} className="flex flex-1 flex-col lg:flex-row lg:items-center">
                    <div
                      className={`w-full rounded-sm border border-border bg-background/50 px-4 py-4 text-center ${
                        reduced ? "" : "node-in"
                      }`}
                      style={reduced ? undefined : { animationDelay: `${i * 240}ms` }}
                    >
                      <span className="block text-[0.58rem] tracking-[0.28em] text-primary/80">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="mt-2 block font-display text-[0.7rem] leading-snug font-semibold tracking-[0.14em] text-foreground uppercase">
                        {s}
                      </span>
                    </div>
                    {i < option.stages.length - 1 && (
                      <span
                        aria-hidden="true"
                        className={`mx-auto my-2 block h-6 w-px origin-top lg:mx-3 lg:my-0 lg:h-px lg:w-8 lg:origin-left ${
                          reduced ? "" : "connector-grow"
                        }`}
                        style={{
                          background:
                            "linear-gradient(90deg, oklch(0.68 0.19 255 / 20%), oklch(0.78 0.16 255 / 70%))",
                          ...(reduced ? {} : { animationDelay: `${i * 240 + 140}ms` }),
                        }}
                      />
                    )}
                  </li>
                ))}
              </ol>

              <p className="mt-9 font-display text-sm font-semibold tracking-[0.2em] text-foreground uppercase">
                So könnte Ihre Lösung aussehen.
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {option.conclusion} Die konkrete Ausgestaltung hängt von Ihrem Ablauf und Ihren
                Systemen ab.
              </p>

              <Link
                to="/kontakt"
                search={{ thema: option.topic } as { thema?: string }}
                className="edge-glow mt-8 inline-flex items-center gap-3 rounded-sm border border-primary/50 px-6 py-3.5 text-[0.76rem] font-semibold tracking-[0.16em] text-primary uppercase transition-colors hover:bg-primary/10"
              >
                Eigenen Prozess besprechen <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <p className="hairline rounded-sm px-6 py-8 text-sm leading-relaxed text-muted-foreground">
              Noch nichts ausgewählt. Die Auswahl bleibt auf dieser Seite – darunter erscheint eine
              beispielhafte Architektur aus Knoten und Verbindungen.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
