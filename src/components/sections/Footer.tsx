"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F5F3EF] border-t border-neutral-200 text-neutral-600 relative z-10 pt-16 pb-12">
      <div className="wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-200">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8A701A] flex items-center justify-center border border-[#F3E5AB]/40 shadow-md">
                <i className="fas fa-scale-balanced text-[#0A1128] text-base font-bold"></i>
              </div>
              <div className="flex flex-col">
                <span className="font-bold tracking-wider text-base text-[#0A1128] font-serif-heading">
                  LAW OFFICE OF MICHAEL HAILU <span className="text-[#D4AF37]">APLC</span>
                </span>
                <span className="text-[10px] tracking-wider text-neutral-500 font-medium uppercase">
                  California Attorneys • Los Angeles & Oakland
                </span>
              </div>
            </Link>

            <p className="text-xs text-neutral-500 font-medium leading-relaxed">
              At Law Office of Michael Hailu APLC, we provide professional, responsive, and client-focused legal representation in Employment Law, Tenant Habitability, Personal Injury, and Immigration Law across California.
            </p>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="text-[11px] font-bold text-[#0A1128] uppercase tracking-wider block mb-2">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Facebook page"
                  className="social-icon-btn"
                >
                  <i className="fab fa-facebook-f text-sm"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Instagram page"
                  className="social-icon-btn"
                >
                  <i className="fab fa-instagram text-sm"></i>
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our TikTok page"
                  className="social-icon-btn"
                >
                  <i className="fab fa-tiktok text-sm"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#0A1128] uppercase tracking-widest font-serif-heading">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-[#D4AF37] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-[#D4AF37] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/attorneys" className="hover:text-[#D4AF37] transition-colors">
                  Attorneys
                </Link>
              </li>
              <li>
                <Link href="/practice-areas" className="hover:text-[#D4AF37] transition-colors">
                  Practice Areas Hub
                </Link>
              </li>
              <li>
                <Link href="/results-testimonials" className="hover:text-[#D4AF37] transition-colors">
                  Results & Testimonials
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-[#D4AF37] transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Practice Areas */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#0A1128] uppercase tracking-widest font-serif-heading">
              Practice Areas
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/practice-areas/employment-law" className="hover:text-[#D4AF37] transition-colors">
                  Employment Law
                </Link>
              </li>
              <li>
                <Link href="/practice-areas/tenant-habitability" className="hover:text-[#D4AF37] transition-colors">
                  Tenant Habitability
                </Link>
              </li>
              <li>
                <Link href="/practice-areas/personal-injury" className="hover:text-[#D4AF37] transition-colors">
                  Personal Injury
                </Link>
              </li>
              <li>
                <Link href="/practice-areas/immigration-law" className="hover:text-[#D4AF37] transition-colors">
                  Immigration Law
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Offices */}
          <div className="lg:col-span-3 space-y-4 text-xs">
            <h4 className="text-xs font-bold text-[#0A1128] uppercase tracking-widest font-serif-heading">
              Office Locations
            </h4>

            <div className="space-y-1 bg-white p-3 rounded-lg border border-neutral-200 shadow-sm">
              <span className="font-bold text-[#0A1128] block text-[11px]">LOS ANGELES OFFICE</span>
              <p className="text-neutral-500">3435 Wilshire Blvd, Suite 2285</p>
              <p className="text-neutral-500">Los Angeles, CA 90010</p>
              <a href="tel:2134555595" className="text-[#D4AF37] font-bold block pt-1 hover:underline">
                (213) 455-5595
              </a>
            </div>

            <div className="space-y-1 bg-white p-3 rounded-lg border border-neutral-200 shadow-sm">
              <span className="font-bold text-[#0A1128] block text-[11px]">OAKLAND OFFICE</span>
              <p className="text-neutral-500">1999 Harrison Street, Suite 1800</p>
              <p className="text-neutral-500">Oakland, CA 94612</p>
              <a href="tel:8774245848" className="text-[#D4AF37] font-bold block pt-1 hover:underline">
                877-424-5848
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal Section & Mandatory Disclaimer */}
        <div className="pt-8 space-y-4">
          <div className="p-4 rounded-xl bg-white border border-neutral-200 text-center shadow-sm">
            <p className="text-[11px] text-neutral-500 font-medium leading-relaxed">
              <strong className="text-[#0A1128]">Attorney Advertising Disclaimer:</strong> Attorney advertising. Prior results do not guarantee a similar outcome. Website information is for general informational purposes and is not legal advice.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-medium">
            <p>© {new Date().getFullYear()} Law Office of Michael Hailu APLC. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="hover:text-[#D4AF37] transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-[#D4AF37] transition-colors">
                Terms of Use
              </Link>
              <span>•</span>
              <a
                href="https://www.hailulawyers.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37] transition-colors"
              >
                www.hailulawyers.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
