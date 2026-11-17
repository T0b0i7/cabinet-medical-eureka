'use client'
import { parseDateFr } from "@/lib/dateFr";
import React, { useState, useMemo } from "react";

const categories = [
  "Tous",
  "Santé",
  "Bien-être",
  "Forme",
  "Nutrition",
  "Santé mentale",
  "Mode de vie",
];

const allPosts = [
  {
    id: 1,
    category: "Santé",
    title: "5 conseils pour un mode de vie plus sain",
    excerpt:
      "Conseils et explications de nos professionnels de santé.",
    image:
      "https://www.sweshafoods.com/wp-content/uploads/2023/05/Healthy_Lifestyle_Tips_dd24bb977b.jpg",
    author: "Adjovi Hounsou",
    date: "1 août 2025",
    href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sweshafoods.com%2Funcategorized%2F5-essential-tips-for-embracing-a-healthy-lifestyle%2F&psig=AOvVaw1h2shNB8uLB4QPPOS6Gd18&ust=1754759916733000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCIj6pZ7c-44DFQAAAAAdAAAAABAE",
  },
  {
    id: 2,
    category: "Santé",
    title: "Comment améliorer la qualité de votre sommeil",
    excerpt:
      "Conseils et explications de nos professionnels de santé.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfMyjsoqch8bCqOdPgXklIHL-HHqKlxgUM-w&s",
    author: "Koffi Zinsou",
    date: "10 juil. 2025",
    href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sriramakrishnahospital.com%2Fblog%2Fpsychiatry%2Fhow-to-improve-your-sleep-quality-tips-and-tricks%2F&psig=AOvVaw09vMwiKXNcv3LbQWakh0DN&ust=1754759877259000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCMjUrIvc-44DFQAAAAAdAAAAABAE",
  },
  {
    id: 3,
    category: "Santé",
    title: "Hydratation : la clé de l’énergie et de la concentration",
    excerpt:
      "Conseils et explications de nos professionnels de santé.",
    image:
      "https://www.kendalmint.co.uk/cdn/shop/articles/why-you-need-to-focus-on-hydration-285384.jpg?v=1719344853",
    author: "Grâce Ahouandjinou",
    date: "5 juil. 2025",
    href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kendalmint.co.uk%2Fblogs%2Ftips-guides%2Fwhy-you-need-to-focus-on-hydration%3Fsrsltid%3DAfmBOoqfQKSmxOkXl5PEJYLL3DsbndJ4NgbADBZahvwLvavqlIMgKdQF&psig=AOvVaw1aLbesPx9XeE11XMeGIiTt&ust=1754759821572000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCPCWqfHb-44DFQAAAAAdAAAAABAE",
  },
  {
    id: 4,
    category: "Santé",
    title: "Les bienfaits d’une activité physique régulière",
    excerpt:
      "Conseils et explications de nos professionnels de santé.",
    image:
      "https://www.okbima.com/assets/uploads/blog/6f8355b06f32d3fdc75877579f5b1a1f.webp",
    author: "Isidore Aholou",
    date: "28 juil. 2025",
    href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.okbima.com%2Fhealth-insurance%2Fblog%2Fregular-exercise-benefits-bid-285&psig=AOvVaw2UvmWDukU_KJbjgdrGic1_&ust=1754759783586000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCNiP597b-44DFQAAAAAdAAAAABAE",
  },
  {
    id: 5,
    category: "Bien-être",
    title: "Méditation de pleine conscience pour débutants",
    excerpt:
      "Des habitudes simples pour prendre soin de son corps et de son esprit.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdgHjzjbC1k7eAGDZAnsUGwYPDDOzUVYIjqQ&s",
    author: "Estelle Agossou",
    date: "18 juil. 2025",
    href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftoneopfit.com%2Fblogs%2Fmindfulness-meditation-for-beginners&psig=AOvVaw2pymaYObTEYZ8t9xNsdWzT&ust=1754759732322000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCLCk58bb-44DFQAAAAAdAAAAABAE",
  },
  {
    id: 6,
    category: "Bien-être",
    title: "Techniques de gestion du stress",
    excerpt:
      "Des habitudes simples pour prendre soin de son corps et de son esprit.",
    image:
      "https://static.wixstatic.com/media/adb321_1d3f6341fd73416caaa6afbe496c2aa8~mv2.jpg/v1/fill/w_568,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/adb321_1d3f6341fd73416caaa6afbe496c2aa8~mv2.jpg",
    author: "Benoît Sossou",
    date: "15 juil. 2025",
    href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ihcrc.org%2Fpost%2Fstress-management-techniques&psig=AOvVaw0znhytG130_SehJWramcrf&ust=1754759694610000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCPj8zrTb-44DFQAAAAAdAAAAABAE",
  },
  {
    id: 7,
    category: "Bien-être",
    title: "Les bienfaits de l’aromathérapie pour la détente",
    excerpt:
      "Des habitudes simples pour prendre soin de son corps et de son esprit.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkEehxu1c6I1TtMkPlKrU2RHmNk7G2DFosOg&s",
    author: "Nadège Tossou",
    date: "12 juil. 2025",
    href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Friversmassagetherapy.ca%2Fnews-podcast%2Faromatherapy-hot-stone-massage-the-ultimate-relaxation-and-wellness-experience&psig=AOvVaw0Fl9d7nYPYtyt1Aviyg2ti&ust=1754759646461000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCMC00J3b-44DFQAAAAAdAAAAABAE",
  },
  {
    id: 8,
    category: "Bien-être",
    title: "Postures de yoga pour évacuer le stress",
    excerpt:
      "Des habitudes simples pour prendre soin de son corps et de son esprit.",
    image:
      "https://www.arogyayogaschool.com/blog/wp-content/uploads/2017/08/5-Best-Yoga-Poses-For-Stress-Relief.jpg",
    author: "Serge Agbodjan",
    date: "9 juil. 2025",
    href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.arogyayogaschool.com%2Fblog%2F5-best-yoga-poses-for-stress-relief%2F&psig=AOvVaw1HpIzKj1Cq8YgIEw7BYzQh&ust=1754759595289000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCNi234nb-44DFQAAAAAdAAAAABAE",
  },
  {
    id: 9,
    category: "Forme",
    title: "Routines de sport à la maison",
    excerpt:
      "Des conseils pratiques pour bouger et progresser en sécurité.",
    image:
      "https://burnlab.co/cdn/shop/articles/Blogs_Banner_4_-min_3bfa562a-b73d-4051-99ef-b842e94adb2a.jpg?v=1677887055",
    author: "Ghislain Ahouansou",
    date: "30 juin 2025",
    href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fburnlab.co%2Fblogs%2Fnews%2Fhome-workout-routine%3Fsrsltid%3DAfmBOoqmFAcmxFpHbjN5Igjd71fr4FIVhBZd3hPGdxYuG9UlWkAvkT-t&psig=AOvVaw1RkHGwUR-YDjmPj1_dZRVp&ust=1754759535563000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCNCPxeja-44DFQAAAAAdAAAAABAE",
  },
  {
    id: 10,
    category: "Forme",
    title: "Développer sa force en toute sécurité",
    excerpt:
      "Des conseils pratiques pour bouger et progresser en sécurité.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJs1L0VHJZ5UDjz5IYD5w-qmV_yX-lWDCV5A&s",
    author: "Rachelle Sossou",
    date: "25 juin 2025",
    href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhealixtherapy.com%2Funlocking-core-power-pilates%2F&psig=AOvVaw1lAN8a9x6CVIjdaQoo-XiY&ust=1754759478045000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCPj0zdTa-44DFQAAAAAdAAAAABAE",
  },
  {
    id: 11,
    category: "Forme",
    title: "Séances de cardio pour débutants",
    excerpt:
      "Des conseils pratiques pour bouger et progresser en sécurité.",
    image:
      "https://www.nmhfc.com/wp-content/uploads/sites/34/2024/06/PWM-2859325_July16_CardioBeginners_Infograph-scaled.jpg",
    author: "Arnaud Hounkpatin",
    date: "20 juin 2025",
    href: "https://www.nmhfc.com/blog/5-cardio-exercises-for-beginners/",
  },
  {
    id: 12,
    category: "Forme",
    title: "Étirements pour prévenir les blessures",
    excerpt:
      "Des conseils pratiques pour bouger et progresser en sécurité.",
    image:
      "https://herlongsportspt.com/wp-content/uploads/2024/06/2024_Herlong_Stretching_Blog_Edited.png",
    author: "Mireille Zinsou",
    date: "18 juin 2025",
    href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fherlongsportspt.com%2Fblog%2Fstatic-stretching-vs-dynamic-stretching-whats-the-difference%2F&psig=AOvVaw0SHLnyAK5KUrvl2V5POmyI&ust=1754759413564000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCKiKja7a-44DFQAAAAAdAAAAABAE",
  },
  {
    id: 13,
    category: "Nutrition",
    title: "Bien manger sans se ruiner",
    excerpt:
      "Mieux comprendre ce que l’on met dans son assiette.",
    image:
      "https://erincliffordwellness.com/wp-content/uploads/2016/03/eating-healthy-on-a-budget.jpg",
    author: "Dodji Kpèdé",
    date: "22 juil. 2025",
    href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ferincliffordwellness.com%2Fhealthy-eating-on-a-budget%2F&psig=AOvVaw2ZiZIWX51ueDz-1zc-IcDy&ust=1754759377531000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCODUr53a-44DFQAAAAAdAAAAABAE",
  },
  {
    id: 14,
    category: "Nutrition",
    title: "Les superaliments à connaître",
    excerpt:
      "Mieux comprendre ce que l’on met dans son assiette.",
    image:
      "https://www.matchabloom.com/cdn/shop/articles/Matcha_bloom_blog_graphics-01.jpg?v=1637617868&width=1500",
    author: "Sylvie Dossou",
    date: "20 juil. 2025",
    href: "https://www.matchabloom.com/blogs/body/a-beginners-guide-to-superfoods?srsltid=AfmBOopIJkXLV3A3BGCemHs98RcrZx-cDUCRqjjcbEyFS-Bm_jlimojZ",
  },
  {
    id: 15,
    category: "Nutrition",
    title: "Préparer ses repas quand on manque de temps",
    excerpt:
      "Mieux comprendre ce que l’on met dans son assiette.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR14OnzXMkKGLHxLOUB_AO6F8wBIBLf8T1C2w&s",
    author: "Raoul Assogba",
    date: "15 juil. 2025",
    href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcentr.com%2Fblog%2Fshow%2F31181%2Fthe-ultimate-meal-prep-guide-for-busy-people&psig=AOvVaw0XADNq6hzBJ6Kk20ndklzk&ust=1754759295170000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCPjSqPXZ-44DFQAAAAAdAAAAABAE",
  },
  {
    id: 16,
    category: "Nutrition",
    title: "Guide des vitamines et compléments",
    excerpt:
      "Mieux comprendre ce que l’on met dans son assiette.",
    image:
      "https://nourishedpear.com/wp-content/uploads/2023/11/Renal-Dietitians-Guide-to-Vitamins-and-Supplements-3-1024x768.jpg",
    author: "Akossiwa Amoussou",
    date: "12 juil. 2025",
    href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnourishedpear.com%2Ftag%2Fsupplements%2F&psig=AOvVaw1aUDofOb9CB238pYRP2plY&ust=1754759247832000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCID1sOXZ-44DFQAAAAAdAAAAABAE",
  },
  {
    id: 17,
    category: "Santé mentale",
    title: "Surmonter l’anxiété naturellement",
    excerpt:
      "Des outils concrets pour retrouver équilibre et sérénité.",
    image:
      "https://www.yourcounselling.ca/wp-content/uploads/2020/08/sept-10-thegem-blog-default.jpeg",
    author: "Adjovi Hounsou",
    date: "10 juil. 2025",
    href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.yourcounselling.ca%2Fhow-to-manage-anxiety%2F&psig=AOvVaw1XDEvhMSdTQl8jkRs2DPbC&ust=1754759137920000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCOirkM_Z-44DFQAAAAAdAAAAABAE",
  },
  {
    id: 18,
    category: "Santé mentale",
    title: "L’importance de la thérapie",
    excerpt:
      "Des outils concrets pour retrouver équilibre et sérénité.",
    image:
      "https://www.susanfindlay.co.uk/wp-content/uploads/2021/02/The-Importance-of-Complementary-Therapy-Blog.png",
    author: "Koffi Zinsou",
    date: "8 juil. 2025",
    href: "https://www.susanfindlay.co.uk/the-importance-of-complementary-therapy/",
  },
  {
    id: 19,
    category: "Santé mentale",
    title: "Routines de soin de soi",
    excerpt:
      "Des outils concrets pour retrouver équilibre et sérénité.",
    image:
      "https://cdn.shopify.com/s/files/1/1472/3894/files/26_480x480.jpg?v=1707404175",
    author: "Grâce Ahouandjinou",
    date: "6 juil. 2025",
    href: "https://www.monsuri.com/blogs/health-and-wellness/embracing-self-love-understanding-what-does-it-mean-to-love-yourself?srsltid=AfmBOopz9Dgcw7XeSrnS_TTs6EbmppuvzpsOxV-4qk1K4DU42CoepI_x",
  },
  {
    id: 20,
    category: "Santé mentale",
    title: "La méditation pour apaiser le stress",
    excerpt:
      "Des outils concrets pour retrouver équilibre et sérénité.",
    image:
      "https://nkbmeditation.org/images/image/678e37342807800f0202fc11/image.png",
    author: "Isidore Aholou",
    date: "4 juil. 2025",
    href: "https://nkbmeditation.org/blog/meditation-for-working-women",
  },
  {
    id: 21,
    category: "Mode de vie",
    title: "Conseils pour un mode de vie minimaliste",
    excerpt:
      "Des idées pour un quotidien plus sain et plus serein.",
    image:
      "https://i.ytimg.com/vi/CCOoCIfjURc/maxresdefault.jpg",
    author: "Estelle Agossou",
    date: "1 juil. 2025",
    href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.youtube.com%2Fwatch%3Fv%3DCCOoCIfjURc%26pp%3DygUSI21pbmltYWxsaXZpbmd0aXBz&psig=AOvVaw0EZDbYDihYHjTryvDcIGTm&ust=1754758935423000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCIC349DY-44DFQAAAAAdAAAAABAK",
  },
  {
    id: 22,
    category: "Mode de vie",
    title: "Astuces pour équilibrer vie pro et vie perso",
    excerpt:
      "Des idées pour un quotidien plus sain et plus serein.",
    image:
      "https://www.risely.me/wp-content/uploads/2024/06/Risely-Featured-Image-work-life-balance.webp",
    author: "Benoît Sossou",
    date: "28 juin 2025",
    href: "https://www.risely.me/how-to-manage-work-life-balance/",
  },
  {
    id: 23,
    category: "Mode de vie",
    title: "Voyager en restant en bonne santé",
    excerpt:
      "Des idées pour un quotidien plus sain et plus serein.",
    image:
      "https://dieteticdirections.com/wp-content/uploads/2018/05/Healthy-Vac-.png",
    author: "Nadège Tossou",
    date: "25 juin 2025",
    href: "https://dieteticdirections.com/how-to-eat-well-while-traveling/",
  },
  {
    id: 24,
    category: "Mode de vie",
    title: "Les bienfaits d’une détox numérique",
    excerpt:
      "Des idées pour un quotidien plus sain et plus serein.",
    image:
      "https://www.rollacentre.org/wp-content/uploads/sites/38/2021/09/PWM-1693361_Oct2021_BlogRb_OCT24-30_POST-scaled.jpg",
    author: "Serge Agbodjan",
    date: "22 juin 2025",
    href: "https://www.rollacentre.org/blog/digital-detox-benefits/",
  },
    {
      id: 25,
      category: "Santé",
      title: "Comprendre les bases de la santé cardiaque",
      excerpt:
        "Conseils et explications de nos professionnels de santé.",
      image:
        "https://www.clevelandclinicabudhabi.ae/PublishingImages/health-byte/CCAD-Blog-Illustration_health-blog-world-heart-day-power-your-life.png",
      author: "Ghislain Ahouansou",
      date: "5 août 2025",
      href: "https://www.clevelandclinicabudhabi.ae/en/health-byte/heart-and-vascular-health/8-top-tips-for-looking-after-your-heart",
    },
    {
      id: 26,
      category: "Santé",
      title: "Gérer sa tension artérielle naturellement",
      excerpt:
        "Conseils et explications de nos professionnels de santé.",
      image:
        "https://assets.heartfoundation.org.nz/images/all-shared-sections/blogs/smart-swaps.png?mtime=1669000867",
      author: "Rachelle Sossou",
      date: "7 août 2025",
      href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.heartfoundation.org.nz%2Fwellbeing%2Fmanaging-risk%2Fblood-pressure-and-your-heart%2F6-ways-to-lower-your-blood-pressure&psig=AOvVaw3K4jfNw8VL8cFS1qxnKVFj&ust=1754758778225000&source=images&cd=vfe&opi=89978449&ved=0CBYQjhxqFwoTCPjW8f7X-44DFQAAAAAdAAAAABAE",
    },
    {
      id: 27,
      category: "Santé",
      title: "Comprendre ce qui renforce l’immunité",
      excerpt:
        "Conseils et explications de nos professionnels de santé.",
      image:
        "https://www.hollywoodpresbyterian.com/wp-content/uploads/2023/02/blog-immune.jpg",
      author: "Arnaud Hounkpatin",
      date: "10 août 2025",
      href: "https://www.hollywoodpresbyterian.com/blog-dietitian-shares-tips-to-boost-your-immune-system/",
    },
    {
      id: 28,
      category: "Santé",
      title: "Mieux gérer la douleur chronique",
      excerpt:
        "Conseils et explications de nos professionnels de santé.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqUZBM3JiO5QB05ntiXn8vXTESwWs97f_AnQ&s",
      author: "Mireille Zinsou",
      date: "12 août 2025",
      href: "https://www.norms.in/blog/conquering-chronic-pain-a-comprehensive-guide-to-effective-management/",
    },
    {
      id: 29,
      category: "Bien-être",
      title: "Le journaling pour clarifier l’esprit",
      excerpt:
        "Des habitudes simples pour prendre soin de son corps et de son esprit.",
      image:
        "https://openmh.org/wp-content/uploads/2025/03/Blog-posts_OpenMH_Journaling_The-Benefits-of-Journaling-for-Mental-Health.jpg",
      author: "Dodji Kpèdé",
      date: "4 août 2025",
      href: "https://openmh.org/writing-things-down-how-journaling-genuinely-helps-your-mental-health/",
    },
    {
      id: 30,
      category: "Bien-être",
      title: "Les bienfaits des promenades en nature",
      excerpt:
        "Des habitudes simples pour prendre soin de son corps et de son esprit.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxALEhr7hiGG53uEzdrwsIoojg-UGzweQfGA&s",
      author: "Sylvie Dossou",
      date: "6 août 2025",
      href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.gorillajobs.com.au%2F2023%2F08%2F21%2Fhiking-and-healing-the-therapeutic-benefits-of-nature-walks%2F&psig=AOvVaw1C5kG3_EF456nhSSIO-_Zg&ust=1754758562457000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCOi4mZnX-44DFQAAAAAdAAAAABAE",
    },
    {
      id: 31,
      category: "Bien-être",
      title: "Techniques de relaxation guidée",
      excerpt:
        "Des habitudes simples pour prendre soin de son corps et de son esprit.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJeGxeiVx8cRcCVjev__AHLIcDOBFy5enLhA&s",
      author: "Raoul Assogba",
      date: "8 août 2025",
      href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fladormir.com.au%2F5-minute-meditation-techniques-to-calm-your-mind%2F%3Fsrsltid%3DAfmBOor9t61i7CEx2ZMH17bzIVKa14z_7pymW99DCM113QEbSWg28pej&psig=AOvVaw1UyIwuA1BtA57R8oU-XsHn&ust=1754758505929000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCODDif3W-44DFQAAAAAdAAAAABAE",
    },
    {
      id: 32,
      category: "Bien-être",
      title: "Bien-être numérique : mieux gérer le temps d’écran",
      excerpt:
        "Des habitudes simples pour prendre soin de son corps et de son esprit.",
      image:
        "https://medsourcelabs.com/wp-content/uploads/2024/06/Digital-Detox-blog-banner1.webp",
      author: "Akossiwa Amoussou",
      date: "10 août 2025",
      href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedsourcelabs.com%2Fmedsource-labs-corporate-wellness-tips-digital-detox-and-screen-time-management%2F&psig=AOvVaw0OLKHVo6x_wkfJaU9MhhMO&ust=1754758462003000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCMDAlejW-44DFQAAAAAdAAAAABAE",
    },
    {
      id: 33,
      category: "Forme",
      title: "Séances HIIT pour emplois du temps chargés",
      excerpt:
        "Des conseils pratiques pour bouger et progresser en sécurité.",
      image:
        "https://www.airrosti.com/wp-content/uploads/2016/01/2022_02_-Workout-on-Busy-Schedule-LinkedIn-Graphic-01-scaled.jpg",
      author: "Adjovi Hounsou",
      date: "3 août 2025",
      href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.airrosti.com%2Fblog%2Fworking-out-with-a-busy-schedule%2F&psig=AOvVaw0rKcF_ggOpdfqg_qke3VE4&ust=1754758408525000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCMCZ8M7W-44DFQAAAAAdAAAAABAE",
    },
    {
      id: 34,
      category: "Forme",
      title: "Musculation adaptée aux seniors",
      excerpt:
        "Des conseils pratiques pour bouger et progresser en sécurité.",
      image:
        "https://images.ctfassets.net/qw8ps43tg2ux/5OKnox3rWZtrHCuUxinU8R/60dbf081a1c1e76b59d64f3baf858ba8/issa_strengthtrainingforseniors_blogheader.jpg",
      author: "Koffi Zinsou",
      date: "5 août 2025",
      href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.issaonline.com%2Fblog%2Fpost%2Fthe-importance-of-strength-training-for-seniors&psig=AOvVaw2lXqEicGtdH7ya4g1b4b00&ust=1754758360298000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCKDD87fW-44DFQAAAAAdAAAAABAE",
    },
    {
      id: 35,
      category: "Forme",
      title: "Le Pilates pour renforcer les abdominaux",
      excerpt:
        "Des conseils pratiques pour bouger et progresser en sécurité.",
      image:
        "https://i.ytimg.com/vi/lqTWfc-mfow/maxresdefault.jpg",
      author: "Grâce Ahouandjinou",
      date: "7 août 2025",
      href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpilateslive.co.uk%2Fpilates-classes%2Fpilates-core-strength-and-stability%2F&psig=AOvVaw3OzbHEWr4DtlpWQYoLCX-e&ust=1754758318541000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCNDxxKTW-44DFQAAAAAdAAAAABAE",
    },
    {
      id: 36,
      category: "Forme",
      title: "Conseils pour courir en plein air",
      excerpt:
        "Des conseils pratiques pour bouger et progresser en sécurité.",
      image:
        "https://macrosinc.net/wp-content/uploads/2024/04/5-trail-running-tips-for-beginners-1024x536.png",
      author: "Isidore Aholou",
      date: "9 août 2025",
      href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmacrosinc.net%2Fblog%2Ftrail-running-tips%2F&psig=AOvVaw0HiJTrL-MZecv-5uxWHuIw&ust=1754758257018000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCIDs8YbW-44DFQAAAAAdAAAAABAE",
    },
    {
      id: 37,
      category: "Nutrition",
      title: "Les bienfaits d’une alimentation végétale",
      excerpt:
        "Mieux comprendre ce que l’on met dans son assiette.",
      image:
        "https://www.cardiometabolichealth.org/wp-content/uploads/2020/03/BENEFITS-OF-A-PLANT-BASED-DIET-IN-KEEPING-A-HEALTHY-HEART-01.jpg",
      author: "Estelle Agossou",
      date: "2 août 2025",
      href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cardiometabolichealth.org%2Fbenefits-of-a-plant-based-diet-in-keeping-a-healthy-heart%2F&psig=AOvVaw0MkG2hvzJrz5SXy0vNNT-l&ust=1754758217858000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCJiNx_TV-44DFQAAAAAdAAAAABAE",
    },
    {
      id: 38,
      category: "Nutrition",
      title: "Recettes de smoothies sains",
      excerpt:
        "Mieux comprendre ce que l’on met dans son assiette.",
      image:
        "https://sweetfreedom.co.uk/cdn/shop/articles/pics_blog_2_1024x.png?v=1730486878",
      author: "Benoît Sossou",
      date: "4 août 2025",
      href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsweetfreedom.co.uk%2Fblogs%2Frecipes%2Fscrumptious-berry-smoothie%3Fsrsltid%3DAfmBOoqt-BdplYjHf1ah88xZ8UBrQx44fq1_e619yJAY8DRqF2tG1T2f&psig=AOvVaw13YO4kayxReYzZZPINk1kM&ust=1754758138449000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCJDE883V-44DFQAAAAAdAAAAABAK",
    },
    {
      id: 39,
      category: "Nutrition",
      title: "Bien lire les étiquettes nutritionnelles",
      excerpt:
        "Mieux comprendre ce que l’on met dans son assiette.",
      image:
        "https://cdn.shopify.com/s/files/1/2364/6329/files/How-to-Read-Nutrition-Labels-Blog02-min_1024x1024.jpg?v=1705698455",
      author: "Nadège Tossou",
      date: "6 août 2025",
      href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.primalkitchen.com%2Fblogs%2Frecipes%2Fhow-to-read-a-nutrition-label%3Fsrsltid%3DAfmBOooC_qbgV6KdeCRsBe_UIGMGZeiix3E6HBP077E9Wx52PwxOORjW&psig=AOvVaw2D3lzROnvorlIHp_VtkgFz&ust=1754758105418000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCJiVlr7V-44DFQAAAAAdAAAAABAE",
    },
    {
      id: 40,
      category: "Nutrition",
      title: "Santé intestinale et alimentation",
      excerpt:
        "Mieux comprendre ce que l’on met dans son assiette.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cMY0N4SpmIWKv29aZQJEhw58ojBz67ZcAQ&s",
      author: "Serge Agbodjan",
      date: "8 août 2025",
      href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Featsense.com.au%2Fblog%2Foptimising-your-gut-health%2F&psig=AOvVaw1kfL5kGzR9tDFqoY0Psi98&ust=1754758070265000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCMDC-63V-44DFQAAAAAdAAAAABAE",
    },
    {
      id: 41,
      category: "Santé mentale",
      title: "Développer sa résilience émotionnelle",
      excerpt:
        "Des outils concrets pour retrouver équilibre et sérénité.",
      image:
        "https://lh7-rt.googleusercontent.com/docsz/AD_4nXffzxILRvhnUpLPiToDQaVWzWvf3IWa0HVd6N8ZqOBl64REOh7WUcP51AENjHzYl9hKV8XL78z0NZ7MheTf0aEthmN4spMRWlWvJVB4cHi8STW1p3pjtRFqIa9ZGD6yjf3HeSs3AqDMw_cAWYRviyiCGDb8?key=zo0mgAUJC1TOqAXUsXjD8A",
      author: "Ghislain Ahouansou",
      date: "3 août 2025",
      href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkapable.club%2Fblog%2Fleadership%2Fhow-to-develop-resilience-as-a-leader-strategies-and-tools%2F&psig=AOvVaw3KeDxboRZyJRI-G6yfD4cj&ust=1754758020038000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCNiRp5bV-44DFQAAAAAdAAAAABAE",
    },
    {
      id: 42,
      category: "Santé mentale",
      title: "Les bienfaits des thérapies de groupe",
      excerpt:
        "Des outils concrets pour retrouver équilibre et sérénité.",
      image:
        "https://councilforrelationships.org/wp-content/uploads/FI-Blog--1024x1024.jpg",
      author: "Rachelle Sossou",
      date: "5 août 2025",
      href: "https://councilforrelationships.org/wp-content/uploads/FI-Blog--1024x1024.jpg",
    },
    {
      id: 43,
      category: "Santé mentale",
      title: "Sommeil et santé mentale",
      excerpt:
        "Des outils concrets pour retrouver équilibre et sérénité.",
      image:
        "https://claytonsleep.com/wp-content/uploads/2024/11/CSI-Blogs-5.png",
      author: "Arnaud Hounkpatin",
      date: "7 août 2025",
      href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fclaytonsleep.com%2Fmedia%2Fcsi-blog%2Fpage%2F2%2F&psig=AOvVaw3siZiNsNzN-HrLRX-5bFjA&ust=1754757940132000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCLCDtu_U-44DFQAAAAAdAAAAABAE",
    },
    {
      id: 44,
      category: "Santé mentale",
      title: "Exercices de respiration en pleine conscience",
      excerpt:
        "Des outils concrets pour retrouver équilibre et sérénité.",
      image:
        "https://blog.tcea.org/wp-content/uploads/2022/03/6-activities-mindfulness-classroom-956x1024.png",
      author: "Mireille Zinsou",
      date: "9 août 2025",
      href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.tcea.org%2Fsix-mindfulness-activities%2F&psig=AOvVaw0B2v3g8Dc7QfivA2QVa9XZ&ust=1754757915121000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCNCRtuPU-44DFQAAAAAdAAAAABAE",
    },  
    {
      id: 45,
      category: "Mode de vie",
      title: "Créer une garde-robe capsule",
      excerpt:
        "Des idées pour un quotidien plus sain et plus serein.",
      image:
        "https://blog.adadeferrari.com/wp-content/uploads/2019/12/How-to-Build-a-Capsule-Wardrobe-for-Travel-blog-1160x720.png",
      author: "Dodji Kpèdé",
      date: "1 août 2025",
      href: "https://www.google.com/url?sa=i&url=http%3A%2F%2Fblog.adadeferrari.com%2Fhow-to-build-a-capsule-wardrobe-for-travel%2F&psig=AOvVaw2mIKb7fDiGfELQRTT23lar&ust=1754757890768000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCICd0dfU-44DFQAAAAAdAAAAABAE",
    },
    {
      id: 46,
      category: "Mode de vie",
      title: "Astuces pour une maison plus écologique",
      excerpt:
        "Des idées pour un quotidien plus sain et plus serein.",
      image:
        "https://ideal-turf.com/wp-content/uploads/2021/04/Eco-Friendly-Home-Tips-1030x687.jpeg",
      author: "Sylvie Dossou",
      date: "3 août 2025",
      href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fideal-turf.com%2Feco-friendly-home-tips%2F&psig=AOvVaw31RHee2izQPC0K1EyEiTTZ&ust=1754757860860000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCMCp2czU-44DFQAAAAAdAAAAABAE",
    },
    {
      id: 47,
      category: "Mode de vie",
      title: "Mieux équilibrer écrans et temps en famille",
      excerpt:
        "Des idées pour un quotidien plus sain et plus serein.",
      image:
        "https://fastercapital.com/i/Online-wellness--How-to-Improve-Your-Mental-and-Emotional-Well-being-Online--Balancing-Screen-Time-and-Self-Care.webp",
      author: "Raoul Assogba",
      date: "5 août 2025",
      href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffastercapital.com%2Fcontent%2FOnline-wellness--How-to-Improve-Your-Mental-and-Emotional-Well-being-Online.html&psig=AOvVaw1w-p7OGrp_peXHubp5itMU&ust=1754757833001000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCJinn7zU-44DFQAAAAAdAAAAABAE",
    },
    {
      id: 48,
      category: "Mode de vie",
      title: "L’art de vivre plus lentement",
      excerpt:
        "Des idées pour un quotidien plus sain et plus serein.",
      image:
        "https://earthyroute.com/cdn/shop/articles/Blog_Covers_2025_b5048323-ca75-481f-a07e-5ee545d2b5ce_2240x.png?v=1748081531",
      author: "Akossiwa Amoussou",
      date: "7 août 2025",
      href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fearthyroute.com%2Fblogs%2Fearthy-route-blogs%2Fthe-art-of-slow-living-why-more-men-are-embracing-it%3Fsrsltid%3DAfmBOopi8vzVUNpzdr5iYg6NbrvXSvjEohUiKSLNd0t1ODEnCon1chOR&psig=AOvVaw3CXS7EnSoELCw9sQvpjBCa&ust=1754757765838000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCOjNpJzU-44DFQAAAAAdAAAAABAE",
    },  
      {
        id: 49,
        category: "Santé",
        title: "L’importance des dépistages réguliers",
        excerpt:
          "Conseils et explications de nos professionnels de santé.",
        image:
          "https://www.primehealthasheville.com/images/blog/PrimeHealth-Asheville-Rich-Link.6).jpg",
        author: "Adjovi Hounsou",
        date: "15 août 2025",
        href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.primehealthasheville.com%2Fabout-us%2Fblog%2F2024%2Fmay%2Fthe-importance-of-regular-health-screenings%2F&psig=AOvVaw1ptE3h0zAahHnZ7Cwemev4&ust=1754757691114000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCOClvfjT-44DFQAAAAAdAAAAABAE",
      },
      {
        id: 50,
        category: "Santé",
        title: "Aliments qui réduisent naturellement l’inflammation",
        excerpt:
          "Conseils et explications de nos professionnels de santé.",
        image:
          "https://domf5oio6qrcr.cloudfront.net/medialibrary/14953/ftfi0124foodsthatfightinflammationcover.jpg",
        author: "Koffi Zinsou",
        date: "16 août 2025",
        href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.health.harvard.edu%2Fstaying-healthy%2Ffoods-that-fight-inflammation-guide&psig=AOvVaw1O9wNcvEGQysfidZCBMg29&ust=1754757795390000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCOjhnarU-44DFQAAAAAdAAAAABAE",
      },
      {
        id: 51,
        category: "Santé",
        title: "Comprendre la prévention du diabète",
        excerpt:
          "Conseils et explications de nos professionnels de santé.",
        image:
          "https://neelamhospital.com/wp-content/uploads/2025/03/Neelam-1-3.jpg",
        author: "Grâce Ahouandjinou",
        date: "17 août 2025",
        href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fneelamhospital.com%2Fhow-to-prevent-diabetes%2F&psig=AOvVaw2wMqJr3d50WfAdkpthbfPM&ust=1754760038774000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCLDCmNrc-44DFQAAAAAdAAAAABAE",
      },
      {
        id: 52,
        category: "Santé",
        title: "Remèdes naturels contre les rhumes courants",
        excerpt:
          "Conseils et explications de nos professionnels de santé.",
        image:
          "https://max-website20-images.s3.ap-south-1.amazonaws.com/medium_Home_Remedies_2_3a862824e8.jpg",
        author: "Isidore Aholou",
        date: "18 août 2025",
        href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.maxhealthcare.in%2Fblogs%2Fcommon-cold-virus-symptoms-and-home-remedies&psig=AOvVaw0FYocwLA7c1cAmOjhrX4q7&ust=1754760913734000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCNiD8_nf-44DFQAAAAAdAAAAABAE",
      },
      {
        id: 53,
        category: "Santé",
        title: "Comment la santé intestinale influence l’immunité",
        excerpt:
          "Conseils et explications de nos professionnels de santé.",
        image:
          "https://blumhealthmd.com/wp-content/uploads/2020/04/gut-affects-immune-system-blog.png",
        author: "Estelle Agossou",
        date: "19 août 2025",
        href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblumhealthmd.com%2F2020%2F06%2F16%2Fhow-your-gut-affects-your-immune-system%2F&psig=AOvVaw1nbp4hVBtcl5Xrx27aS_HT&ust=1754761037877000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCODxzrXg-44DFQAAAAAdAAAAABAE",
      },
      {
        id: 54,
        category: "Santé",
        title: "Vitamine D : pourquoi et comment en avoir assez",
        excerpt:
          "Conseils et explications de nos professionnels de santé.",
        image:
          "https://ukhsa.blog.gov.uk/wp-content/uploads/sites/33/2016/07/vitamin-d.png",
        author: "Benoît Sossou",
        date: "20 août 2025",
        href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fukhsa.blog.gov.uk%2F2016%2F07%2F21%2Fexpert-interview-why-we-all-need-vitamin-d%2F&psig=AOvVaw0j1tolJ-jrCPGGRp3B0j4w&ust=1754761117075000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCIDz4Nzg-44DFQAAAAAdAAAAABAE",
      },
      {
        id: 55,
        category: "Santé",
        title: "Comprendre les troubles de la santé mentale",
        excerpt:
          "Conseils et explications de nos professionnels de santé.",
        image:
          "https://cdn.sanity.io/images/ix6yojsv/production/7059db5e341b0b904db142e9b6222573d8721efd-1600x900.jpg",
        author: "Nadège Tossou",
        date: "21 août 2025",
        href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcodesupply.co%2Fmental-health-blogs%2F&psig=AOvVaw3CdDWOEAM1KKKSq9Y-cmtM&ust=1754761758469000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCLiD3JDj-44DFQAAAAAdAAAAABAE",
      },
      {
        id: 56,
        category: "Santé",
        title: "Le rôle des antioxydants dans le vieillissement",
        excerpt:
          "Conseils et explications de nos professionnels de santé.",
        image:
          "https://liveforever.club/Images/supplements/antioxidants/role-of-antioxidants-in-ageing-blog.jpg",
        author: "Serge Agbodjan",
        date: "22 août 2025",
        href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fliveforever.club%2Fblog%2Fantioxidants-in-ageing-and-health&psig=AOvVaw0flxB3RkCPwxvGiSumLdZv&ust=1754761821001000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCJiX9Kzj-44DFQAAAAAdAAAAABAE",
      },
      {
        id: 57,
        category: "Bien-être",
        title: "Créer sa routine bien-être personnelle",
        excerpt:
          "Des habitudes simples pour prendre soin de son corps et de son esprit.",
        image:
          "https://naturesplus.com/cdn/shop/articles/19-Building_a_Personalized_Wellness_Routine-Email_600x.png?v=1736182030",
        author: "Ghislain Ahouansou",
        date: "15 août 2025",
        href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnaturesplus.com%2Fblogs%2Fwellness%2Fbuilding-a-personalized-wellness-routine%3Fsrsltid%3DAfmBOor-PkB-wR6Dcxe5yTiuyaEecz2tYqO1P7URHDgucvwma1ijn9EM&psig=AOvVaw0qlQQ5kMPAEMUVRtG687gJ&ust=1754761859463000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCNC1mLzj-44DFQAAAAAdAAAAABAE",
      },
      {
        id: 58,
        category: "Bien-être",
        title: "Le pouvoir de la pensée positive",
        excerpt:
          "Des habitudes simples pour prendre soin de son corps et de son esprit.",
        image:
          "https://continentalhospitals.com/images/blogs/6ebd5bbe1e653ee2fd062df0a13bb63d.webp",
        author: "Rachelle Sossou",
        date: "16 août 2025",
        href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcontinentalhospitals.com%2Fblog%2Fthe-power-of-positive-thinking-how-it-impacts-your-health%2F&psig=AOvVaw1Pdd6WHFCwRhFBtusOv_kt&ust=1754761889038000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCLjrr8vj-44DFQAAAAAdAAAAABAE",
      },
      {
        id: 59,
        category: "Bien-être",
        title: "Hygiène du sommeil : mieux se reposer",
        excerpt:
          "Des habitudes simples pour prendre soin de son corps et de son esprit.",
        image:
          "https://www.sitnsleep.com/cdn/shop/articles/sns_blog_hygiene_804x484_f52e80d4-9eae-48d0-834b-adb1fa7fbb1c_804x.jpg?v=1744741892",
        author: "Arnaud Hounkpatin",
        date: "17 août 2025",
        href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sitnsleep.com%2Fblogs%2Fblog%2Fsleep-hygiene-tips-for-better-rest-health%3Fsrsltid%3DAfmBOoq79SK8LGpraOTKKO4QlBBozl8i_Mh_VuosThr_icZVUGSlDqTF&psig=AOvVaw0LAjWNQDjVEtBK-Q7k8GLW&ust=1754761936757000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCNja_eDj-44DFQAAAAAdAAAAABAE",
      },
      {
        id: 60,
        category: "Bien-être",
        title: "Cultiver la gratitude au quotidien",
        excerpt:
          "Des habitudes simples pour prendre soin de son corps et de son esprit.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCggL5z1A7VS0qnQmGXFg5q0Wkte67s_h0ag&s",
        author: "Mireille Zinsou",
        date: "18 août 2025",
        href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fthelawsongroup.com%2Fweekly-wellness-tips-being-thankful%2F&psig=AOvVaw3nmxIp5Tn9W7I49eWSSRqK&ust=1754761970527000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCMC8j_vj-44DFQAAAAAdAAAAABAE",
      },
      {
        id: 61,
        category: "Bien-être",
        title: "Utiliser les huiles essentielles pour l’équilibre émotionnel",
        excerpt:
          "Des habitudes simples pour prendre soin de son corps et de son esprit.",
        image:
          "https://pureoilsindia.b-cdn.net/storage/blog/abdc8edd9c7fa2f1261c1bc7fcfc035c.jpg",
        author: "Dodji Kpèdé",
        date: "19 août 2025",
        href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pureoilsindia.com%2Fblog%2Fnatural-mood-balancing-oils&psig=AOvVaw0O4dUl4SEPYcysXH2aYs6F&ust=1754762025092000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCMj69Y7k-44DFQAAAAAdAAAAABAE",
      },
      {
        id: 62,
        category: "Bien-être",
        title: "Renforcer sa résilience par la méditation",
        excerpt:
          "Des habitudes simples pour prendre soin de son corps et de son esprit.",
        image:
          "https://blogs.resiliencyprogram.com/wp-content/uploads/2024/07/8.-Mindfulness-and-meditation-1.jpg",
        author: "Sylvie Dossou",
        date: "20 août 2025",
        href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fresiliencyprogram.com%2Fblog%2Fthe-role-of-mindfulness-and-meditation-in-building-resilience&psig=AOvVaw1xiVP9f0myrSSKUBekjMGi&ust=1754762098097000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCNj4hq7k-44DFQAAAAAdAAAAABAE",
      },
      {
        id: 63,
        category: "Bien-être",
        title: "Faire une pause numérique pour clarifier son esprit",
        excerpt:
          "Des habitudes simples pour prendre soin de son corps et de son esprit.",
        image:
          "https://miro.medium.com/v2/resize:fit:1200/1*KzQ9-zn-mVC43uDSkZxbVg.jpeg",
        author: "Raoul Assogba",
        date: "21 août 2025",
        href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2F%40vinaythilak002%2Fdigital-detox-2-0-refresh-your-mind-in-the-modern-world-a147498dbcfc&psig=AOvVaw3kCW5kOOsO5onupxcI8QpZ&ust=1754762316568000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCKDm7Zbl-44DFQAAAAAdAAAAABAJ",
      },
      {
        id: 64,
        category: "Bien-être",
        title: "Les bienfaits de l’hydrothérapie pour la détente",
        excerpt:
          "Des habitudes simples pour prendre soin de son corps et de son esprit.",
        image:
          "https://www.penrithphysiotherapy.com.au/wp-content/uploads/2023/08/WHAT-ARE-THE-BENEFITS-OF-1920-%C3%97-1080-px-1-1024x576.jpg",
        author: "Akossiwa Amoussou",
        date: "22 août 2025",
        href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.penrithphysiotherapy.com.au%2Fwhat-are-the-benefits-of-hydrotherapy%2F&psig=AOvVaw3seAD0m3A660uJk92lBiEr&ust=1754762358565000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCIC_iqrl-44DFQAAAAAdAAAAABAE",
      },
      {
        id: 65,
        category: "Forme",
        title: "Débuter la musculation en toute sécurité",
        excerpt:
          "Des conseils pratiques pour bouger et progresser en sécurité.",
        image:
          "https://images.squarespace-cdn.com/content/v1/65df0f4e3d072c5d1dceb2b3/1711394859415-JUP1MJFHF8P6EUVC4ZPM/A-beginners-guide-to-weight-training.jpeg",
        author: "Adjovi Hounsou",
        date: "15 août 2025",
        href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ebylife.com%2Fblog1%2F2016%2F11%2F7%2Fa-beginners-guide-to-weight-training-and-muscle-gain&psig=AOvVaw3bTSB3wYkFX6IFlIRnRsTO&ust=1754762399881000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCPjG5b7l-44DFQAAAAAdAAAAABAE",
      },
      {
        id: 66,
        category: "Forme",
        title: "La natation pour tonifier tout le corps",
        excerpt:
          "Des conseils pratiques pour bouger et progresser en sécurité.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkVFVibt5WLFHTfdTt2r5ULyvUB3KsYP1gw&s",
        author: "Koffi Zinsou",
        date: "16 août 2025",
        href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Framagyasportsacademy.com%2Fswimming-as-a-full-body-workout-engaging-every-muscle%2F&psig=AOvVaw3SwOUszB7fI2jXkhollG0u&ust=1754762480429000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCPDxq-Tl-44DFQAAAAAdAAAAABAE",
      },
      {
        id: 67,
        category: "Forme",
        title: "CrossFit : l’essentiel pour débuter",
        excerpt:
          "Des conseils pratiques pour bouger et progresser en sécurité.",
        image:
          "https://www.copperjoint.com/wp-content/uploads/2021/04/New-to-CrossFit-8-Top-Tips-for-CrossFit-Beginners_main-26-09-2016.jpg",
        author: "Grâce Ahouandjinou",
        date: "17 août 2025",
        href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.copperjoint.com%2Fnew-to-crossfit-8-top-tips-for-crossfit-beginners%2F%3Fsrsltid%3DAfmBOoomey58YcCWkpV80g9ZSN708lbRIsey53SGib1d44O4wu_HSdoI&psig=AOvVaw1iWvUW4JEqM1YpbUt94URc&ust=1754762517866000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCNCZiPbl-44DFQAAAAAdAAAAABAK",
      },
      {
        id: 68,
        category: "Forme",
        title: "Les bienfaits du vélo en plein air",
        excerpt:
          "Des conseils pratiques pour bouger et progresser en sécurité.",
        image:
          "https://rinascltabike.com/wp-content/uploads/2024/03/What-are-the-outdoor-cycling-benefits-for-males.jpg",
        author: "Isidore Aholou",
        date: "18 août 2025",
        href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Frinascltabike.com%2Fcycling%2Fbenefits%2Fmen%2F&psig=AOvVaw3Ypq3wsxlqrtmG3VSaFT7a&ust=1754762556313000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCMCctIjm-44DFQAAAAAdAAAAABAE",
      },
      {
        id: 69,
        category: "Forme",
        title: "Des échauffements efficaces avant l’effort",
        excerpt:
          "Des conseils pratiques pour bouger et progresser en sécurité.",
        image:
          "https://images.ctfassets.net/qw8ps43tg2ux/4yKS4EdRfQJCKKTqpkwqNu/101a560c688cc2bfb4d58c2e27af3433/issa-blogheader-warmupcooldown.jpg?fm=webp&w=1440&q=75",
        author: "Estelle Agossou",
        date: "19 août 2025",
        href: "https://images.ctfassets.net/qw8ps43tg2ux/4yKS4EdRfQJCKKTqpkwqNu/101a560c688cc2bfb4d58c2e27af3433/issa-blogheader-warmupcooldown.jpg?fm=webp&w=1440&q=75",
      },
      {
        id: 70,
        category: "Forme",
        title: "Le yoga pour la souplesse et la force",
        excerpt:
          "Des conseils pratiques pour bouger et progresser en sécurité.",
        image:
          "https://www.arhantayoga.org/wp-content/uploads/2020/09/Ultimate-Guide-to-Yoga-for-Strength-and-Flexibility.jpg",
        author: "Benoît Sossou",
        date: "20 août 2025",
        href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.arhantayoga.org%2Fblog%2Fthe-ultimate-guide-to-yoga-for-strength-and-flexibility%2F&psig=AOvVaw2U6ym8JOwm-Ulv6s9bdru2&ust=1754762621856000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCMi__Kjm-44DFQAAAAAdAAAAABAE",
      },
      {
        id: 71,
        category: "Forme",
        title: "Suivre ses progrès sportifs",
        excerpt:
          "Des conseils pratiques pour bouger et progresser en sécurité.",
        image:
          "https://assets-wp-cdn.onsurity.com/wp/wp-content/uploads/2021/03/27182457/Track-Your-Fitness-Progress-Other-than-Just-Weight.png",
        author: "Nadège Tossou",
        date: "21 août 2025",
        href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.onsurity.com%2Fblog%2Ffitness-progress%2F&psig=AOvVaw0FPVOsHs_jIkS1QGeftgbh&ust=1754762660993000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCPjusbrm-44DFQAAAAAdAAAAABAE",
      },
      {
        id: 72,
        category: "Forme",
        title: "Musculation : les idées reçues à dépasser",
        excerpt:
          "Des conseils pratiques pour bouger et progresser en sécurité.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz64uLtgh50npUZlPTbOtlULejWpWF890hIw&s",
        author: "Serge Agbodjan",
        date: "22 août 2025",
        href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.o2fitnessclubs.com%2Fweight-lifting-myths&psig=AOvVaw37J3eBkBIaICzBkaLvpIIH&ust=1754762733150000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCJil69zm-44DFQAAAAAdAAAAABAE",
      },
];


