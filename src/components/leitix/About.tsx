import { SectionHead } from "./SectionHead";
import { Reveal } from "./Reveal";
import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="ueber" className="relative border-y border-border bg-surface-2/40 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24">
        <div>
          <SectionHead
            eyebrow="Über LEITIX"
            title="Prozesswissen + Softwareengineering"
            intro="LEITIX verbindet die Sprache des Betriebs mit sauberer technischer Umsetzung – sachlich, direkt und ohne Technologie als Selbstzweck."
          />
          <Reveal delay={140}>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Günter Leitner entwickelt mit LEITIX Lösungen aus dem tatsächlichen Ablauf heraus. Der Fokus liegt auf klaren Entscheidungen, belastbaren Datenwegen und Software, die im Betrieb verständlich bleibt.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="panel rounded-sm p-8 sm:p-10">
            <p className="text-[0.68rem] font-semibold tracking-[0.28em] text-primary uppercase">Fachfelder</p>
            <ul className="mt-6 space-y-4">
              {["Logistik & Flotte", "Werkstatt & Instandhaltung", "Einkauf & Lager", "QM & Dokumentation", "Finance- & Backoffice-Prozesse"].map((field) => <li key={field} className="flex items-center gap-3 border-b border-border pb-4 text-sm text-foreground"><CheckCircle2 className="h-4 w-4 text-primary" />{field}</li>)}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
