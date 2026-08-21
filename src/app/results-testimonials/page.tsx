import type { Metadata } from "next";
import Link from "next/link";
import Testimonials from "@/components/sections/Testimonials";
import { getBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Results & Testimonials | Law Office of Michael Hailu APLC",
  description:
    "Client commitment and case results overview at Law Office of Michael Hailu APLC. Prior results do not guarantee similar outcomes.",
};

export default function ResultsTestimonialsPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Results & Testimonials", item: "/results-testimonials" },
  ];

  return (
    <main className="bg-[#0A1128] py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema(breadcrumbs)),
        }}
      />
      <div className="wrapper mb-6">
        <nav aria-label="Breadcrumb" className="text-xs text-slate-400">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-[#D4AF37]">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#D4AF37] font-semibold">Results & Testimonials</li>
          </ol>
        </nav>
      </div>

      <Testimonials />
    </main>
  );
}
