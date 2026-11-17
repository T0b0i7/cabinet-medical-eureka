"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

// FAQs Data
const faqs = [
  {
    question: "Comment sélectionnez-vous les témoignages ?",
    answer:
      "Nous publions des témoignages qui reflètent des expériences réelles de patients, en privilégiant l’authenticité et la pertinence par rapport à nos services.",
  },
  {
    question: "Puis-je partager mon propre témoignage ?",
    answer:
      "Bien sûr ! Nous serons ravis de vous lire. Utilisez le formulaire de contact du site pour nous transmettre votre témoignage.",
  },
  {
    question: "Les témoignages sont-ils vérifiés ?",
    answer:
      "Oui — chaque témoignage est vérifié afin d’en garantir l’authenticité avant sa publication.",
  },
  {
    question: "À quelle fréquence mettez-vous à jour les témoignages ?",
    answer:
      "Nous les mettons à jour régulièrement pour partager les retours les plus récents de nos patients.",
  },
  {
    question: "Puis-je réutiliser un témoignage de votre site ?",
    answer:
      "Contactez-nous au préalable pour obtenir une autorisation et garantir le respect des règles de confidentialité.",
  },
];

const TestimonialsFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      aria-label="Testimonials Questions fréquentes"
      className="relative max-w-5xl mx-auto px-4 sm:px-8 py-12"
    >
      {/* Card-like Background */}
      <div className="absolute inset-0 bg-white rounded-3xl shadow-xl pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-800 mb-12">
          <span className="text-black">Testimonials</span> FAQs
        </h2>

        <ul className="space-y-5">
          {faqs.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <li
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-header-${index}`}
                  className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none  rounded-2xl"
                >
                  <span className="text-lg sm:text-xl font-semibold text-gray-800">
                    {item.question}
                  </span>
                  {isOpen ? (
                    <FiMinus className="text-blue-700 text-2xl shrink-0" />
                  ) : (
                    <FiPlus className="text-blue-700 text-2xl shrink-0" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-header-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-700 text-base leading-relaxed">
                        {item.answer}
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
};

export default TestimonialsFAQ;
