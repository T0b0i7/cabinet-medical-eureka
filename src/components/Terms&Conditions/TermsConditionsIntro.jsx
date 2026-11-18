'use client'
import React from "react";

const TermsConditionsIntro = () => {
  return (
    <section
      aria-labelledby="terms-intro-heading"
      className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-20 py-16"
    >
      <h2
        id="terms-intro-heading"
        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 select-text"
      >
        Bienvenue dans nos conditions générales
      </h2>

      <p className="max-w-3xl mx-auto text-gray-700 text-base sm:text-lg leading-relaxed font-light">Au Cabinet Médical, votre confiance compte plus que tout. Ces conditions générales précisent les modalités d’utilisation de notre site et de nos services, ainsi que vos droits et obligations. Nous vous recommandons de les lire attentivement.</p>

      <p className="max-w-3xl mx-auto text-gray-800 text-base sm:text-lg leading-relaxed font-light mt-4">En continuant à utiliser nos services, vous acceptez ces conditions. Pour toute question, notre équipe reste à votre disposition. Votre sécurité et votre satisfaction demeurent notre priorité.</p>
    </section>
  );
};

export default TermsConditionsIntro;
