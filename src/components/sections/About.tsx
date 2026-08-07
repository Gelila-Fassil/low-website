"use client";

import { MouseEvent, useRef } from "react";
import Link from "next/link";
import { Reveal } from "../ClientHelpers";

export default function About() {
  const stageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (centerY - y) / 18;
    const rotateY = (x - centerX) / 18;
    stageRef.current.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!stageRef.current) return;
    stageRef.current.style.transform =
      "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <section id="about" className="relative py-28 md:py-36 z-10 overflow-hidden">
      {/* Background Watermark Typography */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14vw] lg:text-[11vw] font-black uppercase font-serif tracking-tighter text-transparent select-none pointer-events-none z-0 whitespace-nowrap opacity-25"
        style={{ WebkitTextStroke: "1.5px rgba(179, 167, 204, 0.15)" }}
      >
        ADVOCACY & JUSTICE
      </div>

      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-[var(--brand-main)]/20 rounded-full blur-[150px] pointer-events-none z-0"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[130px] pointer-events-none z-0"></div>

      <div className="wrapper grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Column: Single High-Quality Team Picture Stage */}
        <div className="lg:col-span-6 relative">
          <Reveal className="w-full">
            <div
              ref={stageRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative mx-auto max-w-xl lg:max-w-none p-2 transition-transform duration-200 ease-out"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Vibrant Backing Ambient Aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--brand-main)]/60 via-purple-600/40 to-[var(--brand-light)]/40 rounded-[36px] blur-3xl transform scale-105 pointer-events-none"></div>

              {/* Single High-Quality Image Glass Frame - Taller Aspect Ratio */}
              <div className="image-glass-frame rounded-[36px] p-3 sm:p-4 relative z-10 overflow-hidden shadow-2xl bg-[#110e16] border border-white/20">
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-[28px] overflow-hidden bg-black/40 group">
                  <img
                    src="/tingey-injury-law-firm-DZpc4UY8ZtY-unsplash.jpg"
                    alt="Law Office of Michael Hailu APLC - Trial Preparation & Legal Advocacy"
                    className="w-full h-full object-cover object-center rounded-[28px] brightness-105 contrast-105 transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                  
                  {/* Bottom Image Caption Overlay */}
                  <div className="absolute bottom-4 left-5 right-5 z-20 flex items-center justify-between text-xs text-white">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="font-semibold tracking-wider text-xs sm:text-sm text-white font-serif">
                        Trial Preparation & Client Consultation Suite
                      </span>
                    </div>
                    <span className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[11px] text-[var(--brand-light)] font-semibold tracking-wider uppercase">
                      California APLC
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Holographic Badge 1 - Top Experience */}
              <div 
                className="absolute -top-4 -left-3 z-30 glass-card px-4 py-2.5 rounded-xl border border-white/20 flex items-center gap-3 shadow-2xl hidden sm:flex"
                style={{ transform: "translateZ(40px)" }}
              >
                <div className="w-8 h-8 rounded-lg bg-[var(--brand-main)]/40 flex items-center justify-center text-[var(--brand-light)]">
                  <i className="fas fa-shield-halved text-xs"></i>
                </div>
                <div>
                  <div className="text-xs font-bold text-white">25+ Years Heritage</div>
                  <div className="text-[10px] text-slate-400">California Trial Counsel</div>
                </div>
              </div>

              {/* Floating Holographic Badge 2 - Bottom Recovery Metric */}
              <div 
                className="absolute -bottom-4 -right-3 z-30 glass-card px-5 py-3 rounded-2xl border border-emerald-500/30 flex items-center gap-3 shadow-2xl"
                style={{ transform: "translateZ(50px)" }}
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 text-sm">
                  <i className="fas fa-hand-holding-dollar"></i>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">$50M+ Recovered</div>
                  <div className="text-[10px] text-emerald-300">Proven Case Outcomes</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: High-Impact Content & Features */}
        <div className="lg:col-span-6">
          <Reveal>
            <div
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase mb-6 glass-card border-white/20 shadow-md"
              style={{ color: "var(--brand-light)" }}
            >
              <span className="w-2 h-2 rounded-full bg-[var(--brand-light)] animate-ping"></span>
              <span>About The Firm</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-[1.18] text-white font-serif tracking-tight">
              Fearless Litigation. <br />
              <span className="bg-gradient-to-r from-purple-200 via-[var(--brand-light)] to-indigo-200 bg-clip-text text-transparent italic font-normal">
                Empathetic Client Care.
              </span>
            </h2>

            <p className="text-slate-300 leading-relaxed mb-8 font-light text-base">
              At the Law Office of Michael Hailu APLC, we believe legal victory requires both relentless advocacy in the courtroom and genuine empathy for your individual journey. For over two decades, we have defended victims of injuries, illegal employer practices, and housing injustices.
            </p>

            {/* Interactive Bento Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="group p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-[var(--brand-light)]/50 hover:bg-white/[0.08] transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[var(--brand-main)]/20 border border-[var(--brand-light)]/30 flex items-center justify-center mb-3 text-[var(--brand-light)] group-hover:scale-110 transition-transform">
                  <i className="fas fa-heart text-base"></i>
                </div>
                <h3 className="text-base font-bold mb-1 text-white font-serif">
                  Empathy-Driven Counsel
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed font-light">
                  We listen carefully to your goals and tailor our legal strategy around your personal wellbeing.
                </p>
              </div>

              <div className="group p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-[var(--brand-light)]/50 hover:bg-white/[0.08] transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[var(--brand-main)]/20 border border-[var(--brand-light)]/30 flex items-center justify-center mb-3 text-[var(--brand-light)] group-hover:scale-110 transition-transform">
                  <i className="fas fa-user-shield text-base"></i>
                </div>
                <h3 className="text-base font-bold mb-1 text-white font-serif">
                  Direct Attorney Access
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed font-light">
                  No junior case hand-offs. You communicate directly with Senior Attorney Michael Hailu.
                </p>
              </div>

              <div className="group p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-[var(--brand-light)]/50 hover:bg-white/[0.08] transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[var(--brand-main)]/20 border border-[var(--brand-light)]/30 flex items-center justify-center mb-3 text-[var(--brand-light)] group-hover:scale-110 transition-transform">
                  <i className="fas fa-gavel text-base"></i>
                </div>
                <h3 className="text-base font-bold mb-1 text-white font-serif">
                  Trial-Ready Preparation
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed font-light">
                  We prepare every case with trial-ready precision to maximize leverage during negotiations.
                </p>
              </div>

              <div className="group p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-[var(--brand-light)]/50 hover:bg-white/[0.08] transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[var(--brand-main)]/20 border border-[var(--brand-light)]/30 flex items-center justify-center mb-3 text-[var(--brand-light)] group-hover:scale-110 transition-transform">
                  <i className="fas fa-hand-holding-dollar text-base"></i>
                </div>
                <h3 className="text-base font-bold mb-1 text-white font-serif">
                  Zero Fee Contingency
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed font-light">
                  For injury claims, you pay no upfront legal costs or fees unless we recover money for you.
                </p>
              </div>
            </div>

            {/* Impact Highlights Bar */}
            <div className="pt-6 pb-8 border-t border-white/10 grid grid-cols-3 gap-4 mb-8">
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-serif text-white mb-0.5" style={{ color: "var(--brand-light)" }}>
                  25+ Yrs
                </div>
                <div className="text-[11px] text-slate-400 font-light">Legal Excellence</div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-bold font-serif text-white mb-0.5" style={{ color: "var(--brand-light)" }}>
                  98%
                </div>
                <div className="text-[11px] text-slate-400 font-light">Success Rate</div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-bold font-serif text-white mb-0.5" style={{ color: "var(--brand-light)" }}>
                  $50M+
                </div>
                <div className="text-[11px] text-slate-400 font-light">Recovered Funds</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/#contact"
                className="cta-gradient px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase text-white inline-flex items-center gap-3 shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all"
              >
                <span>Schedule Your Free Consultation</span>
                <i className="fas fa-arrow-right text-xs"></i>
              </Link>
              <Link
                href="/about"
                className="btn-outline-glass px-7 py-4 rounded-full text-xs font-semibold tracking-widest uppercase text-white inline-flex items-center gap-2"
              >
                <span>Learn Our Full Story</span>
                <i className="fas fa-chevron-right text-[10px]" style={{ color: "var(--brand-light)" }}></i>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


