import React, { useState } from 'react';
import { useBanking } from '../context/BankingContext';
import { 
  PiggyBank, 
  Wallet, 
  TrendingUp, 
  Landmark, 
  CreditCard, 
  ArrowRight, 
  Check, 
  Percent, 
  ShieldCheck, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

export const PersonalBankingPage: React.FC = () => {
  const { navigate } = useBanking();

  // 5 core services from diagram
  const personalProducts = [
    {
      id: 'savings',
      title: 'Savings Account',
      tagline: 'Grow your money securely.',
      rate: '5.25% APY',
      icon: <PiggyBank className="w-6 h-6 text-blue-400" />,
      features: [
        'Zero minimum balance requirement',
        'Daily compound interest credited quarterly',
        'Unlimited free ATM withdrawals globally',
        'Complimentary virtual debit card on signup'
      ],
      action: '/open-account',
      btnText: 'Open Savings Account'
    },
    {
      id: 'current',
      title: 'Current Account',
      tagline: 'For your daily transactions.',
      rate: 'Zero Fee',
      icon: <Wallet className="w-6 h-6 text-cyan-400" />,
      features: [
        'High daily transaction & withdrawal limits',
        'Seamless multi-device digital net banking',
        'Integrated auto-pay for utilities and subscriptions',
        'Custom personalized cheque book & statement reports'
      ],
      action: '/open-account',
      btnText: 'Open Current Account'
    },
    {
      id: 'fd',
      title: 'Fixed Deposit',
      tagline: 'Higher returns, greater security.',
      rate: 'Up to 7.85% p.a.',
      icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
      features: [
        'Flexible tenures from 7 days to 10 years',
        'Guaranteed capital preservation & returns',
        'Instant liquidity with overdraft up to 90% against FD',
        'Additional 0.50% interest bonus for senior citizens'
      ],
      action: '/investments',
      btnText: 'Explore Fixed Deposits'
    },
    {
      id: 'loans',
      title: 'Loans',
      tagline: 'Personal, Home, and Education Loans.',
      rate: 'From 6.85% p.a.',
      icon: <Landmark className="w-6 h-6 text-indigo-400" />,
      features: [
        'Quick digital sanctions in less than 24 hours',
        'Zero foreclosure charges on floating rate terms',
        'Loan amounts up to $1,000,000 with flexible tenures',
        'Minimal documentation with instant income verification'
      ],
      action: '/loans',
      btnText: 'Calculate & Apply for Loans'
    },
    {
      id: 'cards',
      title: 'Debit & Credit Cards',
      tagline: 'Spend smarter, everywhere.',
      rate: 'Up to 5% Cashback',
      icon: <CreditCard className="w-6 h-6 text-violet-400" />,
      features: [
        'Zero international foreign transaction fees',
        'Airport lounge access across 1,200+ global lounges',
        'Instant virtual cards for disposable, secure web shopping',
        'Comprehensive purchase protection and travel insurance'
      ],
      action: '/open-account',
      btnText: 'Apply for NexCard'
    }
  ];

  // Quick FD Return Calculator widget
  const [fdAmount, setFdAmount] = useState(10000);
  const [fdMonths, setFdMonths] = useState(12);
  const fdRate = 0.075;
  const estimatedReturn = Math.round(fdAmount * (1 + (fdRate * fdMonths) / 12));
  const interestEarned = estimatedReturn - fdAmount;

  return (
    <div className="space-y-20 pb-20">
      
      {/* Hero Section matching diagram */}
      <section className="relative pt-12 md:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <PiggyBank className="w-3.5 h-3.5" />
            <span>Retail Financial Services</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Personal Banking
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 mt-4 max-w-2xl mx-auto font-light">
            Banking solutions for your everyday needs.
          </p>
        </div>
      </section>

      {/* 5 Core Offerings Cards matching diagram */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalProducts.map((prod) => (
            <div
              key={prod.id}
              className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 group-hover:bg-blue-600/20 border border-slate-700/80 flex items-center justify-center transition-colors">
                    {prod.icon}
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {prod.rate}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {prod.title}
                </h3>
                <p className="text-sm font-medium text-slate-400 mt-1">
                  {prod.tagline}
                </p>

                <ul className="mt-6 space-y-2.5 text-xs text-slate-300">
                  {prod.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <button
                  onClick={() => navigate(prod.action)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>{prod.btnText}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {/* Quick FD Growth Interactive Mini-Calculator Card */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-950/60 via-slate-900 to-slate-900 border border-blue-500/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Interactive Estimator</span>
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Fixed Deposit Quick Estimator</h3>
              <p className="text-xs text-slate-400 mt-1">Simulate guaranteed returns on deposits.</p>

              <div className="mt-6 space-y-4">
                <div>
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>Deposit Amount</span>
                    <span className="font-bold text-white">${fdAmount.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="100000"
                    step="1000"
                    value={fdAmount}
                    onChange={(e) => setFdAmount(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>Tenure</span>
                    <span className="font-bold text-white">{fdMonths} Months</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="60"
                    step="3"
                    value={fdMonths}
                    onChange={(e) => setFdMonths(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                </div>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex justify-between items-center text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Maturity Value</span>
                    <span className="text-base font-black text-emerald-400">${estimatedReturn.toLocaleString()}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 block text-[10px]">Total Interest</span>
                    <span className="text-xs font-bold text-cyan-300">+${interestEarned.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <button
                onClick={() => navigate('/open-account')}
                className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors text-center"
              >
                Lock In 7.85% APY Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Credit & Debit Card Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">NexCard Signature Metal</span>
            <h2 className="text-3xl font-extrabold text-white">Spend, Save, & Earn Worldwide</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Crafted from 18g blackened stainless steel. Enjoy unlimited 2% cash back on all daily purchases, 5% on flights and hotels, comprehensive primary rental car insurance, and zero foreign currency conversion fees.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-blue-400 font-bold block text-sm">0%</span>
                <span className="text-slate-400">Foreign Exchange Fee</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-cyan-400 font-bold block text-sm">1,200+</span>
                <span className="text-slate-400">Global Airport Lounges</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-emerald-400 font-bold block text-sm">$0</span>
                <span className="text-slate-400">Annual Fee in Year 1</span>
              </div>
            </div>
            <div className="pt-4">
              <button
                onClick={() => navigate('/open-account')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-sm transition-all"
              >
                Claim Your Card
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            {/* Realistic Black Metal Card Mockup */}
            <div className="w-full max-w-sm h-56 rounded-2xl bg-gradient-to-tr from-slate-950 via-slate-900 to-blue-950 p-6 border border-slate-700/80 shadow-2xl relative overflow-hidden flex flex-col justify-between group hover:rotate-1 transition-transform">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
              
              <div className="flex justify-between items-center relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xs font-black">
                    N
                  </div>
                  <span className="font-bold tracking-wider text-sm text-white">NexBank Signature</span>
                </div>
                <div className="w-10 h-7 rounded-md bg-amber-400/80 border border-amber-300 flex items-center justify-center opacity-80">
                  <div className="w-6 h-4 border border-amber-800/40 rounded-sm"></div>
                </div>
              </div>

              <div className="space-y-1 relative z-10 font-mono tracking-widest text-slate-200 text-sm sm:text-base">
                <span>4111 •••• •••• 9081</span>
              </div>

              <div className="flex justify-between items-end relative z-10 text-xs text-slate-300">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">Card Holder</span>
                  <span className="font-semibold tracking-wider text-white">ARYAMAN TOMAR</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">Expires</span>
                  <span className="font-mono text-white">10/31</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
