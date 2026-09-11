/**
 * Interne Vorbereitung für den künftigen "LEITIX AI" Solution Consultant.
 *
 * Bewusst NICHT sichtbar: es gibt kein Chat-UI und keinen Fake-Bot.
 * Diese Datei hält nur Typen und eine Intent-Zuordnung bereit, damit ein
 * späterer, echter Berater (mit Backend) ohne Umbau angebunden werden kann.
 */

export type ConsultantIntent =
  | "documents"
  | "processes"
  | "software"
  | "systems"
  | "data"
  | "ai"
  | "unclear";

export type ConsultantTurn = {
  role: "user" | "assistant";
  content: string;
};

export type ConsultantSession = {
  intent: ConsultantIntent;
  turns: ConsultantTurn[];
  /** Thema für die Kontakt-Vorauswahl (?thema=) */
  suggestedTopic: string;
};

/** Mapping Intent → bestehendes Kontaktthema. */
export const intentToTopic: Record<ConsultantIntent, string> = {
  documents: "Künstliche Intelligenz",
  processes: "Prozessautomatisierung",
  software: "Individuelle Software",
  systems: "Systemintegration",
  data: "Digitale Systeme",
  ai: "Künstliche Intelligenz",
  unclear: "Noch unklar – erst einordnen",
};

export function createConsultantSession(intent: ConsultantIntent = "unclear"): ConsultantSession {
  return { intent, turns: [], suggestedTopic: intentToTopic[intent] };
}

/** Platzhalter: wird später gegen einen echten Server-Endpunkt ersetzt. */
export const consultantEnabled = false;
