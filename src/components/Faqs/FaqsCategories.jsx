"use client";

import React, { useState } from "react";
import {
  FaQuestionCircle,
  FaUserMd,
  FaFileMedical,
  FaHandsHelping,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const faqsByCategory = {
  1: [
    {
      id: 101,
      question: "Quelles spécialités propose le cabinet ?",
      answer:
        "Le Cabinet Médical propose l’ORL, la chirurgie cervico-faciale et la médecine générale, ainsi que des bilans de santé et la prise en charge des urgences légères.",
    },
    {
      id: 102,
      question: "Comment contacter le cabinet ?",
      answer:
        "Vous pouvez nous joindre au +229 01 00 00 00 00, par WhatsApp ou par e-mail à contact@votre-cabinet.bj, 7j/7 de 08h00 à 18h00.",
    },
  ],
  2: [
    {
      id: 201,
      question: "Comment prendre rendez-vous ?",
      answer:
        "Vous pouvez réserver en ligne depuis notre site, par téléphone ou directement par WhatsApp. Choisissez la spécialité, la date et le créneau qui vous conviennent.",
    },
    {
      id: 202,
      question: "Puis-je modifier ou annuler mon rendez-vous ?",
      answer:
        "Oui, vous pouvez modifier ou annuler votre rendez-vous en nous contactant au moins 24 heures avant l’heure prévue.",
    },
  ],
  3: [
    {
      id: 301,
      question: "Comment accéder à mon dossier patient ?",
      answer:
        "Vos informations médicales sont accessibles de manière sécurisée depuis votre espace patient après connexion.",
    },
    {
      id: 302,
      question: "Puis-je mettre à jour mes informations médicales ?",
      answer:
        "Oui, certaines informations peuvent être mises à jour depuis votre espace patient ou en contactant directement le cabinet.",
    },
  ],
  4: [
    {
      id: 401,
      question: "Quelles options d’accompagnement proposez-vous ?",
      answer:
        "Le cabinet vous accompagne dans la prise de rendez-vous, la préparation de votre consultation et le suivi de votre dossier.",
    },
    {
      id: 402,
      question: "Comment obtenir une aide financière ?",
      answer:
        "Les modalités de prise en charge Varient selon les assurances et les situations. Contactez l’accueil pour en discuter.",
    },
  ],
};

const categories = [
  {
    id: 1,
    icon: <FaQuestionCircle className="w-8 h-8 text-blue-900" />,
    title: "Questions générales",
    description:
      "Réponses aux questions courantes sur nos spécialités et notre organisation.",
  },
  {
    id: 2,
    icon: <FaUserMd className="w-8 h-8 text-blue-900" />,
    title: "Rendez-vous",
    description: "Comment réserver, modifier ou annuler un rendez-vous.",
  },
  {
    id: 3,
    icon: <FaFileMedical className="w-8 h-8 text-blue-900" />,
    title: "Dossier patient",
    description: "Accéder, mettre à jour ou transmettre vos informations médicales en toute sécurité.",
  },
  {
    id: 4,
    icon: <FaHandsHelping className="w-8 h-8 text-blue-900" />,
    title: "Accompagnement",
    description:
      "Découvrez les modalités d’accueil, de facturation et d’accompagnement des patients.",
  },
];

const faqItemVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.4 } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.3 } },
};

export default function FaqsCategories() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCategoryClick = (id) => {
    if (id === selectedCategory) {
      setSelectedCategory(null);
      setError("");
      return;
    }
    setError("");
    setLoading(true);
    setSelectedCategory(null);

    setTimeout(() => {
      if (Math.random() < 0.1) {
        setError("Impossible de charger la FAQ. Veuillez réessayer.");
        setLoading(false);
        setSelectedCategory(null);
      } else {
        setSelectedCategory(id);
        setLoading(false);
      }
    }, 800);
  };

  return (
    <section
      aria-label="Catégories de questions"
      className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-16"
    >
      <h2 className="text-3xl font-extrabold text-black mb-12 text-center select-text">
        Explorer les <span className="text-blue-900">catégories de FAQ</span>
      </h2>

      {/* Grid of perfectly square cards */}
      <div
        className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4"
        style={{ gridAutoRows: "1fr" }}
      >
        {categories.map(({ id, icon, title, description }) => (
          <article
            key={id}
            tabIndex={0}
            role="button"
            aria-pressed={selectedCategory === id}
            onClick={() => handleCategoryClick(id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleCategoryClick(id);
              }
            }}
            className={`cursor-pointer rounded-xl border p-5 sm:p-6 bg-white shadow-sm transition-transform focus:outline-none focus:ring-4 focus:ring-blue-300
              aspect-square flex flex-col items-center justify-center
              ${
                selectedCategory === id
                  ? "border-blue-900 shadow-lg scale-[1.04]"
                  : "border-gray-300 hover:shadow-lg hover:scale-[1.03]"
              }
            `}
          >
            <div className="mb-3 sm:mb-4">{icon}</div>
            <h3
              className="text-base sm:text-lg font-semibold text-gray-900 mb-1 text-center truncate"
              title={title}
            >
              {title}
            </h3>
            <p
              className="text-gray-700 font-light leading-snug text-xs sm:text-sm text-center"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                wordBreak: "break-word",
              }}
              title={description}
            >
              {description}
            </p>
          </article>
        ))}
      </div>

      {/* FAQ Details Panel */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-12">
        {loading && (
          <p className="text-center text-blue-900 font-semibold animate-pulse select-none">
            Chargement de la FAQ…
          </p>
        )}

        {error && (
          <p
            className="text-center text-red-700 font-semibold select-none"
            role="alert"
            tabIndex={-1}
          >
            {error}
          </p>
        )}

        <AnimatePresence initial={false}>
          {!loading && !error && selectedCategory && (
            <motion.div
              key={selectedCategory}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={faqItemVariants}
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                {categories.find((cat) => cat.id === selectedCategory)?.title} FAQs
              </h3>
              <dl className="space-y-6">
                {faqsByCategory[selectedCategory]?.map(({ id, question, answer }) => (
                  <div key={id} className="border-b border-gray-200 pb-4 last:border-none">
                    <dt className="font-semibold text-gray-900 mb-2">{question}</dt>
                    <dd className="text-gray-700 font-light leading-relaxed">{answer}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
