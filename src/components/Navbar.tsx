"use client";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun, Menu, X, Terminal } from "lucide-react";

const links = [
  { href: "#projects", label: "Projets" },
  { href: "#skills", label: "Compétences" },
  { href: "#about", label: "À propos" },
  { href: "#sae", label: "SAÉ" },
  { href: "#education", label: "Parcours" },
  { href: "#cv", label: "CV" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[var(--bg)]/85 backdrop-blur-md border-b border-[var(--card-border)] shadow-sm"
          : "py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 text-decoration-none font-bold text-base group"
        >
          <div className="w-8 h-8 rounded-lg border border-[var(--card-border)] bg-[var(--card)] flex items-center justify-center text-[var(--cyan)] group-hover:border-[var(--cyan)] transition">
            <Terminal size={16} strokeWidth={2.2} />
          </div>
          <span className="font-mono text-sm sm:text-base text-[var(--fg)]">
            r-tombe<span className="text-[var(--cyan)]">.dev</span>
          </span>
        </a>

        {/* Liens Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[var(--muted)] hover:text-[var(--cyan)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Boutons d'Action */}
        <div className="flex items-center gap-3">
          {/* Toggle Thème */}
          <button
            onClick={toggle}
            aria-label={theme === "dark" ? "Passer en thème clair" : "Passer en thème sombre"}
            className="w-9 h-9 rounded-lg border border-[var(--card-border)] bg-[var(--card)] flex items-center justify-center text-[var(--fg)] hover:border-[var(--cyan)] hover:text-[var(--cyan)] transition cursor-pointer"
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Contact Direct */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[var(--primary)] text-[var(--primary-fg)] font-medium text-xs hover:opacity-90 transition shadow-sm"
          >
            Me contacter
          </a>

          {/* Toggle Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
            className="md:hidden w-9 h-9 rounded-lg border border-[var(--card-border)] bg-[var(--card)] flex items-center justify-center text-[var(--fg)] cursor-pointer"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden px-6 py-5 bg-[var(--bg)] border-t border-[var(--card-border)] flex flex-col gap-4 shadow-xl">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-[var(--fg)] hover:text-[var(--cyan)] transition py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-[var(--primary)] text-[var(--primary-fg)] font-medium text-sm text-center shadow-sm"
          >
            Me contacter
          </a>
        </div>
      )}
    </nav>
  );
}
