"use client";
import { useState } from "react";
import {
  ExternalLink,
  Lock,
  CheckCircle2,
  Download,
  Wifi,
  Cpu,
  Layers,
  Activity,
  Terminal,
  Share2,
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { projects, type Project } from "@/data/projects";

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const secondaryProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6 border-b border-[var(--card-border)] bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--cyan)] font-semibold mb-3">
              <span className="w-2 h-2 rounded-sm bg-[var(--cyan)]" />
              // 01 — Réalisations Majeures
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--fg)]">
              Projets Phares &amp; Déploiements
            </h2>
            <p className="text-sm sm:text-base text-[var(--muted)] max-w-2xl mt-2 leading-relaxed">
              Applications complètes conçues, testées et déployées en production. Chaque projet répond à un problème
              technique précis avec une architecture éprouvée.
            </p>
          </div>
        </div>

        {/* --- PROJETS PHARES (VITRINES GRAND FORMAT) --- */}
        <div className="space-y-10 mb-20">
          {featuredProjects.map((project, index) => (
            <article
              key={project.id}
              className="rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-6 sm:p-8 transition-all hover:border-[var(--cyan)]/40 hover:shadow-xl shadow-sm relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Colonne Gauche : Descriptif & Spécifications */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Badge & Statut */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[var(--cyan)]/10 text-[var(--cyan)] font-semibold border border-[var(--cyan)]/20">
                        {project.badge}
                      </span>
                      {project.statusLabel && (
                        <span className="text-[11px] font-mono text-[var(--muted)] flex items-center gap-1.5 ml-2">
                          <CheckCircle2 size={12} className="text-emerald-400" />
                          {project.statusLabel}
                        </span>
                      )}
                    </div>

                    {/* Titre & Tagline */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-[var(--fg)] mb-1.5">{project.title}</h3>
                    <p className="text-xs sm:text-sm font-mono text-[var(--muted-2)] mb-4">{project.tagline}</p>

                    {/* Problème & Solution */}
                    {project.problemStatement && (
                      <div className="p-3 rounded-lg border border-[var(--card-border)] bg-[var(--bg)]/80 mb-4 text-xs">
                        <span className="font-mono text-[var(--cyan)] font-semibold uppercase tracking-wider text-[10px] block mb-1">
                          Problématique résolue :
                        </span>
                        <p className="text-[var(--muted)] leading-relaxed">{project.problemStatement}</p>
                      </div>
                    )}

                    {/* Description principale */}
                    <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Points Clés */}
                    <ul className="space-y-2 mb-6 text-xs text-[var(--fg)]">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="text-[var(--cyan)] font-mono font-bold leading-none mt-0.5">›</span>
                          <span className="leading-snug">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags & Liens d'actions */}
                  <div>
                    {/* Tags */}
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

                    {/* Liens Boutons */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-4 py-2 rounded-lg bg-[var(--primary)] text-[var(--primary-fg)] hover:opacity-90 transition shadow-sm"
                          aria-label={`${project.demoLabel || "Tester en ligne"} de ${project.title}`}
                        >
                          <span>{project.demoLabel || "Tester en ligne"}</span>
                          <ExternalLink size={13} />
                        </a>
                      )}

                      {project.downloadUrl && (
                        <a
                          href={project.downloadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3.5 py-2 rounded-lg border border-[var(--card-border)] bg-[var(--bg)] text-[var(--fg)] hover:border-[var(--cyan)] hover:text-[var(--cyan)] transition"
                          aria-label={`${project.downloadLabel || "Releases"} de ${project.title}`}
                        >
                          <Download size={13} />
                          <span>{project.downloadLabel || "Releases"}</span>
                        </a>
                      )}

                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3.5 py-2 rounded-lg border border-[var(--card-border)] bg-[var(--bg)] text-[var(--fg)] hover:border-[var(--cyan)] hover:text-[var(--cyan)] transition"
                          aria-label={`Code source de ${project.title}`}
                        >
                          <GithubIcon size={13} />
                          <span>Code</span>
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[var(--muted-2)] px-2">
                          <Lock size={12} />
                          <span>Dépôt privé</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Colonne Droite : Vitrine Visuelle Dédiée (Mockup d'Interface Réelle) */}
                <div className="lg:col-span-5 w-full">
                  {project.previewType === "topology" && (
                    <div className="rounded-xl border border-[var(--card-border)] bg-[#070b14] p-4 shadow-lg font-mono text-xs text-slate-300">
                      {/* En-tête de fenêtre Desktop */}
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                          <span className="text-[10px] text-slate-400 ml-2">NetCanvas — Topology Canvas</span>
                        </div>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300">
                          v1.15.0
                        </span>
                      </div>

                      {/* Canvas de Topologie simulé */}
                      <div className="relative h-48 rounded-lg bg-[#0d1527] border border-slate-800 p-3 flex flex-col justify-between overflow-hidden">
                        {/* Grille de fond */}
                        <div
                          className="absolute inset-0 opacity-15"
                          style={{
                            backgroundImage: "radial-gradient(#38bdf8 1px, transparent 1px)",
                            backgroundSize: "16px 16px",
                          }}
                        />

                        {/* Équipements du schéma */}
                        <div className="relative z-10 flex items-center justify-between px-2">
                          <div className="p-2 rounded bg-slate-800/90 border border-cyan-500/40 text-center shadow-sm">
                            <span className="text-[10px] font-bold text-cyan-300 block">R1_Béziers</span>
                            <span className="text-[9px] text-slate-400">Cisco 2901</span>
                          </div>
                          <div className="flex-1 flex flex-col items-center px-2">
                            <span className="text-[8px] text-emerald-400 font-semibold mb-0.5">OSPF Area 0</span>
                            <div className="w-full h-0.5 bg-cyan-400/60 relative">
                              <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-300 animate-ping" />
                            </div>
                            <span className="text-[8px] text-slate-500 mt-0.5">Serial 0/0/0 · /30</span>
                          </div>
                          <div className="p-2 rounded bg-slate-800/90 border border-blue-500/40 text-center shadow-sm">
                            <span className="text-[10px] font-bold text-blue-300 block">R2_Campus</span>
                            <span className="text-[9px] text-slate-400">MikroTik ROS</span>
                          </div>
                        </div>

                        {/* Commutation L2 et VLAN */}
                        <div className="relative z-10 flex items-center justify-between pt-2 border-t border-slate-800/80">
                          <span className="text-[9px] text-slate-400">VLAN 10: Prod (192.168.10.0/24)</span>
                          <span className="text-[9px] text-emerald-400 font-semibold">Ping R1 ↔ R2 : 0% Loss</span>
                        </div>
                      </div>

                      {/* Export automatique Cisco / MikroTik */}
                      <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
                        <span>Config Export :</span>
                        <div className="flex gap-2">
                          <span className="text-cyan-400">cisco_ios.cfg ✓</span>
                          <span className="text-blue-400">mikrotik.rsc ✓</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {project.previewType === "packet" && (
                    <div className="rounded-xl border border-[var(--card-border)] bg-[#070b14] p-4 shadow-lg font-mono text-xs text-slate-300">
                      {/* En-tête Packet Inspector */}
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                        <div className="flex items-center gap-2">
                          <Terminal size={14} className="text-cyan-400" />
                          <span className="text-[10px] text-slate-400">NetLab — Packet Frame Decoder</span>
                        </div>
                        <span className="text-[9px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-semibold">
                          TCP / IPv4 / ETH
                        </span>
                      </div>

                      {/* Décomposition de Trame */}
                      <div className="space-y-2 text-[11px]">
                        <div className="p-2.5 rounded bg-[#0d1527] border border-cyan-500/30">
                          <div className="text-[9px] text-cyan-400 uppercase font-bold mb-1">
                            Couche 2 — Trame Ethernet II
                          </div>
                          <div className="text-slate-400 text-[10px] leading-relaxed">
                            DMAC: 00:1A:2B:3C:4D:5E &nbsp;|&nbsp; SMAC: 52:54:00:12:34:56<br />
                            EtherType: 0x0800 (IPv4)
                          </div>
                        </div>

                        <div className="p-2.5 rounded bg-[#0d1527] border border-blue-500/30">
                          <div className="text-[9px] text-blue-400 uppercase font-bold mb-1">
                            Couche 3 — Paquet IPv4
                          </div>
                          <div className="text-slate-400 text-[10px] leading-relaxed">
                            Src: 192.168.1.45 → Dst: 1.1.1.1 (Cloudflare DNS)<br />
                            TTL: 64 &nbsp;|&nbsp; Protocole: 6 (TCP) &nbsp;|&nbsp; Header: 20 bytes
                          </div>
                        </div>

                        <div className="p-2.5 rounded bg-[#0d1527] border border-emerald-500/30">
                          <div className="text-[9px] text-emerald-400 uppercase font-bold mb-1">
                            Couche 4 — Segment TCP
                          </div>
                          <div className="text-slate-400 text-[10px] leading-relaxed">
                            Port Src: 49152 → Dst: 443 (HTTPS) &nbsp;|&nbsp; Flags: [SYN, ACK]
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 pt-2 border-t border-slate-800 text-[10px] text-slate-500 flex justify-between">
                        <span>Calculateur VLSM intégré</span>
                        <span className="text-cyan-400">100% Client-Side</span>
                      </div>
                    </div>
                  )}

                  {project.previewType === "calibration" && (
                    <div className="rounded-xl border border-[var(--card-border)] bg-[#070b14] p-4 shadow-lg font-mono text-xs text-slate-300">
                      {/* En-tête ScorIQ */}
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                        <div className="flex items-center gap-2">
                          <Activity size={14} className="text-emerald-400" />
                          <span className="text-[10px] text-slate-400">ScorIQ — Dixon-Coles &amp; LightGBM</span>
                        </div>
                        <span className="text-[9px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-semibold">
                          Brier Score: 0.174
                        </span>
                      </div>

                      {/* Prédictions & Calibration */}
                      <div className="p-3 rounded-lg bg-[#0d1527] border border-slate-800 space-y-3">
                        <div className="text-[11px] font-bold text-slate-200">
                          Probabilités Calibrées vs Cotes Marché
                        </div>

                        {/* Barres de probabilité */}
                        <div className="space-y-1.5 text-[10px]">
                          <div>
                            <div className="flex justify-between text-slate-400 mb-0.5">
                              <span>Victoire Domicile (1)</span>
                              <span className="text-emerald-400 font-bold">51.4% (Cote 1.95)</span>
                            </div>
                            <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                              <div className="h-full bg-emerald-400 rounded-full" style={{ width: "51.4%" }} />
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between text-slate-400 mb-0.5">
                              <span>Match Nul (N)</span>
                              <span className="text-amber-400 font-bold">27.2% (Cote 3.65)</span>
                            </div>
                            <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                              <div className="h-full bg-amber-400 rounded-full" style={{ width: "27.2%" }} />
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between text-slate-400 mb-0.5">
                              <span>Victoire Extérieur (2)</span>
                              <span className="text-cyan-400 font-bold">21.4% (Cote 4.60)</span>
                            </div>
                            <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                              <div className="h-full bg-cyan-400 rounded-full" style={{ width: "21.4%" }} />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 pt-2 border-t border-slate-800 text-[10px] text-slate-500 flex justify-between">
                        <span>Pipeline Render + FastAPI</span>
                        <span className="text-emerald-400">Recalcul Quotidien Auto</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* --- PROJETS SECONDAIRES & SYSTÈMES (GRILLE COMPACTE) --- */}
        <div>
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--fg)]">
              Autres Architectures &amp; Projets
            </h3>
            <p className="text-xs sm:text-sm text-[var(--muted)] mt-1">
              Systèmes d&apos;automatisation, architectures full-stack et projets éditoriaux.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryProjects.map((project) => (
              <article
                key={project.id}
                className="flex flex-col justify-between rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-6 transition-all hover:border-[var(--cyan)] hover:shadow-md"
              >
                <div>
                  {/* Badge & Statut */}
                  <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-[var(--card-border)]">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--bg)] border border-[var(--card-border)] text-[var(--cyan)] font-semibold">
                      {project.badge}
                    </span>
                    {project.statusLabel && (
                      <span className="text-[11px] font-mono text-[var(--muted)] flex items-center gap-1">
                        <CheckCircle2 size={12} className="text-emerald-400" />
                        {project.statusLabel}
                      </span>
                    )}
                  </div>

                  <h4 className="text-lg font-bold text-[var(--fg)] mb-1">{project.title}</h4>
                  <p className="text-xs font-mono text-[var(--muted-2)] mb-3">{project.tagline}</p>
                  <p className="text-xs text-[var(--muted)] leading-relaxed mb-4">{project.description}</p>

                  <ul className="space-y-1.5 mb-6 text-xs text-[var(--fg)]">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[var(--cyan)] font-mono font-bold">›</span>
                        <span className="leading-tight">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-[var(--card-border)]">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-[var(--bg)] text-[var(--muted)] border border-[var(--card-border)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1.5 rounded-lg border border-[var(--card-border)] bg-[var(--bg)] text-[var(--fg)] hover:border-[var(--cyan)] hover:text-[var(--cyan)] transition"
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
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1.5 rounded-lg bg-[var(--primary)] text-[var(--primary-fg)] hover:opacity-90 transition shadow-sm ml-auto"
                        aria-label={`Démo de ${project.title}`}
                      >
                        <span>En ligne</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
