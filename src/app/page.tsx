'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

const galleryImages = [
  {
    src: "/imagenes/banners/banner_generate_v2.png",
    alt: "Mostrador interior de La Pica del Boulevard",
    caption: "La Pica del Boulevard · Tradición en cada rincón",
  }, 
  {
    src: "/imagenes/local/Local_Exterior_2IA.png",
    alt: "Local exterior",
    caption: "Exterior iluminado · pedidos para llevar",
  },
  {
    src: "/imagenes/productos/IA/Producto1_ChurrascoItaliano_IA.jpg",
    alt: "Churraso Italiano",
    caption: "Churrasco Italiano de la casa",
  },
  {
    src: "/imagenes/productos/IA/Producto1_Chorrillana2_IA.jpg",
    alt: "Chorillana",
    caption: "Chorrillana el favorito", 
  },
   {
    src: "/imagenes/productos/IA/Producto1_Completo_IA.jpg",
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
    <div className="relative isolate min-h-screen overflow-hidden bg-transparent text-[#3d405b]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(224,122,95,0.25),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(242,204,143,0.5),_transparent_45%),radial-gradient(circle_at_center,_rgba(129,178,154,0.25),_transparent_40%)]" />

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-6 sm:gap-12 sm:px-6 lg:pb-20 lg:pt-8">
        <header className="rounded-[28px] border border-[#e5dcc3] bg-white/90 px-4 py-4 shadow-lg backdrop-blur sm:rounded-full sm:px-6">
          <nav className="flex flex-col items-center gap-4 text-sm font-semibold text-[#3d405b] sm:flex-row sm:flex-wrap sm:justify-between">
            <a
              href="#"
              className="text-center text-xl font-semibold tracking-wide text-[#3d405b] sm:text-left sm:text-2xl"
            >
              La Pica del Boulevard
            </a>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:justify-start sm:gap-6 sm:text-sm">
              <a className="hover:text-[#3d405b]" href="#galeria">
                Inicio
              </a>
              <a className="hover:text-[#3d405b]" href="#contacto">
                Contacto
              </a>
              <a className="hover:text-[#3d405b]" href="#mapa">
                Ubicación
              </a>
            </div>
            <a
              href="https://wa.me/56931710112?text=Hola%20Johanna,%20quiero%20pedir%20algo%20desde%20la%20web."
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-4 py-2 text-xs font-semibold text-white shadow-md transition hover:scale-105 hover:bg-[#1fb356] focus:outline-none focus:ring-4 focus:ring-[#25d366]/40 sm:w-auto sm:text-sm"
            >
              <FaWhatsapp className="h-4 w-4" />
              Pedir por WhatsApp
            </a>
          </nav>
        </header>

        <section
          id="galeria"
          className="rounded-[32px] border border-[#e5dcc3] bg-[#f4f1de] p-5 sm:p-8"
        >
          <div className="flex flex-col">
            <p className="text-xs uppercase tracking-[0.5em] text-[#3d405b] text-center md:text-left">
            </p>
          </div>

          <div className="mt-6">
            <div
              className="relative overflow-hidden rounded-[28px] border border-[#e5dcc3] bg-white shadow-lg"
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
                    <figcaption className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-[#3d405b]">
                      {image.caption}
                      <span className="text-xs text-[#3d405b]">●</span>
                    </figcaption>
                  </figure>
                ))}
              </div>

              <button
                aria-label="Imagen anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-[#3d405b] shadow-lg transition hover:bg-white"
                onClick={() => goToSlide(currentSlide - 1)}
              >
                ‹
              </button>
              <button
                aria-label="Imagen siguiente"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-[#3d405b] shadow-lg transition hover:bg-white"
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
                      ? "bg-[#3d405b]"
                      : "bg-[#e5dcc3] hover:bg-[#c7ad8e]"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        

        <section
          id="contacto"
          className="rounded-[32px] border border-[#e5dcc3] bg-[#f4f1de] p-5 sm:p-8"
        >
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-[#3d405b] sm:text-3xl">
              Redes Sociales
            </h2>
            <p className="text-sm text-[#3d405b] sm:text-base">
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3 sm:gap-6">
            {contactEntries.map((entry) => (
              <a
                key={entry.title}
                href={entry.href}
                className="flex flex-col items-center gap-3 rounded-[20px] border border-[#d5c8aa] bg-white p-5 text-[#3d405b] transition hover:border-[#3d405b]"
              >
                <span aria-hidden="true">
                  <entry.icon className={`h-8 w-8 ${entry.colorClass}`} />
                </span>
                {entry.helper && (
                  <p className="text-xs font-medium text-[#3d405b]">
                    {entry.helper}
                  </p>
                )}
                <p className="text-xs uppercase tracking-[0.4em] text-[#3d405b]">
                  {entry.title}
                </p>
                <p className="text-lg font-semibold">{entry.detail}</p>
              </a>
            ))}
          </div>
        </section>

        <section
          id="mapa"
          className="rounded-[32px] border border-[#e5dcc3] bg-white p-5 sm:p-6"
        >
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="text-xs uppercase tracking-[0.5em] text-[#3d405b]">
              Google Maps
            </p>
            <h2 className="text-2xl font-semibold text-[#3d405b] sm:text-3xl">
              Blvd. San Cristobal 815
            </h2>
            <p className="text-sm text-[#3d405b] sm:text-base">
              
            </p>
          </div>
          <div className="mt-5 overflow-hidden rounded-[28px] border border-[#e5dcc3] shadow-lg sm:mt-6">
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
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#3d405b]"
          >
            Abrir en Google Maps →
          </a>
        </section>
      </main>
      <WhatsAppFloatingButton />
    </div>
  );
}
