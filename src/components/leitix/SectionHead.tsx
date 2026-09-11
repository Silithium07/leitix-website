import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHead({
  eyebrow,
  title,
  intro,
  align = "left",
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  as?: "h2" | "h3";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      {eyebrow && (
        <p className="mb-5 flex items-center gap-3 text-[0.7rem] font-semibold tracking-[0.32em] text-primary uppercase">
          {align === "center" && <span className="h-px flex-1 bg-border" />}
          {eyebrow}
          <span className="h-px flex-1 bg-border" />
        </p>
      )}
      <Heading className="font-display text-2xl leading-[1.15] font-bold tracking-[0.04em] text-foreground uppercase sm:text-4xl lg:text-[2.75rem]">
        {title}
      </Heading>
      {intro && (
        <p
          className={`mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground sm:text-lg ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
