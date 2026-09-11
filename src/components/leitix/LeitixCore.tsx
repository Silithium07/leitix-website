import { useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type CoreId = "software" | "ai" | "automation" | "data" | "systems";

type CoreNode = {
  id: CoreId;
  label: string;
  x: number;
  y: number;
  items: string[];
  text: string;
};

const VW = 1000;
const VH = 560;
const CX = 500;
const CY = 270;

const nodes: CoreNode[] = [
  {
    id: "software",
    label: "Software",
    x: 148,
    y: 108,
    items: ["Business Applications", "Platforms", "Interfaces", "Custom Software"],
    text: "Anwendungen bilden den Ablauf ab – als Oberfläche, Plattform oder Schnittstelle zum Kernprozess.",
  },
  {
    id: "ai",
    label: "AI",
    x: 852,
    y: 108,
    items: ["Document Intelligence", "Vision", "Analysis", "Assistants"],
    text: "AI übernimmt das Lesen, Ordnen und Vorbereiten von Informationen. Die Entscheidung bleibt beim Menschen.",
  },
  {
    id: "automation",
    label: "Automation",
    x: 852,
    y: 432,
    items: ["Workflows", "Processes", "Events", "Decisions"],
    text: "Automatisierung übernimmt Übergaben und wiederkehrende Schritte – regelbasiert und nachvollziehbar.",
  },
  {
    id: "data",
    label: "Data",
    x: 148,
    y: 432,
    items: ["Capture", "Structure", "Analyze", "Connect"],
    text: "Daten werden erfasst, strukturiert und verbunden. Erst dann sind Auswertung und Automatisierung belastbar.",
  },
  {
    id: "systems",
    label: "Systems",
    x: 500,
    y: 512,
    items: ["ERP", "Cloud", "APIs", "Existing Software"],
    text: "Bestehende Systeme bleiben tragend: Sie werden angebunden statt ersetzt, wo sie ihren Zweck erfüllen.",
  },
];

const byId = (id: CoreId) => nodes.find((n) => n.id === id)!;

export function LeitixCore() {
  const [active, setActive] = useState<CoreId | null>("ai");
  const [reflex, setReflex] = useState<{ x: number; y: number } | null>(null);
  const reduced = useReducedMotion();
  const stageRef = useRef<HTMLDivElement | null>(null);

  const activeNode = active ? byId(active) : null;

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduced || e.pointerType !== "mouse") return;
    const el = stageRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setReflex({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  };

  return (
    <section id="leitix-system" className="relative overflow-hidden border-y border-border py-24 sm:py-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10 radial-depth opacity-90" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-[0.68rem] font-semibold tracking-[0.32em] text-primary uppercase">
            LEITIX System
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-2xl leading-[1.12] font-bold tracking-[0.04em] text-foreground uppercase sm:text-4xl lg:text-[2.75rem]">
            Technologie. Intelligent verbunden.
          </h2>
          <p className="mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground sm:text-lg">
            Software, AI, Automation, Daten und Systeme entfalten ihren größten Nutzen, wenn sie
            zusammenspielen.
          </p>
        </Reveal>

        {/* Diagram (Tablet / Desktop) */}
        <Reveal delay={120} className="mt-14 hidden md:block">
          <div
            ref={stageRef}
            onPointerMove={onPointerMove}
            onPointerLeave={() => setReflex(null)}
            className="panel relative aspect-[1000/560] w-full overflow-hidden rounded-sm"
          >
            {reflex && (
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(26% 30% at ${reflex.x}% ${reflex.y}%, oklch(0.7 0.16 255 / 8%), transparent 70%)`,
                }}
              />
            )}

            <svg
              aria-hidden="true"
              viewBox={`0 0 ${VW} ${VH}`}
              className="absolute inset-0 h-full w-full"
              fill="none"
            >
              <defs>
                <linearGradient id="core-metal" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="oklch(0.42 0.02 260)" />
                  <stop offset="45%" stopColor="oklch(0.22 0.014 262)" />
                  <stop offset="100%" stopColor="oklch(0.3 0.026 256)" />
                </linearGradient>
                <linearGradient id="core-edge" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="oklch(0.95 0.01 260 / 55%)" />
                  <stop offset="50%" stopColor="oklch(0.6 0.01 260 / 25%)" />
                  <stop offset="100%" stopColor="oklch(0.88 0.02 258 / 45%)" />
                </linearGradient>
              </defs>

              {/* Connections – nearly invisible at rest */}
              {nodes.map((n) => {
                const on = active === n.id;
                return (
                  <line
                    key={n.id}
                    x1={n.x}
                    y1={n.y}
                    x2={CX}
                    y2={CY}
                    stroke={on ? "oklch(0.72 0.19 255)" : "oklch(1 0 0 / 9%)"}
                    strokeWidth={on ? 1.2 : 0.6}
                    opacity={active && !on ? 0.25 : 1}
                    style={{ transition: "stroke 420ms ease, opacity 420ms ease" }}
                  />
                );
              })}

              {/* LEITIX core – geometry derived from the X of the wordmark */}
              <g style={{ transition: "opacity 420ms ease" }}>
                <path
                  d={`M${CX - 130} ${CY - 96} L${CX - 44} ${CY - 96} L${CX} ${CY - 30}
                      L${CX + 44} ${CY - 96} L${CX + 130} ${CY - 96} L${CX + 44} ${CY}
                      L${CX + 130} ${CY + 96} L${CX + 44} ${CY + 96} L${CX} ${CY + 30}
                      L${CX - 44} ${CY + 96} L${CX - 130} ${CY + 96} L${CX - 44} ${CY} Z`}
                  fill="url(#core-metal)"
                  stroke="url(#core-edge)"
                  strokeWidth="1.1"
                />
                {/* internal blue pattern */}
                <g
                  stroke="oklch(0.72 0.19 255)"
                  strokeWidth="0.7"
                  opacity={active ? 0.75 : 0.28}
                  style={{ transition: "opacity 520ms ease" }}
                >
                  <path d={`M${CX - 96} ${CY - 74} L${CX - 18} ${CY}`} />
                  <path d={`M${CX + 96} ${CY - 74} L${CX + 18} ${CY}`} />
                  <path d={`M${CX - 96} ${CY + 74} L${CX - 18} ${CY}`} />
                  <path d={`M${CX + 96} ${CY + 74} L${CX + 18} ${CY}`} />
                  <circle
                    cx={CX}
                    cy={CY}
                    r={active ? 5 : 3}
                    fill="oklch(0.82 0.14 255)"
                    stroke="none"
                    style={{ transition: "r 420ms ease" }}
                  />
                </g>
                <text
                  x={CX}
                  y={CY + 132}
                  textAnchor="middle"
                  fill="oklch(0.74 0.008 260)"
                  fontSize="12"
                  letterSpacing="5"
                >
                  LEITIX CORE
                </text>
              </g>
            </svg>

            {/* Real buttons on top of the diagram */}
            {nodes.map((n) => {
              const on = active === n.id;
              return (
                <button
                  key={n.id}
                  type="button"
                  aria-pressed={on}
                  aria-label={`${n.label}: ${n.items.join(", ")}`}
                  onMouseEnter={() => setActive(n.id)}
                  onFocus={() => setActive(n.id)}
                  onClick={() => setActive(on ? null : n.id)}
                  className={`absolute w-[176px] -translate-x-1/2 -translate-y-1/2 rounded-sm border px-4 py-3 text-left transition-all duration-400 ${
                    on
                      ? "border-primary/60 bg-primary/8"
                      : "border-border bg-background/40 hover:border-primary/35"
                  } ${active && !on ? "opacity-45" : "opacity-100"}`}
                  style={{ left: `${(n.x / VW) * 100}%`, top: `${(n.y / VH) * 100}%` }}
                >
                  <span className="font-display text-[0.72rem] font-semibold tracking-[0.22em] text-foreground uppercase">
                    {n.label}
                  </span>
                  <span className="mt-1 block text-[0.62rem] tracking-[0.14em] text-muted-foreground uppercase">
                    {n.items.length} Bausteine
                  </span>
                </button>
              );
            })}

            {/* Explanation */}
            <div
              aria-live="polite"
              className="absolute inset-x-6 bottom-6 mx-auto max-w-xl rounded-sm border border-border bg-background/80 px-5 py-4 text-center backdrop-blur-sm"
            >
              {activeNode ? (
                <>
                  <p className="text-[0.62rem] font-semibold tracking-[0.3em] text-primary uppercase">
                    {activeNode.label}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-foreground/85 sm:text-sm">
                    {activeNode.text}
                  </p>
                  <p className="mt-3 text-[0.62rem] tracking-[0.18em] text-muted-foreground uppercase">
                    {activeNode.items.join(" · ")}
                  </p>
                </>
              ) : (
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  Wählen Sie einen Baustein – per Zeiger, Tastatur oder Klick – um seine Verbindung
                  zum LEITIX Core zu sehen.
                </p>
              )}
            </div>
          </div>
        </Reveal>

        {/* Mobile: vertical tap sequence */}
        <ul className="mt-12 space-y-3 md:hidden">
          {nodes.map((n) => {
            const on = active === n.id;
            return (
              <li key={n.id}>
                <button
                  type="button"
                  aria-pressed={on}
                  aria-expanded={on}
                  onClick={() => setActive(on ? null : n.id)}
                  className={`min-h-11 w-full rounded-sm border px-5 py-4 text-left transition-colors ${
                    on ? "border-primary/55 bg-primary/8" : "border-border bg-surface/40"
                  }`}
                >
                  <span className="flex items-center justify-between gap-4">
                    <span className="font-display text-[0.78rem] font-semibold tracking-[0.2em] text-foreground uppercase">
                      {n.label}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`h-2 w-2 rounded-full transition-colors ${
                        on ? "bg-primary" : "bg-muted-foreground/50"
                      }`}
                    />
                  </span>
                  {on && (
                    <>
                      <span className="mt-3 block text-sm leading-relaxed text-foreground/85">
                        {n.text}
                      </span>
                      <span className="mt-3 block text-[0.62rem] tracking-[0.18em] text-primary uppercase">
                        {n.items.join(" · ")}
                      </span>
                    </>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
