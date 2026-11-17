import React from "react";

const statsData = [
  { label: "Patients accueillis", value: "12 000+" },
  { label: "Jours d’ouverture par semaine", value: "7/7" },
  { label: "Créneaux de consultation", value: "08h–18h" },
  { label: "Délai de rappel moyen", value: "< 30 min" },
];

const EmergencyStats = () => {
  return (
    <section
      aria-label="Chiffres clés du cabinet"
      className="bg-white text-black py-10 px-4 sm:px-8 md:px-16 lg:px-24 my-5"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-700 mb-8">
          <span className="text-black">Le cabinet</span> en chiffres
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {statsData.map(({ label, value }, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 rounded-md border border-gray-200 shadow-sm"
            >
              <p className="text-3xl sm:text-4xl font-bold text-blue-700 leading-tight">
                {value}
              </p>
              <p className="mt-1 text-gray-700 text-xs sm:text-sm font-medium">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmergencyStats;
