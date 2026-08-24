"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A1128]">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.jpeg"
          alt="Modern Law Office Background"
          fill
          priority
          className="object-cover object-center brightness-[0.80]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-black/5" />
      </div>

      <div className="wrapper relative z-10 w-full pt-32 pb-20 flex items-center">
        <div className="max-w-2xl text-left">
          <h1 className="mb-3 max-w-2xl text-xs leading-[1.5] !text-[#D4AF37] font-serif-heading drop-shadow-[0_3px_5px_rgba(0,0,0,0.55)] sm:text-sm md:text-base animate-slide-up" style={{ animationDelay: "100ms" }}>
            Protecting Your Rights. Pursuing the Results You Deserve.
          </h1>

          <p className="mb-6 max-w-2xl text-[10px] leading-[1.6] text-white/85 sm:text-xs md:text-sm animate-slide-up drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)]" style={{ animationDelay: "200ms" }}>
            Experienced legal representation for individuals, families, employees, tenants, and injury victims throughout California.
          </p>

          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row animate-slide-up" style={{ animationDelay: "300ms" }}>
            <Link
              href="/contact"
              className="flex min-h-16 items-center justify-center rounded-xl bg-[#D4AF37] px-10 py-4 text-sm font-bold text-white shadow-lg transition-colors duration-300 hover:bg-[#B8942E] sm:min-w-64"
            >
              FREE CONSULTATION
            </Link>
            <a
              href="tel:2134555595"
              className="flex min-h-16 items-center justify-center rounded-xl border border-white/60 bg-white/5 px-10 py-4 text-sm font-bold text-white backdrop-blur-sm transition-colors duration-300 hover:border-white hover:bg-white/15 sm:min-w-56"
            >
              (213) 455-5595
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
