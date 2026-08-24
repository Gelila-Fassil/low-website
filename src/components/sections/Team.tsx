"use client";

import Link from "next/link";
import { Reveal } from "../ClientHelpers";

export default function Team() {
  return (
    <section id="team" className="relative py-28 md:py-36 z-10 overflow-hidden bg-[#0a0710]/60">
      {/* Background Lighting Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--brand-main)]/15 rounded-full blur-[160px] pointer-events-none z-0"></div>

      <div className="wrapper relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-4 glass-card border-white/20"
              style={{ color: "var(--brand-light)" }}
            >
              <i className="fas fa-user-shield text-xs"></i>
              <span>Attorney Profile & Leadership</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white leading-tight mb-4">
              Meet Your{" "}
              <span className="italic font-normal" style={{ color: "var(--brand-light)" }}>
                Principal Advocate
              </span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
              Attorney Michael Hailu brings over 25 years of relentless courtroom advocacy, compassionate counsel, and proven settlement strategy.
            </p>
          </Reveal>
        </div>

        {/* Attorney Profile Feature Card */}
        <Reveal>
          <div className="glass-card rounded-[36px] p-6 sm:p-10 border border-white/20 bg-[#140f21]/80 backdrop-blur-2xl shadow-2xl max-w-5xl mx-auto relative overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left: Attorney Portrait */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-md rounded-[28px] overflow-hidden border border-white/20 shadow-2xl group">
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-black">
                    <img
                      src="/ceo1.jpg"
                      alt="Attorney Michael Hailu - Founder & Principal Legal Counsel"
                      className="w-full h-full object-cover object-top brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#100d17] via-transparent to-transparent pointer-events-none"></div>
                  </div>
                  <div className="absolute bottom-4 left-5 right-5 z-10 flex items-center justify-between text-xs text-white">
                    <div>
                      <div className="font-bold text-sm text-white font-serif">Michael Hailu, Esq.</div>
                      <div className="text-[11px] text-[var(--brand-light)] font-light">Founder & Lead Trial Attorney</div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] text-slate-300">
                      CA Bar #1999
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Bio & Key Accolades */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
                  <i className="fas fa-award text-xs"></i>
                  <span>25+ Years Trial Experience</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif mb-4 leading-snug">
                  Attorney Michael Hailu, Esq.
                </h3>

                <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                  Admitted to the California State Bar, Michael Hailu has dedicated his legal career to championing individuals against powerful corporate entities, insurance giants, and predatory housing practices. Every client works directly with Attorney Hailu from intake through final verdict or settlement.
                </p>

                {/* Key Qualifications */}
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <i className="fas fa-certificate text-[var(--brand-light)] text-base"></i>
                    <div className="text-xs text-slate-300">
                      <strong className="text-white block font-medium">State Bar of California</strong>
                      Licensed & Active Counsel
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <i className="fas fa-gavel text-[var(--brand-light)] text-base"></i>
                    <div className="text-xs text-slate-300">
                      <strong className="text-white block font-medium">Federal & State Trial</strong>
                      Courtroom Litigation
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <i className="fas fa-handshake-angle text-[var(--brand-light)] text-base"></i>
                    <div className="text-xs text-slate-300">
                      <strong className="text-white block font-medium">Direct Access</strong>
                      No Paralegal Hand-offs
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <i className="fas fa-shield-cat text-[var(--brand-light)] text-base"></i>
                    <div className="text-xs text-slate-300">
                      <strong className="text-white block font-medium">Contingency Guarantee</strong>
                      No Fees Unless We Win
                    </div>
                  </div>
                </div>

                {/* Quote & CTA */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs italic text-slate-400 max-w-sm">
                    &ldquo;Our promise is simple: relentless defense in the courtroom, compassionate guidance everywhere else.&rdquo;
                  </p>
                  <Link
                    href="/#contact"
                    className="cta-gradient px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white inline-flex items-center gap-2 shadow-lg hover:scale-105 transition-all"
                  >
                    <span>Consult Attorney Hailu</span>
                    <i className="fas fa-arrow-right text-[10px]"></i>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

