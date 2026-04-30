"use client";
import { ExternalLink, Star } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

const projects = [
  {
    title: "Portfolio Personnel",
    desc: "Ce portfolio — construit avec Next.js 15, TypeScript et Tailwind CSS. Déployé sur Vercel avec thème sombre/clair.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    icon: "🌐",
    color: "#6366f1",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Blog Littéraire",
    desc: "Blog dédié aux interviews d'auteurs et aux conseils d'écriture. Plateforme créée pour partager la passion de la littérature.",
    tags: ["Blog", "Wix", "SEO", "Rédaction"],
    icon: "📝",
    color: "#8b5cf6",
    github: null,
    demo: "https://le-blog-de-mika.com",
    featured: true,
  },
  {
    title: "IA Portfolio Assistant",
    desc: "Assistant IA intégré dans le portfolio Wix. Répond aux questions des visiteurs sur mon parcours et mes projets.",
    tags: ["IA", "Wix", "Chatbot", "API"],
    icon: "🤖",
    color: "#06b6d4",
    github: null,
    demo: "https://manuelrt1203.wixsite.com/le-portfolio-de-rodr",
    featured: true,
  },
  {
    title: "Réseau d'Entreprise Simulé",
    desc: "Conception et configuration d'une infrastructure réseau complète avec VLANs, routage inter-VLAN, DHCP et ACLs sur Packet Tracer.",
    tags: ["Cisco", "VLAN", "Routage", "Réseaux"],
    icon: "🔗",
    color: "#10b981",
    github: "#",
    demo: null,
    featured: false,
  },
  {
    title: "Scripts d'Automatisation Linux",
    desc: "Collection de scripts Bash pour l'automatisation de tâches système : sauvegarde, monitoring, déploiement et gestion de services.",
    tags: ["Bash", "Linux", "Automatisation", "DevOps"],
    icon: "⚙️",
    color: "#f59e0b",
    github: "#",
    demo: null,
    featured: false,
  },
  {
    title: "Station Météo IoT",
    desc: "Capteurs connectés (température, humidité, pression) avec Raspberry Pi. Données affichées en temps réel sur un dashboard web.",
    tags: ["IoT", "Raspberry Pi", "Python", "MQTT"],
    icon: "🌡️",
    color: "#ef4444",
    github: "#",
    demo: null,
    featured: false,
  },
];

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      style={{ padding: "100px 24px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p
            style={{
              color: "var(--primary)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              fontSize: "0.85rem",
              marginBottom: 12,
            }}
          >
            Ce que j&apos;ai réalisé
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              marginBottom: 16,
            }}
          >
            Mes <span className="gradient-text">Projets</span>
          </h2>
          <p style={{ color: "var(--muted)", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
            Des projets techniques, créatifs et innovants qui reflètent ma curiosité
            et mes ambitions.
          </p>
        </div>

        {/* Featured projects */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 24,
            marginBottom: 32,
          }}
        >
          {featured.map((p) => (
            <div
              key={p.title}
              className="glass-card"
              style={{ padding: 32, position: "relative", overflow: "hidden" }}
            >
              {/* Featured badge */}
              <div
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  padding: "4px 10px",
                  borderRadius: 999,
                  background: "rgba(245,158,11,0.12)",
                  border: "1px solid rgba(245,158,11,0.3)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#f59e0b",
                }}
              >
                <Star size={12} fill="#f59e0b" /> Featured
              </div>

              {/* Top accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: `linear-gradient(90deg, ${p.color}, transparent)`,
                }}
              />

              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: `${p.color}20`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.6rem",
                  marginBottom: 20,
                  marginTop: 8,
                }}
              >
                {p.icon}
              </div>

              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: 12 }}>
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

              <div style={{ display: "flex", gap: 12 }}>
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "8px 16px",
                      borderRadius: 8,
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
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "8px 16px",
                      borderRadius: 8,
                      background: `${p.color}15`,
                      border: `1px solid ${p.color}40`,
                      color: p.color,
                      textDecoration: "none",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${p.color}25`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = `${p.color}15`;
                    }}
                  >
                    <ExternalLink size={15} /> Voir le projet
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Other projects */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {others.map((p) => (
            <div
              key={p.title}
              className="glass-card"
              style={{ padding: 24, position: "relative", overflow: "hidden" }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: `linear-gradient(90deg, ${p.color}, transparent)`,
                }}
              />

              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16, marginTop: 4 }}>
                <span style={{ fontSize: "1.8rem" }}>{p.icon}</span>
                <div style={{ display: "flex", gap: 8 }}>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      style={{ color: "var(--muted)", transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                    >
                      <GithubIcon size={18} />
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer"
                      style={{ color: "var(--muted)", transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 8 }}>
                {p.title}
              </h3>
              <p style={{ color: "var(--muted)", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: 16 }}>
                {p.desc}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.tags.map((t) => (
                  <span key={t} className="tag" style={{ fontSize: "0.74rem" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
