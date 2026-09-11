import {
  AlertTriangle,
  Boxes,
  CalendarDays,
  Check,
  CheckCircle2,
  FileCheck2,
  FileText,
  History,
  PackageCheck,
  ReceiptText,
  ShieldCheck,
  ShoppingCart,
  Users,
} from "lucide-react";

export function QualityDemoVisual() {
  return (
    <div className="overflow-hidden rounded-sm border border-border bg-surface" role="img" aria-label="Anonymisierte Demo-Darstellung eines digitalen Schulungs- und Qualitätsmanagementsystems">
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <div><p className="text-[0.6rem] tracking-[0.18em] text-primary uppercase">LEITIX Demo</p><p className="mt-1 text-sm font-semibold text-foreground">Quality & Training</p></div>
        <span className="inline-flex items-center gap-2 text-xs text-primary"><ShieldCheck className="h-4 w-4" /> Status aktuell</span>
      </div>
      <div className="grid gap-px bg-border sm:grid-cols-[1.35fr_1fr]">
        <div className="bg-background p-5">
          <div className="flex items-center gap-3"><CalendarDays className="h-4 w-4 text-primary" /><p className="text-xs font-semibold tracking-[0.12em] text-foreground uppercase">Schulungskalender</p></div>
          <div className="mt-5 grid grid-cols-5 gap-2">
            {["12", "13", "14", "15", "16", "19", "20", "21", "22", "23"].map((d, i) => <div key={d} className={`aspect-square rounded-sm border p-2 text-xs ${[2,5,8].includes(i) ? "border-primary/50 bg-primary/10 text-primary" : "border-border text-muted-foreground"}`}>{d}</div>)}
          </div>
          <div className="mt-5 space-y-2">
            {["Sicherheitsunterweisung", "QM-Prozessfreigabe", "Interne Wiederholung"].map((x, i) => <div key={x} className="flex items-center justify-between border-b border-border py-2 text-xs"><span className="text-muted-foreground">{x}</span><span className={i === 2 ? "text-muted-foreground" : "text-primary"}>{i === 2 ? "geplant" : "nachgewiesen"}</span></div>)}
          </div>
        </div>
        <div className="bg-surface-2 p-5">
          <p className="text-xs font-semibold tracking-[0.12em] text-foreground uppercase">Vorgang QT-1048</p>
          <ul className="mt-5 space-y-4">
            {[[Users,"Teilnehmende","12 Demo-Profile"],[FileCheck2,"Nachweise","vollständig"],[History,"Änderungen","protokolliert"]].map(([Icon,label,value]) => { const I = Icon as typeof Users; return <li key={String(label)} className="flex gap-3"><I className="mt-0.5 h-4 w-4 text-primary" /><div><p className="text-[0.65rem] text-muted-foreground uppercase">{String(label)}</p><p className="mt-1 text-xs text-foreground">{String(value)}</p></div></li>; })}
          </ul>
          <div className="mt-6 flex items-center gap-2 border-t border-border pt-4 text-xs text-primary"><Check className="h-4 w-4" /> Nächste Frist erkannt</div>
        </div>
      </div>
    </div>
  );
}

const invoiceRows = [
  { id: "RG-1048", source: "Quelle A", total: "1.248,00 €", status: "Prüfbereit", tone: "text-primary" },
  { id: "RG-1051", source: "Quelle B", total: "892,40 €", status: "Klärfall", tone: "text-chart-4" },
  { id: "RG-1056", source: "Quelle C", total: "354,90 €", status: "Neu", tone: "text-muted-foreground" },
];

