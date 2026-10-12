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
  ChevronRight,
  Crown,
  Award
} from 'lucide-react';

export const PersonalBankingPage: React.FC = () => {
  const { navigate } = useBanking();

  // 5 core services from diagram with Axis Bank Burgundy styling
  const personalProducts = [
    {
      id: 'savings',
      title: 'Burgundy Savings Account',
      tagline: 'Grow your wealth with premier privileges.',
      rate: '5.25% - 7.10% APY',
      icon: <PiggyBank className="w-6 h-6 text-gold-400" />,
      features: [
        'Dedicated Burgundy Relationship Manager',
        'Daily compound interest credited quarterly',
        'Complimentary worldwide ATM withdrawals with zero markup',
        'Complimentary virtual and contactless metal card'
      ],
      action: '/open-account',
      btnText: 'Open Savings Account'
    },
    {
      id: 'current',
      title: 'Current Account',
      tagline: 'For seamless daily transactions.',
      rate: 'Zero Fee',
      icon: <Wallet className="w-6 h-6 text-[#ea7ea6]" />,
      features: [
        'High daily transaction & withdrawal limits',
        'Seamless multi-device digital net banking',
        'Integrated auto-pay for utilities and billers',
        'Custom personalized cheque book & instant e-statements'
      ],
      action: '/open-account',
      btnText: 'Open Current Account'
    },
    {
      id: 'fd',
      title: 'Axis-Tier Fixed Deposit',
      tagline: 'Higher returns, capital guarantee.',
      rate: 'Up to 7.85% p.a.',
      icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
      features: [
        'Flexible tenures from 7 days to 10 years',
        'Guaranteed capital preservation & sovereign safety',
        'Instant liquidity with overdraft up to 90% against FD',
        'Additional 0.50% interest bonus for senior citizens'
      ],
      action: '/investments',
      btnText: 'Explore Fixed Deposits'
    },
    {
      id: 'loans',
      title: 'Retail Loans',
      tagline: 'Personal, Home, and Education Loans.',
      rate: 'From 6.85% p.a.',
      icon: <Landmark className="w-6 h-6 text-amber-300" />,
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
      title: 'Burgundy Metal Cards',
      tagline: 'Spend smarter, everywhere.',
      rate: 'Up to 5% Cashback',
      icon: <CreditCard className="w-6 h-6 text-pink-300" />,
      features: [
        'Zero international foreign currency exchange fees',
        'Airport lounge access across 1,200+ global lounges',
        'Instant virtual cards for disposable, secure web shopping',
        'Comprehensive travel insurance & golf course privileges'
      ],
      action: '/open-account',
      btnText: 'Apply for Burgundy Card'
    }
  ];

  // Quick FD Return Calculator widget
  const [fdAmount, setFdAmount] = useState(10000);
  const [fdMonths, setFdMonths] = useState(12);
  const fdRate = 0.0785;
  const estimatedReturn = Math.round(fdAmount * (1 + (fdRate * fdMonths) / 12));
  const interestEarned = estimatedReturn - fdAmount;

  return (
    <div className="space-y-20 pb-20">
      
      {/* Hero Section matching diagram */}
      <section className="relative pt-12 md:pt-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#97144d]/30 to-amber-500/20 border border-[#97144d]/50 text-gold-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Crown className="w-3.5 h-3.5" />
            <span>Axis Inspired Retail Banking</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Personal Banking
          </h1>
          <p className="text-lg sm:text-xl text-pink-100/70 mt-4 max-w-2xl mx-auto font-normal">
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
              className="p-8 rounded-3xl bg-[#1b0513]/90 border border-[#97144d]/30 hover:border-[#ea7ea6] transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-[#97144d]/25 hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#2b081e] group-hover:bg-[#97144d] border border-[#97144d]/40 flex items-center justify-center transition-all group-hover:scale-110">
                    {prod.icon}
                  </div>
                  <span className="text-xs font-black px-2.5 py-1 rounded-full bg-[#97144d]/30 text-gold-300 border border-[#97144d]/50">
                    {prod.rate}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white group-hover:text-gold-300 transition-colors">
                  {prod.title}
                </h3>
                <p className="text-sm font-medium text-pink-200/60 mt-1">
                  {prod.tagline}
                </p>

                <ul className="mt-6 space-y-2.5 text-xs text-pink-100/80">
                  {prod.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-[#97144d]/30">
                <button
                  onClick={() => navigate(prod.action)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#26071a] hover:bg-[#97144d] text-pink-100 hover:text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 border border-[#97144d]/40"
                >
                  <span>{prod.btnText}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {/* Quick FD Growth Interactive Mini-Calculator Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#3b061d] via-[#1c0410] to-[#250516] border border-amber-400/40 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-xl pointer-events-none"></div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black uppercase tracking-wider text-gold-400">Fixed Deposit Estimator</span>
                <Sparkles className="w-4 h-4 text-gold-400" />
              </div>
              <h3 className="text-xl font-black text-white">Axis 7.85% FD Growth</h3>
              <p className="text-xs text-pink-200/60 mt-1">Simulate guaranteed returns on deposits.</p>

              <div className="mt-6 space-y-4">
                <div>
                  <div className="flex justify-between text-xs text-pink-100 mb-1">
                    <span>Deposit Amount</span>
                    <span className="font-bold text-white font-mono">${fdAmount.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="100000"
                    step="1000"
                    value={fdAmount}
                    onChange={(e) => setFdAmount(Number(e.target.value))}
                    className="w-full accent-[#97144d] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs text-pink-100 mb-1">
                    <span>Tenure</span>
                    <span className="font-bold text-gold-300 font-mono">{fdMonths} Months</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="60"
                    step="3"
                    value={fdMonths}
                    onChange={(e) => setFdMonths(Number(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                </div>

                <div className="p-3 rounded-2xl bg-[#11030b] border border-[#97144d]/40 flex justify-between items-center text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Maturity Value</span>
                    <span className="text-base font-black text-emerald-400 font-mono">${estimatedReturn.toLocaleString()}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 block text-[10px]">Total Interest Earned</span>
                    <span className="text-xs font-bold text-gold-300 font-mono">+${interestEarned.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#97144d]/30">
              <button
                onClick={() => navigate('/open-account')}
                className="btn-shimmer w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#97144d] to-amber-500 hover:brightness-110 text-white font-bold text-xs transition-all text-center shadow-md shadow-[#97144d]/30"
              >
                Lock In 7.85% APY Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Credit & Debit Card Showcase with Axis Burgundy Private metal styling */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#240616] via-[#14030e] to-[#200514] border border-[#97144d]/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-400">Exclusive Luxury Privilege</span>
            <h2 className="text-3xl font-black text-white">NexBank Burgundy Metal Card</h2>
            <p className="text-sm text-pink-100/70 leading-relaxed font-normal">
              Forged from 18g blackened stainless steel and finished in signature Axis Burgundy tones. Enjoy unlimited 2% cash back on all daily purchases, 5% on flights and luxury hotels, complimentary worldwide lounge access, and zero foreign currency markup.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-xs">
              <div className="p-3 rounded-2xl bg-[#1a0410] border border-[#97144d]/40">
                <span className="text-gold-400 font-bold block text-sm">0%</span>
                <span className="text-pink-200/60">Forex Markup Fee</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#1a0410] border border-[#97144d]/40">
                <span className="text-[#ea7ea6] font-bold block text-sm">1,200+</span>
                <span className="text-pink-200/60">Airport Lounges</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#1a0410] border border-[#97144d]/40">
                <span className="text-emerald-400 font-bold block text-sm">$0</span>
                <span className="text-pink-200/60">Annual Fee in Year 1</span>
              </div>
            </div>
            <div className="pt-4">
              <button
                onClick={() => navigate('/open-account')}
                className="btn-shimmer px-6 py-3 rounded-xl bg-gradient-to-r from-[#97144d] to-amber-500 text-white font-bold text-sm shadow-lg shadow-[#97144d]/40 transition-all"
              >
                Claim Your Burgundy Card
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            {/* Realistic Blackened Burgundy Metal Card Mockup */}
            <div className="w-full max-w-sm h-56 rounded-2xl bg-gradient-to-tr from-[#3a061d] via-[#740e3a] to-[#97144d] p-6 border border-amber-400/40 shadow-2xl relative overflow-hidden flex flex-col justify-between group hover:rotate-2 transition-transform duration-300">
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400/20 rounded-full blur-2xl"></div>
              
              <div className="flex justify-between items-center relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-black/40 border border-amber-400/50 flex items-center justify-center text-gold-300 text-xs font-black">
                    N
                  </div>
                  <span className="font-extrabold tracking-wider text-xs text-gold-200">BURGUNDY PRIVATE</span>
                </div>
                {/* Gold chip */}
                <div className="w-10 h-7 rounded-md bg-gradient-to-tr from-amber-300 to-amber-500 border border-amber-200 flex items-center justify-center">
                  <div className="w-6 h-4 border border-amber-800/40 rounded-sm"></div>
                </div>
              </div>

              <div className="space-y-1 relative z-10 font-mono tracking-widest text-gold-100 text-sm sm:text-base font-bold drop-shadow">
                <span>4111 •••• •••• 9081</span>
              </div>

              <div className="flex justify-between items-end relative z-10 text-xs text-pink-200">
                <div>
                  <span className="text-[9px] text-pink-300/60 block uppercase font-bold">Card Holder</span>
                  <span className="font-extrabold tracking-wider text-white">ARYAMAN TOMAR</span>
                </div>
                <div>
                  <span className="text-[9px] text-pink-300/60 block uppercase font-bold">Expires</span>
                  <span className="font-mono text-gold-300 font-bold">10/31</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
