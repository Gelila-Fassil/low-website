"use client";

import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-24 bg-[#0A1128] relative border-b border-white/10">
      <div className="wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Photography Frame */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white/5 p-3 rounded-2xl border border-white/10 shadow-xl">
              <div className="relative h-100 sm:h-120 rounded-xl overflow-hidden border border-white/10 group">
                <Image
                  src="/tingey-injury-law-firm-veNb0DDegzE-unsplash.jpg"
                  alt="Law Office of Michael Hailu APLC Consultation"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-100"
                />
                <div className="absolute inset-0 bg-linear-to-t from-white/95 via-white/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-white/80 backdrop-blur-md border border-white shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                  <p className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">
                    Los Angeles & Oakland Offices
                  </p>
                  <p className="text-xs sm:text-sm font-serif-heading text-[#0A1128] mt-1.5 font-bold">
                    Client-Focused Legal Representation Throughout California
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Firm Overview Content */}
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest border border-[#D4AF37]/50 shadow-sm">
              <i className="fas fa-gavel text-[#D4AF37]"></i>
              <span>About The Law Office</span>
            </div>

            <h2
              className="text-[#D4AF37] font-serif-heading leading-tight"
              style={{ color: "#D4AF37" }}
            >
              At Law Office of Michael Hailu APLC, We Are Committed to Your
              Rights.
            </h2>

            <div className="space-y-4 text-white/80 text-sm sm:text-base font-medium leading-relaxed">
              <p>
                At{" "}
                <strong className="text-white font-bold">
                  Law Office of Michael Hailu APLC
                </strong>
                , we are committed to providing professional, responsive, and
                client-focused legal representation to individuals and families
                throughout California.
              </p>
              <p>
                With offices in{" "}
                <strong className="text-white font-bold">Los Angeles</strong>{" "}
                and <strong className="text-white font-bold">Oakland</strong>,
                our Law Office serves diverse communities across a range of
                legal matters, including Employment Law, Tenant Habitability,
                Personal Injury, and Immigration Law.
              </p>
              <p>
                We understand that legal challenges can be complex and deeply
                personal. Our approach is centered on listening to our clients,
                understanding their individual circumstances, clearly
                communicating their legal options, and advocating for their
                rights.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border-l-4 border-l-[#D4AF37] shadow-sm">
              <p
                className="text-sm sm:text-base font-serif-heading italic text-[#D4AF37] font-semibold"
                style={{ color: "#D4AF37" }}
              >
                &quot;Professional Representation. Personal Attention. A
                Commitment to Your Rights.&quot;
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/about-us"
                className="border border-[#D4AF37] bg-transparent text-white hover:bg-[#D4AF37] hover:text-[#0A1128] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 w-full sm:w-auto text-center shadow-sm"
              >
                LEARN MORE ABOUT OUR FIRM
              </Link>
              <Link
                href="/contact"
                className="bg-[#D4AF37] text-[#0A1128] hover:bg-white hover:text-[#0A1128] px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto text-center"
              >
                REQUEST A FREE CONSULTATION
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
