import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/leitix/PageHero";
import { Reveal } from "@/components/leitix/Reveal";
import { CtaBand } from "@/components/leitix/CtaBand";
import { Clarity } from "@/components/leitix/Clarity";
import { services } from "@/lib/leitix-content";

const title = "Leistungen: Software, AI, Automation, Systeme | LEITIX";
const description =
  "Die vier Leistungsbereiche von LEITIX: individuelle Software, künstliche Intelligenz, Prozessautomatisierung und verbundene digitale Systeme.";

export const Route = createFileRoute("/leistungen/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/leistungen" }],
  }),
  component: LeistungenIndex,
});

function LeistungenIndex() {
  return (
    <main>
      <PageHero
        eyebrow="Leistungen"
        title="Vier Bausteine. Ein Ergebnis."
        lead="Software, AI, Automation und Systemintegration greifen im Projekt ineinander. Der Ausgangspunkt bleibt immer der reale Prozess."
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ul className="grid gap-px sm:grid-cols-2">
            {services.map((s) => (
              <Reveal key={s.slug} as="li" className="hairline rounded-sm px-7 py-9">
                <div className="flex items-baseline gap-3">
                  <span className="text-[0.62rem] tracking-[0.28em] text-primary">{s.index}</span>
                  <span className="text-[0.68rem] tracking-[0.24em] text-muted-foreground uppercase">
                    {s.kicker}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-lg font-bold tracking-[0.05em] text-foreground uppercase sm:text-xl">
                  {s.name}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.lead}</p>
                <Link
                  to="/leistungen/$slug"
                  params={{ slug: s.slug }}
                  className="mt-7 inline-flex items-center gap-2 text-[0.72rem] font-semibold tracking-[0.18em] text-primary uppercase"
                >
                  Leistung ansehen <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Clarity />
      <CtaBand
        headline="Noch unklar, welcher Baustein passt?"
        text="Beschreiben Sie den Ablauf – wir ordnen ein, was zuerst sinnvoll ist."
      />
    </main>
  );
}
