'use client'
import React from "react";
import Link from "next/link";

const PrivacyPolicyLink = () => {
  return (
    <section
      aria-label="Privacy policy information"
      className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-20 py-12 bg-white rounded-lg"
    >
      <h2 className="mb-4 select-text text-2xl sm:text-3xl font-semibold text-blue-900">
        Votre confidentialité compte
      </h2>

      <p className="mb-6 max-w-3xl text-lg sm:text-xl font-light leading-relaxed text-blue-800">La protection de vos informations personnelles est une priorité. Prenez un instant pour consulter notre politique de confidentialité afin de savoir comment nous collectons, utilisons et protégeons vos données.</p>

      <Link
        href="/privacy-policy"
        aria-label="Lire notre politique de confidentialité"
        className="inline-block rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white shadow transition-colors hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Lu Politique de confidentialité
      </Link>
    </section>
  );
};

export default PrivacyPolicyLink;
