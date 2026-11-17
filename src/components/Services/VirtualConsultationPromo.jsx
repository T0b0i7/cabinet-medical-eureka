"use client";

import React from "react";

const VirtualConsultationPromo = () => {
  return (
    <section
      aria-labelledby="virtual-consultation-title"
      className="max-w-7xl mx-auto px-6 sm:px-12 py-16 bg-gradient-to-r from-blue-50 to-white rounded-3xl shadow-lg flex flex-col lg:flex-row items-center gap-10"
      role="region"
    >
      {/* Text content */}
      <div className="flex-1 max-w-xl text-center lg:text-left">
        <h2
          id="virtual-consultation-title"
          className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-tight text-gray-900"
        >
          <span>La </span>
          <span className="text-blue-600">téléconsultation</span>
        </h2>

        <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
          Échangez avec nos médecins où que vous soyez. Des soins sûrs, simples
          et pratiques, depuis chez vous.
        </p>
        <button
          type="button"
          className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 focus-visible:ring-4 focus-visible:ring-blue-300 focus:outline-none text-white font-semibold rounded-lg shadow-md transition-colors duration-300"
          aria-label="Prendre rendez-vous"
        >
          Réservez votre consultation
        </button>
      </div>

      {/* Image / Illustration */}
      <div className="flex-1 max-w-md w-full">
        <img
          src="https://images.unsplash.com/photo-1671590733598-6dde3ba88d82?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Consultation médicale à distance"
          className="rounded-3xl shadow-xl w-full h-auto object-cover"
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      </div>
    </section>
  );
};

export default VirtualConsultationPromo;
