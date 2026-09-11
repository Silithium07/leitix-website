import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { LightLine } from "./LightLine";

export function PageHero({
  eyebrow,
  title,
  lead,
  meta,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  meta?: ReactNode;
}) {
  return (
    <section className="radial-depth relative overflow-hidden border-b border-border pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-[0.68rem] font-semibold tracking-[0.32em] text-primary uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-3xl leading-[1.1] font-bold tracking-[0.03em] text-foreground uppercase sm:text-5xl lg:text-[3.4rem]">
            {title}
          </h1>
          {lead && (
            <p className="mt-7 max-w-2xl text-[0.98rem] leading-relaxed text-muted-foreground sm:text-lg">
              {lead}
            </p>
          )}
          {meta && <div className="mt-9">{meta}</div>}
        </Reveal>
        <div className="mt-14 max-w-xl">
          <LightLine />
        </div>
      </div>
    </section>
  );
}
