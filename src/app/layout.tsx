import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Rodrigue Emmanuel Tombe — Développeur Full-Stack & Réseaux",
  description:
    "Portfolio de Rodrigue Emmanuel Tombe, étudiant en BUT Réseaux & Télécommunications à l'IUT de Béziers. Développement full-stack (React, Next.js, Python), réseaux et IoT.",
  keywords: [
    "Rodrigue Emmanuel Tombe",
    "Portfolio",
    "Développeur",
    "Full-Stack",
    "React",
    "Next.js",
    "Réseaux",
    "Télécommunications",
    "IUT Béziers",
    "BUT R&T",
  ],
  authors: [{ name: "Rodrigue Emmanuel Tombe" }],
  openGraph: {
    title: "Rodrigue Emmanuel Tombe — Développeur Full-Stack & Réseaux",
    description:
      "Étudiant en BUT R&T à l'IUT de Béziers — développement full-stack, réseaux et IoT.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
