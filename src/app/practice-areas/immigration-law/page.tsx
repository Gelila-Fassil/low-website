import type { Metadata } from "next";
import Link from "next/link";
import { getBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Immigration Law Attorney | California",
  description:
    "Trusted Immigration Legal Services in California. Guidance for Lawful Permanent Residency (Green Cards), Naturalization Citizenship, and Family Petitions.",
};

export default function ImmigrationLawPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Practice Areas", item: "/practice-areas" },
    { name: "Immigration Law", item: "/practice-areas/immigration-law" },
  ];

  const faqs = [
    {
      q: "What are the primary eligibility pathways for a Green Card (Lawful Permanent Residency)?",
      a: "Permanent residency can be pursued through family sponsorship, employment, humanitarian programs, or asylum. Requirements vary based on your individual status and relationship to U.S. citizens or permanent residents.",
    },
    {
      q: "What is required to apply for U.S. Naturalization (Citizenship)?",
      a: "Generally, applicants must be at least 18 years old, hold a Green Card for at least 5 years (or 3 years if married to a U.S. citizen), satisfy continuous residence and physical presence rules, demonstrate good moral character, and pass English and civics examinations.",
    },
    {
      q: "Which family members can a U.S. citizen or Permanent Resident petition for?",
      a: "U.S. citizens can petition for spouses, children, parents, and siblings. Lawful Permanent Residents can petition for spouses and unmarried children under U.S. immigration preference categories.",
    },
  ];

  return (
    <main className="bg-[#0A1128] py-12">
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
              <Link href="/practice-areas" className="hover:text-[#D4AF37]">
                Practice Areas
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#D4AF37] font-semibold">Immigration Law</li>
          </ol>
        </nav>

        {/* Hero Header */}
        <div className="navy-card p-8 lg:p-12 rounded-3xl border border-[#D4AF37]/30 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold uppercase">
            <i className="fas fa-passport"></i>
            <span>California Immigration Guidance</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-heading text-white">
            Immigration Legal Services
          </h1>

          <p className="text-slate-300 text-base sm:text-lg font-light max-w-3xl leading-relaxed">
            YOUR IMMIGRATION JOURNEY DESERVES TRUSTED LEGAL GUIDANCE. Whether you’re pursuing permanent residency, citizenship, or bringing family together, the Law Office of Michael Hailu APLC is here to guide you through the legal process.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-gold px-8 py-3.5 text-xs font-extrabold uppercase">
              IMMIGRATION CONSULTATION
            </Link>
            <a href="tel:2134555595" className="btn-navy-outline px-8 py-3.5 text-xs font-bold uppercase">
              CALL (213) 455-5595
            </a>
          </div>
        </div>

        {/* Services Handled */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold font-serif-heading text-white">
            Immigration Services We Provide
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="navy-card p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-[#D4AF37]">
                <i className="fas fa-[#D4AF37] fa-[#D4AF37] fa-id-card text-lg"></i>
                <h3 className="text-lg font-bold text-white font-serif-heading">
                  Green Cards
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Helping individuals and families navigate the process of obtaining lawful permanent residency status in the United States.
              </p>
            </div>

            <div className="navy-card p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-[#D4AF37]">
                <i className="fas fa-[#D4AF37] fa-flag-usa text-lg"></i>
                <h3 className="text-lg font-bold text-white font-serif-heading">
                  Citizenship & Naturalization
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Providing step-by-step legal guidance throughout the U.S. naturalization process and citizenship application requirements.
              </p>
            </div>

            <div className="navy-card p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-[#D4AF37]">
                <i className="fas fa-people-roof text-lg"></i>
                <h3 className="text-lg font-bold text-white font-serif-heading">
                  Family Petitions
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Assisting families in filing immigration petitions for eligible relatives to unite loved ones in the United States.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl font-bold font-serif-heading text-white">
            Immigration Law FAQs
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="navy-card p-6 rounded-2xl border border-white/10 space-y-2">
                <h3 className="text-base font-bold text-[#F3E5AB]">
                  {faq.q}
                </h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0F1A3A] to-[#060C1E] border border-[#D4AF37]/40 text-center space-y-4">
          <h3 className="text-xl font-bold font-serif-heading text-white">
            Have Questions About Your Immigration Case?
          </h3>
          <p className="text-xs text-slate-300 max-w-xl mx-auto">
            Contact the Law Office of Michael Hailu APLC to schedule a consultation with our office.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link href="/contact" className="btn-gold px-8 py-3 text-xs font-extrabold uppercase">
              IMMIGRATION CONSULTATION
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
