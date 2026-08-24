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
    <section className="py-28 relative overflow-hidden bg-[var(--bg-secondary)] border-t border-[var(--navy-border)]">
      {/* Ambient Lighting Background Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[var(--gold-accent)]/5 rounded-full blur-[180px] pointer-events-none z-0"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none z-0"></div>

      <div className="wrapper max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-4 bg-white/50 border border-[var(--navy-border)] shadow-sm text-[var(--navy-primary)]"
          >
            <i className="fas fa-clock-rotate-left text-xs text-[var(--gold-accent)]"></i>
            <span>OUR JOURNEY & HERITAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--navy-primary)] font-serif leading-tight mb-4">
            Over 25 Years of Standing Up for{" "}
            <span
              className="italic font-normal text-[var(--gold-accent)]"
            >
              California Families
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto">
            Explore the key milestones and trial victories that have defined the
            Law Office of Michael Hailu APLC since 1999.
          </p>
        </Reveal>

        {/* Header Controls Bar */}
        <div className="flex items-center justify-between gap-4 mb-6 px-2">
          <span className="flex items-center gap-2 uppercase tracking-wider text-[11px] text-[var(--navy-primary)] font-bold">
            <span className="w-2 h-2 rounded-full bg-[var(--gold-accent)] animate-ping"></span>
            Interactive Timeline • Drag or Click Arrows
          </span>

          {/* Interactive Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleScroll("left")}
              className="w-10 h-10 rounded-full bg-white border border-[var(--navy-border)] flex items-center justify-center text-slate-500 hover:text-[var(--navy-primary)] hover:border-[var(--navy-primary)] transition-all shadow-sm hover:shadow-md active:scale-95"
              aria-label="Scroll left"
            >
              <i className="fas fa-chevron-left text-xs"></i>
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="w-10 h-10 rounded-full bg-white border border-[var(--navy-border)] flex items-center justify-center text-slate-500 hover:text-[var(--navy-primary)] hover:border-[var(--navy-primary)] transition-all shadow-sm hover:shadow-md active:scale-95"
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
              <div className="group relative rounded-[32px] border border-[var(--navy-border)] bg-white p-7 sm:p-9 h-full flex flex-col justify-between hover:border-[var(--gold-accent)] transition-all duration-500 shadow-md hover:shadow-xl hover:-translate-y-1.5">
                {/* Glowing Top Ambient Pill */}
                <div className="absolute -top-16 right-8 w-44 h-44 bg-[var(--gold-accent)]/5 rounded-full blur-3xl pointer-events-none"></div>

                <div>
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[var(--navy-primary)]/5 border border-[var(--navy-border)] flex items-center justify-center text-sm font-bold text-[var(--navy-primary)] shadow-sm group-hover:scale-105 group-hover:border-[var(--gold-accent)] group-hover:text-[var(--gold-accent)] transition-all font-serif">
                        {item.year}
                      </span>
                      <span className="px-3 py-1.5 rounded-full bg-slate-100 border border-[var(--navy-border)] text-[11px] text-[var(--gold-accent)] font-semibold uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-[var(--navy-primary)] font-serif mb-4 group-hover:text-[var(--gold-accent)] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed mb-8">
                    {item.description}
                  </p>
                </div>

                {/* Stat Footer Pill */}
                <div className="pt-5 border-t border-[var(--navy-border)] flex items-center justify-between">
                  <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100 border border-[var(--navy-border)] text-xs text-[var(--navy-primary)] font-semibold shadow-sm">
                    <i
                      className={`fas ${item.icon} text-[var(--gold-accent)] text-xs`}
                    ></i>
                    <span>{item.stat}</span>
                  </span>
                  <span className="w-8 h-8 rounded-full bg-slate-100 border border-[var(--navy-border)] flex items-center justify-center text-slate-500 group-hover:text-white group-hover:bg-[var(--navy-primary)] group-hover:border-[var(--navy-primary)] transition-all">
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
