"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FloatingDock } from "@/components/ui/floating-dock";

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

  // 4 central header links
  const navLinks = [
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Practice Areas",
      href: "/#practice",
    },
    {
      title: "Our Method",
      href: "/#method",
    },
    {
      title: "Case Studies",
      href: "/#cases",
    },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-400 ease-in-out ${
        scrolled
          ? "bg-transparent py-2.5"
          : "bg-gradient-to-b from-black/90 via-black/50 to-transparent py-3"
      }`}
    >
      <div className="wrapper flex justify-between items-center border-b border-white/10 pb-2 pt-0.5">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center border border-white/20 shadow-md group-hover:scale-105 transition-transform">
            <i
              className="fas fa-scale-balanced text-sm"
              style={{ color: "var(--brand-light)" }}
            ></i>
          </div>
          <span className="font-bold tracking-wider text-xs sm:text-sm text-white drop-shadow-md">
            MICHAEL HAILU APLC
          </span>
        </Link>

        {/* Aceternity UI Text Floating Dock (4 header links) */}
        <div className="flex items-center justify-center rounded-full border border-white/5 bg-white/5 px-2.5 py-1 shadow-none">
          <FloatingDock items={navLinks} />
        </div>

        {/* Consultation Button */}
        <div className="hidden sm:block">
          <Link
            href="/#contact"
            className="cta-gradient px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg hover:shadow-xl transition-transform hover:scale-105"
          >
            Request a Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
}
