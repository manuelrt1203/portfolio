"use client";
import { Code2, Heart, ExternalLink } from "lucide-react";

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
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background:
                    "linear-gradient(135deg, var(--primary), var(--secondary))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Code2 size={20} color="white" />
              </div>
              <span
                className="gradient-text"
                style={{ fontSize: "1.2rem", fontWeight: 800 }}
              >
                Rodrigue Emmanuel
              </span>
            </div>
            <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.7 }}>
              Étudiant en Réseaux & Télécoms, passionné par le Cloud, Linux et l&apos;IoT.
              Futur Ingénieur Cloud/DevOps.
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
                style={{
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  marginBottom: 14,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
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
                style={{
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  marginBottom: 14,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                Projets
              </p>
              {[
                { label: "Blog Littéraire", href: "https://le-blog-de-mika.com" },
                {
                  label: "Portfolio Wix",
                  href: "https://manuelrt1203.wixsite.com/le-portfolio-de-rodr",
                },
                { label: "GitHub", href: "https://github.com" },
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
          <p
            style={{
              color: "var(--muted)",
              fontSize: "0.85rem",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            © {year} Rodrigue Emmanuel — Fait avec{" "}
            <Heart size={14} style={{ color: "#ef4444", fill: "#ef4444" }} /> &
            Next.js
          </p>
          <p style={{ color: "var(--muted)", fontSize: "0.85rem" }}>
            Déployé sur{" "}
            <span style={{ color: "var(--primary)", fontWeight: 600 }}>Vercel</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
