import React from "react";
import { HiOutlineInformationCircle } from "react-icons/hi2";

// Bandeau affiché uniquement sur la version « modèle » du site.
export default function PrototypeNotice() {
  return (
    <div className="bg-amber-400 text-amber-950">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-2 text-center text-[11px] sm:text-sm font-semibold leading-snug">
        <HiOutlineInformationCircle
          className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0"
          aria-hidden="true"
        />
        <span>
          Prototype de démonstration — noms, coordonnées et tarifs fictifs,
          personnalisables pour chaque cabinet.
        </span>
      </div>
    </div>
  );
}
