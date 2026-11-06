"use client";

import { useEffect, useRef } from "react";

export default function MobileMenu() {
  const menuRef = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const closeOnOutside = (event: PointerEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        menuRef.current.open = false;
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuRef.current?.open) {
        menuRef.current.open = false;
        menuRef.current.querySelector("summary")?.focus();
      }
    };
    document.addEventListener("pointerdown", closeOnOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);
  return (
    <details className="mobileMenu" ref={menuRef}>
      <summary aria-label="Abrir menu de navegação"><span/><span/><span/></summary>
      <nav aria-label="Menu para celular" onClick={(event) => {
        if ((event.target as HTMLElement).closest("a") && menuRef.current) menuRef.current.open = false;
      }}>
        <a href="#servicos">Serviços</a>
        <a href="#resultados">Resultados</a>
        <a href="#diferenciais">Diferenciais</a>
        <a href="#faq">Dúvidas</a>
        <a href="#localizacao">Localização</a>
      </nav>
    </details>
  );
}
