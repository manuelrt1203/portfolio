"use client";
import { GraduationCap, BookOpen, Radio, Layers, ServerCog, Newspaper } from "lucide-react";

const timeline = [
  {
    year: "2024",
    title: "Baccalauréat série C (scientifique)",
    org: "République du Congo — mention Assez Bien",
    desc: "Filière scientifique, spécialité mathématiques-physique.",
    icon: <GraduationCap size={22} />,
    type: "education",
    tags: ["Mathématiques", "Physique"],
  },
  {
    year: "Sept. 2025",
    title: "BUT Réseaux & Télécommunications — Semestre 1",
    org: "IUT de Béziers",
    desc: "Fondamentaux réseaux, Linux, Python. 5 SAÉ : hygiène informatique, réseau VLAN pour une maison d'hôte, certification de câblage Cat 6A, projet professionnel, traitement de données (open data Montpellier).",
    icon: <BookOpen size={22} />,
    type: "education",
    tags: ["VLAN", "Linux", "Python", "Cisco"],
  },
  {
    year: "Fév. 2026",
    title: "BUT R&T — Semestre 2",
    org: "IUT de Béziers",
    desc: "3 SAÉ : réseau multi-sites avec DMZ et VPN IPsec, numérisation d'un signal audio (échantillonnage/quantification), GParc — application web PHP/MySQL de gestion de parc informatique.",
    icon: <Layers size={22} />,
    type: "education",
    tags: ["VPN", "Signal", "PHP/MySQL"],
  },
  {
    year: "Avr. 2026",
    title: "ScorIQ & Le blog de Mika",
    org: "Projets personnels",
    desc: "Lancement de ScorIQ (pronostics football pilotés par IA) et du Blog de Mika (blog éditorial avec newsletter), tous deux en développement actif depuis.",
    icon: <Newspaper size={22} />,
    type: "project",
    tags: ["React", "FastAPI", "Next.js"],
  },
  {
    year: "Mai 2026",
    title: "NetLab",
    org: "Projet personnel",
    desc: "Suite de 16 outils pédagogiques interactifs (réseaux, systèmes, algorithmique, télécoms) déployée sur Vercel.",
    icon: <ServerCog size={22} />,
    type: "project",
    tags: ["Next.js", "Canvas API"],
  },
  {
    year: "Juin 2026",
    title: "SAÉ intégratif — Préparation 404",
    org: "IUT de Béziers — Équipe 4",
    desc: "Chaîne IoT complète en équipe de 4 : capteurs LoRaWAN, Raspberry Pi autonome, RTL-SDR, dashboards Grafana/InfluxDB, API et mesures RF terrain.",
    icon: <Radio size={22} />,
    type: "education",
    tags: ["LoRaWAN", "Raspberry Pi", "Grafana"],
  },
  {
    year: "Juil. 2026",
    title: "ENT Scolaire",
    org: "Projet personnel",
    desc: "Développement d'une plateforme de gestion scolaire (notes, messagerie) — desktop Electron, web et mobile Expo partageant un client Supabase commun.",
    icon: <GraduationCap size={22} />,
    type: "project",
    tags: ["Electron", "React Native", "Supabase"],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      style={{
        padding: "100px 24px",
        background: "var(--card)",
        borderTop: "1px solid var(--card-border)",
        borderBottom: "1px solid var(--card-border)",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Mon histoire
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            Parcours &amp; Timeline
          </h2>
          <p style={{ color: "var(--muted)", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
            Mon chemin académique et mes réalisations, du bac aux projets menés
            en parallèle des études.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Center line */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 2,
              background: "var(--card-border)",
              transform: "translateX(-50%)",
            }}
          />

          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={item.title}
                style={{
                  display: "flex",
                  justifyContent: isLeft ? "flex-end" : "flex-start",
                  paddingBottom: 40,
                  position: "relative",
                }}
              >
                {/* Center dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: 20,
                    width: 12,
                    height: 12,
                    background: item.type === "education" ? "var(--primary)" : "var(--fg)",
                    border: "3px solid var(--card)",
                    transform: "translateX(-50%)",
                    zIndex: 1,
                  }}
                />

                {/* Card */}
                <div
                  className="card"
                  style={{
                    width: "calc(50% - 40px)",
                    padding: 24,
                    marginRight: isLeft ? 40 : 0,
                    marginLeft: isLeft ? 0 : 40,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: 12,
                      flexWrap: "wrap",
                      gap: 8,
                    }}
                  >
                    <div className="icon-box" style={{ width: 40, height: 40 }}>
                      {item.icon}
                    </div>
                    <span
                      className="mono"
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        padding: "4px 10px",
                        borderRadius: 3,
                        border: "1px solid var(--card-border)",
                        color: item.type === "education" ? "var(--primary)" : "var(--fg)",
                      }}
                    >
                      {item.year}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 4 }}>
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--primary)",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      marginBottom: 10,
                    }}
                  >
                    {item.org}
                  </p>
                  <p
                    style={{
                      color: "var(--muted)",
                      fontSize: "0.85rem",
                      lineHeight: 1.6,
                      marginBottom: 14,
                    }}
                  >
                    {item.desc}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {item.tags.map((t) => (
                      <span key={t} className="tag" style={{ fontSize: "0.72rem" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile timeline note */}
      <style>{`
        @media (max-width: 640px) {
          #education .card {
            width: calc(100% - 32px) !important;
            margin-left: 32px !important;
            margin-right: 0 !important;
          }
          #education > div > div > div:nth-child(2) {
            justify-content: flex-start !important;
          }
          #education > div > div:first-child {
            left: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}
