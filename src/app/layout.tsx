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
  title: "Jesus Nava - Frontend Developer",
  description:
    "Desarrollador frontend especializado en HTML, CSS y JavaScript. Creo interfaces modernas, responsivas y experiencias digitales que combinan diseño y funcionalidad.",
  keywords: "desarrollador frontend, frontend developer, desarrollo web, diseño responsivo, interfaces modernas, experiencias digitales, HTML, CSS, JavaScript, UX, UI",
  authors: [{ name: "Jesus Nava" }],
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
