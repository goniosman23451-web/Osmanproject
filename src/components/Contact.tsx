import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, Clock, MapPin, Sparkles, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    projectType: 'Commercial Vector Licensing',
    budget: '$1,000 - $3,000',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in your name, email, and message details.');
      return;
    }

    if (!formData.email.includes('@')) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);
    // Simulate real network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      projectType: 'Commercial Vector Licensing',
      budget: '$1,000 - $3,000',
      message: ''
    });
    setIsSubmitted(false);
    setErrorMsg(null);
  };

  return (
    <section id="contact" className="py-24 bg-[#07090e] relative border-t border-slate-800/80">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          
          {/* Left Column: Contact Context & Studio Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
                <span>Start a Project</span>
                <span aria-hidden="true">·</span>
                <span>Collaboration</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Let&rsquo;s Create Something Extraordinary
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Available for bespoke vector illustration commissions, exclusive brand pattern licensing, packaging die-line geometry, and design system consulting.
              </p>

              {/* Studio Metadata Points */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <Mail className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-medium text-slate-400">Direct Studio Inquiries</p>
                    <a
                      href="mailto:aria@studio-origami.design"
                      className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
                    >
                      aria@studio-origami.design
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <Clock className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-medium text-slate-400">Response Turnaround</p>
                    <p className="text-sm font-semibold text-slate-200">
                      Guaranteed within 24 hours (Mon–Fri)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <MapPin className="w-5 h-5 text-cyan-300 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-medium text-slate-400">Studio Base</p>
                    <p className="text-sm font-semibold text-slate-200">
                      Kyoto & Remote Worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Note */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 text-xs text-slate-400">
              <p>
                Need an immediate license for an existing marketplace vector? You can download source packages instantly from the{' '}
                <a href="#marketplace" className="text-cyan-400 underline hover:text-cyan-300">
                  Marketplace Section
                </a>.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-purple-500/20 text-cyan-300 rounded-full flex items-center justify-center mx-auto ring-8 ring-cyan-500/10">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Transmitted!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-cyan-300 font-semibold">{formData.name}</span>. Your inquiry regarding <span className="text-slate-100">{formData.projectType}</span> has been routed directly to Aria Lin. You will receive a detailed proposal within 24 hours.
                  </p>
                  <button
                    onClick={handleReset}
                    type="button"
                    className="mt-4 px-6 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 rounded-xl transition-colors shadow-lg shadow-purple-600/25"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Full Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Elena Vance"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Business Email <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elena@company.com"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Inquiry Scope
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-950 border border-slate-800 rounded-xl text-slate-200 focus:outline-none focus:border-cyan-400"
                      >
                        <option value="Commercial Vector Licensing">Commercial Vector Licensing</option>
                        <option value="Custom Mandala or Sacred Geometry">Custom Mandala / Sacred Geometry</option>
                        <option value="3D Origami Sculpture & Papercraft">3D Origami & Papercraft Assets</option>
                        <option value="UI & Design System Engineering">UI & Design System Engineering</option>
                        <option value="Brand Identity Key Visuals">Brand Identity Key Visuals</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-950 border border-slate-800 rounded-xl text-slate-200 focus:outline-none focus:border-cyan-400"
                      >
                        <option value="< $1,000">Under $1,000</option>
                        <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                        <option value="$3,000 - $7,500">$3,000 - $7,500</option>
                        <option value="$7,500+">$7,500+ (Enterprise / Global Exclusive)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Bespoke Origami Key Visuals for Autumn Campaign"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Project Details & Deliverables <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your creative vision, timeline, required vector formats (SVG, EPS, AI), and artboard dimensions..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 rounded-xl transition-all shadow-lg shadow-purple-600/30 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <Send className="w-4 h-4" />
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
};
