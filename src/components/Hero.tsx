"use client";
import { useEffect, useState } from "react";
import { Download, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./SocialIcons";

const roles = [
  "Étudiant en Réseaux & Télécoms",
  "Futur Ingénieur Cloud/DevOps",
  "Passionné Linux & IoT",
  "Architecte en devenir",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (charIndex < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, 55);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (charIndex > 0) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, 30);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [charIndex, typing, roleIndex]);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        padding: "120px 24px 80px",
        overflow: "hidden",
      }}
    >
      {/* Background blobs */}
      <div
        className="blob"
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: 500,
          height: 500,
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.08) 60%, transparent 100%)",
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "2%",
          width: 400,
          height: 400,
          background:
            "radial-gradient(ellipse, rgba(6,182,212,0.12) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 48,
          flexWrap: "wrap",
        }}
      >
        {/* Text content */}
        <div style={{ flex: "1 1 480px", maxWidth: 600 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: 999,
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.3)",
              marginBottom: 24,
              fontSize: "0.85rem",
              color: "var(--primary)",
              fontWeight: 600,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#10b981",
                display: "inline-block",
                boxShadow: "0 0 8px #10b981",
              }}
            />
            Disponible pour stages & alternances
          </div>

          <h1
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: 16,
              letterSpacing: "-0.02em",
            }}
          >
            Bonjour, je suis{" "}
            <span className="gradient-text">Rodrigue Emmanuel</span>
          </h1>

          <div
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
              color: "var(--muted)",
              fontWeight: 500,
              marginBottom: 20,
              minHeight: "2rem",
            }}
          >
            {displayed}
            <span className="cursor" />
          </div>

          <p
            style={{
              color: "var(--muted)",
              fontSize: "1.05rem",
              lineHeight: 1.75,
              marginBottom: 36,
              maxWidth: 520,
            }}
          >
            Étudiant en Bachelor Réseaux & Télécoms à l&apos;IUT de Béziers.
            Passionné par les systèmes Linux, le Cloud et l&apos;IoT. Je crée des
            solutions techniques élégantes et je documente mon parcours à travers
            mon blog et mes projets.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 40 }}>
            <a href="#projects" className="btn-primary">
              Voir mes projets
              <ArrowDown size={16} />
            </a>
            <a
              href="/CV_Rodrigue_Emmanuel.pdf"
              className="btn-secondary"
              download
            >
              <Download size={16} />
              Télécharger le CV
            </a>
          </div>

          {/* Social links */}
          <div style={{ display: "flex", gap: 16 }}>
            {[
              {
                icon: <GithubIcon size={20} />,
                href: "https://github.com/rodrigue-emmanuel",
                label: "GitHub",
              },
              {
                icon: <LinkedinIcon size={20} />,
                href: "https://linkedin.com/in/rodrigue-emmanuel",
                label: "LinkedIn",
              },
              {
                icon: <InstagramIcon size={20} />,
                href: "https://instagram.com",
                label: "Instagram",
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  border: "1px solid var(--card-border)",
                  background: "var(--card)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--muted)",
                  transition: "all 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--primary)";
                  e.currentTarget.style.color = "var(--primary)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--card-border)";
                  e.currentTarget.style.color = "var(--muted)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Avatar card */}
        <div
          style={{
            flex: "0 0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            className="float"
            style={{
              position: "relative",
              width: 280,
              height: 280,
            }}
          >
            {/* Glow ring */}
            <div
              style={{
                position: "absolute",
                inset: -4,
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, var(--primary), var(--secondary), var(--accent))",
                padding: 4,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background: "var(--bg)",
                }}
              />
            </div>
            {/* Avatar placeholder */}
            <div
              style={{
                position: "absolute",
                inset: 4,
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.2))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "5rem",
                overflow: "hidden",
              }}
            >
              👨‍💻
            </div>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: 16,
            }}
          >
            {[
              { label: "Projets", value: "10+" },
              { label: "Articles", value: "20+" },
              { label: "Langages", value: "5+" },
            ].map((s) => (
              <div
                key={s.label}
                className="glass-card"
                style={{
                  padding: "12px 18px",
                  textAlign: "center",
                  minWidth: 72,
                }}
              >
                <div
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    color: "var(--primary)",
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{ fontSize: "0.75rem", color: "var(--muted)", fontWeight: 500 }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          color: "var(--muted)",
          textDecoration: "none",
          fontSize: "0.8rem",
        }}
      >
        <span>Découvrir</span>
        <ArrowDown size={16} style={{ animation: "float 2s ease-in-out infinite" }} />
      </a>
    </section>
  );
}
