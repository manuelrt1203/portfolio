"use client";
import { Download, ArrowDown, Sparkles, Terminal, ShieldCheck, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 px-6 overflow-hidden border-b border-[var(--card-border)] bg-[var(--bg)]"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Colonne Principale */}
        <div className="lg:col-span-8 flex flex-col items-start">
          {/* Badge Stage */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-[var(--card-border)] bg-[var(--card)] text-xs font-mono text-[var(--muted)] mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
            <span className="font-semibold text-[var(--fg)]">Recherche de stage DevOps / Cloud</span>
            <span className="text-[var(--muted-2)]">·</span>
            <span>18 janv. — 29 mars 2027 (8 à 10 sem.)</span>
          </div>

          {/* Titre Principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--fg)] leading-[1.1] mb-6">
            Rodrigue Emmanuel <span className="text-[var(--primary)]">Tombe</span>
          </h1>

          {/* Sous-titre percutant */}
          <p className="text-lg sm:text-xl font-medium text-[var(--fg)] mb-3">
            Étudiant BUT Réseaux &amp; Télécommunications (parcours Cloud) · IUT de Béziers
          </p>

          {/* Description & Positionnement IA */}
          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed mb-8 max-w-2xl">
            Je conçois et déploie des infrastructures réseau d&apos;entreprise (Cisco, MikroTik, BGP/OSPF, FTTH)
            et des applications full-stack robustes. Bâtisseur augmenté par l&apos;IA, j&apos;orchestre des agents
            et des outils de pointe pour livrer du code testé, fiable et en production à très haute vélocité.
          </p>

          {/* Actions CTA */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-[var(--primary)] text-[var(--primary-fg)] font-medium text-sm transition-transform hover:-translate-y-0.5 shadow-sm hover:shadow"
            >
              Découvrir mes projets
              <ArrowDown size={16} />
            </a>
            <a
              href="/CV_Rodrigue_Emmanuel.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded border border-[var(--card-border)] bg-[var(--card)] text-[var(--fg)] font-medium text-sm transition hover:border-[var(--primary)] hover:text-[var(--primary)] shadow-sm"
            >
              <Download size={16} />
              Télécharger mon CV (PDF)
            </a>
          </div>

          {/* Réseaux & Localisation */}
          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[var(--card-border)] w-full text-xs text-[var(--muted)] font-mono">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[var(--primary)]" />
              <span>Béziers / Occitanie (mobilité stage)</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/manuelrt1203"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[var(--primary)] transition"
                aria-label="Profil GitHub de Rodrigue Emmanuel"
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/rodrigue-emmanuel-tombe/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[var(--primary)] transition"
                aria-label="Profil LinkedIn de Rodrigue Emmanuel"
              >
                <LinkedinIcon size={14} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Colonne Carte Technique / Console */}
        <div className="lg:col-span-4 w-full">
          <div className="rounded-lg border border-[var(--card-border)] bg-[var(--card)] p-6 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-[var(--card-border)]">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[var(--fg)]">
                <Terminal size={15} className="text-[var(--primary)]" />
                <span>SPEC / CANDIDAT</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-[var(--primary)] font-medium">
                PROFIL VÉRIFIÉ
              </span>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div>
                <p className="text-[var(--muted-2)] uppercase text-[10px] tracking-wider mb-1">Formation &amp; Statut</p>
                <p className="text-[var(--fg)] font-medium">BUT2 R&amp;T (Cloud) · IUT de Béziers</p>
                <p className="text-[var(--muted)]">Univ. de Montpellier (2025-2028)</p>
              </div>

              <div>
                <p className="text-[var(--muted-2)] uppercase text-[10px] tracking-wider mb-1">Double Compétence</p>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  <span className="px-2 py-0.5 rounded bg-[var(--bg)] border border-[var(--card-border)] text-[var(--fg)]">
                    Réseaux Cisco &amp; MikroTik
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[var(--bg)] border border-[var(--card-border)] text-[var(--fg)]">
                    FastAPI · Next.js · Electron
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[var(--bg)] border border-[var(--card-border)] text-[var(--fg)]">
                    Docker &amp; Linux
                  </span>
                </div>
              </div>

              <div>
                <p className="text-[var(--muted-2)] uppercase text-[10px] tracking-wider mb-1">Méthode de Développement</p>
                <div className="flex items-start gap-2 text-[var(--muted)] leading-relaxed mt-1">
                  <Sparkles size={13} className="text-[var(--primary)] mt-0.5 flex-shrink-0" />
                  <span>Ingénierie assistée par IA &amp; validation par tests automatisés</span>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--card-border)] flex items-center justify-between text-[11px] text-[var(--muted)]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-500" />
                  10 SAÉ académiques
                </span>
                <span>6 projets déployés</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
