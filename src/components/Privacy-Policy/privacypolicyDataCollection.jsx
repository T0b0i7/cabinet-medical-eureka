import React from 'react';

function DataCollectionSection() {
  return (
    <section
      aria-labelledby="data-collection-heading"
      className="bg-white py-16 px-6 sm:px-12 lg:px-20 my-[-30px]"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="data-collection-heading"
          className="text-3xl font-extrabold text-blue-700 mb-6"
        >
          Collecte des données
        </h2>

        <p className="text-gray-800 text-lg leading-relaxed mb-6">Nous collectons certaines informations afin d’améliorer nos services pour tous les utilisateurs, notamment :</p>

        <ul className="max-w-xl list-disc list-inside space-y-3 text-gray-800 text-lg">
          <li>votre nom, votre adresse e-mail et vos coordonnées fournies lors de la prise de rendez-vous ou d’une demande de contact.</li>
          <li>des informations sur votre utilisation du site et des services, pour améliorer votre expérience.</li>
          <li>utilisés pour personnaliser votre expérience et analyser la fréquentation du site.</li>
        </ul>
      </div>
    </section>
  );
}

export default DataCollectionSection;
