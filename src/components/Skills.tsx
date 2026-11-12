"use client";
import { Sparkles, Network, Code2, Cloud, Check } from "lucide-react";
import { skillCategories, type SkillCategory } from "@/data/skills";

const iconMap = {
  ai: <Sparkles size={20} className="text-[var(--primary)]" />,
  network: <Network size={20} className="text-[var(--primary)]" />,
  code: <Code2 size={20} className="text-[var(--primary)]" />,
  cloud: <Cloud size={20} className="text-[var(--primary)]" />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-b border-[var(--card-border)] bg-[var(--card)]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--primary)] font-semibold mb-3">
            <span className="w-2 h-2 bg-[var(--primary)]" />
            // 02 — Compétences &amp; Méthode
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--fg)]">
            Matrice de Compétences Vérifiables
          </h2>
          <p className="text-sm sm:text-base text-[var(--muted)] max-w-2xl mt-2 leading-relaxed">
            Pas de jauges arbitraires ou d&apos;auto-évaluations subjectives : chaque compétence repose sur
            des livrables concrets, du code en production ou des projets académiques menés à l&apos;IUT.
          </p>
        </div>

        {/* 4 Piliers Techniques */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-lg border border-[var(--card-border)] bg-[var(--bg)] p-6 flex flex-col justify-between"
            >
              <div>
                {/* Header Catégorie */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded bg-[var(--card)] border border-[var(--card-border)]">
                    {iconMap[category.iconName]}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--fg)]">{category.title}</h3>
                    <p className="text-xs font-mono text-[var(--muted-2)]">{category.subtitle}</p>
                  </div>
                </div>

                {/* Liste des compétences du pilier */}
                <div className="space-y-4 mt-6">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded border border-[var(--card-border)] bg-[var(--card)] space-y-1.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-sm font-semibold text-[var(--fg)]">{skill.name}</h4>
                      </div>
                      <p className="text-xs text-[var(--muted)] leading-relaxed">{skill.description}</p>
                      <div className="pt-2 flex items-center gap-1.5 text-[11px] font-mono text-[var(--primary)]">
                        <Check size={12} className="flex-shrink-0" />
                        <span className="truncate">Preuve : {skill.proof}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note de méthode en bas de section */}
        <div className="mt-12 p-5 rounded-lg border border-[var(--card-border)] bg-[var(--bg)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--primary)] flex-shrink-0" />
            <p className="text-xs sm:text-sm text-[var(--fg)]">
              <strong className="font-semibold">Méthodologie :</strong> L&apos;IA est utilisée comme un accélérateur
              d&apos;exécution, tandis que la conception, la validation des protocoles et les tests de non-régression
              restent strictement humains et rigoureux.
            </p>
          </div>
          <a
            href="#sae"
            className="text-xs font-mono font-semibold text-[var(--primary)] hover:underline whitespace-nowrap self-end sm:self-auto"
          >
            Consulter les 10 SAÉ associées →
          </a>
        </div>
      </div>
    </section>
  );
}
