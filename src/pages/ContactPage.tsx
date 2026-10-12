import React, { useState } from 'react';
import { useBanking } from '../context/BankingContext';
import { branchesData } from '../data/bankingData';
import { ScrollReveal } from '../components/ScrollReveal';
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Navigation,
  Crown
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { showToast } = useBanking();

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Selected branch for map spotlight
  const [selectedBranch, setSelectedBranch] = useState(branchesData[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Message Transmitted', `Thank you ${name}. Your message has been routed to our Burgundy banking concierge.`, 'success');
  };

  return (
    <div className="space-y-24 pb-20 bg-[#fbf9fa]">
      
      {/* Hero Section matching diagram */}
      <section className="relative pt-12 md:pt-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="down">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fdf2f6] border border-[#97144d]/20 text-[#97144d] text-xs font-black uppercase tracking-wider mb-4">
              <Mail className="w-3.5 h-3.5" />
              <span>24/7 Global Reach</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
              Get in Touch
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mt-4 max-w-2xl mx-auto font-normal">
              We are always here to assist you with all your personal and corporate banking inquiries.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 3 Contact Pillar Cards matching diagram */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Our Office */}
          <ScrollReveal direction="up" delay={0}>
            <div className="h-full p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-[#97144d]/40 transition-all duration-300 flex flex-col justify-between group shadow-[0_10px_30px_-5px_rgba(151,20,77,0.06)] hover:shadow-[0_20px_40px_-5px_rgba(151,20,77,0.12)] hover:-translate-y-1.5">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#fdf2f6] group-hover:bg-[#97144d] border border-[#97144d]/20 flex items-center justify-center mb-4 text-[#97144d] group-hover:text-white transition-all group-hover:scale-110">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900 group-hover:text-[#97144d] transition-colors">Our Office</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
                  450 Lexington Ave, Suite 3200<br />
                  New York, NY 10017, USA
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                Open Mon - Fri: 8:30 AM - 5:30 PM
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Email Us */}
          <ScrollReveal direction="up" delay={100}>
            <div className="h-full p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-[#97144d]/40 transition-all duration-300 flex flex-col justify-between group shadow-[0_10px_30px_-5px_rgba(151,20,77,0.06)] hover:shadow-[0_20px_40px_-5px_rgba(151,20,77,0.12)] hover:-translate-y-1.5">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#fdf2f6] group-hover:bg-[#97144d] border border-[#97144d]/20 flex items-center justify-center mb-4 text-[#97144d] group-hover:text-white transition-all group-hover:scale-110">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900 group-hover:text-[#97144d] transition-colors">Email Us</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
                  General Inquiries: <span className="text-slate-900 font-bold">contact@nexbank.com</span><br />
                  Burgundy Priority: <span className="text-[#97144d] font-bold">burgundy@nexbank.com</span>
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-[#97144d] font-bold">
                Avg response: Under 15 minutes
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Call Us */}
          <ScrollReveal direction="up" delay={200}>
            <div className="h-full p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-[#97144d]/40 transition-all duration-300 flex flex-col justify-between group shadow-[0_10px_30px_-5px_rgba(151,20,77,0.06)] hover:shadow-[0_20px_40px_-5px_rgba(151,20,77,0.12)] hover:-translate-y-1.5">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#fdf2f6] group-hover:bg-[#97144d] border border-[#97144d]/20 flex items-center justify-center mb-4 text-emerald-600 group-hover:text-white transition-all group-hover:scale-110">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900 group-hover:text-[#97144d] transition-colors">Call Us</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
                  Toll Free (USA): <span className="text-slate-900 font-mono font-bold">+1 800-NEX-BANK</span><br />
                  International: <span className="text-slate-900 font-mono font-bold">+1 (212) 555-0199</span>
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-emerald-600 font-bold">
                Available 24 Hours / 7 Days
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Interactive Contact Form & Branch Map Grid matching diagram */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Interactive Form */}
            <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-[0_20px_45px_-10px_rgba(151,20,77,0.08)]">
              <h2 className="text-2xl font-black text-slate-900 mb-1">Send Us a Direct Message</h2>
              <p className="text-xs text-slate-500 mb-6">Our relationship managers will review and respond promptly.</p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-slate-900">Message Dispatched</h4>
                  <p className="text-xs text-slate-600">
                    Thank you! An automated ticket reference has been logged to your inbox.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="e.g. Aryaman Tomar"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#97144d] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="e.g. aryaman@example.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#97144d] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Subject</label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      placeholder="e.g. Question regarding corporate treasury accounts"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#97144d] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Message</label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      placeholder="How can we assist you today?"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#97144d] focus:bg-white transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-shimmer w-full py-3.5 rounded-xl bg-gradient-to-r from-[#97144d] via-[#b01c5d] to-[#97144d] hover:brightness-110 text-white font-black text-sm shadow-xl shadow-[#97144d]/25 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Inquiry</span>
                  </button>
                </form>
              )}
            </div>

            {/* Interactive Branch Locator & Visual Map matching diagram */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 space-y-4 shadow-[0_20px_45px_-10px_rgba(151,20,77,0.08)]">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-black text-slate-900">Branch & ATM Directory</h3>
                    <p className="text-xs text-slate-500 font-normal">Select a premier location to view details.</p>
                  </div>
                  <Navigation className="w-5 h-5 text-[#97144d]" />
                </div>

                {/* Branch pills */}
                <div className="grid grid-cols-2 gap-2">
                  {branchesData.map((branch) => (
                    <button
                      key={branch.city}
                      onClick={() => setSelectedBranch(branch)}
                      className={`p-3 rounded-xl text-left border transition-all text-xs font-bold ${
                        selectedBranch.city === branch.city
                          ? 'bg-[#97144d] border-[#97144d] text-white shadow-md shadow-[#97144d]/20'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-[#97144d]/40'
                      }`}
                    >
                      <span>{branch.city.split(' (')[0]}</span>
                    </button>
                  ))}
                </div>

                {/* Active branch spotlight */}
                <div className="p-4 rounded-2xl bg-[#fdf8fa] border border-[#97144d]/15 space-y-2 text-xs">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#97144d]" />
                    <span>{selectedBranch.city}</span>
                  </h4>
                  <p className="text-slate-600 pl-6">{selectedBranch.address}</p>
                  <div className="pl-6 pt-1 text-slate-500 space-y-1">
                    <p>Direct: <span className="text-slate-900 font-mono font-bold">{selectedBranch.phone}</span></p>
                    <p>Operating Hours: <span className="text-slate-900">{selectedBranch.hours}</span></p>
                  </div>
                </div>

                {/* Stylized Modern Interactive Map representation */}
                <div className="h-48 rounded-2xl bg-gradient-to-br from-[#fdf2f6] via-[#faeaef] to-[#f7e0e9] border border-[#97144d]/20 relative overflow-hidden flex items-center justify-center text-center p-4">
                  <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#97144d_1px,transparent_1px)] [background-size:16px_16px]"></div>
                  <div className="relative z-10 space-y-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#97144d] to-[#b01c5d] text-white flex items-center justify-center mx-auto shadow-xl shadow-[#97144d]/30 animate-bounce">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-black text-slate-900 block">GPS Location Spotlight</span>
                    <p className="text-[10px] text-slate-600 max-w-xs">{selectedBranch.address}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </section>

    </div>
  );
};
