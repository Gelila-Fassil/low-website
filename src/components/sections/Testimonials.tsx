"use client";

import { Reveal } from "../ClientHelpers";
import { InfiniteMovingCards, TestimonialItem } from "../ui/infinite-moving-cards";

const testimonialsRow1: TestimonialItem[] = [
  {
    quote:
      "Attorney Michael Hailu fought tirelessly for my personal injury case after a devastating collision. The settlement exceeded all my expectations!",
    name: "Marcus Vance",
    title: "Personal Injury Client • Los Angeles, CA",
    rating: 5,
    avatar: "/person1.jpg",
    caseType: "Personal Injury",
  },
  {
    quote:
      "I was facing illegal eviction by a predatory landlord. Michael stepped in immediately and protected my home with sharp courtroom strategy.",
    name: "Elena Rodriguez",
    title: "Tenant Rights Client • Pasadena, CA",
    rating: 5,
    avatar: "/person2.jpg",
    caseType: "Tenant Rights",
  },
  {
    quote:
      "The firm guided our family through a complex immigration visa process with utmost care. Always accessible, clear, and reassuring.",
    name: "David Chen",
    title: "Immigration Client • Glendale, CA",
    rating: 5,
    avatar: "/person3.jpg",
    caseType: "Immigration Law",
  },
  {
    quote:
      "When I was wrongfully terminated, Attorney Hailu stood up to the corporate legal team and secured full financial recovery for me.",
    name: "Sophia Martinez",
    title: "Employment Law Client • Santa Monica, CA",
    rating: 5,
    avatar: "/person1.jpg",
    caseType: "Employment Law",
  },
];

const testimonialsRow2: TestimonialItem[] = [
  {
    quote:
      "Direct attorney access made all the difference. Michael spoke with me directly on every call—no junior paralegal hand-offs.",
    name: "James O'Connor",
    title: "Litigation Client • Long Beach, CA",
    rating: 5,
    avatar: "/person2.jpg",
    caseType: "Civil Litigation",
  },
  {
    quote:
      "Attorney Hailu's calm authority in court gave us immense confidence. He recovered lost wages and compensation beyond what we hoped for.",
    name: "Miriam Tadesse",
    title: "Wage Dispute Client • San Ana, CA",
    rating: 5,
    avatar: "/person3.jpg",
    caseType: "Labor Dispute",
  },
  {
    quote:
      "Compassionate, strategic, and fierce when negotiating with insurance companies. I recommend Attorney Hailu to anyone who needs real defense.",
    name: "Robert Keller",
    title: "Auto Accident Client • Beverly Hills, CA",
    rating: 5,
    avatar: "/person1.jpg",
    caseType: "Personal Injury",
  },
  {
    quote:
      "They took our case on a contingency basis with zero upfront fees. They fought for over a year and delivered a life-changing result.",
    name: "Amara Jackson",
    title: "Housing Rights Client • Culver City, CA",
    rating: 5,
    avatar: "/person2.jpg",
    caseType: "Tenant Rights",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 md:py-36 z-10 overflow-hidden bg-[#0d0914]/80 border-y border-white/10">
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--brand-main)]/10 rounded-full blur-[180px] pointer-events-none z-0"></div>
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none z-0"></div>

      <div className="wrapper relative z-10">
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-4 glass-card border-white/20"
            style={{ color: "var(--brand-light)" }}
          >
            <i className="fas fa-quote-right text-xs"></i>
            <span>CLIENT STORIES & TESTIMONIALS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white leading-tight mb-4">
            Trusted by Hundreds of{" "}
            <span className="italic font-normal" style={{ color: "var(--brand-light)" }}>
              California Families
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
            Read real experiences from individuals, families, and workers represented by Attorney Michael Hailu across California.
          </p>
        </Reveal>

        {/* Aceternity UI Infinite Moving Cards - Row 1 (Moving Left) */}
        <div className="mb-6">
          <InfiniteMovingCards
            items={testimonialsRow1}
            direction="left"
            speed="normal"
            pauseOnHover={true}
          />
        </div>

        {/* Aceternity UI Infinite Moving Cards - Row 2 (Moving Right) */}
        <div>
          <InfiniteMovingCards
            items={testimonialsRow2}
            direction="right"
            speed="slow"
            pauseOnHover={true}
          />
        </div>

        {/* Bottom Trust Metrics Bar */}
        <Reveal className="mt-16 pt-8 border-t border-white/10 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 text-lg">
              <i className="fas fa-star"></i>
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white">4.9 / 5.0 Rating</div>
              <div className="text-xs text-slate-400 font-light">Client Satisfaction</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--brand-main)]/30 border border-[var(--brand-light)]/30 flex items-center justify-center text-[var(--brand-light)] text-lg">
              <i className="fas fa-shield-halved"></i>
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white">1,000+ Cases</div>
              <div className="text-xs text-slate-400 font-light">Successfully Resolved</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 text-lg">
              <i className="fas fa-hand-holding-dollar"></i>
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white">Zero Upfront Cost</div>
              <div className="text-xs text-slate-400 font-light">No Fee Unless We Win</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
