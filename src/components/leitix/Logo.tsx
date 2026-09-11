const LOGO_URL = "/leitix-logo.png";
const MARK_URL = "/leitix-app-logo.png";
const ALT = "LEITIX – Software, AI, Automation";

/** Full lockup: chrome lettering, claim and light line. */
export function LeitixLockup({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <img
      src={LOGO_URL}
      alt={ALT}
      width={1468}
      height={670}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={`h-auto w-full object-contain mix-blend-screen ${className}`}
    />
  );
}

/** Compact LEITIX app icon for navigation. */
export function LeitixMark({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <img
      src={MARK_URL}
      alt={ALT}
      width={512}
      height={512}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={`block object-contain object-center ${className}`}
    />
  );
}

const WORDMARK_URL = "/leitix-mark.png";

/** LEITIX chrome wordmark for footer and compact lockups. */
export function LeitixWordmark({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <img
      src={WORDMARK_URL}
      alt={ALT}
      width={940}
      height={337}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={`block h-auto w-full object-contain object-left mix-blend-screen ${className}`}
    />
  );
}
