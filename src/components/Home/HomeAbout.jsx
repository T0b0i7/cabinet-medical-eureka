"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.7 },
  },
};

const scaleFade = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ease: "easeOut", duration: 0.8 },
  },
};

export default function HomeAbout() {
  const featuresList = [
    "Ouvert 7 jours sur 7, de 08h00 à 18h00",
    "Parking privé sécurisé pour les patients",
    "Salle d’allaitement dédiée aux mamans et nourrissons",
    "Plateau technique moderne et prise en charge sur rendez-vous",
  ];

  return (
    <section
      aria-label="About Section"
      className="bg-white py-20 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto mb-[-30px]"
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center min-h-[520px]"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Image side */}
        <motion.div variants={scaleFade} className="w-full">
          <img
            src="https://plus.unsplash.com/premium_photo-1681842906523-f27efd0d1718?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Healthcare Professionals"
            loading="lazy"
            className="w-full rounded-lg object-cover h-[320px] sm:h-[400px] md:h-[480px]"
          />
        </motion.div>

        {/* Text side */}
        <motion.div variants={staggerContainer} className="text-left">
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-extrabold text-blue-700 mb-6"
          >
            Engagés pour <span className="text-black">des soins d’exception</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="max-w-lg text-gray-900 text-base sm:text-lg font-light mb-8"
          >
            Au Cabinet Médical, chaque patient bénéficie d’une écoute
            attentive et de soins adaptés. Nos spécialités ORL, chirurgie
            cervico-faciale et médecine générale sont proposées dans un cadre
            moderne, à Cotonou.
          </motion.p>

          <motion.ul
            variants={staggerContainer}
            className="max-w-md space-y-4 font-semibold text-gray-800"
          >
            {featuresList.map((feature, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                className="flex items-center gap-3"
              >
                <span className="text-blue-700 text-xl select-none">✓</span>
                <span>{feature}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-10">
            <Link
              href="/services"
              className="inline-block bg-blue-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            >
              Découvrir nos spécialités
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
