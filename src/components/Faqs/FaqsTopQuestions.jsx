"use client";

import React from "react";

const topQuestions = [
  "Qu’est-ce que le Cabinet Médical ?",
  "Comment prendre rendez-vous au Cabinet Médical ?",
  "Le cabinet propose-t-il des téléconsultations ?",
  "Quelles assurances sont acceptées ?",
  "Les médecins du cabinet sont-ils qualifiés ?",
];

export default function FaqsTopQuestions() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Questions fréquentes
      </h3>

      <ul className="space-y-4">
        {topQuestions.map((question, idx) => (
          <li
            key={idx}
            className="bg-white border border-gray-300 rounded-md shadow-sm p-5 hover:shadow-md transition-shadow cursor-pointer"
            tabIndex={0} // accessible focus
            role="button"
            aria-label={`Voir la réponse à la question : ${question}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                // Could add onClick behavior here if needed
              }
            }}
          >
            <p className="text-gray-800 font-medium text-lg">{question}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
