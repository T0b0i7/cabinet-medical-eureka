"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaClipboardList,
  FaUserCheck,
  FaStethoscope,
  FaFileMedical,
  FaNotesMedical,
  FaHome,
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaClipboardList className="text-blue-600" size={28} aria-hidden="true" />,
    title: "Étape 1 : Accueil",
    description: "Présentez-vous à l’accueil avec vos informations et vos antécédents médicaux.",
  },
  {
    id: 2,
    icon: <FaUserCheck className="text-blue-600" size={28} aria-hidden="true" />,
    title: "Étape 2 : Pré-consultation",
    description: "Les constantes vitales sont relevées et vos symptômes sont notés par l’équipe soignante.",
  },
  {
    id: 3,
    icon: <FaStethoscope className="text-blue-600" size={28} aria-hidden="true" />,
    title: "Étape 3 : Consultation",
    description: "Le praticien vous reçoit pour un examen détaillé et vous explique son diagnostic.",
  },
  {
    id: 4,
    icon: <FaFileMedical className="text-blue-600" size={28} aria-hidden="true" />,
    title: "Étape 4 : Examens complémentaires",
    description: "Les examens nécessaires sont réalisés ou prescrits selon votre situation.",
  },
  {
    id: 5,
    icon: <FaNotesMedical className="text-blue-600" size={28} aria-hidden="true" />,
    title: "Étape 5 : Ordonnance et plan de soins",
    description: "Vous recevez votre ordonnance et un plan de suivi adapté.",
  },
  {
    id: 6,
    icon: <FaHome className="text-blue-600" size={28} aria-hidden="true" />,
    title: "Étape 6 : Suivi",
    description: "Vous repartez avec les conseils nécessaires et une date de suivi si besoin.",
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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};

const PatientCareProcess = () => {
  return (
    <section
      role="region"
      aria-label="Parcours de soins"
      className="bg-white py-20 px-6 md:px-12 my-[-30px]"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Parcours{" "}
            <span className="text-blue-700 underline decoration-blue-300 decoration-4 underline-offset-4">
              de soins
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Un parcours simple et organisé pour garantir qualité, confort et rapidité à chaque patient.
          </p>
        </header>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {steps.map(({ id, icon, title, description }) => (
            <motion.article
              key={id}
              variants={itemVariants}
              className="bg-gray-50 hover:bg-blue-50 transition-colors duration-300 rounded-xl p-6 shadow-md flex flex-col items-center text-center border border-gray-200"
              tabIndex={0}
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PatientCareProcess;
