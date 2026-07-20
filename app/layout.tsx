import type { Metadata, Viewport } from "next";
import { CVProvider } from "./context/CVContext";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: '#3d2b1f',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "CV Generator - Executive Dashboard",
  description: "Create professional CVs with an intuitive skeuomorphic design.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "CV Generator",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@400;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&family=Inter:wght@400;500;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body className="mahogany-desk min-h-screen text-[var(--color-on-surface)] selection:bg-[var(--color-primary-container)] overflow-x-hidden antialiased">
        <CVProvider>
          {children}
        </CVProvider>
      </body>
    </html>
  );
}
