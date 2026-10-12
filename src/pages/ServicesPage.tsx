import React, { useState } from 'react';
import { useBanking } from '../context/BankingContext';
import { 
  SendHorizontal, 
  Receipt, 
  Smartphone, 
  TrendingUp, 
  ShieldCheck, 
  KeyRound, 
  ArrowRight,
  Zap
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export const ServicesPage: React.FC = () => {
  const { user, transferFunds, payBill, showToast, navigate } = useBanking();

  // Active tab to highlight/interact with services
  const [selectedService, setSelectedService] = useState<'transfer' | 'bill' | 'recharge' | 'invest' | 'insurance' | 'locker'>('transfer');

  // Transfer Form State
  const [transferAmount, setTransferAmount] = useState('250');
  const [recipientName, setRecipientName] = useState('Sarah Jenkins');
  const [recipientAcct, setRecipientAcct] = useState('4092 5519 2201');
  const [transferMode, setTransferMode] = useState<'IMPS' | 'NEFT' | 'UPI' | 'RTGS'>('IMPS');

  // Bill Pay State
  const [billCategory, setBillCategory] = useState('Electricity');
  const [provider, setProvider] = useState('PowerGrid Utilities');
  const [billAmount, setBillAmount] = useState('85.50');

  // Recharge State
  const [mobileNum, setMobileNum] = useState('+1 (555) 019-2834');
  const [rechargeOperator, setRechargeOperator] = useState('Vodafone-Idea / Airtel');
  const [planAmount, setPlanAmount] = useState('45');

  // Locker Booking State
  const [lockerCity, setLockerCity] = useState('Axis-Tier New York HQ');
  const [lockerSize, setLockerSize] = useState('Medium Vault (15x20 in)');

  const handleExecuteTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    const amt = parseFloat(transferAmount);
    if (isNaN(amt) || amt <= 0) {
      showToast('Invalid Amount', 'Please enter a valid transfer amount.', 'warning');
      return;
    }
    const success = transferFunds(amt, recipientName, recipientAcct, transferMode);
    if (success) {
      setTransferAmount('');
    }
  };

  const handleExecuteBillPay = (e: React.FormEvent) => {
    e.preventDefault();
    const amt = parseFloat(billAmount);
    if (isNaN(amt) || amt <= 0) {
      showToast('Invalid Amount', 'Please enter a valid bill amount.', 'warning');
      return;
    }
    const success = payBill(billCategory, provider, amt);
    if (success) {
      setBillAmount('');
    }
  };

  const handleExecuteRecharge = (e: React.FormEvent) => {
    e.preventDefault();
    const amt = parseFloat(planAmount);
    if (isNaN(amt) || amt <= 0) return;
    const success = payBill('Mobile Recharge', rechargeOperator, amt);
    if (success) {
      showToast('Recharge Successful', `Top-up of $${amt} applied to ${mobileNum}`, 'success');
    }
  };

  const handleBookLocker = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Locker Reserved', `Safe deposit vault reserved at ${lockerCity} (${lockerSize}). Biometric access code generated.`, 'success');
  };

  const serviceCards = [
    {
      id: 'transfer',
      title: 'Funds Transfer',
      desc: 'NEFT, RTGS, IMPS, UPI',
      detail: 'Instant cross-network settlement with zero transaction fees and real-time confirmations.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80',
      icon: <SendHorizontal className="w-5 h-5 text-[#97144d]" />
    },
    {
      id: 'bill',
      title: 'Bill Payments',
      desc: 'Electricity, Water, Mobile, DTH',
      detail: 'Pay recurring utility bills with automated fetch, instant confirmations, and cashback rewards.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80',
      icon: <Receipt className="w-5 h-5 text-[#97144d]" />
    },
    {
      id: 'recharge',
      title: 'Recharge',
      desc: 'Mobile, DTH, FASTag',
      detail: 'Instant prepaid recharges across all national telecom carriers and highway toll tags.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80',
      icon: <Smartphone className="w-5 h-5 text-[#97144d]" />
    },
    {
      id: 'invest',
      title: 'Investments',
      desc: 'Mutual Funds, SIP, Bonds',
      detail: 'Axis-grade asset management, automated recurring SIP plans, and sovereign backed bonds.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80',
      icon: <TrendingUp className="w-5 h-5 text-[#97144d]" />
    },
    {
      id: 'insurance',
      title: 'Insurance',
      desc: 'Life, Health, Vehicle Insurance',
      detail: 'Comprehensive policies underwritten with paperless fast claims settlement in 15 minutes.',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80',
      icon: <ShieldCheck className="w-5 h-5 text-[#97144d]" />
    },
    {
      id: 'locker',
      title: 'Locker Services',
      desc: 'Keep your valuables safe',
      detail: 'Biometric military-grade vault lockers with 24/7 video surveillance and dual-key security.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
      icon: <KeyRound className="w-5 h-5 text-[#97144d]" />
    }
  ];

  return (
    <div className="space-y-24 pb-20 bg-[#fbf9fa]">
      
      {/* Hero Section matching diagram */}
      <section className="relative pt-12 md:pt-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="down">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fdf2f6] border border-[#97144d]/20 text-[#97144d] text-xs font-black uppercase tracking-wider mb-4">
              <Zap className="w-3.5 h-3.5" />
              <span>Digital Banking Capabilities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
              Our Services
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mt-4 max-w-2xl mx-auto font-normal">
              A complete range of banking solutions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 6 Core Services Grid matching diagram with ScrollReveal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((srv, idx) => (
            <ScrollReveal key={srv.id} direction="up" delay={idx * 80}>
              <div
                onClick={() => setSelectedService(srv.id as any)}
                className={`rounded-3xl cursor-pointer transition-all duration-300 border flex flex-col justify-between shadow-sm h-full overflow-hidden ${
                  selectedService === srv.id
                    ? 'bg-gradient-to-br from-[#fdf2f6] via-white to-[#fbf0f5] border-[#97144d] shadow-md shadow-[#97144d]/15 -translate-y-1.5'
                    : 'bg-white border-slate-200/90 hover:border-[#97144d]/40 hover:-translate-y-1'
                }`}
              >
                {/* Visual Image Header */}
                <div className="h-36 w-full overflow-hidden relative">
                  <img 
                    src={srv.image} 
                    alt={srv.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                    {srv.icon}
                  </div>
                  {selectedService === srv.id && (
                    <span className="absolute top-3 right-3 text-[10px] uppercase font-black tracking-wider px-2.5 py-0.5 rounded-full bg-[#97144d] text-white shadow-sm">
                      Active Tool
                    </span>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-black text-slate-900">{srv.title}</h3>
                    <p className="text-xs font-bold text-[#97144d] mt-1">{srv.desc}</p>
                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed font-normal">{srv.detail}</p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                    <span>{selectedService === srv.id ? 'Using Tool Below' : 'Launch Service'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#97144d]" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Interactive Service Tool Sandbox with ScrollReveal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-[0_20px_45px_-10px_rgba(151,20,77,0.08)] relative overflow-hidden">
            
            {/* Funds Transfer Interactive Panel */}
            {selectedService === 'transfer' && (
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="text-center">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#97144d]">Live Simulator</span>
                  <h2 className="text-2xl font-black text-slate-900 mt-1">Instant Funds Transfer</h2>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    Available Balance: <span className="text-emerald-700 font-bold font-mono">${(user?.balance ?? 0).toLocaleString()}</span>
                  </p>
                </div>

                <form onSubmit={handleExecuteTransfer} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Transfer Mode</label>
                    <div className="grid grid-cols-4 gap-2">
                      {(['IMPS', 'NEFT', 'UPI', 'RTGS'] as const).map((mode) => (
                        <button
                          key={mode}
                          type="button"
                          onClick={() => setTransferMode(mode)}
                          className={`py-2 text-xs font-black rounded-xl border transition-all ${
                            transferMode === mode
                              ? 'bg-[#97144d] text-white border-[#97144d] shadow-sm'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {mode}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Recipient Full Name</label>
                      <input
                        type="text"
                        value={recipientName}
                        onChange={(e) => setRecipientName(e.target.value)}
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#97144d] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Recipient Account / UPI ID</label>
                      <input
                        type="text"
                        value={recipientAcct}
                        onChange={(e) => setRecipientAcct(e.target.value)}
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#97144d] focus:bg-white font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Amount ($ USD)</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                      <input
                        type="number"
                        value={transferAmount}
                        onChange={(e) => setTransferAmount(e.target.value)}
                        placeholder="0.00"
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#97144d] focus:bg-white font-black"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-shimmer w-full py-3.5 rounded-xl bg-gradient-to-r from-[#97144d] via-[#ba1e63] to-[#ca8a04] hover:brightness-105 text-white font-black text-sm shadow-md shadow-[#97144d]/25 transition-all flex items-center justify-center gap-2"
                  >
                    <SendHorizontal className="w-4 h-4" />
                    <span>Execute {transferMode} Transfer Now</span>
                  </button>
                </form>
              </div>
            )}

            {/* Bill Payments Interactive Panel */}
            {selectedService === 'bill' && (
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="text-center">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#97144d]">Utility Settlement</span>
                  <h2 className="text-2xl font-black text-slate-900 mt-1">Instant Bill Payment</h2>
                </div>

                <form onSubmit={handleExecuteBillPay} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Bill Category</label>
                    <div className="grid grid-cols-4 gap-2">
                      {['Electricity', 'Water', 'Mobile', 'DTH'].map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setBillCategory(cat)}
                          className={`py-2 text-xs font-black rounded-xl border transition-all ${
                            billCategory === cat
                              ? 'bg-[#97144d] text-white border-[#97144d]'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Biller Provider</label>
                      <input
                        type="text"
                        value={provider}
                        onChange={(e) => setProvider(e.target.value)}
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#97144d]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Bill Amount ($)</label>
                      <input
                        type="number"
                        value={billAmount}
                        onChange={(e) => setBillAmount(e.target.value)}
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#97144d] font-bold"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-shimmer w-full py-3.5 rounded-xl bg-gradient-to-r from-[#97144d] to-[#ca8a04] hover:brightness-105 text-white font-black text-sm shadow-md shadow-[#97144d]/25 transition-all flex items-center justify-center gap-2"
                  >
                    <Receipt className="w-4 h-4" />
                    <span>Authorize Bill Payment</span>
                  </button>
                </form>
              </div>
            )}

            {/* Recharge Interactive Panel */}
            {selectedService === 'recharge' && (
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="text-center">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#97144d]">Prepaid Top-Up</span>
                  <h2 className="text-2xl font-black text-slate-900 mt-1">Prepaid Mobile & FASTag</h2>
                </div>

                <form onSubmit={handleExecuteRecharge} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone Number / FASTag ID</label>
                      <input
                        type="text"
                        value={mobileNum}
                        onChange={(e) => setMobileNum(e.target.value)}
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#97144d]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Telecom Carrier</label>
                      <input
                        type="text"
                        value={rechargeOperator}
                        onChange={(e) => setRechargeOperator(e.target.value)}
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#97144d]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Select Recharge Plan</label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { amt: '25', desc: '5GB Data + Unlimited Voice (30 Days)' },
                        { amt: '45', desc: '15GB 5G + Roaming Pack (60 Days)' },
                        { amt: '75', desc: 'Unlimited 5G Data Pack (90 Days)' },
                      ].map((plan) => (
                        <div
                          key={plan.amt}
                          onClick={() => setPlanAmount(plan.amt)}
                          className={`p-3 rounded-2xl border cursor-pointer text-center transition-all ${
                            planAmount === plan.amt
                              ? 'bg-[#fdf2f6] border-[#97144d] text-slate-900 shadow-sm'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-[#97144d]/30'
                          }`}
                        >
                          <span className="text-lg font-black text-[#97144d] font-mono">${plan.amt}</span>
                          <p className="text-[10px] text-slate-500 mt-1">{plan.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-shimmer w-full py-3.5 rounded-xl bg-gradient-to-r from-[#97144d] to-[#ca8a04] hover:brightness-105 text-white font-black text-sm shadow-md shadow-[#97144d]/25 transition-all flex items-center justify-center gap-2"
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>Execute Recharge</span>
                  </button>
                </form>
              </div>
            )}

            {/* Investments Panel */}
            {selectedService === 'invest' && (
              <div className="text-center space-y-6 max-w-xl mx-auto">
                <div className="w-16 h-16 rounded-2xl bg-[#fdf2f6] border border-[#97144d]/20 text-[#97144d] flex items-center justify-center mx-auto">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-black text-slate-900">Axis-Tier Wealth & Mutual Funds</h2>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Explore zero-commission Direct Mutual Funds, automated SIP engines, and sovereign bonds with real-time portfolio tracking.
                </p>
                <button
                  onClick={() => navigate('/investments')}
                  className="btn-shimmer px-6 py-3 rounded-xl bg-gradient-to-r from-[#97144d] to-[#ca8a04] text-white font-bold text-sm transition-all shadow-md"
                >
                  Go to Dedicated Investments Page
                </button>
              </div>
            )}

            {/* Insurance Panel */}
            {selectedService === 'insurance' && (
              <div className="text-center space-y-6 max-w-xl mx-auto">
                <div className="w-16 h-16 rounded-2xl bg-[#fdf2f6] border border-[#97144d]/20 text-[#97144d] flex items-center justify-center mx-auto">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-black text-slate-900">Protect What Matters Most</h2>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Comprehensive term life policies up to $2,000,000, family health cover with zero co-pay, and collision auto insurance.
                </p>
                <button
                  onClick={() => navigate('/contact')}
                  className="btn-shimmer px-6 py-3 rounded-xl bg-gradient-to-r from-[#97144d] to-[#ca8a04] text-white font-bold text-sm transition-all shadow-md"
                >
                  Get Custom Insurance Quote
                </button>
              </div>
            )}

            {/* Locker Services Panel */}
            {selectedService === 'locker' && (
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="text-center">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#97144d]">Vault Security</span>
                  <h2 className="text-2xl font-black text-slate-900 mt-1">Book a Secure Deposit Locker</h2>
                </div>

                <form onSubmit={handleBookLocker} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Select Branch Vault</label>
                      <select
                        value={lockerCity}
                        onChange={(e) => setLockerCity(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#97144d]"
                      >
                        <option>Axis-Tier New York HQ (Lexington Ave)</option>
                        <option>San Francisco (California St)</option>
                        <option>Chicago Downtown (Wacker Dr)</option>
                        <option>London Tech Hub (Bank St)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Locker Dimensions</label>
                      <select
                        value={lockerSize}
                        onChange={(e) => setLockerSize(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#97144d]"
                      >
                        <option>Small (10x15 in) - $120/yr</option>
                        <option>Medium Vault (15x20 in) - $220/yr</option>
                        <option>Large Vault (24x30 in) - $400/yr</option>
                        <option>Burgundy Executive Safe - $950/yr</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-shimmer w-full py-3.5 rounded-xl bg-gradient-to-r from-[#97144d] to-[#ca8a04] hover:brightness-105 text-white font-black text-sm shadow-md shadow-[#97144d]/25 transition-all flex items-center justify-center gap-2"
                  >
                    <KeyRound className="w-4 h-4" />
                    <span>Reserve Vault Locker</span>
                  </button>
                </form>
              </div>
            )}

          </div>
        </ScrollReveal>
      </section>

    </div>
  );
};
