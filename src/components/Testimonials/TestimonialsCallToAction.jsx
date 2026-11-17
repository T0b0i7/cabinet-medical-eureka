"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Animated background circle component for reusability
 */
function FloatingCircle({ className, animationConfig }) {
  return (
    <motion.div
      className={className}
      animate={animationConfig.keyframes}
      transition={{
        duration: animationConfig.duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function TestimonialsCallToAction() {
  const handleTestimonialClick = () => {
    alert("Vous pouvez partager votre témoignage via le formulaire de contact");
    // In a real app, navigate to the testimonial form page here
  };

  return (
    <section
      aria-labelledby="testimonial-cta-title"
      className="relative overflow-hidden py-16 px-5 sm:px-8 md:px-12 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white"
    >
      {/* Decorative motion backgrounds */}
      <FloatingCircle
        className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl"
        animationConfig={{
          keyframes: { x: [0, 30, -20, 0], y: [0, -20, 20, 0] },
          duration: 12,
        }}
      />
      <FloatingCircle
        className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl"
        animationConfig={{
          keyframes: { x: [0, -25, 25, 0], y: [0, 25, -25, 0] },
          duration: 15,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h2
          id="testimonial-cta-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5"
        >
          Envie de partager votre expérience ?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl font-light text-gray-100 mb-8 leading-relaxed"
        >
          Votre témoignage peut inspirer d’autres patients. Rejoignez les
          centaines de personnes qui ont déjà partagé leur avis.
        </motion.p>

        <motion.button
          type="button"
          onClick={handleTestimonialClick}
          aria-label="Envoyer votre témoignage"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          className="inline-block px-8 py-3 bg-white text-blue-800 font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all focus:outline-none focus:ring-4 focus:ring-white/50"
        >
          Envoyer votre témoignage
        </motion.button>
      </div>
    </section>
  );
}
