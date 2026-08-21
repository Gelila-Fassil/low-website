"use client";

import { useState } from "react";
import Link from "next/link";

export default function TopBar() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const languages = [
    { code: "en", name: "English" },
    { code: "am", name: "Amharic" },
    { code: "es", name: "Spanish" },
    { code: "ti", name: "Tigrigna" },
  ];

  return (
    <div className="bg-white border-b border-neutral-200 text-[10px] sm:text-[11px] text-neutral-600 py-2 relative z-50">
      <div className="wrapper flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Contact Info & Quick Links */}
        <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
          <a
            href="tel:2134555595"
            className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors duration-300"
          >
            <i className="fas fa-phone-alt text-[#D4AF37]"></i>
            <span className="tracking-widest uppercase font-medium">CALL NOW: (213) 455-5595</span>
          </a>
          <span className="hidden sm:inline text-neutral-300">|</span>
          <div className="flex items-center gap-4">
            <Link
              href="/locations/los-angeles"
              className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors duration-300 uppercase tracking-widest font-medium"
            >
              <i className="fas fa-map-marker-alt text-[#D4AF37]"></i>
              <span>Los Angeles</span>
            </Link>
            <Link
              href="/locations/oakland"
              className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors duration-300 uppercase tracking-widest font-medium"
            >
              <i className="fas fa-map-marker-alt text-[#D4AF37]"></i>
              <span>Oakland</span>
            </Link>
          </div>
        </div>

        {/* Language & Socials */}
        <div className="flex items-center gap-4 flex-wrap justify-center">
          {/* Multilingual Selector */}
          <div className="flex items-center gap-2">
            <i className="fas fa-globe text-[#D4AF37]"></i>
            <div className="flex items-center gap-1.5">
              {languages.map((lang, idx) => (
                <span key={lang.code} className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setSelectedLanguage(lang.name)}
                    className={`font-semibold transition-colors duration-300 ${
                      selectedLanguage === lang.name
                        ? "text-[#D4AF37]"
                        : "hover:text-[#D4AF37]"
                    }`}
                  >
                    {lang.name}
                  </button>
                  {idx < languages.length - 1 && (
                    <span className="text-neutral-300">/</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          <span className="hidden sm:inline text-neutral-300">|</span>

          {/* Social Media Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-neutral-400 hover:text-[#D4AF37] hover:-translate-y-0.5 transition-all duration-300"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-neutral-400 hover:text-[#D4AF37] hover:-translate-y-0.5 transition-all duration-300"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-neutral-400 hover:text-[#D4AF37] hover:-translate-y-0.5 transition-all duration-300"
            >
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
