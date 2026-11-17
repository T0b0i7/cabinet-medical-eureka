"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FILTERS = [
  {
    id: "orl",
    label: "ORL",
    descriptionTitle: "Consultations ORL",
    description: [
      "Prise en charge des affections de l’oreille, du nez et de la gorge : otites, sinusites, troubles de l’audition, vertiges, ronflements et troubles du sommeil.",
      "Le Dr Romuald Adjakpa réalise un examen complet et vous propose un traitement adapté, médical ou chirurgical lorsque cela est nécessaire.",
      "Une consultation ORL permet aussi de dépister précocement les troubles auditifs et respiratoires chez l’adulte comme chez l’enfant.",
    ],
    highlights: [
      "Examens de l’audition et du nez",
      "Prise en charge des infections ORL",
      "Suivi des enfants et des adultes",
    ],
    image:
      "https://images.unsplash.com/photo-1496048212478-63d05be2a8bb?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "chirurgie",
    label: "Chirurgie cervico-faciale",
    descriptionTitle: "Chirurgie cervico-faciale",
    description: [
      "Avis et suivi chirurgical des pathologies de la face, du cou et des voies aériennes supérieures.",
      "Le Dr Isidore Aholou assure l’évaluation préopératoire, l’intervention et le suivi postopératoire dans un cadre sécurisé.",
      "Une prise en charge personnalisée, avec des explications claires à chaque étape de votre parcours de soins.",
    ],
    highlights: [
      "Avis chirurgical spécialisé",
      "Préparation et suivi postopératoire",
      "Coordination avec votre médecin traitant",
    ],
    image:
      "https://images.unsplash.com/photo-1640876777002-badf6aee5bcc?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "medecine-generale",
    label: "Médecine générale",
    descriptionTitle: "Médecine générale & suivi",
    description: [
      "Consultations de médecine générale pour les adultes et les enfants : fièvre, douleurs, infections, fatigue, bilans de santé.",
      "Le Dr Sylvie Dossou-Yovo assure le suivi de vos maladies chroniques et vous oriente vers le spécialiste adapté si besoin.",
      "Des conseils de prévention et un accompagnement de proximité, 7 jours sur 7.",
    ],
    highlights: [
      "Consultations adultes et enfants",
      "Suivi des maladies chroniques",
      "Bilans et conseils de prévention",
    ],
    image:
      "https://plus.unsplash.com/premium_photo-1744347378317-04951e5f96bf?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function PremiumFilters() {
  const [activeFilter, setActiveFilter] = useState("orl");
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  const currentFilter = FILTERS.find((filter) => filter.id === activeFilter);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.getBoundingClientRect().height);
    }
  }, [activeFilter]);

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 select-none">
      {/* Section Title */}
      <h2 className="mb-12 text-center text-4xl font-extrabold text-gray-900">
        Nos <span className="text-blue-600">spécialités</span>
      </h2>

      {/* Filter Buttons */}
      <div className="mb-12 flex flex-wrap justify-center gap-8">
        {FILTERS.map(({ id, label }) => {
          const isSelected = id === activeFilter;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setActiveFilter(id)}
              aria-pressed={isSelected}
              aria-label={`Sélectionner la spécialité ${label}`}
              className={`relative rounded-full px-6 py-3 font-semibold text-lg transition-colors duration-300 whitespace-nowrap
                ${
                  isSelected
                    ? "bg-blue-600 shadow-lg text-white"
                    : "bg-indigo-100 text-blue-600 hover:bg-indigo-200"
                }
              `}
            >
              {label}
              {isSelected && (
                <span className="absolute -bottom-3 left-1/2 h-1 w-4 -translate-x-1/2 rounded-full bg-blue-600" />
              )}
            </button>
          );
        })}
      </div>

      {/* Content & Image */}
      <div className="flex flex-col items-start gap-12 md:flex-row">
        {/* Text Content */}
        <motion.div
          key={currentFilter.id}
          ref={contentRef}
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          aria-live="polite"
        >
          <h3 className="text-3xl font-bold text-gray-900">
            {currentFilter.descriptionTitle}
          </h3>

          {currentFilter.description.map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-gray-700 text-lg">
              {paragraph}
            </p>
          ))}

          {currentFilter.highlights && (
            <ul className="space-y-1 list-inside list-disc font-semibold text-blue-700">
              {currentFilter.highlights.map((highlight, i) => (
                <li key={i} className="text-lg">
                  {highlight}
                </li>
              ))}
            </ul>
          )}
        </motion.div>

        {/* Image Panel */}
        <motion.div
          aria-hidden="true"
          className="md:w-1/2 flex-shrink-0 overflow-hidden rounded-xl border border-gray-200 shadow-lg"
          style={{ height: contentHeight }}
          animate={{ height: contentHeight }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentFilter.id}
              src={currentFilter.image}
              alt={`Consultation ${currentFilter.label}`}
              loading="lazy"
              draggable={false}
              className="h-full w-full rounded-xl object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
