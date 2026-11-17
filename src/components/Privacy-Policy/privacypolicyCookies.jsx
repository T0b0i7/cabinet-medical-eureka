import React from 'react';

function CookiesPolicySection() {
  return (
    <section
      aria-labelledby="cookies-policy-heading"
      className="bg-white py-16 px-6 sm:px-12 lg:px-20 my-[-30px]"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="cookies-policy-heading"
          className="text-3xl font-extrabold text-blue-700 mb-6"
        >
          Cookies et technologies de suivi
        </h2>

        <p className="text-gray-800 text-lg leading-relaxed mb-6">Nous utilisons des cookies et technologies similaires pour améliorer votre expérience, analyser la fréquentation du site et proposer un contenu adapté. Un cookie est un petit fichier texte stocké sur votre appareil.</p>

        <h3 className="text-xl font-semibold text-blue-600 mb-3">
          Types de cookies utilisés :
        </h3>

        <ul className="max-w-xl list-disc list-inside space-y-3 text-gray-800 text-lg">
          <li>Nécessaires au fonctionnement de base du site.</li>
          <li>Nous aident à comprendre comment les visiteurs utilisent le site.</li>
          <li>Mémorisent vos préférences et vos paramètres.</li>
          <li>Utilisés pour vous proposer des contenus pertinents selon vos intérêts.</li>
        </ul>

        <p className="mt-6 text-gray-800 text-lg leading-relaxed">
          Vous pouvez gérer ou désactiver les cookies depuis les paramètres de votre navigateur, ce qui peut toutefois affecter certaines fonctionnalités du site.
        </p>
      </div>
    </section>
  );
}

export default CookiesPolicySection;
