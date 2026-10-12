import React, { useState } from 'react';
import { useBanking } from '../context/BankingContext';
import { 
  PiggyBank, 
  Wallet, 
  TrendingUp, 
  Landmark, 
  CreditCard, 
  Check, 
  Sparkles,
  ChevronRight,
  Crown
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { BankCardArt } from '../components/BankCardArt';

export const PersonalBankingPage: React.FC = () => {
  const { navigate } = useBanking();

  const personalProducts = [
    {
      id: 'savings',
      title: 'Premier Savings Account',
      tagline: 'Grow your wealth with premier privileges.',
      rate: '5.25% - 7.10% APY',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600&q=80',
      icon: <PiggyBank className="w-5 h-5 text-[#97144d]" />,
      features: [
        'Dedicated Private Relationship Manager',
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
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80',
      icon: <Wallet className="w-5 h-5 text-[#97144d]" />,
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
      title: 'High-Yield Fixed Deposit',
      tagline: 'Higher returns, capital guarantee.',
      rate: 'Up to 7.85% p.a.',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=600&q=80',
      icon: <TrendingUp className="w-5 h-5 text-[#97144d]" />,
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
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
      icon: <Landmark className="w-5 h-5 text-[#97144d]" />,
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
      title: 'Premier Metal Cards',
      tagline: 'Spend smarter, everywhere.',
      rate: 'Up to 5% Cashback',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80',
      icon: <CreditCard className="w-5 h-5 text-[#97144d]" />,
      features: [
        'Zero international foreign currency exchange fees',
        'Airport lounge access across 1,200+ global lounges',
        'Instant virtual cards for disposable, secure web shopping',
        'Comprehensive travel insurance & golf course privileges'
      ],
      action: '/open-account',
      btnText: 'Apply for Premier Card'
    }
  ];

  // Quick FD Return Calculator widget
  const [fdAmount, setFdAmount] = useState(10000);
  const [fdMonths, setFdMonths] = useState(12);
  const fdRate = 0.0785;
  const estimatedMaturity = Math.round(fdAmount * Math.pow(1 + fdRate / 4, (4 * fdMonths) / 12));
  const estimatedInterest = estimatedMaturity - fdAmount;

  return (
    <div className="space-y-24 pb-20 bg-[#fbf9fa]">
      
      {/* Hero Section matching diagram */}
      <section className="relative pt-12 md:pt-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="down">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fdf2f6] border border-[#97144d]/20 text-[#97144d] text-xs font-black uppercase tracking-wider mb-4 shadow-sm">
              <Crown className="w-3.5 h-3.5" />
              <span>Premier Everyday Banking</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
              Personal Banking
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mt-4 max-w-2xl mx-auto font-normal">
              Banking solutions crafted for your life, your aspirations, and your daily financial freedom.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 5 Core Offerings Cards matching diagram with ScrollReveal & Imagery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalProducts.map((prod, idx) => (
            <ScrollReveal key={prod.id} direction="up" delay={idx * 100}>
              <div className="rounded-3xl bg-white border border-slate-200/90 hover:border-[#97144d]/40 transition-all duration-300 flex flex-col justify-between group shadow-[0_10px_30px_-5px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_35px_-8px_rgba(151,20,77,0.12)] hover:-translate-y-2 h-full overflow-hidden">
                {/* Product Card Image Header */}
                <div className="h-44 w-full overflow-hidden relative">
                  <img 
                    src={prod.image} 
                    alt={prod.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                  <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-white/90 dark:bg-[#180a14]/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                    {prod.icon}
                  </div>
                  <span className="absolute top-3 right-3 text-xs font-black px-2.5 py-1 rounded-full bg-white/95 dark:bg-[#1a0b15]/95 text-[#97144d] dark:text-[#ff7597] shadow-sm border border-transparent dark:border-[#97144d]/30">
                    {prod.rate}
                  </span>
                </div>

                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-[#97144d] dark:group-hover:text-[#ff7597] transition-colors">
                      {prod.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
                      {prod.tagline}
                    </p>

                    <ul className="mt-5 space-y-2 text-xs text-slate-600 dark:text-slate-300 font-medium">
                      {prod.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#97144d] dark:text-[#ff7597] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-100 dark:border-[#97144d]/20">
                    <button
                      onClick={() => navigate(prod.action)}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-50 dark:bg-[#1d0e19] hover:bg-[#97144d] text-slate-800 dark:text-slate-200 hover:text-white dark:hover:text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 border border-slate-200 dark:border-[#97144d]/30 hover:border-[#97144d]"
                    >
                      <span>{prod.btnText}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* Quick FD Growth Interactive Mini-Calculator Card */}
          <ScrollReveal direction="up" delay={500}>
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#fdf6f9] via-white to-[#faf2f6] dark:from-[#1c0d19] dark:via-[#140811] dark:to-[#190a16] border border-[#97144d]/30 flex flex-col justify-between shadow-[0_15px_35px_-5px_rgba(151,20,77,0.1)] relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#97144d]/5 rounded-full blur-xl pointer-events-none"></div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-wider text-[#97144d]">Fixed Deposit Estimator</span>
                  <Sparkles className="w-4 h-4 text-amber-500" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">Calculate FD Returns</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">Guaranteed sovereign yield up to 7.85% compound p.a.</p>

                <div className="mt-6 space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                      <span>Deposit Amount</span>
                      <span className="text-[#97144d] dark:text-[#f43f5e] font-mono">${fdAmount.toLocaleString()}</span>
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
                    <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                      <span>Tenure</span>
                      <span className="text-[#97144d] dark:text-[#f43f5e] font-mono">{fdMonths} Months</span>
                    </div>
                    <input
                      type="range"
                      min="3"
                      max="60"
                      step="3"
                      value={fdMonths}
                      onChange={(e) => setFdMonths(Number(e.target.value))}
                      className="w-full accent-[#97144d] cursor-pointer"
                    />
                  </div>

                  <div className="p-4 rounded-2xl bg-white dark:bg-[#1a0c16] border border-[#97144d]/20 dark:border-[#97144d]/35 text-center space-y-1 shadow-sm">
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-black">Estimated Value at Maturity</span>
                    <div className="text-2xl font-black text-[#97144d] dark:text-amber-300 font-mono">
                      ${estimatedMaturity.toLocaleString()}
                    </div>
                    <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold block">
                      +${estimatedInterest.toLocaleString()} interest earned
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => navigate('/open-account')}
                  className="btn-shimmer w-full py-3 rounded-xl bg-gradient-to-r from-[#97144d] to-[#c52e69] text-white font-black text-xs shadow-md transition-all"
                >
                  Book Instant FD Now
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Premier Card Art Showcase inside Personal Banking */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-[0_20px_45px_-10px_rgba(151,20,77,0.08)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdf2f6] text-[#97144d] text-xs font-black uppercase tracking-wider">
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>Physical & Virtual Cards</span>
                </div>
                <h2 className="text-3xl font-black text-slate-900">
                  Everyday Cards Designed Like Art
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Every NexBank account includes an instant digital debit card ready for Apple Pay and Google Wallet, plus an optional laser-engraved metal physical card shipped directly to your door.
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-slate-700">
                  <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#97144d]" /> Zero Contactless Fraud Liability</span>
                  <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#97144d]" /> Dynamic CVV Generator</span>
                  <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#97144d]" /> Free Card Delivery</span>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm">
                  <BankCardArt
                    cardNumber="4111 2049 8810 5519"
                    cardHolder="ARYAMAN TOMAR"
                    expiry="12/32"
                    variant="obsidian"
                  />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
};
