import { Reveal } from "../ClientHelpers";

export default function Team() {
  return (
    <section id="team" className="relative py-32 z-10">
      <div className="wrapper">
        <div className="text-center mb-20">
          <Reveal>
            <p
              className="text-sm tracking-widest uppercase mb-4"
              style={{ color: "var(--brand-light)" }}
            >
              The Architects
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-serif">
              Meet Our{" "}
              <span className="italic" style={{ color: "var(--brand-light)" }}>
                Partners
              </span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Decades of combined experience at the world's top firms, now unified
              under one roof to serve you.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Reveal>
            <div className="team-card relative rounded-2xl overflow-hidden h-96 group">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Elias Hailu"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white font-serif">
                  Elias Hailu
                </h3>
                <p
                  className="text-sm mb-4"
                  style={{ color: "var(--brand-light)" }}
                >
                  Founder & Managing Partner
                </p>
                <p className="text-slate-300 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Specializes in international corporate law and high-stakes M&A.
                  Former federal prosecutor.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="team-card relative rounded-2xl overflow-hidden h-96 group">
              <img
                src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Sarah Jenkins"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white font-serif">
                  Sarah Jenkins
                </h3>
                <p
                  className="text-sm mb-4"
                  style={{ color: "var(--brand-light)" }}
                >
                  Head of Litigation
                </p>
                <p className="text-slate-300 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  A formidable presence in the courtroom. Renowned for complex
                  commercial disputes and IP litigation.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="team-card relative rounded-2xl overflow-hidden h-96 group">
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Marcus Thorne"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white font-serif">
                  Marcus Thorne
                </h3>
                <p
                  className="text-sm mb-4"
                  style={{ color: "var(--brand-light)" }}
                >
                  Head of Tech & IP
                </p>
                <p className="text-slate-300 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Bridging the gap between code and law. Protects digital
                  innovations in blockchain, AI, and biotech.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
