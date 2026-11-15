"use client";
import Image from "next/image";
import { useState } from "react";
import { Maximize2 } from "lucide-react";
import Modal from "./Modal";
import type { Screenshot } from "@/data/projects";

/**
 * Vitrine d'un projet : la première capture en vignette cliquable, toutes les captures en grand dans une fenêtre.
 * Une capture 1920 px réduite à la colonne du site serait illisible : l'agrandissement n'est pas un détail.
 */
export default function ScreenshotGallery({ project, shots }: { project: string; shots: Screenshot[] }) {
  const [open, setOpen] = useState(false);
  const first = shots[0];
  if (!first) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-label={`Agrandir les captures de ${project}`}
        className="group relative block w-full overflow-hidden rounded-xl border border-[var(--card-border)] bg-[#070b14] text-left shadow-lg transition hover:border-[var(--cyan)]/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cyan)]"
      >
        <Image
          src={first.src}
          alt="" // décorative : le nom accessible du bouton est son aria-label, le détail est lu dans la fenêtre agrandie
          width={first.width}
          height={first.height}
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        <span className="absolute bottom-2 right-2 inline-flex items-center gap-1.5 rounded-md bg-black/75 px-2.5 py-1 font-mono text-[11px] text-white">
          <Maximize2 size={12} aria-hidden="true" />
          Agrandir
        </span>
      </button>

      {open && (
        <Modal onClose={() => setOpen(false)} maxWidth={1180} label={`Captures de ${project}`}>
          <h3 className="mb-1 pr-12 text-lg font-bold text-[var(--fg)]">{project} : captures du site en production</h3>
          <p className="mb-6 text-xs text-[var(--muted)]">Captures réelles, sans retouche ni données inventées.</p>
          <div className="space-y-8">
            {shots.map((shot) => (
              <figure key={shot.src}>
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.width}
                  height={shot.height}
                  sizes="(min-width: 1280px) 1100px, 100vw"
                  className="h-auto w-full rounded-lg border border-[var(--card-border)]"
                />
                <figcaption className="mt-2 text-xs leading-relaxed text-[var(--muted)]">{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
        </Modal>
      )}
    </>
  );
}
