import { CloudCog, DatabaseBackup, FileClock, KeyRound, Network, Scale, ShieldCheck, Wrench } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

const items=[
  [CloudCog,"Betriebsmodell","Cloud, On-Premise oder Hybrid werden anhand von IT-Vorgaben, Datenwegen und Betriebsverantwortung bewertet."],
  [DatabaseBackup,"Architektur & Recovery","Microsoft-, Azure- und SQL-nahe Architekturen sind möglich, sofern sie zur Umgebung passen. Backup und Wiederherstellung werden projektspezifisch geplant."],
  [KeyRound,"Rollen & Berechtigungen","Zugriffe werden nach Aufgaben und Verantwortlichkeiten getrennt. Rechtekonzepte entstehen gemeinsam mit dem Fachbereich."],
  [FileClock,"Audit & Nachvollziehbarkeit","Fachlich relevante Änderungen können mit Zeit, Rolle und Vorgang dokumentiert werden."],
  [Network,"Schnittstellen","Anbindung über API, Datei, Datenbank oder Webhook – abhängig davon, was ERP, TMS, DMS oder Fachanwendung sicher bereitstellen."],
  [Scale,"DSGVO & Datenstandort","Datenarten, Aufbewahrung, Anbieter und Standort werden vor der Umsetzung geklärt und dokumentiert."],
  [ShieldCheck,"AI mit Kontrolle","AI bereitet vor, klassifiziert und markiert Unsicherheit. Kritische Entscheidungen und Klärfälle bleiben beim Menschen."],
  [Wrench,"Betrieb & Support","Monitoring, Updates, Wartung, Dokumentation und Supportumfang werden passend zum System vereinbart."],
] as const;
export function SecurityContent(){return <section className="pb-24 sm:pb-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><SectionHead eyebrow="Projektabhängig geplant" title="Technik folgt Verantwortung." intro="Die passende Architektur entsteht aus Schutzbedarf, Betriebsumgebung, Integrationen und den Menschen, die mit dem System arbeiten."/><ul className="mt-14 grid gap-px border border-border md:grid-cols-2">{items.map(([Icon,title,text],i)=><Reveal as="li" key={title} delay={(i%2)*70}><article className="h-full bg-surface/35 p-7 sm:p-9"><Icon className="h-6 w-6 text-primary"/><h2 className="mt-6 font-display text-lg font-bold text-foreground">{title}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></article></Reveal>)}</ul><div className="mt-12 rounded-sm border border-primary/30 bg-primary/5 p-6 sm:p-8"><p className="font-display text-lg font-semibold text-foreground">Keine blinde Automatisierung.</p><p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">Welche Schritte automatisiert laufen dürfen, welche Schwellen gelten und wann ein Mensch entscheidet, wird im Prozess festgelegt. Sicherheits- und Betriebszusagen werden erst nach technischer Prüfung verbindlich vereinbart.</p></div></div></section>}
