export function LightLine({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`relative mx-auto h-px w-full max-w-6xl ${className}`}
    >
      <div className="light-line absolute inset-0" />
      <div className="light-node absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full" />
    </div>
  );
}
