/**
 * Identité publique du site : une seule source pour les métadonnées, le sitemap, robots.txt,
 * l'image de partage et le balisage JSON-LD. Rien de privé ici : tout figure déjà sur la page.
 */

/** Alias Vercel du projet « portfolio » (vérifié : rattaché au compte, `vercel alias ls`). */
const DEFAULT_SITE_URL = "https://retombe.vercel.app";

/**
 * URL de production, sans barre finale. Surchargeable (domaine personnalisé) via NEXT_PUBLIC_SITE_URL.
 * La valeur est contrôlée : https obligatoire (http seulement en local), sinon on garde l'URL par défaut,
 * pour qu'une faute de frappe ne casse ni le build ni les liens canoniques.
 */
function resolveSiteUrl(raw: string | undefined): string {
  if (!raw) return DEFAULT_SITE_URL;
  try {
    const url = new URL(raw);
    const local = url.hostname === "localhost" || url.hostname === "127.0.0.1";
    if (url.protocol === "https:" || (local && url.protocol === "http:")) return url.origin;
  } catch {
    // valeur illisible : repli ci-dessous
  }
  return DEFAULT_SITE_URL;
}

export const SITE_URL = resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const SITE_NAME = "Rodrigue Emmanuel Tombe";

/** Titre de l'onglet et des résultats de recherche (≈ 55 caractères). */
export const SITE_TITLE = "Rodrigue Emmanuel Tombe | Réseaux, Cloud & Full-Stack";

/** Description des résultats de recherche (≈ 155 caractères). */
export const SITE_DESCRIPTION =
  "Étudiant BUT R&T (parcours Cloud) à Béziers, en recherche de stage DevOps / Cloud (janv.–mars 2027). Projets : NetCanvas, NetLab, ScorIQ, ENT scolaire.";

export const JOB_TITLE = "Étudiant en BUT Réseaux et Télécommunications (parcours Cloud)";

/** Profils publics, ceux déjà liés dans le Hero et le Contact. */
export const PROFILES = {
  github: "https://github.com/manuelrt1203",
  linkedin: "https://www.linkedin.com/in/rodrigue-emmanuel-tombe/",
} as const;

/** Domaines de compétence, repris des familles déclarées dans src/data/skills.ts. */
export const KNOWS_ABOUT = [
  "Routage et commutation d'entreprise",
  "Fibre optique et ingénierie télécom",
  "Analyse de protocoles réseau",
  "Conteneurs et Linux",
  "Intégration et déploiement continus (CI/CD)",
  "Supervision",
  "Développement front-end",
  "Back-end et API",
  "Tests automatisés",
] as const;
