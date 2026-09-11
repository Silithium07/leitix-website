export type ServiceSlug =
  | "individuelle-software"
  | "kuenstliche-intelligenz"
  | "prozessautomatisierung"
  | "digitale-systeme";

export type SolutionSlug =
  | "business-software"
  | "workflow-automation"
  | "ai-document-intelligence"
  | "data-system-integration"
  | "fleet-operations"
  | "management-systeme";

export type ServiceContent = {
  slug: ServiceSlug;
  index: string;
  kicker: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  problem: { headline: string; body: string; signals: string[] };
  value: { label: string; text: string }[];
  build: { label: string; text: string }[];
  flow: { label: string; note: string }[];
  fields: string[];
  approach: { step: string; label: string; text: string }[];
  cta: { headline: string; text: string };
};

export type SolutionContent = {
  slug: SolutionSlug;
  index: string;
  name: string;
  kicker: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  scenario: { headline: string; body: string };
  before: string[];
  after: string[];
  systems: { label: string; items: string[] }[];
  outcomes: string[];
  fit: string[];
};

export const services: ServiceContent[] = [
  {
    slug: "individuelle-software",
    index: "01",
    kicker: "Software",
    name: "Individuelle Software",
    title: "Software, die dem Prozess folgt.",
    metaTitle: "Individuelle Softwareentwicklung | LEITIX",
    metaDescription:
      "LEITIX entwickelt individuelle Business-Software für Abläufe, die Standardlösungen nur teilweise abdecken – vom Prozessverständnis bis zum laufenden Ausbau.",
    lead: "Wenn ein Ablauf nur zur Hälfte in eine Standardlösung passt, entstehen Tabellen, Zwischenschritte und Absprachen daneben. Genau dort setzt individuelle Software an.",
    problem: {
      headline: "Der Prozess passt sich der Software an – nicht umgekehrt.",
      body: "Viele Unternehmen arbeiten mit Werkzeugen, die im Kern funktionieren, aber an den entscheidenden Stellen nicht. Die Lücken werden manuell überbrückt: parallele Listen, Mehrfacheingaben, Wissen in einzelnen Köpfen.",
      signals: [
        "Zentrale Abläufe leben in Tabellen neben dem eigentlichen System",
        "Dieselben Daten werden mehrfach erfasst",
        "Auswertungen entstehen manuell und sind schwer reproduzierbar",
        "Neue Anforderungen lassen sich im bestehenden Werkzeug nicht abbilden",
      ],
    },
    value: [
      { label: "Weniger Bruchstellen", text: "Ein Ablauf endet nicht dort, wo das Werkzeug endet." },
      { label: "Verlässliche Daten", text: "Eine Erfassung, ein Stand, nachvollziehbare Historie." },
      { label: "Erweiterbarkeit", text: "Die Lösung wächst mit dem Prozess statt ihn zu begrenzen." },
    ],
    build: [
      { label: "Fachanwendungen", text: "Anwendungen für konkrete Kernprozesse – Erfassung, Prüfung, Freigabe, Auswertung." },
      { label: "Web-Plattformen", text: "Zentrale Oberflächen für mehrere Rollen, Standorte und Berechtigungsstufen." },
      { label: "Datenmodelle", text: "Strukturen, die den fachlichen Ablauf abbilden statt ihn zu verbiegen." },
      { label: "Schnittstellen", text: "Anbindung an bestehende Systeme, damit keine Insel entsteht." },
    ],
    flow: [
      { label: "Prozess", note: "realer Ablauf" },
      { label: "Datenmodell", note: "klare Struktur" },
      { label: "Anwendung", note: "Rollen & Rechte" },
      { label: "Auswertung", note: "belastbarer Stand" },
    ],
    fields: [
      "Auftrags- und Vorgangsbearbeitung",
      "Prüf- und Freigabeprozesse",
      "Planung und Disposition",
      "Erfassung im Betrieb und im Außendienst",
      "Interne Portale und Verwaltungsoberflächen",
    ],
    approach: [
      { step: "01", label: "Prozess aufnehmen", text: "Ablauf, Rollen und Ausnahmen verstehen – inklusive der Umwege." },
      { step: "02", label: "Umfang schärfen", text: "Gemeinsam priorisieren, was zuerst echten Unterschied macht." },
      { step: "03", label: "Umsetzen", text: "In nutzbaren Schritten entwickeln, früh im Alltag prüfen." },
      { step: "04", label: "Ausbauen", text: "Erweitern, wo der Betrieb es zeigt – nicht auf Vorrat." },
    ],
    cta: {
      headline: "Sie haben einen Ablauf, der nicht ins System passt?",
      text: "Beschreiben Sie den Prozess – wir ordnen ein, was sinnvoll umsetzbar ist.",
    },
  },
  {
    slug: "kuenstliche-intelligenz",
    index: "02",
    kicker: "AI",
    name: "Künstliche Intelligenz",
    title: "AI dort, wo sie Arbeit abnimmt.",
    metaTitle: "Künstliche Intelligenz für Unternehmensprozesse | LEITIX",
    metaDescription:
      "LEITIX integriert KI in bestehende Abläufe: Dokumentenerkennung, Datenanalyse, Assistenz und Entscheidungsunterstützung – prüfbar und eingebettet.",
    lead: "KI ist kein Selbstzweck. Sinnvoll wird sie dort, wo heute Menschen Informationen lesen, sortieren, vergleichen oder übertragen.",
    problem: {
      headline: "Informationen liegen vor – aber unstrukturiert.",
      body: "Dokumente, Mails, Freitexte und gewachsene Datenbestände enthalten das Wissen, das für Entscheidungen nötig ist. Der Weg dorthin ist manuell und damit langsam und uneinheitlich.",
      signals: [
        "Dokumente werden gelesen und von Hand in Systeme übertragen",
        "Ähnliche Fälle werden immer wieder neu bewertet",
        "Suchen dauert länger als das Bearbeiten",
        "Auswertungen bleiben aus, weil die Daten nicht vergleichbar sind",
      ],
    },
    value: [
      { label: "Vorarbeit statt Volltext", text: "Die relevanten Informationen liegen strukturiert vor der Prüfung." },
      { label: "Gleichmäßige Qualität", text: "Gleiche Fälle werden gleich vorbereitet und nachvollziehbar dokumentiert." },
      { label: "Kontrolle bleibt", text: "Die Entscheidung bleibt beim Menschen – mit sichtbarer Grundlage." },
    ],
    build: [
      { label: "Dokumentenverständnis", text: "Erkennen, klassifizieren und strukturieren von Belegen, Formularen und Schriftverkehr." },
      { label: "Analyse & Klassifizierung", text: "Muster in Bestandsdaten sichtbar machen, Fälle vorsortieren." },
      { label: "Assistenzfunktionen", text: "Gezielte Unterstützung direkt im Arbeitsschritt, nicht als separates Werkzeug." },
      { label: "Bildbasierte Auswertung", text: "Visuelle Prüfaufgaben unterstützen, wo Bilder Teil des Prozesses sind." },
    ],
    flow: [
      { label: "Eingang", note: "Dokument, Bild, Text" },
      { label: "Erkennung", note: "Struktur & Kontext" },
      { label: "Prüfung", note: "Mensch entscheidet" },
      { label: "Vorgang", note: "System übernimmt" },
    ],
    fields: [
      "Belegerkennung und Vorerfassung",
      "Klassifizierung von Anfragen und Fällen",
      "Prüfunterstützung mit Regeln und Mustern",
      "Recherche in eigenen Dokumentbeständen",
      "Auswertung großer Bestandsdaten",
    ],
    approach: [
      { step: "01", label: "Anwendungsfall prüfen", text: "Wo entsteht wiederkehrender Leseaufwand mit klarem Ergebnis?" },
      { step: "02", label: "Datenlage bewerten", text: "Was liegt vor, in welcher Qualität, mit welchen Rechten." },
      { step: "03", label: "Integrieren", text: "AI in den bestehenden Arbeitsschritt einbetten, nicht daneben." },
      { step: "04", label: "Absichern", text: "Ergebnisse prüfbar halten, Grenzfälle sichtbar machen." },
    ],
    cta: {
      headline: "Wo wird bei Ihnen gelesen statt entschieden?",
      text: "Wir bewerten gemeinsam, ob und wie AI in diesem Schritt tragfähig ist.",
    },
  },
  {
    slug: "prozessautomatisierung",
    index: "03",
    kicker: "Automation",
    name: "Prozessautomatisierung",
    title: "Abläufe, die von selbst weiterlaufen.",
    metaTitle: "Prozessautomatisierung für Unternehmen | LEITIX",
    metaDescription:
      "LEITIX automatisiert wiederkehrende Abläufe: Auslöser, Regeln, Übergaben und Benachrichtigungen zwischen bestehenden Systemen – transparent und nachvollziehbar.",
    lead: "Viele Prozesse warten nicht auf Arbeit, sondern auf Weitergabe. Automatisierung setzt genau an diesen Übergängen an.",
    problem: {
      headline: "Der Ablauf steht, weil niemand ihn weiterschiebt.",
      body: "Zwischen Systemen und Abteilungen entstehen Wartezeiten: Mails zur Erinnerung, Statusnachfragen, manuelles Kopieren von Daten. Der Prozess ist bekannt, aber nicht abgebildet.",
      signals: [
        "Status wird per Nachricht erfragt statt angezeigt",
        "Übergaben passieren per Mail oder Zuruf",
        "Wiederkehrende Aufgaben werden manuell angestoßen",
        "Fehler fallen erst am Ende der Kette auf",
      ],
    },
    value: [
      { label: "Kürzere Wartezeiten", text: "Übergaben passieren beim Ereignis, nicht bei der nächsten Rückfrage." },
      { label: "Sichtbarer Stand", text: "Jeder Beteiligte sieht, wo ein Vorgang steht." },
      { label: "Weniger Streuverluste", text: "Regeln greifen gleichmäßig, Ausnahmen werden gemeldet." },
    ],
    build: [
      { label: "Workflow-Logik", text: "Auslöser, Bedingungen, Zuständigkeiten und Eskalationen abbilden." },
      { label: "Systemübergaben", text: "Daten automatisiert zwischen Anwendungen übertragen und abgleichen." },
      { label: "Prüf- und Freigabeketten", text: "Mehrstufige Freigaben mit klarer Dokumentation." },
      { label: "Benachrichtigungen", text: "Gezielte Hinweise statt Sammelmails." },
    ],
    flow: [
      { label: "Auslöser", note: "Ereignis im System" },
      { label: "Regel", note: "Bedingung & Rolle" },
      { label: "Aktion", note: "Übergabe & Update" },
      { label: "Nachweis", note: "Protokoll" },
    ],
    fields: [
      "Freigabe- und Genehmigungsprozesse",
      "Wiederkehrende Auswertungen und Meldungen",
      "Datenabgleich zwischen Anwendungen",
      "Termin-, Frist- und Wartungsauslöser",
      "Onboarding- und Stammdatenprozesse",
    ],
    approach: [
      { step: "01", label: "Ablauf zeichnen", text: "Den realen Weg inklusive Ausnahmen sichtbar machen." },
      { step: "02", label: "Regeln festlegen", text: "Was automatisch läuft und was bewusst beim Menschen bleibt." },
      { step: "03", label: "Schrittweise aktivieren", text: "Erst beobachten, dann übernehmen lassen." },
      { step: "04", label: "Nachschärfen", text: "Grenzfälle ergänzen, Regeln an den Betrieb anpassen." },
    ],
    cta: {
      headline: "Welcher Ablauf wartet bei Ihnen am häufigsten?",
      text: "Wir sehen uns die Übergänge an und zeigen, was sich sauber automatisieren lässt.",
    },
  },
  {
    slug: "digitale-systeme",
    index: "04",
    kicker: "Digital Systems",
    name: "Digitale Systeme",
    title: "Systeme, die miteinander sprechen.",
    metaTitle: "Digitale Systeme & Systemintegration | LEITIX",
    metaDescription:
      "LEITIX verbindet Anwendungen, Daten und Prozesse zu einem tragfähigen digitalen System – mit Schnittstellen, klaren Datenwegen und belastbarer Grundlage.",
    lead: "Digitalisierung scheitert selten an einzelnen Werkzeugen, sondern an ihren Grenzen. Ein System entsteht erst, wenn Daten den Weg finden.",
    problem: {
      headline: "Viele Werkzeuge, kein zusammenhängendes Bild.",
      body: "Gewachsene Landschaften bestehen aus sinnvollen Einzellösungen. Der Gesamtstand ist trotzdem unklar, weil Daten getrennt liegen und Begriffe uneinheitlich sind.",
      signals: [
        "Kennzahlen werden aus mehreren Quellen zusammengetragen",
        "Dieselbe Information hat je System einen anderen Stand",
        "Neue Anforderungen bedeuten wieder ein weiteres Werkzeug",
        "Auswertungen sind aufwändig und schwer zu wiederholen",
      ],
    },
    value: [
      { label: "Ein Stand", text: "Klare Quelle je Information statt konkurrierender Wahrheiten." },
      { label: "Anschlussfähigkeit", text: "Neue Anwendungen lassen sich anbinden statt danebenzustellen." },
      { label: "Entscheidungsgrundlage", text: "Auswertungen entstehen aus verbundenen Daten." },
    ],
    build: [
      { label: "Schnittstellen", text: "Verbindungen zwischen bestehenden Systemen, sauber versioniert." },
      { label: "Datenwege", text: "Definierte Übertragung, Abgleich und Historisierung." },
      { label: "Zentrale Sichten", text: "Oberflächen, die zusammenführen, was fachlich zusammengehört." },
      { label: "Erweiterbare Basis", text: "Struktur, auf der weitere Module aufsetzen können." },
    ],
    flow: [
      { label: "Quellen", note: "bestehende Systeme" },
      { label: "Integration", note: "Schnittstellen" },
      { label: "Struktur", note: "einheitliche Begriffe" },
      { label: "Sicht", note: "Auswertung & Steuerung" },
    ],
    fields: [
      "Anbindung von ERP-, CRM- und Fachsystemen",
      "Zusammenführen verteilter Datenbestände",
      "Zentrale Dashboards und Statusübersichten",
      "Stammdaten- und Referenzdatenpflege",
      "Vorbereitung weiterer Digitalisierungsschritte",
    ],
    approach: [
      { step: "01", label: "Landschaft aufnehmen", text: "Systeme, Datenflüsse und Zuständigkeiten erfassen." },
      { step: "02", label: "Zielbild klären", text: "Welche Information wo führend ist." },
      { step: "03", label: "Verbinden", text: "Schnittstellen und Abgleiche schrittweise umsetzen." },
      { step: "04", label: "Ausbauen", text: "Weitere Bereiche anschließen, wenn die Basis trägt." },
    ],
    cta: {
      headline: "Wie viele Quellen brauchen Sie für eine Antwort?",
      text: "Wir sehen uns Ihre Systemlandschaft an und benennen einen tragfähigen ersten Schritt.",
    },
  },
];

