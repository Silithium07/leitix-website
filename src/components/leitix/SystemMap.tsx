import { useState } from "react";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

type NodeId = "prozesse" | "daten" | "anwendungen" | "ai" | "automation";

type MapNode = {
  id: NodeId;
  label: string;
  x: number;
  y: number;
  text: string;
  connects: NodeId[];
};

const nodes: MapNode[] = [
  {
    id: "prozesse",
    label: "Prozesse",
    x: 140,
    y: 110,
    text: "Der reale Ablauf ist der Ausgangspunkt. Er bestimmt, welche Daten entstehen und welche Systeme beteiligt sind.",
    connects: ["daten", "anwendungen", "automation"],
  },
  {
    id: "daten",
    label: "Daten",
    x: 420,
    y: 70,
    text: "Daten aus verschiedenen Quellen werden vereinheitlicht – erst dann sind Auswertung und Automatisierung belastbar.",
    connects: ["prozesse", "anwendungen", "ai"],
  },
  {
    id: "anwendungen",
    label: "Anwendungen",
    x: 420,
    y: 250,
    text: "Bestehende und neue Anwendungen greifen auf dieselbe Struktur zu, statt eigene Nebenstände zu erzeugen.",
    connects: ["prozesse", "daten", "automation", "ai"],
  },
  {
    id: "ai",
    label: "AI",
    x: 700,
    y: 110,
    text: "AI arbeitet auf strukturierten Daten: erkennen, klassifizieren, vorbereiten. Die Entscheidung bleibt beim Menschen.",
    connects: ["daten", "anwendungen", "automation"],
  },
  {
    id: "automation",
    label: "Automatisierung",
    x: 700,
    y: 250,
    text: "Regeln und Auslöser übernehmen Übergaben und wiederkehrende Schritte – mit sichtbarem Status und Protokoll.",
    connects: ["prozesse", "anwendungen", "ai"],
  },
];

const edges: [NodeId, NodeId][] = [
  ["prozesse", "daten"],
  ["prozesse", "anwendungen"],
  ["prozesse", "automation"],
  ["daten", "anwendungen"],
  ["daten", "ai"],
  ["anwendungen", "ai"],
  ["anwendungen", "automation"],
  ["ai", "automation"],
];

const byId = (id: NodeId) => nodes.find((n) => n.id === id)!;

export function SystemMap() {
  const [active, setActive] = useState<NodeId | null>(null);
  const activeNode = active ? byId(active) : null;

  return (
    <section id="systemmap" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="LEITIX System Map"
          title={
            <>
              Wie die Bausteine
              <br />
              zusammenhängen.
            </>
          }
          intro="Ein Knoten genügt selten. Wählen Sie einen Bereich, um zu sehen, mit welchen anderen Bausteinen er im Projekt verbunden ist."
        />

        {/* Desktop / Tablet: Diagramm */}
        <Reveal className="mt-14 hidden md:block">
          <div className="panel rounded-sm p-6 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.7fr_1fr] lg:items-center">
              <svg
                viewBox="0 0 840 340"
                className="w-full"
                role="group"
                aria-label="Systemdiagramm der LEITIX Bausteine"
              >
                {edges.map(([a, b]) => {
                  const na = byId(a);
                  const nb = byId(b);
                  const on = active === a || active === b;
                  return (
                    <line
                      key={`${a}-${b}`}
                      x1={na.x}
                      y1={na.y}
                      x2={nb.x}
                      y2={nb.y}
                      stroke={on ? "var(--primary)" : "var(--border)"}
                      strokeWidth={on ? 1.4 : 0.8}
                      opacity={active && !on ? 0.35 : 1}
                      style={{ transition: "stroke 300ms ease, opacity 300ms ease" }}
                    />
                  );
                })}

                {nodes.map((n) => {
                  const isActive = active === n.id;
                  const isLinked = activeNode?.connects.includes(n.id) ?? false;
                  const dim = !!active && !isActive && !isLinked;
                  return (
                    <g
                      key={n.id}
                      tabIndex={0}
                      role="button"
                      aria-pressed={isActive}
                      aria-label={`${n.label}: ${n.text}`}
                      onMouseEnter={() => setActive(n.id)}
                      onFocus={() => setActive(n.id)}
                      onMouseLeave={() => setActive(null)}
                      onBlur={() => setActive(null)}
                      className="map-node cursor-pointer"
                      style={{ opacity: dim ? 0.4 : 1, transition: "opacity 300ms ease" }}
                    >
                      <rect
                        x={n.x - 78}
                        y={n.y - 22}
                        width={156}
                        height={44}
                        rx={3}
                        fill="oklch(1 0 0 / 3%)"
                        stroke={isActive || isLinked ? "var(--primary)" : "var(--border)"}
                        strokeWidth={isActive ? 1.3 : 0.9}
                        style={{ transition: "stroke 300ms ease" }}
                      />
                      <circle
                        cx={n.x - 62}
                        cy={n.y}
                        r={3}
                        fill={isActive || isLinked ? "var(--primary)" : "var(--muted-foreground)"}
                        style={{ transition: "fill 300ms ease" }}
                      />
                      <text
                        x={n.x - 50}
                        y={n.y + 4}
                        fill={isActive ? "var(--foreground)" : "var(--muted-foreground)"}
                        fontSize="12"
                        letterSpacing="2.4"
                        style={{ textTransform: "uppercase", transition: "fill 300ms ease" }}
                      >
                        {n.label.toUpperCase()}
                      </text>
                    </g>
                  );
                })}
              </svg>

              <div aria-live="polite" className="min-h-[190px] border-l border-border pl-8">
                {activeNode ? (
                  <>
                    <p className="text-[0.65rem] font-semibold tracking-[0.32em] text-primary uppercase">
                      {activeNode.label}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-foreground/85">
                      {activeNode.text}
                    </p>
                    <p className="mt-6 text-xs tracking-[0.14em] text-muted-foreground uppercase">
                      Verbunden mit
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {activeNode.connects.map((c) => (
                        <li
                          key={c}
                          className="hairline rounded-sm px-2.5 py-1 text-[0.7rem] tracking-[0.1em] text-muted-foreground uppercase"
                        >
                          {byId(c).label}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Bewegen Sie den Zeiger über einen Knoten oder navigieren Sie mit der Tabulatortaste,
                    um Verbindungen und Erklärung anzuzeigen.
                  </p>
                )}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Mobile: vertikale Sequenz */}
        <ol className="mt-12 flex flex-col md:hidden">
          {nodes.map((n, i) => (
            <li key={n.id} className="relative pl-8 pb-8">
              <span className="light-dot absolute top-1.5 left-0" aria-hidden="true" />
              {i < nodes.length - 1 && (
                <span
                  className="absolute top-4 left-[3px] h-full w-px bg-border"
                  aria-hidden="true"
                />
              )}
              <p className="text-[0.65rem] font-semibold tracking-[0.32em] text-primary uppercase">
                {n.label}
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{n.text}</p>
              <p className="mt-3 text-[0.68rem] tracking-[0.14em] text-muted-foreground/70 uppercase">
                Verbunden mit {n.connects.map((c) => byId(c).label).join(" · ")}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
