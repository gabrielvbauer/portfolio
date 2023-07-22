import "./globals.css";
import type { Metadata } from "next";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Gabriel Bauer - Desenvolvedor Full Stack | React, NodeJS, Typescript & Figma",
  description:
    "Sou Gabriel Bauer, um desenvolvedor Full Stack especializado em React, NodeJS, Typescript e design Figma. Confira meus projetos recentes e saiba mais sobre minha experiência e habilidades.",
  keywords: [
    "Desenvolvedor Full Stack",
    "React",
    "NodeJS",
    "Typescript",
    "Figma",
    "Portfolio",
  ],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jost.className}>
        {children}
        <section className="mt-12 flex h-48 items-center justify-center">
          <span>@gabrielvbauer</span>
        </section>
      </body>
    </html>
  );
}
