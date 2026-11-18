'use client';

import React from 'react';
import { motion } from 'framer-motion';

const emergencySteps = [
  {
    title: 'Restez calme',
    description:
      'Respirez profondément pour garder votre calme et agir avec discernement.',
  },
  {
    title: 'Appelez le cabinet',
    description: 'Contactez immédiatement le cabinet au +229 01 00 00 00 00.',
  },
  {
    title: 'Donnez les détails',
    description:
      'Décrivez clairement la situation, le lieu et les symptômes observés.',
  },
  {
    title: 'Aidez si possible',
    description: 'Apportez une aide adaptée sans vous mettre en danger.',
  },
  {
    title: 'Suivez les consignes',
    description: 'Suivez attentivement les recommandations des professionnels de santé.',
  },
];

// Container animation to stagger children animations naturally
const listContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

// Each step fades up smoothly
const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const EmergencySteps = () => {
  return (
    <section
      aria-label="Les bons réflexes en cas d’urgence"
      className="bg-white text-black py-12 px-6 sm:px-12 md:px-20 lg:px-32 my-[-30px]"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-blue-700 mb-10 leading-tight text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="text-black">Les bons réflexes</span> en cas d’urgence
        </motion.h2>

        <motion.ol
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={listContainerVariants}
        >
          {emergencySteps.map(({ title, description }, idx) => (
            <motion.li
              key={idx}
              className="flex items-start gap-6"
              aria-label={`Étape ${idx + 1} : ${title}`}
              variants={listItemVariants}
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-white font-bold text-lg select-none">
                  {idx + 1}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-black mb-1">{title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
};

export default EmergencySteps;
