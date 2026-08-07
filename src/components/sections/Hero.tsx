import Link from "next/link";
import { Reveal } from "../ClientHelpers";

export default function Hero() {
  return (
    <section className="relative pt-44 pb-16 lg:pt-48 lg:pb-24 overflow-hidden border-b border-white/10">
      {/* Ambient Background Spotlights */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[var(--brand-main)]/20 rounded-full blur-[150px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-[var(--brand-light)]/15 rounded-full blur-[130px] pointer-events-none z-0"></div>

      <div className="wrapper relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline & Value Proposition (5 cols) */}
          <div className="lg:col-span-5">
            <Reveal>
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6 glass-card border-white/20"
                style={{ color: "var(--brand-light)" }}
              >
                <i className="fas fa-scale-balanced text-xs"></i>
                <span>EST. 1999 • ADVOCACY WITH PURPOSE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.16] mb-6 text-white font-serif tracking-tight">
                Unwavering Integrity. <br />
                <span
                  className="italic font-normal"
                  style={{ color: "var(--brand-light)" }}
                >
                  Fearless Representation.
                </span>
              </h1>

              <p className="text-base text-slate-300 font-light leading-relaxed mb-8">
                At the Law Office of Michael Hailu APLC, we don't just manage
                cases—we champion the people behind them. For over 25 years, our
                firm has provided aggressive litigation, compassionate counsel,
                and life-changing results for families, employees, and injury
                victims across California.
              </p>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <Link
                  href="/#contact"
                  className="cta-gradient px-7 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase inline-flex items-center gap-3 shadow-xl hover:scale-[1.03] transition-all"
                >
                  <span>Book Free Consultation</span>
                  <i className="fas fa-arrow-right text-xs"></i>
                </Link>
                <Link
                  href="/#practice"
                  className="btn-outline-glass px-6 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase text-white inline-flex items-center gap-2 hover:bg-white/10 transition-all"
                >
                  <span>Our Practice Areas</span>
                  <i
                    className="fas fa-chevron-right text-[10px]"
                    style={{ color: "var(--brand-light)" }}
                  ></i>
                </Link>
              </div>

              {/* Impact Highlights Bar */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4">
                <div>
                  <div
                    className="text-xl sm:text-2xl font-bold text-white font-serif mb-0.5"
                    style={{ color: "var(--brand-light)" }}
                  >
                    25+ Years
                  </div>
                  <div className="text-[11px] text-slate-400 font-light">
                    Legal Heritage
                  </div>
                </div>
                <div>
                  <div
                    className="text-xl sm:text-2xl font-bold text-white font-serif mb-0.5"
                    style={{ color: "var(--brand-light)" }}
                  >
                    98%
                  </div>
                  <div className="text-[11px] text-slate-400 font-light font-medium">
                    Proven Success
                  </div>
                </div>
                <div>
                  <div
                    className="text-xl sm:text-2xl font-bold text-white font-serif mb-0.5"
                    style={{ color: "var(--brand-light)" }}
                  >
                    $50M+
                  </div>
                  <div className="text-[11px] text-slate-400 font-light">
                    Recovered Funds
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: EXPANDED EYE-CATCHING PICTURE STAGE (7 cols) */}
          <div className="lg:col-span-7 relative">
            <Reveal>
              <div className="relative mx-auto max-w-xl lg:max-w-none">
                {/* Glowing Vibrant Backing Aura */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--brand-main)]/60 via-purple-600/40 to-[var(--brand-light)]/40 rounded-[36px] blur-3xl transform scale-105 pointer-events-none"></div>

                {/* Main Image Frame - Expanded 16:10 Aspect Ratio Stage */}
                <div className="image-glass-frame rounded-[36px] p-3 sm:p-4 relative z-10 overflow-hidden shadow-2xl bg-[#110e16]">
                  <div className="relative w-full aspect-[16/10] rounded-[28px] overflow-hidden bg-black/40 group">
                    <img
                      src="/background.jpeg"
                      alt="Law Office Team Advocacy - Attorney Michael Hailu and Team"
                      className="w-full h-full object-cover object-center rounded-[28px] brightness-105 contrast-105 transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none"></div>

                    <div className="absolute bottom-4 left-5 right-5 z-20 flex items-center justify-between text-xs text-white">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="font-semibold tracking-wider text-xs sm:text-sm text-white">
                          Attorney Michael Hailu & Senior Advocacy Team
                        </span>
                      </div>
                      <span className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[11px] text-[var(--brand-light)] font-semibold tracking-wider uppercase">
                        California APLC
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
