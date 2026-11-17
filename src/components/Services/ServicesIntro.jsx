"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.8, staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.6 },
  },
};

const ServicesIntro = () => {
  useEffect(() => {
    const heading = document.getElementById("services-intro-heading");
    if (heading) heading.focus({ preventScroll: true });
  }, []);

  return (
    <section
      role="region"
      aria-label="Introduction aux spécialités"
      className="bg-gray-50 py-20 px-6 md:px-12 overflow-hidden my-[-50px]"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h2
          id="services-intro-heading"
          tabIndex={-1}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500 rounded"
          variants={itemVariants}
        >
          Des{" "}
          <span className="text-blue-700 underline decoration-blue-300 decoration-4 underline-offset-4">
            soins spécialisés
          </span>{" "}
          adaptés à vos besoins
        </motion.h2>

        <motion.p
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-700 font-light leading-relaxed tracking-wide"
          variants={itemVariants}
        >
          Nous croyons en une santé accessible, humaine et personnalisée. Que vous veniez
          pour un contrôle de routine, une prévention ou un traitement spécialisé,
          notre équipe est à votre écoute avec compétence et bienveillance.
        </motion.p>

        <motion.p
          className="mt-4 text-base sm:text-lg text-gray-600 font-light leading-relaxed"
          variants={itemVariants}
        >
          Notre objectif dépasse le simple traitement : c’est votre bien-être global. Une expérience de soins centrée sur vous.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ServicesIntro;
