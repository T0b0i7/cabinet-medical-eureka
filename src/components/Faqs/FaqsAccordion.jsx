"use client";

import React from "react";

const faqData = [
  {
    id: 1,
    question: "Quels services propose le Cabinet Médical ?",
    answer:
      "Le cabinet propose des consultations d’ORL, de chirurgie cervico-faciale et de médecine générale, des bilans de santé, le suivi des maladies chroniques et la prise en charge des urgences légères.",
  },
  {
    id: 2,
    question: "Comment prendre ou modifier un rendez-vous ?",
    answer:
      "Vous pouvez réserver ou modifier un rendez-vous en ligne, par téléphone au +229 01 00 00 00 00 ou par WhatsApp, 7j/7 de 08h00 à 18h00.",
  },
  {
    id: 3,
    question: "Puis-je accéder à mon dossier patient en ligne ?",
    answer:
      "Oui, vos informations médicales sont accessibles de façon sécurisée depuis votre espace patient après connexion.",
  },
  {
    id: 4,
    question: "Quels moyens de paiement et assurances acceptez-vous ?",
    answer:
      "Le cabinet accepte les paiements en espèces et par mobile money, ainsi que plusieurs assurances et mutuelles. Contactez l’accueil pour vérifier votre prise en charge.",
  },
  {
    id: 5,
    question: "Comment obtenir de l’aide pour la facturation ?",
    answer:
      "Notre équipe d’accueil vous accompagne pour toute question relative aux factures, aux remboursements et aux modalités de prise en charge.",
  },
];

export default function FaqsAccordion() {
  return (
    <section
      aria-label="Questions fréquentes"
      className="max-w-3xl mx-auto px-6 py-16 my-[-30px]"
    >
      <h2 className="text-4xl font-extrabold text-gray-900 mb-14 text-center select-text">
        <span className="text-blue-700">Questions</span> fréquentes
      </h2>

      <div className="divide-y divide-gray-300">
        {faqData.map(({ id, question, answer }) => (
          <article key={id} className="py-6">
            <h3
              className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug mb-3 select-text"
              tabIndex={0}
              aria-label={`Question: ${question}`}
            >
              {question}
            </h3>
            <p
              className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-prose select-text"
              tabIndex={0}
              aria-label={`Answer: ${answer}`}
            >
              {answer}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
