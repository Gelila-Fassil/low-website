import { Reveal } from "../ClientHelpers";

export default function About() {
  return (
    <section id="about" className="relative py-32 z-10">
      <div className="wrapper grid md:grid-cols-2 gap-16 items-center">
        <Reveal className="relative h-[500px]">
          <div className="absolute top-0 left-0 w-2/3 h-2/3 image-glass-frame rounded-2xl p-2 overflow-hidden">
            <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Corporate Handshake"
                className="rounded-xl w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-2/3 h-2/3 image-glass-frame rounded-2xl p-2 overflow-hidden z-10">
              <img
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Law Library"
                className="rounded-xl w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 glass-card p-4 rounded-xl flex items-center gap-3 z-20">
              <i
                className="fas fa-award text-2xl"
                style={{ color: "var(--brand-light)" }}
              ></i>
              <div>
                <div className="text-sm font-bold text-white">25+ Years</div>
                <div className="text-xs text-slate-400">Proven Heritage</div>
              </div>
            </div>
          </Reveal>
        <div>
          <Reveal>
            <p
              className="text-sm tracking-widest uppercase mb-4"
              style={{ color: "var(--brand-light)" }}
            >
              Why Choose Hailu
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-serif">
              Beyond Traditional Law. <br />
              <span className="italic" style={{ color: "var(--brand-light)" }}>
                A Strategic Advantage.
              </span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              At Hailu Lawyers, we recognize that the legal landscape is rapidly
              evolving. We don't just react to legal issues; we anticipate them. By
              integrating advanced legal technology, predictive analytics, and a deep
              understanding of global corporate strategy, we deliver outcomes that
              keep our clients ahead of the curve.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full glass-card flex items-center justify-center">
                  <i
                    className="fas fa-brain text-sm"
                    style={{ color: "var(--brand-light)" }}
                  ></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-white font-serif">
                    AI-Assisted Strategy
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Leveraging millions of data points to build bulletproof arguments
                    and predict opposing counsel moves.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full glass-card flex items-center justify-center">
                  <i
                    className="fas fa-user-tie text-sm"
                    style={{ color: "var(--brand-light)" }}
                  ></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-white font-serif">
                    Senior Partner Access
                  </h3>
                  <p className="text-slate-400 text-sm">
                    No junior associates learning on your dime. You work directly
                    with the experts who will try your case.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full glass-card flex items-center justify-center">
                  <i
                    className="fas fa-lock text-sm"
                    style={{ color: "var(--brand-light)" }}
                  ></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-white font-serif">
                    Absolute Discretion
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Quantum-encrypted communications and strict NDAs ensure your
                    sensitive matters remain entirely confidential.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
