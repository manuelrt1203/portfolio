"use client";
import { Terminal, Cloud, Wifi, BookOpen, PenLine, Palette } from "lucide-react";

const passions = [
  {
    icon: <Terminal size={22} />,
    title: "Linux & Systèmes",
    desc: "Administration, scripting Bash, virtualisation et conteneurisation avec Docker.",
  },
  {
    icon: <Cloud size={22} />,
    title: "Cloud & DevOps",
    desc: "AWS, déploiements automatisés, CI/CD, infrastructure as code.",
  },
  {
    icon: <Wifi size={22} />,
    title: "Réseaux & IoT",
    desc: "Protocoles réseau, architectures IoT, Raspberry Pi, capteurs et connectivité.",
  },
  {
    icon: <BookOpen size={22} />,
    title: "Blog Littéraire",
    desc: "Interviews d'auteurs, conseils d'écriture — le-blog-de-mika.com",
  },
  {
    icon: <PenLine size={22} />,
    title: "Écriture & Poésie",
    desc: "Poésie publiée sur Wattpad sous @Mika177wise. La créativité nourrit la technique.",
  },
  {
    icon: <Palette size={22} />,
    title: "Design Graphique",
    desc: "Création visuelle, UI/UX, identité de marque et communication visuelle.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}
    >
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
          Qui suis-je ?
        </p>
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 900,
            marginBottom: 16,
          }}
        >
          À propos de <span className="gradient-text">moi</span>
        </h2>
        <p
          style={{
            color: "var(--muted)",
            maxWidth: 600,
            margin: "0 auto",
            fontSize: "1.05rem",
            lineHeight: 1.7,
          }}
        >
          Je suis Rodrigue Emmanuel, étudiant passionné qui allie technique et
          créativité. Mon objectif : devenir Ingénieur Cloud/DevOps ou Architecte IoT.
        </p>
      </div>

      {/* Main content */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 40,
          alignItems: "start",
        }}
      >
        {/* Bio card */}
        <div
          className="glass-card"
          style={{ padding: 36 }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg, var(--primary), var(--secondary))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.6rem",
              marginBottom: 24,
            }}
          >
            🎓
          </div>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>
            Mon Parcours
          </h3>
          <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 20 }}>
            Actuellement en <strong style={{ color: "var(--fg)" }}>Bachelor Réseaux & Télécommunications</strong> à
            l&apos;IUT de Béziers, je construis chaque jour mes compétences en Cloud,
            Linux et IoT.
          </p>
          <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 20 }}>
            Mon ambition : intégrer un <strong style={{ color: "var(--fg)" }}>Master ou une école d&apos;ingénieur</strong>{" "}
            spécialisée en Cloud/DevOps pour concrétiser mes projets professionnels.
          </p>
          <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
            En dehors du technique, j&apos;exprime ma créativité à travers mon blog
            littéraire, la poésie et le design graphique.
          </p>

          {/* Info list */}
          <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { label: "📍 Localisation", value: "Béziers, France" },
              { label: "🎓 Formation", value: "Bachelor R&T — IUT Béziers" },
              { label: "📧 Email", value: "manuelrt1203@gmail.com" },
              { label: "🌐 Blog", value: "le-blog-de-mika.com" },
              { label: "📞 Téléphone", value: "06 68 41 16 35" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 0",
                  borderBottom: "1px solid var(--card-border)",
                  gap: 16,
                  flexWrap: "wrap",
                }}
              >
                <span style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
                  {item.label}
                </span>
                <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Passions grid */}
        <div>
          <h3
            style={{
              fontSize: "1.3rem",
              fontWeight: 800,
              marginBottom: 24,
              color: "var(--fg)",
            }}
          >
            Mes passions & intérêts
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: 16,
            }}
          >
            {passions.map((p) => (
              <div
                key={p.title}
                className="glass-card"
                style={{ padding: 20 }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "rgba(99,102,241,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--primary)",
                    marginBottom: 12,
                  }}
                >
                  {p.icon}
                </div>
                <h4 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 6 }}>
                  {p.title}
                </h4>
                <p style={{ color: "var(--muted)", fontSize: "0.83rem", lineHeight: 1.6 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
