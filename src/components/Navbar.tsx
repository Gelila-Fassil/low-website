"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Attorneys", href: "/attorneys" },
    { title: "Practices", href: "/practice-areas" },
    { title: "Results", href: "/results-testimonials" },
    { title: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-[36px] sm:top-[38px] left-0 right-0 z-40 transition-all duration-500 px-4 sm:px-6 lg:px-8 ${
        scrolled
          ? "pt-2"
          : "pt-4 sm:pt-6"
      }`}
    >
      <div 
        className={`mx-auto max-w-7xl rounded-2xl transition-all duration-500 flex items-center justify-between ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border border-neutral-200/50 py-3 px-4 sm:px-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
            : "bg-white/70 backdrop-blur-md border border-white/40 py-4 px-4 sm:px-6"
        }`}
      >
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-9 h-9 rounded-full bg-[#0A1128] text-[#D4AF37] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-500">
            <i className="fas fa-scale-balanced text-sm"></i>
          </div>
          <div className="flex flex-col hidden sm:flex">
            <span className="font-bold tracking-widest text-xs sm:text-sm text-neutral-900 font-serif-heading transition-colors duration-300">
              MICHAEL HAILU <span className="font-light opacity-70 text-[#D4AF37]">APLC</span>
            </span>
          </div>
        </Link>

        {/* Desktop Main Navigation - Centered */}
        <nav className="hidden lg:flex items-center justify-center gap-8 flex-1 px-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.title}
                href={link.href}
                className={`text-[11px] font-extrabold tracking-[0.2em] uppercase transition-all duration-300 relative py-2 ${
                  isActive
                    ? "text-[#D4AF37]"
                    : "text-[#0A1128] hover:text-[#D4AF37]"
                }`}
              >
                {link.title}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#D4AF37] rounded-full transition-all duration-300 ${
                    isActive ? "w-1/2" : "w-0 hover:w-1/2"
                  }`}
                ></span>
              </Link>
            );
          })}
        </nav>

        {/* Header CTAs */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href="tel:2134555595"
            className="border border-[#D4AF37] text-[#0A1128] hover:bg-[#0A1128] hover:text-[#D4AF37] px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-md"
          >
            CALL NOW
          </a>
          <Link
            href="/#contact"
            className="btn-gold px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest flex items-center justify-center"
          >
            FREE CONSULTATION
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="lg:hidden w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-200 transition-colors duration-300 focus:outline-none"
        >
          <i className={`fas ${mobileMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      <div 
        className={`fixed inset-0 top-[80px] z-30 bg-white/95 backdrop-blur-xl lg:hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="px-6 py-8 flex flex-col h-[calc(100vh-80px)] justify-between">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                  className={`text-lg font-extrabold tracking-widest py-4 border-b border-neutral-100 transition-all duration-500 transform ${
                    mobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                  } ${
                    isActive ? "text-[#D4AF37]" : "text-[#0A1128] hover:text-[#D4AF37]"
                  }`}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col gap-4 pb-12">
            <a
              href="tel:2134555595"
              className="border border-[#D4AF37] hover:bg-[#0A1128] hover:border-[#0A1128] text-[#D4AF37] hover:text-white text-center py-4 rounded-2xl text-xs font-bold tracking-widest transition-all duration-300"
            >
              CALL: (213) 455-5595
            </a>
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#0A1128] text-white hover:bg-[#1a2b5e] text-center py-4 rounded-2xl text-xs font-bold tracking-widest shadow-xl transition-colors duration-300 border border-[#0A1128]"
            >
              FREE CONSULTATION
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
