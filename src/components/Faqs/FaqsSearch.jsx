"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "Qu’est-ce que le Cabinet Médical ?",
    answer:
      "Le Cabinet Médical est un cabinet de proximité à Cotonou proposant l’ORL, la chirurgie cervico-faciale et la médecine générale, avec un accueil 7j/7 de 08h00 à 18h00.",
  },
  {
    question: "Comment prendre rendez-vous au cabinet ?",
    answer:
      "Réservez en ligne depuis notre site, par téléphone au +229 01 00 00 00 00 ou par WhatsApp. Choisissez la spécialité, la date et le créneau souhaités.",
  },
  {
    question: "Le cabinet propose-t-il des téléconsultations ?",
    answer:
      "Certaines situations peuvent être abordées en téléconsultation. Contactez le secrétariat pour vérifier si votre demande s’y prête.",
  },
  {
    question: "Quelles assurances sont acceptées ?",
    answer:
      "Le cabinet travaille avec plusieurs assurances et mutuelles. Vérifiez votre prise en charge auprès de l’accueil avant votre consultation.",
  },
  {
    question: "Les médecins du cabinet sont-ils qualifiés ?",
    answer:
      "Oui, tous nos praticiens sont diplômés et expérimentés dans leur spécialité.",
  },
  {
    question: "Puis-je accéder à mon dossier patient ?",
    answer:
      "Oui, vos informations médicales sont accessibles de manière sécurisée depuis votre espace patient.",
  },
  {
    question: "Quelles spécialités sont couvertes ?",
    answer:
      "ORL, chirurgie cervico-faciale, médecine générale et suivi, ainsi que des bilans de santé et les urgences légères.",
  },
  {
    question: "Le cabinet est-il ouvert le week-end ?",
    answer:
      "Oui, le cabinet accueille les patients 7 jours sur 7, de 08h00 à 18h00.",
  },
  {
    question: "Comment sont protégées mes données ?",
    answer:
      "Nous appliquons des mesures de sécurité strictes et ne partageons vos informations qu’avec les professionnels impliqués dans votre prise en charge.",
  },
  {
    question: "Puis-je annuler ou modifier mon rendez-vous ?",
    answer:
      "Oui, prévenez-nous au moins 24 heures avant par téléphone ou WhatsApp afin de libérer le créneau.",
  },
  {
    question: "Que faire en cas d’urgence vitale ?",
    answer:
      "En cas d’urgence vitale, contactez immédiatement les secours. Le cabinet prend en charge les urgences légères pendant ses horaires d’ouverture.",
  },
];

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ borderRadius: 8 }}
      className="border border-gray-300 rounded-md mb-3 shadow-sm"
    >
      <button
        onClick={onClick}
        className="w-full text-left px-5 py-4 flex justify-between items-center bg-white hover:bg-gray-50 focus:outline-none"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.question}`}
      >
        <span className="text-gray-900 font-semibold text-lg">{faq.question}</span>
        {isOpen ? (
          <FaChevronUp className="text-gray-600" />
        ) : (
          <FaChevronDown className="text-gray-600" />
        )}
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            id={`faq-answer-${faq.question}`}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto", marginTop: 8, padding: "0 20px 20px 20px" },
              collapsed: { opacity: 0, height: 0, marginTop: 0, padding: "0 20px 0 20px" },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-gray-700 text-base leading-relaxed"
          >
            {faq.answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FaqsSearch() {
  const [visibleCount, setVisibleCount] = useState(5);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleShowMore = () => {
    setVisibleCount(visibleCount === 5 ? faqs.length : 5);
    setOpenIndex(null); // close any open faq when toggling
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
        Questions fréquentes about <span className="text-blue-700">Cabinet Médical</span>
      </h2>

      <div>
        {faqs.slice(0, visibleCount).map((faq, idx) => (
          <FAQItem
            key={idx}
            faq={faq}
            isOpen={openIndex === idx}
            onClick={() => toggleOpen(idx)}
          />
        ))}
      </div>

      <div className="text-center mt-6">
        <button
          onClick={toggleShowMore}
          className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
          aria-expanded={visibleCount !== 5}
        >
          {visibleCount === 5 ? "Voir plus" : "Voir moins"}
          <span className="ml-2">
            {visibleCount === 5 ? <FaChevronDown /> : <FaChevronUp />}
          </span>
        </button>
      </div>
    </section>
  );
}
