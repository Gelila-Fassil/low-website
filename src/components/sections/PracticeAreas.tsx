"use client";

import Link from "next/link";

export default function PracticeAreas() {
  const practices = [
    {
      id: "employment-law",
      title: "Employment Law",
      icon: "fa-briefcase",
      featureHeadline: "YOUR WORKPLACE RIGHTS MATTER.",
      supportingText:
        "You deserve fair treatment and fair pay. We’re here to help protect your rights in the workplace.",
      ctaText: "FREE EMPLOYMENT LAW CONSULTATION",
      ctaHref: "/practice-areas/employment-law",
      subItems: [
        {
          name: "Unpaid Wages & Overtime",
          desc: "Helping employees pursue wages, overtime pay, and compensation they may be owed.",
        },
        {
          name: "Wrongful Termination",
          desc: "Protecting employees who believe they were unlawfully terminated from their jobs.",
        },
        {
          name: "Workplace Discrimination & Harassment",
          desc: "Representing employees facing discrimination, harassment, or unfair treatment at work.",
        },
        {
          name: "Workplace Retaliation",
          desc: "Helping employees protect their rights when they face retaliation for reporting misconduct or exercising workplace rights.",
        },
      ],
    },
    {
      id: "tenant-habitability",
      title: "Tenant Habitability",
      icon: "fa-house-circle-exclamation",
      featureHeadline: "YOU DON'T HAVE TO LIVE IN UNSAFE OR UNHEALTHY CONDITIONS.",
      supportingText:
        "You deserve a safe and livable home. We’re here to help protect your rights.",
      ctaText: "FREE TENANT CONSULTATION",
      ctaHref: "/practice-areas/tenant-habitability",
      subItems: [
        {
          name: "Mold & Mildew",
          desc: "Helping tenants address unhealthy living conditions caused by persistent mold and moisture.",
        },
        {
          name: "Pest Infestation",
          desc: "Protecting tenants dealing with roaches, rodents, and other unresolved pest problems.",
        },
        {
          name: "Water Leaks & Plumbing",
          desc: "Assisting tenants facing ongoing leaks, water damage, and serious plumbing issues.",
        },
        {
          name: "Electrical Problems",
          desc: "Helping tenants address unsafe electrical conditions that may put their home and safety at risk.",
        },
      ],
    },
    {
      id: "personal-injury",
      title: "Personal Injury",
      icon: "fa-user-injured",
      featureHeadline: "INJURED BECAUSE OF SOMEONE ELSE’S NEGLIGENCE?",
      supportingText:
        "An unexpected injury can change your life. We’re here to help you understand your rights and legal options.",
      ctaText: "FREE PERSONAL INJURY CONSULTATION",
      ctaHref: "/practice-areas/personal-injury",
      subItems: [
        {
          name: "Car Accidents",
          desc: "Helping individuals injured in car accidents understand their legal options and pursue compensation.",
        },
        {
          name: "Slip & Fall",
          desc: "Representing individuals injured because of unsafe or hazardous property conditions.",
        },
        {
          name: "Negligence-Related Injuries",
          desc: "Helping individuals pursue claims when another party’s negligence causes an injury.",
        },
      ],
    },
    {
      id: "immigration-law",
      title: "Immigration Law",
      icon: "fa-passport",
      featureHeadline: "YOUR IMMIGRATION JOURNEY DESERVES TRUSTED LEGAL GUIDANCE.",
      supportingText:
        "Whether you’re pursuing permanent residency, citizenship, or bringing family together, we’re here to guide you through the legal process.",
      ctaText: "IMMIGRATION CONSULTATION",
      ctaHref: "/practice-areas/immigration-law",
      subItems: [
        {
          name: "Green Cards",
          desc: "Helping individuals and families navigate the process of obtaining lawful permanent residency.",
        },
        {
          name: "Citizenship",
          desc: "Providing legal guidance throughout the U.S. naturalization and citizenship process.",
        },
        {
          name: "Family Petitions",
          desc: "Helping families navigate immigration petitions for eligible relatives.",
        },
      ],
    },
  ];

  return (
    <section id="practice" className="py-24 bg-[#F5F3EF] relative border-b border-neutral-200">
      <div className="wrapper">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A1128]/5 text-[#0A1128] text-[10px] font-bold uppercase tracking-widest border border-[#D4AF37]/30 shadow-sm">
            <i className="fas fa-scale-balanced text-[#D4AF37]"></i>
            <span>Our Practice Areas</span>
          </div>
          <h2 className="text-[#0A1128] font-serif-heading leading-tight">
            Dedicated Legal Representation <br /> Across California
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base font-medium">
            Providing compassionate, strategic, and client-focused advocacy tailored to your unique legal needs.
          </p>
        </div>

        {/* Grid of Practice Area Cards */}
        <div className="space-y-16">
          {practices.map((area, index) => (
            <div
              key={area.id}
              className="bg-white p-8 lg:p-10 rounded-2xl border border-neutral-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden hover:border-[#D4AF37] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Side: Category Header & CTA */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#0A1128] text-[#D4AF37] flex items-center justify-center text-xl font-bold shadow-md">
                      <i className={`fas ${area.icon}`}></i>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-widest block">
                        Practice Area 0{index + 1}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold font-serif-heading text-[#0A1128] mt-0.5">
                        {area.title}
                      </h3>
                    </div>
                  </div>

                  <h4 className="text-base sm:text-lg font-serif-heading text-[#0A1128] font-bold leading-snug">
                    {area.featureHeadline}
                  </h4>

                  <p className="text-neutral-600 text-sm font-medium leading-relaxed">
                    {area.supportingText}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={area.ctaHref}
                      className="bg-[#0A1128] hover:bg-[#1a2b5e] text-white px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold inline-block text-center shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 border border-[#0A1128]"
                    >
                      {area.ctaText}
                    </Link>
                  </div>
                </div>

                {/* Right Side: Specific Issues Handled */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {area.subItems.map((sub, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-[#D4AF37] hover:bg-white hover:scale-[1.02] transition-all duration-300 space-y-2 shadow-sm"
                    >
                      <div className="flex items-center gap-2 text-[#D4AF37]">
                        <i className="fas fa-circle-check text-xs"></i>
                        <h5 className="text-sm font-bold text-[#0A1128]">{sub.name}</h5>
                      </div>
                      <p className="text-xs text-neutral-500 font-medium leading-relaxed">
                        {sub.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
