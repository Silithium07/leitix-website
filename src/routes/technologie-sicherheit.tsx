import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/leitix/PageHero";
import { SecurityContent } from "@/components/leitix/SecurityContent";
import { CtaBand } from "@/components/leitix/CtaBand";

const title="Technologie & Sicherheit | LEITIX";
const description="Betriebsmodelle, Rollen, Audit Log, Schnittstellen, DSGVO, Human-in-the-Loop und Wartung für individuelle LEITIX-Prozesssoftware.";
export const Route=createFileRoute("/technologie-sicherheit")({
  head:()=>({meta:[{title},{name:"description",content:description},{property:"og:title",content:title},{property:"og:description",content:description},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}],links:[{rel:"canonical",href:"/technologie-sicherheit"}]}),
  component:TechnologyPage,
});
function TechnologyPage(){return <main><PageHero eyebrow="Technologie & Sicherheit" title="Sicher integrieren. Nachvollziehbar betreiben." lead="Architektur, Betrieb und Schutzmaßnahmen richten sich nach Prozess, Daten und bestehender IT – von Cloud über On-Premise bis Hybrid."/><SecurityContent/><CtaBand headline="Welche Vorgaben muss Ihre Lösung erfüllen?" text="Wir klären Systeme, Datenwege, Rollen und Betriebsmodell vor der technischen Umsetzung."/></main>}
