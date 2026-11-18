"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const FAQ_DATA = [
  {
    id: 1,
    question: "Quelles spécialités propose le cabinet ?",
    answer:
      "Le Cabinet Médical propose l’ORL, la chirurgie cervico-faciale et la médecine générale, ainsi que des bilans de santé et la prise en charge des urgences légères.",
  },
  {
    id: 2,
    question: "Comment prendre rendez-vous ?",
    answer:
      "Cliquez sur le bouton « Prendre rendez-vous » de notre site, appelez-nous au +229 01 00 00 00 00 ou écrivez-nous sur WhatsApp. Vous choisissez la spécialité, la date et le créneau.",
  },
  {
    id: 3,
    question: "Acceptez-vous les assurances ?",
    answer:
      "Le cabinet travaille avec plusieurs assurances et mutuelles. Contactez l’accueil pour vérifier votre prise en charge.",
  },
  {
    id: 4,
    question: "Quels sont les horaires d’ouverture ?",
    answer:
      "Le cabinet est ouvert 7 jours sur 7, de 08h00 à 18h00.",
  },
  {
    id: 5,
    question: "Puis-je demander un renouvellement d’ordonnance ?",
    answer:
      "Oui, les patients suivis peuvent demander un renouvellement d’ordonnance auprès du secrétariat, après avis du praticien.",
  },
  {
    id: 6,
    question: "Quelles mesures d’hygiène sont appliquées ?",
    answer:
      "Nous appliquons des protocoles stricts de désinfection, aérons les salles et respectons les règles d’hygiène pour la sécurité de tous.",
  },
];

// Animation variants for the container and individual items
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};

export default function HomeFAQ() {
  const [openId, setOpenId] = useState(null);
  const controls = useAnimation();
  const sectionRef = useRef(null);

  // Toggle the open FAQ 
  function toggleOpen(id) {
    setOpenId((current) => (current === id ? null : id));
  }

  // Start animation when the FAQ section scrolls into view
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [controls]);

  return (
    <section
      aria-labelledby="faq-heading"
      className="max-w-4xl mx-auto px-6 sm:px-10 py-16 mb-[-110px]"
      ref={sectionRef}
    >
      <motion.h2
        id="faq-heading"
        className="text-4xl font-extrabold text-gray-900 text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
        }}
      >
        Frequently Asked <span className="text-blue-700">Questions</span>
      </motion.h2>

      <motion.div
        className="space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {FAQ_DATA.map(({ id, question, answer }) => {
          const isOpen = openId === id;

          return (
            <motion.div
              key={id}
              className="border border-gray-300 rounded-lg shadow-sm overflow-hidden"
              variants={itemVariants}
            >
              <button
                onClick={() => toggleOpen(id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleOpen(id);
                  }
                }}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${id}`}
                id={`faq-header-${id}`}
                className="flex justify-between items-center w-full px-6 py-4 text-left font-semibold text-lg text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                <span>{question}</span>
                <motion.span
                  aria-hidden="true"
                  className="text-blue-600 font-extrabold text-2xl select-none"
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    id={`faq-panel-${id}`}
                    role="region"
                    aria-labelledby={`faq-header-${id}`}
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto", marginTop: 8 },
                      collapsed: { opacity: 0, height: 0, marginTop: 0 },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-6 pb-6 text-gray-700 overflow-hidden"
                    style={{ overflow: "hidden" }}
                  >
                    <p className="leading-relaxed">{answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
