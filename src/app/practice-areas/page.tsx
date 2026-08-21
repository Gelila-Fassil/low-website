import type { Metadata } from "next";
import Link from "next/link";
import PracticeAreas from "@/components/sections/PracticeAreas";
import { getBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Practice Areas | Law Office of Michael Hailu APLC",
  description:
    "Explore practice areas at Law Office of Michael Hailu APLC: Employment Law, Tenant Habitability, Personal Injury, and Immigration Law in Los Angeles & Oakland.",
};

export default function PracticeAreasHubPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Practice Areas", item: "/practice-areas" },
  ];

  return (
    <main className="bg-[#0A1128] py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema(breadcrumbs)),
        }}
      />
      <div className="wrapper mb-8">
        <nav aria-label="Breadcrumb" className="text-xs text-slate-400">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-[#D4AF37]">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#D4AF37] font-semibold">Practice Areas</li>
          </ol>
        </nav>
      </div>

      <PracticeAreas />
    </main>
  );
}
