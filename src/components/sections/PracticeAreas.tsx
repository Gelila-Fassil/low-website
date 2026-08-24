"use client";

import Link from "next/link";
import Image from "next/image";

export default function PracticeAreas() {
  const practices = [
    {
      id: "employment-law",
      title: "Employment Law",
      icon: "fa-briefcase",
      image: "/employ.jpg",
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
      image: "/Tenant .jpg",
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
      image: "/PersonalInjury .jpg",
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
      image: "/IMMIGRATION.jpg",
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {practices.map((area, index) => (
            <div
              key={area.id}
              className="bg-white rounded-3xl border border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative overflow-visible hover:border-[#D4AF37]/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)] flex flex-col group mt-8 h-full"
            >
              {/* Small Banner Section */}
              <div className="relative w-full h-32 sm:h-40 overflow-hidden rounded-t-3xl shrink-0">
                <div className="absolute inset-0 bg-[#0A1128]/40 z-10 group-hover:bg-[#0A1128]/20 transition-colors duration-500" />
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute top-4 right-4 z-20">
                  <span className="text-[10px] text-white/90 font-bold uppercase tracking-widest bg-black/40 px-3 py-1 rounded-full backdrop-blur-md border border-white/20 shadow-sm">
                    Practice Area 0{index + 1}
                  </span>
                </div>
              </div>
              
              {/* Overlapping Icon */}
              <div className="px-6 lg:px-8 relative">
                <div className="absolute -top-8 left-6 lg:left-8 w-16 h-16 rounded-xl bg-[#0A1128] text-[#D4AF37] flex items-center justify-center text-2xl shadow-xl border-[4px] border-white z-30 transform group-hover:-translate-y-1 transition-transform duration-300">
                  <i className={`fas ${area.icon}`}></i>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="pt-10 pb-6 px-6 lg:px-8 flex flex-col grow">
                {/* Category Header & CTA */}
                <div className="space-y-3 mb-5">
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif-heading text-[#0A1128]">
                    {area.title}
                  </h3>
                  
                  <h4 className="text-lg sm:text-xl font-serif-heading text-[#0A1128] font-bold leading-snug relative pb-2 inline-block">
                    {area.featureHeadline}
                    <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-[#D4AF37] rounded-full"></div>
                  </h4>

                  <p className="text-neutral-600 text-base font-medium leading-relaxed">
                    {area.supportingText}
                  </p>

                  <div className="pt-1">
                    <Link
                      href={area.ctaHref}
                      className="group/btn inline-flex items-center gap-2 bg-transparent text-[#0A1128] px-0 py-1 text-sm uppercase tracking-widest font-bold transition-all duration-300"
                    >
                      <span className="border-b-2 border-[#0A1128] group-hover/btn:border-[#D4AF37] group-hover/btn:text-[#D4AF37] transition-colors pb-0.5">
                         {area.ctaText}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#0A1128] group-hover/btn:bg-[#D4AF37] text-white flex items-center justify-center transition-colors shadow-md">
                         <i className="fas fa-arrow-right text-xs"></i>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Specific Issues Handled */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                  {area.subItems.map((sub, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-[#F8F9FA] border border-neutral-100 hover:border-[#D4AF37]/30 hover:bg-white hover:shadow-sm transition-all duration-300 space-y-1 group/item"
                    >
                      <div className="flex items-center gap-2">
                        <i className="fas fa-check-circle text-[#D4AF37] text-sm group-hover/item:scale-110 transition-transform"></i>
                        <h5 className="text-sm font-bold text-[#0A1128]">{sub.name}</h5>
                      </div>
                      <p className="text-sm text-neutral-500 font-medium leading-snug pl-6">
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
