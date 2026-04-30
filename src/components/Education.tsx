"use client";

const timeline = [
  {
    year: "2024 – Présent",
    title: "Bachelor Réseaux & Télécommunications",
    org: "IUT de Béziers",
    desc: "Formation approfondie en réseaux informatiques, systèmes, programmation et télécommunications. Projets pratiques sur Cisco, Linux, et développement.",
    icon: "🎓",
    type: "education",
    tags: ["Réseaux", "Linux", "Python", "Cisco"],
  },
  {
    year: "2023 – 2024",
    title: "BUT Réseaux & Télécommunications (1ère année)",
    org: "IUT de Béziers",
    desc: "Introduction aux fondamentaux des réseaux, de l'administration système Linux et de la programmation Python.",
    icon: "📚",
    type: "education",
    tags: ["TCP/IP", "Linux", "Python", "HTML/CSS"],
  },
  {
    year: "2023",
    title: "Baccalauréat STI2D",
    org: "Lycée",
    desc: "Baccalauréat Sciences et Technologies de l'Industrie et du Développement Durable, spécialité Systèmes d'Information et Numérique.",
    icon: "🏫",
    type: "education",
    tags: ["STI2D", "SIN", "Électronique"],
  },
  {
    year: "2024",
    title: "Lancement du Blog Littéraire",
    org: "le-blog-de-mika.com",
    desc: "Création et gestion d'un blog dédié à la littérature : interviews d'auteurs, conseils d'écriture, et promotion de la lecture.",
    icon: "✍️",
    type: "project",
    tags: ["Blog", "Rédaction", "SEO"],
  },
  {
    year: "2024",
    title: "Portfolio + IA intégrée",
    org: "Projet personnel",
    desc: "Développement du portfolio Wix avec assistant IA pour répondre aux visiteurs. Premier projet alliant création web et intelligence artificielle.",
    icon: "🤖",
    type: "project",
    tags: ["IA", "Web", "Portfolio"],
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
            Mon histoire
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              marginBottom: 16,
            }}
          >
            Parcours & <span className="gradient-text">Timeline</span>
          </h2>
          <p style={{ color: "var(--muted)", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
            Mon chemin académique et mes réalisations personnelles, de l&apos;école
            aux projets créatifs.
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
              background: "linear-gradient(to bottom, var(--primary), var(--secondary), var(--card-border))",
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
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    background: item.type === "education" ? "var(--primary)" : "var(--secondary)",
                    border: "3px solid var(--bg)",
                    transform: "translateX(-50%)",
                    zIndex: 1,
                    boxShadow: `0 0 12px ${item.type === "education" ? "var(--primary)" : "var(--secondary)"}`,
                  }}
                />

                {/* Card */}
                <div
                  className="glass-card"
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
                    <span
                      style={{
                        fontSize: "1.6rem",
                        lineHeight: 1,
                      }}
                    >
                      {item.icon}
                    </span>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        padding: "4px 10px",
                        borderRadius: 999,
                        background:
                          item.type === "education"
                            ? "rgba(99,102,241,0.12)"
                            : "rgba(139,92,246,0.12)",
                        color:
                          item.type === "education" ? "var(--primary)" : "var(--secondary)",
                      }}
                    >
                      {item.year}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: 4 }}>
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
                      <span key={t} className="tag" style={{ fontSize: "0.74rem" }}>
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
          #education .glass-card {
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
