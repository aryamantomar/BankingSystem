import React, { useState } from 'react';
import { useBanking } from '../context/BankingContext';
import { 
  SendHorizontal, 
  Receipt, 
  Smartphone, 
  TrendingUp, 
  ShieldCheck, 
  KeyRound, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Lock,
  DollarSign
} from 'lucide-react';

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
  const [provider, setProvider] = useState('ConEdison Energy');
  const [billAmount, setBillAmount] = useState('85.50');

  // Recharge State
  const [mobileNum, setMobileNum] = useState('+1 (555) 019-2834');
  const [rechargeOperator, setRechargeOperator] = useState('Verizon Wireless');
  const [planAmount, setPlanAmount] = useState('45');

  // Locker Booking State
  const [lockerCity, setLockerCity] = useState('New York HQ');
  const [lockerSize, setLockerSize] = useState('Medium (15x20 in)');

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
    showToast('Locker Reserved', `Safe deposit vault reserved at ${lockerCity} (${lockerSize}). Check your email for access codes.`, 'success');
  };

  // 6 Services from diagram
  const serviceCards = [
    {
      id: 'transfer',
      title: 'Funds Transfer',
      desc: 'NEFT, RTGS, IMPS, UPI',
      detail: 'Instant cross-network settlement with zero transaction surcharges and automated receipt generation.',
      icon: <SendHorizontal className="w-6 h-6 text-blue-400" />
    },
    {
      id: 'bill',
      title: 'Bill Payments',
      desc: 'Electricity, Water, Mobile, DTH',
      detail: 'Pay recurring utility bills with automated fetch, instant confirmations, and cashback rewards.',
      icon: <Receipt className="w-6 h-6 text-cyan-400" />
    },
    {
      id: 'recharge',
      title: 'Recharge',
      desc: 'Mobile, DTH, FASTag',
      detail: 'Instant prepaid recharges across all national mobile carriers and toll tags with 1-click repeat.',
      icon: <Smartphone className="w-6 h-6 text-emerald-400" />
    },
    {
      id: 'invest',
      title: 'Investments',
      desc: 'Mutual Funds, SIP, Bonds',
      detail: 'Institutional wealth management, automated recurring SIP plans, and sovereign backed bonds.',
      icon: <TrendingUp className="w-6 h-6 text-indigo-400" />
    },
    {
      id: 'insurance',
      title: 'Insurance',
      desc: 'Life, Health, Vehicle Insurance',
      detail: 'Comprehensive policies underwritten by global partners with paperless claims in 15 minutes.',
      icon: <ShieldCheck className="w-6 h-6 text-amber-400" />
    },
    {
      id: 'locker',
      title: 'Locker Services',
      desc: 'Keep your valuables safe',
      detail: 'Biometric military-grade vault lockers with 24/7 video surveillance and dual-key security.',
      icon: <KeyRound className="w-6 h-6 text-rose-400" />
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      
      {/* Hero Section matching diagram */}
      <section className="relative pt-12 md:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Digital Banking Capabilities</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 mt-4 max-w-2xl mx-auto font-light">
            A complete range of banking solutions.
          </p>
        </div>
      </section>

      {/* 6 Core Services Grid matching diagram */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((srv) => (
            <div
              key={srv.id}
              onClick={() => setSelectedService(srv.id as any)}
              className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border flex flex-col justify-between ${
                selectedService === srv.id
                  ? 'bg-blue-950/40 border-blue-500 shadow-lg shadow-blue-500/10'
                  : 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                    {srv.icon}
                  </div>
                  {selectedService === srv.id && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                      Active Tool
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white">{srv.title}</h3>
                <p className="text-xs font-semibold text-blue-400 mt-1">{srv.desc}</p>
                <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">{srv.detail}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-300">
                <span>{selectedService === srv.id ? 'Using Tool Below' : 'Launch Service'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Service Tool Sandbox */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
          
          {/* Funds Transfer Interactive Panel */}
          {selectedService === 'transfer' && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Live Simulator</span>
                <h2 className="text-2xl font-extrabold text-white mt-1">Instant Funds Transfer</h2>
                <p className="text-xs text-slate-400 mt-1">
                  Available Balance: <span className="text-emerald-400 font-bold">${(user?.balance ?? 0).toLocaleString()}</span>
                </p>
              </div>

              <form onSubmit={handleExecuteTransfer} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Transfer Mode</label>
                  <div className="grid grid-cols-4 gap-2">
                    {(['IMPS', 'NEFT', 'UPI', 'RTGS'] as const).map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setTransferMode(mode)}
                        className={`py-2 text-xs font-bold rounded-lg border transition-colors ${
                          transferMode === mode
                            ? 'bg-blue-600 text-white border-blue-500'
                            : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Recipient Full Name</label>
                    <input
                      type="text"
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      required
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Recipient Account / UPI ID</label>
                    <input
                      type="text"
                      value={recipientAcct}
                      onChange={(e) => setRecipientAcct(e.target.value)}
                      required
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Amount ($ USD)</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                    <input
                      type="number"
                      value={transferAmount}
                      onChange={(e) => setTransferAmount(e.target.value)}
                      placeholder="0.00"
                      required
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-8 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 font-semibold"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
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
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Utility Portal</span>
                <h2 className="text-2xl font-extrabold text-white mt-1">Instant Bill Payment</h2>
                <p className="text-xs text-slate-400 mt-1">Direct settlement with verified utilities.</p>
              </div>

              <form onSubmit={handleExecuteBillPay} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Bill Category</label>
                  <div className="grid grid-cols-4 gap-2">
                    {['Electricity', 'Water', 'Mobile', 'DTH'].map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setBillCategory(cat)}
                        className={`py-2 text-xs font-bold rounded-lg border transition-colors ${
                          billCategory === cat
                            ? 'bg-cyan-600 text-white border-cyan-500'
                            : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Biller / Service Provider</label>
                    <input
                      type="text"
                      value={provider}
                      onChange={(e) => setProvider(e.target.value)}
                      required
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Bill Amount ($)</label>
                    <input
                      type="number"
                      value={billAmount}
                      onChange={(e) => setBillAmount(e.target.value)}
                      required
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 font-semibold"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
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
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Instant Top-Up</span>
                <h2 className="text-2xl font-extrabold text-white mt-1">Prepaid Mobile & FASTag Recharge</h2>
              </div>

              <form onSubmit={handleExecuteRecharge} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Phone Number / Tag ID</label>
                    <input
                      type="text"
                      value={mobileNum}
                      onChange={(e) => setMobileNum(e.target.value)}
                      required
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Carrier Operator</label>
                    <input
                      type="text"
                      value={rechargeOperator}
                      onChange={(e) => setRechargeOperator(e.target.value)}
                      required
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Select Recharge Plan</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { amt: '25', desc: '5GB Data + Unlimited Calls (30 Days)' },
                      { amt: '45', desc: '15GB 5G + Roaming Pack (60 Days)' },
                      { amt: '75', desc: 'Unlimited 5G Data Pack (90 Days)' },
                    ].map((plan) => (
                      <div
                        key={plan.amt}
                        onClick={() => setPlanAmount(plan.amt)}
                        className={`p-3 rounded-xl border cursor-pointer text-center ${
                          planAmount === plan.amt
                            ? 'bg-emerald-950/40 border-emerald-500 text-white'
                            : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <span className="text-lg font-bold text-emerald-400">${plan.amt}</span>
                        <p className="text-[10px] text-slate-400 mt-1">{plan.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
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
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-white">NexBank Wealth & Mutual Funds</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Explore zero-commission Direct Mutual Funds, automated SIP engines, and sovereign bonds with real-time portfolio tracking.
              </p>
              <button
                onClick={() => navigate('/investments')}
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors"
              >
                Go to Dedicated Investments Page
              </button>
            </div>
          )}

          {/* Insurance Panel */}
          {selectedService === 'insurance' && (
            <div className="text-center space-y-6 max-w-xl mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-white">Protect What Matters Most</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Comprehensive term life policies up to $2,000,000, family health cover with zero co-pay, and collision auto insurance.
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm transition-colors"
              >
                Get Custom Insurance Quote
              </button>
            </div>
          )}

          {/* Locker Services Panel */}
          {selectedService === 'locker' && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-400">Vault Infrastructure</span>
                <h2 className="text-2xl font-extrabold text-white mt-1">Book a Secure Deposit Locker</h2>
              </div>

              <form onSubmit={handleBookLocker} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Select Branch Vault</label>
                    <select
                      value={lockerCity}
                      onChange={(e) => setLockerCity(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-rose-500"
                    >
                      <option>New York HQ (Lexington Ave)</option>
                      <option>San Francisco (California St)</option>
                      <option>Chicago Downtown (Wacker Dr)</option>
                      <option>London Tech Hub (Bank St)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Locker Dimensions</label>
                    <select
                      value={lockerSize}
                      onChange={(e) => setLockerSize(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-rose-500"
                    >
                      <option>Small (10x15 in) - $120/yr</option>
                      <option>Medium (15x20 in) - $220/yr</option>
                      <option>Large (24x30 in) - $400/yr</option>
                      <option>Executive Walk-in Safe - $950/yr</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm shadow-lg shadow-rose-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <KeyRound className="w-4 h-4" />
                  <span>Reserve Vault Locker</span>
                </button>
              </form>
            </div>
          )}

        </div>
      </section>

    </div>
  );
};
