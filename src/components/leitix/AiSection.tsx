import { useState } from "react";
import { SectionHead } from "./SectionHead";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type Cap = {
  id: string;
  label: string;
  text: string;
  /** Winkel in Grad auf dem Core-Ring */
  angle: number;
};

const caps: Cap[] = [
  {
    id: "docs",
    label: "Dokumentenerkennung",
    text: "Eingehende Dokumente werden ausgelesen, geprüft und als strukturierte Felder weitergegeben.",
    angle: -90,
  },
  {
    id: "analysis",
    label: "Datenanalyse",
    text: "Bestehende Datenbestände werden zusammengeführt, ausgewertet und verständlich aufbereitet.",
    angle: -30,
  },
  {
    id: "assist",
    label: "Intelligente Assistenz",
    text: "Fachliche Unterstützung direkt im Ablauf: Vorschläge, Zusammenfassungen, Vorbereitungen.",
    angle: 30,
  },
  {
    id: "vision",
    label: "Bilderkennung",
    text: "Bilder und Aufnahmen werden automatisiert erkannt, zugeordnet und dokumentiert.",
    angle: 90,
  },
  {
    id: "decisions",
    label: "Prozessentscheidungen",
    text: "Regelbasierte und lernende Entscheidungen steuern, welcher Schritt als Nächstes passiert.",
    angle: 150,
  },
  {
    id: "automation",
    label: "Automatisierung",
    text: "Erkannte Informationen lösen Folgeschritte in bestehenden Systemen selbstständig aus.",
    angle: 210,
  },
];

const R = 74;
const C = 100;

function point(angle: number, radius = R) {
  const rad = (angle * Math.PI) / 180;
  return { x: C + Math.cos(rad) * radius, y: C + Math.sin(rad) * radius };
}

export function AiSection() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState<string | null>(null);
  const current = caps.find((c) => c.id === active) ?? null;

  return (
    <section className="relative overflow-hidden border-y border-border py-24 sm:py-36">
      <div aria-hidden="true" className="absolute inset-0 -z-10 radial-depth">
        <div
          className={reduced ? "absolute inset-x-0 top-1/4 h-[60vh]" : "ambient-drift absolute inset-x-0 top-1/4 h-[60vh]"}
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, oklch(0.42 0.11 256 / 40%), transparent 70%)",
            filter: "blur(30px)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(1 0 0 / 4%) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 4%) 1px, transparent 1px)",
            backgroundSize: "88px 88px",
            maskImage: "radial-gradient(70% 60% at 50% 45%, black, transparent)",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead
          align="center"
          eyebrow="Artificial Intelligence"
          title="AI, die einen Zweck hat."
          intro="Künstliche Intelligenz ist für uns kein Selbstzweck. Wir integrieren AI dort, wo sie Prozesse schneller, präziser oder einfacher macht."
        />

        <div className="mt-14 grid items-center gap-10 sm:mt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          {/* AI Core */}
          <div className="mx-auto w-full max-w-md">
            <svg viewBox="0 0 200 200" aria-hidden="true" className="w-full">
              <defs>
                <linearGradient id="ai-metal" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="oklch(0.34 0.02 262)" />
                  <stop offset="45%" stopColor="oklch(0.19 0.012 260)" />
                  <stop offset="100%" stopColor="oklch(0.27 0.024 258)" />
                </linearGradient>
                <linearGradient id="ai-chrome" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="oklch(0.92 0.01 260 / 55%)" />
                  <stop offset="55%" stopColor="oklch(0.6 0.01 260 / 12%)" />
                  <stop offset="100%" stopColor="oklch(0.88 0.02 258 / 40%)" />
                </linearGradient>
              </defs>

              {/* Verbindungen */}
              {caps.map((c) => {
                const p = point(c.angle);
                const on = active === c.id;
                return (
                  <line
                    key={c.id}
                    x1={C}
                    y1={C}
                    x2={p.x}
                    y2={p.y}
                    stroke={on ? "oklch(0.72 0.19 255 / 75%)" : "oklch(1 0 0 / 7%)"}
                    strokeWidth={on ? 1.1 : 0.6}
                    style={{ transition: reduced ? undefined : "stroke 420ms ease, stroke-width 420ms ease" }}
                  />
                );
              })}

              {/* Knoten */}
              {caps.map((c) => {
                const p = point(c.angle);
                const on = active === c.id;
                return (
                  <circle
                    key={c.id}
                    cx={p.x}
                    cy={p.y}
                    r={on ? 4.2 : 3}
                    fill={on ? "oklch(0.72 0.19 255)" : "oklch(0.7 0.02 260 / 45%)"}
                    style={{ transition: reduced ? undefined : "all 420ms ease" }}
                  />
                );
              })}

              {/* Core: aus dem LEITIX-X abgeleitet */}
              <g opacity={active ? 1 : 0.9} style={{ transition: reduced ? undefined : "opacity 400ms ease" }}>
                <path
                  d="M100 52 L134 78 L124 100 L134 122 L100 148 L66 122 L76 100 L66 78 Z"
                  fill="url(#ai-metal)"
                  stroke="url(#ai-chrome)"
                  strokeWidth="1.2"
                />
                <path
                  d="M84 74 L116 126 M116 74 L84 126"
                  stroke={active ? "oklch(0.72 0.19 255 / 85%)" : "oklch(0.72 0.19 255 / 28%)"}
                  strokeWidth="1.1"
                  fill="none"
                  style={{ transition: reduced ? undefined : "stroke 420ms ease" }}
                />
                <circle
                  cx="100"
                  cy="100"
                  r={active ? 6 : 4}
                  fill="oklch(0.72 0.19 255)"
                  opacity={active ? 0.9 : 0.5}
                  style={{ transition: reduced ? undefined : "all 420ms ease" }}
                />
              </g>
            </svg>
          </div>

          {/* Auswahl */}
          <div>
            <ul className="grid gap-px overflow-hidden rounded-sm border border-border sm:grid-cols-2">
              {caps.map((c, i) => {
                const on = active === c.id;
                return (
                  <li key={c.id}>
                    <button
                      type="button"
                      aria-pressed={on}
                      onPointerEnter={() => setActive(c.id)}
                      onFocus={() => setActive(c.id)}
                      onClick={() => setActive(on ? null : c.id)}
                      className={`h-full w-full bg-surface/30 px-4 py-6 text-left transition-colors duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/60 sm:px-6 sm:py-7 ${
                        on ? "bg-primary/10" : "hover:bg-primary/5"
                      }`}
                    >
                      <span className="font-display text-[0.7rem] font-semibold tracking-[0.2em] text-primary/70">
                        0{i + 1}
                      </span>
                      <span className="mt-3 block text-xs font-medium tracking-[0.1em] text-foreground uppercase sm:text-sm">
                        {c.label}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <p
              aria-live="polite"
              className="mt-6 min-h-[3.5rem] text-sm leading-relaxed text-muted-foreground"
            >
              {current
                ? current.text
                : "Einen Bereich auswählen, um zu sehen, wie er im LEITIX AI Core zusammenspielt."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
