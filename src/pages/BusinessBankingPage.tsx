import React from 'react';
import { useBanking } from '../context/BankingContext';
import { 
  Building2, 
  Briefcase, 
  Globe2, 
  CreditCard, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  ChevronRight,
  Terminal,
  Crown
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export const BusinessBankingPage: React.FC = () => {
  const { navigate } = useBanking();

  const businessProducts = [
    {
      id: 'accounts',
      title: 'Current & Business Accounts',
      tagline: 'Current & Savings Accounts.',
      badge: 'Multi-Currency',
      icon: <Briefcase className="w-6 h-6 text-[#97144d]" />,
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
      tagline: 'For your business growth.',
      badge: 'Up to $5,000,000',
      icon: <TrendingUp className="w-6 h-6 text-[#97144d]" />,
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
      tagline: 'Support for global trade.',
      badge: 'Worldwide Network',
      icon: <Globe2 className="w-6 h-6 text-[#97144d]" />,
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
      tagline: 'Easy payment solutions.',
      badge: 'Same-Day Settlement',
      icon: <CreditCard className="w-6 h-6 text-[#97144d]" />,
      features: [
        'Smart Android POS terminals with touch screen & tap-to-pay',
        'Developer REST APIs and SDKs for e-commerce checkout',
        'Dynamic Bharat/UPI QR codes with instant zero-fee settlement',
        'Automated chargeback defense and PCI-DSS Level 1 compliance'
      ],
      btnText: 'Deploy Merchant Terminals'
    },
    {
      id: 'corporate',
      title: 'Corporate Institutional Banking',
      tagline: 'Tailored for large enterprises.',
      badge: 'Bespoke Advisory',
      icon: <Building2 className="w-6 h-6 text-[#97144d]" />,
      features: [
        'Dedicated senior Corporate Relationship Manager and desk',
        'Comprehensive liquidity pooling and sweeps optimization',
        'Automated bulk payroll processing for 100,000+ employees',
        'Escrow services and syndicated loan facilities'
      ],
      btnText: 'Schedule Institutional Consult'
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
              Powering businesses towards a brighter future.
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
                className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm transition-all border border-slate-200 shadow-sm"
              >
                Contact Corporate Desk
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5 Core Offerings matching diagram with ScrollReveal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessProducts.map((prod, idx) => (
            <ScrollReveal key={prod.id} direction="up" delay={idx * 100}>
              <div className="p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-[#97144d]/40 transition-all duration-300 flex flex-col justify-between group shadow-[0_10px_30px_-5px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_35px_-8px_rgba(151,20,77,0.12)] hover:-translate-y-2 h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#fdf2f6] group-hover:bg-[#97144d] border border-[#97144d]/20 flex items-center justify-center transition-all group-hover:scale-110">
                      <span className="text-[#97144d] group-hover:text-white transition-colors">{prod.icon}</span>
                    </div>
                    <span className="text-xs font-black px-2.5 py-1 rounded-full bg-[#fdf2f6] text-[#97144d] border border-[#97144d]/20">
                      {prod.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 group-hover:text-[#97144d] transition-colors">
                    {prod.title}
                  </h3>
                  <p className="text-sm font-semibold text-slate-500 mt-1">
                    {prod.tagline}
                  </p>

                  <ul className="mt-6 space-y-2.5 text-xs text-slate-600 font-medium">
                    {prod.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#97144d] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <button
                    onClick={() => navigate('/contact')}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-[#97144d] text-slate-800 hover:text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 border border-slate-200 hover:border-[#97144d]"
                  >
                    <span>{prod.btnText}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* Developer API & Merchant Terminal Callout */}
          <ScrollReveal direction="up" delay={500}>
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#fdf6f9] via-white to-[#faf2f6] border border-[#97144d]/30 flex flex-col justify-between shadow-[0_15px_35px_-5px_rgba(151,20,77,0.1)] h-full">
              <div>
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#97144d] mb-2">
                  <Terminal className="w-4 h-4" />
                  <span>Developer & ERP Infrastructure</span>
                </div>
                <h3 className="text-xl font-black text-slate-900">NexBank Open API Suite</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
                  Plug automated payout engines, corporate webhooks, and virtual accounts directly into your existing ERP or web app.
                </p>

                <div className="mt-4 p-3.5 rounded-2xl bg-white font-mono text-[11px] text-slate-800 border border-slate-200 shadow-sm space-y-1">
                  <div className="text-slate-400">// Instant Corporate Transfer API</div>
                  <div>POST https://api.nexbank.com/v2/payouts</div>
                  <div className="text-emerald-600 font-bold">{`{ "status": 200, "txnId": "AXIS_9921_OK" }`}</div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <button
                  onClick={() => navigate('/contact')}
                  className="btn-shimmer w-full py-2.5 rounded-xl bg-gradient-to-r from-[#97144d] to-[#ca8a04] hover:brightness-105 text-white font-bold text-xs transition-all text-center shadow-md shadow-[#97144d]/25"
                >
                  Request Enterprise API Keys
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust & Scale stats with ScrollReveal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center shadow-[0_10px_30px_-5px_rgba(0,0,0,0.04)]">
            <div>
              <span className="text-3xl sm:text-4xl font-black text-[#97144d] font-mono">$64 Billion+</span>
              <p className="text-xs text-slate-500 mt-1 uppercase font-bold">Processed Annually</p>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-black text-slate-900 font-mono">140,000+</span>
              <p className="text-xs text-slate-500 mt-1 uppercase font-bold">Businesses Powered</p>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-black text-emerald-600 font-mono">99.999%</span>
              <p className="text-xs text-slate-500 mt-1 uppercase font-bold">Core Payment SLA</p>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-black text-amber-600 font-mono">45+</span>
              <p className="text-xs text-slate-500 mt-1 uppercase font-bold">Global Currencies</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
};
