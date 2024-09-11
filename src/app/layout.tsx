import type { Metadata } from "next";
import "./globals.css";
import {
  Nunito_Sans,
  Darker_Grotesque,
  Red_Hat_Display,
} from "next/font/google";

export const metadata: Metadata = {
  title: "Gerador de cartão de visita",
  description: "Gerador de cartão de visita da Resultados Digitais",
};

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito",
});

const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  variable: "--font-darker-grotesque",
});

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-red-hat-display",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          nunito.variable +
          " " +
          darkerGrotesque.variable +
          " " +
          redHatDisplay.variable
        }
      >
        {children}
      </body>
    </html>
  );
}
