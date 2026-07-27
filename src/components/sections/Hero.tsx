import { Reveal } from "../ClientHelpers";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-110 contrast-100"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-10"></div>
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/70 to-transparent z-10"></div>

      <div className="wrapper z-20 relative flex items-center h-full py-16">
        <div className="w-full max-w-[550px] text-left">
          <Reveal>
            <div className="glass-card p-6 md:p-8 rounded-[30px] border border-white/10 bg-[#4a4258]/30 backdrop-blur-xl shadow-2xl">
              <div
                className="text-xs mb-4 font-bold tracking-[0.2em] uppercase"
                style={{ color: "var(--brand-light)" }}
              >
                Global Corporate & Litigation
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-white font-serif">
                Transform Legal Challenges <br />
                Into{" "}
                <span
                  className="italic font-normal"
                  style={{ color: "var(--brand-light)" }}
                >
                  Triumphs
                </span>
              </h1>
              <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed mb-8">
                Navigating modern law requires foresight, precision, and aggressive strategy. We protect your assets, reputation, and future with AI-driven insights.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center bg-[var(--brand-main)]/30 text-[var(--brand-light)]">
                    <i className="fas fa-award text-lg"></i>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white mb-0.5">98% Success Rate</div>
                    <div className="text-xs text-slate-400">Proven Track Record</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center bg-[var(--brand-main)]/30 text-[var(--brand-light)]">
                    <i className="fas fa-shield-halved text-lg"></i>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white mb-0.5">Certified Excellence</div>
                    <div className="text-xs text-slate-400">Industry Standards</div>
                  </div>
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
