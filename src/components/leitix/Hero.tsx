import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { LightLine } from "./LightLine";
import { LeitixLockup } from "./Logo";
import { ProcessDiagram } from "./ProcessDiagram";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function Hero() {
  const reduced = useReducedMotion();
  const [scrollY, setScrollY] = useState(0);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (reduced) return;
    const onScroll = () => setScrollY(Math.min(window.scrollY, 700));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduced]);

  useEffect(() => {
    if (reduced) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const onMove = (e: PointerEvent) => {
      if (frame.current !== null) return;
      frame.current = requestAnimationFrame(() => {
        frame.current = null;
        setPointer({
          x: (e.clientX / window.innerWidth - 0.5) * 2,
          y: (e.clientY / window.innerHeight - 0.5) * 2,
        });
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, [reduced]);

  // Maximum a few pixels of depth – no floating, no rotation.
  const depth = reduced
    ? undefined
    : {
        transform: `translate3d(${(pointer.x * 4).toFixed(2)}px, ${(
          pointer.y * 3 -
          scrollY * 0.02
        ).toFixed(2)}px, 0)`,
      };

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-background">
        <div
          className="ambient-drift absolute -top-1/3 left-1/2 h-[80vh] w-[130vw] -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, oklch(0.34 0.07 258 / 60%), transparent 70%)",
            filter: "blur(20px)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 80% at 50% 110%, oklch(0.22 0.05 258 / 45%), transparent 60%)",
          }}
        />
      </div>

      <div
        className="mx-auto flex min-h-[calc(92svh-6rem)] w-full max-w-6xl flex-col items-center justify-center px-5 text-center sm:px-8"
        style={{ transform: reduced ? undefined : `translate3d(0, ${scrollY * -0.05}px, 0)` }}
      >
        <div className={reduced ? "w-full" : "logo-reveal w-full"} style={depth}>
          <div className="mx-auto w-full max-w-4xl">
            <LeitixLockup priority className="mx-auto" />
          </div>
          <h1 className="mx-auto mt-8 max-w-5xl font-display text-[2.35rem] leading-[1.08] font-bold tracking-[0.04em] text-foreground uppercase sm:mt-10 sm:text-5xl lg:text-[4.35rem]">
            Intelligente Software.<br />Neu gedacht.
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-[1rem] leading-relaxed text-muted-foreground sm:text-xl">
            Individuelle Software, künstliche Intelligenz und Automation für Unternehmen, die Prozesse nicht nur digitalisieren, sondern besser machen wollen.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-8 w-full max-w-6xl px-5 sm:mt-12 sm:px-8">
        <div className="border-t border-border pt-14 text-center sm:pt-16">
          <div className="mx-auto max-w-4xl">
            <p className="text-[0.68rem] font-semibold tracking-[0.28em] text-primary uppercase">Software · AI · Automation</p>
            <h2 className="mt-6 font-display text-2xl leading-[1.15] font-bold tracking-[0.02em] text-foreground sm:text-3xl lg:text-4xl">
              Wir digitalisieren, was zwischen ERP, Excel, E-Mail und Papier liegen bleibt.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-[0.95rem] leading-relaxed text-muted-foreground sm:text-lg">
              LEITIX entwickelt individuelle Prozesssoftware, AI-gestützte Dokumentenlösungen und Systemintegrationen für reale Unternehmensabläufe – von Rechnungsprüfung und QM bis zu Lager, Flotte und Operations.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                to="/praxisprojekte"
                className="edge-glow rounded-sm border border-primary/50 bg-primary/10 px-8 py-4 text-[0.78rem] font-semibold tracking-[0.18em] text-foreground uppercase transition-all duration-300 hover:border-primary hover:bg-primary/20"
                style={{ boxShadow: "var(--glow-blue)" }}
              >
                Praxisprojekte ansehen
              </Link>
              <Link
                to="/kontakt"
                className="edge-glow hairline rounded-sm px-8 py-4 text-[0.78rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase transition-all duration-300 hover:border-border hover:text-foreground"
              >
                Prozess besprechen
              </Link>
            </div>
          </div>
          <div className="relative mx-auto mt-12 w-full max-w-5xl sm:mt-14">
            <ProcessDiagram compact />
            <p className="mt-4 text-center text-[0.62rem] tracking-[0.16em] text-muted-foreground uppercase">Bestehende Systeme sinnvoll ergänzen</p>
          </div>
        </div>
      </div>

      <div className="mt-16 px-5 sm:mt-20 sm:px-8">
        <div className={reduced ? "" : "line-sweep"}>
          <LightLine />
        </div>
      </div>
    </section>
  );
}
