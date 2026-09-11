import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/leitix/PageHero";
import { PracticeProjects } from "@/components/leitix/PracticeProjects";

const title="Praxisprojekte – anonymisierte Systeme | LEITIX";
const description="Reale, anonymisiert dargestellte LEITIX-Systeme für AI-Rechnungserkennung, QM-Schulungsmanagement, Lagerabgleich und Fleet Operations.";
export const Route=createFileRoute("/praxisprojekte")({
  head:()=>({meta:[{title},{name:"description",content:description},{property:"og:title",content:title},{property:"og:description",content:description},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}],links:[{rel:"canonical",href:"/praxisprojekte"}]}),
  component:PraxisprojektePage,
});
function PraxisprojektePage(){return <main><PageHero eyebrow="Praxisprojekte" title="Reale Lösungen. Vertrauliche Projekte." lead="Die folgenden Beispiele basieren auf real umgesetzten oder konkret entwickelten Unternehmenslösungen. Kundendaten, Logos und betriebliche Details wurden anonymisiert oder durch Demo-Daten ersetzt." meta={<p className="hairline inline-block rounded-sm px-4 py-2.5 text-[0.68rem] tracking-[0.14em] text-muted-foreground uppercase">Kundenprojekte werden aus Vertraulichkeitsgründen anonymisiert dargestellt.</p>}/><PracticeProjects/></main>}
