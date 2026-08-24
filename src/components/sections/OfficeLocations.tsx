"use client";

import Link from "next/link";

export default function OfficeLocations() {
  return (
    <section className="py-20 bg-[#0A1128] relative border-b border-white/10">
      <div className="wrapper">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest border border-[#D4AF37]/50">
            <i className="fas fa-location-dot text-[#D4AF37]"></i>
            <span>California Office Locations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-heading text-[#D4AF37]" style={{ color: '#D4AF37' }}>
            Serving Southern & Northern California
          </h2>
          <p className="text-white/80 text-sm font-medium">
            Conveniently located offices in Los Angeles and Oakland to represent clients throughout California.
          </p>
        </div>

        {/* Both Offices Displayed with Equal Visual Prominence */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Los Angeles Office */}
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative space-y-6 flex flex-col justify-between hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 text-[#D4AF37] flex items-center justify-center font-bold shadow-md border border-[#D4AF37]/20">
                    <i className="fas fa-city text-base"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif-heading text-white">
                      LOS ANGELES OFFICE
                    </h3>
                    <span className="text-xs text-[#D4AF37] font-bold tracking-wider">
                      Southern California Region
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#D4AF37]/10 text-white text-[11px] font-bold border border-[#D4AF37]/30 hidden sm:block">
                  Primary Location
                </span>
              </div>

              <div className="space-y-3 text-sm text-white/80 font-medium">
                <div className="flex items-start gap-3">
                  <i className="fas fa-location-dot text-[#D4AF37] mt-1"></i>
                  <div>
                    <p className="font-bold text-white">3435 Wilshire Blvd, Suite 2285</p>
                    <p>Los Angeles, CA 90010</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <i className="fas fa-phone-volume text-[#D4AF37]"></i>
                  <a
                    href="tel:2134555595"
                    className="font-bold text-white hover:text-[#D4AF37] transition-colors text-base"
                  >
                    (213) 455-5595
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <i className="fas fa-globe text-[#D4AF37]"></i>
                  <a
                    href="https://www.hailulawyers.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-white/60 hover:text-[#D4AF37] underline font-medium"
                  >
                    www.hailulawyers.com
                  </a>
                </div>
              </div>

              {/* Google Map Embed Container Placeholder */}
              <div className="w-full h-48 rounded-xl overflow-hidden border border-neutral-200 relative bg-neutral-100 shadow-inner">
                <iframe
                  title="Los Angeles Office Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.698305086052!2d-118.30058862348506!3d34.06179371775583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b89d53347f3b%3A0xd6a4c2810a9bd037!2s3435%20Wilshire%20Blvd%20%232285%2C%20Los%20Angeles%2C%20CA%2090010!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href="/locations/los-angeles"
                className="border border-[#D4AF37] bg-transparent text-white hover:bg-[#D4AF37] hover:text-[#0A1128] transition-colors w-full text-center py-3 rounded-full text-xs font-bold uppercase tracking-wider"
              >
                LOS ANGELES OFFICE DETAILS
              </Link>
              <a
                href="tel:2134555595"
                className="bg-[#D4AF37] hover:bg-white text-[#0A1128] transition-colors shadow-sm w-full text-center py-3 rounded-full text-xs font-bold uppercase tracking-wider"
              >
                CALL LA OFFICE
              </a>
            </div>
          </div>

          {/* Oakland Office */}
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative space-y-6 flex flex-col justify-between hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 text-[#D4AF37] flex items-center justify-center font-bold shadow-md border border-[#D4AF37]/20">
                    <i className="fas fa-building text-base"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif-heading text-white">
                      OAKLAND OFFICE
                    </h3>
                    <span className="text-xs text-[#D4AF37] font-bold tracking-wider">
                      Northern California Region
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#D4AF37]/10 text-white text-[11px] font-bold border border-[#D4AF37]/30 hidden sm:block">
                  Northern CA Hub
                </span>
              </div>

              <div className="space-y-3 text-sm text-white/80 font-medium">
                <div className="flex items-start gap-3">
                  <i className="fas fa-location-dot text-[#D4AF37] mt-1"></i>
                  <div>
                    <p className="font-bold text-white">1999 Harrison Street, Suite 1800</p>
                    <p>Oakland, CA 94612</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <i className="fas fa-phone-volume text-[#D4AF37]"></i>
                  <a
                    href="tel:8774245848"
                    className="font-bold text-white hover:text-[#D4AF37] transition-colors text-base"
                  >
                    877-424-5848
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <i className="fas fa-globe text-[#D4AF37]"></i>
                  <a
                    href="https://www.hailulawyers.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-white/60 hover:text-[#D4AF37] underline font-medium"
                  >
                    www.hailulawyers.com
                  </a>
                </div>
              </div>

              {/* Google Map Embed Container Placeholder */}
              <div className="w-full h-48 rounded-xl overflow-hidden border border-neutral-200 relative bg-neutral-100 shadow-inner">
                <iframe
                  title="Oakland Office Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.029813589417!2d-122.26442652342371!3d37.80806497197775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f80b555555555%3A0x123456789abcdef!2s1999%20Harrison%20St%20%231800%2C%20Oakland%2C%20CA%2094612!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href="/locations/oakland"
                className="border border-[#D4AF37] bg-transparent text-white hover:bg-[#D4AF37] hover:text-[#0A1128] transition-colors w-full text-center py-3 rounded-full text-xs font-bold uppercase tracking-wider"
              >
                OAKLAND OFFICE DETAILS
              </Link>
              <a
                href="tel:8774245848"
                className="bg-[#D4AF37] hover:bg-white text-[#0A1128] transition-colors shadow-sm w-full text-center py-3 rounded-full text-xs font-bold uppercase tracking-wider"
              >
                CALL OAKLAND OFFICE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
