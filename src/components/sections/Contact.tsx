import { Reveal } from "../ClientHelpers";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 z-10 bg-black/20">
      <div className="wrapper">
        <Reveal>
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-start">
              <div>
                <p
                  className="text-sm tracking-widest uppercase mb-4"
                  style={{ color: "var(--brand-light)" }}
                >
                  Contact Us
                </p>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
                  Let Us Help You Take The Next Step
                </h2>
                <p className="text-slate-400 mb-8 max-w-xl">
                  Whether you are dealing with an injury, workplace dispute,
                  immigration concern, or tenant rights issue, we are ready to
                  listen and discuss your options.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <i
                      className="fas fa-phone-alt mt-1"
                      style={{ color: "var(--brand-light)" }}
                    ></i>
                    <div>
                      <div className="text-white font-semibold">
                        Call for a consultation
                      </div>
                      <a
                        href="tel:+13105550199"
                        className="text-slate-400 text-sm hover:text-white transition"
                      >
                        +1 (310) 555-0199
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i
                      className="fas fa-envelope mt-1"
                      style={{ color: "var(--brand-light)" }}
                    ></i>
                    <div>
                      <div className="text-white font-semibold">Email us</div>
                      <a
                        href="mailto:hello@hailulaw.com"
                        className="text-slate-400 text-sm hover:text-white transition"
                      >
                        hello@hailulaw.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i
                      className="fas fa-clock mt-1"
                      style={{ color: "var(--brand-light)" }}
                    ></i>
                    <div>
                      <div className="text-white font-semibold">
                        Office hours
                      </div>
                      <div className="text-slate-400 text-sm">
                        Mon–Fri: 9:00 AM – 6:00 PM (Emergency Support Available)
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Connect:</span>
                    <div className="flex items-center gap-2">
                      <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-lg glass-card flex items-center justify-center text-slate-300 hover:text-white hover:border-[var(--brand-light)] transition"
                      >
                        <i className="fab fa-linkedin-in text-xs"></i>
                      </a>
                      <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-lg glass-card flex items-center justify-center text-slate-300 hover:text-white hover:border-[var(--brand-light)] transition"
                      >
                        <i className="fab fa-facebook-f text-xs"></i>
                      </a>
                      <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-lg glass-card flex items-center justify-center text-slate-300 hover:text-white hover:border-[var(--brand-light)] transition"
                      >
                        <i className="fab fa-instagram text-xs"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                  <iframe
                    title="Law office location"
                    src="https://www.google.com/maps?q=Los%20Angeles%2C%20CA&z=10&output=embed"
                    className="w-full h-64"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <form className="grid gap-4 text-left">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="futuristic-input px-5 py-4 rounded-xl text-white placeholder-slate-500 text-sm"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="futuristic-input px-5 py-4 rounded-xl text-white placeholder-slate-500 text-sm"
                />
                <select className="futuristic-input px-5 py-4 rounded-xl text-slate-400 text-sm">
                  <option>Select Practice Area</option>
                  <option>Personal Injury</option>
                  <option>Employment Law</option>
                  <option>Immigration Law</option>
                  <option>Tenant Rights</option>
                </select>
                <textarea
                  placeholder="Briefly describe your situation..."
                  rows={4}
                  className="futuristic-input px-5 py-4 rounded-xl text-white placeholder-slate-500 text-sm"
                ></textarea>
                <button
                  type="button"
                  className="cta-gradient px-8 py-4 rounded-xl text-xs font-semibold tracking-widest uppercase"
                >
                  Request a Free Consultation
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
