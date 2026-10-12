import React, { useState } from 'react';
import { useBanking } from '../context/BankingContext';
import { 
  Headphones, 
  HelpCircle, 
  PhoneCall, 
  AlertCircle, 
  Search, 
  MessageSquare, 
  CheckCircle2, 
  ChevronRight, 
  ShieldAlert
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export const SupportPage: React.FC = () => {
  const { navigate, tickets, createTicket, setIsChatOpen, showToast, user } = useBanking();

  const [activeTab, setActiveTab] = useState<'channels' | 'raise' | 'track'>('channels');

  // Raise Complaint Form State
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [category, setCategory] = useState('Transaction Query');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [createdTicketId, setCreatedTicketId] = useState<string | null>(null);

  // Track Request State
  const [searchTicketId, setSearchTicketId] = useState('');
  const [searchedTicket, setSearchedTicket] = useState<any | null>(null);

  const handleRaiseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject.trim() || !message.trim()) {
      showToast('Missing Details', 'Please enter a subject and message for your complaint.', 'warning');
      return;
    }
    const ticketId = createTicket({
      name: name || 'Valued Customer',
      email: email || 'customer@nexbank.com',
      category,
      subject,
      message
    });
    setCreatedTicketId(ticketId);
    setSubject('');
    setMessage('');
  };

  const handleSearchTicket = (e: React.FormEvent) => {
    e.preventDefault();
    const found = tickets.find((t) => t.id.toLowerCase() === searchTicketId.trim().toLowerCase());
    if (found) {
      setSearchedTicket(found);
    } else {
      setSearchedTicket('NOT_FOUND');
    }
  };

  const supportChannels = [
    {
      id: 'faq',
      title: 'FAQs',
      desc: 'Find quick answers',
      detail: 'Instantly find answers regarding account setup, limits, and fund transfers.',
      icon: <HelpCircle className="w-6 h-6 text-[#97144d]" />,
      action: () => navigate('/faq'),
      btnLabel: 'Browse FAQs'
    },
    {
      id: 'contact',
      title: 'Contact Us',
      desc: 'Get in touch',
      detail: 'Reach our corporate branches, toll-free lines, or international desks.',
      icon: <PhoneCall className="w-6 h-6 text-[#97144d]" />,
      action: () => navigate('/contact'),
      btnLabel: 'View Contact Details'
    },
    {
      id: 'raise',
      title: 'Raise a Complaint',
      desc: "We'll resolve it quickly",
      detail: 'Register an official banking grievance or issue for priority resolution.',
      icon: <AlertCircle className="w-6 h-6 text-amber-600" />,
      action: () => setActiveTab('raise'),
      btnLabel: 'Submit Complaint Form'
    },
    {
      id: 'track',
      title: 'Track Request',
      desc: 'Check your request status',
      detail: 'Look up real-time status updates on your existing complaints and service tickets.',
      icon: <Search className="w-6 h-6 text-emerald-600" />,
      action: () => setActiveTab('track'),
      btnLabel: 'Track Ticket Status'
    },
    {
      id: 'chat',
      title: 'Live Chat',
      desc: 'Chat with our support team',
      detail: 'Connect instantly with NexBot AI assistant or a live human support officer.',
      icon: <MessageSquare className="w-6 h-6 text-[#97144d]" />,
      action: () => setIsChatOpen(true),
      btnLabel: 'Open 24/7 Live Chat'
    }
  ];

  return (
    <div className="space-y-24 pb-20 bg-[#fbf9fa]">
      
      {/* Hero Section matching diagram */}
      <section className="relative pt-12 md:pt-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="down">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fdf2f6] border border-[#97144d]/20 text-[#97144d] text-xs font-black uppercase tracking-wider mb-4">
              <Headphones className="w-3.5 h-3.5" />
              <span>Dedicated Priority Support</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
              Customer Support
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mt-4 max-w-2xl mx-auto font-normal">
              We're here to help you 24/7.
            </p>

            <div className="mt-8 flex justify-center gap-3">
              <button
                onClick={() => setActiveTab('channels')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'channels'
                    ? 'bg-[#97144d] text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                All Support Options
              </button>
              <button
                onClick={() => setActiveTab('raise')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'raise'
                    ? 'bg-[#97144d] text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                Raise a Complaint
              </button>
              <button
                onClick={() => setActiveTab('track')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'track'
                    ? 'bg-[#97144d] text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                Track Request Status
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5 Support Channels Grid matching diagram with ScrollReveal */}
      {activeTab === 'channels' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportChannels.map((chan, idx) => (
              <ScrollReveal key={chan.id} direction="up" delay={idx * 80}>
                <div className="p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-[#97144d]/40 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md hover:-translate-y-1.5 h-full">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#fdf2f6] group-hover:bg-[#97144d] border border-[#97144d]/20 flex items-center justify-center mb-4 transition-all group-hover:scale-110">
                      <span className="text-[#97144d] group-hover:text-white transition-colors">{chan.icon}</span>
                    </div>
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-[#97144d] transition-colors">
                      {chan.title}
                    </h3>
                    <p className="text-xs font-bold text-[#97144d] mt-1">{chan.desc}</p>
                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed font-normal">{chan.detail}</p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <button
                      onClick={chan.action}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-[#97144d] text-slate-800 hover:text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 border border-slate-200 hover:border-[#97144d]"
                    >
                      <span>{chan.btnLabel}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* Raise a Complaint Form Panel */}
      {activeTab === 'raise' && (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-[0_20px_45px_-10px_rgba(151,20,77,0.08)]">
              <div className="text-center mb-8">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#97144d]">Grievance Redressal</span>
                <h2 className="text-2xl font-black text-slate-900 mt-1">Raise an Official Complaint</h2>
                <p className="text-xs text-slate-500 mt-1 font-medium">We guarantee formal resolution within 24 to 48 business hours.</p>
              </div>

              {createdTicketId ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="text-lg font-bold text-emerald-900">Complaint Registered Successfully</h3>
                  <p className="text-xs text-slate-700">
                    Your tracking Ticket ID is <span className="font-mono font-bold text-emerald-800 px-2 py-1 rounded bg-white border border-emerald-300">{createdTicketId}</span>
                  </p>
                  <div className="pt-2 flex justify-center gap-3">
                    <button
                      onClick={() => {
                        setSearchTicketId(createdTicketId);
                        setActiveTab('track');
                      }}
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-sm"
                    >
                      Track Status Now
                    </button>
                    <button
                      onClick={() => setCreatedTicketId(null)}
                      className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-semibold text-xs hover:bg-slate-200"
                    >
                      Raise Another Issue
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleRaiseSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Your Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="e.g. Aryaman Tomar"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#97144d] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Your Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="e.g. aryaman@example.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#97144d] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Complaint Category</label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#97144d] focus:bg-white"
                    >
                      <option>Transaction Query / Failed Transfer</option>
                      <option>Card Services / Blocked Card</option>
                      <option>Account Opening & Verification</option>
                      <option>Net Banking & Security</option>
                      <option>Loan Disbursal / Interest Query</option>
                      <option>Billing & Charges</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Subject</label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      placeholder="Brief summary of the issue"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#97144d] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Detailed Description</label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      placeholder="Provide relevant transaction dates, reference IDs, or details..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#97144d] focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-shimmer w-full py-3.5 rounded-xl bg-gradient-to-r from-[#97144d] to-[#ca8a04] hover:brightness-105 text-white font-black text-sm shadow-md shadow-[#97144d]/25 transition-all flex items-center justify-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4" />
                    <span>Submit Formal Complaint</span>
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* Track Request Panel */}
      {activeTab === 'track' && (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-[0_20px_45px_-10px_rgba(151,20,77,0.08)] space-y-6">
              <div className="text-center">
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700">Live Status Tracker</span>
                <h2 className="text-2xl font-black text-slate-900 mt-1">Track Existing Request</h2>
                <p className="text-xs text-slate-500 mt-1 font-medium">Enter your Ticket ID (e.g. TICK-8021) to check real-time resolution progress.</p>
              </div>

              <form onSubmit={handleSearchTicket} className="flex gap-2">
                <input
                  type="text"
                  value={searchTicketId}
                  onChange={(e) => setSearchTicketId(e.target.value)}
                  placeholder="Enter Ticket ID (e.g. TICK-8021)"
                  required
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#97144d] font-mono focus:bg-white"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <Search className="w-4 h-4" />
                  <span>Track</span>
                </button>
              </form>

              {/* Display search result */}
              {searchedTicket === 'NOT_FOUND' && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-center text-xs text-rose-700 font-semibold">
                  No active ticket found with ID "{searchTicketId}". Please check the ID or contact support.
                </div>
              )}

              {searchedTicket && searchedTicket !== 'NOT_FOUND' && (
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <div>
                      <span className="font-mono font-bold text-sm text-[#97144d]">{searchedTicket.id}</span>
                      <h4 className="text-base font-bold text-slate-900 mt-0.5">{searchedTicket.subject}</h4>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      searchedTicket.status === 'Resolved'
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : searchedTicket.status === 'In Progress'
                        ? 'bg-amber-100 text-amber-800 border border-amber-300'
                        : 'bg-[#fdf2f6] text-[#97144d] border border-[#97144d]/30'
                    }`}>
                      {searchedTicket.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-slate-500 block">Category</span>
                      <span className="text-slate-800 font-bold">{searchedTicket.category}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Submitted On</span>
                      <span className="text-slate-800 font-bold">{searchedTicket.createdAt}</span>
                    </div>
                  </div>

                  <div className="text-xs">
                    <span className="text-slate-500 block mb-1">Issue Description</span>
                    <p className="p-3 rounded-xl bg-white text-slate-700 border border-slate-200">
                      {searchedTicket.message}
                    </p>
                  </div>
                </div>
              )}

              {/* Existing tickets list */}
              <div className="pt-4 border-t border-slate-200">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3">All Active Tickets ({tickets.length})</h4>
                <div className="space-y-2">
                  {tickets.map((t) => (
                    <div
                      key={t.id}
                      onClick={() => {
                        setSearchTicketId(t.id);
                        setSearchedTicket(t);
                      }}
                      className="p-3.5 rounded-xl bg-slate-50 hover:bg-[#fdf2f6] border border-slate-200 flex items-center justify-between text-xs cursor-pointer transition-colors"
                    >
                      <div>
                        <span className="font-mono text-[#97144d] font-bold mr-2">{t.id}</span>
                        <span className="text-slate-800 font-bold">{t.subject}</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-white text-slate-700 border border-slate-200">
                        {t.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </ScrollReveal>
        </section>
      )}

      {/* Emergency Hotlines Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="p-6 rounded-3xl bg-rose-50 border border-rose-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-rose-100 text-rose-700 border border-rose-300">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-bold text-rose-950 text-sm">Emergency Fraud & Card Blocking Hotline</h5>
                <p className="text-rose-800/80 font-normal">Available 24/7/365 with immediate biometric freeze.</p>
              </div>
            </div>
            <span className="text-base font-black text-rose-700 font-mono tracking-wider">
              +1 800-555-LOCK (5625)
            </span>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
};
