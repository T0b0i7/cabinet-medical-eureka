'use client'
import React from "react";

const EmergencyInfo = () => {
  return (
    <section
      aria-label="Consignes et contact en cas d’urgence"
      className="bg-white text-black py-12 px-6 sm:px-12 md:px-20 lg:px-32 my-[-30px]"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-stretch gap-12">
        {/* Left Content */}
        <div className="md:flex-1 flex flex-col justify-center max-w-lg">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-700 mb-6 leading-tight">
            <span className="text-black">Que faire</span> en cas d’urgence ?
          </h2>

          <p className="text-base sm:text-lg text-gray-800 mb-8 leading-relaxed">
            Une urgence peut être stressante. Connaître les bons réflexes permet
            d’agir vite et efficacement. Voici ce qu’il faut retenir :
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-700 text-sm sm:text-base">
            <li>Restez calme et évaluez la situation avec attention.</li>
            <li>Appelez immédiatement le cabinet ou les secours si nécessaire.</li>
            <li>
              Donnez des informations précises sur le lieu et la nature de
              l’urgence.
            </li>
            <li>Suivez les consignes données par les professionnels de santé.</li>
            <li>Ne mettez pas votre vie ou celle des autres en danger.</li>
          </ul>

          <button
            type="button"
            className="mt-10 px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300 max-w-max"
            aria-label="Appeler le cabinet"
            onClick={() => {
              window.open("tel:+2290141608339");
            }}
          >
            Appeler le cabinet
          </button>
        </div>

        {/* Right Content - Image */}
        <div className="md:flex-1 flex justify-center md:justify-end">
          <img
            src="https://plus.unsplash.com/premium_photo-1661391674538-d1a2bf90a490?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Professionnels de santé prenant en charge un patient"
            className="rounded-xl shadow-lg object-cover h-full max-w-full"
            loading="lazy"
            decoding="async"
            width={600}
            height={400}
            style={{ minHeight: 0, minWidth: 0 }}
          />
        </div>
      </div>
    </section>
  );
};

export default EmergencyInfo;
