import React from "react";

// Single tip card component for clarity and reuse
function HealthTipCard({ icon, title, description }) {
  return (
    <article
      className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-xl border border-gray-200"
      role="region"
      aria-label={title}
    >
      <div className="mb-4 text-blue-700 w-8 h-8">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </article>
  );
}

// Data separated from JSX for easy maintenance
const healthTipsData = [
  {
    id: 1,
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "Bien s’hydrater",
    description: "Buvez au moins 8 verres d’eau par jour pour rester en bonne santé.",
  },
  {
    id: 2,
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>
    ),
    title: "Alimentation équilibrée",
    description: "Intégrez fruits, légumes et protéines à chaque repas.",
  },
  {
    id: 3,
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414M17.95 17.95l1.414 1.414M6.05 6.05L4.636 4.636" />
      </svg>
    ),
    title: "Activité physique régulière",
    description: "Bougez au moins 30 minutes par jour à intensité modérée.",
  },
  {
    id: 4,
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M9 12l2 2 4-4" />
        <path d="M21 12c0-4.418-3.582-8-8-8" />
      </svg>
    ),
    title: "Bien dormir",
    description: "Visez 7 à 9 heures de sommeil de qualité chaque nuit.",
  },
  {
    id: 5,
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
        <path d="M12 14v7" />
      </svg>
    ),
    title: "Gérer le stress",
    description: "Pratiquez chaque jour la pleine conscience ou la relaxation.",
  },
  {
    id: 6,
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M7 20h10M12 12v8" />
        <path d="M12 2a7 7 0 100 14 7 7 0 000-14z" />
      </svg>
    ),
    title: "Consultations régulières",
    description: "Consultez régulièrement pour un suivi et un dépistage adaptés.",
  },
];

export default function BlogHealthTips() {
  return (
    <section
      className="max-w-5xl mx-auto px-6 py-12"
      aria-labelledby="health-tips-heading"
    >
      <h2
        id="health-tips-heading"
        className="text-3xl font-extrabold text-center mb-10"
      >
        <span className="text-black">Conseils </span>
        <span className="text-blue-700">pour mieux vivre</span>
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {healthTipsData.map(({ id, icon, title, description }) => (
          <HealthTipCard
            key={id}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </div>
    </section>
  );
}
