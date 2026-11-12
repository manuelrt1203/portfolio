"use client";
import { useState } from "react";
import {
  ShieldAlert,
  Network,
  Cable,
  UserRound,
  BarChart3,
  Waypoints,
  AudioLines,
  Server,
  Radio,
  Box,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import Modal from "./Modal";
import { saeItems, type SaeItem } from "@/data/sae";

const icons: Record<string, React.ReactNode> = {
  "hygiene-informatique": <ShieldAlert size={20} className="text-[var(--cyan)]" />,
  "reseau-maison-hote": <Network size={20} className="text-[var(--primary)]" />,
  "certification-cablage": <Cable size={20} className="text-[var(--cyan)]" />,
  "ppp-portfolio": <UserRound size={20} className="text-emerald-400" />,
  "traiter-donnees": <BarChart3 size={20} className="text-[var(--primary)]" />,
  "reseau-multi-sites": <Waypoints size={20} className="text-[var(--cyan)]" />,
  "wavestream-audio": <AudioLines size={20} className="text-[var(--primary)]" />,
  "gparc": <Server size={20} className="text-[var(--cyan)]" />,
  "integratif-404": <Radio size={20} className="text-emerald-400" />,
  "sae301-ftth-3d": <Box size={20} className="text-[var(--cyan)]" />,
};

type SemesterFilter = "all" | SaeItem["semester"];

export default function SAE() {
  const [active, setActive] = useState<SaeItem | null>(null);
  const [selectedSemester, setSelectedSemester] = useState<SemesterFilter>("all");

  const filteredItems =
    selectedSemester === "all"
      ? saeItems
      : saeItems.filter((s) => s.semester === selectedSemester);

  return (
    <section id="sae" className="py-24 px-6 border-b border-[var(--card-border)] bg-[var(--card)]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--cyan)] font-semibold mb-3">
              <span className="w-2 h-2 rounded-sm bg-[var(--cyan)]" />
              // 04 — Travaux Académiques
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--fg)]">
              SAÉ — BUT Réseaux &amp; Télécoms
            </h2>
            <p className="text-sm sm:text-base text-[var(--muted)] max-w-xl mt-2 leading-relaxed">
              10 Situations d&apos;Apprentissage et d&apos;Évaluation menées à l&apos;IUT de Béziers. Cliquez sur une carte pour explorer le cahier des charges, le travail réalisé et les livrables.
            </p>
          </div>

          {/* Filtres par Semestre */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl border border-[var(--card-border)] bg-[var(--bg)] self-start md:self-auto font-mono text-xs">
            {(
              [
                { id: "all", label: "Toutes (10)" },
                { id: "Semestre 1", label: "S1" },
                { id: "Semestre 2", label: "S2" },
                { id: "Semestre 3", label: "S3" },
                { id: "SAÉ intégratif", label: "Intégratif" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedSemester(tab.id)}
                className={`px-3 py-1.5 rounded-lg transition font-medium cursor-pointer ${
                  selectedSemester === tab.id
                    ? "bg-[var(--primary)] text-[var(--primary-fg)] shadow-sm"
                    : "text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--card)]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grille des SAÉ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((s) => (
            <button
              key={s.slug}
              type="button"
              onClick={() => setActive(s)}
              className="text-left rounded-2xl border border-[var(--card-border)] bg-[var(--bg)] p-6 transition-all hover:border-[var(--cyan)] hover:shadow-lg flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl border border-[var(--card-border)] bg-[var(--card)] flex items-center justify-center group-hover:border-[var(--cyan)]/40 transition">
                    {icons[s.slug]}
                  </div>
                  <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-[var(--card)] border border-[var(--card-border)] text-[var(--cyan)] font-semibold">
                    {s.code}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-[var(--muted-2)] mb-1 uppercase tracking-wide">
                  {s.semester}
                </div>
                <h3 className="text-base font-bold text-[var(--fg)] mb-2 group-hover:text-[var(--cyan)] transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed line-clamp-3 mb-4">
                  {s.objectif}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--card-border)] flex items-center justify-between text-xs font-mono text-[var(--cyan)] font-semibold">
                <span>Voir le dossier</span>
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal de Détails */}
      {active && (
        <Modal onClose={() => setActive(null)}>
          <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-[var(--card-border)]">
            <div className="w-11 h-11 rounded-xl border border-[var(--card-border)] bg-[var(--bg)] flex items-center justify-center">
              {icons[active.slug]}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[var(--cyan)] font-semibold">
                  {active.code}
                </span>
                <span className="text-[var(--muted-2)] text-xs">·</span>
                <span className="text-xs text-[var(--muted)] font-mono">{active.semester}</span>
              </div>
              <h3 className="text-xl font-bold text-[var(--fg)] mt-0.5">{active.title}</h3>
            </div>
          </div>

          <div className="space-y-6 text-sm">
            {/* Objectif */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--fg)] font-bold mb-2">
                Cahier des charges &amp; Objectif
              </h4>
              <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                {active.objectif}
              </p>
            </div>

            {/* Travail Réalisé */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--fg)] font-bold mb-2">
                Travail Réalisé
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[var(--muted)]">
                {active.travail.map((t, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[var(--cyan)] font-mono font-bold">›</span>
                    <span className="leading-snug">{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compétences mobilisées */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--fg)] font-bold mb-2">
                Compétences Clés Mobilisées
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {active.competences.map((c) => (
                  <span
                    key={c}
                    className="px-2.5 py-1 text-xs font-mono rounded-lg bg-[var(--bg)] text-[var(--fg)] border border-[var(--card-border)]"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Livrables */}
            <div className="pt-4 border-t border-[var(--card-border)]">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--fg)] font-bold mb-2">
                Livrables Validés
              </h4>
              <ul className="space-y-1.5 text-xs text-[var(--muted)] font-mono">
                {active.livrables.map((l, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-emerald-400 flex-shrink-0" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
