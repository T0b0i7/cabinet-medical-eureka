'use client'
import React from "react";

const LimitationOfLiability = () => {
  return (
    <section
      aria-labelledby="limitation-of-liability-heading"
      className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-20 py-16"
    >
      <h2
        id="limitation-of-liability-heading"
        className="mb-8 select-text text-3xl sm:text-4xl font-bold text-gray-900"
      >
        Limitation of Liability
      </h2>

      <p className="mb-6 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed font-light text-gray-800">Le Cabinet Médical et ses partenaires ne peuvent être tenus responsables des dommages directs, indirects, accessoires ou consécutifs résultant de l’utilisation du site.</p>

      <p className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed font-light text-gray-800">En utilisant nos services, vous reconnaissez le faire à vos propres risques. Nous nous efforçons de fournir des informations exactes et à jour, sans pouvoir en garantir l’exhaustivité.</p>
    </section>
  );
};

export default LimitationOfLiability;
