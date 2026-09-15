"use client";

import { useRef, useState, type ReactNode } from "react";
import type { Locale } from "@/lib/portfolio-content";

export function NavigationShell({ children, brand, locale }: { children: ReactNode; brand: ReactNode; locale: Locale }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const labels = { es: ["Menú", "Cerrar"], en: ["Menu", "Close"], de: ["Menü", "Schließen"] }[locale];

  return (
    <header
      className="site-header"
      data-open={open}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
      onClick={(event) => {
        if (event.target instanceof Element && event.target.closest("a")) {
          setOpen(false);
        }
      }}
    >
      {brand}
      <button
        className="menu-toggle"
        ref={toggle}
        aria-expanded={open}
        aria-controls="portfolio-navigation"
        onClick={() => setOpen(!open)}
        type="button"
      >
        {labels[open ? 1 : 0]}
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d={open ? "M5 5l10 10M15 5L5 15" : "M3 6h14M3 14h14"} />
        </svg>
      </button>
      {children}
    </header>
  );
}
