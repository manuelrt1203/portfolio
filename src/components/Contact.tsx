"use client";
import { useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./SocialIcons";

const CONTACT_EMAIL = "manuelrt1203@gmail.com";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || "Contact depuis le portfolio");
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: 3,
    border: "1px solid var(--card-border)",
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
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Travaillons ensemble
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            Me Contacter
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
                value: CONTACT_EMAIL,
                href: `mailto:${CONTACT_EMAIL}`,
              },
              {
                icon: <Phone size={20} />,
                label: "Téléphone",
                value: "06 68 41 16 35",
                href: "tel:0668411635",
              },
              {
                icon: <MapPin size={20} />,
                label: "Localisation",
                value: "Béziers, France",
                href: null,
              },
            ].map((c) => (
              <div
                key={c.label}
                className="card"
                style={{ padding: 20, display: "flex", alignItems: "center", gap: 16 }}
              >
                <div className="icon-box" style={{ width: 48, height: 48, flexShrink: 0 }}>
                  {c.icon}
                </div>
                <div>
                  <p className="mono" style={{ color: "var(--muted)", fontSize: "0.78rem", marginBottom: 2 }}>
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
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
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
            <div className="card" style={{ padding: 24 }}>
              <p style={{ fontWeight: 700, marginBottom: 16, fontSize: "0.95rem" }}>
                Réseaux sociaux
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                {[
                  { icon: <GithubIcon size={20} />, href: "https://github.com/manuelrt1203", label: "GitHub" },
                  { icon: <LinkedinIcon size={20} />, href: "https://www.linkedin.com/in/rodrigue-emmanuel-tombe/", label: "LinkedIn" },
                  { icon: <InstagramIcon size={20} />, href: "https://www.instagram.com/mika177wise/", label: "Instagram" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    aria-label={s.label}
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 3,
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
          </div>

          {/* Form */}
          <div className="card" style={{ padding: 36 }}>
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
                <div className="icon-box" style={{ width: 56, height: 56 }}>
                  <Send size={24} />
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700 }}>Client mail ouvert</h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
                  Votre message a été pré-rempli dans votre messagerie. Finalisez
                  l&apos;envoi depuis celle-ci pour que je le reçoive.
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
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: 4 }}>
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
                    <label htmlFor="contact-name" style={{ fontSize: "0.85rem", fontWeight: 600, display: "block", marginBottom: 6 }}>
                      Nom *
                    </label>
                    <input
                      id="contact-name"
                      required
                      placeholder="Votre nom"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" style={{ fontSize: "0.85rem", fontWeight: 600, display: "block", marginBottom: 6 }}>
                      Email *
                    </label>
                    <input
                      id="contact-email"
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
                  <label htmlFor="contact-subject" style={{ fontSize: "0.85rem", fontWeight: 600, display: "block", marginBottom: 6 }}>
                    Sujet *
                  </label>
                  <input
                    id="contact-subject"
                    required
                    placeholder="Objet de votre message"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" style={{ fontSize: "0.85rem", fontWeight: 600, display: "block", marginBottom: 6 }}>
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
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
                  className="btn-primary"
                  style={{ justifyContent: "center" }}
                >
                  <Send size={16} /> Envoyer le message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
