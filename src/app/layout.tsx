import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Rodrigue Emmanuel — Portfolio",
  description:
    "Portfolio de Rodrigue Emmanuel, étudiant en Réseaux & Télécoms à l'IUT de Béziers. Passionné par Linux, le Cloud et l'IoT.",
  keywords: [
    "Rodrigue Emmanuel",
    "Portfolio",
    "Cloud",
    "DevOps",
    "IoT",
    "Linux",
    "Réseaux",
    "Télécommunications",
    "IUT Béziers",
  ],
  authors: [{ name: "Rodrigue Emmanuel" }],
  openGraph: {
    title: "Rodrigue Emmanuel — Portfolio",
    description: "Étudiant en R&T passionné Cloud, Linux & IoT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
