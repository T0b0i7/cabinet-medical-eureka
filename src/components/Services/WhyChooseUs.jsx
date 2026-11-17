"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaUserMd,
  FaStar,
  FaHospitalAlt,
  FaHeart,
  FaMicroscope,
  FaShieldAlt,
} from "react-icons/fa";

const reasons = [
  {
    id: 1,
    icon: <FaUserMd className="text-blue-600" size={28} aria-hidden="true" />,
    title: "Médecins qualifiés",
    description:
      "Une équipe expérimentée en ORL, chirurgie cervico-faciale et médecine générale, à votre écoute 7j/7.",
  },
  {
    id: 2,
    icon: <FaStar className="text-blue-600" size={28} aria-hidden="true" />,
    title: "Prise en charge reconnue",
    description:
      "Une prise en charge humaine et personnalisée, saluée par les patients du cabinet.",
  },
  {
    id: 3,
    icon: <FaHospitalAlt className="text-blue-600" size={28} aria-hidden="true" />,
    title: "Infrastructure moderne",
    description:
      "Un plateau technique moderne, un parking privé sécurisé et une salle d’allaitement dédiée.",
  },
  {
    id: 4,
    icon: <FaHeart className="text-blue-600" size={28} aria-hidden="true" />,
    title: "Une approche humaine",
    description:
      "Chaque patient est accueilli avec attention et respect, dans un cadre chaleureux.",
  },
  {
    id: 5,
    icon: <FaMicroscope className="text-blue-600" size={28} aria-hidden="true" />,
    title: "Diagnostics performants",
    description:
      "Des équipements récents pour des diagnostics fiables et une prise en charge rapide.",
  },
  {
    id: 6,
    icon: <FaShieldAlt className="text-blue-600" size={28} aria-hidden="true" />,
    title: "Confidentialité garantie",
    description:
      "Vos données de santé et votre intimité sont protégées par des protocoles stricts.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const WhyChooseUs = () => {
  return (
    <section
      role="region"
      aria-label="Pourquoi nous choisir"
      className="bg-white py-20 px-6 md:px-12 my-[-50px]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Pourquoi{" "}
            <span className="text-blue-700 underline decoration-blue-300 decoration-4 underline-offset-4">
              nous choisir
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Un équilibre rare entre technologie, empathie et expertise : découvrez
            l’attention profonde qui nous distingue.
          </p>
        </div>

        {/* Reason Cards */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.id}
              variants={item}
              className="bg-white hover:bg-blue-50 transition-all duration-300 rounded-xl p-6 shadow-md text-center flex flex-col items-center border border-gray-200"
            >
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
