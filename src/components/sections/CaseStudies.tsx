import { Reveal } from "../ClientHelpers";

export default function CaseStudies() {
  const testimonials = [
    {
      quote:
        "I felt heard, respected, and supported from the first call. The team explained every step and stood by me when it mattered most.",
      name: "Maria R.",
      role: "Personal Injury Client",
    },
    {
      quote:
        "They handled my workplace issue with professionalism and care. I appreciated how clearly they communicated my options.",
      name: "Daniel T.",
      role: "Employment Law Client",
    },
    {
      quote:
        "The firm made a stressful housing situation manageable. Their guidance gave me confidence and a path forward.",
      name: "Lina P.",
      role: "Tenant Rights Client",
    },
  ];

  return (
    <section id="cases" className="relative py-32 z-10 bg-black/20">
      <div className="wrapper">
        <div className="text-center mb-20">
          <Reveal>
            <p
              className="text-sm tracking-widest uppercase mb-4"
              style={{ color: "var(--brand-light)" }}
            >
              Client Feedback
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-serif">
              What Clients Say About
              <span className="italic" style={{ color: "var(--brand-light)" }}>
                {" "}
                Our Firm
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <Reveal key={index}>
              <div className="glass-card rounded-2xl p-8 h-full">
                <div
                  className="text-4xl mb-4"
                  style={{ color: "var(--brand-light)" }}
                >
                  “
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {item.quote}
                </p>
                <div className="border-t border-white/10 pt-4">
                  <h3 className="text-lg font-bold text-white font-serif">
                    {item.name}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "var(--brand-light)" }}
                  >
                    {item.role}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
