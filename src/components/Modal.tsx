"use client";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";

/** Éléments atteignables au clavier à l'intérieur de la fenêtre. */
const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function Modal({
  onClose,
  children,
  maxWidth = 640,
  label,
}: {
  onClose: () => void;
  children: React.ReactNode;
  /** Largeur maximale de la fenêtre en px (640 par défaut, comme avant). */
  maxWidth?: number;
  /** Nom accessible de la fenêtre pour les lecteurs d'écran. */
  label?: string;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  // Le parent passe souvent une fonction fléchée neuve à chaque rendu : on garde la dernière version dans une
  // référence, pour que l'effet ci-dessous ne se rejoue pas (il déplacerait le focus à chaque rendu).
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    const dialog = dialogRef.current;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow; // restauré tel quel : sûr même si deux fenêtres s'empilent un jour
    dialog?.focus(); // le clavier et les lecteurs d'écran arrivent dans la fenêtre, pas derrière

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCloseRef.current();
        return;
      }
      if (e.key !== "Tab" || !dialog) return;
      // Le focus reste dans la fenêtre : Tab et Maj+Tab bouclent entre le premier et le dernier élément.
      const items = [...dialog.querySelectorAll<HTMLElement>(FOCUSABLE)];
      if (items.length === 0) {
        e.preventDefault();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (!dialog.contains(active)) {
        // Focus perdu hors de la fenêtre (élément retiré, clic sur le fond) : on le ramène à l'intérieur.
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && (active === first || active === dialog)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus(); // rend le focus au bouton qui a ouvert la fenêtre
    };
  }, []);

  return (
    <div
      ref={dialogRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(2px)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "80px 20px 40px",
        overflowY: "auto",
        outline: "none", // focus donné au conteneur par programme : pas de contour parasite (les boutons gardent le leur)
      }}
      className="fade-in-up"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="card"
        style={{
          width: "100%",
          maxWidth,
          padding: 36,
          position: "relative",
          background: "var(--bg)",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Fermer"
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            width: 36,
            height: 36,
            borderRadius: 4,
            border: "1px solid var(--card-border)",
            background: "var(--card)",
            color: "var(--muted)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <X size={18} />
        </button>
        {children}
      </div>
    </div>
  );
}
