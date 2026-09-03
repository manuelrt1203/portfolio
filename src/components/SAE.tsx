"use client";
import { useState } from "react";
import {
  ShieldAlert, Network, Cable, UserRound, BarChart3,
  Waypoints, AudioLines, Server, Radio, ChevronRight,
} from "lucide-react";
import Modal from "./Modal";
import { saeItems, type SaeItem } from "@/data/sae";

const icons: Record<string, React.ReactNode> = {
  "hygiene-informatique": <ShieldAlert size={22} />,
  "reseau-maison-hote": <Network size={22} />,
  "certification-cablage": <Cable size={22} />,
  "ppp-portfolio": <UserRound size={22} />,
  "traiter-donnees": <BarChart3 size={22} />,
  "reseau-multi-sites": <Waypoints size={22} />,
  "wavestream-audio": <AudioLines size={22} />,
  "gparc": <Server size={22} />,
  "integratif-404": <Radio size={22} />,
};

const semesters: SaeItem["semester"][] = ["Semestre 1", "Semestre 2", "SAÉ intégratif"];

export default function SAE() {
  const [active, setActive] = useState<SaeItem | null>(null);

  return (
    <section id="sae" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Ce qui m&apos;a été demandé
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            SAÉ — BUT R&amp;T
          </h2>
          <p style={{ color: "var(--muted)", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            9 situations d&apos;apprentissage et d&apos;évaluation menées à l&apos;IUT de
            Béziers. Clique sur une carte pour voir l&apos;objectif, le travail réalisé,
            les compétences mobilisées et les livrables de chacune.
          </p>
        </div>

        {semesters.map((sem) => {
          const items = saeItems.filter((s) => s.semester === sem);
          if (items.length === 0) return null;
          return (
            <div key={sem} style={{ marginBottom: 40 }}>
              <p
                className="mono"
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "var(--muted)",
                  marginBottom: 16,
                }}
              >
                {sem}
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                  gap: 16,
                }}
              >
                {items.map((s) => (
                  <button
                    key={s.slug}
                    onClick={() => setActive(s)}
                    className="card card-hover"
                    style={{
                      padding: 22,
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                      font: "inherit",
                      color: "inherit",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div className="icon-box" style={{ width: 40, height: 40 }}>
                        {icons[s.slug]}
                      </div>
                      <span className="mono" style={{ fontSize: "0.75rem", color: "var(--muted-2)" }}>
                        {s.code}
                      </span>
                    </div>
                    <div>
                      <h3 style={{ fontSize: "0.98rem", fontWeight: 700, marginBottom: 4 }}>
                        {s.title}
                      </h3>
                      <p style={{ color: "var(--muted)", fontSize: "0.82rem", lineHeight: 1.5 }}>
                        {s.objectif.length > 100 ? s.objectif.slice(0, 100).trimEnd() + "…" : s.objectif}
                      </p>
                    </div>
                    <div
                      className="mono"
                      style={{
                        marginTop: "auto",
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        fontSize: "0.78rem",
                        color: "var(--primary)",
                        fontWeight: 600,
                      }}
                    >
                      Détails <ChevronRight size={14} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {active && (
        <Modal onClose={() => setActive(null)}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
            <div className="icon-box" style={{ width: 44, height: 44 }}>
              {icons[active.slug]}
            </div>
            <div>
              <span className="mono" style={{ fontSize: "0.78rem", color: "var(--primary)", fontWeight: 600 }}>
                {active.code} · {active.semester}
              </span>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700 }}>{active.title}</h3>
            </div>
          </div>

          <span className="tag" style={{ marginBottom: 20, display: "inline-block" }}>
            {active.status}
          </span>

          <SectionBlock title="Ce qui était demandé">
            <p style={{ color: "var(--muted)", fontSize: "0.92rem", lineHeight: 1.75 }}>
              {active.objectif}
            </p>
          </SectionBlock>

          <SectionBlock title="Ce qui a été réalisé">
            <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              {active.travail.map((t) => (
                <li key={t} style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                  {t}
                </li>
              ))}
            </ul>
          </SectionBlock>

          <SectionBlock title="Compétences mobilisées">
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {active.competences.map((c) => (
                <span key={c} className="tag">
                  {c}
                </span>
              ))}
            </div>
          </SectionBlock>

          <SectionBlock title="Livrables" last>
            <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 }}>
              {active.livrables.map((l) => (
                <li key={l} style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.6 }}>
                  {l}
                </li>
              ))}
            </ul>
          </SectionBlock>
        </Modal>
      )}
    </section>
  );
}

function SectionBlock({
  title,
  children,
  last = false,
}: {
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div style={{ marginBottom: last ? 0 : 22 }}>
      <p
        className="mono"
        style={{
          fontSize: "0.75rem",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          color: "var(--fg)",
          marginBottom: 10,
        }}
      >
        {title}
      </p>
      {children}
    </div>
  );
}
