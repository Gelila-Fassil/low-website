import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Attorneys | Law Office of Michael Hailu APLC",
  description:
    "Meet the legal team at Law Office of Michael Hailu APLC. Serving Los Angeles and Oakland in Employment Law, Tenant Habitability, Personal Injury, and Immigration Law.",
};

export default function AttorneysHubPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Attorneys", item: "/attorneys" },
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
            <li className="text-[#D4AF37] font-semibold">Attorneys</li>
          </ol>
        </nav>

        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold uppercase">
            <i className="fas fa-users-gear"></i>
            <span>Our Legal Leadership</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-heading text-white">
            California Attorneys
          </h1>
          <p className="text-slate-300 text-sm font-light">
            Dedicated legal representation focused on protecting your rights with personal attention and strategic advocacy.
          </p>
        </div>

        {/* Attorney Card */}
        <div className="max-w-2xl mx-auto">
          <div className="navy-card p-8 rounded-3xl border border-[#D4AF37]/40 shadow-2xl space-y-6 text-center">
            <div className="relative w-44 h-44 mx-auto rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-lg">
              <Image
                src="/ceo1.jpg"
                alt="Michael Hailu"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold font-serif-heading text-white">
                Michael Hailu
              </h2>
              <p className="text-xs text-[#D4AF37] font-bold uppercase tracking-wider mt-1">
                Managing Attorney
              </p>
              <p className="text-xs text-slate-300 font-light mt-3 max-w-lg mx-auto">
                Managing Attorney at Law Office of Michael Hailu APLC advocating for clients in Los Angeles, Oakland, and communities throughout California.
              </p>
            </div>
            <div>
              <Link
                href="/attorneys/michael-hailu"
                className="btn-gold px-8 py-3 text-xs font-extrabold uppercase inline-block"
              >
                VIEW FULL PROFILE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
