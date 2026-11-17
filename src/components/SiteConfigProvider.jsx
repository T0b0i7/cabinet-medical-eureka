"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { DEFAULT_SITE, normalizeConfig } from "@/lib/siteConfig";

const SiteConfigContext = createContext(DEFAULT_SITE);

export function useSiteConfig() {
  return useContext(SiteConfigContext);
}

export default function SiteConfigProvider({ children }) {
  const [config, setConfig] = useState(DEFAULT_SITE);

  useEffect(() => {
    const read = () => {
      const params = new URLSearchParams(window.location.search);
      const next = normalizeConfig({
        clinique: params.get("clinique") || undefined,
        ville: params.get("ville") || undefined,
        tel: params.get("tel") || undefined,
        email: params.get("email") || undefined,
      });
      setConfig(next);
      document.title = `${next.clinic} — ${next.city}`;
    };

    read();
    window.addEventListener("popstate", read);
    return () => window.removeEventListener("popstate", read);
  }, []);

  return (
    <SiteConfigContext.Provider value={config}>
      {children}
    </SiteConfigContext.Provider>
  );
}
