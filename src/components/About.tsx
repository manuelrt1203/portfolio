"use client";
import { Code2, Server, Wifi, BookOpen, PenLine, Palette } from "lucide-react";

const passions = [
  {
    icon: <Code2 size={22} />,
    title: "Développement Full-Stack",
    desc: "React, Next.js, TypeScript côté client ; Python, PHP et Supabase côté serveur — du prototype au déploiement.",
  },
  {
    icon: <Wifi size={22} />,
    title: "Réseaux & Télécoms",
    desc: "VLAN, routage, DMZ, VPN IPsec, certification de câblage — cœur du BUT R&T à l'IUT de Béziers.",
  },
  {
    icon: <Server size={22} />,
    title: "IoT & Systèmes embarqués",
    desc: "Capteurs LoRaWAN, Raspberry Pi, RTL-SDR, dashboards Grafana/InfluxDB — expérimentés sur la SAÉ intégratif.",
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
    desc: "Création visuelle, identité de marque et communication visuelle pour mes propres projets.",
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
        <p className="eyebrow" style={{ justifyContent: "center" }}>
          Qui suis-je ?
        </p>
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            marginBottom: 16,
          }}
        >
          À propos de moi
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
          Je suis Rodrigue Emmanuel, étudiant qui allie technique et créativité.
          Mon objectif : poursuivre en Master ou école d&apos;ingénieur après le BUT.
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
        <div className="card" style={{ padding: 36 }}>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 16 }}>
            Mon Parcours
          </h3>
          <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 20 }}>
            Depuis septembre 2025, je prépare un{" "}
            <strong style={{ color: "var(--fg)" }}>BUT Réseaux &amp; Télécommunications</strong> à
            l&apos;IUT de Béziers, après un baccalauréat scientifique (série C,
            mention Assez Bien) obtenu en République du Congo en 2024.
          </p>
          <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 20 }}>
            En parallèle des cours, je développe mes propres projets web
            (ScorIQ, un blog éditorial, une plateforme de gestion scolaire) pour
            mettre en pratique ce que j&apos;apprends — et souvent aller plus loin.
          </p>
          <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
            En dehors du technique, j&apos;exprime ma créativité à travers mon blog
            littéraire, la poésie et le design graphique.
          </p>

          {/* Info list */}
          <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { label: "Localisation", value: "Béziers, France" },
              { label: "Formation", value: "BUT R&T — IUT Béziers" },
              { label: "Email", value: "manuelrt1203@gmail.com" },
              { label: "Blog", value: "le-blog-de-mika.com" },
              { label: "Téléphone", value: "06 68 41 16 35" },
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
                <span className="mono" style={{ color: "var(--muted)", fontSize: "0.85rem" }}>
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
              fontWeight: 700,
              marginBottom: 24,
              color: "var(--fg)",
            }}
          >
            Mes domaines d&apos;intérêt
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
                className="card"
                style={{ padding: 20 }}
              >
                <div className="icon-box" style={{ width: 44, height: 44, marginBottom: 12 }}>
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
