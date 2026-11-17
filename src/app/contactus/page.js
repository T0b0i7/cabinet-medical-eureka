import React from "react";
import HomeContact from "@/components/Home/HomeContact";

export const metadata = {
  title: "Contact — Cabinet Médical EURÊKA",
  description:
    "Contactez le Cabinet Médical EURÊKA à Porto-Novo : téléphone, WhatsApp, e-mail et formulaire de contact. Ouvert 7j/7 de 08h00 à 18h00.",
};

export default function ContactPage() {
  return (
    <div>
      <HomeContact />
    </div>
  );
}
