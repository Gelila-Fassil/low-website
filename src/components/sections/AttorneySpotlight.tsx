"use client";

import Link from "next/link";
import Image from "next/image";

export default function AttorneySpotlight() {
  return (
    <section className="py-24 bg-[#0A1128] relative border-b border-white/10">
      <div className="wrapper">
        <div className="bg-white/5 p-8 lg:p-12 rounded-3xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Image Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[480px] rounded-2xl overflow-hidden border border-neutral-200 shadow-xl group">
                <Image
                  src="/ceo1.jpg"
                  alt="Michael Hailu, Attorney at Law"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 filter brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2 py-1 px-3 rounded-xl bg-white/80 backdrop-blur-md border border-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col justify-center">
                  <h3 className="text-[10px] font-bold font-serif-heading text-[#0A1128] leading-none mb-0.5">
                    Michael Hailu
                  </h3>
                  <p className="text-[8px] text-[#D4AF37] font-bold uppercase tracking-widest leading-none">
                    Managing Attorney • Law Office of Michael Hailu APLC
                  </p>
                </div>
              </div>
            </div>

            {/* Right Bio Summary */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest border border-[#D4AF37]/50 shadow-sm">
                <i className="fas fa-user-shield text-[#D4AF37]"></i>
                <span>Attorney Leadership</span>
              </div>

              <h2 className="text-[#D4AF37] font-serif-heading leading-tight" style={{ color: '#D4AF37' }}>
                Dedicated Legal Advocacy with Personal Attention
              </h2>

              <p className="text-white/80 text-sm sm:text-base font-medium leading-relaxed">
                Michael Hailu leads the Law Office of Michael Hailu APLC, providing responsive, strategic, and client-focused legal representation to individuals and families across California. With offices in Los Angeles and Oakland, he advocates passionately for workplace rights, tenant habitability, injury recovery, and immigration pathways.
              </p>

              {/* Verified Practice Areas & Placeholders */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-xl bg-white/5 border border-white/10 shadow-sm">
                  <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest block mb-1.5">
                    Primary Practice Areas
                  </span>
                  <p className="text-xs text-white font-semibold leading-relaxed">
                    Employment Law • Tenant Habitability • Personal Injury • Immigration Law
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-white/5 border border-white/10 shadow-sm">
                  <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest block mb-1.5">
                    Attorney Credentials
                  </span>
                  <ul className="text-xs text-white/70 italic leading-relaxed list-disc pl-4 space-y-1">
                    <li>[Biography to be verified]</li>
                    <li>[Education Placeholder]</li>
                    <li>[Bar Admissions Placeholder]</li>
                    <li>[Professional Memberships Placeholder]</li>
                    <li>[Languages Placeholder]</li>
                    <li>[Community Involvement Placeholder]</li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/attorneys/michael-hailu"
                  className="border border-[#D4AF37] bg-transparent text-white hover:bg-[#D4AF37] hover:text-[#0A1128] px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 w-full sm:w-auto text-center shadow-sm"
                >
                  VIEW MICHAEL HAILU&apos;S PROFILE
                </Link>
                <Link
                  href="/contact"
                  className="bg-[#D4AF37] text-[#0A1128] hover:bg-white hover:text-[#0A1128] px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto text-center"
                >
                  SCHEDULE A CONSULTATION
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
