import { Reveal } from "../ClientHelpers";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 z-10 bg-black/20">
      <div className="wrapper max-w-4xl">
        <Reveal>
          <div className="glass-card rounded-3xl p-10 md:p-16 text-center">
            <i
              className="fas fa-paper-plane text-4xl mb-6"
              style={{ color: "var(--brand-light)" }}
            ></i>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              Secure Your{" "}
              <span className="italic" style={{ color: "var(--brand-light)" }}>
                Future
              </span>
            </h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto">
              Enter your details below. Our rapid response team will reach out
              within 24 hours for a strictly confidential consultation. Don't face
              tomorrow's legal battles with yesterday's strategy.
            </p>

            <form className="grid md:grid-cols-2 gap-4 text-left">
              <input
                type="text"
                placeholder="Full Name"
                className="futuristic-input md:col-span-1 px-5 py-4 rounded-xl text-white placeholder-slate-500 text-sm"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="futuristic-input md:col-span-1 px-5 py-4 rounded-xl text-white placeholder-slate-500 text-sm"
              />
              <select className="futuristic-input md:col-span-2 px-5 py-4 rounded-xl text-slate-400 text-sm">
                <option>Select Practice Area</option>
                <option>Corporate Law</option>
                <option>Criminal Defense</option>
                <option>Intellectual Property</option>
                <option>International Arbitration</option>
              </select>
              <textarea
                placeholder="Briefly describe your situation..."
                rows={4}
                className="futuristic-input md:col-span-2 px-5 py-4 rounded-xl text-white placeholder-slate-500 text-sm"
              ></textarea>
              <button
                type="button"
                className="cta-gradient md:col-span-2 px-8 py-4 rounded-xl text-xs font-semibold tracking-widest uppercase"
              >
                Send Secure Message
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
