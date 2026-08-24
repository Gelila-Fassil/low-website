import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "About Us | Law Office of Michael Hailu APLC",
  description:
    "Learn about Law Office of Michael Hailu APLC. Professional, responsive, and client-focused legal representation in Los Angeles and Oakland, California.",
};

export default function AboutUsPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "About Us", item: "/about-us" },
  ];

  return (
    <main className="bg-[#F5F3EF] py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema(breadcrumbs)),
        }}
      />

      <div className="wrapper space-y-12">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="text-xs text-neutral-500">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-[#D4AF37] text-neutral-600 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#0A1128] font-semibold">About Us</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A1128]/5 text-[#0A1128] text-[10px] font-bold uppercase tracking-widest border border-[#D4AF37]/30 shadow-sm">
            <i className="fas fa-scale-balanced text-[#D4AF37]"></i>
            <span>Firm Commitment & Overview</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-heading text-[#0A1128]">
            About Law Office of Michael Hailu APLC
          </h1>

          <p className="text-neutral-600 text-base sm:text-lg font-medium max-w-3xl leading-relaxed">
            At Law Office of Michael Hailu APLC, we are committed to providing professional, responsive, and client-focused legal representation to individuals and families throughout California.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="flex items-center justify-center rounded-xl bg-[#D4AF37] px-8 py-3.5 text-xs font-bold text-white shadow-lg transition-colors duration-300 hover:bg-[#B8942E] uppercase tracking-widest text-center">
              REQUEST A FREE CONSULTATION
            </Link>
            <a href="tel:2134555595" className="flex items-center justify-center rounded-xl border border-[#D4AF37] bg-white px-8 py-3.5 text-xs font-bold text-[#0A1128] shadow-sm transition-colors duration-300 hover:border-[#0A1128] hover:bg-[#0A1128] hover:text-white uppercase tracking-widest text-center">
              CALL (213) 455-5595
            </a>
          </div>
        </div>

        {/* Content & Photography Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5 text-neutral-600 text-sm leading-relaxed font-medium">
            <h2 className="text-2xl font-bold font-serif-heading text-[#0A1128]">
              Serving Diverse Communities Across California
            </h2>
            <p>
              With offices in <strong className="text-[#0A1128]">Los Angeles</strong> and <strong className="text-[#0A1128]">Oakland</strong>, our Law Office serves diverse communities across a range of legal matters, including Employment Law, Tenant Habitability, Personal Injury, and Immigration Law.
            </p>
            <p>
              We understand that legal challenges can be complex and deeply personal. Our approach is centered on listening to our clients, understanding their individual circumstances, clearly communicating their legal options, and advocating for their rights.
            </p>

            <div className="p-4 rounded-xl bg-[#D4AF37]/10 border-l-4 border-[#D4AF37]">
              <p className="text-base font-serif-heading italic text-[#0A1128]">
                &quot;Professional Representation. Personal Attention. A Commitment to Your Rights.&quot;
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative h-[380px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/sasun-bughdaryan-ozS0tPf8QT0-unsplash.jpg"
                  alt="California Courthouse and Legal Representation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        {/* Practice Areas Summary Grid */}
        <div className="space-y-6 pt-6">
          <h2 className="text-2xl font-bold font-serif-heading text-[#0A1128]">
            Core Practice Areas
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-neutral-200 hover:border-[#D4AF37] transition-all duration-300 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 space-y-3">
              <i className="fas fa-briefcase text-[#D4AF37] text-2xl"></i>
              <h3 className="text-lg font-bold text-[#0A1128] font-serif-heading">Employment Law</h3>
              <p className="text-xs text-neutral-600 font-medium">
                Unpaid wages, wrongful termination, discrimination, and retaliation.
              </p>
              <Link href="/practice-areas/employment-law" className="text-xs text-[#D4AF37] font-bold inline-block hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200 hover:border-[#D4AF37] transition-all duration-300 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 space-y-3">
              <i className="fas fa-house-circle-exclamation text-[#D4AF37] text-2xl"></i>
              <h3 className="text-lg font-bold text-[#0A1128] font-serif-heading">Tenant Habitability</h3>
              <p className="text-xs text-neutral-600 font-medium">
                Mold, pest infestations, plumbing leaks, and electrical hazards.
              </p>
              <Link href="/practice-areas/tenant-habitability" className="text-xs text-[#D4AF37] font-bold inline-block hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200 hover:border-[#D4AF37] transition-all duration-300 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 space-y-3">
              <i className="fas fa-user-injured text-[#D4AF37] text-2xl"></i>
              <h3 className="text-lg font-bold text-[#0A1128] font-serif-heading">Personal Injury</h3>
              <p className="text-xs text-neutral-600 font-medium">
                Car accidents, slip & fall injuries, and negligence claims.
              </p>
              <Link href="/practice-areas/personal-injury" className="text-xs text-[#D4AF37] font-bold inline-block hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200 hover:border-[#D4AF37] transition-all duration-300 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 space-y-3">
              <i className="fas fa-passport text-[#D4AF37] text-2xl"></i>
              <h3 className="text-lg font-bold text-[#0A1128] font-serif-heading">Immigration Law</h3>
              <p className="text-xs text-neutral-600 font-medium">
                Green Cards, naturalization citizenship, and family petitions.
              </p>
              <Link href="/practice-areas/immigration-law" className="text-xs text-[#D4AF37] font-bold inline-block hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
