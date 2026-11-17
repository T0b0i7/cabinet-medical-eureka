"use client";

import React, { useEffect, useRef, useState } from "react";

const BlogHero = () => {
  // Reference to background image div for parallax transform
  const bgImageRef = useRef(null);

  // State to trigger entrance animations only once
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(true); // trigger animation on mount

    // Parallax scroll handler
    const onScroll = () => {
      if (!bgImageRef.current) return;

      const scrollTop = window.pageYOffset;
      const movement = window.innerWidth > 768 ? scrollTop * 0.3 : scrollTop * 0.15;

      bgImageRef.current.style.transform = `translateY(${movement}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Text to animate letter by letter
  const animatedTitle = "Conseils & actualités";

  return (
    <section
      aria-label="Le blog santé"
      className="relative overflow-hidden bg-black rounded-xl"
      style={{ minHeight: 480 }}
    >
      {/* Background with parallax effect */}
      <div
        ref={bgImageRef}
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none rounded-xl"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('https://killtekno.com/wp-content/uploads/2023/02/icegif-511.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          willChange: "transform",
          zIndex: 0,
          borderRadius: "1rem",
        }}
      />

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col justify-center text-center md:text-left min-h-[480px]">
        {/* Animated heading */}
        <h1
          aria-label="Conseils et actualités de nos professionnels de santé"
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white drop-shadow-lg max-w-3xl mx-auto md:mx-0"
        >
          {startAnimation
            ? animatedTitle.split("").map((char, index) => (
                <span
                  key={index}
                  className="inline-block animate-slideInLeft"
                  style={{ animationDelay: `${index * 0.03}s`, willChange: "transform, opacity" }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))
            : animatedTitle}
          <br />
          <span
            className={`text-indigo-400 block mt-2 font-semibold tracking-wide glow-underline ${
              startAnimation ? "animate-fadeIn" : ""
            }`}
            style={{ animationDelay: "0.9s" }}
          >
            Par nos experts santé
          </span>
        </h1>

        {/* Subheading paragraph */}
        <p
          className={`mt-5 max-w-xl mx-auto md:mx-0 text-gray-300 text-base sm:text-lg font-light leading-relaxed ${
            startAnimation ? "animate-fadeIn" : ""
          }`}
          style={{ animationDelay: "1.2s" }}
        >
          Conseils de nos praticiens, actualités du cabinet et informations utiles
          pour prendre soin de votre santé au quotidien.
        </p>

        {/* CTA button */}
        <a
          href="https://medium.com/"
          aria-label="Lire nos articles"
          className={`inline-block mt-8 px-7 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transition duration-300 max-w-max mx-auto md:mx-0 ${
            startAnimation ? "animate-fadeIn" : ""
          }`}
          style={{ animationDelay: "1.5s" }}
        >
          Explorer les articles
        </a>
      </div>

      {/* Animation keyframes and styles */}
      <style jsx>{`
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-28px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.45s forwards;
          display: inline-block;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          opacity: 0;
          animation: fadeIn 0.7s ease forwards;
        }

        .glow-underline {
          position: relative;
        }
        .glow-underline::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #6366f1, #8b5cf6, #6366f1);
          border-radius: 9999px;
          filter: blur(6px);
          opacity: 0.7;
          animation: pulseGlow 2.5s ease-in-out infinite;
        }
        @keyframes pulseGlow {
          0%,
          100% {
            opacity: 0.7;
            filter: blur(6px);
          }
          50% {
            opacity: 1;
            filter: blur(9px);
          }
        }

        @media (max-width: 768px) {
          div.relative.z-10 {
            padding-top: 7rem;
            padding-bottom: 7rem;
          }
          h1 {
            text-align: center;
            font-size: 2rem !important;
            max-width: 90vw;
            margin-left: auto;
            margin-right: auto;
          }
          p {
            text-align: center;
            max-width: 90vw !important;
            margin-left: auto;
            margin-right: auto;
            font-size: 1rem !important;
          }
          a {
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }
      `}</style>
    </section>
  );
};

export default BlogHero;
