import React, { useState } from 'react';
import { useBanking } from '../context/BankingContext';
import { 
  TrendingUp, 
  Coins, 
  FileCheck, 
  PiggyBank, 
  Sparkles, 
  ChevronRight,
  Crown
} from 'lucide-react';

export const InvestmentsPage: React.FC = () => {
  const { navigate, showToast } = useBanking();

  // 4 items from diagram
  const investmentProducts = [
    {
      id: 'mutual_funds',
      title: 'Burgundy Mutual Funds',
      desc: 'Expert-managed diversified equity & debt portfolios with zero entry and exit load on direct plans.',
      cagr: '14.8% 3Y Return',
      risk: 'Moderate',
      icon: <TrendingUp className="w-6 h-6 text-gold-400" />
    },
    {
      id: 'fixed_deposits',
      title: 'Axis-Tier Fixed Deposits',
      desc: 'Guaranteed principal safety with up to 7.85% compound interest and flexible premature liquidity options.',
      cagr: 'Up to 7.85% APY',
      risk: 'Very Low',
      icon: <PiggyBank className="w-6 h-6 text-emerald-400" />
    },
    {
      id: 'bonds',
      title: 'Bonds & Sovereign Gold',
      desc: 'Sovereign and AAA corporate bonds providing predictable semi-annual coupon payouts and capital security.',
      cagr: '7.10% Coupon',
      risk: 'Low',
      icon: <FileCheck className="w-6 h-6 text-amber-300" />
    },
    {
      id: 'gold',
      title: '24K Digital Gold',
      desc: '99.9% pure 24K digital gold and Sovereign Gold Bonds (SGB) with 2.5% annual interest plus gold price appreciation.',
      cagr: '12.4% 5Y Return',
      risk: 'Low to Moderate',
      icon: <Coins className="w-6 h-6 text-yellow-400" />
    }
  ];

  // Interactive SIP Calculator State
  const [monthlySIP, setMonthlySIP] = useState(500);
  const [expectedReturnRate, setExpectedReturnRate] = useState(12);
  const [durationYears, setDurationYears] = useState(10);

  // Math for SIP
  const monthlyRate = expectedReturnRate / 12 / 100;
  const totalMonths = durationYears * 12;
  const investedAmount = monthlySIP * totalMonths;
  const totalFutureValue = Math.round(
    monthlySIP *
    ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) *
    (1 + monthlyRate)
  );
  const wealthGain = totalFutureValue - investedAmount;

  const handleStartSIP = () => {
    showToast('SIP Registered!', `Automated monthly SIP of $${monthlySIP} started. Track in your Burgundy Wealth Portfolio.`, 'success');
  };

  return (
    <div className="space-y-20 pb-20">
      
      {/* Hero Section matching diagram */}
      <section className="relative pt-12 md:pt-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#97144d]/30 to-amber-500/20 border border-[#97144d]/50 text-gold-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Crown className="w-3.5 h-3.5" />
            <span>Burgundy Wealth & Asset Management</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Start Investing Today
          </h1>
          <p className="text-lg sm:text-xl text-pink-100/70 mt-4 max-w-2xl mx-auto font-normal">
            Compound your wealth through commission-free direct mutual funds, digital gold, and high-yield fixed instruments.
          </p>
        </div>
      </section>

      {/* 4 Core Investment Products matching diagram */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {investmentProducts.map((prod) => (
            <div
              key={prod.id}
              className="p-7 rounded-3xl bg-[#1b0513]/90 border border-[#97144d]/30 hover:border-[#ea7ea6] transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-[#97144d]/25 hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#2a071c] group-hover:bg-[#97144d] border border-[#97144d]/40 flex items-center justify-center transition-all group-hover:scale-110">
                    {prod.icon}
                  </div>
                  <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-[#97144d]/30 text-gold-300 border border-[#97144d]/50">
                    {prod.cagr}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white group-hover:text-gold-300 transition-colors">
                  {prod.title}
                </h3>
                <p className="text-xs text-pink-100/70 mt-2 leading-relaxed font-normal">
                  {prod.desc}
                </p>

                <div className="mt-4 pt-3 border-t border-[#97144d]/30 flex justify-between items-center text-[11px]">
                  <span className="text-pink-300/60 font-medium">Risk Profile</span>
                  <span className="text-gold-200 font-bold">{prod.risk}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#97144d]/30">
                <button
                  onClick={() => {
                    showToast('Fund Info', `Explore top-rated ${prod.title} with 0% brokerage fees.`, 'info');
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#25071a] hover:bg-[#97144d] text-pink-100 hover:text-white font-bold text-xs transition-all flex items-center justify-center gap-1 border border-[#97144d]/40"
                >
                  <span>Invest in {prod.title}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-gold-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive SIP Wealth Calculator Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1d0514] border border-[#97144d]/40 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-2xl mx-auto text-center mb-10 relative z-10">
            <h2 className="text-2xl sm:text-3xl font-black text-white">Systematic Investment Plan (SIP) Calculator</h2>
            <p className="text-xs sm:text-sm text-pink-200/70 mt-2 font-normal">
              Discover the incredible power of regular compounding investments over time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Sliders */}
            <div className="lg:col-span-7 space-y-6">
              {/* Monthly Deposit */}
              <div className="p-5 rounded-2xl bg-[#11030b] border border-[#97144d]/40">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold text-pink-200">Monthly Contribution</span>
                  <span className="text-xl font-black text-white font-mono">${monthlySIP.toLocaleString()} / mo</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="10000"
                  step="50"
                  value={monthlySIP}
                  onChange={(e) => setMonthlySIP(Number(e.target.value))}
                  className="w-full accent-[#97144d] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-pink-300/60 mt-1 font-mono">
                  <span>$50/mo</span>
                  <span>$5,000/mo</span>
                  <span>$10,000/mo</span>
                </div>
              </div>

              {/* Expected Returns */}
              <div className="p-5 rounded-2xl bg-[#11030b] border border-[#97144d]/40">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold text-pink-200">Expected Annual Returns</span>
                  <span className="text-xl font-black text-gold-400 font-mono">{expectedReturnRate}% p.a.</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="25"
                  step="0.5"
                  value={expectedReturnRate}
                  onChange={(e) => setExpectedReturnRate(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-pink-300/60 mt-1 font-mono">
                  <span>5% (Conservative)</span>
                  <span>12% (Index Returns)</span>
                  <span>25% (High Growth)</span>
                </div>
              </div>

              {/* Duration */}
              <div className="p-5 rounded-2xl bg-[#11030b] border border-[#97144d]/40">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold text-pink-200">Investment Horizon</span>
                  <span className="text-xl font-black text-emerald-400 font-mono">{durationYears} Years</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="35"
                  step="1"
                  value={durationYears}
                  onChange={(e) => setDurationYears(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-pink-300/60 mt-1 font-mono">
                  <span>1 Year</span>
                  <span>15 Years</span>
                  <span>35 Years</span>
                </div>
              </div>
            </div>

            {/* Growth Result Card */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-gradient-to-br from-[#3b061d] via-[#220716] to-[#14030e] border border-amber-400/40 text-center space-y-6 shadow-2xl">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-gold-400">Total Estimated Wealth</span>
                <div className="text-4xl sm:text-5xl font-black text-emerald-400 mt-2 font-mono">
                  ${totalFutureValue.toLocaleString()}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#12030b] border border-[#97144d]/40 space-y-3 text-left text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Total Invested Amount</span>
                  <span className="text-white font-bold font-mono">${investedAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Estimated Returns Earned</span>
                  <span className="text-gold-300 font-bold font-mono">+${wealthGain.toLocaleString()}</span>
                </div>
                <div className="border-t border-[#97144d]/30 pt-2 flex justify-between font-black text-sm">
                  <span className="text-pink-100">Wealth Multiplier</span>
                  <span className="text-amber-400">{(totalFutureValue / investedAmount).toFixed(1)}x Capital</span>
                </div>
              </div>

              <button
                onClick={handleStartSIP}
                className="btn-shimmer w-full py-3.5 rounded-xl bg-gradient-to-r from-[#97144d] via-[#c52e69] to-amber-500 hover:brightness-110 text-white font-black text-sm shadow-xl shadow-[#97144d]/40 transition-all"
              >
                Start Automated SIP of ${monthlySIP}/mo
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
