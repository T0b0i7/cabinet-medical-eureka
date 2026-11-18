"use client";

import React from "react";
import { motion } from "framer-motion";

const containerAnim = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AboutMission() {
  // Click handler for button — simple feedback alert for now
  const handleLearnMoreClick = () => {
    alert("Merci de l’intérêt porté à notre mission !");
  };

  return (
    <section
      aria-labelledby="about-mission-title"
      className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-20 bg-white rounded-3xl shadow-lg my-[-50px]"
    >
      <motion.div
        className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerAnim}
      >
        {/* Left side: Mission image */}
        <motion.div
          className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-xl"
          style={{ boxShadow: "0 15px 30px rgba(29, 78, 216, 0.25)" }}
          variants={itemAnim}
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1673953510107-d5aee40d80a7?w=600&auto=format&fit=crop&q=80"
            alt="Illustration de la mission du cabinet"
            className="w-full h-auto object-cover rounded-2xl"
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        </motion.div>

        {/* Right side: Textual content */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          variants={itemAnim}
        >
          <motion.h1
            id="about-mission-title"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 drop-shadow-sm mb-8"
          >
            Notre <span className="text-blue-700">mission</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            Notre mission est d’offrir des soins de qualité, accessibles et humains aux familles de Cotonou et de ses environs. Nous mettons le plateau technique et l’écoute au service de chaque patient.
          </motion.p>

          <motion.ul
            className="list-disc list-inside space-y-4 text-gray-700 text-base sm:text-lg max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          >
            <li>Une écoute attentive et des soins adaptés à chaque patient.</li>
            <li>Un plateau technique moderne pour des diagnostics fiables.</li>
            <li>Un engagement constant pour la santé de la communauté.</li>
            <li>Une amélioration continue de la qualité de la prise en charge.</li>
          </motion.ul>

          <motion.button
            className="mt-12 px-12 py-4 bg-blue-700 text-white font-semibold rounded-2xl shadow-lg transition-shadow focus:outline-none focus:ring-4 focus:ring-blue-400 max-w-max"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 20px rgba(29, 78, 216, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLearnMoreClick}
            aria-label="En savoir plus sur notre mission"
          >
            En savoir plus
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
