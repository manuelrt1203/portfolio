/** Capture d'écran réelle d'un projet en production (fichier dans public/projects/). */
export type Screenshot = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type Project = {
  id: string;
  title: string;
  category: "network" | "fullstack" | "ai";
  tagline: string;
  description: string;
  problemStatement?: string;
  highlights: string[];
  tags: string[];
  githubUrl: string | null;
  demoUrl: string | null;
  demoLabel?: string;
  downloadUrl?: string | null;
  downloadLabel?: string;
  statusLabel?: string;
  badge?: string;
  featured?: boolean;
  previewType?: "topology" | "packet";
  /** Captures réelles : remplacent l'aperçu dessiné (previewType) quand elles existent. */
  screenshots?: Screenshot[];
};

export const projects: Project[] = [
  {
    id: "netcanvas",
    title: "NetCanvas",
    category: "network",
    tagline: "Concepteur et simulateur de topologies réseau vivantes",
    description:
      "Application desktop et web conçue pour modéliser des architectures réseau interactives, simuler le routage (OSPF, BGP, RIP) et exporter automatiquement des configurations prêtes à l'emploi pour équipements Cisco IOS et MikroTik RouterOS.",
    problemStatement:
      "Combler le fossé entre les outils de dessin statiques et les simulateurs lourds en offrant un retour visuel immédiat sur les erreurs d'adressage et de routage.",
    highlights: [
      "Export de configurations Cisco IOS & MikroTik RouterOS conformes",
      "Détection temps réel des conflits IP, masques et erreurs de câblage",
      "Simulateur de cheminement de paquets (Ping / ICMP) et diagnostics",
      "Sauvegarde locale chiffrée (.netcanvas) et synchronisation cloud Supabase",
    ],
    tags: ["Electron", "React", "TypeScript", "Tailwind CSS", "Supabase", "Cisco IOS", "MikroTik"],
    githubUrl: "https://github.com/manuelrt1203/netcanvas",
    demoUrl: "https://netcanvas.vercel.app",
    demoLabel: "Tester en ligne",
    downloadUrl: "https://github.com/manuelrt1203/netcanvas-releases/releases",
    downloadLabel: "Releases Desktop",
    statusLabel: "Desktop & Web",
    badge: "Projet Phare · Réseau",
    featured: true,
    previewType: "topology",
  },
  {
    id: "netlab",
    title: "NetLab",
    category: "network",
    tagline: "Boîte à outils interactive pour étudiants en Réseaux & Télécoms",
    description:
      "Suite d'outils réseau exécutée intégralement côté client dans le navigateur : calculatrice CIDR/VLSM IPv4/IPv6, décodeur graphique de trames Ethernet/IP/TCP, vérification DoH (DNS over HTTPS) et interrogations RDAP.",
    problemStatement:
      "Fournir aux étudiants en réseaux un environnement d'apprentissage autonome sans serveur tiers, avec décodage instantané de trames réelles.",
    highlights: [
      "Décodeur interactif de trames hexadécimales pas à pas (Ethernet / IP / TCP)",
      "Calculateur VLSM avec découpage automatique et tables de sous-réseaux",
      "Requêtes DNS over HTTPS en direct (Google & Cloudflare) et réputation IP",
    ],
    tags: ["Next.js", "TypeScript", "Canvas API", "IPv4/IPv6", "DNS DoH", "RDAP"],
    githubUrl: "https://github.com/manuelrt1203/netlab",
    demoUrl: "https://netlab-xi.vercel.app",
    demoLabel: "Lancer l'outil",
    statusLabel: "En ligne",
    badge: "Projet Phare · Outils",
    featured: true,
    previewType: "packet",
  },
  {
    id: "scoriq",
    title: "ScorIQ",
    category: "ai",
    tagline: "Moteur prédictif football & calibration statistique de probabilités",
    description:
      "Plateforme de calcul de probabilités sportives combinant le modèle statistique Dixon-Coles (loi de Poisson bivariée) et le gradient boosting LightGBM, avec audit public de calibration (Brier score, log-loss) et comparaison aux cotes des bookmakers.",
    problemStatement:
      "Mesurer et publier honnêtement la qualité des probabilités d'un modèle de pronostics : calibration, comparaison aux cotes des bookmakers, et zones où il se trompe.",
    highlights: [
      "Pipeline quotidien automatisé de scraping, recalcul et alertes GitHub Issues",
      "Audit de calibration publique et courbes de fiabilité en temps réel",
      "Architecture distribuée (FastAPI sur Render, DB PostgreSQL, front React)",
    ],
    tags: ["Python", "FastAPI", "React", "LightGBM", "Dixon-Coles", "PostgreSQL", "Render"],
    githubUrl: "https://github.com/manuelrt1203/scoriq-backend",
    demoUrl: "https://pronostics-frontend.vercel.app",
    demoLabel: "Voir l'audit",
    statusLabel: "Production",
    badge: "Projet Phare · IA & Data",
    featured: true,
    screenshots: [
      {
        src: "/projects/scoriq-calibration.webp",
        alt: "Capture du site ScorIQ, onglet Statistiques : courbe de calibration des probabilités annoncées, tableau annoncé contre observé, comparaison avec les cotes des bookmakers (Brier 0,560 contre 0,559) et mise en garde sur son interprétation.",
        caption:
          "Onglet Statistiques (capture du 14/11/2026) : sur 1 518 matchs évalués, la calibration est bonne jusqu'à environ 75 % annoncés, puis le modèle devient trop optimiste (82 % annoncés pour 71 % réalisés). La comparaison aux cotes précise elle-même qu'elle ne mesure pas le modèle seul.",
        width: 1920,
        height: 1080,
      },
      {
        src: "/projects/scoriq-statistiques.webp",
        alt: "Capture du site ScorIQ, onglet Statistiques : 2 286 prédictions enregistrées dont 1 518 évaluées, 54,9 % de pronostics 1X2 corrects, 54,2 % pour les deux équipes marquent, 56,8 % pour plus de 2,5 buts.",
        caption:
          "Indicateurs globaux (capture du 14/11/2026) : 2 286 prédictions enregistrées, 1 518 confrontées au résultat réel, 54,9 % de pronostics 1X2 corrects.",
        width: 1920,
        height: 1080,
      },
    ],
  },
  {
    id: "agents-ia",
    title: "Atelier IA",
    category: "ai",
    tagline: "Orchestrateur multi-agents local & modulaire",
    description:
      "Architecture locale de 35 agents répartis en 9 départements spécialisés (Direction, Dev, Réseau, Sécurité, UI/UX). Conçu en Python standard avec exécution isolée dans des copies Git de travail (worktrees).",
    highlights: [
      "101 tests unitaires automatisés validant les contrats de sécurité",
      "Pipeline quatuor : Coordinateur → Développeur → Relecteur & Testeur",
      "Zéro dépendance externe dans le cœur de la bibliothèque standard",
    ],
    tags: ["Python 3.11", "Docker", "n8n", "Multi-Agents", "Git Worktrees"],
    githubUrl: "https://github.com/manuelrt1203/agents-ia",
    demoUrl: null,
    statusLabel: "101 tests passants",
    badge: "Orchestration IA",
    featured: false,
  },
  {
    id: "ent-scolaire",
    title: "ENT Scolaire",
    category: "fullstack",
    tagline: "Système de gestion scolaire modulaire",
    description:
      "Environnement Numérique de Travail complet connectant direction, professeurs, élèves et parents. Structuré en monorepo partageant un noyau TypeScript commun entre applications desktop, web et mobile.",
    highlights: [
      "Monorepo TypeScript partagé entre Web, Electron et React Native",
      "Sécurité stricte par ligne (RLS) PostgreSQL selon les rôles",
      "Intégration d'APIs publiques (Adresses BAN, Annuaire Éducation)",
    ],
    tags: ["TypeScript", "Electron", "React Native", "Expo", "Supabase", "PostgreSQL"],
    githubUrl: null,
    demoUrl: null,
    statusLabel: "Dépôt privé",
    badge: "Monorepo Full-Stack",
    featured: false,
  },
  {
    id: "le-blog-de-mika",
    title: "Le blog de Mika",
    category: "fullstack",
    tagline: "Plateforme éditoriale & publication technique",
    description:
      "Espace éditorial et blog personnel au format magazine avec newsletter intégrée. Conçu pour partager des retours d'expérience techniques, notes de veille réseau et réflexions sur le génie logiciel.",
    highlights: [
      "Rendu MDX optimisé avec coloration syntaxique et typographie soignée",
      "Back-office de gestion des publications et de diffusion",
      "Base de données serverless Turso (libSQL) et routage Edge",
    ],
    tags: ["Next.js", "TypeScript", "MDX", "Turso", "Resend", "Tailwind CSS"],
    githubUrl: null,
    demoUrl: "https://le-blog-de-mika.com",
    statusLabel: "En ligne",
    badge: "Web & Contenu",
    featured: false,
  },
];
