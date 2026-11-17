import React from "react";

const icons = {
  location: (
    <svg
      className="h-10 w-10 text-blue-700"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  ),
  profile: (
    <svg
      className="h-10 w-10 text-blue-700"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M9 12h6m-3-3v6m-4-8h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2" />
    </svg>
  ),
  clock: (
    <svg
      className="h-10 w-10 text-blue-700"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4l3 3" />
    </svg>
  ),
};

const infoCards = [
  {
    icon: icons.location,
    title: "Données sécurisées",
    description:
      "Vos informations personnelles sont chiffrées et conservées de manière sécurisée, dans le respect du secret médical.",
  },
  {
    icon: icons.profile,
    title: "Dossier patient complet",
    description:
      "Renseignez vos antécédents, allergies et contacts d’urgence pour une prise en charge personnalisée.",
  },
  {
    icon: icons.clock,
    title: "Démarche simple et rapide",
    description:
      "Nos formulaires simples et nos consignes claires facilitent la transmission de vos informations.",
  },
];

const InfoCard = ({ icon, title, description }) => (
  <article
    className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-md transition-shadow hover:shadow-lg border border-gray-200"
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-700 text-base leading-relaxed">{description}</p>
  </article>
);

const PatientInfoOverview = () => (
  <section
    aria-labelledby="overview-title"
    className="bg-white text-black py-16 px-6 md:px-12 max-w-7xl mx-auto"
  >
    <div className="max-w-4xl mx-auto text-center">
      <h2
        id="overview-title"
        className="text-4xl font-extrabold mb-4 sm:text-5xl"
      >
        <span className="text-black">Aperçu de vos </span>
        <span className="text-blue-700">informations patient</span>
      </h2>

      <p className="text-lg sm:text-xl font-light max-w-3xl mx-auto text-gray-900">
        Des informations exactes sont essentielles pour une prise en charge efficace. Voici comment nous rendons la démarche simple et sécurisée :
      </p>
    </div>

    <div className="mt-14 grid gap-10 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
      {infoCards.map(({ icon, title, description }, idx) => (
        <InfoCard key={idx} icon={icon} title={title} description={description} />
      ))}
    </div>
  </section>
);

export default PatientInfoOverview;
