import React, { useState } from 'react';
import { useBanking } from '../context/BankingContext';
import { 
  TrendingUp, 
  Coins, 
  FileCheck, 
  PiggyBank, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  DollarSign, 
  BarChart3,
  ChevronRight
} from 'lucide-react';

export const InvestmentsPage: React.FC = () => {
  const { navigate, showToast } = useBanking();

  // 4 items from diagram
  const investmentProducts = [
    {
      id: 'mutual_funds',
      title: 'Mutual Funds',
      desc: 'Expert-managed diversified equity & debt portfolios with zero entry and exit load on direct plans.',
      cagr: '14.8% 3Y Return',
      risk: 'Moderate',
      icon: <TrendingUp className="w-6 h-6 text-blue-400" />
    },
    {
      id: 'fixed_deposits',
      title: 'Fixed Deposits',
      desc: 'Guaranteed principal safety with up to 7.85% compound interest and flexible premature liquidity options.',
      cagr: 'Up to 7.85% APY',
      risk: 'Very Low',
      icon: <PiggyBank className="w-6 h-6 text-emerald-400" />
    },
    {
      id: 'bonds',
      title: 'Bonds & Treasuries',
      desc: 'Sovereign and AAA corporate bonds providing predictable semi-annual coupon payouts and capital security.',
      cagr: '7.10% Coupon',
      risk: 'Low',
      icon: <FileCheck className="w-6 h-6 text-cyan-400" />
    },
    {
      id: 'gold',
      title: 'Gold Investment',
      desc: '99.9% pure 24K digital gold and Sovereign Gold Bonds (SGB) with 2.5% annual interest plus gold price appreciation.',
      cagr: '12.4% 5Y Return',
      risk: 'Low to Moderate',
      icon: <Coins className="w-6 h-6 text-amber-400" />
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
  // Future value of SIP: P * [ ( (1 + i)^n - 1 ) / i ] * (1 + i)
  const totalFutureValue = Math.round(
    monthlySIP *
    ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) *
    (1 + monthlyRate)
  );
  const wealthGain = totalFutureValue - investedAmount;

  const handleStartSIP = () => {
    showToast('SIP Registered!', `Automated monthly SIP of $${monthlySIP} started. Track in your Wealth Portfolio.`, 'success');
  };

  return (
    <div className="space-y-20 pb-20">
      
      {/* Hero Section matching diagram */}
      <section className="relative pt-12 md:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Wealth & Asset Management</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Start Investing Today
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 mt-4 max-w-2xl mx-auto font-light">
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
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 group-hover:bg-blue-600/20 border border-slate-700 flex items-center justify-center transition-colors">
                    {prod.icon}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {prod.cagr}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {prod.title}
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {prod.desc}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex justify-between items-center text-[11px]">
                  <span className="text-slate-500">Risk Profile</span>
                  <span className="text-slate-300 font-semibold">{prod.risk}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <button
                  onClick={() => {
                    showToast('Fund Info', `Explore top-rated ${prod.title} portfolios with 0% brokerage.`, 'info');
                  }}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1"
                >
                  <span>Invest in {prod.title}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive SIP Wealth Calculator Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Systematic Investment Plan (SIP) Calculator</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Discover the incredible power of regular compounding investments over time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Sliders */}
            <div className="lg:col-span-7 space-y-6">
              {/* Monthly Deposit */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold text-slate-300">Monthly Contribution</span>
                  <span className="text-xl font-black text-white font-mono">${monthlySIP.toLocaleString()} / mo</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="10000"
                  step="50"
                  value={monthlySIP}
                  onChange={(e) => setMonthlySIP(Number(e.target.value))}
                  className="w-full accent-blue-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>$50/mo</span>
                  <span>$5,000/mo</span>
                  <span>$10,000/mo</span>
                </div>
              </div>

              {/* Expected Returns */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold text-slate-300">Expected Annual Returns</span>
                  <span className="text-xl font-black text-cyan-400 font-mono">{expectedReturnRate}% p.a.</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="25"
                  step="0.5"
                  value={expectedReturnRate}
                  onChange={(e) => setExpectedReturnRate(Number(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>5% (Conservative)</span>
                  <span>12% (Equity Index)</span>
                  <span>25% (High Growth)</span>
                </div>
              </div>

              {/* Duration */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold text-slate-300">Investment Horizon</span>
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
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>1 Year</span>
                  <span>15 Years</span>
                  <span>35 Years</span>
                </div>
              </div>
            </div>

            {/* Growth Result Card */}
            <div className="lg:col-span-5 p-8 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-slate-950 border border-indigo-500/40 text-center space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Total Estimated Wealth</span>
                <div className="text-4xl sm:text-5xl font-black text-emerald-400 mt-2 font-mono">
                  ${totalFutureValue.toLocaleString()}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3 text-left text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Total Invested Amount</span>
                  <span className="text-white font-semibold">${investedAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Estimated Returns Earned</span>
                  <span className="text-emerald-400 font-semibold font-mono">+${wealthGain.toLocaleString()}</span>
                </div>
                <div className="border-t border-slate-800 pt-2 flex justify-between font-bold text-sm">
                  <span className="text-slate-300">Wealth Multiplier</span>
                  <span className="text-cyan-400">{(totalFutureValue / investedAmount).toFixed(1)}x Capital</span>
                </div>
              </div>

              <button
                onClick={handleStartSIP}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 transition-all"
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
