import React, { useState } from 'react';
import { useBanking } from '../context/BankingContext';
import { ScrollReveal } from '../components/ScrollReveal';
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

  // 4 items from diagram with imagery
  const investmentProducts = [
    {
      id: 'mutual_funds',
      title: 'Premier Mutual Funds',
      desc: 'Expert-managed diversified equity & debt portfolios with zero entry and exit load on direct plans.',
      cagr: '14.8% 3Y Return',
      risk: 'Moderate',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80',
      icon: <TrendingUp className="w-5 h-5 text-[#97144d]" />
    },
    {
      id: 'fixed_deposits',
      title: 'Premier Fixed Deposits',
      desc: 'Guaranteed principal safety with up to 7.85% compound interest and flexible premature liquidity options.',
      cagr: 'Up to 7.85% APY',
      risk: 'Very Low',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=600&q=80',
      icon: <PiggyBank className="w-5 h-5 text-emerald-600" />
    },
    {
      id: 'bonds',
      title: 'Bonds & Sovereign Gold',
      desc: 'Sovereign and AAA corporate bonds providing predictable semi-annual coupon payouts and capital security.',
      cagr: '7.10% Coupon',
      risk: 'Low',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80',
      icon: <FileCheck className="w-5 h-5 text-amber-600" />
    },
    {
      id: 'gold',
      title: '24K Digital Gold',
      desc: '99.9% pure 24K digital gold and Sovereign Gold Bonds (SGB) with 2.5% annual interest plus gold price appreciation.',
      cagr: '12.4% 5Y Return',
      risk: 'Low to Moderate',
      image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=600&q=80',
      icon: <Coins className="w-5 h-5 text-amber-500" />
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
    showToast('SIP Registered!', `Automated monthly SIP of $${monthlySIP} started. Track in your Wealth Portfolio.`, 'success');
  };

  return (
    <div className="space-y-24 pb-20 bg-[#fbf9fa]">
      
      {/* Hero Section matching diagram */}
      <section className="relative pt-12 md:pt-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="down">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fdf2f6] border border-[#97144d]/20 text-[#97144d] text-xs font-black uppercase tracking-wider mb-4">
              <Crown className="w-3.5 h-3.5" />
              <span>Premier Wealth & Asset Management</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
              Start Investing Today
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mt-4 max-w-2xl mx-auto font-normal">
              Compound your wealth through commission-free direct mutual funds, digital gold, and high-yield fixed instruments.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 4 Core Investment Products matching diagram with Photography */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {investmentProducts.map((prod, idx) => (
            <ScrollReveal key={prod.id} direction="up" delay={idx * 100}>
              <div className="h-full rounded-3xl bg-white dark:bg-[#150912] border border-slate-200/90 dark:border-[#97144d]/25 hover:border-[#97144d]/40 transition-all duration-300 flex flex-col justify-between group shadow-[0_10px_30px_-5px_rgba(151,20,77,0.06)] hover:shadow-[0_20px_40px_-5px_rgba(151,20,77,0.12)] hover:-translate-y-1.5 overflow-hidden">
                {/* Visual Image Header */}
                <div className="h-40 w-full overflow-hidden relative">
                  <img 
                    src={prod.image} 
                    alt={prod.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                  <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-white/90 dark:bg-[#180a14]/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                    {prod.icon}
                  </div>
                  <span className="absolute top-3 right-3 text-[10px] font-black px-2.5 py-1 rounded-full bg-white/95 dark:bg-[#1a0b15]/95 text-[#97144d] dark:text-[#f43f5e] shadow-sm">
                    {prod.cagr}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-[#97144d] transition-colors">
                      {prod.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
                      {prod.desc}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-[#97144d]/20 flex justify-between items-center text-[11px]">
                      <span className="text-slate-400 font-medium">Risk Profile</span>
                      <span className="text-slate-800 dark:text-slate-200 font-bold">{prod.risk}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-[#97144d]/20">
                    <button
                      onClick={() => {
                        showToast('Fund Info', `Explore top-rated ${prod.title} with 0% brokerage fees.`, 'info');
                      }}
                      className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-[#97144d] text-slate-700 hover:text-white font-bold text-xs transition-all flex items-center justify-center gap-1 border border-slate-200 dark:bg-[#1d0e19] dark:hover:bg-[#97144d] dark:text-slate-200 dark:border-[#97144d]/30 group-hover:border-[#97144d]"
                    >
                      <span>Invest in {prod.title}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#97144d] group-hover:text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Interactive SIP Wealth Calculator Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#150912] border border-slate-200/90 dark:border-[#97144d]/25 shadow-[0_20px_45px_-10px_rgba(151,20,77,0.08)] relative overflow-hidden">
            <div className="max-w-2xl mx-auto text-center mb-10 relative z-10">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Systematic Investment Plan (SIP) Calculator</h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 font-normal">
                Discover the incredible power of regular compounding investments over time.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              {/* Sliders */}
              <div className="lg:col-span-7 space-y-6">
                {/* Monthly Deposit */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 dark:bg-[#1c0d19] dark:border-[#97144d]/20">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-slate-700">Monthly Contribution</span>
                    <span className="text-xl font-black text-[#97144d] font-mono">${monthlySIP.toLocaleString()} / mo</span>
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
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                    <span>$50/mo</span>
                    <span>$5,000/mo</span>
                    <span>$10,000/mo</span>
                  </div>
                </div>

                {/* Expected Returns */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 dark:bg-[#1c0d19] dark:border-[#97144d]/20">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-slate-700">Expected Annual Returns</span>
                    <span className="text-xl font-black text-amber-600 font-mono">{expectedReturnRate}% p.a.</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="25"
                    step="0.5"
                    value={expectedReturnRate}
                    onChange={(e) => setExpectedReturnRate(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                    <span>5% (Conservative)</span>
                    <span>12% (Index Returns)</span>
                    <span>25% (High Growth)</span>
                  </div>
                </div>

                {/* Duration */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 dark:bg-[#1c0d19] dark:border-[#97144d]/20">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-slate-700">Investment Horizon</span>
                    <span className="text-xl font-black text-emerald-600 font-mono">{durationYears} Years</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="35"
                    step="1"
                    value={durationYears}
                    onChange={(e) => setDurationYears(Number(e.target.value))}
                    className="w-full accent-emerald-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                    <span>1 Year</span>
                    <span>15 Years</span>
                    <span>35 Years</span>
                  </div>
                </div>
              </div>

              {/* Growth Result Card */}
              <div className="lg:col-span-5 p-8 rounded-3xl bg-gradient-to-br from-[#97144d] via-[#800f40] to-[#590a2d] text-center space-y-6 shadow-2xl text-white">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-amber-300">Total Estimated Wealth</span>
                  <div className="text-4xl sm:text-5xl font-black text-white mt-2 font-mono drop-shadow-sm">
                    ${totalFutureValue.toLocaleString()}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 space-y-3 text-left text-xs">
                  <div className="flex justify-between">
                    <span className="text-pink-100/80">Total Invested Amount</span>
                    <span className="text-white font-bold font-mono">${investedAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-pink-100/80">Estimated Returns Earned</span>
                    <span className="text-amber-300 font-bold font-mono">+${wealthGain.toLocaleString()}</span>
                  </div>
                  <div className="border-t border-white/20 pt-2 flex justify-between font-black text-sm">
                    <span className="text-pink-100">Wealth Multiplier</span>
                    <span className="text-amber-300">{(totalFutureValue / investedAmount).toFixed(1)}x Capital</span>
                  </div>
                </div>

                <button
                  onClick={handleStartSIP}
                  className="btn-shimmer w-full py-3.5 rounded-xl bg-white hover:bg-rose-50 text-[#97144d] font-black text-sm shadow-xl transition-all"
                >
                  Start Automated SIP of ${monthlySIP}/mo
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
};
