import Link from "next/link";
import HistoryTimeline from "@/components/sections/HistoryTimeline";
import { Reveal } from "@/components/ClientHelpers";

export const metadata = {
  title: "About Us | Law Office of Michael Hailu APLC",
  description:
    "Learn about Attorney Michael Hailu and our firm's 25+ year commitment to compassionate, strategic, and results-driven legal representation in California.",
};

export default function AboutPage() {
  return (
    <>
      <main className="pt-28 overflow-hidden">
        {/* 1. SIMPLE & ATTRACTIVE PICTURE-ENHANCED ABOUT US HERO SECTION */}
        <section className="relative py-16 lg:py-24 overflow-hidden border-b border-neutral-200">

          <div className="wrapper relative z-10">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-8 tracking-wider uppercase font-medium">
              <Link
                href="/"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <i className="fas fa-house text-[10px]"></i>
                <span>Home</span>
              </Link>
              <span className="text-slate-600">/</span>
              <span
                style={{ color: "var(--brand-light)" }}
                className="font-semibold"
              >
                About Us
              </span>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Clean Copy & Call-To-Action (6 cols) */}
              <div className="lg:col-span-6">
                <Reveal>
                  <div
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6 bg-[#0A1128]/5 text-[#0A1128] border border-[#D4AF37]/30 shadow-sm"
                  >
                    <i className="fas fa-scale-balanced text-[#D4AF37] text-xs"></i>
                    <span>EST. 1999 • LAW OFFICE OF MICHAEL HAILU APLC</span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.16] mb-6 text-[#0A1128] font-serif tracking-tight">
                    Championing Justice for{" "}
                    <span
                      className="italic font-normal text-[#D4AF37]"
                    >
                      California Families
                    </span>{" "}
                    for Over 25 Years
                  </h1>

                  <p className="text-[#0A1128] text-base font-medium leading-relaxed mb-8">
                    Aggressive in the courtroom. Compassionate with our clients. We defend victims of personal injuries, workplace discrimination, immigration challenges, and illegal housing practices across California.
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href="/#contact"
                      className="cta-gradient px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase inline-flex items-center gap-3 shadow-xl hover:scale-[1.03] transition-all"
                    >
                      <span>Book Free Consultation</span>
                      <i className="fas fa-arrow-right text-xs"></i>
                    </Link>
                    <a
                      href="tel:+13105550199"
                      className="btn-outline-glass px-7 py-4 rounded-full text-xs font-semibold tracking-widest uppercase text-white inline-flex items-center gap-2 hover:bg-white/10 transition-all"
                    >
                      <i className="fas fa-phone text-xs" style={{ color: "var(--brand-light)" }}></i>
                      <span>+1 (310) 555-0199</span>
                    </a>
                  </div>
                </Reveal>
              </div>

              {/* Right Column: Stunning Single High-Quality Picture Stage (6 cols) */}
              <div className="lg:col-span-6 relative">
                <Reveal>
                  <div className="relative mx-auto max-w-xl lg:max-w-none">
                    {/* Main Picture Frame */}
                    <div className="image-glass-frame rounded-[36px] p-3 sm:p-4 relative z-10 overflow-hidden shadow-2xl bg-[#110e16] border border-white/20">
                      <div className="relative w-full aspect-[4/3] rounded-[28px] overflow-hidden bg-black/40 group">
                        <img
                          src="/hero_modern_law_office.png"
                          alt="Law Office Trial Advocacy & Consultation Suite"
                          className="w-full h-full object-cover object-center rounded-[28px] brightness-105 contrast-105 transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none"></div>

                        {/* Image Caption */}
                        <div className="absolute bottom-4 left-5 right-5 z-20 flex items-center justify-between text-xs text-white">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span className="font-semibold tracking-wider text-xs text-white font-serif">
                              Trial Advocacy & Client Consultation Suite
                            </span>
                          </div>
                          <span className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[10px] text-[var(--brand-light)] font-semibold uppercase tracking-wider">
                            CA Bar #1999
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>

            </div>
          </div>
        </section>

        {/* 2. ATTORNEY SPOTLIGHT SECTION */}
        <section className="py-20 relative">
          <div className="wrapper grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Attorney Image Frame */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div
                    className="image-glass-frame rounded-[40px] p-3 sm:p-4 relative z-10 overflow-hidden h-[560px] sm:h-[600px]"
                    style={{
                      background: "rgba(130,117,153,0.06)",
                      border: "1px solid rgba(179,167,204,0.18)",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.18)",
                    }}
                  >
                    <img
                      src="/ceo.jpg"
                      alt="Michael Hailu, Esq."
                      className="w-full h-full object-cover object-center rounded-[28px] brightness-105"
                    />
                  </div>

                  {/* Badge Overlay */}
                  <div className="absolute -bottom-10 -right-10 sm:right-6 z-20 bg-white p-3.5 rounded-2xl border border-[var(--navy-border)] flex items-center gap-3.5 max-w-xs shadow-xl">
                    <div className="w-10 h-10 rounded-full flex-shrink-0 bg-[var(--navy-primary)]/5 border border-[var(--navy-border)] flex items-center justify-center text-[var(--navy-primary)]">
                      <i className="fas fa-award text-lg"></i>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[var(--navy-primary)]">
                        Michael Hailu, Esq.
                      </div>
                      <div className="text-[10px] text-slate-500">
                        Managing Attorney
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: Attorney Bio & Vision */}
            <div className="lg:col-span-7">
              <Reveal>
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-3 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 shadow-sm"
                >
                  Lead Practitioner
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#D4AF37] font-serif leading-tight">
                  Meet Attorney Michael Hailu
                </h2>
                <p className="text-black leading-relaxed mb-6 font-normal">
                  Founder and Principal Attorney Michael Hailu established the
                  Law Office of Michael Hailu APLC with a singular objective: to
                  provide real people with the highest standard of legal
                  protection. Recognizing that complex legal battles are often
                  intimidating, Michael built a firm centered around direct
                  communication, empathetic client care, and relentless
                  courtroom strategy.
                </p>
                <p className="text-black leading-relaxed mb-8 text-sm font-normal">
                  With over two decades of trial and litigation experience
                  across California state and federal courts, Michael has fought
                  for employees facing wrongful termination, families suffering
                  from personal injuries, and tenants standing up against
                  corporate landlords.
                </p>

                {/* Key Credentials Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <i
                      className="fas fa-gavel mt-1 text-sm"
                      style={{ color: "var(--brand-light)" }}
                    ></i>
                    <div>
                      <div className="text-xs font-bold text-white">
                        Bar Admissions
                      </div>
                      <div className="text-xs text-slate-400">
                        California State Bar & Federal Courts
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <i
                      className="fas fa-graduation-cap mt-1 text-sm"
                      style={{ color: "var(--brand-light)" }}
                    ></i>
                    <div>
                      <div className="text-xs font-bold text-white">
                        Legal Education
                      </div>
                      <div className="text-xs text-slate-400">
                        Juris Doctor & Trial Advocacy
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quote Card */}
                <div className="p-5 rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 relative">
                  <i className="fas fa-quote-left text-2xl text-[#D4AF37]/30 absolute top-4 left-4"></i>
                  <p className="text-xs sm:text-sm text-[#0A1128] italic font-semibold relative z-10 pl-6">
                    &quot;Our legal system exists to safeguard human dignity.
                    When your rights are infringed upon, we don&apos;t just file
                    paperwork—we champion your cause.&quot;
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

    {/* 3. ACETERNITY UI TEAM SECTION BLOCK */}
    <section className="py-24 relative overflow-hidden bg-[var(--bg-secondary)] border-y border-[var(--navy-border)]">
          {/* Ambient Lighting Orbs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--gold-accent)]/5 rounded-full blur-[170px] pointer-events-none z-0"></div>
          <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none z-0"></div>

          <div className="wrapper relative z-10">
            {/* Section Header */}
            <Reveal className="text-center max-w-3xl mx-auto mb-16">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-4 bg-white/50 border border-[var(--navy-border)] shadow-sm text-[var(--navy-primary)]"
              >
                <i className="fas fa-users text-xs text-[var(--gold-accent)]"></i>
                <span>OUR ADVOCATES & LEGAL TEAM</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[var(--navy-primary)] leading-tight mb-4">
                The Legal Minds Behind{" "}
                <span className="italic font-normal text-[var(--gold-accent)]">
                  Your Defense
                </span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto">
                Our team of experienced trial attorneys, legal strategists, and client advocates work cohesively to deliver relentless courtroom defense and compassionate care.
              </p>
            </Reveal>

            {/* Aceternity Team Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Michael Hailu, Esq.",
                  role: "Founder & Lead Trial Attorney",
                  image: "/ceo.jpg",
                  experience: "25+ Yrs Experience",
                  bio: "Admitted to the California State Bar, Michael has represented thousands of clients across state and federal courts.",
                  practiceArea: "Personal Injury & Trial",
                  email: "michael@hailulaw.com",
                },
                {
                  name: "Sarah Lin, Esq.",
                  role: "Senior Associate Attorney",
                  image: "/person1.jpg",
                  experience: "12+ Yrs Experience",
                  bio: "Specializing in workplace discrimination, wrongful termination, and complex wage dispute litigation.",
                  practiceArea: "Employment Law",
                  email: "slin@hailulaw.com",
                },
                {
                  name: "Carlos Mendoza, Esq.",
                  role: "Immigration & Housing Counsel",
                  image: "/person2.jpg",
                  experience: "10+ Yrs Experience",
                  bio: "Fierce advocate for family green cards, deportation defense, and California tenant rights protection.",
                  practiceArea: "Immigration & Housing",
                  email: "cmendoza@hailulaw.com",
                },
                {
                  name: "Jessica Taylor",
                  role: "Head of Client Relations",
                  image: "/person3.jpg",
                  experience: "8+ Yrs Operations",
                  bio: "Dedicated client liaison ensuring transparent case updates and compassionate legal intake support.",
                  practiceArea: "Client Advocacy",
                  email: "jtaylor@hailulaw.com",
                },
              ].map((member) => (
                <Reveal key={member.name} className="h-full">
                  <div className="group relative rounded-3xl border border-[var(--navy-border)] bg-white p-6 h-full flex flex-col justify-between hover:border-[var(--gold-accent)] transition-all duration-500 shadow-xl hover:shadow-2xl">
                    <div>
                      {/* Image Container with Hover Zoom & Floating Badge */}
                      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-5 border border-[var(--navy-border)] bg-black/5">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 brightness-105 contrast-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

                        <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[10px] text-white font-semibold uppercase tracking-wider">
                          {member.experience}
                        </span>
                      </div>

                      {/* Member Info */}
                      <h3 className="text-xl font-bold text-[var(--navy-primary)] font-serif mb-1 group-hover:text-[var(--gold-accent)] transition-colors">
                        {member.name}
                      </h3>
                      <div className="text-xs font-semibold text-[var(--gold-accent)] uppercase tracking-wider mb-3">
                        {member.role}
                      </div>
                      <p className="text-slate-600 text-xs font-medium leading-relaxed mb-4">
                        {member.bio}
                      </p>
                    </div>

                    {/* Footer Practice Badges & Email Link */}
                    <div className="pt-4 border-t border-[var(--navy-border)] flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-slate-100 border border-[var(--navy-border)] text-[10px] text-[var(--navy-primary)] font-medium">
                        {member.practiceArea}
                      </span>
                      <a
                        href={`mailto:${member.email}`}
                        className="w-8 h-8 rounded-full bg-slate-100 border border-[var(--navy-border)] flex items-center justify-center text-slate-500 hover:text-white hover:border-[var(--navy-primary)] hover:bg-[var(--navy-primary)] transition-all"
                        title={`Email ${member.name}`}
                      >
                        <i className="fas fa-envelope text-xs"></i>
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 3. CORE PILLARS BENTO GRID */}
        <section className="py-20 relative bg-[var(--bg-primary)]">
          <div className="wrapper">
            <Reveal className="text-center max-w-2xl mx-auto mb-16">
              <div
                className="text-xs tracking-widest uppercase mb-3 font-semibold text-[var(--navy-primary)]"
              >
                Our Foundation
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy-primary)] font-serif mb-4">
                Built Upon Four Unshakable Pillars
              </h2>
              <p className="text-slate-600 text-sm font-medium">
                Every case we take is handled according to our strict internal
                standards of integrity, excellence, and dedication.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Pillar 1 */}
              <Reveal>
                <div className="bento-card p-8 rounded-3xl h-full flex flex-col justify-between bg-white border border-[var(--navy-border)] shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--navy-primary)]/5 border border-[var(--navy-border)] flex items-center justify-center text-[var(--navy-primary)] text-xl mb-6">
                      <i className="fas fa-heart"></i>
                    </div>
                    <h3 className="text-xl font-bold text-[var(--navy-primary)] font-serif mb-3">
                      1. Empathetic Client Connection
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                      We treat every client as a human being, not a case file
                      number. We take time to understand your emotional,
                      financial, and personal priorities before formulating our
                      legal strategy.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[var(--brand-light)] font-medium">
                    <span>Personalized Guidance</span>
                    <i className="fas fa-check-circle text-xs"></i>
                  </div>
                </div>
              </Reveal>

              {/* Pillar 2 */}
              <Reveal>
                <div className="bento-card p-8 rounded-3xl h-full flex flex-col justify-between bg-white border border-[var(--navy-border)] shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--navy-primary)]/5 border border-[var(--navy-border)] flex items-center justify-center text-[var(--navy-primary)] text-xl mb-6">
                      <i className="fas fa-user-shield"></i>
                    </div>
                    <h3 className="text-xl font-bold text-[var(--navy-primary)] font-serif mb-3">
                      2. Direct Attorney Access
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                      Unlike large settlement mills where clients are passed
                      down to paralegals, you work directly with Senior Attorney
                      Michael Hailu throughout your legal journey.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[var(--navy-primary)] font-semibold">
                    <span>Direct Accountability</span>
                    <i className="fas fa-check-circle text-xs"></i>
                  </div>
                </div>
              </Reveal>

              {/* Pillar 3 */}
              <Reveal>
                <div className="bento-card p-8 rounded-3xl h-full flex flex-col justify-between bg-white border border-[var(--navy-border)] shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--navy-primary)]/5 border border-[var(--navy-border)] flex items-center justify-center text-[var(--navy-primary)] text-xl mb-6">
                      <i className="fas fa-shield-halved"></i>
                    </div>
                    <h3 className="text-xl font-bold text-[var(--navy-primary)] font-serif mb-3">
                      3. Uncompromising Strategy
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                      We prepare every case as if it is going to trial. This
                      meticulous approach forces opposing counsel and insurance
                      conglomerates to negotiate from a position of weakness.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[var(--navy-primary)] font-semibold">
                    <span>Trial-Ready Preparation</span>
                    <i className="fas fa-check-circle text-xs"></i>
                  </div>
                </div>
              </Reveal>

              {/* Pillar 4 */}
              <Reveal>
                <div className="bento-card p-8 rounded-3xl h-full flex flex-col justify-between bg-white border border-[var(--navy-border)] shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--navy-primary)]/5 border border-[var(--navy-border)] flex items-center justify-center text-[var(--navy-primary)] text-xl mb-6">
                      <i className="fas fa-hand-holding-dollar"></i>
                    </div>
                    <h3 className="text-xl font-bold text-[var(--navy-primary)] font-serif mb-3">
                      4. No Recovery, No Fee Promise
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                      For personal injury and contingency cases, you pay zero
                      upfront costs or legal fees unless we win your case and
                      recover money on your behalf.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[var(--navy-primary)] font-semibold">
                    <span>Contingency Protection</span>
                    <i className="fas fa-check-circle text-xs"></i>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 4. INTERACTIVE MOUSE-DRAGGABLE & BUTTON-SCROLLABLE HORIZONTAL TIMELINE */}
        <HistoryTimeline />

        {/* 5. ACETERNITY UI EXACT MINIMALIST CTA BLOCK FROM SCREENSHOT */}
        <section className="py-20 lg:py-28 relative overflow-hidden bg-[var(--bg-primary)] border-t border-[var(--navy-border)]">
          <div className="wrapper relative z-10">
            <Reveal>
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 max-w-6xl mx-auto">
                
                {/* Left Side: Headline, Copy, Overlapping Avatars & Rating */}
                <div className="max-w-2xl text-left">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--navy-primary)] font-serif tracking-tight leading-[1.15] mb-6">
                    Get fearless legal defense with <br className="hidden sm:inline" />
                    <span className="bg-gradient-to-r from-[var(--gold-dark)] via-[var(--gold-accent)] to-[var(--gold-dark)] bg-clip-text text-transparent">
                      Michael Hailu, APLC today.
                    </span>
                  </h2>

                  <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed mb-8 max-w-xl">
                    Schedule a 100% free confidential consultation with our senior trial counsel. Experience dedicated legal representation and zero upfront costs across California.
                  </p>

                  {/* Overlapping Avatars + 5 Gold Stars + Trust Text */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                    <div className="flex items-center">
                      <div className="flex -space-x-3 overflow-hidden">
                        <img
                          src="/ceo.jpg"
                          alt="Michael Hailu, Esq."
                          className="inline-block h-11 w-11 rounded-2xl object-cover ring-2 ring-[var(--bg-primary)]"
                        />
                        <img
                          src="/person1.jpg"
                          alt="Senior Associate"
                          className="inline-block h-11 w-11 rounded-2xl object-cover ring-2 ring-[var(--bg-primary)]"
                        />
                        <img
                          src="/person2.jpg"
                          alt="Immigration Counsel"
                          className="inline-block h-11 w-11 rounded-2xl object-cover ring-2 ring-[var(--bg-primary)]"
                        />
                        <img
                          src="/person3.jpg"
                          alt="Client Advocate"
                          className="inline-block h-11 w-11 rounded-2xl object-cover ring-2 ring-[var(--bg-primary)]"
                        />
                        <img
                          src="/background.jpeg"
                          alt="Trial Associate"
                          className="inline-block h-11 w-11 rounded-2xl object-cover ring-2 ring-[var(--bg-primary)]"
                        />
                      </div>
                      
                      {/* 5-Star Rating */}
                      <div className="flex items-center gap-1 ml-4">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="fas fa-star text-amber-400 text-xs"></i>
                        ))}
                      </div>
                    </div>

                    <div className="text-xs text-slate-600 font-medium">
                      Trusted by <span className="text-[var(--navy-primary)] font-bold">1,000+</span> California families
                    </div>
                  </div>
                </div>

                {/* Right Side: Floating CTA Action Button */}
                <div className="flex items-center shrink-0">
                  <Link
                    href="/#contact"
                    className="px-8 py-4 rounded-xl text-sm font-bold tracking-wide text-[var(--navy-primary)] bg-[var(--gold-accent)] hover:bg-[var(--gold-dark)] hover:text-white shadow-lg shadow-black/10 hover:scale-[1.03] transition-all duration-300 inline-flex items-center gap-2"
                  >
                    <span>Book a call</span>
                    <i className="fas fa-arrow-right text-xs"></i>
                  </Link>
                </div>

              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
