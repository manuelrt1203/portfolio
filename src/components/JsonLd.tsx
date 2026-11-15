import { JOB_TITLE, KNOWS_ABOUT, PROFILES, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

/**
 * Balisage schema.org (Person + WebSite) pour les moteurs de recherche et les assistants IA.
 * N'expose que ce qui est déjà public sur la page : pas d'e-mail, de téléphone ni d'adresse.
 */
export default function JsonLd() {
  const personId = `${SITE_URL}/#person`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: "fr-FR",
        publisher: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        jobTitle: JOB_TITLE,
        description: SITE_DESCRIPTION,
        affiliation: { "@type": "CollegeOrUniversity", name: "IUT de Béziers" },
        sameAs: [PROFILES.github, PROFILES.linkedin],
        knowsAbout: [...KNOWS_ABOUT],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // `<` échappé : une valeur contenant « </script> » ne peut pas fermer la balise (consigne de la doc Next.js).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}
