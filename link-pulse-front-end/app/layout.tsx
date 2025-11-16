
import type { Metadata } from "next";
import { Tektur, Roboto_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import { SITE_NAME } from "../constants/seo.constants";
import { Providers } from "./providers";
import { Toaster } from "sonner";

const tektur = Tektur({
  variable: "--font-tektur",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },

  description: "Знай работу сайтов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${tektur.variable} ${robotoMono.variable} ${orbitron.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
        <Toaster
          theme='dark'
          position='bottom-right'
          duration={1500}
        />
      </body>
    </html>
  );
}
