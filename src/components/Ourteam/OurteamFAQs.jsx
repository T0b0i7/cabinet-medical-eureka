"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqList = [
  {
    question: "Qui compose l’équipe du cabinet ?",
    answer:
      "Le cabinet réunit des médecins ORL, un chirurgien cervico-facial, des généralistes et une équipe d’accueil et de soins.",
  },
  {
    question: "Qu’est-ce qui distingue votre équipe ?",
    answer:
      "Une équipe pluridisciplinaire, disponible 7j/7, qui coordonne chaque étape de votre prise en charge.",
  },
  {
    question: "Recevez-vous les patients venus de l’extérieur ?",
    answer:
      "Oui, le cabinet accueille les patients de Cotonou et de tout le Bénin, ainsi que les visiteurs de passage.",
  },
  {
    question: "Comment rejoindre votre équipe ?",
    answer:
      "Vous pouvez adresser votre candidature à contact@votre-cabinet.bj.",
  },
  {
    question: "Quelles sont vos spécialités médicales ?",
    answer:
      "ORL, chirurgie cervico-faciale et médecine générale, avec un accompagnement personnalisé.",
  },
];

export default function OurteamFAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      aria-label="Questions fréquentes about Notre équipe"
      className="relative max-w-5xl mx-auto px-4 sm:px-8 py-12 my-[-30px] mb-0"
    >
      {/* Background layer */}
      <div className="absolute inset-0 bg-white rounded-3xl"></div>

      {/* Foreground content */}
      <div className="relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-600 mb-10">
          <span className="text-black">Notre équipe</span> FAQs
        </h2>

        <ul className="space-y-4">
          {faqList.map(({ question, answer }, i) => {
            const isOpen = activeIndex === i;

            return (
              <li
                key={i}
                className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                  onClick={() => handleToggle(i)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left"
                >
                  <span className="text-lg sm:text-xl font-semibold text-gray-800">
                    {question}
                  </span>
                  {isOpen ? (
                    <FiMinus className="text-blue-700 text-2xl" aria-hidden="true" />
                  ) : (
                    <FiPlus className="text-blue-700 text-2xl" aria-hidden="true" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      role="region"
                      aria-labelledby={`faq-question-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-600 text-base leading-relaxed">
                        {answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
