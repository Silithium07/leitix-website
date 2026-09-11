import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/leitix/PageHero";
import { Reveal } from "@/components/leitix/Reveal";
import { SectionHead } from "@/components/leitix/SectionHead";
import { CtaBand } from "@/components/leitix/CtaBand";
import { getService, services } from "@/lib/leitix-content";

export const Route = createFileRoute("/leistungen/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Nicht gefunden | LEITIX" }, { name: "robots", content: "noindex" }] };
    }
    const s = loaderData.service;
    return {
      meta: [
        { title: s.metaTitle },
        { name: "description", content: s.metaDescription },
        { property: "og:title", content: s.metaTitle },
        { property: "og:description", content: s.metaDescription },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/leistungen/${s.slug}` }],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service: s } = Route.useLoaderData();
  const others = services.filter((o) => o.slug !== s.slug);

  return (
    <main>
      <PageHero
        eyebrow={`Leistung ${s.index} · ${s.kicker}`}
        title={s.title}
        lead={s.lead}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
          <SectionHead eyebrow="Ausgangslage" title={s.problem.headline} intro={s.problem.body} />
          <Reveal className="hairline rounded-sm px-7 py-8">
            <h3 className="text-[0.68rem] font-semibold tracking-[0.28em] text-primary uppercase">
              Typische Anzeichen
            </h3>
            <ul className="mt-6 space-y-4">
              {s.problem.signals.map((sig) => (
                <li key={sig} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-px w-4 shrink-0 bg-border" aria-hidden="true" />
                  {sig}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="radial-depth border-t border-border py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead eyebrow="Nutzen" title="Was sich im Alltag ändert." />
          <ul className="mt-10 grid gap-px sm:grid-cols-3">
            {s.value.map((v) => (
              <Reveal key={v.label} as="li" className="hairline rounded-sm px-6 py-7">
                <h3 className="font-display text-[0.95rem] font-semibold tracking-[0.08em] text-foreground uppercase">
                  {v.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead eyebrow="Umsetzung" title="Was LEITIX konkret entwickelt." />
          <ul className="mt-10 grid gap-px sm:grid-cols-2">
            {s.build.map((b) => (
              <Reveal key={b.label} as="li" className="hairline rounded-sm px-6 py-7">
                <h3 className="font-display text-[0.95rem] font-semibold tracking-[0.08em] text-foreground uppercase">
                  {b.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
              </Reveal>
            ))}
          </ul>

          <Reveal className="panel mt-12 rounded-sm px-6 py-9 sm:px-10">
            <p className="text-[0.65rem] font-semibold tracking-[0.32em] text-primary uppercase">
              Ablauf im System
            </p>
            <ol className="mt-8 grid gap-6 sm:grid-cols-4">
              {s.flow.map((f, i) => (
                <li key={f.label} className="relative">
                  <span className="light-dot" aria-hidden="true" />
                  <p className="mt-4 font-display text-sm font-semibold tracking-[0.1em] text-foreground uppercase">
                    {f.label}
                  </p>
                  <p className="mt-1.5 text-xs text-muted-foreground">{f.note}</p>
                  {i < s.flow.length - 1 && (
                    <span
                      className="absolute top-[3px] left-4 hidden h-px w-[calc(100%-1rem)] bg-border sm:block"
                      aria-hidden="true"
                    />
                  )}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="Einsatzfelder" title="Wo das typisch greift." />
            <ul className="mt-8 space-y-3.5">
              {s.fields.map((f) => (
                <li key={f} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-px w-4 shrink-0 bg-primary/60" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHead eyebrow="Projektablauf" title="Wie wir vorgehen." />
            <ol className="mt-8 space-y-6">
              {s.approach.map((a) => (
                <li key={a.step} className="border-l border-border pl-5">
                  <span className="text-[0.62rem] tracking-[0.28em] text-primary">{a.step}</span>
                  <h3 className="mt-1.5 font-display text-sm font-semibold tracking-[0.1em] text-foreground uppercase">
                    {a.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-[0.65rem] font-semibold tracking-[0.32em] text-primary uppercase">
            Weitere Leistungen
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  to="/leistungen/$slug"
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

      <CtaBand headline={s.cta.headline} text={s.cta.text} />
    </main>
  );
}
