"use client";

import Link from "next/link";

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#F5F3EF] relative border-b border-neutral-200">
      <div className="wrapper">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0A1128]/5 text-[#0A1128] text-xs font-bold uppercase tracking-widest border border-[#D4AF37]/30">
            <i className="fas fa-quote-left text-[#D4AF37]"></i>
            <span>Results & Client Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-heading text-[#0A1128]">
            Client Commitment & Advocacy
          </h2>
          <p className="text-neutral-600 text-sm font-medium">
            We measure our success by the satisfaction, justice, and clarity we bring to our clients across California.
          </p>
        </div>

        {/* Placeholders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 p-6 rounded-2xl border border-neutral-200 relative space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#D4AF37] text-xs mb-3">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="text-xs text-neutral-600 italic leading-relaxed font-medium">
                  &quot;[Verified Client Testimonial Placeholder — Official client feedback and approved outcome details will be published here upon verification.]&quot;
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs font-bold text-[#0A1128]">Verified Client</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#0A1128]/5 text-[#0A1128] font-bold border border-[#D4AF37]/30">
                  California
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Legal Disclaimer Box */}
        <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-sm text-center max-w-3xl mx-auto space-y-4">
          <p className="text-[11px] text-neutral-500 font-medium">
            <strong className="text-[#0A1128]">Attorney Advertising Disclaimer:</strong> Prior results do not guarantee a similar outcome. Website information is for general informational purposes only and does not constitute legal advice.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="bg-[#0A1128] hover:bg-[#1a2b5e] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider inline-block transition-colors duration-300 shadow-sm border border-[#0A1128]"
            >
              DISCUSS YOUR CASE WITH OUR FIRM
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
