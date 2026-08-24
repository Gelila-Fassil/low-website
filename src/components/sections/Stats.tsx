"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "../ClientHelpers";

const Counter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const speed = 200;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let current = 0;
            const inc = target / speed;
            const updateCount = () => {
              if (current < target) {
                current += inc;
                setCount(Math.ceil(current));
                setTimeout(updateCount, 10);
              } else {
                setCount(target);
              }
            };
            updateCount();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [target]);

  return <span ref={ref}>{count}</span>;
};

export default function Stats() {
  return (
    <section id="stats" className="relative py-24 border-y border-slate-800 z-10 bg-black/10">
      <div className="wrapper grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <Reveal>
          <div className="text-4xl md:text-6xl font-bold font-serif" style={{ color: "var(--brand-light)" }}>
            <Counter target={98} />
          </div>
          <div className="text-slate-400 mt-2 text-sm tracking-wide uppercase">
            % Success Rate
          </div>
        </Reveal>
        <Reveal>
          <div className="text-4xl md:text-6xl font-bold font-serif" style={{ color: "var(--brand-light)" }}>
            <Counter target={25} />
          </div>
          <div className="text-slate-400 mt-2 text-sm tracking-wide uppercase">
            Years Experience
          </div>
        </Reveal>
        <Reveal>
          <div className="text-4xl md:text-6xl font-bold font-serif" style={{ color: "var(--brand-light)" }}>
            <Counter target={800} />
          </div>
          <div className="text-slate-400 mt-2 text-sm tracking-wide uppercase">
            Cases Won
          </div>
        </Reveal>
        <Reveal>
          <div className="text-4xl md:text-6xl font-bold font-serif" style={{ color: "var(--brand-light)" }}>
            <Counter target={40} />
          </div>
          <div className="text-slate-400 mt-2 text-sm tracking-wide uppercase">
            Legal Experts
          </div>
        </Reveal>
      </div>
    </section>
  );
}
