import { Reveal } from "../ClientHelpers";

export default function Method() {
  return (
    <section id="method" className="relative py-32 z-10">
      <div className="wrapper grid md:grid-cols-2 gap-16">
        <div className="md:sticky md:top-32 self-start">
          <Reveal>
            <p
              className="text-sm tracking-widest uppercase mb-4"
              style={{ color: "var(--brand-light)" }}
            >
              The Process
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              The Hailu{" "}
              <span className="italic" style={{ color: "var(--brand-light)" }}>
                Method
              </span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-10">
              Our proprietary 4-step process ensures that no detail is overlooked.
              We combine data-driven insights with decades of courtroom experience
              to build an impenetrable case strategy tailored to your unique
              situation.
            </p>
            <div className="image-glass-frame rounded-2xl p-2 inline-block">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Legal Strategy"
                className="rounded-xl w-full h-64 object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="timeline-container space-y-12">
          <Reveal>
            <div className="timeline-item relative">
              <div className="timeline-dot"></div>
              <h3 className="text-xl font-bold mb-2 text-white font-serif">
                01. Deep Dive Discovery
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We utilize AI-assisted document review to uncover every fact. Our
                team conducts a forensic analysis of your case, leaving no stone
                unturned to ensure a bulletproof foundation.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="timeline-item relative">
              <div className="timeline-dot"></div>
              <h3 className="text-xl font-bold mb-2 text-white font-serif">
                02. Strategic Architecture
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our senior partners draft a multi-layered strategy. We run
                thousands of simulations to anticipate opposing counsel's moves,
                preparing counter-arguments 3 steps ahead.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="timeline-item relative">
              <div className="timeline-dot"></div>
              <h3 className="text-xl font-bold mb-2 text-white font-serif">
                03. Aggressive Execution
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Whether in the boardroom or the courtroom, we execute with
                precision and relentless advocacy. We command the room and control
                the narrative.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="timeline-item relative">
              <div className="timeline-dot"></div>
              <h3 className="text-xl font-bold mb-2 text-white font-serif">
                04. Future-Proofing
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We don't just win cases; we set precedents. We structure
                settlements and rulings to protect your interests for decades to
                come, preventing future liabilities.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
