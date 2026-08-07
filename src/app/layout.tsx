import type { Metadata } from "next";
import { Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Spotlight } from "../components/ClientHelpers";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "Law Office of Michael Hailu APLC | Personal Injury, Employment, Immigration & Tenant Rights",
  description: "Compassionate, strategic, and results-driven legal representation. Dedicated to protecting the rights of individuals, families, employees, tenants, and injury victims.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${playfairDisplay.variable} font-sans relative`}>
        <Spotlight />
        {children}
      </body>
    </html>
  );
}