const POSTS_INCREMENT = 12;

const ModernFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(POSTS_INCREMENT);
  const [loadingMore, setLoadingMore] = useState(false);

  // Filter posts based on category and search term
  const filteredPosts = useMemo(() => {
    let posts = allPosts;

    if (selectedCategory !== "Tous") {
      posts = posts.filter((post) => post.category === selectedCategory);
    }

    if (searchTerm.trim() !== "") {
      const lower = searchTerm.toLowerCase();
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(lower) ||
          post.excerpt.toLowerCase().includes(lower)
      );
    }

    return posts;
  }, [selectedCategory, searchTerm]);

  // Reset visibleCount when filters change
  React.useEffect(() => {
    setVisibleCount(POSTS_INCREMENT);
  }, [selectedCategory, searchTerm]);

  // Handler for loading more posts
  const handleLoadMore = () => {
    setLoadingMore(true);
    // Simulate async loading (e.g. API fetch)
    setTimeout(() => {
      setVisibleCount((prev) =>
        Math.min(prev + POSTS_INCREMENT, filteredPosts.length)
      );
      setLoadingMore(false);
    }, 800); // smooth loading delay
  };

  // Posts to actually display
  const postsToShow = filteredPosts.slice(0, visibleCount);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 my-[-30px]">
      {/* Search + Categories Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        {/* Search input */}
        <div className="relative w-full sm:max-w-xs">
          <input
            type="search"
            placeholder="Rechercher un article…"
            className="w-full border border-gray-300 rounded-full py-2 pl-3 pr-10 text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Rechercher un article"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              aria-label="Effacer la recherche"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition text-sm"
            >
              &#10005;
            </button>
          )}
        </div>

        {/* Categories nav */}
        <nav
          aria-label="Catégories"
          className="w-full sm:w-auto"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <ul className="flex gap-4 whitespace-nowrap border-b border-gray-200 overflow-x-auto no-scrollbar">
            {categories.map((cat) => {
              const isActive = cat === selectedCategory;
              return (
                <li key={cat}>
                  <button
                    className={`relative pb-1 font-semibold transition-colors text-xs sm:text-sm px-3 py-1 rounded-full whitespace-nowrap ${
                      isActive
                        ? "text-blue-600 after:absolute after:-bottom-[2px] after:left-0 after:right-0 after:h-1 after:rounded-full after:bg-blue-600"
                        : "text-gray-600 hover:text-blue-500"
                    }`}
                    onClick={() => setSelectedCategory(cat)}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {cat}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap gap-3 mb-8">
        {selectedCategory !== "Tous" && (
          <div className="flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium select-none">
            <span>{selectedCategory}</span>
            <button
              aria-label={`Remove filter ${selectedCategory}`}
              onClick={() => setSelectedCategory("Tous")}
              className="hover:text-blue-900 transition text-sm"
            >
              &#10005;
            </button>
          </div>
        )}
        {searchTerm.trim() !== "" && (
          <div className="flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium select-none">
            <span>Search: "{searchTerm}"</span>
            <button
              aria-label="Effacer le filtre"
              onClick={() => setSearchTerm("")}
              className="hover:text-gray-900 transition text-sm"
            >
              &#10005;
            </button>
          </div>
        )}
      </div>

      {/* Posts Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {postsToShow.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">
            Non posts found matching your filters.
          </p>
        ) : (
          postsToShow.map(
            ({ id, title, excerpt, image, author, date, href }) => (
              <article
                key={id}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
              >
                <a
                  href={href}
                  className="block aspect-[4/3] overflow-hidden relative"
                  aria-label={`Lu full article: ${title}`}
                >
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <h3 className="absolute bottom-4 left-4 right-4 text-white text-lg font-bold line-clamp-2">
                    {title}
                  </h3>
                </a>
                <div className="p-5">
                  <p className="text-gray-700 text-sm line-clamp-3">{excerpt}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-gray-500 select-none">
                    <span>
                      By <strong className="text-gray-900">{author}</strong>
                    </span>
                    <time dateTime={parseDateFr(date).toISOString()}>{date}</time>
                  </div>
                </div>
              </article>
            )
          )
        )}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredPosts.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleLoadMore}
            disabled={loadingMore}
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 text-white font-semibold rounded-md transition"
            aria-label="Charger plus d’articles"
          >
            {loadingMore ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                Loading...
              </>
            ) : (
              "Charger plus"
            )}
          </button>
        </div>
      )}

      {/* Scrollbar CSS */}
      <style jsx>{`
        /* Hide scrollbar for Webkit-based browsers */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
};

export default ModernFilter;
