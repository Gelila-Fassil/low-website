import type { Metadata } from "next";
import Link from "next/link";
import { getBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Employment Law Attorney | Los Angeles & Oakland",
  description:
    "California Employment Law Representation. Unpaid wages, overtime, wrongful termination, discrimination, harassment, and workplace retaliation.",
};

export default function EmploymentLawPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Practice Areas", item: "/practice-areas" },
    { name: "Employment Law", item: "/practice-areas/employment-law" },
  ];

  const faqs = [
    {
      q: "What should I do if I am not being paid overtime wages in California?",
      a: "California labor law strictly requires non-exempt employees to be compensated for overtime. Document all hours worked, pay stubs, and communications, and consult an experienced employment attorney to understand your options.",
    },
    {
      q: "What constitutes wrongful termination under California law?",
      a: "While California is an at-will state, an employer cannot fire an employee for illegal reasons—such as discrimination, retaliation for reporting safety/legal violations, or taking protected leave.",
    },
    {
      q: "How do I know if workplace harassment or discrimination has occurred?",
      a: "Unlawful harassment or discrimination occurs when adverse workplace actions or hostile environments are based on protected characteristics like race, gender, disability, age, religion, or national origin.",
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
            <li className="text-[#D4AF37] font-semibold">Employment Law</li>
          </ol>
        </nav>

        {/* Hero Header */}
        <div className="navy-card p-8 lg:p-12 rounded-3xl border border-[#D4AF37]/30 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold uppercase">
            <i className="fas fa-briefcase"></i>
            <span>California Workplace Rights</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-heading text-white">
            California Employment Law Representation
          </h1>

          <p className="text-slate-300 text-base sm:text-lg font-light max-w-3xl leading-relaxed">
            YOUR WORKPLACE RIGHTS MATTER. You deserve fair treatment and fair pay. The Law Office of Michael Hailu APLC represents employees throughout California in wage disputes, wrongful termination, discrimination, harassment, and retaliation claims.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-gold px-8 py-3.5 text-xs font-extrabold uppercase">
              FREE EMPLOYMENT LAW CONSULTATION
            </Link>
            <a href="tel:2134555595" className="btn-navy-outline px-8 py-3.5 text-xs font-bold uppercase">
              CALL (213) 455-5595
            </a>
          </div>
        </div>

        {/* Core Services / Issues Handled */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold font-serif-heading text-white">
            Employment Law Claims We Handle
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="navy-card p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-[#D4AF37]">
                <i className="fas fa-clock text-lg"></i>
                <h3 className="text-lg font-bold text-white font-serif-heading">
                  Unpaid Wages & Overtime
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Helping employees pursue wages, overtime pay, missed meal and rest breaks, and compensation they may be owed under California Labor Code regulations.
              </p>
            </div>

            <div className="navy-card p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-[#D4AF37]">
                <i className="fas fa-user-xmark text-lg"></i>
                <h3 className="text-lg font-bold text-white font-serif-heading">
                  Wrongful Termination
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Protecting employees who believe they were unlawfully terminated from their jobs in violation of public policy, contract terms, or anti-retaliation statutes.
              </p>
            </div>

            <div className="navy-card p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-[#D4AF37]">
                <i className="fas fa-hand-paper text-lg"></i>
                <h3 className="text-lg font-bold text-white font-serif-heading">
                  Workplace Discrimination & Harassment
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Representing employees facing discrimination, hostile work environments, harassment, or unfair treatment based on race, gender, disability, age, or national origin.
              </p>
            </div>

            <div className="navy-card p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-[#D4AF37]">
                <i className="fas fa-shield-virus text-lg"></i>
                <h3 className="text-lg font-bold text-white font-serif-heading">
                  Workplace Retaliation
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Helping employees protect their rights when they face retaliation for reporting illegal conduct, safety hazards, wage violations, or exercising protected workplace rights.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl font-bold font-serif-heading text-white">
            Frequently Asked Questions
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

        {/* Internal Linking & CTA */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0F1A3A] to-[#060C1E] border border-[#D4AF37]/40 text-center space-y-4">
          <h3 className="text-xl font-bold font-serif-heading text-white">
            Need Guidance on a Workplace Matter in Los Angeles or Oakland?
          </h3>
          <p className="text-xs text-slate-300 max-w-xl mx-auto">
            Contact the Law Office of Michael Hailu APLC to discuss your case. We serve clients across California.
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
