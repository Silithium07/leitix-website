import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection, LegalList } from "@/components/leitix/LegalPage";

const title = "Datenschutzerklärung — LEITIX";
const description =
  "Datenschutzerklärung von LEITIX nach DSGVO: Verantwortlicher, Server-Logfiles, Kontaktaufnahme, Cookies, Speicherdauer und Ihre Rechte nach Art. 15–21 DSGVO.";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/datenschutz" }],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <LegalPage
      heading="Datenschutz"
      intro="Der Schutz personenbezogener Daten ist LEITIX ein zentrales Anliegen. Diese Erklärung informiert gemäß Datenschutz-Grundverordnung (DSGVO) darüber, welche Daten beim Besuch dieser Website verarbeitet werden, zu welchem Zweck und welche Rechte Ihnen zustehen."
    >
      <LegalSection title="Verantwortlicher">
        <p>
          LEITIX – Günter Leitner
          <br />
          Hinterbachstraße 31, 4690 Oberndorf bei Schwanenstadt, Österreich
          <br />
          E-Mail:{" "}
          <a className="text-primary hover:underline" href="mailto:kontakt@leitix.com">
            kontakt@leitix.com
          </a>
          <br />
          Website: leitix.com
        </p>
        <p>
          Für alle Fragen zur Verarbeitung Ihrer personenbezogenen Daten sowie zur Ausübung Ihrer
          Rechte genügt eine E-Mail an die oben genannte Adresse.
        </p>
      </LegalSection>

      <LegalSection title="Server-Logfiles beim Besuch dieser Website">
        <p>
          Diese Website wird über einen externen Hosting- und Sicherheitsdienstleister (Cloudflare)
          bereitgestellt. Beim Aufruf einer Seite werden aus technischen Gründen automatisch Daten in
          Server-Logfiles verarbeitet:
        </p>
        <LegalList
          items={[
            "gekürzte bzw. verarbeitete IP-Adresse des anfragenden Geräts",
            "Datum und Uhrzeit des Zugriffs",
            "aufgerufene Adresse (URL) und übertragene Datenmenge",
            "Statuscode der Anfrage sowie Browsertyp und Betriebssystem",
            "gegebenenfalls die verweisende Seite (Referrer)",
          ]}
        />
        <p>
          Zweck der Verarbeitung ist der technisch fehlerfreie Betrieb, die Auslieferung der Inhalte,
          die Stabilität sowie die Abwehr von Angriffen und Missbrauch. Rechtsgrundlage ist Art. 6
          Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und funktionierenden
          Webangebot). Eine Zusammenführung dieser Daten mit anderen Datenquellen erfolgt nicht, eine
          Auswertung zu Werbezwecken findet nicht statt.
        </p>
        <p>
          Mit dem Hosting- und Sicherheitsdienstleister besteht eine Auftragsverarbeitung nach Art. 28
          DSGVO. Sofern eine Verarbeitung außerhalb des EWR erfolgt, geschieht dies auf Grundlage der
          EU-Standarddatenschutzklauseln.
        </p>
      </LegalSection>

      <LegalSection title="Kontaktaufnahme">
        <p>
          Wenn Sie per E-Mail oder Telefon mit LEITIX in Kontakt treten, werden die
          von Ihnen übermittelten Angaben – etwa Name, Unternehmen, E-Mail-Adresse, Telefonnummer und Ihre Nachricht – zur Bearbeitung Ihrer Anfrage
          verarbeitet.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Anbahnung oder Erfüllung eines Vertrags)
          bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
          Die Angabe der Daten erfolgt freiwillig; ohne Kontaktdaten ist jedoch keine Antwort möglich.
        </p>
        <p>
          Ihre Anfragedaten werden gelöscht, sobald sie für den Zweck nicht mehr erforderlich sind,
          spätestens nach Ablauf gesetzlicher Aufbewahrungsfristen. Eine Weitergabe an Dritte erfolgt
          nicht, ausgenommen an technische Dienstleister im Rahmen einer Auftragsverarbeitung oder
          soweit eine gesetzliche Pflicht besteht.
        </p>
      </LegalSection>

      <LegalSection title="Cookies und Tracking">
        <p>
          Diese Website setzt keine ungefragten Tracking-, Marketing- oder Profiling-Cookies ein. Es
          findet keine Webanalyse zur Erstellung von Nutzungsprofilen statt und es werden keine
          Werbenetzwerke eingebunden.
        </p>
        <p>
          Technisch notwendige Cookies bzw. lokale Speicherinhalte werden nur eingesetzt, soweit sie
          für den sicheren Betrieb und die Auslieferung der Website erforderlich sind. Sollten künftig
          nicht notwendige Cookies zum Einsatz kommen, erfolgt dies ausschließlich nach Ihrer
          vorherigen Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die jederzeit widerrufen werden kann.
        </p>
      </LegalSection>

      <LegalSection title="Ihre Rechte nach Art. 15–21 DSGVO">
        <p>Sie haben in Bezug auf Ihre personenbezogenen Daten insbesondere folgende Rechte:</p>
        <LegalList
          items={[
            "Auskunft über die verarbeiteten Daten (Art. 15 DSGVO)",
            "Berichtigung unrichtiger oder unvollständiger Daten (Art. 16 DSGVO)",
            "Löschung Ihrer Daten (Art. 17 DSGVO)",
            "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
            "Datenübertragbarkeit in einem strukturierten Format (Art. 20 DSGVO)",
            "Widerspruch gegen eine Verarbeitung auf Grundlage berechtigter Interessen (Art. 21 DSGVO)",
          ]}
        />
        <p>
          Zur Ausübung dieser Rechte genügt eine Nachricht an{" "}
          <a className="text-primary hover:underline" href="mailto:kontakt@leitix.com">
            kontakt@leitix.com
          </a>
          . Erteilte Einwilligungen können jederzeit mit Wirkung für die Zukunft widerrufen werden.
        </p>
      </LegalSection>

      <LegalSection title="Beschwerderecht bei der Aufsichtsbehörde">
        <p>
          Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht
          verstößt, können Sie sich bei der österreichischen Datenschutzbehörde beschweren:
        </p>
        <p>
          Österreichische Datenschutzbehörde, Barichgasse 40–42, 1030 Wien,{" "}
          <a
            className="text-primary hover:underline"
            href="https://www.dsb.gv.at"
            target="_blank"
            rel="noreferrer noopener"
          >
            dsb.gv.at
          </a>
        </p>
      </LegalSection>

      <LegalSection title="Datensicherheit und Aktualität">
        <p>
          Die Übertragung der Website erfolgt verschlüsselt über HTTPS. Es werden angemessene
          technische und organisatorische Maßnahmen getroffen, um Ihre Daten gegen Verlust und
          unbefugten Zugriff zu schützen. Diese Datenschutzerklärung wird angepasst, sobald sich
          Funktionen dieser Website oder eingesetzte Dienste ändern.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
