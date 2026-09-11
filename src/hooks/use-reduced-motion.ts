import { useEffect, useState } from "react";

/** True when the user asked for reduced motion. False during SSR. */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

/** True once the element has entered the viewport (fires once). */
export function useInView<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  rootMargin = "0px 0px -15% 0px",
) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        }
      },
      { rootMargin, threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, rootMargin, inView]);

  return inView;
}
