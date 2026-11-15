import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

// Image de partage (LinkedIn, messageries, réseaux) : générée à la compilation, aux couleurs du site.
export const alt = "Rodrigue Emmanuel Tombe : étudiant BUT R&T parcours Cloud, en recherche de stage DevOps / Cloud";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TAGS = ["Réseaux", "Cloud & DevOps", "Full-Stack", "IA & Data"];

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#0b1120",
          color: "#f1f5f9",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", color: "#22d3ee", fontSize: 28 }}>
          <div style={{ width: 16, height: 16, borderRadius: 4, background: "#22d3ee", marginRight: 16 }} />
          <span>Portfolio</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* 72 px : le nom tient sur une seule ligne dans les 1056 px disponibles. Police par défaut de Satori (un seul graisse). */}
          <div style={{ display: "flex", fontSize: 72, lineHeight: 1.1 }}>{SITE_NAME}</div>
          <div style={{ display: "flex", marginTop: 20, fontSize: 31, color: "#94a3b8" }}>
            {"Étudiant BUT Réseaux & Télécommunications · parcours Cloud"}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex" }}>
            {TAGS.map((tag) => (
              <div
                key={tag}
                style={{
                  display: "flex",
                  marginRight: 14,
                  padding: "10px 20px",
                  fontSize: 26,
                  color: "#22d3ee",
                  border: "2px solid #164e63",
                  borderRadius: 10,
                  background: "#0f1c33",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", marginTop: 26, fontSize: 28, color: "#22d3ee" }}>
            {"Recherche de stage DevOps / Cloud · janvier–mars 2027"}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
