"use client";

import { useEffect, useRef, useState } from "react";

type Photo = {
  src: string;
  alt: string;
};

const items: Photo[] = [
  { src: "/portfolio/resultado-suv-prata.webp", alt: "Veículo prata fotografado após atendimento na Copinho" },
  { src: "/portfolio/resultado-suv-vermelho.webp", alt: "Veículo vermelho fotografado após atendimento na Copinho" },
  { src: "/portfolio/resultado-moto-preta.webp", alt: "Motocicleta preta fotografada após atendimento na Copinho" },
  { src: "/portfolio/resultado-hatch-lateral.webp", alt: "Veículo branco fotografado lateralmente após atendimento na Copinho" },
  { src: "/portfolio/resultado-pickup.webp", alt: "Pickup fotografada após atendimento na Copinho" },
  { src: "/portfolio/resultado-moto-azul.webp", alt: "Motocicleta azul fotografada após atendimento na Copinho" },
  { src: "/portfolio/resultado-hatch-branco.webp", alt: "Veículo branco fotografado após atendimento na Copinho" },
  { src: "/portfolio/resultado-hatch-branco-2.webp", alt: "Veículo branco fotografado após atendimento na Copinho" },
];

const optimizedSrc = (photo: Photo) => photo.src.replace("/portfolio/", "/portfolio/apresentacao/");
const thumbnailSrc = (photo: Photo) => photo.src.replace("/portfolio/", "/portfolio/miniatura/");
const isLandscape = (photo: Photo) =>
  ["resultado-suv-prata.webp", "resultado-pickup.webp"].some(name => photo.src.endsWith(name));

export default function Portfolio() {
  const [selected, setSelected] = useState<Photo | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const isOpen = selected !== null;

  useEffect(() => {
    if (!isOpen) {
      triggerRef.current?.focus();
      return;
    }
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        setSelected((current) => {
          const index = items.findIndex((item) => item.src === current?.src);
          if (index === -1) return current;
          const offset = event.key === "ArrowRight" ? 1 : -1;
          return items[(index + offset + items.length) % items.length];
        });
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const step = (offset: number) => {
    const index = items.findIndex((item) => item.src === selected?.src);
    if (index !== -1) setSelected(items[(index + offset + items.length) % items.length]);
  };

  return (
    <section className="portfolio section" id="resultados">
      <div className="heading portfolioHeading portfolioHeadingSimple">
        <div>
          <p className="eyebrow red">— Resultados reais</p>
          <h2>Nosso trabalho.<br /><i>Na prática.</i></h2>
        </div>
        <p>
          Uma seleção de veículos que passaram pela Copinho. Toque ou clique em uma foto para visualizar em tamanho maior.
        </p>
      </div>

      <div className="portfolioGrid portfolioGridClean">
        {items.map((item, index) => (
          <button
            type="button"
            className={`portfolioItem portfolioItemClean ${index === 0 ? "portfolioFeatured" : ""} ${[3, 6].includes(index) ? "portfolioWide" : ""}`}
            key={item.src}
            onClick={() => {
              triggerRef.current = document.activeElement as HTMLElement;
              setSelected(item);
            }}
            aria-label={`Ampliar foto ${index + 1}`}
          >
            <span className="portfolioPhoto">
              <img
                src={thumbnailSrc(item)}
                srcSet={`${thumbnailSrc(item)} ${isLandscape(item) ? 1440 : 880}w, ${optimizedSrc(item)} ${isLandscape(item) ? 2800 : 1351}w`}
                sizes={index === 0 ? "(max-width: 680px) 92vw, 88vw" : "(max-width: 680px) 45vw, (max-width: 1100px) 45vw, 30vw"}
                alt={item.alt}
                loading="lazy"
                decoding="async"
              />
              <span className="portfolioZoom" aria-hidden="true">↗</span>
            </span>
          </button>
        ))}
      </div>

      <div className="portfolioBottom portfolioBottomSimple">
        <a className="textLink" href="#contato">Agendar atendimento →</a>
      </div>

      {selected && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Foto ampliada" onClick={() => setSelected(null)}>
          <button ref={closeRef} className="lightboxClose" type="button" onClick={() => setSelected(null)} aria-label="Fechar foto">×</button>
          <button className="lightboxArrow lightboxPrev" type="button" aria-label="Foto anterior" onClick={(event) => { event.stopPropagation(); step(-1); }}>‹</button>
          <div className="lightboxContent lightboxContentClean" onClick={(event) => event.stopPropagation()}>
            <img src={optimizedSrc(selected)} alt={selected.alt} />
          </div>
          <button className="lightboxArrow lightboxNext" type="button" aria-label="Próxima foto" onClick={(event) => { event.stopPropagation(); step(1); }}>›</button>
        </div>
      )}
    </section>
  );
}
