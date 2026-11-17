import React from 'react';

function DataSecuritySection() {
  return (
    <section
      aria-labelledby="data-security-heading"
      className="bg-white py-16 px-6 sm:px-12 lg:px-20 my-[-30px]"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="data-security-heading"
          className="text-3xl font-extrabold text-blue-700 mb-6"
        >
          Sécurité des données
        </h2>

        <p className="text-gray-800 text-lg leading-relaxed mb-6">Nous appliquons des pratiques de sécurité rigoureuses pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction. Notre approche comprend :</p>

        <ul className="max-w-xl list-disc list-inside space-y-3 text-gray-800 text-lg">
          <li>Sécurisation des transmissions de données via les protocoles SSL/TLS.</li>
          <li>Accès aux données limité au personnel autorisé.</li>
          <li>Évaluations et mises à jour régulières de la sécurité.</li>
          <li>Collecte uniquement des données nécessaires à nos services.</li>
          <li>Protection des données stockées par pare-feu, anti-malware et serveurs sécurisés.</li>
        </ul>

        <p className="mt-6 text-gray-800 text-lg leading-relaxed">
          Malgré nos efforts, aucun système n’est totalement infaillible. Restez prudent lorsque vous partagez des informations sensibles en ligne.
        </p>
      </div>
    </section>
  );
}

export default DataSecuritySection;
