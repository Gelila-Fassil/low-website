import type { Metadata } from "next";
import { Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-playfair-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hailulawyers.com"),
  title: {
    default: "Law Office of Michael Hailu APLC | California Attorneys",
    template: "%s | Law Office of Michael Hailu APLC",
  },
  description:
    "Experienced California legal representation in Employment Law, Tenant Habitability, Personal Injury, and Immigration Law. Serving Los Angeles and Oakland.",
  keywords: [
    "California Attorney",
    "Los Angeles Law Firm",
    "Oakland Law Firm",
    "Employment Law",
    "Tenant Habitability",
    "Personal Injury Lawyer",
    "Immigration Attorney",
    "Michael Hailu",
  ],
  authors: [{ name: "Law Office of Michael Hailu APLC" }],
  openGraph: {
    title: "Law Office of Michael Hailu APLC | California Attorneys",
    description:
      "Protecting Your Rights. Pursuing the Results You Deserve. Professional legal services in Los Angeles & Oakland.",
    url: "https://www.hailulawyers.com",
    siteName: "Law Office of Michael Hailu APLC",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${playfairDisplay.variable} font-sans bg-[#0A1128] text-white min-h-screen flex flex-col selection:bg-[#D4AF37] selection:text-[#0A1128]`}
      >
        <TopBar />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

