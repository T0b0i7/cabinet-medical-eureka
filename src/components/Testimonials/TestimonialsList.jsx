"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Nadège Tossou",
    role: "Patient",
    review:
      "L’équipe a été très professionnelle et m’a mise à l’aise dès mon arrivée. Je recommande vivement !",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1606166228927-3feafb447265?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    id: 2,
    name: "Serge Agbodjan",
    role: "Patient",
    review:
      "Un service excellent ! L’attention portée aux détails et la qualité de la prise en charge ont dépassé mes attentes.",
    rating: 5,
    image:
      "https://plus.unsplash.com/premium_photo-1723626014994-caef68c25493?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  },
  {
    id: 3,
    name: "Estelle Agossou",
    role: "Patiente",
    review:
      "Je me suis sentie vraiment prise en charge. Le personnel a tout fait pour que tout se passe bien.",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1644611148697-3eb43ac6c390?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  },
  {
    id: 4,
    name: "Koffi Zinsou",
    role: "Patient",
    review:
      "Une équipe aimable, professionnelle et très compétente. Je reviendrai sans hésiter !",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1543075270-17e1257ec612?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  },
  {
    id: 5,
    name: "Mireille Zinsou",
    role: "Patient",
    review:
      "De la prise de rendez-vous au suivi, tout a été simple et rassurant. Une vraie attention au patient.",
    rating: 5,
    image:
      "https://plus.unsplash.com/premium_photo-1723626014994-caef68c25493?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  },
  {
    id: 6,
    name: "Boniface Kpogan",
    role: "Client",
    review:
      "J’apprécie le professionnalisme et la chaleur de chaque membre de l’équipe. Je me suis sentie considérée.",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1616434116710-c45ce99c1a77?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const TestimonialsList = () => {
  return (
    <section
      aria-label="Liste des témoignages patients"
      className="bg-gradient-to-b from-gray-50 to-white py-16 px-5 sm:px-8 md:px-12 my-[-50px]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            custom={0}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900"
          >
            <span className="text-blue-600">Ce que disent</span> nos patients
          </motion.h2>
          <motion.p
            custom={1}
            variants={fadeInUp}
            className="mt-3 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto"
          >
            Des retours authentiques de patients qui ont vécu leur prise en
            charge au cabinet.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              custom={index + 2}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Avatar */}
              <img
                src={testimonial.image}
                alt={`${testimonial.name} photo`}
                className="w-20 h-20 rounded-full object-cover shadow-lg mb-4 border-2 border-blue-500"
                loading="lazy"
              />

              {/* Name & Role */}
              <h3 className="text-lg font-semibold text-gray-900">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{testimonial.role}</p>

              {/* Review */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                "{testimonial.review}"
              </p>

              {/* Rating */}
              <div className="flex justify-center space-x-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 text-lg" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsList;