export function InvoiceControlVisual() {
  return (
    <div className="overflow-hidden rounded-sm border border-border bg-surface" role="img" aria-label="Neu gestalteter Demo-Arbeitsplatz für die fachliche Rechnungsprüfung">
      <div className="flex items-center justify-between border-b border-border px-4 py-3 sm:px-5">
        <div><p className="text-[0.58rem] tracking-[0.18em] text-primary uppercase">LEITIX Demo</p><p className="mt-1 text-sm font-semibold text-foreground">Invoice Control</p></div>
        <span className="inline-flex items-center gap-2 text-[0.68rem] text-muted-foreground"><ShieldCheck className="h-4 w-4 text-primary" /> Fachprüfung aktiv</span>
      </div>
      <div className="grid gap-px bg-border md:grid-cols-[0.8fr_1.2fr]">
        <div className="bg-background p-4 sm:p-5">
          <p className="text-[0.62rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase">Vorgänge</p>
          <div className="mt-4 space-y-2">
            {invoiceRows.map((row, index) => <div key={row.id} className={`rounded-sm border p-3 ${index === 0 ? "border-primary/45 bg-primary/10" : "border-border bg-surface/40"}`}><div className="flex items-center justify-between gap-3"><p className="font-mono text-xs text-foreground">{row.id}</p><span className={`text-[0.62rem] font-semibold ${row.tone}`}>{row.status}</span></div><div className="mt-2 flex items-center justify-between gap-3 text-[0.65rem] text-muted-foreground"><span>{row.source}</span><span>{row.total}</span></div></div>)}
          </div>
        </div>
        <div className="bg-surface-2 p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3"><div><p className="text-[0.62rem] font-semibold tracking-[0.14em] text-foreground uppercase">Prüfung RG-1048</p><p className="mt-1 text-[0.65rem] text-muted-foreground">Dokument · Positionen · Zuordnung</p></div><span className="rounded-sm border border-primary/35 bg-primary/10 px-2.5 py-1 text-[0.62rem] text-primary">Entwurf prüfen</span></div>
          <div className="mt-5 grid grid-cols-3 gap-2">
            {["Dokument", "Stammdaten", "Fachregeln"].map((step) => <div key={step} className="rounded-sm border border-border bg-background/50 px-2 py-3 text-center text-[0.6rem] text-foreground"><CheckCircle2 className="mx-auto mb-2 h-4 w-4 text-primary" />{step}</div>)}
          </div>
          <div className="mt-5 space-y-2">
            {["Positionen vollständig erkannt", "Kontierung nachvollziehbar", "Eine Zuordnung fachlich bestätigen"].map((item, index) => <div key={item} className="flex items-center gap-3 border-b border-border py-2 text-[0.68rem]"><span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border ${index === 2 ? "border-chart-4/50 text-chart-4" : "border-primary/40 text-primary"}`}>{index === 2 ? <AlertTriangle className="h-3 w-3" /> : <Check className="h-3 w-3" />}</span><span className="text-muted-foreground">{item}</span></div>)}
          </div>
        </div>
      </div>
    </div>
  );
}

const warehouseSteps = [
  { label: "Bestellung", detail: "Menge · Preis", Icon: ShoppingCart },
  { label: "Bestätigung", detail: "Termin · Menge", Icon: FileCheck2 },
  { label: "Lieferschein", detail: "Liefermenge", Icon: FileText },
  { label: "Lagerzugang", detail: "Bestand", Icon: PackageCheck },
  { label: "Rechnung", detail: "Preis · Konto", Icon: ReceiptText },
];

export function WarehouseControlVisual() {
  return (
    <div className="overflow-hidden rounded-sm border border-border bg-surface" role="img" aria-label="Eigenständig gestaltete Demo-Ansicht des digitalen 5-fach-Abgleichs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-5">
        <div><p className="text-[0.58rem] tracking-[0.18em] text-primary uppercase">LEITIX Demo</p><p className="mt-1 text-sm font-semibold text-foreground">Purchase & Warehouse Control</p></div>
        <span className="inline-flex items-center gap-2 text-[0.68rem] text-muted-foreground"><Boxes className="h-4 w-4 text-primary" /> Vorgang WH-204</span>
      </div>
      <div className="bg-background p-4 sm:p-6">
        <p className="text-[0.62rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase">Digitale Belegkette</p>
        <ol className="mt-4 grid gap-2 sm:grid-cols-5">
          {warehouseSteps.map(({ label, detail, Icon }, index) => <li key={label} className="relative rounded-sm border border-border bg-surface/55 p-3"><div className="flex items-center gap-2"><span className="flex h-7 w-7 items-center justify-center rounded-sm border border-primary/35 bg-primary/10 text-primary"><Icon className="h-3.5 w-3.5" /></span><span className="text-[0.58rem] text-primary">0{index + 1}</span></div><p className="mt-3 text-[0.68rem] font-semibold text-foreground">{label}</p><p className="mt-1 text-[0.58rem] text-muted-foreground">{detail}</p></li>)}
        </ol>
        <div className="mt-4 grid gap-3 sm:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-sm border border-border bg-surface-2 p-4"><div className="flex items-center justify-between gap-3"><p className="text-[0.62rem] font-semibold tracking-[0.12em] text-foreground uppercase">Fachliche Prüflogik</p><span className="text-[0.6rem] text-primary">4 bestätigt · 1 prüfen</span></div><div className="mt-3 flex flex-wrap gap-2">{["Artikel", "Menge", "Preis", "Belegbezug", "Toleranz"].map((rule, index) => <span key={rule} className={`rounded-sm border px-2 py-1 text-[0.58rem] ${index === 2 ? "border-chart-4/45 text-chart-4" : "border-primary/30 text-muted-foreground"}`}>{rule}</span>)}</div></div>
          <div className="rounded-sm border border-primary/30 bg-primary/10 p-4"><p className="text-[0.62rem] font-semibold tracking-[0.12em] text-primary uppercase">Ergebnis</p><p className="mt-2 text-[0.68rem] leading-relaxed text-foreground">Preisabweichung als Klärfall markiert. Freigabe bleibt beim Menschen.</p></div>
        </div>
      </div>
    </div>
  );
}
