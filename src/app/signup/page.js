"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/patient-info");
  }, [router]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 p-6 text-center">
      <p className="text-gray-700">Redirection vers l’espace patient…</p>
      <noscript>
        <a className="text-blue-700 underline" href="../patient-info/">
          Continuer vers l’espace patient
        </a>
      </noscript>
    </main>
  );
}
