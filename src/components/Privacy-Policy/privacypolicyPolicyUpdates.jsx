import React from 'react';

function PolicyUpdatesSection() {
  return (
    <section
      aria-labelledby="policy-updates-heading"
      className="bg-white py-16 px-6 sm:px-12 lg:px-20 my-[-30px]"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="policy-updates-heading"
          className="mb-6 text-3xl font-extrabold text-blue-700"
        >
          Mises à jour de la politique
        </h2>

        <p className="mb-6 leading-relaxed text-gray-800 text-lg">Nous pouvons mettre à jour cette politique de confidentialité afin de tenir compte de l’évolution de nos pratiques ou de nos obligations légales. La date de dernière mise à jour sera alors modifiée.</p>

        <p className="leading-relaxed text-gray-800 text-lg">Nous vous invitons à consulter régulièrement cette page pour rester informé de la manière dont nous protégeons vos informations. L’utilisation continue de nos services vaut acceptation des mises à jour.</p>
      </div>
    </section>
  );
}

export default PolicyUpdatesSection;
