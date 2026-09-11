import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/leitix/PageHero";
import { Reveal } from "@/components/leitix/Reveal";
import { IntegrationSection } from "@/components/leitix/HomeRelaunch";
import { CtaBand } from "@/components/leitix/CtaBand";
import { solutionGroups } from "@/lib/relaunch-content";

const title="Prozesssoftware & Automation Lösungen | LEITIX";
const description="LEITIX-Lösungen für AI-Rechnungserkennung, Dokumentenautomatisierung, individuelle Prozesssoftware, Fleet Operations und Systemintegration.";
export const Route=createFileRoute("/loesungen/")({head:()=>({meta:[{title},{name:"description",content:description},{property:"og:title",content:title},{property:"og:description",content:description},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}],links:[{rel:"canonical",href:"/loesungen"}]}),component:LoesungenIndex});
function LoesungenIndex(){return <main><PageHero eyebrow="Lösungen" title="Für die Lücke zwischen Standardsystem und realem Ablauf." lead="Nicht jede Prozesslücke braucht ein neues System. Oft braucht sie eine präzise Software-, AI- oder Integrationsschicht an der richtigen Stelle."/><section className="py-20 sm:py-28"><div className="mx-auto max-w-7xl px-5 sm:px-8"><ul className="grid gap-4 md:grid-cols-2">{solutionGroups.map((s,i)=><Reveal as="li" key={s.key} delay={(i%2)*80}><Link to="/loesungen/$slug" params={{slug:s.slug}} className="group block h-full rounded-sm border border-border bg-surface/35 p-8 transition-colors hover:border-primary/40"><span className="text-xs font-semibold text-primary">{s.key}</span><h2 className="mt-5 font-display text-2xl font-bold text-foreground">{s.title}</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.text}</p><span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">Lösung ansehen <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/></span></Link></Reveal>)}</ul></div></section><IntegrationSection/><CtaBand headline="Wo bleibt Ihr Prozess heute hängen?" text="Wir ordnen ein, welche Lösungsschicht sinnvoll ist und welche bestehenden Systeme bleiben."/></main>}
