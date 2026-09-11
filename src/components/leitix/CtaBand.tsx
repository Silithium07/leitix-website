import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CtaBand({
  headline,
  text,
  topic,
  label = "Projekt besprechen",
}: {
  headline: string;
  text: string;
  topic?: string;
  label?: string;
}) {
  const search: { thema?: string } = topic ? { thema: topic } : {};

  return (
    <section className="radial-depth border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="panel rounded-sm px-6 py-12 sm:px-12">
          <h2 className="max-w-2xl font-display text-xl leading-tight font-bold tracking-[0.04em] text-foreground uppercase sm:text-3xl">
            {headline}
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {text}
          </p>
          <Link
            to="/kontakt"
            search={search}
            className="edge-glow mt-9 inline-flex items-center gap-3 rounded-sm border border-primary/50 px-6 py-3.5 text-[0.78rem] font-semibold tracking-[0.16em] text-primary uppercase transition-colors hover:bg-primary/10"
          >
            {label} <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
