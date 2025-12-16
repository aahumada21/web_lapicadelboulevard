import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La Pica del Boulevard | Churrascos y completos con tradición",
  description:
    "Johanna y su equipo preparan churrascos, completos y lomos caseros con pan amasado del día en el corazón del Boulevard.",
  keywords: [
    "churrascos",
    "completos",
    "lomitos",
    "comida rápida",
    "delivery",
    "La Pica del Boulevard",
  ],
  openGraph: {
    title: "La Pica del Boulevard",
    description:
      "Churrasquería y fuente de soda con sabores caseros y servicio cercano en el Boulevard.",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
