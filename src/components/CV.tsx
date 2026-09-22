"use client";
import { Download } from "lucide-react";

export default function CV() {
  return (
    <section
      id="cv"
      style={{
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Mon CV
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            Curriculum Vitae
          </h2>
          <p style={{ color: "var(--muted)", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
            Retrouvez mon parcours, mes compétences et mes expériences en un
            coup d&apos;œil.
          </p>
        </div>

        {/* Embed */}
        <div
          className="card"
          style={{
            padding: 12,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 0,
              paddingTop: "141.4286%",
              overflow: "hidden",
              borderRadius: 3,
            }}
          >
            <iframe
              loading="lazy"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                border: "none",
                padding: 0,
                margin: 0,
              }}
              src="https://www.canva.com/design/DAHUE_iwpgQ/__7JTdHKe8f1pUP_NyeA2g/view?embed"
              allowFullScreen
              allow="fullscreen"
              title="Mon CV — Rodrigue Emmanuel Tombe"
            />
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a
            href="/CV_Rodrigue_Emmanuel.pdf"
            download="CV_Rodrigue_Emmanuel.pdf"
            className="btn-primary"
          >
            <Download size={16} />
            Télécharger le CV
          </a>
        </div>
      </div>
    </section>
  );
}
