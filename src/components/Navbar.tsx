"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 py-6 transition-all duration-400 ease-in-out ${
        scrolled ? "nav-scrolled" : ""
      }`}
    >
      <div className="wrapper flex justify-between items-center">
        <Link href="#home" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center">
            <i
              className="fas fa-scale-balanced text-sm"
              style={{ color: "var(--brand-light)" }}
            ></i>
          </div>
          <span className="font-semibold tracking-wider text-sm text-white">
            HAILU LAWYERS
          </span>
        </Link>
        <div className="hidden lg:flex space-x-10 text-sm tracking-wide text-slate-300 font-light">
          <Link href="#about" className="hover:text-white transition">
            Why Hailu
          </Link>
          <Link href="#practice" className="hover:text-white transition">
            Practice Areas
          </Link>
          <Link href="#method" className="hover:text-white transition">
            Our Method
          </Link>
          <Link href="#cases" className="hover:text-white transition">
            Case Studies
          </Link>
          <Link href="#team" className="hover:text-white transition">
            Our Team
          </Link>
        </div>
        <Link
          href="#contact"
          className="cta-gradient px-8 py-3 rounded-full text-xs font-semibold tracking-widest uppercase"
        >
          Book Consultation
        </Link>
      </div>
    </nav>
  );
}
