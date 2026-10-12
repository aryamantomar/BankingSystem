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
  Clock, 
  ChevronRight,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

export const SupportPage: React.FC = () => {
  const { navigate, tickets, createTicket, setIsChatOpen, showToast, user } = useBanking();

  // Active view: 'channels' | 'raise' | 'track'
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

  // 5 items from diagram
  const supportChannels = [
    {
      id: 'faq',
      title: 'FAQs',
      desc: 'Find quick answers',
      detail: 'Instantly find answers regarding account setup, limits, and fund transfers.',
      icon: <HelpCircle className="w-6 h-6 text-blue-400" />,
      action: () => navigate('/faq'),
      btnLabel: 'Browse FAQs'
    },
    {
      id: 'contact',
      title: 'Contact Us',
      desc: 'Get in touch',
      detail: 'Reach our corporate branches, toll-free lines, or international desks.',
      icon: <PhoneCall className="w-6 h-6 text-cyan-400" />,
      action: () => navigate('/contact'),
      btnLabel: 'View Contact Details'
    },
    {
      id: 'raise',
      title: 'Raise a Complaint',
      desc: "We'll resolve it quickly",
      detail: 'Register an official banking grievance or issue for priority resolution.',
      icon: <AlertCircle className="w-6 h-6 text-amber-400" />,
      action: () => setActiveTab('raise'),
      btnLabel: 'Submit Complaint Form'
    },
    {
      id: 'track',
      title: 'Track Request',
      desc: 'Check your request status',
      detail: 'Look up real-time status updates on your existing complaints and service tickets.',
      icon: <Search className="w-6 h-6 text-emerald-400" />,
      action: () => setActiveTab('track'),
      btnLabel: 'Track Ticket Status'
    },
    {
      id: 'chat',
      title: 'Live Chat',
      desc: 'Chat with our support team',
      detail: 'Connect instantly with NexBot AI assistant or a live human support officer.',
      icon: <MessageSquare className="w-6 h-6 text-violet-400" />,
      action: () => setIsChatOpen(true),
      btnLabel: 'Open 24/7 Live Chat'
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      
      {/* Hero Section matching diagram */}
      <section className="relative pt-12 md:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Headphones className="w-3.5 h-3.5" />
            <span>Dedicated Assistance</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Customer Support
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 mt-4 max-w-2xl mx-auto font-light">
            We're here to help you 24/7.
          </p>

          <div className="mt-8 flex justify-center gap-3">
            <button
              onClick={() => setActiveTab('channels')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                activeTab === 'channels' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              All Support Options
            </button>
            <button
              onClick={() => setActiveTab('raise')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                activeTab === 'raise' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Raise a Complaint
            </button>
            <button
              onClick={() => setActiveTab('track')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                activeTab === 'track' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Track Request Status
            </button>
          </div>
        </div>
      </section>

      {/* 5 Support Channels Grid matching diagram */}
      {activeTab === 'channels' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportChannels.map((chan) => (
              <div
                key={chan.id}
                className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-800 group-hover:bg-blue-600/20 border border-slate-700/80 flex items-center justify-center mb-4 transition-colors">
                    {chan.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {chan.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400 mt-1">{chan.desc}</p>
                  <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">{chan.detail}</p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800">
                  <button
                    onClick={chan.action}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>{chan.btnLabel}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Raise a Complaint Form Panel */}
      {activeTab === 'raise' && (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Grievance Redressal</span>
              <h2 className="text-2xl font-extrabold text-white mt-1">Raise an Official Complaint</h2>
              <p className="text-xs text-slate-400 mt-1">We guarantee formal resolution within 24 to 48 business hours.</p>
            </div>

            {createdTicketId ? (
              <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-lg font-bold text-white">Complaint Registered Successfully</h3>
                <p className="text-xs text-slate-300">
                  Your tracking Ticket ID is <span className="font-mono font-bold text-emerald-400 px-2 py-1 rounded bg-slate-900 border border-emerald-500/30">{createdTicketId}</span>
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <button
                    onClick={() => {
                      setSearchTicketId(createdTicketId);
                      setActiveTab('track');
                    }}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs"
                  >
                    Track Status Now
                  </button>
                  <button
                    onClick={() => setCreatedTicketId(null)}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 font-semibold text-xs"
                  >
                    Raise Another Issue
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleRaiseSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="e.g. Aryaman Tomar"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="e.g. aryaman@example.com"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Complaint Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
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
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Subject</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    placeholder="Brief summary of the issue"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Detailed Description</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder="Provide relevant transaction dates, reference IDs, or details..."
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <AlertCircle className="w-4 h-4" />
                  <span>Submit Formal Complaint</span>
                </button>
              </form>
            )}
          </div>
        </section>
      )}

      {/* Track Request Panel */}
      {activeTab === 'track' && (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Live Status Tracker</span>
              <h2 className="text-2xl font-extrabold text-white mt-1">Track Existing Request</h2>
              <p className="text-xs text-slate-400 mt-1">Enter your Ticket ID (e.g. TICK-8021) to check real-time resolution progress.</p>
            </div>

            <form onSubmit={handleSearchTicket} className="flex gap-2">
              <input
                type="text"
                value={searchTicketId}
                onChange={(e) => setSearchTicketId(e.target.value)}
                placeholder="Enter Ticket ID (e.g. TICK-8021)"
                required
                className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 font-mono"
              />
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors flex items-center gap-1.5"
              >
                <Search className="w-4 h-4" />
                <span>Track</span>
              </button>
            </form>

            {/* Display search result */}
            {searchedTicket === 'NOT_FOUND' && (
              <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-center text-xs text-rose-300">
                No active ticket found with ID "{searchTicketId}". Please check the ID or contact support.
              </div>
            )}

            {searchedTicket && searchedTicket !== 'NOT_FOUND' && (
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div>
                    <span className="font-mono font-bold text-sm text-blue-400">{searchedTicket.id}</span>
                    <h4 className="text-base font-bold text-white mt-0.5">{searchedTicket.subject}</h4>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                    searchedTicket.status === 'Resolved'
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : searchedTicket.status === 'In Progress'
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                      : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }`}>
                    {searchedTicket.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-400 block">Category</span>
                    <span className="text-slate-200 font-semibold">{searchedTicket.category}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Submitted On</span>
                    <span className="text-slate-200 font-semibold">{searchedTicket.createdAt}</span>
                  </div>
                </div>

                <div className="text-xs">
                  <span className="text-slate-400 block mb-1">Issue Description</span>
                  <p className="p-3 rounded-lg bg-slate-900 text-slate-300 border border-slate-800">
                    {searchedTicket.message}
                  </p>
                </div>
              </div>
            )}

            {/* Existing tickets list */}
            <div className="pt-4 border-t border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">All Active Tickets ({tickets.length})</h4>
              <div className="space-y-2">
                {tickets.map((t) => (
                  <div
                    key={t.id}
                    onClick={() => {
                      setSearchTicketId(t.id);
                      setSearchedTicket(t);
                    }}
                    className="p-3 rounded-xl bg-slate-950 hover:bg-slate-850 border border-slate-800/80 flex items-center justify-between text-xs cursor-pointer transition-colors"
                  >
                    <div>
                      <span className="font-mono text-blue-400 font-semibold mr-2">{t.id}</span>
                      <span className="text-white font-medium">{t.subject}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-800 text-slate-300">
                      {t.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      )}

      {/* Emergency Hotlines Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-bold text-white">Emergency Fraud & Card Blocking Hotline</h5>
              <p className="text-slate-400">Available 24/7/365 with immediate biometric freeze.</p>
            </div>
          </div>
          <span className="text-base font-extrabold text-rose-400 font-mono tracking-wider">
            +1 800-555-LOCK (5625)
          </span>
        </div>
      </section>

    </div>
  );
};
