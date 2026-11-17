import React from 'react';

function PrivacyConsentSection() {
  return (
    <section
      aria-labelledby="privacy-consent-heading"
      className="bg-white py-16 px-6 sm:px-12 lg:px-20"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="privacy-consent-heading"
          className="text-3xl font-extrabold text-blue-700 mb-6"
        >
          Votre consentement
        </h2>
        <p className="text-gray-800 text-lg leading-relaxed">En continuant à utiliser notre site et nos services, vous reconnaissez et acceptez notre politique de confidentialité. Nous traitons vos données avec le plus grand soin.</p>
      </div>
    </section>
  );
}

export default PrivacyConsentSection;
