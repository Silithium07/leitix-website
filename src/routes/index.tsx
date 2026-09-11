import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/leitix/Hero";
import { Contact } from "@/components/leitix/Contact";
import { IntegrationSection, PrincipleSection, ProblemFinder, ProjectTeasers, ProofSection, SecurityTeaser, SolutionGroups } from "@/components/leitix/HomeRelaunch";
import { AiSection } from "@/components/leitix/AiSection";
import { LeitixCore } from "@/components/leitix/LeitixCore";
import { MicroDemo } from "@/components/leitix/MicroDemo";
import { ScrollStory } from "@/components/leitix/ScrollStory";
import { SolutionFinder } from "@/components/leitix/SolutionFinder";
import { Solutions } from "@/components/leitix/Solutions";

const title = "Individuelle Prozesssoftware Österreich | LEITIX";
const description =
  "LEITIX digitalisiert Abläufe zwischen ERP, Excel, E-Mail und Papier – mit Prozesssoftware, AI-Rechnungserkennung und Systemintegration.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <LeitixCore />
      <ScrollStory label="Problem" note="Ablauf verstehen" />
      <ProblemFinder />
      <ScrollStory label="Data" note="Informationen strukturieren" />
      <MicroDemo />
      <ScrollStory label="Software" note="Lösung gestalten" />
      <SolutionFinder />
      <SolutionGroups />
      <Solutions />
      <ScrollStory label="AI" note="Facharbeit unterstützen" />
      <AiSection />
      <ScrollStory label="Automation" note="Übergaben verbinden" />
      <PrincipleSection />
      <IntegrationSection />
      <ScrollStory label="Result" note="Im Betrieb bewähren" />
      <ProofSection />
      <ProjectTeasers />
      <SecurityTeaser />
      <Contact />
    </main>
  );
}
