"use client";

import { useRef, useState } from "react";
import { Reveal } from "@/components/ClientHelpers";

export default function HistoryTimeline() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -420 : 420;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const milestones = [
    {
      year: "1999",
      category: "FIRM FOUNDATION",
      title: "Establishing California Trial Roots",
      description:
        "Attorney Michael Hailu founded the Law Office of Michael Hailu APLC with a singular objective: delivering aggressive, high-caliber legal protection to individuals facing catastrophic injury and civil rights abuses.",
      stat: "CA Bar Admission & Federal Courts",
      icon: "fa-scale-balanced",
    },
    {
      year: "2010",
      category: "PRACTICE EXPANSION",
      title: "Multi-Disciplinary Legal Advocacy",
      description:
        "Expanded core legal disciplines to encompass Employment Discrimination, Immigration Defense, and Tenant Rights protection, securing landmark multi-million dollar recoveries for Southern California families.",
      stat: "$10M+ Recovered For Clients",
      icon: "fa-gavel",
    },
    {
      year: "2018",
      category: "LITIGATION MILESTONE",
      title: "Landmark Trial Verdicts & Federal Record",
      description:
        "Achieved historic jury verdicts in complex catastrophic injury claims and employee discrimination suits in California state & federal courts, solidifying a 98% trial success rate.",
      stat: "98% Proven Trial Success Record",
      icon: "fa-award",
    },
    {
      year: "2026",
      category: "25+ YEARS HERITAGE",
      title: "Statewide Premier Boutique Practice",
      description:
        "Celebrating over a quarter-century of fearless courtroom advocacy, over $50M+ total recovered for clients, and trusted by more than 1,000 California families across the state.",
      stat: "$50M+ Total Recovered Funds",
      icon: "fa-shield-halved",
    },
  ];

  return (
    <section className="py-28 relative overflow-hidden bg-[#0d0915]/60 border-t border-white/10">
      {/* Ambient Lighting Background Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[var(--brand-main)]/15 rounded-full blur-[180px] pointer-events-none z-0"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none z-0"></div>

      <div className="wrapper max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-4 glass-card border-white/20"
            style={{ color: "var(--brand-light)" }}
          >
            <i className="fas fa-clock-rotate-left text-xs"></i>
            <span>OUR JOURNEY & HERITAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif leading-tight mb-4">
            Over 25 Years of Standing Up for{" "}
            <span
              className="italic font-normal"
              style={{ color: "var(--brand-light)" }}
            >
              California Families
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
            Explore the key milestones and trial victories that have defined the
            Law Office of Michael Hailu APLC since 1999.
          </p>
        </Reveal>

        {/* Header Controls Bar */}
        <div className="flex items-center justify-between gap-4 mb-6 px-2">
          <span className="flex items-center gap-2 uppercase tracking-wider text-[11px] text-[var(--brand-light)] font-bold">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-light)] animate-ping"></span>
            Interactive Timeline • Drag or Click Arrows
          </span>

          {/* Interactive Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleScroll("left")}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[var(--brand-main)]/50 hover:border-[var(--brand-light)]/50 transition-all shadow-lg active:scale-95"
              aria-label="Scroll left"
            >
              <i className="fas fa-chevron-left text-xs"></i>
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[var(--brand-main)]/50 hover:border-[var(--brand-light)]/50 transition-all shadow-lg active:scale-95"
              aria-label="Scroll right"
            >
              <i className="fas fa-chevron-right text-xs"></i>
            </button>
          </div>
        </div>

        {/* Draggable & Scrollable Sideways Cards Track */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex items-stretch gap-6 sm:gap-8 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory relative z-10 select-none ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{ scrollBehavior: isDragging ? "auto" : "smooth" }}
        >
          {milestones.map((item) => (
            <div
              key={item.year}
              className="snap-start shrink-0 w-[310px] sm:w-[380px] lg:w-[440px] h-full"
            >
              <div className="group relative rounded-[32px] border border-white/20 bg-gradient-to-b from-[#1c152a]/95 via-[#130f1c]/95 to-[#0e0a15]/95 backdrop-blur-xl p-7 sm:p-9 h-full flex flex-col justify-between hover:border-[var(--brand-light)]/60 transition-all duration-500 shadow-2xl hover:shadow-[var(--brand-main)]/25 hover:-translate-y-1.5">
                {/* Glowing Top Ambient Pill */}
                <div className="absolute -top-16 right-8 w-44 h-44 bg-[var(--brand-light)]/10 rounded-full blur-3xl pointer-events-none"></div>

                <div>
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[var(--brand-main)]/30 border border-[var(--brand-light)]/40 flex items-center justify-center text-sm font-bold text-white shadow-xl group-hover:scale-105 group-hover:border-[var(--brand-light)] transition-all font-serif">
                        {item.year}
                      </span>
                      <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-[var(--brand-light)] font-semibold uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white font-serif mb-4 group-hover:text-[var(--brand-light)] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-8">
                    {item.description}
                  </p>
                </div>

                {/* Stat Footer Pill */}
                <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs text-white font-semibold shadow-md">
                    <i
                      className={`fas ${item.icon} text-[var(--brand-light)] text-xs`}
                    ></i>
                    <span>{item.stat}</span>
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-slate-400 group-hover:text-[var(--brand-light)] group-hover:bg-[var(--brand-main)]/30 group-hover:border-[var(--brand-light)]/40 transition-all">
                    <i className="fas fa-arrow-right text-xs"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
