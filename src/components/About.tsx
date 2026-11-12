"use client";
import { Code2, Server, Wifi, Sparkles, BookOpen, Layers } from "lucide-react";

const domains = [
  {
    icon: <Wifi size={20} className="text-[var(--cyan)]" />,
    title: "Réseaux d'Entreprise",
    desc: "VLANs (802.1Q), routage dynamique OSPF/BGP, politiques de sécurité ACL, NAT et configuration Cisco IOS & MikroTik RouterOS.",
  },
  {
    icon: <Server size={20} className="text-[var(--primary)]" />,
    title: "Cloud & Systèmes Linux",
    desc: "Linux Debian/Ubuntu, conteneurisation Docker, hébergement cloud (Render, Vercel) et pipelines CI/CD automatisés.",
  },
  {
    icon: <Layers size={20} className="text-[var(--cyan)]" />,
    title: "Applications Desktop & Web",
    desc: "Outils techniques sur mesure (NetCanvas sous Electron, NetLab en Next.js, ScorIQ avec FastAPI) du code au déploiement.",
  },
  {
    icon: <Sparkles size={20} className="text-emerald-400" />,
    title: "Ingénierie Logicielle & IA",
    desc: "Architecture modulaire et accélération par agents autonomes (Atelier IA, Claude Code, Antigravity) avec tests rigoureux.",
  },
  {
    icon: <Code2 size={20} className="text-[var(--cyan)]" />,
    title: "Télécoms & Fibre Optique",
    desc: "Conception de raccordements FTTH GPON (SAÉ 3.01 en 3D), bilans de puissance optique et certification cuivre Cat 6A.",
  },
  {
    icon: <BookOpen size={20} className="text-[var(--primary)]" />,
    title: "Édition & Veille Technique",
    desc: "Rédaction technique, notes d'ingénierie et partage d'expérience sur mon blog personnel (le-blog-de-mika.com).",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-b border-[var(--card-border)] bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--cyan)] font-semibold mb-3">
            <span className="w-2 h-2 rounded-sm bg-[var(--cyan)]" />
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
          <div className="lg:col-span-5 rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-6 sm:p-7 space-y-5 shadow-sm">
            <h3 className="text-lg font-bold text-[var(--fg)]">Mon Parcours</h3>

            <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
              Étudiant en <strong className="text-[var(--fg)] font-semibold">2e année de BUT Réseaux &amp; Télécommunications (parcours Cloud)</strong> à
              l&apos;IUT de Béziers (Université de Montpellier), après l&apos;obtention d&apos;un baccalauréat scientifique
              (série C, mention Assez Bien) en 2024.
            </p>

            <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
              Pour concrétiser mes acquis théoriques, je conçois et maintiens des systèmes applicatifs et des outils réseau
              complets (<strong className="text-[var(--fg)] font-semibold">NetCanvas</strong>, <strong className="text-[var(--fg)] font-semibold">NetLab</strong>, <strong className="text-[var(--fg)] font-semibold">ScorIQ</strong>, <strong className="text-[var(--fg)] font-semibold">Atelier IA</strong>).
              J&apos;utilise l&apos;IA comme un outil d&apos;ingénierie et d&apos;accélération, tout en assurant une validation technique rigoureuse par tests automatisés.
            </p>

            <div className="pt-4 border-t border-[var(--card-border)] space-y-2.5 font-mono text-xs">
              <div className="flex justify-between py-1.5 border-b border-[var(--card-border)]">
                <span className="text-[var(--muted)]">Disponibilité stage</span>
                <span className="font-semibold text-emerald-400">18 janv. — 29 mars 2027</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[var(--card-border)]">
                <span className="text-[var(--muted)]">Mobilité</span>
                <span className="font-semibold text-[var(--fg)]">Béziers / Occitanie &amp; France entière</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[var(--card-border)]">
                <span className="text-[var(--muted)]">Formation</span>
                <span className="font-semibold text-[var(--fg)]">BUT R&amp;T (Cloud) · IUT Béziers</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-[var(--muted)]">Projet d&apos;études</span>
                <span className="font-semibold text-[var(--cyan)]">Cycle d&apos;ingénieur / Master</span>
              </div>
            </div>
          </div>

          {/* Grille des Domaines d'expertise */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {domains.map((d) => (
              <div
                key={d.title}
                className="p-5 rounded-2xl border border-[var(--card-border)] bg-[var(--card)] hover:border-[var(--cyan)]/40 transition flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-[var(--bg)] border border-[var(--card-border)] flex items-center justify-center mb-3">
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
