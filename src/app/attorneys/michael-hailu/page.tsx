import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAttorneySchema, getBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Michael Hailu | Attorney at Law | California",
  description:
    "Michael Hailu, Attorney at Law. Managing Attorney at Law Office of Michael Hailu APLC serving Los Angeles and Oakland.",
};

export default function MichaelHailuProfilePage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Attorneys", item: "/attorneys" },
    { name: "Michael Hailu", item: "/attorneys/michael-hailu" },
  ];

  return (
    <main className="bg-[#0A1128] py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getAttorneySchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema(breadcrumbs)),
        }}
      />

      <div className="wrapper space-y-12">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs text-slate-400">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-[#D4AF37]">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/attorneys" className="hover:text-[#D4AF37]">
                Attorneys
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#D4AF37] font-semibold">Michael Hailu</li>
          </ol>
        </nav>

        {/* Profile Header */}
        <div className="navy-card p-8 lg:p-12 rounded-3xl border border-[#D4AF37]/40 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Photo */}
            <div className="lg:col-span-4 relative">
              <div className="relative h-[380px] rounded-2xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-xl">
                <Image
                  src="/ceo1.jpg"
                  alt="Michael Hailu, Attorney at Law"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Bio & Details */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold uppercase">
                <i className="fas fa-user-tie"></i>
                <span>Managing Attorney</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-heading text-white">
                Michael Hailu
              </h1>

              <p className="text-sm font-semibold text-[#F3E5AB]">
                Law Office of Michael Hailu APLC • Los Angeles & Oakland, California
              </p>

              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                Michael Hailu is the managing attorney at Law Office of Michael Hailu APLC. He is dedicated to providing professional, responsive, and client-focused legal representation across Employment Law, Tenant Habitability, Personal Injury, and Immigration Law throughout California.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-gold px-8 py-3.5 text-xs font-extrabold uppercase">
                  SCHEDULE CONSULTATION WITH MICHAEL HAILU
                </Link>
                <a href="tel:2134555595" className="btn-navy-outline px-8 py-3.5 text-xs font-bold uppercase">
                  CALL (213) 455-5595
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials Grid with Clearly Marked Placeholders */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold font-serif-heading text-white">
            Attorney Background & Credentials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="navy-card p-6 rounded-2xl border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-[#D4AF37]">
                <i className="fas fa-graduation-cap"></i>
                <h3 className="text-base font-bold text-white">Education</h3>
              </div>
              <p className="text-xs text-slate-400 italic">
                [Education information placeholder — to be updated upon verified client confirmation]
              </p>
            </div>

            <div className="navy-card p-6 rounded-2xl border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-[#D4AF37]">
                <i className="fas fa-gavel"></i>
                <h3 className="text-base font-bold text-white">Bar Admissions</h3>
              </div>
              <p className="text-xs text-slate-400 italic">
                [State Bar of California admission details placeholder — to be updated upon verification]
              </p>
            </div>

            <div className="navy-card p-6 rounded-2xl border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-[#D4AF37]">
                <i className="fas fa-[#D4AF37] fa-award"></i>
                <h3 className="text-base font-bold text-white">Professional Memberships</h3>
              </div>
              <p className="text-xs text-slate-400 italic">
                [Professional legal memberships placeholder — to be updated upon verification]
              </p>
            </div>

            <div className="navy-card p-6 rounded-2xl border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-[#D4AF37]">
                <i className="fas fa-language"></i>
                <h3 className="text-base font-bold text-white">Languages</h3>
              </div>
              <p className="text-xs text-slate-300">
                English <span className="text-slate-400 italic">(Additional verified languages to be added upon attorney approval)</span>
              </p>
            </div>

            <div className="navy-card p-6 rounded-2xl border border-white/10 space-y-2 md:col-span-2">
              <div className="flex items-center gap-2 text-[#D4AF37]">
                <i className="fas fa-hand-holding-heart"></i>
                <h3 className="text-base font-bold text-white">Community Involvement</h3>
              </div>
              <p className="text-xs text-slate-400 italic">
                [Community involvement and legal advocacy programs placeholder — to be updated upon verification]
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
