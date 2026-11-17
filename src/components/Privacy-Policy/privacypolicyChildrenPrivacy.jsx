import React from 'react';

const ChildrenPrivacySection = () => {
  return (
    <section
      aria-labelledby="children-privacy-heading"
      className="bg-white py-16 px-6 sm:px-12 lg:px-20"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="children-privacy-heading"
          className="text-3xl font-extrabold text-blue-700 mb-6"
        >
          Confidentialité des enfants
        </h2>
        <p className="text-gray-800 text-lg leading-relaxed mb-6">Nous prenons la confidentialité des enfants très au sérieux. Notre site ne s’adresse pas aux enfants de moins de 13 ans et nous ne collectons pas sciemment leurs données sans l’accord d’un parent ou tuteur.</p>
        <p className="text-gray-800 text-lg leading-relaxed">Si nous apprenons que des données ont été collectées auprès d’un enfant sans autorisation parentale, nous les supprimerons rapidement.</p>
      </div>
    </section>
  );
};

export default ChildrenPrivacySection;
