"use client";
import { Code2, Server, Wifi, Sparkles, BookOpen, Layers } from "lucide-react";

const domains = [
  {
    icon: <Sparkles size={20} className="text-[var(--primary)]" />,
    title: "Ingénierie Logicielle & IA",
    desc: "Architecture modulaire et accélération par agents IA autonomes (Atelier IA, Claude Code, Antigravity) avec tests rigoureux.",
  },
  {
    icon: <Wifi size={20} className="text-[var(--primary)]" />,
    title: "Réseaux d'Entreprise",
    desc: "VLAN, routage dynamique OSPF/BGP, politiques de sécurité ACL, NAT et conception réseau sous Cisco et MikroTik.",
  },
  {
    icon: <Layers size={20} className="text-[var(--primary)]" />,
    title: "Applications Desktop & Web",
    desc: "Outils techniques sur mesure (NetCanvas sous Electron, NetLab en Next.js, ScorIQ avec FastAPI) du code au déploiement.",
  },
  {
    icon: <Server size={20} className="text-[var(--primary)]" />,
    title: "Cloud & Systèmes",
    desc: "Linux Debian/Ubuntu, conteneurs Docker, hébergement cloud (Render, Vercel), pipelines CI/CD GitHub Actions.",
  },
  {
    icon: <Code2 size={20} className="text-[var(--primary)]" />,
    title: "Télécoms & Fibre Optique",
    desc: "Conception de raccordements FTTH GPON (SAÉ 3.01 en 3D), bilans de puissance optique et certification cuivre Cat 6A.",
  },
  {
    icon: <BookOpen size={20} className="text-[var(--primary)]" />,
    title: "Édition & Rédaction",
    desc: "Rédaction technique, notes d'ingénierie et animation de mon blog personnel (le-blog-de-mika.com).",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-b border-[var(--card-border)] bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--primary)] font-semibold mb-3">
            <span className="w-2 h-2 bg-[var(--primary)]" />
            // 03 — Profil &amp; Trajectoire
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--fg)]">
            À Propos de Rodrigue Emmanuel
          </h2>
          <p className="text-sm sm:text-base text-[var(--muted)] max-w-xl mx-auto mt-2 leading-relaxed">
            Passionné par la convergence entre infrastructures réseau physiques, déploiements Cloud et développement
            logiciel augmenté par l&apos;intelligence artificielle.
          </p>
        </div>

        {/* Grille principale */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Carte Parcours */}
          <div className="lg:col-span-5 rounded-lg border border-[var(--card-border)] bg-[var(--card)] p-6 space-y-5">
            <h3 className="text-lg font-bold text-[var(--fg)]">Mon Parcours</h3>
            
            <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
              Étudiant en <strong className="text-[var(--fg)] font-semibold">2e année de BUT Réseaux &amp; Télécommunications (parcours Cloud)</strong> à
              l&apos;IUT de Béziers (Université de Montpellier), après l&apos;obtention d&apos;un baccalauréat scientifique
              (série C, mention Assez Bien) en 2024.
            </p>

            <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
              Pour concrétiser mes acquis théoriques, je conçois et maintiens des systèmes applicatifs et des outils réseau
              complets (<strong className="text-[var(--fg)] font-semibold">NetCanvas</strong>, <strong className="text-[var(--fg)] font-semibold">ScorIQ</strong>, <strong className="text-[var(--fg)] font-semibold">NetLab</strong>, <strong className="text-[var(--fg)] font-semibold">Atelier IA</strong>).
              J&apos;utilise l&apos;IA comme un levier pour démultiplier ma vélocité tout en garantissant une validation technique sans compromis.
            </p>

            <div className="pt-4 border-t border-[var(--card-border)] space-y-2.5 font-mono text-xs">
              <div className="flex justify-between py-1 border-b border-[var(--card-border)]">
                <span className="text-[var(--muted)]">Disponibilité stage</span>
                <span className="font-semibold text-[var(--fg)]">18 janv. — 29 mars 2027</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[var(--card-border)]">
                <span className="text-[var(--muted)]">Localisation</span>
                <span className="font-semibold text-[var(--fg)]">Béziers / Occitanie &amp; France</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[var(--card-border)]">
                <span className="text-[var(--muted)]">Formation</span>
                <span className="font-semibold text-[var(--fg)]">BUT R&amp;T (Cloud) · IUT Béziers</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[var(--muted)]">Objectif post-BUT</span>
                <span className="font-semibold text-[var(--fg)]">École d&apos;ingénieur / Master</span>
              </div>
            </div>
          </div>

          {/* Grille des Domaines d'intérêt */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {domains.map((d) => (
              <div
                key={d.title}
                className="p-5 rounded-lg border border-[var(--card-border)] bg-[var(--card)] hover:border-[var(--primary)] transition flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded bg-[var(--bg)] border border-[var(--card-border)] flex items-center justify-center mb-3">
                    {d.icon}
                  </div>
                  <h4 className="text-sm font-bold text-[var(--fg)] mb-1.5">{d.title}</h4>
                  <p className="text-xs text-[var(--muted)] leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
