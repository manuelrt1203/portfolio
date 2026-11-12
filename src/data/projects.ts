export type Project = {
  id: string;
  title: string;
  category: "network" | "fullstack" | "ai";
  tagline: string;
  description: string;
  highlights: string[];
  tags: string[];
  githubUrl: string | null;
  demoUrl: string | null;
  statusLabel?: string;
  badge?: string;
};

export const projects: Project[] = [
  {
    id: "netcanvas",
    title: "NetCanvas",
    category: "network",
    tagline: "Concepteur et simulateur de topologies réseau",
    description:
      "Application desktop conçue pour modéliser des topologies réseau interactives, générer et exporter automatiquement des configurations pour équipements Cisco IOS et MikroTik RouterOS, avec synchronisation cloud via Supabase.",
    highlights: [
      "Export de configurations Cisco IOS & MikroTik RouterOS prêtes à l'emploi",
      "Éditeur de topologie interactif avec détection des conflits d'adressage",
      "Sauvegarde locale chiffrée et synchronisation distante via Supabase",
    ],
    tags: ["Electron", "React", "TypeScript", "Tailwind CSS", "Supabase", "Cisco", "MikroTik"],
    githubUrl: "https://github.com/manuelrt1203/netcanvas",
    demoUrl: null,
    statusLabel: "Application Desktop",
    badge: "Réseau & Desktop",
  },
  {
    id: "scoriq",
    title: "ScorIQ",
    category: "ai",
    tagline: "Moteur prédictif football & calibration de probabilités",
    description:
      "Plateforme de calcul de probabilités sportives s'appuyant sur les modèles Dixon-Coles et LightGBM. Intègre une mesure de calibration publique (Brier score, log-loss) comparée aux cotes des bookmakers.",
    highlights: [
      "Pipeline quotidien automatisé avec alerte sur issue GitHub en cas d'anomalie",
      "Modélisation statistique avancée (Dixon-Coles + LightGBM)",
      "Courbes de fiabilité et audit de calibration en temps réel",
    ],
    tags: ["Python", "FastAPI", "React", "Vite", "LightGBM", "PostgreSQL", "Render"],
    githubUrl: "https://github.com/manuelrt1203/scoriq-backend",
    demoUrl: "https://pronostics-frontend.vercel.app",
    statusLabel: "En production",
    badge: "IA & Data",
  },
  {
    id: "agents-ia",
    title: "Atelier IA",
    category: "ai",
    tagline: "Orchestrateur multi-agents autonome & local",
    description:
      "Architecture locale de 35 agents répartis en 9 départements spécialisés (Direction, Dev, Réseau, Sécurité, UI/UX). Conçu en Python standard avec exécution isolée dans des copies Git de travail, piloté via CLI ou n8n sous Docker.",
    highlights: [
      "101 tests unitaires automatisés validant les contrats et la sécurité",
      "Pipeline quatuor : Coordinateur → Développeur → Relecteur & Testeur",
      "Zéro dépendance externe dans le cœur de la bibliothèque standard",
    ],
    tags: ["Python 3.11", "Docker", "n8n", "Architecture Multi-Agents", "Git Worktrees"],
    githubUrl: "https://github.com/manuelrt1203/agents-ia",
    demoUrl: null,
    statusLabel: "101 tests passants",
    badge: "Orchestration IA",
  },
  {
    id: "netlab",
    title: "NetLab",
    category: "network",
    tagline: "Boîte à outils interactive pour étudiants en Réseaux & Télécoms",
    description:
      "Suite complète d'apprentissage réseau exécutée 100% côté client : calculatrice CIDR/VLSM IPv4/IPv6, décodeur de trames Ethernet/IP/TCP, vérification DoH (DNS over HTTPS), réputation IP et RDAP.",
    highlights: [
      "Calculateurs VLSM et tables de sous-réseaux interactives",
      "Analyseur de trames et de paquets réseau pas à pas",
      "Interrogation en direct sans intermédiaire (DoH Google & Cloudflare, RDAP)",
    ],
    tags: ["Next.js", "TypeScript", "Canvas API", "Réseaux IPv4/IPv6", "DNS DoH"],
    githubUrl: "https://github.com/manuelrt1203/netlab",
    demoUrl: "https://netlab-xi.vercel.app",
    statusLabel: "En production",
    badge: "Outils Réseau",
  },
  {
    id: "ent-scolaire",
    title: "ENT Scolaire",
    category: "fullstack",
    tagline: "Système de gestion scolaire modulaire",
    description:
      "Environnement Numérique de Travail complet connectant direction, professeurs, élèves et parents. Structuré en monorepo partageant un noyau TypeScript commun entre applications desktop, web et mobile.",
    highlights: [
      "Architecture monorepo avec packages partagés entre web, desktop et mobile",
      "Sécurité par ligne (RLS) PostgreSQL stricte selon les rôles utilisateurs",
      "Intégration d'APIs publiques (Adresses BAN, Annuaire Éducation, Calendrier scolaire)",
    ],
    tags: ["TypeScript", "Electron", "Expo", "React Native", "Supabase", "PostgreSQL"],
    githubUrl: null,
    demoUrl: null,
    statusLabel: "Dépôt privé",
    badge: "Architecture Full-Stack",
  },
  {
    id: "le-blog-de-mika",
    title: "Le blog de Mika",
    category: "fullstack",
    tagline: "Plateforme éditoriale & publication technique",
    description:
      "Espace éditorial et blog personnel au format magazine avec newsletter intégrée. Conçu pour partager des retours d'expérience techniques, notes de veille et réflexions sur le génie logiciel.",
    highlights: [
      "Rendu MDX optimisé avec coloration syntaxique et typographie soignée",
      "Back-office de gestion des publications et de diffusion d'articles",
      "Base de données serverless Turso (libSQL) et routage Edge",
    ],
    tags: ["Next.js", "TypeScript", "MDX", "Turso", "Resend", "Tailwind CSS"],
    githubUrl: null,
    demoUrl: "https://le-blog-de-mika.com",
    statusLabel: "En ligne",
    badge: "Web & Contenu",
  },
];
