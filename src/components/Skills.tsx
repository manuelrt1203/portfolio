"use client";
import { useEffect, useRef, useState } from "react";
import {
  Code2, MessageSquare, Users, Brain, Zap, PenLine, Wrench,
} from "lucide-react";

const LEVELS = ["Notions", "Bases solides", "Opérationnel", "Confirmé"] as const;
type Level = (typeof LEVELS)[number];

const techSkills: { name: string; level: Level }[] = [
  { name: "React / Next.js", level: "Bases solides" },
  { name: "TypeScript / JavaScript", level: "Bases solides" },
  { name: "Python", level: "Bases solides" },
  { name: "Réseaux (VLAN, routage, DNS/DHCP)", level: "Opérationnel" },
  { name: "PHP / MySQL", level: "Bases solides" },
  { name: "Supabase / PostgreSQL", level: "Bases solides" },
  { name: "Linux / administration serveur", level: "Bases solides" },
  { name: "Git / GitHub", level: "Bases solides" },
];

const softSkills = [
  { name: "Communication", icon: <MessageSquare size={15} /> },
  { name: "Travail en équipe", icon: <Users size={15} /> },
  { name: "Curiosité intellectuelle", icon: <Brain size={15} /> },
  { name: "Autonomie", icon: <Zap size={15} /> },
  { name: "Gestion de deadline", icon: <Wrench size={15} /> },
  { name: "Rédaction / Blog", icon: <PenLine size={15} /> },
];

const tools = [
  "Next.js", "React", "FastAPI", "PostgreSQL", "PHP/MySQL",
  "Electron", "Expo / React Native", "Cisco Packet Tracer",
  "Vercel", "Render", "Grafana / InfluxDB", "Wireshark", "Git",
];

function SkillBar({ name, level, visible }: {
  name: string; level: Level; visible: boolean;
}) {
  const tier = LEVELS.indexOf(level) + 1;
  return (
    <div style={{ marginBottom: 18 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 8,
          alignItems: "center",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>{name}</span>
        <span className="mono" style={{ color: "var(--muted)", fontWeight: 500, fontSize: "0.78rem" }}>
          {level}
        </span>
      </div>
      <div style={{ display: "flex", gap: 4 }}>
        {LEVELS.map((_, i) => (
          <div
            key={i}
            style={{
              height: 5,
              flex: 1,
              borderRadius: 1,
              background: visible && i < tier ? "var(--primary)" : "var(--card-border)",
              transition: `background 0.4s ease ${i * 0.08}s`,
            }}
          />
        ))}
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
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Ce que je maîtrise
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            Compétences
          </h2>
          <p style={{ color: "var(--muted)", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
            Des compétences techniques et humaines forgées par la pratique — projets
            personnels, SAÉ et travail en équipe.
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
          <div className="card" style={{ padding: 36 }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 28, display: "flex", alignItems: "center", gap: 10 }}>
              <Code2 size={20} color="var(--primary)" /> Compétences techniques
            </h3>
            {techSkills.map((s) => (
              <SkillBar key={s.name} {...s} visible={visible} />
            ))}
          </div>

          {/* Soft skills + tools */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div className="card" style={{ padding: 36 }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 24, display: "flex", alignItems: "center", gap: 10 }}>
                <Brain size={20} color="var(--primary)" /> Compétences humaines
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
                      borderRadius: 3,
                      border: "1px solid var(--card-border)",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      color: "var(--fg)",
                      transition: "all 0.2s",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--primary)";
                      e.currentTarget.style.color = "var(--primary)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--card-border)";
                      e.currentTarget.style.color = "var(--fg)";
                    }}
                  >
                    {s.icon} {s.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="card" style={{ padding: 36 }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 24, display: "flex", alignItems: "center", gap: 10 }}>
                <Wrench size={20} color="var(--primary)" /> Outils &amp; technologies
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
