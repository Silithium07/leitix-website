import { useRef } from "react";
import { SectionHead } from "./SectionHead";
import { useInView, useReducedMotion } from "@/hooks/use-reduced-motion";

const fields = [
  { label: "Quelle", value: "Demo-Dokument" },
  { label: "Betrag", value: "1.248,00 €" },
  { label: "Datum", value: "14.02.2026" },
  { label: "Objekt", value: "OBJ-104" },
  { label: "Kostenstelle", value: "OPS-04" },
];

export function MicroDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const reduced = useReducedMotion();
  const run = reduced || inView;
  const delay = (ms: number) => (reduced ? 0 : ms);

  return (
    <section className="border-y border-border py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHead
          align="center"
          eyebrow="Live Micro Demo"
          title="Von unstrukturiert zu intelligent."
          intro="Abstrakte Darstellung mit Demo-Daten: aus einem eingehenden Dokument werden strukturierte Felder und ein automatisierter Ablauf."
        />

        <div ref={ref} className="mt-14 grid gap-4 sm:mt-20 lg:grid-cols-[1fr_auto_1fr]">
          {/* Eingang */}
          <div className="panel rounded-sm p-6 sm:p-7">
            <p className="font-display text-[0.68rem] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
              Eingang
            </p>
            <div
              className={`mt-5 space-y-3 ${run ? "node-in" : "opacity-0"}`}
              style={{ animationDelay: `${delay(0)}ms` }}
            >
              <div className="hairline flex items-center gap-3 rounded-sm bg-surface/40 px-4 py-3 text-sm text-foreground">
                <span className="text-primary/80">✉</span> E-Mail Eingang
              </div>
              <div className="hairline flex items-center gap-3 rounded-sm bg-surface/40 px-4 py-3 font-mono text-xs text-muted-foreground">
                <span className="text-primary/80">▤</span> invoice_2026.pdf
              </div>
            </div>
          </div>

          {/* AI */}
          <div className="flex items-center justify-center">
            <div
              className={`metal-core hairline w-full rounded-sm px-6 py-5 text-center lg:w-40 ${
                run ? "node-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${delay(700)}ms` }}
            >
              <p className="font-display text-[0.7rem] font-semibold tracking-[0.2em] text-foreground uppercase">
                LEITIX AI
              </p>
              <p className="mt-2 text-[0.68rem] tracking-[0.14em] text-primary/80 uppercase">
                analysiert
              </p>
            </div>
          </div>

          {/* Ergebnis */}
          <div className="panel rounded-sm p-6 sm:p-7">
            <p className="font-display text-[0.68rem] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
              Strukturierte Daten
            </p>
            <ul className="mt-5 space-y-2">
              {fields.map((f, i) => (
                <li
                  key={f.label}
                  className={`flex items-baseline justify-between gap-3 border-b border-border/60 pb-2 text-sm ${
                    run ? "node-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${delay(1200 + i * 550)}ms` }}
                >
                  <span className="text-muted-foreground">{f.label}</span>
                  <span className="flex items-center gap-2 text-right text-foreground">
                    <span className="font-mono text-xs">{f.value}</span>
                    <span aria-hidden="true" className="text-primary">
                      ✓
                    </span>
                    <span className="sr-only">erkannt</span>
                  </span>
                </li>
              ))}
            </ul>
            <p
              className={`mt-6 font-display text-[0.72rem] font-semibold tracking-[0.2em] text-primary uppercase ${
                run ? "node-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${delay(4200)}ms` }}
            >
              Workflow automatisiert
            </p>
          </div>
        </div>

        <p className="mt-6 text-center text-xs tracking-[0.1em] text-muted-foreground/80">
          Alle Angaben sind Demo-Daten – keine echten Kunden, Dokumente oder Unternehmensdaten.
        </p>
      </div>
    </section>
  );
}
