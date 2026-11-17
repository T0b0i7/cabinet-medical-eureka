"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaStethoscope,
  FaHeartbeat,
  FaNotesMedical,
  FaUserNurse,
  FaSyringe,
  FaCapsules,
} from "react-icons/fa";

const serviceItems = [
  {
    id: 1,
    icon: <FaStethoscope size={36} className="text-blue-600" />,
    title: "Médecine générale",
    description:
      "Consultations courantes, bilans de santé et suivi personnalisé pour toute la famille.",
  },
  {
    id: 2,
    icon: <FaHeartbeat size={36} className="text-red-500" />,
    title: "ORL",
    description:
      "Consultations spécialisées : audition, sinusites, vertiges et pathologies ORL.",
  },
  {
    id: 3,
    icon: <FaNotesMedical size={36} className="text-green-600" />,
    title: "Chirurgie cervico-faciale",
    description:
      "Explorations et actes chirurgicaux spécialisés de la tête et du cou.",
  },
  {
    id: 4,
    icon: <FaUserNurse size={36} className="text-purple-600" />,
    title: "Soins infirmiers",
    description:
      "Soins infirmiers, pansements et accompagnement des patients après une intervention.",
  },
  {
    id: 5,
    icon: <FaSyringe size={36} className="text-indigo-600" />,
    title: "Vaccination",
    description:
      "Vaccinations et rappels pour protéger toute la famille.",
  },
  {
    id: 6,
    icon: <FaCapsules size={36} className="text-yellow-600" />,
    title: "Pharmacie",
    description:
      "Conseils et accès aux médicaments essentiels avec l’accompagnement du praticien.",
  },
];

const containerMotion = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
};

const itemMotion = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.12)" },
};

export default function AboutServices() {
  return (
    <section
      aria-label="Nos spécialités"
      className="bg-white py-20 px-6 sm:px-12 max-w-7xl mx-auto"
    >
      {/* Section header */}
      <motion.div
        className="max-w-3xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
          Nos <span className="text-blue-600">spécialités</span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg sm:text-xl font-light">
          Une gamme complète de soins adaptés à vos besoins.
        </p>
      </motion.div>

      {/* Services grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerMotion}
      >
        {serviceItems.map(({ id, icon, title, description }) => (
          <motion.article
            key={id}
            className="bg-gray-50 rounded-2xl p-8 flex flex-col items-center text-center cursor-default select-none border border-gray-200"
            variants={itemMotion}
            whileHover="hover"
            tabIndex={0}
            aria-label={title}
          >
            <div className="mb-6">{icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm sm:text-base">{description}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
