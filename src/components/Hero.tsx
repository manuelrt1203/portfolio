"use client";
import { useState } from "react";
import {
  Download,
  ArrowRight,
  Terminal,
  Activity,
  Layers,
  MapPin,
  Mail,
  CheckCircle2,
  Cpu,
  Wifi,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"topology" | "cli">("topology");

  return (
    <section
      id="hero"
      className="relative min-h-[94vh] flex items-center pt-28 pb-16 px-6 overflow-hidden border-b border-[var(--card-border)] bg-[var(--bg)]"
    >
      {/* Halo d'ambiance en arrière-plan */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[120px] opacity-40 pulse-glow"
        style={{ background: "radial-gradient(circle, var(--cyan) 0%, var(--primary) 60%, transparent 80%)" }}
      />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Colonne Gauche : Pitch & Appel à l'action */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Badge Stage */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-mono text-emerald-400 mb-6 shadow-sm backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            <span className="font-semibold text-[var(--fg)]">Recherche de stage DevOps / Cloud</span>
            <span className="text-[var(--muted-2)]">·</span>
            <span>Janv. — Mars 2027 (8 à 10 sem.)</span>
          </div>

          {/* Surtitre technique */}
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--cyan)] font-semibold tracking-wider uppercase mb-2">
            <span>R. TOMBE</span>
            <span className="text-[var(--muted-2)]">/</span>
            <span>RÉSEAUX · CLOUD · DEV</span>
          </div>

          {/* Titre Principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--fg)] leading-[1.08] mb-4">
            Rodrigue Emmanuel <span className="text-[var(--cyan)]">Tombe</span>
          </h1>

          {/* Sous-titre académique */}
          <p className="text-base sm:text-lg font-medium text-[var(--fg)] mb-4">
            Étudiant BUT Réseaux &amp; Télécommunications (parcours Cloud) à l&apos;IUT de Béziers
          </p>

          {/* Proposition de valeur percutante & concrète */}
          <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed mb-8 max-w-xl">
            Je conçois des architectures réseau d&apos;entreprise (Cisco, MikroTik, BGP/OSPF)
            et développe des applications Cloud &amp; Full-Stack fiables. De la segmentation VLAN
            au déploiement de conteneurs en production, je livre des outils concrets, testés et vérifiés.
          </p>

          {/* Chiffres Clés / Métriques d'impact */}
          <div className="grid grid-cols-3 gap-4 p-4 rounded-xl border border-[var(--card-border)] bg-[var(--card)] w-full sm:w-auto mb-8 shadow-sm">
            <div className="pr-4 sm:pr-6 border-r border-[var(--card-border)]">
              <span className="block text-2xl sm:text-3xl font-bold font-mono text-[var(--cyan)]">06</span>
              <span className="text-[11px] font-mono text-[var(--muted)] uppercase tracking-wide">Projets déployés</span>
            </div>
            <div className="pr-4 sm:pr-6 border-r border-[var(--card-border)]">
              <span className="block text-2xl sm:text-3xl font-bold font-mono text-[var(--primary)]">10</span>
              <span className="text-[11px] font-mono text-[var(--muted)] uppercase tracking-wide">SAÉ académiques</span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-bold font-mono text-emerald-400">2027</span>
              <span className="text-[11px] font-mono text-[var(--muted)] uppercase tracking-wide">Stage recherché</span>
            </div>
          </div>

          {/* Actions CTA */}
          <div className="flex flex-wrap items-center gap-3 mb-8 w-full sm:w-auto">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[var(--primary)] text-[var(--primary-fg)] font-medium text-sm transition-all hover:opacity-95 hover:shadow-lg hover:shadow-blue-500/20 shadow-sm"
            >
              <span>Découvrir mes projets</span>
              <ArrowRight size={16} />
            </a>
            <a
              href="/CV_Rodrigue_Emmanuel.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-[var(--card-border)] bg-[var(--card)] text-[var(--fg)] font-medium text-sm transition hover:border-[var(--cyan)] hover:text-[var(--cyan)] shadow-sm"
            >
              <Download size={15} />
              <span>CV (PDF)</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-[var(--muted)] hover:text-[var(--fg)] font-medium text-sm transition"
            >
              <Mail size={15} />
              <span>Me contacter</span>
            </a>
          </div>

          {/* Métadonnées & Réseaux */}
          <div className="flex flex-wrap items-center gap-6 pt-5 border-t border-[var(--card-border)] w-full text-xs text-[var(--muted)] font-mono">
            <div className="flex items-center gap-2">
              <MapPin size={13} className="text-[var(--cyan)]" />
              <span>Béziers / Mobilité stage France entière</span>
            </div>
            <div className="flex items-center gap-4 ml-auto sm:ml-0">
              <a
                href="https://github.com/manuelrt1203"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[var(--cyan)] transition"
                aria-label="GitHub de Rodrigue Emmanuel"
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/rodrigue-emmanuel-tombe/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[var(--cyan)] transition"
                aria-label="LinkedIn de Rodrigue Emmanuel"
              >
                <LinkedinIcon size={14} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Colonne Droite : Visualiseur Technique Interactif */}
        <div className="lg:col-span-5 w-full">
          <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-5 shadow-xl relative overflow-hidden backdrop-blur-sm">
            {/* Barre de titre de la console technique */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--card-border)]">
              <div className="flex items-center gap-2 font-mono text-xs text-[var(--fg)]">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold">TOPOLOGY // LIVE-RUNTIME</span>
              </div>

              {/* Onglets Topologie / CLI */}
              <div className="flex items-center p-0.5 rounded-md border border-[var(--card-border)] bg-[var(--bg)] text-[11px] font-mono">
                <button
                  type="button"
                  onClick={() => setActiveTab("topology")}
                  className={`px-2.5 py-1 rounded transition ${
                    activeTab === "topology"
                      ? "bg-[var(--cyan)] text-[#0b1120] font-bold"
                      : "text-[var(--muted)] hover:text-[var(--fg)]"
                  }`}
                >
                  Schéma
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("cli")}
                  className={`px-2.5 py-1 rounded transition ${
                    activeTab === "cli"
                      ? "bg-[var(--cyan)] text-[#0b1120] font-bold"
                      : "text-[var(--muted)] hover:text-[var(--fg)]"
                  }`}
                >
                  CLI
                </button>
              </div>
            </div>

            {/* Contenu selon l'onglet actif */}
            {activeTab === "topology" ? (
              <div className="space-y-3 font-mono text-xs">
                {/* Nœud 1 : Routeur Edge MikroTik */}
                <div className="p-3.5 rounded-xl border border-[var(--card-border)] bg-[var(--bg)] transition hover:border-[var(--cyan)]">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <Wifi size={14} className="text-[var(--cyan)]" />
                      <span className="font-bold text-[var(--fg)]">R1-EDGE // MikroTik RouterOS</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20">
                      BGP ESTABLISHED
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[var(--muted)] pt-1 border-t border-[var(--card-border)]/60">
                    <span>IP : 192.168.10.1/30</span>
                    <span className="text-[var(--cyan)]">AS 65001 (eBGP)</span>
                  </div>
                </div>

                {/* Lien interactif visuel */}
                <div className="flex items-center justify-center gap-2 py-0.5 text-[10px] text-[var(--muted-2)]">
                  <span className="h-4 w-px bg-[var(--cyan)]/40" />
                  <span className="px-2 py-0.5 rounded bg-[var(--card)] border border-[var(--card-border)] text-[var(--cyan)]">
                    Liaison Trunk 802.1Q · 1 Gbps
                  </span>
                  <span className="h-4 w-px bg-[var(--cyan)]/40" />
                </div>

                {/* Nœud 2 : Switch Cœur Cisco */}
                <div className="p-3.5 rounded-xl border border-[var(--card-border)] bg-[var(--bg)] transition hover:border-[var(--primary)]">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <Layers size={14} className="text-[var(--primary)]" />
                      <span className="font-bold text-[var(--fg)]">SW-CORE // Cisco Catalyst 3560</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-[var(--primary)] font-semibold border border-blue-500/20">
                      VLAN ROUTING L3
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[var(--muted)] pt-1 border-t border-[var(--card-border)]/60">
                    <span>VLANs 10 (Prod), 20 (Mgmt)</span>
                    <span>OSPF Area 0</span>
                  </div>
                </div>

                {/* Lien interactif visuel vers Cloud */}
                <div className="flex items-center justify-center gap-2 py-0.5 text-[10px] text-[var(--muted-2)]">
                  <span className="h-4 w-px bg-emerald-500/40" />
                  <span className="px-2 py-0.5 rounded bg-[var(--card)] border border-[var(--card-border)] text-emerald-400">
                    TLS / Reverse Proxy · Docker Bridge
                  </span>
                  <span className="h-4 w-px bg-emerald-500/40" />
                </div>

                {/* Nœud 3 : Serveurs & Services Cloud */}
                <div className="p-3.5 rounded-xl border border-[var(--card-border)] bg-[var(--bg)] transition hover:border-emerald-500/50">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <Cpu size={14} className="text-emerald-400" />
                      <span className="font-bold text-[var(--fg)]">HOST-CLOUD // Debian 12 + Docker</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20">
                      HEALTHY (0% ERR)
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[var(--muted)] pt-1 border-t border-[var(--card-border)]/60">
                    <span>FastAPI · Next.js · Supabase</span>
                    <span className="text-emerald-400">CI/CD Deploy Auto</span>
                  </div>
                </div>
              </div>
            ) : (
              /* Onglet Console CLI */
              <div className="rounded-xl border border-[var(--card-border)] bg-[#070b14] p-4 font-mono text-xs space-y-2 text-slate-300">
                <div className="text-[var(--muted-2)]"># Vérification de l&apos;adjacence OSPF et connectivité</div>
                <div className="flex items-center gap-2 text-[var(--cyan)]">
                  <span>SW-CORE#</span>
                  <span className="text-white">show ip ospf neighbor</span>
                </div>
                <div className="text-[11px] text-slate-400 leading-relaxed pl-2 border-l border-slate-700">
                  Neighbor ID: 192.168.10.1 &nbsp;|&nbsp; Pri: 1 &nbsp;|&nbsp; State: FULL/DR<br />
                  Interface: GigabitEthernet0/1 &nbsp;|&nbsp; Dead Time: 00:00:34
                </div>
                <div className="flex items-center gap-2 text-[var(--cyan)] pt-2">
                  <span>SW-CORE#</span>
                  <span className="text-white">ping 10.0.0.1 repeat 4</span>
                </div>
                <div className="text-[11px] text-emerald-400 pl-2 border-l border-slate-700">
                  Sending 4, 100-byte ICMP Echos to 10.0.0.1, timeout is 2 seconds:<br />
                  <span className="font-bold">!!!!</span><br />
                  Success rate is 100 percent (4/4), round-trip min/avg/max = 1/2/3 ms
                </div>
                <div className="pt-2 text-[10px] text-slate-500 flex items-center justify-between border-t border-slate-800">
                  <span>Terminal interactif simulé</span>
                  <span className="text-[var(--cyan)]">● Connecté</span>
                </div>
              </div>
            )}

            {/* Pied de la carte : Certification & Cohérence */}
            <div className="mt-4 pt-3 border-t border-[var(--card-border)] flex items-center justify-between text-[11px] text-[var(--muted)] font-mono">
              <span className="flex items-center gap-1.5 text-[var(--fg)]">
                <CheckCircle2 size={13} className="text-emerald-400" />
                Architecture testée &amp; validée
              </span>
              <span className="text-[var(--cyan)] font-semibold">Cisco &amp; MikroTik</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
