import React from 'react';
import { useBanking } from '../context/BankingContext';
import { 
  Briefcase, 
  TrendingUp, 
  Globe2, 
  CreditCard, 
  Building2, 
  Check, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export const BusinessBankingPage: React.FC = () => {
  const { navigate } = useBanking();

  const businessProducts = [
    {
      id: 'accounts',
      title: 'Current & Business Accounts',
      tagline: 'Multi-currency corporate liquidity management.',
      badge: 'Multi-Currency',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
      icon: <Briefcase className="w-5 h-5 text-[#97144d]" />,
      features: [
        'Dedicated treasury sub-accounts for tax, payroll, and ops',
        'Multi-currency accounts supporting USD, EUR, GBP, SGD & INR',
        'Granular multi-user permissions and approval workflows',
        'Seamless integration with QuickBooks, SAP, and Stripe'
      ],
      btnText: 'Open Business Account'
    },
    {
      id: 'loans',
      title: 'Commercial Credit & Loans',
      tagline: 'Capital lines for rapid enterprise scaling.',
      badge: 'Up to $5,000,000',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80',
      icon: <TrendingUp className="w-5 h-5 text-[#97144d]" />,
      features: [
        'Flexible working capital lines with pay-per-use interest',
        'Equipment & technology lease financing up to 10-year tenures',
        'Subsidized priority sector credit facilities',
        'Decision turnaround within 48 hours for verified entities'
      ],
      btnText: 'Apply for Commercial Credit'
    },
    {
      id: 'trade',
      title: 'Trade Finance & Forex',
      tagline: 'Cross-border clearing, LCs and hedging.',
      badge: 'Worldwide Network',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
      icon: <Globe2 className="w-5 h-5 text-[#97144d]" />,
      features: [
        'Irrevocable Letters of Credit (LC) & Bank Guarantees (BG)',
        'Import & Export bill discounting with competitive spreads',
        'Hedging instruments and Forward Contracts for FX volatility',
        'SWIFT automated real-time status and customs tracking'
      ],
      btnText: 'Explore Trade Instruments'
    },
    {
      id: 'merchant',
      title: 'Merchant POS & Gateway',
      tagline: 'Omnichannel payment collection hardware.',
      badge: 'Same-Day Settlement',
      image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80',
      icon: <CreditCard className="w-5 h-5 text-[#97144d]" />,
      features: [
        'Smart Android POS terminals with touch screen & tap-to-pay',
        'Seamless digital checkout integrations for online businesses',
        'Dynamic Bharat/UPI QR codes with instant zero-fee settlement',
        'Automated chargeback defense and PCI-DSS Level 1 compliance'
      ],
      btnText: 'Deploy Merchant Terminals'
    },
    {
      id: 'corporate',
      title: 'Corporate Institutional Banking',
      tagline: 'Tailored for large global conglomerates.',
      badge: 'Bespoke Advisory',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
      icon: <Building2 className="w-5 h-5 text-[#97144d]" />,
      features: [
        'Dedicated senior Corporate Relationship Manager and desk',
        'Comprehensive liquidity pooling and sweeps optimization',
        'Automated bulk payroll processing for 100,000+ employees',
        'Escrow services and syndicated loan facilities'
      ],
      btnText: 'Schedule Institutional Consult'
    },
    {
      id: 'corporate-cards',
      title: 'Commercial & Corporate Cards',
      tagline: 'High-limit credit lines with real-time spend control.',
      badge: 'Zero Forex Markup',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
      icon: <CreditCard className="w-5 h-5 text-[#97144d]" />,
      features: [
        'Custom multi-level spending limits per team or employee',
        'Automated real-time receipt capture and expense reconciliation',
        'Zero foreign currency transaction markup on international travel',
        'Complimentary worldwide airport lounge access & travel cover'
      ],
      btnText: 'Apply for Corporate Cards'
    }
  ];

  return (
    <div className="space-y-24 pb-20 bg-[#fbf9fa]">
      
      {/* Hero Section matching diagram */}
      <section className="relative pt-12 md:pt-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="down">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fdf2f6] border border-[#97144d]/20 text-[#97144d] text-xs font-black uppercase tracking-wider mb-4">
              <Building2 className="w-3.5 h-3.5" />
              <span>Commercial & Enterprise Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
              Business Banking
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mt-4 max-w-2xl mx-auto font-normal">
              Powering businesses towards a brighter future with bespoke liquidity and automated treasury.
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <button
                onClick={() => navigate('/open-account')}
                className="btn-shimmer px-6 py-3 rounded-xl bg-gradient-to-r from-[#97144d] to-[#ca8a04] hover:brightness-105 text-white font-bold text-sm transition-all flex items-center gap-2 shadow-md shadow-[#97144d]/30"
              >
                <span>Open Business Account</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm transition-all border border-slate-200 shadow-sm dark:bg-[#1a0a14] dark:hover:bg-[#251020] dark:text-slate-100 dark:border-[#97144d]/30"
              >
                Contact Corporate Desk
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5 Core Offerings matching diagram with ScrollReveal & Imagery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessProducts.map((prod, idx) => (
            <ScrollReveal key={prod.id} direction="up" delay={idx * 100}>
              <div className="rounded-3xl bg-white border border-slate-200/90 hover:border-[#97144d]/40 transition-all duration-300 flex flex-col justify-between group shadow-[0_10px_30px_-5px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_35px_-8px_rgba(151,20,77,0.12)] hover:-translate-y-2 h-full overflow-hidden dark:bg-[#150912] dark:border-[#97144d]/25">
                {/* Visual Imagery Header */}
                <div className="h-44 w-full overflow-hidden relative">
                  <img 
                    src={prod.image} 
                    alt={prod.title} 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                  <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-white/90 dark:bg-[#180a14]/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                    {prod.icon}
                  </div>
                  <span className="absolute top-3 right-3 text-xs font-black px-2.5 py-1 rounded-full bg-white/95 dark:bg-[#1a0b15]/95 text-[#97144d] dark:text-[#f43f5e] shadow-sm">
                    {prod.badge}
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
                      onClick={() => navigate('/open-account')}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-[#97144d] text-slate-800 hover:text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 border border-slate-200 hover:border-[#97144d] dark:bg-[#1d0e19] dark:hover:bg-[#97144d] dark:text-slate-200 dark:border-[#97144d]/30"
                    >
                      <span>{prod.btnText}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

    </div>
  );
};
