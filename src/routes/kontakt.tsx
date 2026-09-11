import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/leitix/PageHero";
import { Contact } from "@/components/leitix/Contact";
import { Clarity } from "@/components/leitix/Clarity";

const title = "Prozess besprechen – Kontakt | LEITIX";
const description =
  "Beschreiben Sie Ihren Prozess und erreichen Sie LEITIX direkt per E-Mail oder Telefon für individuelle Software, AI und Automation.";

export const Route = createFileRoute("/kontakt")({
  validateSearch: (search: Record<string, unknown>): { thema?: string } => {
    const t = search["thema"];
    return typeof t === "string" ? { thema: t } : {};
  },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  const { thema } = Route.useSearch();

  return (
    <main>
      <PageHero
        eyebrow="Kontakt"
        title="Sprechen wir über Ihren Prozess."
        lead="Eine Skizze, ein PDF oder ein Screenshot genügt für den ersten Austausch. Gemeinsam klären wir, wo Aufwand entsteht und welcher nächste Schritt sinnvoll ist."
      />
      <Contact defaultTopic={thema} />
      <Clarity />
    </main>
  );
}
