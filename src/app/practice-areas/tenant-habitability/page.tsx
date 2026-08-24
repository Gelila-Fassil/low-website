import type { Metadata } from "next";
import Link from "next/link";
import { getBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Tenant Habitability & Rights Attorney | California",
  description:
    "Protecting Tenants from Unsafe Living Conditions in California. Assistance with mold, pest infestations, plumbing leaks, and electrical hazards.",
};

export default function TenantHabitabilityPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Practice Areas", item: "/practice-areas" },
    { name: "Tenant Habitability", item: "/practice-areas/tenant-habitability" },
  ];

  const faqs = [
    {
      q: "What is the Implied Warranty of Habitability in California?",
      a: "Under California Civil Code § 1941.1, landlords are legally obligated to maintain rental properties in a safe, healthy, and fit condition for human occupancy. This includes providing functioning plumbing, heating, electrical systems, and pest management.",
    },
    {
      q: "What steps should I take if my landlord refuses to fix persistent mold or pest problems?",
      a: "Document all unhealthy conditions with date-stamped photos and videos, keep copies of written repair notices sent to your landlord, and consult a tenant habitability attorney regarding your legal rights.",
    },
    {
      q: "Can a landlord retaliate against me for reporting code violations?",
      a: "No. California law prohibits landlords from retaliating—such as raising rent or serving eviction notices—against tenants who exercise their legal right to report substandard or unsafe conditions.",
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
            <li className="text-[#D4AF37] font-semibold">Tenant Habitability</li>
          </ol>
        </nav>

        {/* Hero Header */}
        <div className="navy-card p-8 lg:p-12 rounded-3xl border border-[#D4AF37]/30 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold uppercase">
            <i className="fas fa-house-circle-exclamation"></i>
            <span>California Tenant Rights</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-heading text-white">
            Protecting Tenants from Unsafe Living Conditions
          </h1>

          <p className="text-slate-300 text-base sm:text-lg font-light max-w-3xl leading-relaxed">
            YOU DON&apos;T HAVE TO LIVE IN UNSAFE OR UNHEALTHY CONDITIONS. You deserve a safe and livable home. The Law Office of Michael Hailu APLC helps California tenants address ongoing habitability issues, landlord neglect, and dangerous housing conditions.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-gold px-8 py-3.5 text-xs font-extrabold uppercase">
              FREE TENANT CONSULTATION
            </Link>
            <a href="tel:2134555595" className="btn-navy-outline px-8 py-3.5 text-xs font-bold uppercase">
              CALL (213) 455-5595
            </a>
          </div>
        </div>

        {/* Issues Handled */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold font-serif-heading text-white">
            Habitability Issues We Help Address
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="navy-card p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-[#D4AF37]">
                <i className="fas fa-bacteria text-lg"></i>
                <h3 className="text-lg font-bold text-white font-serif-heading">
                  Mold & Mildew
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Helping tenants address unhealthy living conditions caused by persistent toxic mold, moisture accumulation, and unaddressed water leaks.
              </p>
            </div>

            <div className="navy-card p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-[#D4AF37]">
                <i className="fas fa-bug text-lg"></i>
                <h3 className="text-lg font-bold text-white font-serif-heading">
                  Pest Infestation
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Protecting tenants dealing with roaches, bedbugs, rodents, and other unresolved pest infestations that jeopardize health and safety.
              </p>
            </div>

            <div className="navy-card p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-[#D4AF37]">
                <i className="fas fa-[#D4AF37] fa-faucet-drip text-lg"></i>
                <h3 className="text-lg font-bold text-white font-serif-heading">
                  Water Leaks & Plumbing
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Assisting tenants facing ongoing pipe leaks, sewage backups, water damage, lack of hot water, and severe plumbing infrastructure issues.
              </p>
            </div>

            <div className="navy-card p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-[#D4AF37]">
                <i className="fas fa-bolt text-lg"></i>
                <h3 className="text-lg font-bold text-white font-serif-heading">
                  Electrical Problems
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Helping tenants address exposed wiring, faulty circuit breakers, power outages, and unsafe electrical conditions that put their home and safety at risk.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl font-bold font-serif-heading text-white">
            Habitability FAQs
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
            Living in Unsafe Rental Conditions in Los Angeles or Oakland?
          </h3>
          <p className="text-xs text-slate-300 max-w-xl mx-auto">
            Contact the Law Office of Michael Hailu APLC to discuss your options for habitability claims and tenant protection.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link href="/contact" className="btn-gold px-8 py-3 text-xs font-extrabold uppercase">
              REQUEST FREE CONSULTATION
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
