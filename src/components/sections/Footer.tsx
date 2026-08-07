import Link from "next/link";

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
                MICHAEL HAILU APLC
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Compassionate, strategic, and results-driven legal representation
              for individuals, families, employees, tenants, and injury victims.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com"
                className="social-icon w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-300"
              >
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
              <a
                href="https://www.facebook.com"
                className="social-icon w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-300"
              >
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a
                href="https://www.instagram.com"
                className="social-icon w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-300"
              >
                <i className="fab fa-instagram text-sm"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold tracking-widest text-sm uppercase mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="footer-link text-slate-400 flex items-center gap-2"
                >
                  <i
                    className="fas fa-chevron-right text-[8px]"
                    style={{ color: "var(--brand-light)" }}
                  ></i>{" "}
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#practice"
                  className="footer-link text-slate-400 flex items-center gap-2"
                >
                  <i
                    className="fas fa-chevron-right text-[8px]"
                    style={{ color: "var(--brand-light)" }}
                  ></i>{" "}
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link
                  href="/#cases"
                  className="footer-link text-slate-400 flex items-center gap-2"
                >
                  <i
                    className="fas fa-chevron-right text-[8px]"
                    style={{ color: "var(--brand-light)" }}
                  ></i>{" "}
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="footer-link text-slate-400 flex items-center gap-2"
                >
                  <i
                    className="fas fa-chevron-right text-[8px]"
                    style={{ color: "var(--brand-light)" }}
                  ></i>{" "}
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold tracking-widest text-sm uppercase mb-6">
              Practice Areas
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="text-slate-400">Personal Injury</li>
              <li className="text-slate-400">Employment Law</li>
              <li className="text-slate-400">Immigration Law</li>
              <li className="text-slate-400">Tenant Rights</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold tracking-widest text-sm uppercase mb-6">
              Office & Contact
            </h4>
            <div className="space-y-5 text-sm">
              <div className="flex gap-3">
                <i
                  className="fas fa-map-marker-alt mt-1"
                  style={{ color: "var(--brand-light)" }}
                ></i>
                <div>
                  <h5 className="text-white font-medium mb-1">
                    Serving Clients Statewide
                  </h5>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    California-based representation with virtual and in-person
                    consultations available.
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
                    Call for assistance
                  </h5>
                  <a
                    href="tel:+13105550199"
                    className="text-slate-400 text-xs hover:text-white transition"
                  >
                    +1 (310) 555-0199
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-xs tracking-wide">
            © 2026 Law Office of Michael Hailu APLC. All rights reserved.
          </div>
          <div className="flex gap-6 text-slate-500 text-xs tracking-wide">
            <a href="#" className="hover:text-slate-300 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-300 transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-slate-300 transition">
              Disclaimer
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-slate-700 text-[10px] leading-relaxed max-w-4xl mx-auto italic">
            Attorney Advertising. Prior results do not guarantee a similar
            outcome. The information on this website is for general information
            purposes only. Nothing on this site should be taken as legal advice
            for any individual case or situation. This information is not
            intended to create, and receipt or viewing does not constitute, an
            attorney-client relationship.
          </p>
        </div>
      </div>
    </footer>
  );
}
