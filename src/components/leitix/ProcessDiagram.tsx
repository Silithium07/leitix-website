import { ArrowRight } from "lucide-react";

export function ProcessDiagram({ compact = false }: { compact?: boolean }) {
  const sources = ["ERP", "Excel", "E-Mail", "Dokumente"];
  const outputs = ["Prüfung", "Workflow", "Export", "Entscheidung"];
  return (
    <div className={`process-grid panel rounded-sm ${compact ? "p-5" : "p-6 sm:p-8"}`} aria-label="Prozessdarstellung von Eingangssystemen über LEITIX zu den Ergebnissen">
      <div className="grid gap-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
        <ul className="grid grid-cols-2 gap-2">
          {sources.map((item) => <li key={item} className="hairline rounded-sm px-3 py-3 text-center text-[0.68rem] tracking-[0.14em] text-muted-foreground uppercase">{item}</li>)}
        </ul>
        <div className="flex items-center justify-center gap-2 text-primary">
          <ArrowRight className="h-4 w-4 rotate-90 sm:rotate-0" aria-hidden="true" />
          <div className="border border-primary/50 bg-primary/10 px-5 py-4 text-center font-display text-sm font-bold tracking-[0.18em] text-foreground uppercase">LEITIX<span className="mt-1 block text-[0.55rem] font-medium text-primary">Prozessschicht</span></div>
          <ArrowRight className="h-4 w-4 rotate-90 sm:rotate-0" aria-hidden="true" />
        </div>
        <ul className="grid grid-cols-2 gap-2">
          {outputs.map((item, i) => <li key={item} className={`hairline rounded-sm px-3 py-3 text-center text-[0.68rem] tracking-[0.14em] uppercase ${i === 0 ? "border-primary/40 text-primary" : "text-muted-foreground"}`}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}
