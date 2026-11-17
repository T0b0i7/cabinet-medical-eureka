import React from 'react';

function PrivacyPolicyIntroduction() {
  return (
    <section
      aria-labelledby="privacy-policy-intro-heading"
      className="bg-white py-16 px-6 sm:px-12 lg:px-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          id="privacy-policy-intro-heading"
          className="mb-4 text-3xl font-extrabold text-blue-700"
        >
          Introduction
        </h2>

        <p className="max-w-3xl mx-auto leading-relaxed text-gray-800 text-lg">Au Cabinet Médical EURÊKA, la protection de vos données personnelles est une responsabilité que nous prenons au sérieux. Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos informations lorsque vous consultez notre site. Nous vous invitons à la lire attentivement pour comprendre vos droits et notre engagement.</p>
      </div>
    </section>
  );
}

export default PrivacyPolicyIntroduction;
