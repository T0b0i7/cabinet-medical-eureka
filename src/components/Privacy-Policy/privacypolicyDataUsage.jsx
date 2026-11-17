import React from 'react';

function DataUsageSection() {
  return (
    <section
      aria-labelledby="data-usage-heading"
      className="bg-white py-16 px-6 sm:px-12 lg:px-20"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="data-usage-heading"
          className="text-3xl font-extrabold text-blue-700 mb-6"
        >
          Utilisation de vos données
        </h2>

        <p className="text-gray-800 text-lg leading-relaxed mb-6">Les informations que nous collectons nous servent à plusieurs finalités essentielles :</p>

        <ul className="max-w-xl list-disc list-inside space-y-3 text-gray-800 text-lg">
          <li>assurer le bon fonctionnement et la disponibilité de nos services.</li>
          <li>analyser les usages pour adapter le contenu et les fonctionnalités.</li>
          <li>vous adresser les informations importantes, notifications et réponses à vos demandes.</li>
          <li>respecter nos obligations légales et réglementaires.</li>
          <li>avec votre consentement, vous envoyer des informations et offres.</li>
        </ul>
      </div>
    </section>
  );
}

export default DataUsageSection;
