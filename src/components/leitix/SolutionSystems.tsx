import { useRef, useState } from "react";
import { useInView, useReducedMotion } from "@/hooks/use-reduced-motion";

export type SystemKind =
  | "modules"
  | "workflow"
  | "document"
  | "integration"
  | "fleet"
  | "dashboard";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 0.9,
  strokeLinecap: "round" as const,
};

/**
 * Ein eigenständiges Micro-System pro Kompetenzbereich.
 * Wird einmal bei Sichtbarkeit (oder bei Hover/Tap/Fokus) aufgebaut, danach Ruhe.
 */
export function MicroSystem({ kind, label }: { kind: SystemKind; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const reduced = useReducedMotion();
  const [touched, setTouched] = useState(false);
  const active = reduced || inView || touched;
  const d = (ms: number) => (reduced ? 0 : ms);
  const anim = (ms: number) =>
    active ? { className: "node-in", style: { animationDelay: `${d(ms)}ms` } } : { className: "opacity-0" };
  const line = (ms: number, dash = 120) =>
    active
      ? { className: "draw-line", style: { animationDelay: `${d(ms)}ms`, ["--dash" as string]: dash } }
      : { className: "opacity-0" };

  return (
    <div
      ref={ref}
      onPointerEnter={() => setTouched(true)}
      onFocus={() => setTouched(true)}
      className="text-primary/75"
    >
      <svg viewBox="0 0 120 76" role="img" aria-label={`Schematische Darstellung: ${label}`} className="h-20 w-full">
        {kind === "modules" && (
          <g {...stroke}>
            {[
              [8, 8, 44, 22],
              [58, 8, 54, 22],
              [8, 38, 30, 30],
              [44, 38, 68, 30],
            ].map(([x, y, w, h], i) => (
              <rect key={i} x={x} y={y} width={w} height={h} rx="1.5" {...anim(i * 260)} />
            ))}
            <line x1="52" y1="19" x2="58" y2="19" {...line(1100, 12)} />
            <line x1="38" y1="53" x2="44" y2="53" {...line(1250, 12)} />
          </g>
        )}

        {kind === "workflow" && (
          <g {...stroke}>
            <line x1="20" y1="38" x2="46" y2="38" {...line(300, 30)} />
            <line x1="58" y1="38" x2="84" y2="20" {...line(700, 34)} />
            <line x1="58" y1="38" x2="84" y2="58" {...line(900, 34)} />
            {[
              [14, 38],
              [52, 38],
              [90, 20],
              [90, 58],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="5" {...anim(i * 300)} />
            ))}
          </g>
        )}

        {kind === "document" && (
          <g {...stroke}>
            <path d="M10 8 h26 l8 8 v46 h-34 z" {...anim(0)} />
            {[0, 1, 2].map((i) => (
              <line key={i} x1="16" y1={26 + i * 8} x2="36" y2={26 + i * 8} {...line(500 + i * 200, 22)} />
            ))}
            <line x1="48" y1="38" x2="68" y2="38" {...line(1200, 24)} />
            {[0, 1, 2, 3].map((i) => (
              <g key={i} {...anim(1500 + i * 220)}>
                <rect x="74" y={12 + i * 14} width="36" height="9" rx="1" />
                <line x1="78" y1={16.5 + i * 14} x2="92" y2={16.5 + i * 14} />
              </g>
            ))}
          </g>
        )}

        {kind === "integration" && (
          <g {...stroke}>
            <rect x="46" y="28" width="28" height="20" rx="1.5" {...anim(0)} />
            {[
              [8, 10],
              [8, 54],
              [96, 10],
              [96, 54],
            ].map(([x, y], i) => (
              <rect key={i} x={x} y={y} width="18" height="14" rx="1.5" {...anim(200 + i * 220)} />
            ))}
            <path d="M26 17 L46 32" {...line(900, 28)} />
            <path d="M26 61 L46 46" {...line(1050, 28)} />
            <path d="M96 17 L74 32" {...line(1200, 28)} />
            <path d="M96 61 L74 46" {...line(1350, 28)} />
          </g>
        )}

        {kind === "fleet" && (
          <g {...stroke}>
            <path d="M6 62 C 30 48, 46 66, 68 46 S 100 30, 114 20" {...line(200, 160)} strokeWidth="1.1" />
            {[
              [18, 55],
              [46, 58],
              [72, 44],
              [100, 27],
            ].map(([cx = 0, cy = 0], i) => (
              <g key={i} {...anim(700 + i * 260)}>
                <circle cx={cx} cy={cy} r="3.4" />
                <line x1={cx} y1={cy - 3.4} x2={cx} y2={cy - 12} />
              </g>
            ))}
            <line x1="6" y1="70" x2="114" y2="70" opacity="0.35" {...anim(0)} />
          </g>
        )}

        {kind === "dashboard" && (
          <g {...stroke}>
            {[10, 30, 50].map((y, i) => (
              <line key={i} x1="6" y1={y} x2="26" y2={y} {...line(i * 220, 22)} />
            ))}
            <path d="M26 10 L44 30 M26 30 L44 32 M26 50 L44 34" {...line(700, 70)} />
            <rect x="50" y="8" width="62" height="58" rx="2" {...anim(1000)} />
            <g {...anim(1400)}>
              <rect x="56" y="44" width="10" height="16" />
              <rect x="70" y="34" width="10" height="26" />
              <rect x="84" y="24" width="10" height="36" />
              <line x1="56" y1="18" x2="94" y2="18" />
            </g>
          </g>
        )}
      </svg>
    </div>
  );
}
