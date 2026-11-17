// Configuration de marque du Cabinet Médical EURÊKA.
// Toutes les valeurs peuvent être surchargées via l'URL :
//   ?clinique=...&ville=...&tel=...&email=...&adresse=...
// ce qui permet de réutiliser le même déploiement pour d'autres prospects.

export const DEFAULT_SITE = {
  clinic: "Cabinet Médical EURÊKA",
  city: "Porto-Novo",
  country: "Bénin",
  phone: "+229 01 41 60 83 39",
  phoneRaw: "+2290141608339",
  whatsapp: "2290141608339",
  email: "contact@cabinet-eureka.bj",
  address: "Porto-Novo, Bénin",
  hours: "Ouvert 7j/7, de 08h00 à 18h00",
  hoursShort: "7j/7 · 08h00 – 18h00",
  tagline: "Votre santé, notre priorité",
};

export const SPECIALTIES = [
  {
    id: "orl",
    label: "Oto-Rhino-Laryngologie (ORL)",
    short: "ORL",
    description:
      "Consultations spécialisées, troubles de l’audition, sinusites, vertiges et pathologies ORL.",
    price: "10 000 à 15 000 FCFA",
  },
  {
    id: "chirurgie-cervico-faciale",
    label: "Chirurgie Cervico-Faciale",
    short: "Chirurgie Cervico-Faciale",
    description:
      "Explorations et actes chirurgicaux spécialisés de la tête et du cou.",
    price: "sur devis",
  },
  {
    id: "medecine-generale",
    label: "Médecine Générale & Suivi",
    short: "Médecine Générale",
    description:
      "Consultations courantes, bilans de santé et prise en charge des urgences légères.",
    price: "5 000 FCFA",
  },
];

// Créneaux de 30 minutes entre 08h00 et 18h00 (dernier créneau 17h30).
export const TIME_SLOTS = (() => {
  const slots = [];
  for (let h = 8; h < 18; h++) {
    slots.push(`${String(h).padStart(2, "0")}:00`);
    slots.push(`${String(h).padStart(2, "0")}:30`);
  }
  return slots;
})();

function digitsOnly(value) {
  return String(value || "").replace(/[^\d]/g, "");
}

export function normalizeConfig(params = {}) {
  const clinic = (params.clinique || params.clinic || "").trim();
  const city = (params.ville || params.city || "").trim();
  const phone = (params.tel || params.phone || "").trim();

  const phoneRaw = phone || DEFAULT_SITE.phoneRaw;

  return {
    ...DEFAULT_SITE,
    clinic: clinic || DEFAULT_SITE.clinic,
    city: city || DEFAULT_SITE.city,
    phone: phone || DEFAULT_SITE.phone,
    phoneRaw,
    whatsapp: digitsOnly(phone) || DEFAULT_SITE.whatsapp,
    address: `${city || DEFAULT_SITE.city}, ${DEFAULT_SITE.country}`,
    email: (params.email || "").trim() || DEFAULT_SITE.email,
  };
}

export function whatsappUrl(config, message) {
  const base = `https://wa.me/${config.whatsapp || DEFAULT_SITE.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function appointmentMessage(config, data) {
  const lines = [
    `Bonjour ${config.clinic},`,
    "",
    "Je souhaite prendre rendez-vous :",
    `• Nom : ${data.name || "—"}`,
    `• Téléphone : ${data.phone || "—"}`,
    `• Spécialité : ${data.specialty || "—"}`,
    `• Date souhaitée : ${data.date ? formatDateFr(data.date) : "—"}`,
    `• Heure : ${data.time || "—"}`,
  ];
  if (data.message) lines.push(`• Motif / précisions : ${data.message}`);
  lines.push("", `Merci de me confirmer ce créneau. — ${config.city}`);
  return lines.join("\n");
}

export function formatDateFr(dateString) {
  if (!dateString) return "";
  const date = new Date(`${dateString}T00:00:00`);
  if (Number.isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
