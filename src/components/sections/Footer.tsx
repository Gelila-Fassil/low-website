export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-800 bg-black/40 backdrop-blur-lg overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--brand-main), transparent)",
        }}
      ></div>

      <div className="footer-bg-text font-serif">HAILU</div>

      <div className="relative wrapper py-24 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center">
                <i
                  className="fas fa-scale-balanced text-sm"
                  style={{ color: "var(--brand-light)" }}
                ></i>
              </div>
              <span className="font-semibold tracking-wider text-lg text-white">
                HAILU LAWYERS
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Navigating the complexities of modern law with foresight,
              precision, and aggressive strategy. Future-proofing your business
              and your legacy.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="social-icon w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-300"
              >
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
              <a
                href="#"
                className="social-icon w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-300"
              >
                <i className="fab fa-twitter text-sm"></i>
              </a>
              <a
                href="#"
                className="social-icon w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-300"
              >
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold tracking-widest text-sm uppercase mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#about"
                  className="footer-link text-slate-400 flex items-center gap-2"
                >
                  <i
                    className="fas fa-chevron-right text-[8px]"
                    style={{ color: "var(--brand-light)" }}
                  ></i>{" "}
                  Why Hailu
                </a>
              </li>
              <li>
                <a
                  href="#practice"
                  className="footer-link text-slate-400 flex items-center gap-2"
                >
                  <i
                    className="fas fa-chevron-right text-[8px]"
                    style={{ color: "var(--brand-light)" }}
                  ></i>{" "}
                  Practice Areas
                </a>
              </li>
              <li>
                <a
                  href="#method"
                  className="footer-link text-slate-400 flex items-center gap-2"
                >
                  <i
                    className="fas fa-chevron-right text-[8px]"
                    style={{ color: "var(--brand-light)" }}
                  ></i>{" "}
                  Our Method
                </a>
              </li>
              <li>
                <a
                  href="#cases"
                  className="footer-link text-slate-400 flex items-center gap-2"
                >
                  <i
                    className="fas fa-chevron-right text-[8px]"
                    style={{ color: "var(--brand-light)" }}
                  ></i>{" "}
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="footer-link text-slate-400 flex items-center gap-2"
                >
                  <i
                    className="fas fa-chevron-right text-[8px]"
                    style={{ color: "var(--brand-light)" }}
                  ></i>{" "}
                  Our Partners
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="footer-link text-slate-400 flex items-center gap-2"
                >
                  <i
                    className="fas fa-chevron-right text-[8px]"
                    style={{ color: "var(--brand-light)" }}
                  ></i>{" "}
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold tracking-widest text-sm uppercase mb-6">
              Expertise
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="footer-link text-slate-400">
                  Corporate Law & M&A
                </a>
              </li>
              <li>
                <a href="#" className="footer-link text-slate-400">
                  Criminal Defense
                </a>
              </li>
              <li>
                <a href="#" className="footer-link text-slate-400">
                  Intellectual Property
                </a>
              </li>
              <li>
                <a href="#" className="footer-link text-slate-400">
                  International Arbitration
                </a>
              </li>
              <li>
                <a href="#" className="footer-link text-slate-400">
                  Venture Capital
                </a>
              </li>
              <li>
                <a href="#" className="footer-link text-slate-400">
                  Compliance & Governance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold tracking-widest text-sm uppercase mb-6">
              Global Offices
            </h4>
            <div className="space-y-5 text-sm">
              <div className="flex gap-3">
                <i
                  className="fas fa-map-marker-alt mt-1"
                  style={{ color: "var(--brand-light)" }}
                ></i>
                <div>
                  <h5 className="text-white font-medium mb-1">New York (HQ)</h5>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    1271 Avenue of the Americas, NY 10020
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <i
                  className="fas fa-map-marker-alt mt-1"
                  style={{ color: "var(--brand-light)" }}
                ></i>
                <div>
                  <h5 className="text-white font-medium mb-1">London</h5>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    1 Canada Square, Canary Wharf, E14 5AB
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <i
                  className="fas fa-phone-alt mt-1"
                  style={{ color: "var(--brand-light)" }}
                ></i>
                <div>
                  <h5 className="text-white font-medium mb-1">
                    24/7 Rapid Response
                  </h5>
                  <a
                    href="tel:+12125550199"
                    className="text-slate-400 text-xs hover:text-white transition"
                  >
                    +1 (212) 555-0199
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div
            className="absolute -right-10 -top-10 w-40 h-40 rounded-full blur-3xl opacity-30"
            style={{ background: "var(--brand-main)" }}
          ></div>
          <div className="relative z-10">
            <h4 className="text-xl font-bold text-white mb-2">
              Stay ahead of legal trends.
            </h4>
            <p className="text-slate-400 text-sm">
              Subscribe to our quarterly brief on corporate law, tech IP, and
              global compliance.
            </p>
          </div>
          <form className="relative z-10 flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="futuristic-input px-5 py-3 rounded-xl text-white placeholder-slate-500 text-sm w-full md:w-64"
            />
            <button
              type="button"
              className="cta-gradient px-6 py-3 rounded-xl text-xs font-semibold tracking-widest uppercase whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-xs tracking-wide">
            © 2024 Hailu Lawyers. All Rights Reserved.
          </div>
          <div className="flex gap-6 text-slate-500 text-xs tracking-wide">
            <a href="#" className="hover:text-slate-300 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-300 transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-slate-300 transition">
              Client Portal
            </a>
            <a href="#" className="hover:text-slate-300 transition">
              Disclaimer
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-slate-700 text-[10px] leading-relaxed max-w-4xl mx-auto italic">
            Attorney Advertising. Prior results do not guarantee a similar outcome.
            The information on this website is for general information purposes only.
            Nothing on this site should be taken as legal advice for any individual case or situation.
            This information is not intended to create, and receipt or viewing does not constitute,
            an attorney-client relationship.
          </p>
        </div>
      </div>
    </footer>
  );
}
