import React from "react";

function PrivacyPolicyHero() {
  return (
    <section
      aria-labelledby="privacy-policy-hero-heading"
      className="bg-gradient-to-br from-blue-50 via-white to-white w-full py-28"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 flex flex-col lg:flex-row items-center gap-20">
        {/* Text block */}
        <div className="flex-1 max-w-xl text-center lg:text-left">
          <h1
            id="privacy-policy-hero-heading"
            className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tight leading-tight text-gray-900"
          >
            Votre confidentialité,{" "}
            <span className="text-blue-600 text-xl sm:text-5xl font-semibold align-baseline">
              Notre engagement
            </span>
          </h1>
          <p className="mt-8 max-w-lg mx-auto lg:mx-0 text-lg sm:text-xl font-normal leading-relaxed text-gray-700">Nous accordons la plus grande importance à la confidentialité de vos données de santé. Découvrez comment nous les collectons, les utilisons et les protégeons.</p>
          <p className="mt-4 max-w-md mx-auto lg:mx-0 text-sm text-gray-500 tracking-wide">La transparence et la maîtrise de vos informations sont au cœur de notre politique de confidentialité.</p>
        </div>

        {/* Hero image with decorative accent */}
        <div className="flex-1 max-w-lg w-full relative">
          <div className="overflow-hidden rounded-3xl border border-indigo-200 shadow-2xl">
            <img
              src="https://images.squarespace-cdn.com/content/v1/6220ad1db2910108f6cfc24f/46da4dd1-e009-4d51-92bc-7bd013235df1/googlevsprivacy.gif"
              alt="Protection des données personnelles"
              className="w-full h-auto object-cover select-none"
              loading="lazy"
              draggable={false}
            />
          </div>
          {/* Decorative blurred circle */}
          <div
            aria-hidden="true"
            className="absolute -bottom-8 -right-8 w-32 h-32 bg-indigo-100 rounded-full opacity-40 blur-3xl"
          />
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicyHero;
