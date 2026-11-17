import React from 'react';

function ThirdPartyServicesSection() {
  return (
    <section
      aria-labelledby="third-party-services-heading"
      className="bg-white py-16 px-6 sm:px-12 lg:px-20 my-[-30px]"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="third-party-services-heading"
          className="mb-6 text-3xl font-extrabold text-blue-700"
        >
          Tiers partenaires
        </h2>

        <p className="mb-6 leading-relaxed text-gray-800 text-lg">Nous pouvons partager vos informations avec des prestataires de confiance qui nous aident à faire fonctionner le site ou à vous accompagner. Ces partenaires sont tenus de protéger vos données.</p>

        <p className="mb-6 leading-relaxed text-gray-800 text-lg">Exemples de tiers concernés :</p>

        <ul className="max-w-xl list-disc list-inside space-y-3 text-gray-800 text-lg">
          <li>Prestataires de paiement</li>
          <li>Services d’analyse et de communication</li>
          <li>Plateformes d’assistance aux patients</li>
          <li>Hébergeurs cloud</li>
        </ul>

        <p className="mt-6 leading-relaxed text-gray-800 text-lg">Nous sélectionnons ces partenaires avec soin et vérifions régulièrement leurs pratiques en matière de confidentialité.</p>
      </div>
    </section>
  );
}

export default ThirdPartyServicesSection;
