"use client";

import React from "react";
import { motion } from "framer-motion";

function ContactInfo() {
  return (
    <div className="flex flex-col space-y-3 text-gray-700 text-sm sm:text-base select-none">
      <ContactItem
        href="tel:+2290141608339"
        iconPath="M3 10h1l3 3-1.5 1.5a11 11 0 005 5L12 21l3-3 3-3v-1"
        label="+229 01 41 60 83 39"
      />
      <ContactItem
        href="mailto:contact@cabinet-eureka.bj"
        iconPath="M16 12H8m8 0v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6"
        label="contact@cabinet-eureka.bj"
      />
    </div>
  );
}

function ContactItem({ href, iconPath, label }) {
  return (
    <div className="flex items-center space-x-2 sm:space-x-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 sm:h-6 sm:w-6 text-blue-700 flex-shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
      </svg>
      <a
        href={href}
        className="hover:text-blue-700 transition-colors break-words"
      >
        {label}
      </a>
    </div>
  );
}

export default function PatientInfoFooter() {
  return (
    <motion.section
      aria-label="Informations patients"
      className="max-w-5xl mx-auto mt-16 px-4 sm:px-6 md:px-12 py-8 rounded-3xl bg-gradient-to-r from-white via-gray-50 to-white shadow-lg border border-gray-200"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        {/* Left side: Thank you message */}
        <motion.div
          className="max-w-lg text-center md:text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-blue-700 mb-2 select-none leading-tight">
            Merci de faire confiance au Cabinet Médical EURÊKA
          </h3>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            Votre santé et votre bien-être sont nos priorités. Nous vous
            accompagnons à chaque étape avec des soins attentifs et experts.
          </p>
        </motion.div>

        {/* Right side: Contact info and call-to-action */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 md:gap-12 mt-6 md:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <ContactInfo />

          <motion.button
            type="button"
            aria-label="Contactez votre équipe soignante"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg shadow-lg transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300 whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Contacter l’équipe soignante
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
