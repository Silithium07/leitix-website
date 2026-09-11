import { Mail, Phone, Paperclip } from "lucide-react";
import { SectionHead } from "./SectionHead";
import { Reveal } from "./Reveal";

export function Contact({
  headingLevel = "h2",
}: {
  defaultTopic?: string | undefined;
  headingLevel?: "h2" | "h3";
}) {
  return (
    <section id="kontakt" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10 radial-depth" />
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div>
          <SectionHead
            eyebrow="Kontakt"
            title="Prozess besprechen"
            intro="Beschreiben Sie kurz den Ablauf, der heute Zeit kostet. Eine Skizze, ein PDF oder ein Screenshot genügt für den ersten Austausch."
            as={headingLevel}
          />
          <Reveal delay={140}>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">Senden Sie nur Unterlagen, die für den ersten Austausch erforderlich sind. Vertrauliche Details können wir im nächsten Schritt über einen abgestimmten Weg austauschen.</p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="panel rounded-sm p-7 sm:p-10">
            <Paperclip className="h-6 w-6 text-primary" aria-hidden="true" />
            <h3 className="mt-6 font-display text-xl font-bold text-foreground">Der erste Austausch</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Ein kurzer Überblick reicht: Wo beginnt der Ablauf, wo entstehen Rückfragen oder Doppelerfassungen und welches Ergebnis wird benötigt?</p>
            <div className="mt-8 space-y-3">
              <a href="mailto:kontakt@leitix.com?subject=Prozess%20besprechen" className="edge-glow flex items-center gap-3 rounded-sm border border-primary/50 bg-primary/10 px-6 py-4 text-sm font-semibold text-foreground"><Mail className="h-4 w-4 text-primary"/>kontakt@leitix.com</a>
              <a href="tel:+4367764122106" className="flex items-center gap-3 rounded-sm border border-border px-6 py-4 text-sm font-semibold text-foreground transition-colors hover:border-primary/50"><Phone className="h-4 w-4 text-primary"/>+43 677 64122106</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
