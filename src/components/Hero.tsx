"use client";
import { useEffect, useState } from "react";
import { Download, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./SocialIcons";

const roles = [
  "Étudiant en Réseaux & Télécoms",
  "Développeur Full-Stack",
  "React · Next.js · Python",
  "IUT de Béziers",
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
        const t = setTimeout(() => {
          setRoleIndex((i) => (i + 1) % roles.length);
          setTyping(true);
        }, 0);
        return () => clearTimeout(t);
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
            className="mono"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              borderRadius: 3,
              border: "1px solid var(--card-border)",
              marginBottom: 24,
              fontSize: "0.8rem",
              color: "var(--muted)",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#22c55e",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            Disponible pour stages &amp; alternances
          </div>

          <h1
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Rodrigue Emmanuel<br />
            <span style={{ color: "var(--primary)" }}>Tombe</span>
          </h1>

          <div
            className="mono"
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
              color: "var(--muted)",
              fontWeight: 500,
              marginBottom: 20,
              minHeight: "1.8rem",
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
            Étudiant en BUT Réseaux &amp; Télécommunications à l&apos;IUT de Béziers.
            Je construis des applications web complètes (React, Next.js, Python) et
            des architectures réseau, du prototype au déploiement.
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
                href: "https://github.com/manuelrt1203",
                label: "GitHub",
              },
              {
                icon: <LinkedinIcon size={20} />,
                href: "https://www.linkedin.com/in/rodrigue-emmanuel-tombe/",
                label: "LinkedIn",
              },
              {
                icon: <InstagramIcon size={20} />,
                href: "https://www.instagram.com/mika177wise/",
                label: "Instagram",
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                aria-label={s.label}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 4,
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
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--card-border)";
                  e.currentTarget.style.color = "var(--muted)";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Monogram card */}
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
            className="card"
            style={{
              position: "relative",
              width: 260,
              height: 260,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 6,
              borderColor: "var(--primary)",
              borderWidth: 2,
            }}
          >
            {/* corner brackets */}
            {[
              { top: -1, left: -1, borderWidth: "3px 0 0 3px" },
              { top: -1, right: -1, borderWidth: "3px 3px 0 0" },
              { bottom: -1, left: -1, borderWidth: "0 0 3px 3px" },
              { bottom: -1, right: -1, borderWidth: "0 3px 3px 0" },
            ].map((pos, i) => (
              <span
                key={i}
                style={{
                  position: "absolute",
                  width: 20,
                  height: 20,
                  borderColor: "var(--primary)",
                  borderStyle: "solid",
                  ...pos,
                }}
              />
            ))}
            <span
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "4.5rem",
                fontWeight: 700,
                color: "var(--fg)",
              }}
            >
              RE<span style={{ color: "var(--primary)" }}>.</span>
            </span>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: 12,
            }}
          >
            {[
              { label: "Projets web", value: "4" },
              { label: "SAÉ", value: "9" },
              { label: "Articles", value: "10" },
            ].map((s) => (
              <div
                key={s.label}
                className="card"
                style={{
                  padding: "12px 16px",
                  textAlign: "center",
                  minWidth: 72,
                }}
              >
                <div
                  className="mono"
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "var(--primary)",
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{ fontSize: "0.72rem", color: "var(--muted)", fontWeight: 500 }}
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
        aria-label="Découvrir la suite"
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
        <span className="mono">scroll</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
}
