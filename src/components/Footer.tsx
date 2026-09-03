"use client";
import { Terminal, ExternalLink } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--card)",
        borderTop: "1px solid var(--card-border)",
        padding: "48px 24px 32px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 32,
            marginBottom: 40,
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: 320 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 12,
              }}
            >
              <div className="icon-box" style={{ width: 36, height: 36 }}>
                <Terminal size={18} />
              </div>
              <span
                className="mono"
                style={{ fontSize: "1.1rem", fontWeight: 700 }}
              >
                Rodrigue Emmanuel Tombe
              </span>
            </div>
            <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.7 }}>
              Étudiant en BUT Réseaux &amp; Télécommunications, développeur
              full-stack — IUT de Béziers.
            </p>
          </div>

          {/* Links */}
          <div
            style={{
              display: "flex",
              gap: 48,
              flexWrap: "wrap",
            }}
          >
            <div>
              <p
                className="mono"
                style={{
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  marginBottom: 14,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "var(--muted)",
                }}
              >
                Navigation
              </p>
              {["#about", "#skills", "#projects", "#education", "#contact"].map(
                (href) => {
                  const labels: Record<string, string> = {
                    "#about": "À propos",
                    "#skills": "Compétences",
                    "#projects": "Projets",
                    "#education": "Parcours",
                    "#contact": "Contact",
                  };
                  return (
                    <a
                      key={href}
                      href={href}
                      style={{
                        display: "block",
                        color: "var(--muted)",
                        textDecoration: "none",
                        fontSize: "0.88rem",
                        marginBottom: 8,
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--primary)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--muted)")
                      }
                    >
                      {labels[href]}
                    </a>
                  );
                }
              )}
            </div>

            <div>
              <p
                className="mono"
                style={{
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  marginBottom: 14,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "var(--muted)",
                }}
              >
                Projets
              </p>
              {[
                { label: "ScorIQ", href: "https://pronostics-frontend.vercel.app" },
                { label: "Le blog de Mika", href: "https://le-blog-de-mika.com" },
                { label: "NetLab", href: "https://netlab-xi.vercel.app" },
                { label: "GitHub", href: "https://github.com/manuelrt1203" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    color: "var(--muted)",
                    textDecoration: "none",
                    fontSize: "0.88rem",
                    marginBottom: 8,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--muted)")
                  }
                >
                  {l.label} <ExternalLink size={11} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "var(--card-border)", marginBottom: 24 }} />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p className="mono" style={{ color: "var(--muted)", fontSize: "0.82rem" }}>
            © {year} Rodrigue Emmanuel Tombe
          </p>
          <p className="mono" style={{ color: "var(--muted)", fontSize: "0.82rem" }}>
            Next.js · Déployé sur{" "}
            <span style={{ color: "var(--primary)", fontWeight: 600 }}>Vercel</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
