import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/leitix/PageHero";
import { About } from "@/components/leitix/About";
import { AiSection } from "@/components/leitix/AiSection";
import { CtaBand } from "@/components/leitix/CtaBand";

const title = "Über LEITIX – Prozesswissen & Softwareengineering";
const description =
  "LEITIX verbindet Prozesswissen mit Softwareengineering für Logistik, Flotte, Werkstatt, Einkauf, Lager, QM und Backoffice.";

export const Route = createFileRoute("/ueber-leitix")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/ueber-leitix" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Über LEITIX"
        title="Software entsteht bei LEITIX nicht am Whiteboard, sondern aus dem Prozess."
        lead="LEITIX analysiert zuerst, wie Arbeit tatsächlich erledigt wird: Wo entstehen Medienbrüche? Wo wird doppelt erfasst? Welche Entscheidung benötigt Fachwissen? Welche Information fehlt zwischen bestehenden Systemen? Erst daraus entsteht die technische Lösung."
      />
      <About />
      <AiSection />
      <CtaBand
        headline="Sie möchten wissen, ob wir zu Ihrem Vorhaben passen?"
        text="Ein Gespräch genügt, um das sachlich zu klären."
      />
    </main>
  );
}
