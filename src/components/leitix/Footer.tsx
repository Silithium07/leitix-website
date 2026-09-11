import { Link } from "@tanstack/react-router";
import { LeitixWordmark } from "./Logo";
import { LightLine } from "./LightLine";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="max-w-[18rem]">
              <LeitixWordmark priority className="w-full" />
            </div>
          </div>

          <nav aria-label="Footer Navigation">
            <h2 className="font-display text-[0.68rem] font-semibold tracking-[0.28em] text-foreground uppercase">
              Navigation
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground">Start</Link></li>
              <li><Link to="/loesungen" className="hover:text-foreground">Lösungen</Link></li>
              <li><Link to="/praxisprojekte" className="hover:text-foreground">Praxisprojekte</Link></li>
              <li><Link to="/arbeitsweise" className="hover:text-foreground">Arbeitsweise</Link></li>
              <li><Link to="/technologie-sicherheit" className="hover:text-foreground">Technologie & Sicherheit</Link></li>
              <li><Link to="/ueber-leitix" className="hover:text-foreground">Über LEITIX</Link></li>
              <li><Link to="/kontakt" className="hover:text-foreground">Kontakt</Link></li>
            </ul>
          </nav>

          <nav aria-label="Rechtliches">
            <h2 className="font-display text-[0.68rem] font-semibold tracking-[0.28em] text-foreground uppercase">
              Rechtliches
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <Link to="/impressum" className="hover:text-foreground">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="hover:text-foreground">
                  Datenschutz
                </Link>
              </li>
            </ul>
            <p className="mt-5 text-xs text-muted-foreground/80">
              <a className="hover:text-foreground" href="mailto:kontakt@leitix.com">
                kontakt@leitix.com
              </a>
            </p>
            <p className="mt-2 text-xs text-muted-foreground/80"><a className="hover:text-foreground" href="tel:+4367764122106">+43 677 64122106</a></p>
          </nav>
        </div>

        <div className="mt-14">
          <LightLine />
        </div>
        <p className="mt-8 text-center text-xs tracking-[0.16em] text-muted-foreground/70 uppercase">
          © {new Date().getFullYear()} LEITIX
        </p>
      </div>
    </footer>
  );
}
