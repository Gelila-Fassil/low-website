import type { Metadata } from "next";
import Link from "next/link";
import { getBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Oakland Law Office | Law Office of Michael Hailu APLC",
  description:
    "Law Office of Michael Hailu APLC in Oakland, CA. 1999 Harrison Street, Suite 1800. Phone: 877-424-5848. Employment, Tenant, Injury & Immigration Law.",
};

export default function OaklandLocationPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Locations", item: "/locations" },
    { name: "Oakland", item: "/locations/oakland" },
  ];

  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Law Office of Michael Hailu APLC - Oakland Office",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1999 Harrison Street, Suite 1800",
      "addressLocality": "Oakland",
      "addressRegion": "CA",
      "postalCode": "94612",
      "addressCountry": "US",
    },
    "telephone": "877-424-5848",
    "url": "https://www.hailulawyers.com/locations/oakland",
  };

  return (
    <main className="bg-[#0A1128] py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(locationSchema),
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
            <li>Locations</li>
            <li>/</li>
            <li className="text-[#D4AF37] font-semibold">Oakland</li>
          </ol>
        </nav>

        {/* Hero Header */}
        <div className="navy-card p-8 lg:p-12 rounded-3xl border border-[#D4AF37]/30 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold uppercase">
            <i className="fas fa-location-dot"></i>
            <span>Northern California Office</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-heading text-white">
            Oakland Law Office
          </h1>

          <p className="text-slate-300 text-base sm:text-lg font-light max-w-3xl leading-relaxed">
            Representing individuals, families, employees, tenants, and injury victims throughout Oakland, the Bay Area, and Northern California.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <a href="tel:8774245848" className="btn-gold px-8 py-3.5 text-xs font-extrabold uppercase">
              CALL OAKLAND OFFICE: 877-424-5848
            </a>
            <Link href="/contact" className="btn-navy-outline px-8 py-3.5 text-xs font-bold uppercase">
              REQUEST CONSULTATION
            </Link>
          </div>
        </div>

        {/* Address & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 navy-card p-8 rounded-3xl border border-white/10 space-y-6">
            <h2 className="text-xl font-bold font-serif-heading text-white">
              Office Information
            </h2>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="space-y-1">
                <span className="text-xs text-[#D4AF37] font-bold uppercase">Firm Name</span>
                <p className="font-semibold text-white">Law Office of Michael Hailu APLC</p>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-[#D4AF37] font-bold uppercase">Street Address</span>
                <p className="font-semibold text-white">1999 Harrison Street, Suite 1800</p>
                <p>Oakland, CA 94612</p>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-[#D4AF37] font-bold uppercase">Telephone</span>
                <p>
                  <a href="tel:8774245848" className="font-bold text-white hover:text-[#D4AF37] text-base">
                    877-424-5848
                  </a>
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-[#D4AF37] font-bold uppercase">Website</span>
                <p>
                  <a href="https://www.hailulawyers.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 underline">
                    www.hailulawyers.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 navy-card p-3 rounded-3xl border border-white/10 h-[380px] overflow-hidden">
            <iframe
              title="Oakland Office Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.029813589417!2d-122.26442652342371!3d37.80806497197775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f80b555555555%3A0x123456789abcdef!2s1999%20Harrison%20St%20%231800%2C%20Oakland%2C%20CA%2094612!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "1.25rem", filter: "brightness(0.9) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Practice Areas Links */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold font-serif-heading text-white">
            Oakland Legal Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/practice-areas/employment-law" className="navy-card p-4 rounded-xl border border-white/10 hover:border-[#D4AF37] transition-colors block text-xs">
              <span className="font-bold text-white block mb-1">Employment Law</span>
              <span className="text-slate-400">Unpaid wages, wrongful termination & discrimination</span>
            </Link>
            <Link href="/practice-areas/tenant-habitability" className="navy-card p-4 rounded-xl border border-white/10 hover:border-[#D4AF37] transition-colors block text-xs">
              <span className="font-bold text-white block mb-1">Tenant Habitability</span>
              <span className="text-slate-400">Mold, pests, water leaks & electrical problems</span>
            </Link>
            <Link href="/practice-areas/personal-injury" className="navy-card p-4 rounded-xl border border-white/10 hover:border-[#D4AF37] transition-colors block text-xs">
              <span className="font-bold text-white block mb-1">Personal Injury</span>
              <span className="text-slate-400">Car accidents, slip & fall & negligence injuries</span>
            </Link>
            <Link href="/practice-areas/immigration-law" className="navy-card p-4 rounded-xl border border-white/10 hover:border-[#D4AF37] transition-colors block text-xs">
              <span className="font-bold text-white block mb-1">Immigration Law</span>
              <span className="text-slate-400">Green Cards, citizenship & family petitions</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
