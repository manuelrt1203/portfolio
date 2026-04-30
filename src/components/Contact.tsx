"use client";
import { useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./SocialIcons";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: 10,
    border: "1.5px solid var(--card-border)",
    background: "var(--bg)",
    color: "var(--fg)",
    fontSize: "0.95rem",
    transition: "all 0.2s",
    fontFamily: "inherit",
  };

  return (
    <section
      id="contact"
      style={{ padding: "100px 24px" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
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
            Travaillons ensemble
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              marginBottom: 16,
            }}
          >
            Me <span className="gradient-text">Contacter</span>
          </h2>
          <p style={{ color: "var(--muted)", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
            Une question, une opportunité de stage ou juste envie d&apos;échanger ?
            N&apos;hésitez pas, je répondrai dans les plus brefs délais.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 40,
          }}
        >
          {/* Contact info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              {
                icon: <Mail size={20} />,
                label: "Email",
                value: "manuelrt1203@gmail.com",
                href: "mailto:manuelrt1203@gmail.com",
                color: "#6366f1",
              },
              {
                icon: <Phone size={20} />,
                label: "Téléphone",
                value: "06 68 41 16 35",
                href: "tel:0668411635",
                color: "#8b5cf6",
              },
              {
                icon: <MapPin size={20} />,
                label: "Localisation",
                value: "Béziers, France",
                href: null,
                color: "#06b6d4",
              },
            ].map((c) => (
              <div
                key={c.label}
                className="glass-card"
                style={{ padding: 20, display: "flex", alignItems: "center", gap: 16 }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: `${c.color}18`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: c.color,
                    flexShrink: 0,
                  }}
                >
                  {c.icon}
                </div>
                <div>
                  <p style={{ color: "var(--muted)", fontSize: "0.8rem", marginBottom: 2 }}>
                    {c.label}
                  </p>
                  {c.href ? (
                    <a
                      href={c.href}
                      style={{
                        color: "var(--fg)",
                        fontWeight: 600,
                        textDecoration: "none",
                        fontSize: "0.95rem",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = c.color)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg)")}
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p style={{ fontWeight: 600, fontSize: "0.95rem" }}>{c.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="glass-card" style={{ padding: 24 }}>
              <p style={{ fontWeight: 700, marginBottom: 16, fontSize: "0.95rem" }}>
                Réseaux sociaux
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                {[
                  { icon: <GithubIcon size={20} />, href: "https://github.com", label: "GitHub", color: "#6366f1" },
                  { icon: <LinkedinIcon size={20} />, href: "https://linkedin.com", label: "LinkedIn", color: "#0077b5" },
                  { icon: <InstagramIcon size={20} />, href: "https://instagram.com", label: "Instagram", color: "#e1306c" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      border: "1px solid var(--card-border)",
                      background: "var(--bg)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--muted)",
                      transition: "all 0.2s",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = s.color;
                      e.currentTarget.style.color = s.color;
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
          </div>

          {/* Form */}
          <div className="glass-card" style={{ padding: 36 }}>
            {sent ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  gap: 16,
                  padding: 40,
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "3rem" }}>✅</div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 800 }}>Message envoyé !</h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
                  Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="btn-primary"
                  style={{ marginTop: 8 }}
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: 4 }}>
                  Envoyez-moi un message
                </h3>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                  }}
                >
                  <div>
                    <label style={{ fontSize: "0.85rem", fontWeight: 600, display: "block", marginBottom: 6 }}>
                      Nom *
                    </label>
                    <input
                      required
                      placeholder="Votre nom"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.85rem", fontWeight: 600, display: "block", marginBottom: 6 }}>
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="votre@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: "0.85rem", fontWeight: 600, display: "block", marginBottom: 6 }}>
                    Sujet *
                  </label>
                  <input
                    required
                    placeholder="Objet de votre message"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.85rem", fontWeight: 600, display: "block", marginBottom: 6 }}>
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Décrivez votre projet, votre question..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{ justifyContent: "center", opacity: loading ? 0.7 : 1 }}
                >
                  {loading ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      <Send size={16} /> Envoyer le message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
