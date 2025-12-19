'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

const galleryImages = [
  {
    src: "/imagenes/banners/banner_generate_v2fix.webp",
    alt: "Mostrador interior de La Picá del Boulevard",
    caption: "La Picá del Boulevard · Tradición en cada rincón",
  }, 
  {
    src: "/imagenes/local/Local_Exterior_2IA.webp",
    alt: "Local exterior",
    caption: "Exterior iluminado · pedidos para llevar",
  },
  {
    src: "/imagenes/productos/IA/Producto1_ChurrascoItaliano_IA.webp",
    alt: "Churraso Italiano",
    caption: "Churrasco Italiano de la casa",
  },
  {
    src: "/imagenes/productos/IA/Producto1_Chorrillana2_IA.webp",
    alt: "Chorillana",
    caption: "Chorrillana el favorito", 
  },
   {
    src: "/imagenes/productos/IA/Producto1_Completo_IA.webp",
    alt: "Completo",
    caption: "Completo nuestro plato estrella", 
  },
  

];

const contactEntries = [
  {
    title: "Realiza tu Pedido",
    detail: "+56 9 3171 0112",
    href: "https://wa.me/56931710112?text=Hola, cual es la carta disponible.",
    icon: FaWhatsapp,
    colorClass: "text-[#25d366]",
  },
  {
    title: "Instagram",
    detail: "@lapicadelboulevard",
    href: "https://instagram.com/lapicadelboulevard",
    icon: FaInstagram,
    colorClass: "text-[#e1306c]",
  },
  {
    title: "Facebook",
    detail: "La Pica Boulevard",
    href: "https://www.facebook.com/lapicadelboulevard",
    icon: FaFacebook,
    colorClass: "text-[#1877f2]",
  },
];

