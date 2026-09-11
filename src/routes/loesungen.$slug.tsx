import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/leitix/PageHero";
import { Reveal } from "@/components/leitix/Reveal";
import { SectionHead } from "@/components/leitix/SectionHead";
import { CtaBand } from "@/components/leitix/CtaBand";
import { getSolution, solutions } from "@/lib/leitix-content";

export const Route = createFileRoute("/loesungen/$slug")({
  loader: ({ params }) => {
    const solution = getSolution(params.slug);
    if (!solution) throw notFound();
    return { solution };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Nicht gefunden | LEITIX" }, { name: "robots", content: "noindex" }] };
    }
    const s = loaderData.solution;
    return {
      meta: [
        { title: s.metaTitle },
        { name: "description", content: s.metaDescription },
        { property: "og:title", content: s.metaTitle },
        { property: "og:description", content: s.metaDescription },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/loesungen/${s.slug}` }],
    };
  },
  component: SolutionPage,
});

function SolutionPage() {
  const { solution: s } = Route.useLoaderData();
  const others = solutions.filter((o) => o.slug !== s.slug);

  return (
    <main>
      <PageHero
        eyebrow={`${s.kicker} ${s.index}`}
        title={s.name}
        lead={s.lead}
        meta={
          <p className="hairline inline-block rounded-sm px-4 py-2.5 text-[0.68rem] tracking-[0.16em] text-muted-foreground uppercase">
            Lösungsbereich · Prozessbezogene Umsetzung
          </p>
        }
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead eyebrow="Was wäre möglich?" title={s.scenario.headline} intro={s.scenario.body} />

          <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_auto_1fr]">
            <Reveal className="hairline rounded-sm px-6 py-7">
              <p className="text-[0.65rem] font-semibold tracking-[0.32em] text-muted-foreground uppercase">
                Vorher
              </p>
              <ul className="mt-5 space-y-3.5">
                {s.before.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-px w-4 shrink-0 bg-border" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
            <div className="flex items-center justify-center">
              <ArrowRight className="h-5 w-5 rotate-90 text-primary lg:rotate-0" aria-hidden="true" />
            </div>
            <Reveal className="panel rounded-sm border border-primary/30 px-6 py-7">
              <p className="text-[0.65rem] font-semibold tracking-[0.32em] text-primary uppercase">
                Nachher
              </p>
              <ul className="mt-5 space-y-3.5">
                {s.after.map((a) => (
                  <li key={a} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                    <span className="mt-2 h-px w-4 shrink-0 bg-primary/70" aria-hidden="true" />
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="radial-depth border-t border-border py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="Beteiligte Systeme & Daten" title="Was zusammenkommt." />
            <div className="mt-8 grid gap-px sm:grid-cols-2">
              {s.systems.map((g) => (
                <Reveal key={g.label} className="hairline rounded-sm px-6 py-7">
                  <h3 className="text-[0.68rem] font-semibold tracking-[0.28em] text-primary uppercase">
                    {g.label}
                  </h3>
                  <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                    {g.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <SectionHead eyebrow="Mögliche Ergebnisse" title="Worauf es hinauslaufen kann." />
            <ul className="mt-8 space-y-3.5">
              {s.outcomes.map((o) => (
                <li key={o} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-px w-4 shrink-0 bg-primary/60" aria-hidden="true" />
                  {o}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[0.65rem] font-semibold tracking-[0.28em] text-primary uppercase">
              Branchenübergreifend relevant
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {s.fit.map((f) => (
                <li
                  key={f}
                  className="hairline rounded-sm px-3 py-1.5 text-[0.7rem] tracking-[0.1em] text-muted-foreground uppercase"
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-[0.65rem] font-semibold tracking-[0.32em] text-primary uppercase">
            Weitere Kompetenzbereiche
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  to="/loesungen/$slug"
                  params={{ slug: o.slug }}
                  className="hairline inline-flex items-center gap-2 rounded-sm px-4 py-2.5 text-[0.72rem] tracking-[0.14em] text-muted-foreground uppercase transition-colors hover:text-foreground"
                >
                  {o.name} <ArrowRight className="h-3.5 w-3.5 text-primary" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        headline="Kommt Ihnen dieser Ablauf bekannt vor?"
        text="Wir vergleichen das Szenario mit Ihrem realen Prozess und ordnen ein, was tragfähig ist."
      />
    </main>
  );
}
