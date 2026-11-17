"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Comment garder un mode de vie sain",
    summary:
      "Des conseils simples pour prendre soin de votre corps et de votre esprit au quotidien.",
    image:
      "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://www.healthline.com/health/how-to-maintain-a-healthy-lifestyle",
    date: "1 août 2025",
  },
  {
    id: 2,
    title: "Mieux comprendre sa santé cardiovasculaire",
    summary:
      "Reconnaître les signes d’alerte et adopter les bons réflexes pour votre cœur.",
    image:
      "https://plus.unsplash.com/premium_photo-1701075032615-1b6867a46d3c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VW5kZXJzdGFuZGluZyUyMFlvdXIlMjBIZWFydCUyMEhlYWx0aHxlbnwwfHwwfHx8MA%3D%3D",
    url: "https://www.baker.edu.au/health-hub/fact-sheets/healthy-heart?gad_source=1&gad_campaignid=1042082331&gbraid=0AAAAAD2MqSnEPtWAIK8qMGunMgWZn5NdB&gclid=CjwKCAjwwNbEBhBpEiwAFYLtGH6nFZMH_ojVTSU-TmVpB1Naxh8D-lE6-WBQHtqf2xP8SvX3U811-hoC7xwQAvD_BwE",
    date: "20 juil. 2025",
  },
  {
    id: 3,
    title: "L’importance du bien-être mental",
    summary:
      "Des habitudes et techniques pour cultiver l’équilibre émotionnel.",
    image:
      "https://plus.unsplash.com/premium_photo-1666264200751-8a013663a89b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://www.planstreet.com/top-ten-reasons-why-mental-health-is-so-important",
    date: "15 juil. 2025",
  },
  {
    id: 4,
    title: "Conseils nutrition pour prendre soin de soi",
    summary:
      "Une alimentation équilibrée, adaptée à votre quotidien et à votre santé.",
    image:
      "https://media.istockphoto.com/id/1216723436/photo/how-to-boost-your-immune-system.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZElex50Y0_JRkWY66IhkmXIeeFKgLWmz_p-JK0Qrhh4=",
    url: "https://shimacrobiotics.org/mediterranean-diet-vs-macrobiotics/",
    date: "10 juil. 2025",
  },
  {
    id: 5,
    title: "Gérer le stress au quotidien",
    summary:
      "Des stratégies concrètes pour mieux gérer le stress et retrouver de l’énergie.",
    image:
      "https://media.istockphoto.com/id/901486122/photo/businesswoman-working-on-a-laptop-under-pressure.webp?a=1&b=1&s=612x612&w=0&k=20&c=hkmv467tmGaPQazO3jc71LooXCVRLh00QCKZSOFCqiw=",
    url: "https://www.cdc.gov/mental-health/living-with/index.html",
    date: "5 juil. 2025",
  },
  {
    id: 6,
    title: "Les bienfaits d’une activité physique régulière",
    summary:
      "Bouger régulièrement pour améliorer votre santé, votre humeur et votre longévité.",
    image:
      "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/exercise/art-20048389",
    date: "1 juil. 2025",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};

const imageHoverVariants = {
  hover: {
    scale: 1.07,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const focusVariants = {
  rest: { scale: 1, boxShadow: "none" },
  focus: {
    scale: 1.03,
    boxShadow: "0 0 0 4px rgba(59, 130, 246, 0.5)", // blue ring on focus
  },
};

export default function HomeBlogPreview() {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [controls]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="blog-preview-title"
      className="bg-white py-16 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto my-[-30px]"
    >
      <motion.h2
        id="blog-preview-title"
        className="text-3xl font-extrabold text-gray-900 mb-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" },
          },
        }}
      >
        Nos derniers <span className="text-blue-700">articles</span>
      </motion.h2>

      <motion.div
        className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {BLOG_POSTS.map(({ id, title, summary, image, url, date }) => (
          <motion.article
            key={id}
            tabIndex={0}
            className="flex flex-col rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 cursor-pointer bg-white"
            variants={cardVariants}
            initial="rest"
            animate="rest"
            whileHover="hover"
            whileFocus="focus"
          >
            <motion.a
              href={url}
              className="block overflow-hidden flex-shrink-0"
              variants={imageHoverVariants}
            >
              <img
                src={image}
                alt={title}
                loading="lazy"
                draggable={false}
                className="w-full h-48 object-cover transition-transform duration-500 ease-in-out"
              />
            </motion.a>
            <div className="flex flex-col flex-grow p-6">
              <p className="text-sm text-gray-500 mb-2">{date}</p>
              <a
                href={url}
                className="text-xl font-semibold text-gray-900 hover:text-blue-700 transition-colors duration-300 mb-3"
              >
                {title}
              </a>
              <p className="text-gray-700 flex-grow">{summary}</p>
              <a
                href={url}
                aria-label={`Lire la suite about ${title}`}
                className="mt-6 inline-block text-blue-700 hover:text-blue-800 font-semibold transition-colors duration-300"
              >
                Lire la suite &rarr;
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