const WhatsAppFloatingButton = () => (
  <a
    href="https://wa.me/56931710112?text=Hola%20Johanna,%20quiero%20pedir%20algo%20desde%20la%20web."
    aria-label="Abrir WhatsApp"
    className="fixed bottom-6 right-4 z-50 inline-flex items-center gap-3 rounded-full bg-[#25d366] px-4 py-3 text-white shadow-2xl transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25d366]/40 sm:bottom-10 sm:right-10"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaWhatsapp className="h-5 w-5" />
    <span className="text-xs font-semibold tracking-wide">
      Pedir por WhatsApp
    </span>
  </a>
);

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = galleryImages.length;
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const updateSlidesPerView = () => {
      setSlidesPerView(window.innerWidth >= 1024 ? 2 : 1);
    };
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const goToSlide = (nextIndex: number) => {
    const maxIndex = Math.max(totalSlides - slidesPerView, 0);
    const normalized = ((nextIndex % totalSlides) + totalSlides) % totalSlides;
    setCurrentSlide(normalized > maxIndex ? 0 : normalized);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;
    setTouchEndX(event.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) {
      setTouchStartX(null);
      setTouchEndX(null);
      return;
    }
    const deltaX = touchStartX - touchEndX;
    const swipeThreshold = 40;
    if (deltaX > swipeThreshold) {
      goToSlide(currentSlide + 1);
    } else if (deltaX < -swipeThreshold) {
      goToSlide(currentSlide - 1);
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-transparent text-[#4f4537]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(242,204,143,0.6),_transparent_45%),radial-gradient(circle_at_bottom,_rgba(181,170,153,0.6),_transparent_55%),radial-gradient(circle_at_center,_rgba(119,216,187,0.2),_transparent_60%)]" />

      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-0 px-0 pb-16 pt-0 sm:gap-12 sm:px-6 lg:pb-20 lg:pt-8">
        <header className="rounded-none border-none bg-gradient-to-b from-[#f7d6a7] via-[#f2cc8f] to-transparent px-4 py-8 shadow-sm sm:rounded-[40px] sm:border sm:border-[#b5aa99] sm:bg-gradient-to-b sm:from-[#f7d6a7] sm:via-[#f5d0a4] sm:to-[#fffaf2] sm:px-8 sm:shadow-xl sm:backdrop-blur">
          <div className="mb-5 flex flex-col items-center gap-2 text-center sm:hidden">
            <Link
              href="/"
              className="text-3xl font-semibold tracking-tight text-[#4f4537]"
              style={{ fontFamily: "var(--font-logo)" }}
            >
              La Picá del Boulevard
            </Link>
            <p className="text-xs uppercase tracking-[0.4em] text-[#b5aa99]">
              Churrasquería & Fuente de Soda
            </p>
          </div>
          <nav className="flex flex-col items-center gap-4 rounded-[28px] bg-white/85 px-4 py-3 text-sm font-semibold text-[#4f4537] shadow-sm sm:flex-row sm:flex-wrap sm:justify-between sm:bg-transparent sm:px-0 sm:py-0 sm:shadow-none">
            <Link
              href="/"
              className="hidden text-2xl font-semibold tracking-tight text-[#4f4537] sm:flex sm:items-center sm:justify-start"
              style={{ fontFamily: "var(--font-logo)" }}
            >
              La Picá del Boulevard
            </Link>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:justify-start sm:gap-6 sm:text-sm">
              <a className="rounded-full px-3 py-1 hover:bg-[#b5aa99]/30" href="#galeria">
                Inicio
              </a>
              <a className="rounded-full px-3 py-1 hover:bg-[#b5aa99]/30" href="#contacto">
                Contacto
              </a>
              <a className="rounded-full px-3 py-1 hover:bg-[#b5aa99]/30" href="#mapa">
                Ubicación
              </a>
            </div>
            <a
              href="https://wa.me/56931710112?text=Hola%20Johanna,%20quiero%20pedir%20algo%20desde%20la%20web."
              className="hidden sm:inline-flex sm:items-center sm:justify-center sm:gap-2 sm:rounded-full sm:bg-[#25d366] sm:px-5 sm:py-2 sm:text-xs sm:font-semibold sm:text-white sm:shadow-md sm:transition sm:hover:scale-105 sm:hover:bg-[#1fb356] sm:focus:outline-none sm:focus:ring-4 sm:focus:ring-[#25d366]/40"
            >
              <FaWhatsapp className="h-4 w-4" />
              Pedir por WhatsApp
            </a>
          </nav>
        </header>

        <section
          id="galeria"
          className="rounded-none border-none bg-[#f2cc8f] p-4 sm:rounded-[32px] sm:border sm:border-[#b5aa99] sm:bg-[#f2cc8f] sm:p-8"
        >
          <div className="flex flex-col">
            <p className="text-xs uppercase tracking-[0.5em] text-[#4f4537] text-center md:text-left">
            </p>
          </div>

          <div className="mt-6">
            <div
              className="relative overflow-hidden rounded-[28px] border border-[#b5aa99] bg-white shadow-lg"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500"
                style={{
                  transform: `translateX(-${(currentSlide * 100) / slidesPerView}%)`,
                }}
              >
                {galleryImages.map((image) => (
                  <figure
                    key={image.alt}
                    className="snap-center"
                    style={{
                      flex: `0 0 ${100 / slidesPerView}%`,
                    }}
                  >
                    <div className="relative w-full pb-[110%] sm:pb-[60%]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes={slidesPerView === 1 ? "100vw" : "50vw"}
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-[#4f4537]">
                      {image.caption}
                      <span className="text-xs text-[#4f4537]">●</span>
                    </figcaption>
                  </figure>
                ))}
              </div>

              <button
                aria-label="Imagen anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-[#4f4537] shadow-lg transition hover:bg-white"
                onClick={() => goToSlide(currentSlide - 1)}
              >
                ‹
              </button>
              <button
                aria-label="Imagen siguiente"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-[#4f4537] shadow-lg transition hover:bg-white"
                onClick={() => goToSlide(currentSlide + 1)}
              >
                ›
              </button>
            </div>

            <div className="mt-4 flex justify-center gap-2">
              {Array.from({
                length: Math.max(totalSlides - slidesPerView + 1, 1),
              }).map((_, index) => (
                <button
                  key={index}
                  aria-label={`Ir a imagen ${index + 1}`}
                  onClick={() => goToSlide(index)}
                  className={`h-2 w-2 rounded-full transition ${
                    currentSlide === index
                      ? "bg-[#4f4537]"
                      : "bg-[#b5aa99] hover:bg-[#77d8bb]"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        

        <section
          id="contacto"
          className="rounded-none border-none bg-[#f2cc8f] p-4 sm:rounded-[32px] sm:border sm:border-[#b5aa99] sm:bg-[#f2cc8f] sm:p-8"
        >
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-[#4f4537] sm:text-3xl">
              Redes Sociales
            </h2>
            <p className="text-sm text-[#4f4537] sm:text-base">
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3 sm:gap-6">
            {contactEntries.map((entry) => (
              <a
                key={entry.title}
                href={entry.href}
                className="flex flex-col items-center gap-3 rounded-[20px] border border-[#b5aa99] bg-white p-5 text-[#4f4537] transition hover:border-[#4f4537]"
              >
                <span aria-hidden="true">
                  <entry.icon className={`h-8 w-8 ${entry.colorClass}`} />
                </span>
                <p className="text-xs uppercase tracking-[0.4em] text-[#4f4537]">
                  {entry.title}
                </p>
                <p className="text-lg font-semibold">{entry.detail}</p>
              </a>
            ))}
          </div>
        </section>

        <section
          id="mapa"
          className="rounded-none border-none bg-[#f2cc8f] p-4 sm:rounded-[32px] sm:border sm:border-[#b5aa99] sm:bg-white sm:p-6"
       >
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="text-xs uppercase tracking-[0.5em] text-[#4f4537]">
              Google Maps
            </p>
            <h2 className="text-2xl font-semibold text-[#4f4537] sm:text-3xl">
              Blvd. San Cristobal 815
            </h2>
            <p className="text-sm text-[#4f4537] sm:text-base">
              
            </p>
          </div>
          <div className="mt-5 overflow-hidden rounded-[28px] border border-[#b5aa99] shadow-lg sm:mt-6">
            <iframe
              title="Mapa La Pica del Boulevard"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.6637227941656!2d-70.76747092297533!3d-33.32760587343842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662bf8271e9f101%3A0x5ae50ad4138edba1!2sLa%20Pica%20Del%20Boulevard!5e0!3m2!1ses!2scl!4v1765892589248!5m2!1ses!2scl"
              className="h-56 w-full sm:h-72"
              loading="lazy"
            />
          </div>
          <a
            href="https://maps.app.goo.gl/8j91tr3gQmR7sjKKA"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#4f4537]"
          >
            Abrir en Google Maps →
          </a>
        </section>
      </main>
      <WhatsAppFloatingButton />
    </div>
  );
}
