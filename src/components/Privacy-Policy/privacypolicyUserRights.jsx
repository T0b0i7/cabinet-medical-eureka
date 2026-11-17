import React from 'react';

function UserPrivacyRights() {
  return (
    <section
      aria-labelledby="user-privacy-rights-heading"
      className="bg-white py-16 px-6 sm:px-12 lg:px-20 my-[-30px]"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="user-privacy-rights-heading"
          className="mb-6 text-3xl font-extrabold text-blue-700"
        >
          Vos droits en matière de confidentialité
        </h2>

        <p className="mb-6 leading-relaxed text-gray-800 text-lg">Vous disposez de droits importants sur vos données personnelles. Selon votre lieu de résidence, ces droits peuvent inclure :</p>

        <ul className="max-w-xl list-disc list-inside space-y-3 text-gray-800 text-lg">
          <li>Demander une copie des données personnelles que nous détenons sur vous.</li>
          <li>Nous demander de corriger toute donnée inexacte ou incomplète.</li>
          <li>Demander la suppression de vos données dans certaines circonstances.</li>
          <li>Limiter l’utilisation de vos données dans certains cas.</li>
          <li>Obtenir vos données dans un format structuré et courant.</li>
          <li>Vous opposer au traitement de vos données à des fins de communication ou autres.</li>
        </ul>

        <p className="mt-6 leading-relaxed text-gray-800 text-lg">
          Pour exercer ces droits, contactez-nous via les coordonnées indiquées ci-dessous.
        </p>
      </div>
    </section>
  );
}

export default UserPrivacyRights;
