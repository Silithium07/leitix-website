export type ProjectStatus = "Produktiv umgesetzt · anonymisierte Demo-Daten" | "Konzept / Pilotlogik" | "In Entwicklung / Zielbild" | "In Entwicklung / Fachanwendung";

export type PracticeProject = {
  slug: string;
  title: string;
  status: ProjectStatus;
  summary: string;
  statement: string;
  features: string[];
  flow: string[];
  image?: string;
  imageAlt?: string;
};

export const practiceProjects: PracticeProject[] = [
  {
    slug: "invoice-control",
    title: "Intelligent Invoice Control",
    status: "Produktiv umgesetzt · anonymisierte Demo-Daten",
    summary: "AI-gestützte Erkennung, fachliche Prüfung und operative Zuordnung von Rechnungspositionen.",
    statement: "Rechnungen werden nicht nur gelesen. Sie werden fachlich geprüft.",
    features: ["Mehrseitige Rechnungen auswerten", "Positionen erkennen und Stammdaten abgleichen", "Objekte, Fahrzeuge und Kostenstellen zuordnen", "Unbekannte Werte als Klärfall markieren", "Summen und Buchungsverteilung prüfen", "Korrektur, erneute Prüfung und Export vorbereiten"],
    flow: ["Dokument", "Erkennung", "Stammdaten", "Prüfung", "Klärfall", "Freigabe", "Export"],
  },
  {
    slug: "quality-training",
    title: "Digital Quality & Training Management",
    status: "Produktiv umgesetzt · anonymisierte Demo-Daten",
    summary: "Schulungen, Mitarbeitergespräche, Nachweise, Dokumente, Rollen und wiederkehrende Fristen in einem zentralen System.",
    statement: "QM wird nicht in Ordnern verwaltet, sondern als lebender Prozess geführt.",
    features: ["Schulungskalender und Mitarbeiterhistorie", "Wiederkehrende Intervalle und Sammelveranstaltungen", "Vorlagen, Nachweise und DMS-Ablage", "Rollen und Benutzerverwaltung", "SQL-basierter Unternehmensbetrieb", "Nachvollziehbare Änderungen"],
    flow: ["Planung", "Teilnahme", "Nachweis", "Frist", "Historie"],
  },
  {
    slug: "warehouse-control",
    title: "Purchase & Warehouse Control",
    status: "Konzept / Pilotlogik",
    summary: "5-fach-Abgleich von Bestellung, Auftragsbestätigung, Lieferschein, Lagerzugang und Rechnung.",
    statement: "Nicht nur OCR. Eine digitale Kontrollspur vom Mindestbestand bis zur Zahlung.",
    features: ["Belege einem Vorgang zuordnen", "Artikel, Mengen und Preise abgleichen", "Toleranzen und Dubletten prüfen", "Klärfälle an die richtige Rolle geben", "Prüfstatus und Historie dokumentieren"],
    flow: ["Bestellung", "Auftragsbestätigung", "Lieferschein", "Lagerzugang", "Rechnung"],
  },
  {
    slug: "fleet-operations",
    title: "Fleet Operations Intelligence",
    status: "In Entwicklung / Zielbild",
    summary: "Operative Daten aus TMS, Telematik, Fahrzeugen, Werkstatt, Pannen, Rückmeldungen und Dokumenten verbinden.",
    statement: "Der Mensch entscheidet. LEITIX liefert Kontext, Hinweise und nächste Aktionen.",
    features: ["TMS- und Telematikdaten verbinden", "Fahrzeug- und Werkstattstatus zusammenführen", "Pannen und Rückmeldungen priorisieren", "Dokumente dem Vorgang zuordnen", "Nächste Aktionen sichtbar machen"],
    flow: ["TMS", "Telematik", "Werkstatt", "Kontext", "Entscheidung"],
  },
  {
    slug: "asset-lifecycle",
    title: "Damage & Asset Lifecycle",
    status: "In Entwicklung / Fachanwendung",
    summary: "Schäden, Fotos, Kalkulationen, Arbeitszeiten, Material, Dokumente und Fahrzeughistorie in einer digitalen Akte bündeln.",
    statement: "Ein Schaden wird vom ersten Foto bis zur abgeschlossenen Maßnahme nachvollziehbar.",
    features: ["Fotos und Schadensmeldung erfassen", "Kalkulation und Freigabe verbinden", "Arbeitszeit und Material dokumentieren", "Dokumente zentral ablegen", "Fahrzeughistorie fortschreiben"],
    flow: ["Meldung", "Prüfung", "Kalkulation", "Maßnahme", "Historie"],
  },
];

export const solutionGroups = [
  { key: "A", title: "Dokumente & Rechnungen", text: "AI-gestützte Erkennung, fachliche Prüfung und strukturierte Übergabe.", slug: "ai-document-intelligence" },
  { key: "B", title: "Prozesssoftware", text: "Individuelle Anwendungen für Abläufe, die Standardsoftware nicht sauber abbildet.", slug: "business-software" },
  { key: "C", title: "Operations & Fleet", text: "Fahrzeuge, Werkstatt, Disposition, Aufgaben, Pannen und Rückmeldungen verbinden.", slug: "fleet-operations" },
  { key: "D", title: "Integration & Automation", text: "Bestehende Systeme verbinden, statt sie unnötig zu ersetzen.", slug: "data-system-integration" },
];
