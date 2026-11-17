"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function AppointmentsEmptyState() {
  const animationControls = useAnimation();

  useEffect(() => {
    animationControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    });
  }, [animationControls]);

  // Handler placeholder for booking action
  const handleBookClick = () => {
    // TODO: Replace alert with real navigation or booking logic
    alert("Redirection vers le formulaire de rendez-vous…");
  };

  return (
    <motion.section
      role="region"
      aria-label="Aucun rendez-vous pour le moment"
      initial={{ opacity: 0, y: 15 }}
      animate={animationControls}
      className="mx-auto max-w-3xl my-[-50px] mb-0 flex flex-col items-center justify-center rounded-lg bg-white px-6 py-20 text-center"
    >
      {/* Simple illustrative SVG */}
      <svg
        className="mb-8 mx-auto h-32 w-32 text-blue-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 64 64"
        stroke="currentColor"
        strokeWidth={2}
      >
        <circle cx="32" cy="32" r="30" strokeOpacity="0.2" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 32h24M32 20v24M20 20l24 24"
        />
      </svg>

      {/* Main Heading */}
      <h2 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Aucun rendez-vous <span className="text-blue-600">pour le moment</span>
      </h2>

      {/* Supporting text */}
      <p className="mb-8 max-w-md text-base text-gray-600 sm:text-lg">
        Vous n’avez pas encore de rendez-vous. Commencez par planifier votre
        première consultation avec nos praticiens.
      </p>

      {/* Action button */}
      <button
        type="button"
        onClick={handleBookClick}
        className="rounded-lg bg-blue-700 px-8 py-3 font-semibold text-white shadow-md transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Prendre rendez-vous
      </button>
    </motion.section>
  );
}
