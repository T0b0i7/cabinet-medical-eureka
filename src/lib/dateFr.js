const MONTHS = {
  janv: 0,
  "janv.": 0,
  janvier: 0,
  "févr": 1,
  "févr.": 1,
  fevrier: 1,
  "février": 1,
  mars: 2,
  "avr": 3,
  "avr.": 3,
  avril: 3,
  mai: 4,
  juin: 5,
  "juil": 6,
  "juil.": 6,
  juillet: 6,
  "août": 7,
  aout: 7,
  "sept": 8,
  "sept.": 8,
  septembre: 8,
  "oct": 9,
  "oct.": 9,
  octobre: 9,
  "nov": 10,
  "nov.": 10,
  novembre: 10,
  "déc": 11,
  "déc.": 11,
  decembre: 11,
  "décembre": 11,
};

/**
 * Parse une date au format français (« 28 août 2025 ») ou ISO.
 * Retourne un objet Date valide, ou la date epoch en cas d'échec.
 */
export function parseDateFr(value) {
  if (!value) return new Date(0);
  if (value instanceof Date) return value;

  const iso = /^\d{4}-\d{2}-\d{2}/.test(value) ? new Date(value) : null;
  if (iso && !Number.isNaN(iso.getTime())) return iso;

  const match = String(value)
    .trim()
    .match(/^(\d{1,2})\s+([A-Za-zÀ-ÿ.]+)\s+(\d{4})$/);
  if (match) {
    const day = Number(match[1]);
    const month = MONTHS[match[2].toLowerCase()];
    const year = Number(match[3]);
    if (month !== undefined) return new Date(year, month, day);
  }

  const fallback = new Date(value);
  return Number.isNaN(fallback.getTime()) ? new Date(0) : fallback;
}
