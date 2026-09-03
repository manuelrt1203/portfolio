"use client";
import { ExternalLink, Lock, TrendingUp, BookOpen, LayoutGrid, GraduationCap } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

const projects = [
  {
    title: "ScorIQ",
    desc: "Pronostics football pilotés par IA : probabilités 1X2/BTTS/over-under (Dixon-Coles + LightGBM), détection de value bets, historique de précision public. Backend FastAPI/PostgreSQL sur Render, frontend React/Vite sur Vercel.",
    tags: ["React", "FastAPI", "PostgreSQL", "Machine Learning"],
    icon: <TrendingUp size={24} />,
    github: "https://github.com/manuelrt1203/scoriq-frontend",
    demo: "https://pronostics-frontend.vercel.app",
    status: null,
  },
  {
    title: "Le blog de Mika",
    desc: "Blog éditorial avec newsletter intégrée : articles au format magazine, back-office admin pour la rédaction et l'envoi de campagnes. Next.js 16, MDX, Turso, Resend.",
    tags: ["Next.js", "TypeScript", "MDX", "Resend"],
    icon: <BookOpen size={24} />,
    github: null,
    demo: "https://le-blog-de-mika.com",
    status: "Dépôt privé",
  },
  {
    title: "NetLab",
    desc: "16 outils pédagogiques interactifs (réseaux, systèmes, algorithmique, télécoms, sécurité, maths) — 100% client, sans inscription.",
    tags: ["Next.js", "TypeScript", "Canvas API"],
    icon: <LayoutGrid size={24} />,
    github: "https://github.com/manuelrt1203/netlab",
    demo: "https://netlab-xi.vercel.app",
    status: null,
  },
  {
    title: "ENT Scolaire",
    desc: "Logiciel de gestion scolaire (notes, messagerie) pour direction, professeurs, élèves et parents. Monorepo desktop (Electron) + web + mobile (Expo) partageant un client Supabase commun.",
    tags: ["Electron", "React Native", "Supabase", "TypeScript"],
    icon: <GraduationCap size={24} />,
    github: null,
    demo: null,
    status: "En développement — dépôt privé",
  },
];

function ProjectLinks({ github, demo, status }: { github: string | null; demo: string | null; status: string | null }) {
  if (!github && !demo) {
    return (
      <div
        className="mono"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          fontSize: "0.8rem",
          color: "var(--muted-2)",
        }}
      >
        <Lock size={13} /> {status}
      </div>
    );
  }
  return (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "8px 16px",
            borderRadius: 3,
            border: "1px solid var(--card-border)",
            background: "transparent",
            color: "var(--muted)",
            textDecoration: "none",
            fontSize: "0.85rem",
            fontWeight: 500,
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--primary)";
            e.currentTarget.style.color = "var(--primary)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--card-border)";
            e.currentTarget.style.color = "var(--muted)";
          }}
        >
          <GithubIcon size={15} /> Code
        </a>
      )}
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "8px 16px",
            borderRadius: 3,
            background: "color-mix(in srgb, var(--primary) 10%, transparent)",
            border: "1px solid var(--primary)",
            color: "var(--primary)",
            textDecoration: "none",
            fontSize: "0.85rem",
            fontWeight: 500,
            transition: "all 0.2s",
          }}
        >
          <ExternalLink size={15} /> Voir le projet
        </a>
      )}
      {status && (
        <span className="mono" style={{ fontSize: "0.75rem", color: "var(--muted-2)" }}>
          {status}
        </span>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ padding: "100px 24px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Ce que j&apos;ai réalisé
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            Projets
          </h2>
          <p style={{ color: "var(--muted)", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            Projets personnels développés en autonomie, en parallèle des études.
            Les projets académiques (SAÉ) sont détaillés{" "}
            <a href="#sae" style={{ color: "var(--primary)", fontWeight: 600 }}>
              juste en dessous
            </a>
            .
          </p>
        </div>

        {/* Projects grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 24,
          }}
        >
          {projects.map((p) => (
            <div
              key={p.title}
              className="card card-hover"
              style={{ padding: 32, position: "relative" }}
            >
              <div className="icon-box" style={{ width: 52, height: 52, marginBottom: 20 }}>
                {p.icon}
              </div>

              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: 12 }}>
                {p.title}
              </h3>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "0.9rem",
                  lineHeight: 1.65,
                  marginBottom: 20,
                }}
              >
                {p.desc}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>

              <ProjectLinks github={p.github} demo={p.demo} status={p.status} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
