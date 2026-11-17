'use client'
import React from "react";

const userResponsibilitiesList = [
  "Fournir des informations exactes et sincères lors de votre inscription et de l’utilisation du site.",
  "Utiliser nos services de manière responsable et respecter les lois et consignes applicables.",
  "Préserver la confidentialité de vos identifiants de compte.",
  "Nous informer rapidement de toute utilisation non autorisée ou faille de sécurité.",
  "Respecter les autres utilisateurs et éviter tout comportement abusif ou nuisible.",
];

const ResponsibilityItem = ({ text }) => {
  return (
    <li
      tabIndex={0}
      className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md transition ease-in-out duration-200"
      aria-label={text}
    >Fournir des informations exactes et sincères lors de votre inscription et de l’utilisation du site.</li>
  );
};

const UserResponsibilities = () => {
  return (
    <section
      aria-labelledby="user-responsibilities-heading"
      className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-20 py-16 my-[-50px]"
    >
      <h2
        id="user-responsibilities-heading"
        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 select-text"
      >
        Responsabilités de l’utilisateur
      </h2>

      <ul className="max-w-3xl mx-auto list-disc list-inside space-y-4 text-lg sm:text-xl leading-relaxed text-gray-800 font-light">
        {userResponsibilitiesList.map((responsibility, idx) => (
          <ResponsibilityItem key={idx} text={responsibility} />
        ))}
      </ul>
    </section>
  );
};

export default UserResponsibilities;
