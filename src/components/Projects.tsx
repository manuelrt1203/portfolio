"use client";
import { useState, useMemo } from "react";
import { ExternalLink, Lock, CheckCircle2, Terminal } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { projects, type Project } from "@/data/projects";

type FilterTab = "all" | "network" | "ai" | "fullstack";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");

  const filteredProjects = useMemo(() => {
    if (activeTab === "all") return projects;
    return projects.filter((p) => p.category === activeTab);
  }, [activeTab]);

  return (
    <section id="projects" className="py-24 px-6 border-b border-[var(--card-border)] bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--primary)] font-semibold mb-3">
              <span className="w-2 h-2 bg-[var(--primary)]" />
              // 01 — Projets Personnels
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--fg)]">
              Applications &amp; Systèmes Réalisés
            </h2>
            <p className="text-sm sm:text-base text-[var(--muted)] max-w-xl mt-2">
              Projets complets conçus, développés et déployés en production. Conçus avec l&apos;assistance d&apos;outils
              et d&apos;agents d&apos;ingénierie IA, avec tests et vérification rigoureuse.
            </p>
          </div>

          {/* Filtres de catégorie */}
          <div className="flex flex-wrap gap-2 p-1 rounded-md border border-[var(--card-border)] bg-[var(--card)] self-start md:self-auto">
            {(
              [
                { id: "all", label: "Tous" },
                { id: "network", label: "Réseau & Desktop" },
                { id: "ai", label: "IA & Data" },
                { id: "fullstack", label: "Full-Stack" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 text-xs font-mono font-medium rounded transition ${
                  activeTab === tab.id
                    ? "bg-[var(--primary)] text-[var(--primary-fg)] shadow-sm"
                    : "text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--bg)]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grille des Projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col justify-between rounded-lg border border-[var(--card-border)] bg-[var(--card)] p-6 transition-all hover:border-[var(--primary)] hover:shadow-md"
            >
              <div>
                {/* Header Carte : Badge & Statut */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[var(--card-border)]">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--bg)] border border-[var(--card-border)] text-[var(--primary)] font-semibold">
                    {project.badge}
                  </span>
                  {project.statusLabel && (
                    <span className="text-[11px] font-mono text-[var(--muted)] flex items-center gap-1">
                      <CheckCircle2 size={12} className="text-emerald-500" />
                      {project.statusLabel}
                    </span>
                  )}
                </div>

                {/* Titre & Accroche */}
                <h3 className="text-xl font-bold text-[var(--fg)] mb-1">{project.title}</h3>
                <p className="text-xs font-mono text-[var(--muted-2)] mb-3">{project.tagline}</p>

                {/* Description */}
                <p className="text-xs text-[var(--muted)] leading-relaxed mb-4">{project.description}</p>

                {/* Points forts */}
                <ul className="space-y-1.5 mb-6 text-xs text-[var(--fg)]">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[var(--primary)] font-mono font-bold">›</span>
                      <span className="leading-tight">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Tags Technologiques */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-[var(--card-border)]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-[var(--bg)] text-[var(--muted)] border border-[var(--card-border)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions & Liens */}
                <div className="flex items-center gap-3 pt-2">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1.5 rounded border border-[var(--card-border)] bg-[var(--bg)] text-[var(--fg)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition"
                      aria-label={`Code source de ${project.title}`}
                    >
                      <GithubIcon size={13} />
                      <span>Code</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[var(--muted-2)]">
                      <Lock size={12} />
                      <span>Dépôt privé</span>
                    </span>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1.5 rounded bg-[var(--primary)] text-[var(--primary-fg)] hover:opacity-90 transition shadow-sm ml-auto"
                      aria-label={`Démo en ligne de ${project.title}`}
                    >
                      <span>Démo en ligne</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
