export type SkillCategory = {
  title: string;
  subtitle: string;
  iconName: "network" | "ai" | "code" | "cloud";
  skills: {
    name: string;
    description: string;
    proof: string;
  }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Ingénierie Logicielle Augmentée par l'IA",
    subtitle: "Conception architecturale, spécification stricte et accélération par agents autonomes",
    iconName: "ai",
    skills: [
      {
        name: "Systèmes Multi-Agents & Orchestration",
        description: "Architecture d'équipes d'agents spécialisés avec flux de travail en bac à sable (Git worktrees).",
        proof: "Atelier IA (35 rôles, 101 tests unitaires, 0 dépendance stdlib)",
      },
      {
        name: "Développement & Prototypage à Haute Vélocité",
        description: "Spécification d'exigences, pilotage d'outils d'ingénierie IA (Claude Code, Antigravity, n8n).",
        proof: "Multiples projets déployés en production (NetCanvas, ScorIQ, NetLab)",
      },
      {
        name: "Contrôle Qualité & Vérification Rigoureuse",
        description: "Audit automatisé, relecture humaine, interdiction du faux succès et des tests affaiblis.",
        proof: "Pipelines de tests systématiques sur chaque livraison",
      },
    ],
  },
  {
    title: "Réseaux & Télécommunications",
    subtitle: "Infrastructures d'entreprise, routage dynamique et ingénierie optique",
    iconName: "network",
    skills: [
      {
        name: "Routage & Commutation d'Entreprise",
        description: "Architecture de réseaux multi-sites, segmentation VLAN, OSPF, BGP, politiques ACL et NAT.",
        proof: "NetCanvas, SAÉ 1.02, SAÉ 2.1 (ShowPatate), labs BGP",
      },
      {
        name: "Ingénierie Télécom & Fibre Optique",
        description: "Dimensionnement FTTH GPON, bilans de liaison optique, certification cuivre Cat 6A.",
        proof: "SAÉ 3.01 (modélisation 3D FTTH), SAÉ 1.03 (Fluke DSX-602)",
      },
      {
        name: "Analyse de Protocoles & Diagnostic",
        description: "Inspection et décodage de trames (Ethernet, IPv4/v6, TCP/UDP), DNS over HTTPS, RDAP.",
        proof: "NetLab (analyseur interactif), Wireshark",
      },
    ],
  },
  {
    title: "Développement Full-Stack & Desktop",
    subtitle: "Applications modernes, interfaces réactives et architectures modulaires",
    iconName: "code",
    skills: [
      {
        name: "Front-end & Interfaces Modernes",
        description: "React 19, Next.js (App Router), TypeScript, Tailwind CSS 4, applications web accessibles.",
        proof: "ScorIQ frontend, Le blog de Mika, NetLab",
      },
      {
        name: "Applications Desktop & Monorepos",
        description: "Écosystème Electron avec communication IPC typée, intégration desktop native.",
        proof: "NetCanvas (Cisco/MikroTik), ENT Scolaire",
      },
      {
        name: "Back-end, API & Machine Learning",
        description: "FastAPI, Python, modélisation prédictive (Dixon-Coles, LightGBM) et calibration probabiliste.",
        proof: "ScorIQ backend (Render, SQLite, Supabase)",
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
        description: "Docker, Docker Compose, administration système Linux Debian/Ubuntu, gestion SSH.",
        proof: "Atelier IA (n8n/Docker), SAÉ intégratif (RPi 5 / VM Nginx)",
      },
      {
        name: "Intégration & Déploiement Continus (CI/CD)",
        description: "Pipelines GitHub Actions, gestion des secrets, déploiement automatisé Vercel & Render.",
        proof: "Supervision quotidienne de ScorIQ, NetCanvas CI",
      },
      {
        name: "Supervision & Bases de Données Cloud",
        description: "PostgreSQL avec politiques de sécurité par ligne (RLS), Supabase, Grafana Cloud, InfluxDB.",
        proof: "Dashboards Grafana, architecture Supabase de l'ENT et NetCanvas",
      },
    ],
  },
];
