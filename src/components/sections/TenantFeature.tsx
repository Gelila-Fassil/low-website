"use client";

import Link from "next/link";
import Image from "next/image";

export default function TenantFeature() {
  const features = [
    {
      title: "Mold & Mildew",
      desc: "Helping tenants address unhealthy living conditions caused by persistent mold and moisture.",
      icon: "fa-disease",
    },
    {
      title: "Pest Infestation",
      desc: "Protecting tenants dealing with roaches, rodents, and other unresolved pest problems.",
      icon: "fa-bug",
    },
    {
      title: "Water Leaks & Plumbing",
      desc: "Assisting tenants facing ongoing leaks, water damage, and serious plumbing issues.",
      icon: "fa-faucet-drip",
    },
    {
      title: "Electrical Problems",
      desc: "Helping tenants address unsafe electrical conditions that may put their home and safety at risk.",
      icon: "fa-bolt",
    },
  ];

  return (
    <section className="py-24 bg-[#F5F3EF] relative border-b border-neutral-200">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="wrapper relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A1128]/5 text-[#0A1128] text-[10px] font-bold uppercase tracking-widest border border-[#D4AF37]/30 shadow-sm">
              <i className="fas fa-house-circle-exclamation text-[#D4AF37]"></i>
              <span>Tenant Habitability Homepage Feature</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif-heading text-[#0A1128] font-bold leading-[1.15]">
              YOU DON'T HAVE TO LIVE IN UNSAFE OR UNHEALTHY CONDITIONS.
            </h2>

            <p className="text-neutral-600 text-base md:text-lg font-medium leading-relaxed max-w-xl">
              You deserve a safe and livable home. We’re here to help protect your rights.
            </p>

            <div className="pt-2">
              <Link
                href="/practice-areas/tenant-habitability"
                className="btn-gold inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-widest"
              >
                FREE TENANT CONSULTATION
              </Link>
            </div>
          </div>

          {/* Right Column: Grid of Issues */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-white border border-neutral-200 hover:border-[#D4AF37] transition-all duration-300 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0A1128] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] text-xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <i className={`fas ${feature.icon}`}></i>
                </div>
                <h3 className="text-[#0A1128] font-bold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 text-sm font-medium leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
