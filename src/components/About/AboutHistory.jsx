"use client";

import React from "react";
import { motion } from "framer-motion";

// Timeline data — each milestone with year, title, and description
const timelineData = [
  {
    year: "2005",
    title: "Fondation",
    description:
      "Le Cabinet Médical est né de la volonté d’offrir à Cotonou des soins spécialisés de proximité.",
  },
  {
    year: "2010",
    title: "Première étape",
    description:
      "Ouverture des consultations d’ORL et de médecine générale, avec une équipe pluridisciplinaire.",
  },
  {
    year: "2015",
    title: "Équipement moderne",
    description:
      "Installation d’un plateau technique moderne pour les explorations ORL et cervico-faciales.",
  },
  {
    year: "2020",
    title: "Rayonnement régional",
    description:
      "Développement du suivi spécialisé et des actes de chirurgie cervico-faciale.",
  },
  {
    year: "2023",
    title: "Engagement communautaire",
    description:
      "Ouverture 7j/7 et mise en place d’un accueil dédié aux familles, avec parking sécurisé et salle d’allaitement.",
  },
];

// Container animation controls for staggering children fade-in
const containerAnim = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
    },
  },
};

// Animation for each timeline event — slide in from left with fade
const eventAnim = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AboutHistory() {
  return (
    <section
      aria-label="Notre histoire"
      className="bg-white py-20 px-6 sm:px-12 max-w-7xl mx-auto my-[-50px] mb-[-80px]"
    >
      {/* Section header */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16 "
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
          Notre <span className="text-blue-600">histoire</span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg sm:text-xl font-light">
          Un parcours au service de la santé des familles de Cotonou.
        </p>
      </motion.div>

      {/* Timeline list container */}
      <motion.div
        className="relative max-w-4xl mx-auto "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerAnim}
      >
        {/* Vertical timeline line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 bg-blue-200 rounded h-full  " />

        {/* Timeline events list */}
        <ul className="space-y-16">
          {timelineData.map(({ year, title, description }, idx) => {
            // Alternate event placement left/right on larger screens
            const alignLeft = idx % 2 === 0;

            return (
              <motion.li
                key={year}
                className={`relative flex flex-col items-center sm:flex-row ${
                  alignLeft ? "sm:justify-start sm:pr-12" : "sm:justify-end sm:pl-12"
                }`}
                variants={eventAnim}
              >
                {/* Timeline dot */}
                <span
                  className="absolute left-1/2 top-4 sm:top-6 -translate-x-1/2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-lg"
                  aria-hidden="true"
                />

                {/* Content bubble */}
                <div
                  className={`bg-white border border-gray-200 rounded-xl shadow-lg p-6 max-w-[320px] w-full ${
                    alignLeft ? "sm:mr-auto sm:text-left" : "sm:ml-auto sm:text-right"
                  }`}
                >
                  <p className="text-sm text-blue-600 font-semibold">{year}</p>
                  <h3 className="mt-1 text-xl font-semibold text-gray-900">{title}</h3>
                  <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed">
                    {description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </motion.div>
    </section>
  );
}
