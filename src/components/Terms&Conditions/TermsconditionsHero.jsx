'use client'
import React from "react";

const TermsConditionsHero = () => {
  return (
    <section
      aria-label="Conditions générales hero section"
      className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20 px-6 sm:px-12 lg:px-20"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h1
          tabIndex={-1}
          className="select-text mb-4 text-[clamp(2.5rem,6vw,4rem)] font-extrabold leading-tight tracking-tight"
        >
          Conditions générales
        </h1>

        <p className="mx-auto max-w-3xl text-lg sm:text-xl font-light leading-relaxed opacity-90">Avant d’utiliser le site du Cabinet Médical, veuillez prendre un moment pour lire attentivement ces conditions générales. En accédant à nos services, vous acceptez de les respecter.</p>
      </div>
    </section>
  );
};

export default TermsConditionsHero;
