"use client";

import { useEffect } from "react";

/** Enhancement only: content remains visible when JavaScript or observers are unavailable. */
export default function RevealOnScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;
    const elements = document.querySelectorAll<HTMLElement>(
      ".trustBar .trustItem, #servicos .heading, #servicos .grid article, #resultados .heading, " +
      "#resultados .portfolioItem, .aboutText, .why .heading, .whyGrid article, " +
      ".process > .eyebrow, .process > h2, .steps > div, " +
      ".faqIntro, .faqList, .locationIntro, .mapCard, .contact > div, .contact > aside"
    );
    const observer = new IntersectionObserver((entries, watcher) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("v5-visible");
          watcher.unobserve(entry.target);
        }
      }
    }, { rootMargin: "0px 0px -45px 0px", threshold: 0.08 });
    for (const [index, el] of Array.from(elements).entries()) {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) continue;
      el.classList.add("v5-reveal");
      el.style.setProperty("--reveal-delay", `${Math.min(index % 3, 2) * 75}ms`);
      observer.observe(el);
    }
    return () => {
      observer.disconnect();
      elements.forEach(el => {
        el.classList.remove("v5-reveal", "v5-visible");
        el.style.removeProperty("--reveal-delay");
      });
    };
  }, []);
  return null;
}
