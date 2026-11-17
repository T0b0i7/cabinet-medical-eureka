'use client'
import React from "react";

const GoverningLaw = () => {
  return (
    <section
      aria-labelledby="governing-law-heading"
      className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-20 py-16 my-[-30px]"
    >
      <h2
        id="governing-law-heading"
        className="mb-8 select-text text-3xl sm:text-4xl font-bold text-gray-900"
      >
        Governing Law
      </h2>

      <p className="max-w-3xl mx-auto mb-4 text-base sm:text-lg leading-relaxed font-light text-gray-800">Les présentes conditions générales sont régies et interprétées conformément aux lois applicables au Bénin, sans égard aux règles de conflit de lois.</p>

      <p className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed font-light text-gray-800">En continuant à utiliser nos services, vous acceptez la compétence exclusive des tribunaux compétents pour tout litige lié à ces conditions.</p>
    </section>
  );
};

export default GoverningLaw;
