"use client";

import { MouseEvent, useRef } from "react";
import { Reveal } from "../ClientHelpers";

export default function PracticeAreas() {
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>, ref: React.RefObject<HTMLDivElement | null>) => {
    if (!ref.current) return;
    const card = ref.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (!ref.current) return;
    ref.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
  };

  const card1 = useRef<HTMLDivElement>(null);
  const card2 = useRef<HTMLDivElement>(null);
  const card3 = useRef<HTMLDivElement>(null);
  const card4 = useRef<HTMLDivElement>(null);

  return (
    <section id="practice" className="relative py-32 z-10">
      <div className="wrapper">
        <div className="text-center mb-20">
          <Reveal>
            <p className="text-sm tracking-widest uppercase mb-4" style={{ color: "var(--brand-light)" }}>
              Our Expertise
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-serif">
              The <span className="italic" style={{ color: "var(--brand-light)" }}>Bento</span> of Law
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Hover over our practice areas to explore our capabilities. We cover every facet of modern corporate and defense law.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          <Reveal className="md:col-span-2 md:row-span-2 h-full">
            <div
              ref={card1}
              onMouseMove={(e) => handleMouseMove(e, card1)}
              onMouseLeave={() => handleMouseLeave(card1)}
              className="bento-card rounded-3xl p-8 flex flex-col justify-between h-full"
            >
              <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Corporate" className="bento-bg-img" />
              <div className="bento-overlay"></div>
              <div className="relative z-10">
                <i className="fas fa-building text-3xl mb-4" style={{ color: "var(--brand-light)" }}></i>
                <h3 className="text-2xl font-bold mb-2 text-white font-serif">Corporate Law & Mergers</h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-md">From billion-dollar mergers to complex joint ventures, we provide the strategic architecture for your corporate growth. Our team handles due diligence, antitrust compliance, and shareholder negotiations with surgical precision.</p>
              </div>
              <div className="relative z-10 flex flex-wrap gap-2 text-xs text-slate-400">
                <span className="px-3 py-1 border border-slate-600 rounded-full bg-black/30">M&A</span>
                <span className="px-3 py-1 border border-slate-600 rounded-full bg-black/30">Venture Capital</span>
                <span className="px-3 py-1 border border-slate-600 rounded-full bg-black/30">Compliance</span>
              </div>
            </div>
          </Reveal>

          <Reveal className="h-full">
            <div
              ref={card2}
              onMouseMove={(e) => handleMouseMove(e, card2)}
              onMouseLeave={() => handleMouseLeave(card2)}
              className="bento-card rounded-3xl p-8 flex flex-col justify-between h-full"
            >
              <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Defense" className="bento-bg-img" />
              <div className="bento-overlay"></div>
              <i className="fas fa-shield-halved text-3xl relative z-10" style={{ color: "var(--brand-light)" }}></i>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2 text-white font-serif">Criminal Defense</h3>
                <p className="text-slate-300 text-sm">Aggressive, discreet defense for high-stakes white-collar and corporate allegations.</p>
              </div>
            </div>
          </Reveal>

          <Reveal className="h-full">
            <div
              ref={card3}
              onMouseMove={(e) => handleMouseMove(e, card3)}
              onMouseLeave={() => handleMouseLeave(card3)}
              className="bento-card rounded-3xl p-8 flex flex-col justify-between h-full"
            >
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="IP" className="bento-bg-img" />
              <div className="bento-overlay"></div>
              <i className="fas fa-lightbulb text-3xl relative z-10" style={{ color: "var(--brand-light)" }}></i>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2 text-white font-serif">Intellectual Property</h3>
                <p className="text-slate-300 text-sm">Safeguarding patents, trademarks, and digital assets in a borderless economy.</p>
              </div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-2 h-full">
            <div
              ref={card4}
              onMouseMove={(e) => handleMouseMove(e, card4)}
              onMouseLeave={() => handleMouseLeave(card4)}
              className="bento-card rounded-3xl p-8 flex flex-col justify-center h-full"
            >
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Arbitration" className="bento-bg-img" />
              <div className="bento-overlay"></div>
              <div className="relative z-10 flex items-center gap-6">
                <i className="fas fa-globe text-4xl" style={{ color: "var(--brand-light)" }}></i>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-white font-serif">International Arbitration</h3>
                  <p className="text-slate-300 text-sm">Cross-border dispute resolution with global reach and local expertise. We represent sovereign states and multinational corps in ICC and LCIA arbitrations.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
