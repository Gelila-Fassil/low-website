import type { Metadata } from "next";
import Link from "next/link";
import { getBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Personal Injury Attorney | Los Angeles & Oakland",
  description:
    "Personal Injury Representation in California. Car accidents, slip and fall injuries, and negligence claims. Free consultation.",
};

export default function PersonalInjuryPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Practice Areas", item: "/practice-areas" },
    { name: "Personal Injury", item: "/practice-areas/personal-injury" },
  ];

  const faqs = [
    {
      q: "What should I do immediately after a motor vehicle accident in California?",
      a: "First, ensure safety and seek medical attention immediately. Report the crash to law enforcement, exchange contact and insurance information, photograph the accident scene and vehicle damage, and consult an attorney before making recorded statements to insurance adjusters.",
    },
    {
      q: "How is negligence established in a California slip & fall case?",
      a: "Property owners have a duty to maintain reasonably safe premises. To prove negligence, it must be shown that a dangerous condition existed, the owner knew or should have known about it, and failed to repair or warn visitors, directly causing your injury.",
    },
    {
      q: "What is the statute of limitations for personal injury claims in California?",
      a: "Generally, California Code of Civil Procedure § 335.1 provides a two-year deadline from the date of injury to file a personal injury lawsuit, though shorter notice deadlines apply if government entities are involved.",
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
            <li className="text-[#D4AF37] font-semibold">Personal Injury</li>
          </ol>
        </nav>

        {/* Hero Header */}
        <div className="navy-card p-8 lg:p-12 rounded-3xl border border-[#D4AF37]/30 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold uppercase">
            <i className="fas fa-user-injured"></i>
            <span>California Injury Representation</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-heading text-white">
            Personal Injury Representation in California
          </h1>

          <p className="text-slate-300 text-base sm:text-lg font-light max-w-3xl leading-relaxed">
            INJURED BECAUSE OF SOMEONE ELSE’S NEGLIGENCE? An unexpected injury can change your life. The Law Office of Michael Hailu APLC is here to help you understand your rights and pursue legal options following an accident.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-gold px-8 py-3.5 text-xs font-extrabold uppercase">
              FREE PERSONAL INJURY CONSULTATION
            </Link>
            <a href="tel:2134555595" className="btn-navy-outline px-8 py-3.5 text-xs font-bold uppercase">
              CALL (213) 455-5595
            </a>
          </div>
        </div>

        {/* Cases Handled */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold font-serif-heading text-white">
            Injury Claims We Handle
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="navy-card p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-[#D4AF37]">
                <i className="fas fa-car-burst text-lg"></i>
                <h3 className="text-lg font-bold text-white font-serif-heading">
                  Car Accidents
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Helping individuals injured in motor vehicle collisions understand their legal rights and pursue compensation for medical bills and losses.
              </p>
            </div>

            <div className="navy-card p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-[#D4AF37]">
                <i className="fas fa-person-falling text-lg"></i>
                <h3 className="text-lg font-bold text-white font-serif-heading">
                  Slip & Fall
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Representing individuals injured on hazardous commercial or residential properties due to unsafe conditions or poor maintenance.
              </p>
            </div>

            <div className="navy-card p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-[#D4AF37]">
                <i className="fas fa-hand-holding-medical text-lg"></i>
                <h3 className="text-lg font-bold text-white font-serif-heading">
                  Negligence-Related Injuries
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Assisting injured victims in pursuing claims when another party’s careless or reckless actions result in serious physical harm.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl font-bold font-serif-heading text-white">
            Personal Injury FAQs
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
            Injured in Los Angeles or Oakland?
          </h3>
          <p className="text-xs text-slate-300 max-w-xl mx-auto">
            Contact the Law Office of Michael Hailu APLC for a free, confidential case consultation.
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
