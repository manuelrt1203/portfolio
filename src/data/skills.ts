export type SkillCategory = {
  title: string;
  subtitle: string;
  iconName: "network" | "cloud" | "code" | "ai";
  skills: {
    name: string;
    description: string;
    proof: string;
  }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Réseaux & Télécommunications",
    subtitle: "Infrastructures d'entreprise, routage dynamique et ingénierie optique",
    iconName: "network",
    skills: [
      {
        name: "Routage & Commutation d'Entreprise",
        description: "Architecture de réseaux multi-sites, segmentation VLAN (802.1Q), protocoles OSPF, BGP, politiques ACL et NAT.",
        proof: "NetCanvas, SAÉ 1.02, SAÉ 2.1 (ShowPatate), labs BGP",
      },
      {
        name: "Ingénierie Télécom & Fibre Optique",
        description: "Dimensionnement FTTH GPON, bilans de liaison optique, réflectométrie et certification cuivre Cat 6A.",
        proof: "SAÉ 3.01 (modélisation 3D FTTH), SAÉ 1.03 (Fluke DSX-602)",
      },
      {
        name: "Analyse de Protocoles & Diagnostic",
        description: "Inspection et décodage de trames (Ethernet, IPv4/v6, TCP/UDP), vérification DoH (DNS over HTTPS), interrogations RDAP.",
        proof: "NetLab (décodeur interactif), Wireshark",
      },
    ],
  },
  {
    title: "Cloud, DevOps & Supervision",
    subtitle: "Conteneurisation, automatisation de déploiement et observabilité",
    iconName: "cloud",
    skills: [
      {
        name: "Conteneurs & Environnements Linux",
        description: "Docker, Docker Compose, administration système Linux Debian/Ubuntu, gestion de clés SSH et durcissement de base.",
        proof: "Atelier IA (n8n/Docker), SAÉ intégratif (RPi 5 / VM Nginx)",
      },
      {
        name: "Intégration & Déploiement Continus (CI/CD)",
        description: "Pipelines GitHub Actions automatisés, gestion des secrets, déploiement continu Vercel et Render.",
        proof: "Supervision quotidienne de ScorIQ, NetCanvas CI",
      },
      {
        name: "Supervision & Bases de Données Cloud",
        description: "PostgreSQL avec politiques de sécurité par ligne (RLS), Supabase, métriques Cloud Monitoring, dashboards Grafana.",
        proof: "Dashboards Grafana, architecture Supabase de l'ENT et NetCanvas",
      },
    ],
  },
  {
    title: "Développement Web & Logiciel",
    subtitle: "Applications modernes, interfaces réactives et architectures modulaires",
    iconName: "code",
    skills: [
      {
        name: "Front-end & Interfaces Réactives",
        description: "React 19, Next.js (App Router), TypeScript, Tailwind CSS, interfaces web fluides et accessibles.",
        proof: "ScorIQ frontend, Le blog de Mika, NetLab",
      },
      {
        name: "Applications Desktop & Monorepos",
        description: "Écosystème Electron avec communication IPC typée, intégration desktop native sous Windows, macOS et Linux.",
        proof: "NetCanvas (Cisco/MikroTik), ENT Scolaire",
      },
      {
        name: "Back-end, API & Traitement de Données",
        description: "FastAPI, Python, modélisation statistique prédictive (Dixon-Coles, LightGBM) et calibration probabiliste.",
        proof: "ScorIQ backend (Render, PostgreSQL, Supabase)",
      },
    ],
  },
  {
    title: "Automatisation, Tests & Méthode IA",
    subtitle: "Orchestration, validation stricte et accélération par agents autonomes",
    iconName: "ai",
    skills: [
      {
        name: "Systèmes Multi-Agents & Orchestration",
        description: "Conception d'équipes d'agents spécialisés exécutés en bac à sable sécurisé dans des copies Git de travail (worktrees).",
        proof: "Atelier IA (35 rôles, 101 tests unitaires, 0 dépendance stdlib)",
      },
      {
        name: "Contrôle Qualité & Tests Automatisés",
        description: "Pipelines de tests stricts (tests unitaires, d'intégration et typage statique), interdiction des faux succès.",
        proof: "101 tests passants sur Atelier IA, CI/CD systématique",
      },
      {
        name: "Ingénierie & Spécification Assistée",
        description: "Maîtrise d'outils d'assistance avancés (Claude Code, Antigravity, n8n) pour accélérer le prototypage sous contrôle humain.",
        proof: "Multiples projets déployés en production (NetCanvas, ScorIQ, NetLab)",
      },
    ],
  },
];
