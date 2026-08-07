"use client";

import Link from "next/link";
import { Reveal } from "../ClientHelpers";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export default function PracticeAreas() {
  return (
    <section id="practice" className="relative py-28 md:py-36 z-10 overflow-hidden">
      {/* Ambient Background Orbs */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[var(--brand-main)]/15 rounded-full blur-[160px] pointer-events-none z-0"></div>
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none z-0"></div>

      <div className="wrapper relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-4 glass-card border-white/20"
              style={{ color: "var(--brand-light)" }}
            >
              <i className="fas fa-scale-balanced text-xs"></i>
              <span>Core Practice Areas</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white leading-tight mb-4">
              The{" "}
              <span className="italic font-normal" style={{ color: "var(--brand-light)" }}>
                Bento
              </span>{" "}
              of Law
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
              Explore our most trusted practice areas, each designed to protect your rights and secure the best possible outcome.
            </p>
          </Reveal>
        </div>

        {/* Aceternity UI 3D Card Grid - Expanded Container Width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch max-w-7xl mx-auto">
          
          {/* CARD 1: PERSONAL INJURY */}
          <Reveal className="h-full">
            <CardContainer className="inter-var w-full h-full" containerClassName="w-full h-full">
              <CardBody className="bg-gradient-to-b from-[#1c1628]/90 via-[#130f1c]/90 to-[#0e0b14]/90 relative group/card border-white/20 hover:border-[var(--brand-light)]/60 hover:shadow-2xl hover:shadow-[var(--brand-main)]/20 w-full h-full rounded-[30px] p-6 sm:p-7 border backdrop-blur-xl flex flex-col justify-between">
                <div>
                  {/* Card Title & Icon */}
                  <div className="flex items-center justify-between mb-3">
                    <CardItem
                      translateZ="50"
                      className="text-xl sm:text-2xl font-bold text-white font-serif tracking-wide"
                    >
                      Personal Injury & Accidents
                    </CardItem>
                    <CardItem translateZ="50">
                      <div className="w-10 h-10 rounded-xl bg-[var(--brand-main)]/30 border border-[var(--brand-light)]/40 flex items-center justify-center text-[var(--brand-light)] text-base">
                        <i className="fas fa-car-burst"></i>
                      </div>
                    </CardItem>
                  </div>

                  {/* Card Subtitle */}
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-4 max-w-sm"
                  >
                    Aggressive legal action against insurance companies for auto collisions, catastrophic injuries, slip & fall claims, and wrongful death.
                  </CardItem>

                  {/* 3D Popping Image */}
                  <CardItem translateZ="100" className="w-full my-3">
                    <div className="relative w-full h-52 sm:h-56 rounded-2xl overflow-hidden shadow-xl border border-white/10 group-hover/card:shadow-2xl">
                      <img
                        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80"
                        alt="Personal Injury Advocacy"
                        className="h-full w-full object-cover rounded-2xl group-hover/card:scale-105 transition-transform duration-700 brightness-105 contrast-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                  </CardItem>
                </div>

                {/* Bottom Action Bar */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-2">
                  <CardItem
                    translateZ="80"
                    className="px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[11px] font-semibold uppercase tracking-wider"
                  >
                    No Win No Fee Guarantee
                  </CardItem>
                  <CardItem
                    translateZ="100"
                    as={Link}
                    href="/#contact"
                    className="cta-gradient px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white inline-flex items-center gap-2 shadow-lg"
                  >
                    <span>Free Case Review</span>
                    <i className="fas fa-arrow-right text-[10px]"></i>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </Reveal>

          {/* CARD 2: EMPLOYMENT LAW */}
          <Reveal className="h-full">
            <CardContainer className="inter-var w-full h-full" containerClassName="w-full h-full">
              <CardBody className="bg-gradient-to-b from-[#1c1628]/90 via-[#130f1c]/90 to-[#0e0b14]/90 relative group/card border-white/20 hover:border-[var(--brand-light)]/60 hover:shadow-2xl hover:shadow-[var(--brand-main)]/20 w-full h-full rounded-[30px] p-6 sm:p-7 border backdrop-blur-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <CardItem
                      translateZ="50"
                      className="text-xl sm:text-2xl font-bold text-white font-serif tracking-wide"
                    >
                      Employment & Worker Rights
                    </CardItem>
                    <CardItem translateZ="50">
                      <div className="w-10 h-10 rounded-xl bg-[var(--brand-main)]/30 border border-[var(--brand-light)]/40 flex items-center justify-center text-[var(--brand-light)] text-base">
                        <i className="fas fa-briefcase"></i>
                      </div>
                    </CardItem>
                  </div>

                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-4 max-w-sm"
                  >
                    Defending California workers against wrongful termination, retaliation, discrimination, harassment, and unpaid wage claims.
                  </CardItem>

                  <CardItem translateZ="100" className="w-full my-3">
                    <div className="relative w-full h-52 sm:h-56 rounded-2xl overflow-hidden shadow-xl border border-white/10 group-hover/card:shadow-2xl">
                      <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                        alt="Workplace Rights"
                        className="h-full w-full object-cover rounded-2xl group-hover/card:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                  </CardItem>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-2">
                  <CardItem
                    translateZ="80"
                    className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-[11px] text-[var(--brand-light)] font-semibold tracking-wider uppercase"
                  >
                    Wage & Hour Advocacy
                  </CardItem>
                  <CardItem
                    translateZ="100"
                    as={Link}
                    href="/#contact"
                    className="btn-outline-glass px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-white inline-flex items-center gap-2 hover:bg-white/10"
                  >
                    <span>Learn More</span>
                    <i className="fas fa-chevron-right text-[10px]" style={{ color: "var(--brand-light)" }}></i>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </Reveal>

          {/* CARD 3: IMMIGRATION & CITIZENSHIP */}
          <Reveal className="h-full">
            <CardContainer className="inter-var w-full h-full" containerClassName="w-full h-full">
              <CardBody className="bg-gradient-to-b from-[#1c1628]/90 via-[#130f1c]/90 to-[#0e0b14]/90 relative group/card border-white/20 hover:border-[var(--brand-light)]/60 hover:shadow-2xl hover:shadow-[var(--brand-main)]/20 w-full h-full rounded-[30px] p-6 sm:p-7 border backdrop-blur-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <CardItem
                      translateZ="50"
                      className="text-xl sm:text-2xl font-bold text-white font-serif tracking-wide"
                    >
                      Immigration & Naturalization
                    </CardItem>
                    <CardItem translateZ="50">
                      <div className="w-10 h-10 rounded-xl bg-[var(--brand-main)]/30 border border-[var(--brand-light)]/40 flex items-center justify-center text-[var(--brand-light)] text-base">
                        <i className="fas fa-passport"></i>
                      </div>
                    </CardItem>
                  </div>

                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-4 max-w-sm"
                  >
                    Guiding families through green cards, employment visas, naturalization, asylum, and federal deportation defense.
                  </CardItem>

                  <CardItem translateZ="100" className="w-full my-3">
                    <div className="relative w-full h-52 sm:h-56 rounded-2xl overflow-hidden shadow-xl border border-white/10 group-hover/card:shadow-2xl">
                      <img
                        src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80"
                        alt="Immigration & Visas"
                        className="h-full w-full object-cover rounded-2xl group-hover/card:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                  </CardItem>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-2">
                  <CardItem
                    translateZ="80"
                    className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-[11px] text-[var(--brand-light)] font-semibold tracking-wider uppercase"
                  >
                    Deportation Defense
                  </CardItem>
                  <CardItem
                    translateZ="100"
                    as={Link}
                    href="/#contact"
                    className="btn-outline-glass px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-white inline-flex items-center gap-2 hover:bg-white/10"
                  >
                    <span>Learn More</span>
                    <i className="fas fa-chevron-right text-[10px]" style={{ color: "var(--brand-light)" }}></i>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </Reveal>

          {/* CARD 4: TENANT RIGHTS & HOUSING JUSTICE */}
          <Reveal className="h-full">
            <CardContainer className="inter-var w-full h-full" containerClassName="w-full h-full">
              <CardBody className="bg-gradient-to-b from-[#1c1628]/90 via-[#130f1c]/90 to-[#0e0b14]/90 relative group/card border-white/20 hover:border-[var(--brand-light)]/60 hover:shadow-2xl hover:shadow-[var(--brand-main)]/20 w-full h-full rounded-[30px] p-6 sm:p-7 border backdrop-blur-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <CardItem
                      translateZ="50"
                      className="text-xl sm:text-2xl font-bold text-white font-serif tracking-wide"
                    >
                      Tenant Rights & Housing Justice
                    </CardItem>
                    <CardItem translateZ="50">
                      <div className="w-10 h-10 rounded-xl bg-[var(--brand-main)]/30 border border-[var(--brand-light)]/40 flex items-center justify-center text-[var(--brand-light)] text-base">
                        <i className="fas fa-house-user"></i>
                      </div>
                    </CardItem>
                  </div>

                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-4 max-w-sm"
                  >
                    Defending California renters against illegal evictions, toxic mold, unhabitable conditions, and corporate landlord harassment.
                  </CardItem>

                  <CardItem translateZ="100" className="w-full my-3">
                    <div className="relative w-full h-52 sm:h-56 rounded-2xl overflow-hidden shadow-xl border border-white/10 group-hover/card:shadow-2xl">
                      <img
                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80"
                        alt="Housing Justice"
                        className="h-full w-full object-cover rounded-2xl group-hover/card:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                  </CardItem>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-2">
                  <CardItem
                    translateZ="80"
                    className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-[11px] text-[var(--brand-light)] font-semibold tracking-wider uppercase"
                  >
                    Eviction & Mold Claims
                  </CardItem>
                  <CardItem
                    translateZ="100"
                    as={Link}
                    href="/#contact"
                    className="btn-outline-glass px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-white inline-flex items-center gap-2 hover:bg-white/10"
                  >
                    <span>Learn More</span>
                    <i className="fas fa-chevron-right text-[10px]" style={{ color: "var(--brand-light)" }}></i>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