export const solutions: SolutionContent[] = [
  {
    slug: "business-software",
    index: "01",
    name: "Business Software",
    kicker: "Kompetenzbereich",
    metaTitle: "Business Software – Anwendungsszenario | LEITIX",
    metaDescription:
      "Beispielhaftes Szenario: wie individuelle Business-Software verteilte Tabellen und Absprachen in einen führenden Vorgang überführt.",
    lead: "Beispielhaftes Szenario für einen Kernprozess, der heute aus mehreren Werkzeugen und Absprachen besteht.",
    scenario: {
      headline: "Was wäre möglich, wenn der Vorgang einen Ort hätte?",
      body: "Angenommen, ein Auftrag entsteht per Mail, wird in einer Tabelle geplant, im ERP verbucht und per Nachricht abgestimmt. Jede Station ist erklärbar, der Gesamtstand nicht. Eine eigene Anwendung führt die Stationen zusammen, ohne bestehende Systeme zu ersetzen.",
    },
    before: [
      "Auftragseingang in mehreren Postfächern",
      "Planung in einer geteilten Tabelle",
      "Statusabstimmung per Nachricht",
      "Auswertung am Monatsende von Hand",
    ],
    after: [
      "Ein Vorgang mit klarer Zuständigkeit",
      "Planung und Status in derselben Oberfläche",
      "Änderungen sichtbar mit Historie",
      "Auswertung jederzeit reproduzierbar",
    ],
    systems: [
      { label: "Systeme", items: ["ERP / Buchhaltung", "Mail & Kalender", "Dateiablage"] },
      { label: "Daten", items: ["Kunden- und Auftragsdaten", "Termine und Kapazitäten", "Dokumente zum Vorgang"] },
    ],
    outcomes: [
      "Weniger Doppelerfassung zwischen Werkzeugen",
      "Nachvollziehbarer Bearbeitungsstand",
      "Klarere Übergaben zwischen Rollen",
    ],
    fit: ["Dienstleistung", "Produktion", "Handel", "Technische Services"],
  },
  {
    slug: "workflow-automation",
    index: "02",
    name: "Workflow Automation",
    kicker: "Kompetenzbereich",
    metaTitle: "Workflow Automation – Anwendungsszenario | LEITIX",
    metaDescription:
      "Beispielhaftes Szenario: wie aus manueller Abstimmung ein automatisierter Workflow mit klaren Regeln und sichtbarem Status wird.",
    lead: "Beispielhaftes Szenario für einen Ablauf, der fachlich klar ist, aber manuell weitergeschoben wird.",
    scenario: {
      headline: "Was wäre möglich, wenn Übergaben von selbst passieren?",
      body: "Angenommen, eine Anforderung braucht zwei Freigaben und danach eine Buchung. Heute erinnert eine Person daran. Ein abgebildeter Workflow übernimmt Auslöser, Zuständigkeit und Protokoll – Ausnahmen gehen weiterhin an Menschen.",
    },
    before: [
      "Erinnerungen per Mail und Zuruf",
      "Unklare Zuständigkeit bei Abwesenheit",
      "Freigaben ohne einheitliche Dokumentation",
      "Verzögerungen fallen spät auf",
    ],
    after: [
      "Auslöser startet den Ablauf automatisch",
      "Vertretungsregeln greifen definiert",
      "Jede Freigabe ist protokolliert",
      "Verzögerung wird gemeldet, nicht gesucht",
    ],
    systems: [
      { label: "Systeme", items: ["Fach- oder ERP-System", "Verzeichnisdienst / Rollen", "Benachrichtigung"] },
      { label: "Daten", items: ["Vorgangsdaten", "Rollen und Vertretungen", "Fristen und Schwellenwerte"] },
    ],
    outcomes: [
      "Gleichmäßiger Ablauf unabhängig von Personen",
      "Sichtbarer Status ohne Rückfragen",
      "Belegbare Freigabehistorie",
    ],
    fit: ["Verwaltung", "Einkauf", "Instandhaltung", "Qualitätsprozesse"],
  },
  {
    slug: "ai-document-intelligence",
    index: "03",
    name: "AI & Document Intelligence",
    kicker: "Kompetenzbereich",
    metaTitle: "AI & Document Intelligence – Anwendungsszenario | LEITIX",
    metaDescription:
      "Beispielhaftes Szenario: wie aus eingehenden PDFs ein strukturierter, prüfbarer Vorgang entsteht – mit dem Menschen als Entscheider.",
    lead: "Beispielhaftes Szenario für Prozesse, die mit Dokumenten beginnen und mit Handeingaben weitergehen.",
    scenario: {
      headline: "Was wäre möglich, wenn Dokumente lesbar für Systeme sind?",
      body: "Angenommen, Belege und Formulare kommen als PDF. Heute liest jemand, tippt ab und legt ab. Erkennung strukturiert Absender, Positionen und Bezug vor – die Prüfung bleibt beim Menschen, aber sie beginnt bei einem fertigen Entwurf.",
    },
    before: [
      "PDF wird gelesen und manuell übertragen",
      "Zuordnung zum Vorgang erfolgt aus Erfahrung",
      "Ablage nach individuellem Muster",
      "Nachsuchen dauert je Fall unterschiedlich",
    ],
    after: [
      "Strukturierte Felder als Vorschlag",
      "Zuordnung mit sichtbarer Begründung",
      "Einheitliche Ablage und Verschlagwortung",
      "Gezielte Suche über den Bestand",
    ],
    systems: [
      { label: "Systeme", items: ["Dokumentenablage", "Fach- oder ERP-System", "Postfach / Eingangskanal"] },
      { label: "Daten", items: ["Belege und Formulare", "Stammdaten zum Abgleich", "Referenzen auf Vorgänge"] },
    ],
    outcomes: [
      "Weniger Abtippen bei gleicher Kontrolle",
      "Einheitliche Struktur über alle Eingänge",
      "Prüfbare Grundlage für jede Zuordnung",
    ],
    fit: ["Verwaltung", "Finanzprozesse", "Technische Dokumentation", "Serviceabwicklung"],
  },
  {
    slug: "data-system-integration",
    index: "04",
    name: "Data & System Integration",
    kicker: "Kompetenzbereich",
    metaTitle: "Data & System Integration – Anwendungsszenario | LEITIX",
    metaDescription:
      "Beispielhaftes Szenario: wie getrennte Datenbestände zu einer belastbaren Entscheidungsgrundlage verbunden werden.",
    lead: "Beispielhaftes Szenario für Organisationen, deren Informationen fachlich zusammengehören, technisch aber getrennt liegen.",
    scenario: {
      headline: "Was wäre möglich, wenn eine Frage eine Quelle hätte?",
      body: "Angenommen, Auslastung, Kosten und Termine liegen in drei Systemen. Heute entsteht die Antwort in einer Tabelle. Eine Integrationsschicht führt die Daten zusammen, vereinheitlicht Begriffe und macht Auswertungen wiederholbar.",
    },
    before: [
      "Export aus mehreren Systemen",
      "Manuelles Zusammenführen und Bereinigen",
      "Unterschiedliche Begriffe je Quelle",
      "Ergebnis gilt für einen Stichtag",
    ],
    after: [
      "Definierte Datenwege statt Exporte",
      "Einheitliche Begriffe und Schlüssel",
      "Aktueller, wiederholbarer Stand",
      "Basis für weitere Auswertungen",
    ],
    systems: [
      { label: "Systeme", items: ["ERP / CRM", "Fachanwendungen", "Auswertungsschicht"] },
      { label: "Daten", items: ["Stamm- und Bewegungsdaten", "Zeit- und Kostendaten", "Referenz- und Schlüsseltabellen"] },
    ],
    outcomes: [
      "Vergleichbare Zahlen über Bereiche hinweg",
      "Weniger manuelle Aufbereitung",
      "Grundlage für Automatisierung und AI",
    ],
    fit: ["Produktion", "Logistik", "Dienstleistung", "Öffentliche Aufgaben"],
  },
  {
    slug: "fleet-operations",
    index: "05",
    name: "Fleet & Operations Solutions",
    kicker: "Kompetenzbereich",
    metaTitle: "Fleet & Operations Solutions – Anwendungsszenario | LEITIX",
    metaDescription:
      "Beispielhaftes Szenario: wie Einsatz, Zustand und Nachweise mobiler Ressourcen in einem nachvollziehbaren Betriebsbild zusammenlaufen.",
    lead: "Beispielhaftes Szenario für Bereiche, in denen Fahrzeuge, Geräte oder Einsätze koordiniert werden.",
    scenario: {
      headline: "Was wäre möglich, wenn der Betriebsstand aktuell wäre?",
      body: "Angenommen, Einsätze werden geplant, Zustände notiert und Nachweise nachträglich gesammelt. Ein verbundenes Betriebsbild führt Planung, Rückmeldung aus dem Feld und Fristen zusammen – ohne den Alltag zu verkomplizieren.",
    },
    before: [
      "Planung und Rückmeldung getrennt",
      "Zustände auf Papier oder im Chat",
      "Fristen und Prüfungen in Einzellisten",
      "Nachweise werden nachträglich gesucht",
    ],
    after: [
      "Einsatzplanung mit Rückmeldung im Feld",
      "Zustände strukturiert erfasst",
      "Fristen als Auslöser statt Erinnerung",
      "Nachweise am Vorgang dokumentiert",
    ],
    systems: [
      { label: "Systeme", items: ["Planung / Disposition", "Mobile Erfassung", "Instandhaltung & Nachweise"] },
      { label: "Daten", items: ["Ressourcen und Zuordnungen", "Einsatz- und Zustandsdaten", "Prüf- und Fristtermine"] },
    ],
    outcomes: [
      "Aktuelles Bild über Einsatz und Verfügbarkeit",
      "Weniger Nacharbeit bei Nachweisen",
      "Planbare Wartung statt Reaktion",
    ],
    fit: ["Technische Services", "Logistik", "Bau und Instandhaltung", "Kommunale Betriebe"],
  },
  {
    slug: "management-systeme",
    index: "06",
    name: "Management Systems",
    kicker: "Kompetenzbereich",
    metaTitle: "Management Systems – Anwendungsszenario | LEITIX",
    metaDescription:
      "Beispielhaftes Szenario: wie Vorgaben, Aufgaben und Nachweise in einem nachvollziehbaren Managementsystem zusammengeführt werden.",
    lead: "Beispielhaftes Szenario für Organisationen, die Vorgaben, Aufgaben und Nachweise sauber verbinden müssen.",
    scenario: {
      headline: "Was wäre möglich, wenn Nachweise mitlaufen?",
      body: "Angenommen, Vorgaben stehen in Dokumenten, Aufgaben in Listen und Nachweise in Ordnern. Ein verbundenes System hängt Aufgaben und Belege direkt an die Vorgabe – Stand und Lücken werden sichtbar, ohne separate Sammelrunden.",
    },
    before: [
      "Vorgaben in Dokumenten, Aufgaben separat",
      "Nachweise vor Prüfungen zusammengetragen",
      "Verantwortlichkeiten implizit",
      "Stand nur punktuell bekannt",
    ],
    after: [
      "Aufgabe hängt an der Vorgabe",
      "Nachweise entstehen im Ablauf",
      "Zuständigkeit und Frist hinterlegt",
      "Offene Punkte jederzeit sichtbar",
    ],
    systems: [
      { label: "Systeme", items: ["Dokumentenlenkung", "Aufgaben und Termine", "Fachsysteme mit Nachweisdaten"] },
      { label: "Daten", items: ["Vorgaben und Versionen", "Maßnahmen und Fristen", "Prüf- und Nachweisdokumente"] },
    ],
    outcomes: [
      "Weniger Aufwand vor internen Prüfungen",
      "Klarer Überblick über offene Maßnahmen",
      "Belegbare Historie je Vorgabe",
    ],
    fit: ["Qualität", "Sicherheit und Umwelt", "Technische Compliance", "Interne Organisation"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}

export const contactTopics = [
  "Individuelle Software",
  "Künstliche Intelligenz",
  "Prozessautomatisierung",
  "Digitale Systeme",
  "Systemintegration",
  "Noch unklar – erst einordnen",
];
