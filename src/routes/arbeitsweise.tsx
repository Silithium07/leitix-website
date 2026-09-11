import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/leitix/PageHero";
import { Process } from "@/components/leitix/Process";
import { Philosophy } from "@/components/leitix/Philosophy";
import { Clarity } from "@/components/leitix/Clarity";
import { Transformation } from "@/components/leitix/Transformation";
import { CtaBand } from "@/components/leitix/CtaBand";

const title = "Prozessanalyse & Softwareentwicklung | LEITIX";
const description =
  "Wie LEITIX arbeitet: Prozess verstehen, Umfang priorisieren, in nutzbaren Schritten umsetzen und die Lösung im Betrieb weiterentwickeln.";

export const Route = createFileRoute("/arbeitsweise")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/arbeitsweise" }],
  }),
  component: ArbeitsweisePage,
});

function ArbeitsweisePage() {
  return (
    <main>
      <PageHero
        eyebrow="Arbeitsweise"
        title="Erst Prozess verstehen. Dann Software bauen."
        lead="LEITIX beginnt nicht mit einem Tool, sondern mit dem tatsächlichen Ablauf: Entscheidungen, Daten, Regeln, Ausnahmen und die bestehenden Systeme."
      />
      <Process />
      <Philosophy />
      <Clarity />
      <Transformation />
      <CtaBand
        headline="Sie wollen einen Ablauf sachlich einordnen lassen?"
        text="Wir hören zu, ordnen ein und benennen einen konkreten nächsten Schritt."
      />
    </main>
  );
}
