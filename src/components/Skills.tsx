"use client";
import { useEffect, useRef, useState } from "react";

const techSkills = [
  { name: "Python", level: 75, icon: "🐍" },
  { name: "Linux / Bash", level: 80, icon: "🐧" },
  { name: "HTML / CSS", level: 85, icon: "🎨" },
  { name: "Réseaux (TCP/IP, VLAN...)", level: 78, icon: "🌐" },
  { name: "Docker / Conteneurisation", level: 60, icon: "🐳" },
  { name: "Git / GitHub", level: 70, icon: "🔀" },
  { name: "Cloud (AWS Basics)", level: 55, icon: "☁️" },
  { name: "IoT (Raspberry Pi)", level: 65, icon: "🔌" },
];

const softSkills = [
  { name: "Communication", icon: "💬" },
  { name: "Travail en équipe", icon: "🤝" },
  { name: "Curiosité intellectuelle", icon: "🧠" },
  { name: "Autonomie", icon: "⚡" },
  { name: "Créativité", icon: "🎨" },
  { name: "Résolution de problèmes", icon: "🔧" },
  { name: "Rédaction / Blog", icon: "✍️" },
  { name: "Adaptabilité", icon: "🔄" },
];

const tools = [
  "VS Code", "Neovim", "Wireshark", "Cisco Packet Tracer",
  "VirtualBox", "Proxmox", "Ansible (bases)", "Nginx",
  "WordPress", "Figma", "Discord Bot", "Notion",
];

function SkillBar({ name, level, icon, visible }: {
  name: string; level: number; icon: string; visible: boolean;
}) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 8,
          alignItems: "center",
        }}
      >
        <span style={{ fontWeight: 600, fontSize: "0.92rem", display: "flex", gap: 8, alignItems: "center" }}>
          <span>{icon}</span> {name}
        </span>
        <span style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.88rem" }}>
          {level}%
        </span>
      </div>
      <div
        style={{
          height: 8,
          background: "var(--card-border)",
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: visible ? `${level}%` : "0%",
            background: "linear-gradient(90deg, var(--primary), var(--accent))",
            borderRadius: 4,
            transition: "width 1.2s ease",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{
        padding: "100px 24px",
        background: "var(--card)",
        borderTop: "1px solid var(--card-border)",
        borderBottom: "1px solid var(--card-border)",
      }}
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
            Ce que je maîtrise
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              marginBottom: 16,
            }}
          >
            Mes <span className="gradient-text">Compétences</span>
          </h2>
          <p style={{ color: "var(--muted)", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
            Un mélange de compétences techniques et humaines forgées par la pratique,
            les projets et la passion.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: 40,
          }}
        >
          {/* Tech skills */}
          <div className="glass-card" style={{ padding: 36 }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: 28 }}>
              🛠️ Compétences Techniques
            </h3>
            {techSkills.map((s) => (
              <SkillBar key={s.name} {...s} visible={visible} />
            ))}
          </div>

          {/* Soft skills + tools */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div className="glass-card" style={{ padding: 36 }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: 24 }}>
                🧠 Compétences Humaines
              </h3>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 10,
                }}
              >
                {softSkills.map((s) => (
                  <div
                    key={s.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "8px 14px",
                      borderRadius: 10,
                      background: "rgba(99,102,241,0.08)",
                      border: "1px solid rgba(99,102,241,0.2)",
                      fontSize: "0.88rem",
                      fontWeight: 500,
                      color: "var(--fg)",
                      transition: "all 0.2s",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(99,102,241,0.18)";
                      e.currentTarget.style.borderColor = "var(--primary)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(99,102,241,0.08)";
                      e.currentTarget.style.borderColor = "rgba(99,102,241,0.2)";
                    }}
                  >
                    <span>{s.icon}</span> {s.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card" style={{ padding: 36 }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: 24 }}>
                🔧 Outils & Technologies
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {tools.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
