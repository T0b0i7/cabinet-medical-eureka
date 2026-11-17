"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

/**
 * Data: Doctor testimonials
 * Could be moved to a separate data file if reused elsewhere.
 */
const doctorTestimonials = [
  {
    id: 1,
    name: "Dr Chantal Houngbédji",
    specialty: "Oto-Rhino-Laryngologiste (ORL)",
    image:
      "https://images.unsplash.com/photo-1579165466949-3180a3d056d5?w=400&auto=format&fit=crop&q=60",
    rating: 5,
    feedback:
      "L’expertise et la bienveillance du Dr Chantal Houngbédji ont vraiment changé mon parcours de soins.",
  },
  {
    id: 2,
    name: "Dr Barthélémy Gnonlonfoun",
    specialty: "Chirurgien cervico-facial",
    image:
      "https://plus.unsplash.com/premium_photo-1661764895266-f0b195221b77?w=400&auto=format&fit=crop&q=60",
    rating: 4,
    feedback:
      "Grâce au Dr Isidore Aholou, j’ai reçu les meilleurs soins possibles. Je recommande !",
  },
  {
    id: 3,
    name: "Dr Sylvie Dossou-Yovo",
    specialty: "Médecin généraliste",
    image:
      "https://images.unsplash.com/photo-1587500154541-1cafd74f0efc?w=400&auto=format&fit=crop&q=60",
    rating: 5,
    feedback:
      "Le Dr Romuald Adjakpa est excellent avec les enfants et nous a mis parfaitement à l’aise.",
  },
  {
    id: 4,
    name: "Dr Romuald Adjakpa",
    specialty: "Médecin généraliste",
    image:
      "https://plus.unsplash.com/premium_photo-1661720509368-23b026d2667c?w=400&auto=format&fit=crop&q=60",
    rating: 5,
    feedback:
      "Je suis reconnaissant du professionnalisme du Dr Romuald Adjakpa et des excellents résultats obtenus.",
  },
];

/**
 * Animation presets
 */
const starAnimation = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: i * 0.1, duration: 0.3 },
  }),
};

const cardFadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/**
 * Star rating renderer
 */
function StarRating({ rating }) {
  return (
    <div className="flex justify-center mb-4" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={starAnimation}
          initial="hidden"
          animate={i < rating ? "visible" : "hidden"}
        >
          <FaStar
            size={20}
            color={i < rating ? "#ffb700" : "#D1D5DB"}
            aria-hidden="true"
          />
        </motion.span>
      ))}
    </div>
  );
}

/**
 * Individual doctor card
 */
function DoctorCard({ doctor, index }) {
  return (
    <motion.article
      className="flex flex-col bg-gray-50 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 border border-gray-200"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardFadeUp}
      transition={{ delay: index * 0.15 }}
    >
      <img
        src={doctor.image}
        alt={`Portrait of ${doctor.name}`}
        className="w-28 h-28 rounded-full object-cover mx-auto mb-5 shadow-md"
        loading="lazy"
        decoding="async"
      />

      <h3 className="text-xl font-semibold text-center">{doctor.name}</h3>
      <p className="text-center text-blue-700 font-medium mb-3">{doctor.specialty}</p>

      <StarRating rating={doctor.rating} />

      <p className="text-center text-gray-700 text-sm leading-relaxed flex-grow">
        “{doctor.feedback}”
      </p>
    </motion.article>
  );
}

/**
 * Main component
 */
export default function TestimonialsDoctors() {
  return (
    <section
      aria-labelledby="doctors-heading"
      className="bg-white text-gray-900 py-16 px-5 sm:px-8 md:px-12 my-15 mb-[-20px]"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="doctors-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 tracking-tight"
        >
          <span className="text-blue-700">Rencontrez nos</span> médecins
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {doctorTestimonials.map((doctor, idx) => (
            <DoctorCard key={doctor.id} doctor={doctor} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
