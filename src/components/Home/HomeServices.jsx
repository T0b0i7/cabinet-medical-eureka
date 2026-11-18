"use client";

import React from "react";
import Link from "next/link";
import {
  FaStethoscope,
  FaHeartbeat,
  FaUserMd,
  FaCapsules,
  FaXRay,
  FaBriefcaseMedical,
  FaBaby,
  FaFemale,
} from "react-icons/fa";
import { motion } from "framer-motion";


const MotionLink = motion(
  React.forwardRef(({ href, children, ...rest }, ref) => (
    <Link href={href} ref={ref} {...rest}>
      {children}
    </Link>
  ))
);

const services = [
  {
    title: "Oto-Rhino-Laryngologie (ORL)",
    description:
      "Consultations spécialisées, troubles de l’audition, sinusites, vertiges et pathologies ORL.",
    icon: <FaHeartbeat className="text-4xl text-red-600" />,
  },
  {
    title: "Chirurgie Cervico-Faciale",
    description:
      "Explorations et actes chirurgicaux spécialisés de la tête et du cou.",
    icon: <FaUserMd className="text-4xl text-emerald-700" />,
  },
  {
    title: "Médecine Générale & Suivi",
    description:
      "Consultations courantes, bilans de santé et prise en charge des urgences légères.",
    icon: <FaStethoscope className="text-4xl text-blue-700" />,
  },
  {
    title: "Pédiatrie",
    description:
      "Suivi du nourrisson et de l’enfant, vaccinations et conseils aux parents.",
    icon: <FaBaby className="text-4xl text-pink-600" />,
  },
  {
    title: "Gynécologie-Obstétrique",
    description:
      "Suivi de grossesse, consultations gynécologiques et échographies.",
    icon: <FaFemale className="text-4xl text-purple-600" />,
  },
  {
    title: "Cardiologie",
    description:
      "Dépistage de l’hypertension, électrocardiogramme et bilan cardiovasculaire.",
    icon: <FaHeartbeat className="text-4xl text-rose-600" />,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeInOut" } },
};

const HomeServices = () => {
  return (
    <section
      className="flex flex-col justify-center items-center bg-white px-6 md:px-12 lg:px-24 my-20"
      style={{ textAlign: "center" }}
      aria-label="Nos spécialités Spécialités Section"
    >
      {/* Heading & Paragraph Container */}
      <motion.div
        className="max-w-4xl mb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-sm"
          style={{ color: "#1D4ED8" }}
          variants={textVariants}
        >
          Nos spécialités <span style={{ color: "#000" }}>Spécialités</span>
        </motion.h2>

        <motion.p
          className="mt-5 text-lg sm:text-xl md:text-2xl max-w-xl mx-auto md:mx-0 font-light"
          style={{ color: "#222" }}
          variants={textVariants}
          transition={{ delay: 0.2 }}
        >
          Oto-rhino-laryngologie, chirurgie cervico-faciale et médecine
          générale : une prise en charge complète pour toute la famille.
        </motion.p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="relative group bg-white border border-gray-300 rounded-3xl p-7 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer"
            variants={itemVariants}
            whileHover="hover"
            tabIndex={0}
            role="button"
            aria-label={`Service: ${service.title}`}
          >
            <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-70 transition-opacity duration-500 rounded-3xl"></div>
            <div className="relative z-10 flex flex-col items-start">
              <div className="mb-5">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-base">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Explore All Services Button */}
      <motion.div
        className="mt-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <MotionLink
          href="/services"
          className="inline-block bg-blue-700 text-white hover:bg-blue-800 transition-colors duration-300 font-semibold px-10 py-4 rounded-2xl shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
          variants={buttonVariants}
          whileHover="hover"
          aria-label="Découvrir toutes les spécialités"
          tabIndex={0}
        >
          Découvrir toutes les spécialités
        </MotionLink>
      </motion.div>
    </section>
  );
};

export default HomeServices;
