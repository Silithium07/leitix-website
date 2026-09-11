import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection, LegalList } from "@/components/leitix/LegalPage";

const title = "Impressum — LEITIX";
const description =
  "Impressum und Offenlegung von LEITIX gemäß § 5 ECG und § 24 MedienG: Medieninhaber, Kontakt, Unternehmensgegenstand, Haftung und Urheberrecht.";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/impressum" }],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <LegalPage
      heading="Impressum"
      intro="Informationspflicht laut § 5 Abs. 1 E-Commerce-Gesetz (ECG), § 14 Unternehmensgesetzbuch (UGB) sowie Offenlegung nach § 24 Mediengesetz (MedienG)."
    >
      <LegalSection title="Medieninhaber, Inhaber und Herausgeber">
        <p>
          LEITIX – Günter Leitner
          <br />
          Hinterbachstraße 31
          <br />
          4690 Oberndorf bei Schwanenstadt, Österreich
          <br />
          Unternehmensgegenstand: IT-Dienstleistungen, Softwareentwicklung, Künstliche Intelligenz und
          Prozessautomatisierung
        </p>
        <p>
          Website:{" "}
          <a className="text-primary hover:underline" href="https://leitix.com">
            leitix.com
          </a>
          <br />
          E-Mail:{" "}
          <a className="text-primary hover:underline" href="mailto:kontakt@leitix.com">
            kontakt@leitix.com
          </a>
          <br />
          Telefon: <a className="text-primary hover:underline" href="tel:+4367764122106">+43 677 64122106</a>
          <br />
          Steuernummer: 53 054/7835
          <br />
          GISA-Zahl: 40103754
        </p>
      </LegalSection>

      <LegalSection title="Unternehmensgegenstand">
        <LegalList
          items={[
            "Entwicklung individueller Software und digitaler Systeme",
            "Konzeption und Umsetzung von KI-gestützten Anwendungen",
            "Automatisierung von Geschäftsprozessen und Systemintegration",
            "Beratung und Begleitung bei Digitalisierungsvorhaben",
          ]}
        />
      </LegalSection>

      <LegalSection title="Blattlinie (§ 25 MedienG)">
        <p>
          Diese Website dient der Information über Leistungen, Arbeitsweise und Kompetenzbereiche von
          LEITIX im Bereich Software, Künstliche Intelligenz und Automatisierung sowie der
          Kontaktaufnahme mit Interessentinnen und Interessenten.
        </p>
      </LegalSection>

      <LegalSection title="Haftung für Inhalte dieser Website">
        <p>
          Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität der bereitgestellten Informationen kann jedoch keine Haftung
          übernommen werden. Dargestellte Kundenprojekte werden aus Vertraulichkeitsgründen anonymisiert und mit Demo-Daten gezeigt. Statusangaben kennzeichnen, ob eine Lösung produktiv umgesetzt, in Entwicklung oder als Pilotlogik konzipiert ist.
        </p>
        <p>
          Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitten wir um eine
          Nachricht an{" "}
          <a className="text-primary hover:underline" href="mailto:kontakt@leitix.com">
            kontakt@leitix.com
          </a>
          , damit die betreffenden Inhalte rasch geprüft und gegebenenfalls entfernt werden können.
        </p>
      </LegalSection>

      <LegalSection title="Haftung für Links auf externe Websites">
        <p>
          Diese Website kann Links auf Websites Dritter enthalten, auf deren Inhalte kein Einfluss
          besteht. Für diese fremden Inhalte wird daher keine Gewähr übernommen; verantwortlich ist
          stets der jeweilige Anbieter oder Betreiber. Zum Zeitpunkt der Verlinkung waren keine
          Rechtsverstöße erkennbar. Bei Bekanntwerden von Rechtsverletzungen werden solche Links
          unverzüglich entfernt.
        </p>
      </LegalSection>

      <LegalSection title="Urheberrecht">
        <p>
          Inhalte dieser Website – insbesondere Texte, Grafiken, Logos, Marken-Elemente und
          Quellcode – sind urheber- und markenrechtlich geschützt. Eine Vervielfältigung,
          Verbreitung, Bearbeitung oder sonstige Nutzung außerhalb der Grenzen des Urheberrechts
          bedarf der vorherigen schriftlichen Zustimmung.
        </p>
      </LegalSection>

      <LegalSection title="Verbraucherstreitbeilegung">
        <p>
          Die frühere EU-Plattform zur Online-Streitbeilegung wurde eingestellt. LEITIX ist nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. Für eine direkte Klärung erreichen Sie uns unter <a className="text-primary hover:underline" href="mailto:kontakt@leitix.com">kontakt@leitix.com</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
