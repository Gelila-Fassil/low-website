import { Reveal } from "../ClientHelpers";

export default function CaseStudies() {
  return (
    <section id="cases" className="relative py-32 z-10 bg-black/20">
      <div className="wrapper">
        <div className="text-center mb-20">
          <Reveal>
            <p
              className="text-sm tracking-widest uppercase mb-4"
              style={{ color: "var(--brand-light)" }}
            >
              Proven Results
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-serif">
              Recent{" "}
              <span className="italic" style={{ color: "var(--brand-light)" }}>
                Triumphs
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Reveal>
            <div className="glass-card rounded-2xl overflow-hidden group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Tech IP"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div
                  className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs uppercase tracking-wider"
                  style={{ background: "var(--brand-main)", color: "white" }}
                >
                  Intellectual Property
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white font-serif">
                  $120M Patent Infringement Defense
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  Defended a major tech startup against a giant competitor's
                  patent claims. Achieved a complete summary judgment victory,
                  saving the client millions in potential damages.
                </p>
                <a
                  href="#"
                  className="text-sm flex items-center gap-2"
                  style={{ color: "var(--brand-light)" }}
                >
                  Read Case Study <i className="fas fa-arrow-right text-xs"></i>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="glass-card rounded-2xl overflow-hidden group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="M&A"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div
                  className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs uppercase tracking-wider"
                  style={{ background: "var(--brand-main)", color: "white" }}
                >
                  Corporate Law
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white font-serif">
                  Cross-Border Tech Acquisition
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  Represented a leading AI firm in a complex $450M cross-border
                  acquisition. Navigated international antitrust laws and secured
                  approvals in 4 jurisdictions in record time.
                </p>
                <a
                  href="#"
                  className="text-sm flex items-center gap-2"
                  style={{ color: "var(--brand-light)" }}
                >
                  Read Case Study <i className="fas fa-arrow-right text-xs"></i>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="glass-card rounded-2xl overflow-hidden group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="White Collar"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div
                  className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs uppercase tracking-wider"
                  style={{ background: "var(--brand-main)", color: "white" }}
                >
                  Criminal Defense
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white font-serif">
                  SEC White-Collar Investigation
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  Defended a Fortune 500 CFO against allegations of securities
                  fraud. Through meticulous forensic accounting, we proved
                  compliance and had all charges dropped pre-indictment.
                </p>
                <a
                  href="#"
                  className="text-sm flex items-center gap-2"
                  style={{ color: "var(--brand-light)" }}
                >
                  Read Case Study <i className="fas fa-arrow-right text-xs"></i>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
