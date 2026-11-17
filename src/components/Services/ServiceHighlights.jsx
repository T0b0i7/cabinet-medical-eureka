"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaClinicMedical,
  FaMicroscope,
  FaBriefcaseMedical,
  FaProcedures,
  FaAmbulance,
  FaNotesMedical,
} from "react-icons/fa";

const highlights = [
  {
    id: 1,
    icon: <FaClinicMedical className="text-blue-600" size={32} aria-hidden="true" />,
    title: "Cabinet moderne",
    description: "Un cadre moderne et confortable, pensé pour les patients et leurs familles.",
  },
  {
    id: 2,
    icon: <FaMicroscope className="text-blue-600" size={32} aria-hidden="true" />,
    title: "Plateau technique",
    description: "Des explorations ORL et cervico-faciales réalisées avec un équipement récent.",
  },
  {
    id: 3,
    icon: <FaBriefcaseMedical className="text-blue-600" size={32} aria-hidden="true" />,
    title: "Matériel d’urgence",
    description: "Le matériel nécessaire pour prendre en charge rapidement les urgences légères.",
  },
  {
    id: 4,
    icon: <FaProcedures className="text-blue-600" size={32} aria-hidden="true" />,
    title: "Soins et suivi",
    description: "Un suivi attentif avant et après les soins, avec des conseils personnalisés.",
  },
  {
    id: 5,
    icon: <FaAmbulance className="text-blue-600" size={32} aria-hidden="true" />,
    title: "Transport sanitaire",
    description: "Orientation rapide vers les structures adaptées en cas d’urgence.",
  },
  {
    id: 6,
    icon: <FaNotesMedical className="text-blue-600" size={32} aria-hidden="true" />,
    title: "Dossier patient numérique",
    description: "Un dossier patient sécurisé et accessible depuis votre espace personnel.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ServiceHighlights = () => {
  return (
    <section
      role="region"
      aria-label="Points forts"
      className="bg-white py-20 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Service{" "}
            <span className="text-blue-700 underline decoration-blue-300 decoration-4 underline-offset-4">
              Highlights
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Découvrez les atouts qui distinguent notre cabinet et la qualité de nos soins.
          </p>
        </header>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {highlights.map(({ id, icon, title, description }) => (
            <motion.div
              key={id}
              variants={cardVariants}
              className="bg-white hover:bg-blue-50 transition-colors duration-300 rounded-xl p-6 shadow-md text-center flex flex-col items-center h-full border border-gray-200"
              tabIndex={0}
              aria-label={`${title}: ${description}`}
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
