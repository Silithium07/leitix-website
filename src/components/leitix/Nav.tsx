import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ArrowRight } from "lucide-react";
import { LeitixMark } from "./Logo";
const links = [
  { to: "/", label: "Start" },
  { to: "/loesungen", label: "Lösungen" },
  { to: "/praxisprojekte", label: "Praxisprojekte" },
  { to: "/arbeitsweise", label: "Arbeitsweise" },
  { to: "/technologie-sicherheit", label: "Technologie & Sicherheit" },
  { to: "/ueber-leitix", label: "Über LEITIX" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (prefix: string) =>
    prefix === "/" ? pathname === "/" : pathname.startsWith(prefix);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div
        className={`mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 transition-all duration-500 sm:px-8 ${
          scrolled ? "py-3" : "py-4 lg:py-6"
        }`}
      >
        <Link to="/" className="flex min-w-0 items-center" aria-label="LEITIX Startseite">
          <LeitixMark
            priority
            className={`rounded-lg transition-all duration-500 ${
              scrolled ? "h-8 w-8" : "h-9 w-9 lg:h-10 lg:w-10"
            }`}
          />
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-5 xl:gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`nav-link ${isActive(l.to) ? "nav-link-active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/kontakt"
            className="hairline rounded-sm px-5 py-2.5 text-[0.78rem] font-semibold tracking-[0.16em] text-foreground uppercase transition-all duration-300 hover:border-primary/60 hover:text-primary"
            style={{ boxShadow: "inset 0 1px 0 oklch(1 0 0 / 8%)" }}
          >
            Projekt besprechen
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="leitix-mobile-menu"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          className="hairline flex h-10 w-10 items-center justify-center rounded-sm text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Sheet */}
      {open && (
        <div
          id="leitix-mobile-menu"
          className="radial-depth fixed inset-0 top-[64px] z-40 overflow-y-auto border-t border-border bg-background px-6 pt-8 pb-16 lg:hidden"
        >
          <nav aria-label="Seitennavigation" className="flex flex-col">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="border-b border-border py-5 font-display text-lg tracking-[0.12em] text-foreground uppercase"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/kontakt"
            className="mt-9 flex items-center justify-center gap-3 rounded-sm border border-primary/50 py-4 text-sm font-semibold tracking-[0.16em] text-primary uppercase"
          >
            Projekt besprechen <ArrowRight className="h-4 w-4" />
          </Link>

          <div className="mt-10 flex gap-6 text-xs tracking-widest text-muted-foreground uppercase">
            <Link to="/impressum">Impressum</Link>
            <Link to="/datenschutz">Datenschutz</Link>
          </div>
        </div>
      )}
    </header>
  );
}

