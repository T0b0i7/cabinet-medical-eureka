import React from "react";
import HomeContact from "@/components/Home/HomeContact";

export const metadata = {
  title: "Contact — Cabinet Médical",
  description:
    "Contactez le Cabinet Médical à Cotonou : téléphone, WhatsApp, e-mail et formulaire de contact. Ouvert 7j/7 de 08h00 à 18h00.",
};

export default function ContactPage() {
  return (
    <div>
      <HomeContact />
    </div>
  );
}
