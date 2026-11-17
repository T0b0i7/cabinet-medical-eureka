'use client'
import React from "react";

const TerminationClause = () => {
  return (
    <section
      aria-labelledby="termination-clause-heading"
      className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-20 py-16"
    >
      <h2
        id="termination-clause-heading"
        className="mb-8 select-text text-3xl sm:text-4xl font-bold text-gray-900"
      >
        Termination Clause
      </h2>

      <p className="mb-6 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed font-light text-gray-800">Le Cabinet Médical EURÊKA se réserve le droit de suspendre ou de mettre fin à votre accès à nos services à tout moment, sans préavis, en cas de manquement aux présentes conditions.</p>

      <p className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed font-light text-gray-800">En cas de résiliation, vos droits d’accès prennent fin immédiatement, les obligations nées antérieurement demeurant applicables.</p>
    </section>
  );
};

export default TerminationClause;
