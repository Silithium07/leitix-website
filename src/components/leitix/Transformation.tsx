import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

type Scenario = {
  id: string;
  tab: string;
  headline: string;
  before: { title: string; steps: string[] };
  after: { title: string; steps: string[] };
  benefit: string;
};

const scenarios: Scenario[] = [
  {
    id: "dokument",
    tab: "PDF → Vorgang",
    headline: "Aus einem Dokument wird ein strukturierter Vorgang.",
    before: {
      title: "Manuell",
      steps: [
        "PDF landet im Postfach",
        "Inhalte werden gelesen",
        "Felder werden abgetippt",
        "Ablage nach eigenem Muster",
      ],
    },
    after: {
      title: "Als System",
      steps: [
        "Eingang wird erkannt und zugeordnet",
        "Felder liegen strukturiert als Vorschlag vor",
        "Prüfung bestätigt oder korrigiert",
        "Vorgang und Ablage entstehen einheitlich",
      ],
    },
    benefit: "Die Prüfung beginnt bei einem fertigen Entwurf statt bei einem Dokument.",
  },
  {
    id: "workflow",
    tab: "Abstimmung → Workflow",
    headline: "Aus manueller Abstimmung wird ein geführter Ablauf.",
    before: {
      title: "Manuell",
      steps: [
        "Anfrage per Mail weitergeleitet",
        "Erinnerung bei fehlender Antwort",
        "Zuständigkeit bei Abwesenheit unklar",
        "Status wird erfragt",
      ],
    },
    after: {
      title: "Als System",
      steps: [
        "Ereignis startet den Ablauf",
        "Rollen und Vertretungen sind hinterlegt",
        "Fristen lösen Hinweise aus",
        "Status ist sichtbar und protokolliert",
      ],
    },
    benefit: "Der Ablauf läuft gleichmäßig weiter, auch wenn niemand daran erinnert.",
  },
  {
    id: "daten",
    tab: "Silos → Grundlage",
    headline: "Aus getrennten Datenbeständen wird eine Entscheidungsgrundlage.",
    before: {
      title: "Manuell",
      steps: [
        "Export aus mehreren Systemen",
        "Zusammenführen in einer Tabelle",
        "Begriffe werden angeglichen",
        "Ergebnis gilt für einen Stichtag",
      ],
    },
    after: {
      title: "Als System",
      steps: [
        "Definierte Datenwege statt Exporte",
        "Einheitliche Schlüssel und Begriffe",
        "Auswertung ist wiederholbar",
        "Basis für Automatisierung und AI",
      ],
    },
    benefit: "Die gleiche Frage führt wieder zur gleichen, nachvollziehbaren Antwort.",
  },
];

export function Transformation() {
  const [active, setActive] = useState(scenarios[0]!.id);
  const current = scenarios.find((s) => s.id === active)!;

  return (
    <section id="transformation" className="radial-depth border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Vom manuellen Ablauf zum intelligenten System"
          title={
            <>
              Derselbe Prozess.
              <br />
              Anders gebaut.
            </>
          }
          intro="Drei anonymisierte Szenarien, wie sie in vielen Organisationen vorkommen. Keine Kundenprojekte, keine Zahlenversprechen – nur der Unterschied im Ablauf."
        />

        <Reveal className="mt-12">
          <div
            role="tablist"
            aria-label="Szenarien"
            className="flex flex-wrap gap-2 border-b border-border pb-4"
          >
            {scenarios.map((s) => (
              <button
                key={s.id}
                role="tab"
                type="button"
                id={`tab-${s.id}`}
                aria-selected={active === s.id}
                aria-controls={`panel-${s.id}`}
                onClick={() => setActive(s.id)}
                className={`rounded-sm px-4 py-2.5 text-[0.72rem] font-semibold tracking-[0.16em] uppercase transition-all duration-300 ${
                  active === s.id
                    ? "border border-primary/50 bg-primary/10 text-primary"
                    : "hairline text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.tab}
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            id={`panel-${current.id}`}
            aria-labelledby={`tab-${current.id}`}
            key={current.id}
            className="reveal-in mt-10"
          >
            <h3 className="max-w-2xl font-display text-lg leading-tight font-bold tracking-[0.04em] text-foreground uppercase sm:text-2xl">
              {current.headline}
            </h3>

            <div className="mt-9 grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
              <StateCard title={current.before.title} steps={current.before.steps} />
              <div className="flex items-center justify-center lg:px-2">
                <ArrowRight className="h-5 w-5 rotate-90 text-primary lg:rotate-0" aria-hidden="true" />
              </div>
              <StateCard title={current.after.title} steps={current.after.steps} highlight />
            </div>

            <p className="mt-8 border-l border-primary/50 pl-5 text-sm leading-relaxed text-foreground/85 sm:text-base">
              {current.benefit}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StateCard({
  title,
  steps,
  highlight = false,
}: {
  title: string;
  steps: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-sm px-6 py-7 transition-colors duration-500 ${
        highlight ? "panel border border-primary/30" : "hairline"
      }`}
    >
      <p
        className={`text-[0.65rem] font-semibold tracking-[0.32em] uppercase ${
          highlight ? "text-primary" : "text-muted-foreground"
        }`}
      >
        {title}
      </p>
      <ul className="mt-5 space-y-3.5">
        {steps.map((s) => (
          <li key={s} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
            <span
              className={`mt-2 h-px w-4 shrink-0 ${highlight ? "bg-primary/70" : "bg-border"}`}
              aria-hidden="true"
            />
            <span className={highlight ? "text-foreground/85" : ""}>{s}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
