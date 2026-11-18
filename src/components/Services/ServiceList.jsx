"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaStethoscope,
  FaHeartbeat,
  FaSyringe,
  FaUserMd,
  FaPills,
  FaXRay,
  FaBaby,
  FaFemale,
  FaTooth,
  FaBone,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaStethoscope className="text-blue-600" size={32} aria-hidden="true" />,
    title: "Consultation de médecine générale",
    description:
      "Consultations courantes, bilans de santé et suivi personnalisé pour toute la famille. Tarif : 5 000 FCFA.",
  },
  {
    id: 2,
    icon: <FaHeartbeat className="text-blue-600" size={32} aria-hidden="true" />,
    title: "ORL",
    description:
      "Consultations spécialisées : troubles de l’audition, sinusites, vertiges et pathologies ORL. Tarif : 10 000 à 15 000 FCFA.",
  },
  {
    id: 3,
    icon: <FaSyringe className="text-blue-600" size={32} aria-hidden="true" />,
    title: "Vaccination",
    description:
      "Vaccinations et rappels administrés par des professionnels qualifiés.",
  },
  {
    id: 4,
    icon: <FaUserMd className="text-blue-600" size={32} aria-hidden="true" />,
    title: "Orientation spécialisée",
    description:
      "Orientation vers les spécialistes et les structures partenaires pour les cas complexes.",
  },
  {
    id: 5,
    icon: <FaPills className="text-blue-600" size={32} aria-hidden="true" />,
    title: "Pharmacie et ordonnances",
    description:
      "Conseils sur les ordonnances et accès aux médicaments essentiels.",
  },
  {
    id: 6,
    icon: <FaXRay className="text-blue-600" size={32} aria-hidden="true" />,
    title: "Radiologie et imagerie",
    description:
      "Explorations et examens complémentaires réalisés avec un plateau technique moderne.",
  },
  {
    id: 7,
    icon: <FaBaby className="text-blue-600" size={32} aria-hidden="true" />,
    title: "Pédiatrie",
    description:
      "Suivi du nourrisson et de l’enfant, vaccinations et accompagnement des parents. Tarif : 7 000 FCFA.",
  },
  {
    id: 8,
    icon: <FaFemale className="text-blue-600" size={32} aria-hidden="true" />,
    title: "Gynécologie-Obstétrique",
    description:
      "Suivi de grossesse, consultations gynécologiques et échographies. Tarif : 10 000 FCFA.",
  },
  {
    id: 9,
    icon: <FaTooth className="text-blue-600" size={32} aria-hidden="true" />,
    title: "Dentaire et stomatologie",
    description:
      "Détartrage, soins dentaires et conseils d’hygiène bucco-dentaire. Tarif : 10 000 FCFA.",
  },
  {
    id: 10,
    icon: <FaBone className="text-blue-600" size={32} aria-hidden="true" />,
    title: "Kinésithérapie",
    description:
      "Rééducation, prise en charge des douleurs et séances de mobilité. Tarif : 8 000 FCFA / séance.",
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.6 },
  },
};

const ServiceList = () => {
  return (
    <section
      role="region"
      aria-label="Prestations proposées"
      className="bg-white py-20 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Nos{" "}
            <span className="text-blue-700 underline decoration-blue-300 decoration-4 underline-offset-4">
              services
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Découvrez une gamme de services médicaux centrés sur le patient, pensés pour accompagner votre parcours de santé.
          </p>
        </header>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map(({ id, icon, title, description }) => (
            <motion.div
              key={id}
              variants={cardVariants}
              className="bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-xl p-6 shadow-md text-center flex flex-col items-center h-full border border-gray-200"
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

export default ServiceList;
