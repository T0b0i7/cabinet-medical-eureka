// Configuration de marque du Cabinet Médical.
// Toutes les valeurs peuvent être surchargées via l'URL :
//   ?clinique=...&ville=...&tel=...&email=...&adresse=...
// ce qui permet de réutiliser le même déploiement pour d'autres prospects.

export const DEFAULT_SITE = {
  clinic: "Cabinet Médical",
  city: "Cotonou",
  country: "Bénin",
  phone: "+229 01 00 00 00 00",
  phoneRaw: "+2290100000000",
  whatsapp: "2290100000000",
  email: "contact@votre-cabinet.bj",
  address: "Cotonou, Bénin",
  hours: "Ouvert 7j/7, de 08h00 à 18h00",
  hoursShort: "7j/7 · 08h00 – 18h00",
  tagline: "Votre santé, notre priorité",
};

export const SPECIALTIES = [
  {
    id: "medecine-generale",
    label: "Médecine Générale & Suivi",
    short: "Médecine Générale",
    description:
      "Consultations courantes, bilans de santé et prise en charge des urgences légères.",
    price: "5 000 FCFA",
  },
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
    id: "pediatrie",
    label: "Pédiatrie",
    short: "Pédiatrie",
    description:
      "Suivi du nourrisson et de l’enfant, vaccinations, croissance et conseils aux parents.",
    price: "7 000 FCFA",
  },
  {
    id: "gynecologie",
    label: "Gynécologie-Obstétrique",
    short: "Gynécologie",
    description:
      "Suivi de grossesse, consultations gynécologiques, planning familial et échographies.",
    price: "10 000 FCFA",
  },
  {
    id: "cardiologie",
    label: "Cardiologie",
    short: "Cardiologie",
    description:
      "Dépistage et suivi de l’hypertension, électrocardiogramme et bilan cardiovasculaire.",
    price: "15 000 FCFA",
  },
  {
    id: "dermatologie",
    label: "Dermatologie",
    short: "Dermatologie",
    description:
      "Traitement des affections de la peau, allergies, acné et suivi des maladies chroniques.",
    price: "10 000 FCFA",
  },
  {
    id: "ophtalmologie",
    label: "Ophtalmologie",
    short: "Ophtalmologie",
    description:
      "Contrôle de la vue, dépistage du glaucome et suivi des pathologies oculaires.",
    price: "10 000 FCFA",
  },
  {
    id: "dentaire",
    label: "Dentaire & Stomatologie",
    short: "Dentaire",
    description:
      "Détartrage, soins dentaires, extractions simples et conseils d’hygiène bucco-dentaire.",
    price: "10 000 FCFA",
  },
  {
    id: "kinesitherapie",
    label: "Kinésithérapie",
    short: "Kinésithérapie",
    description:
      "Rééducation après traumatisme, prise en charge des douleurs et séances de mobilité.",
    price: "8 000 FCFA / séance",
  },
  {
    id: "imagerie",
    label: "Imagerie & Échographie",
    short: "Imagerie",
    description:
      "Échographies abdominales, obstétricales et pelviennes sur rendez-vous.",
    price: "12 000 FCFA",
  },
  {
    id: "laboratoire",
    label: "Laboratoire d’analyses",
    short: "Analyses",
    description:
      "Prélèvements sanguins, bilans biologiques courants et résultats sous 24 à 48 h.",
    price: "à partir de 5 000 FCFA",
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
