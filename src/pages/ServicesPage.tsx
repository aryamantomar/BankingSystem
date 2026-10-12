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
  Zap,
  Crown
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

  // 6 Services from diagram
  const serviceCards = [
    {
      id: 'transfer',
      title: 'Funds Transfer',
      desc: 'NEFT, RTGS, IMPS, UPI',
      detail: 'Instant cross-network settlement with zero transaction fees and real-time confirmations.',
      icon: <SendHorizontal className="w-6 h-6 text-gold-400" />
    },
    {
      id: 'bill',
      title: 'Bill Payments',
      desc: 'Electricity, Water, Mobile, DTH',
      detail: 'Pay recurring utility bills with automated fetch, instant confirmations, and cashback rewards.',
      icon: <Receipt className="w-6 h-6 text-[#ea7ea6]" />
    },
    {
      id: 'recharge',
      title: 'Recharge',
      desc: 'Mobile, DTH, FASTag',
      detail: 'Instant prepaid recharges across all national telecom carriers and highway toll tags.',
      icon: <Smartphone className="w-6 h-6 text-emerald-400" />
    },
    {
      id: 'invest',
      title: 'Investments',
      desc: 'Mutual Funds, SIP, Bonds',
      detail: 'Axis-grade asset management, automated recurring SIP plans, and sovereign backed bonds.',
      icon: <TrendingUp className="w-6 h-6 text-amber-300" />
    },
    {
      id: 'insurance',
      title: 'Insurance',
      desc: 'Life, Health, Vehicle Insurance',
      detail: 'Comprehensive policies underwritten with paperless fast claims settlement in 15 minutes.',
      icon: <ShieldCheck className="w-6 h-6 text-pink-300" />
    },
    {
      id: 'locker',
      title: 'Locker Services',
      desc: 'Keep your valuables safe',
      detail: 'Biometric military-grade vault lockers with 24/7 video surveillance and dual-key security.',
      icon: <KeyRound className="w-6 h-6 text-gold-300" />
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      
      {/* Hero Section matching diagram */}
      <section className="relative pt-12 md:pt-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#97144d]/30 to-amber-500/20 border border-[#97144d]/50 text-gold-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Digital Banking Capabilities</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl text-pink-100/70 mt-4 max-w-2xl mx-auto font-normal">
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
              className={`p-7 rounded-3xl cursor-pointer transition-all duration-300 border flex flex-col justify-between shadow-xl ${
                selectedService === srv.id
                  ? 'bg-gradient-to-br from-[#3b061d] via-[#1f0412] to-[#2b071a] border-[#ea7ea6] shadow-2xl shadow-[#97144d]/30 -translate-y-1'
                  : 'bg-[#1b0513]/90 border-[#97144d]/30 hover:border-[#ea7ea6]/60 hover:bg-[#25071a]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#2a071c] border border-[#97144d]/40 flex items-center justify-center">
                    {srv.icon}
                  </div>
                  {selectedService === srv.id && (
                    <span className="text-[10px] uppercase font-black tracking-wider px-2.5 py-0.5 rounded-full bg-[#97144d] text-gold-300 border border-amber-400/40">
                      Active Simulator
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-black text-white">{srv.title}</h3>
                <p className="text-xs font-bold text-gold-400 mt-1">{srv.desc}</p>
                <p className="text-xs text-pink-100/70 mt-2.5 leading-relaxed font-normal">{srv.detail}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#97144d]/30 flex items-center justify-between text-xs font-bold text-pink-200">
                <span>{selectedService === srv.id ? 'Using Tool Below' : 'Launch Service'}</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Service Tool Sandbox */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1d0514] border border-[#97144d]/40 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Funds Transfer Interactive Panel */}
          {selectedService === 'transfer' && (
            <div className="max-w-2xl mx-auto space-y-6 relative z-10">
              <div className="text-center">
                <span className="text-xs font-extrabold uppercase tracking-wider text-gold-400">Live Simulator</span>
                <h2 className="text-2xl font-black text-white mt-1">Instant Funds Transfer</h2>
                <p className="text-xs text-pink-200/70 mt-1">
                  Available Balance: <span className="text-emerald-400 font-bold font-mono">${(user?.balance ?? 0).toLocaleString()}</span>
                </p>
              </div>

              <form onSubmit={handleExecuteTransfer} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-pink-200 mb-1.5">Transfer Mode</label>
                  <div className="grid grid-cols-4 gap-2">
                    {(['IMPS', 'NEFT', 'UPI', 'RTGS'] as const).map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setTransferMode(mode)}
                        className={`py-2 text-xs font-black rounded-xl border transition-all ${
                          transferMode === mode
                            ? 'bg-gradient-to-r from-[#97144d] to-[#c52e69] text-white border-pink-400 shadow-md'
                            : 'bg-[#15040f] text-pink-200 border-[#97144d]/30 hover:bg-[#25071a]'
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-pink-200 mb-1.5">Recipient Full Name</label>
                    <input
                      type="text"
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      required
                      className="w-full bg-[#0f0209] border border-[#97144d]/40 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-pink-200 mb-1.5">Recipient Account / UPI ID</label>
                    <input
                      type="text"
                      value={recipientAcct}
                      onChange={(e) => setRecipientAcct(e.target.value)}
                      required
                      className="w-full bg-[#0f0209] border border-[#97144d]/40 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-pink-200 mb-1.5">Amount ($ USD)</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold-400 font-bold">$</span>
                    <input
                      type="number"
                      value={transferAmount}
                      onChange={(e) => setTransferAmount(e.target.value)}
                      placeholder="0.00"
                      required
                      className="w-full bg-[#0f0209] border border-[#97144d]/40 rounded-xl pl-8 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 font-black"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-shimmer w-full py-3.5 rounded-xl bg-gradient-to-r from-[#97144d] via-[#c52e69] to-amber-500 hover:brightness-110 text-white font-black text-sm shadow-xl shadow-[#97144d]/40 transition-all flex items-center justify-center gap-2"
                >
                  <SendHorizontal className="w-4 h-4" />
                  <span>Execute {transferMode} Transfer Now</span>
                </button>
              </form>
            </div>
          )}

          {/* Bill Payments Interactive Panel */}
          {selectedService === 'bill' && (
            <div className="max-w-2xl mx-auto space-y-6 relative z-10">
              <div className="text-center">
                <span className="text-xs font-extrabold uppercase tracking-wider text-gold-400">Utility Settlement</span>
                <h2 className="text-2xl font-black text-white mt-1">Instant Bill Payment</h2>
              </div>

              <form onSubmit={handleExecuteBillPay} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-pink-200 mb-1.5">Bill Category</label>
                  <div className="grid grid-cols-4 gap-2">
                    {['Electricity', 'Water', 'Mobile', 'DTH'].map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setBillCategory(cat)}
                        className={`py-2 text-xs font-black rounded-xl border transition-all ${
                          billCategory === cat
                            ? 'bg-gradient-to-r from-[#97144d] to-[#c52e69] text-white border-pink-400'
                            : 'bg-[#15040f] text-pink-200 border-[#97144d]/30 hover:bg-[#25071a]'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-pink-200 mb-1.5">Biller Provider</label>
                    <input
                      type="text"
                      value={provider}
                      onChange={(e) => setProvider(e.target.value)}
                      required
                      className="w-full bg-[#0f0209] border border-[#97144d]/40 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-pink-200 mb-1.5">Bill Amount ($)</label>
                    <input
                      type="number"
                      value={billAmount}
                      onChange={(e) => setBillAmount(e.target.value)}
                      required
                      className="w-full bg-[#0f0209] border border-[#97144d]/40 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 font-bold"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-shimmer w-full py-3.5 rounded-xl bg-gradient-to-r from-[#97144d] to-amber-500 hover:brightness-110 text-white font-black text-sm shadow-xl shadow-[#97144d]/40 transition-all flex items-center justify-center gap-2"
                >
                  <Receipt className="w-4 h-4" />
                  <span>Authorize Bill Payment</span>
                </button>
              </form>
            </div>
          )}

          {/* Recharge Interactive Panel */}
          {selectedService === 'recharge' && (
            <div className="max-w-2xl mx-auto space-y-6 relative z-10">
              <div className="text-center">
                <span className="text-xs font-extrabold uppercase tracking-wider text-gold-400">Prepaid Top-Up</span>
                <h2 className="text-2xl font-black text-white mt-1">Prepaid Mobile & FASTag</h2>
              </div>

              <form onSubmit={handleExecuteRecharge} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-pink-200 mb-1.5">Phone Number / FASTag ID</label>
                    <input
                      type="text"
                      value={mobileNum}
                      onChange={(e) => setMobileNum(e.target.value)}
                      required
                      className="w-full bg-[#0f0209] border border-[#97144d]/40 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-pink-200 mb-1.5">Telecom Carrier</label>
                    <input
                      type="text"
                      value={rechargeOperator}
                      onChange={(e) => setRechargeOperator(e.target.value)}
                      required
                      className="w-full bg-[#0f0209] border border-[#97144d]/40 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-pink-200 mb-1.5">Select Recharge Plan</label>
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
                            ? 'bg-[#3b061d] border-amber-400 text-white'
                            : 'bg-[#11030b] border-[#97144d]/30 text-pink-200 hover:border-pink-400'
                        }`}
                      >
                        <span className="text-lg font-black text-gold-400 font-mono">${plan.amt}</span>
                        <p className="text-[10px] text-pink-200/60 mt-1">{plan.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-shimmer w-full py-3.5 rounded-xl bg-gradient-to-r from-[#97144d] to-amber-500 hover:brightness-110 text-white font-black text-sm shadow-xl shadow-[#97144d]/40 transition-all flex items-center justify-center gap-2"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Execute Recharge</span>
                </button>
              </form>
            </div>
          )}

          {/* Investments Panel */}
          {selectedService === 'invest' && (
            <div className="text-center space-y-6 max-w-xl mx-auto relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-[#97144d]/20 border border-amber-400/40 text-gold-400 flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-black text-white">Axis-Tier Wealth & Mutual Funds</h2>
              <p className="text-sm text-pink-100/70 leading-relaxed font-normal">
                Explore zero-commission Direct Mutual Funds, automated SIP engines, and sovereign bonds with real-time portfolio tracking.
              </p>
              <button
                onClick={() => navigate('/investments')}
                className="btn-shimmer px-6 py-3 rounded-xl bg-gradient-to-r from-[#97144d] to-amber-500 text-white font-bold text-sm transition-all"
              >
                Go to Dedicated Investments Page
              </button>
            </div>
          )}

          {/* Insurance Panel */}
          {selectedService === 'insurance' && (
            <div className="text-center space-y-6 max-w-xl mx-auto relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-[#97144d]/20 border border-amber-400/40 text-gold-400 flex items-center justify-center mx-auto">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-black text-white">Protect What Matters Most</h2>
              <p className="text-sm text-pink-100/70 leading-relaxed font-normal">
                Comprehensive term life policies up to $2,000,000, family health cover with zero co-pay, and collision auto insurance.
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="btn-shimmer px-6 py-3 rounded-xl bg-gradient-to-r from-[#97144d] to-amber-500 text-white font-bold text-sm transition-all"
              >
                Get Custom Insurance Quote
              </button>
            </div>
          )}

          {/* Locker Services Panel */}
          {selectedService === 'locker' && (
            <div className="max-w-2xl mx-auto space-y-6 relative z-10">
              <div className="text-center">
                <span className="text-xs font-extrabold uppercase tracking-wider text-gold-400">Vault Security</span>
                <h2 className="text-2xl font-black text-white mt-1">Book a Secure Deposit Locker</h2>
              </div>

              <form onSubmit={handleBookLocker} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-pink-200 mb-1.5">Select Branch Vault</label>
                    <select
                      value={lockerCity}
                      onChange={(e) => setLockerCity(e.target.value)}
                      className="w-full bg-[#0f0209] border border-[#97144d]/40 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    >
                      <option>Axis-Tier New York HQ (Lexington Ave)</option>
                      <option>San Francisco (California St)</option>
                      <option>Chicago Downtown (Wacker Dr)</option>
                      <option>London Tech Hub (Bank St)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-pink-200 mb-1.5">Locker Dimensions</label>
                    <select
                      value={lockerSize}
                      onChange={(e) => setLockerSize(e.target.value)}
                      className="w-full bg-[#0f0209] border border-[#97144d]/40 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
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
                  className="btn-shimmer w-full py-3.5 rounded-xl bg-gradient-to-r from-[#97144d] to-amber-500 hover:brightness-110 text-white font-black text-sm shadow-xl shadow-[#97144d]/40 transition-all flex items-center justify-center gap-2"
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
