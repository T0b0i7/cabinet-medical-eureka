import React from "react";
import { parseDateFr } from "@/lib/dateFr";

const featuredPosts = [
  {
    id: 1,
    title: "5 conseils pour un mode de vie plus sain",
    excerpt:
      "Des conseils simples et efficaces pour améliorer votre santé au quotidien.",
    image:
      "https://myblessedlife.net/wp-content/uploads/2014/09/Simple-Healthy-Lifestyle-Tips.jpg",
    author: "Dr Sylvie Dossou-Yovo",
    date: "1 août 2025",
    href: "https://www.ucsfhealth.org/education/healthy-lifestyles-healthy-outlook",
  },
  {
    id: 2,
    title: "Les bienfaits d’une activité physique régulière",
    excerpt:
      "Bouger régulièrement améliore l’humeur, l’énergie et la santé globale.",
    image:
      "https://images.squarespace-cdn.com/content/v1/57f3cead15d5dbffa42d1d54/1530267449951-2Z8VAQOOM8NIO3S4ADHM/Blog1.jpg",
    author: "Koffi Zinsou",
    date: "28 juil. 2025",
    href: "https://www.tiyara.org/blog/the-benefits-of-physical-activity?gad_source=1&gad_campaignid=12420763395&gbraid=0AAAAABmBtEld2GlnT7Mg_M6r0xAN4Ht5D&gclid=CjwKCAjwwNbEBhBpEiwAFYLtGChiVMJrpQ643l5uFoct9ISyiyJ4Se98zZPWMOwzzYmrMpvSskTuBhoCoq4QAvD_BwE",
  },
  {
    id: 3,
    title: "Bien manger sans se ruiner",
    excerpt:
      "Manger équilibré ne doit pas coûter cher : voici comment faire.",
    image:
      "https://somatus.com/wp-content/uploads/2023/03/Kidneys-in-the-Kitchen-Blog-Squares-1.png",
    author: "Grâce Ahouandjinou",
    date: "22 juil. 2025",
    href: "https://somethingnutritiousblog.com/eating-healthy-on-a-budget/",
  },
  {
    id: 4,
    title: "Méditation de pleine conscience pour débutants",
    excerpt:
      "Quelques techniques simples pour commencer et retrouver le calme.",
    image:
      "https://enlight8.com/wp-content/uploads/2016/09/enlight8.com-8-Ways-to-Mindfulness_Meditation-banner.jpg",
    author: "Dr Romuald Adjakpa",
    date: "18 juil. 2025",
    href: "https://meditofoundation.org/meditation-challenge?gad_source=1&gad_campaignid=11849372101&gbraid=0AAAAACeDZVC1lHZw3CSiMeeTBH-eSPXPI&gclid=CjwKCAjwwNbEBhBpEiwAFYLtGO9dE3Mu3kCb0JlR3jH5-f8aDS3rgdzSTxAvb9DtG1kmOL0CsIYe2hoCNDgQAvD_BwE",
  },
  {
    id: 5,
    title: "Comment améliorer la qualité de votre sommeil",
    excerpt:
      "Un meilleur sommeil, c’est une meilleure santé : les bons réflexes.",
    image:
      "https://www.netmeds.com/images/cms/magefan_blog/Insomnia.jpg",
    author: "Nadège Tossou",
    date: "10 juil. 2025",
    href: "https://www.nature.com/articles/d41586-025-00966-8?utm_source=googleads&utm_medium=cpc_search&utm_campaign=MLSR_OUTLK_AWA1_GL_PCFU_CFULF_SLEEP_0425&gad_source=1&gad_campaignid=22693948280&gbraid=0AAAAADBiRD2P6MhfVoE_tHZ3SKBlQcY9J&gclid=CjwKCAjwwNbEBhBpEiwAFYLtGGPyiwmkHbq5z3UeY2Q4nEH0sZE6nL0L-JzW2KYvuOWcM3sLl-x45xoC6TwQAvD_BwE",
  },
  {
    id: 6,
    title: "Hydratation : la clé de l’énergie et de la concentration",
    excerpt:
      "Boire suffisamment est essentiel pour la santé et la concentration.",
    image:
      "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/blogs/2147510459/images/3f25f8-3b6c-d4ec-ceee-f48a5375ad6_Placeholder_Image_8_.png",
    author: "Benoît Sossou",
    date: "5 juil. 2025",
    href: "https://www.redbull.com/nl-nl/energydrink?utm_source=google&utm_medium=cpc&utm_campaign=sea-always-on&utm_content=generic&rbcid=22410950871&utm_source=Adwords&utm_medium=g&utm_campaign=22410950871&utm_content=752095776605&gad_source=1&gad_campaignid=22410950871&gbraid=0AAAAADHM10GOo8vSnGoEkvcUnu23OWVp_&gclid=CjwKCAjwwNbEBhBpEiwAFYLtGAnpCEuIxlFyQAUaA_eNJNd0MGMOhq39uoehxBNqAXmLqRQFNPMCIxoCV5MQAvD_BwE",
  },
];

const BlogFeatured = () => {
  return (
    <section
      aria-label="Articles à la une"
      className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-16"
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12 text-center">
        <span className="text-blue-700">Articles</span> à la une
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {featuredPosts.map(({ id, title, excerpt, image, author, date, href }) => (
          <article
            key={id}
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500 flex flex-col"
          >
            {/* Post image with subtle zoom on hover */}
            <a
              href={href}
              className="block relative overflow-hidden"
              tabIndex={-1}
              aria-hidden="true"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-56 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </a>

            {/* Post content */}
            <div className="p-6 flex flex-col flex-grow">
              <a
                href={href}
                className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300 leading-snug line-clamp-2"
                aria-label={`Lu full article: ${title}`}
              >
                {title}
              </a>

              <p className="mt-4 text-gray-600 flex-grow leading-relaxed line-clamp-3">
                {excerpt}
              </p>

              {/* Author and publication date */}
              <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
                <span>
                  By <strong className="text-gray-800 font-medium">{author}</strong>
                </span>
                <time dateTime={parseDateFr(date).toISOString()}>{date}</time>
              </div>

              {/* Lire la suite button with smooth arrow animation */}
              <a
                href={href}
                className="mt-6 inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-300"
                aria-label={`Lu full article: ${title}`}
              >
                Lire la suite
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogFeatured;
