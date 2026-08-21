"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    practiceArea: "Employment Law",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-[#F5F3EF] relative border-b border-neutral-200">
      <div className="wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0A1128]/5 text-[#0A1128] text-xs font-bold uppercase tracking-widest border border-[#D4AF37]/30">
              <i className="fas fa-envelope-open-text text-[#D4AF37]"></i>
              <span>Free Legal Consultation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-heading text-[#0A1128]">
              Request Your Free Case Evaluation
            </h2>

            <p className="text-neutral-600 text-sm sm:text-base font-light leading-relaxed">
              If you have questions regarding Employment Law, Tenant Habitability, Personal Injury, or Immigration Law, contact our California offices today for a confidential consultation.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-between shadow-sm">
                <div>
                  <span className="text-xs text-[#0A1128] font-bold uppercase">Los Angeles Office</span>
                  <p className="text-sm font-semibold text-[#0A1128]">(213) 455-5595</p>
                </div>
                <a
                  href="tel:2134555595"
                  className="bg-[#0A1128] text-white hover:bg-[#1a2b5e] transition-colors rounded-full px-4 py-2 text-xs font-bold uppercase shadow-sm"
                >
                  CALL LA
                </a>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-between shadow-sm">
                <div>
                  <span className="text-xs text-[#0A1128] font-bold uppercase">Oakland Office</span>
                  <p className="text-sm font-semibold text-[#0A1128]">877-424-5848</p>
                </div>
                <a
                  href="tel:8774245848"
                  className="bg-[#0A1128] text-white hover:bg-[#1a2b5e] transition-colors rounded-full px-4 py-2 text-xs font-bold uppercase shadow-sm"
                >
                  CALL OAKLAND
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Lead Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 lg:p-10 rounded-3xl border border-neutral-200 shadow-[0_8px_30px_rgb(0,0,0,0.08)] relative">
              <h3 className="text-2xl font-bold font-serif-heading text-[#0A1128] mb-2">
                Free Consultation Form
              </h3>
              <p className="text-xs text-neutral-500 mb-6">
                Please fill out the form below and our office will reach out to discuss your matter.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#0A1128] text-[#D4AF37] mx-auto flex items-center justify-center text-2xl font-bold shadow-sm">
                    <i className="fas fa-check"></i>
                  </div>
                  <h4 className="text-xl font-bold font-serif-heading text-[#0A1128]">
                    Thank You for Contacting Us
                  </h4>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto">
                    Your inquiry has been received by the Law Office of Michael Hailu APLC. An attorney or staff member will review your details promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="border border-[#0A1128] text-[#0A1128] hover:bg-[#0A1128] hover:text-white transition-colors rounded-full px-6 py-2.5 text-xs font-bold uppercase"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        First Name <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        placeholder="John"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:border-[#0A1128] focus:ring-1 focus:ring-[#0A1128] outline-none transition-all text-sm text-neutral-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Last Name <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        placeholder="Doe"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:border-[#0A1128] focus:ring-1 focus:ring-[#0A1128] outline-none transition-all text-sm text-neutral-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Phone Number <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="(213) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:border-[#0A1128] focus:ring-1 focus:ring-[#0A1128] outline-none transition-all text-sm text-neutral-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Email Address <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:border-[#0A1128] focus:ring-1 focus:ring-[#0A1128] outline-none transition-all text-sm text-neutral-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Practice Area <span className="text-[#D4AF37]">*</span>
                    </label>
                    <select
                      value={formData.practiceArea}
                      onChange={(e) =>
                        setFormData({ ...formData, practiceArea: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:border-[#0A1128] focus:ring-1 focus:ring-[#0A1128] outline-none transition-all text-sm text-neutral-900"
                    >
                      <option value="Employment Law">Employment Law</option>
                      <option value="Tenant Habitability">Tenant Habitability</option>
                      <option value="Personal Injury">Personal Injury</option>
                      <option value="Immigration Law">Immigration Law</option>
                      <option value="General Legal Inquiry">General Legal Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Brief Description of Legal Matter <span className="text-[#D4AF37]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      placeholder="Please summarize your legal situation..."
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:border-[#0A1128] focus:ring-1 focus:ring-[#0A1128] outline-none transition-all text-sm text-neutral-900"
                    ></textarea>
                  </div>

                  {/* Required Form Notice */}
                  <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-200 text-[11px] text-neutral-600 leading-snug shadow-sm">
                    <i className="fas fa-triangle-exclamation text-[#D4AF37] mr-1"></i>
                    <strong className="text-[#0A1128]">Notice:</strong> Do not send confidential information through this form. Submitting this form does not create an attorney-client relationship.
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-[#0A1128] hover:bg-[#1a2b5e] text-white w-full py-4 rounded-xl text-xs font-extrabold uppercase tracking-widest shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin text-sm"></i>
                        <span>SUBMITTING CONSULTATION REQUEST...</span>
                      </>
                    ) : (
                      <>
                        <span>REQUEST FREE CONSULTATION</span>
                        <i className="fas fa-paper-plane text-xs"></i>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
