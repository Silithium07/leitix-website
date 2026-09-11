import { useRef } from "react";
import { useInView, useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * A single beat of the homepage story line
 * (PROBLEM -> DATA -> SOFTWARE -> AI -> AUTOMATION -> RESULT).
 * The line is deliberately faint and disappears into the black.
 */
export function ScrollStory({ label, note }: { label: string; note?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, "0px 0px -25% 0px");
  const reduced = useReducedMotion();
  const on = reduced || inView;

  return (
    <div ref={ref} data-scroll-story={label} className="relative mx-auto flex max-w-7xl justify-center px-5 sm:px-8">
      <div className="flex min-h-40 flex-col items-center justify-center py-4 sm:min-h-52">
        <span
          className="block w-px origin-top"
          style={{
            height: "64px",
            transform: on ? "scaleY(1)" : "scaleY(0.15)",
            opacity: on ? 1 : 0,
            background:
              "linear-gradient(180deg, transparent, oklch(0.68 0.19 255 / 45%) 55%, oklch(0.78 0.16 255 / 70%))",
            transition: "transform 1200ms cubic-bezier(0.16,1,0.3,1), opacity 1200ms ease",
          }}
        />
        <span
          className="mt-3 flex flex-col items-center gap-2 text-center text-[0.62rem] font-semibold tracking-[0.34em] uppercase sm:flex-row sm:gap-3"
          style={{
            color: on ? "oklch(0.74 0.008 260)" : "oklch(0.4 0.008 260)",
            transition: "color 900ms ease",
          }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{
              background: on ? "oklch(0.82 0.14 255)" : "oklch(0.35 0.01 260)",
              boxShadow: on ? "0 0 10px 2px oklch(0.68 0.19 255 / 45%)" : "none",
              transition: "background 900ms ease, box-shadow 900ms ease",
            }}
          />
          {label}
          {note && <span className="text-muted-foreground/70 normal-case tracking-[0.04em]">{note}</span>}
        </span>
        <span
          className="mt-3 block w-px origin-bottom"
          style={{
            height: "64px",
            transform: on ? "scaleY(1)" : "scaleY(0.15)",
            opacity: on ? 1 : 0,
            background:
              "linear-gradient(180deg, oklch(0.78 0.16 255 / 70%), oklch(0.68 0.19 255 / 30%) 45%, transparent)",
            transition: "transform 1200ms cubic-bezier(0.16,1,0.3,1) 120ms, opacity 1200ms ease 120ms",
          }}
        />
      </div>
    </div>
  );
}
