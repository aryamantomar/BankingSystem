import React from 'react';
import { useBanking } from '../context/BankingContext';
import { 
  Building2, 
  Briefcase, 
  Globe2, 
  CreditCard, 
  TrendingUp, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  ArrowRight,
  ChevronRight,
  Terminal,
  Zap
} from 'lucide-react';

export const BusinessBankingPage: React.FC = () => {
  const { navigate } = useBanking();

  // 5 core services from diagram
  const businessProducts = [
    {
      id: 'accounts',
      title: 'Business Accounts',
      tagline: 'Current & Savings Accounts.',
      badge: 'Multi-Currency',
      icon: <Briefcase className="w-6 h-6 text-blue-400" />,
      features: [
        'Dedicated treasury sub-accounts for tax, payroll, and ops',
        'Multi-currency accounts supporting USD, EUR, GBP, SGD & JPY',
        'Granular multi-user permissions and approval workflows',
        'Seamless integration with QuickBooks, Xero, and Stripe'
      ],
      btnText: 'Open Business Account'
    },
    {
      id: 'loans',
      title: 'Business Loans',
      tagline: 'For your business growth.',
      badge: 'Up to $5,000,000',
      icon: <TrendingUp className="w-6 h-6 text-cyan-400" />,
      features: [
        'Flexible working capital lines with pay-per-use interest',
        'Equipment & technology lease financing up to 10-year tenures',
        'SBA and government guaranteed subsidized credit facilities',
        'Decision turnaround within 48 hours for verified entities'
      ],
      btnText: 'Apply for Commercial Credit'
    },
    {
      id: 'trade',
      title: 'Trade Finance',
      tagline: 'Support for global trade.',
      badge: 'Worldwide Network',
      icon: <Globe2 className="w-6 h-6 text-emerald-400" />,
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
      title: 'Merchant Services',
      tagline: 'Easy payment solutions.',
      badge: 'Next-Day Payouts',
      icon: <CreditCard className="w-6 h-6 text-amber-400" />,
      features: [
        'Smart 5G Android POS terminals with touch screen & tap-to-pay',
        'Robust developer REST APIs and SDKs for e-commerce checkout',
        'Dynamic QR codes with instant zero-fee UPI/direct settlement',
        'Automated chargeback defense and PCI-DSS Level 1 compliance'
      ],
      btnText: 'Deploy Merchant Terminals'
    },
    {
      id: 'corporate',
      title: 'Corporate Banking',
      tagline: 'Tailored for large enterprises.',
      badge: 'Bespoke Advisory',
      icon: <Building2 className="w-6 h-6 text-violet-400" />,
      features: [
        'Dedicated senior Corporate Relationship Manager and team',
        'Comprehensive liquidity pooling and sweeps optimization',
        'Automated bulk payroll processing for 100,000+ employees',
        'Escrow services and syndicated loan facilities'
      ],
      btnText: 'Schedule Institutional Consult'
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      
      {/* Hero Section matching diagram */}
      <section className="relative pt-12 md:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>Commercial & Institutional Solutions</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Business Banking
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 mt-4 max-w-2xl mx-auto font-light">
            Powering businesses towards a brighter future.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => navigate('/open-account')}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors flex items-center gap-2"
            >
              <span>Open Business Account</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition-colors"
            >
              Contact Commercial Desk
            </button>
          </div>
        </div>
      </section>

      {/* 5 Core Offerings matching diagram */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessProducts.map((prod) => (
            <div
              key={prod.id}
              className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 group-hover:bg-cyan-600/20 border border-slate-700/80 flex items-center justify-center transition-colors">
                    {prod.icon}
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {prod.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {prod.title}
                </h3>
                <p className="text-sm font-medium text-slate-400 mt-1">
                  {prod.tagline}
                </p>

                <ul className="mt-6 space-y-2.5 text-xs text-slate-300">
                  {prod.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-cyan-600 text-slate-200 hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>{prod.btnText}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {/* Developer API & Merchant Terminal Callout */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950/50 to-slate-950 border border-slate-700/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
                <Terminal className="w-4 h-4" />
                <span>Developer-First Infrastructure</span>
              </div>
              <h3 className="text-xl font-bold text-white">NexBank Open API Suite</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Plug automated payout engines, corporate webhooks, and virtual IBAN generators directly into your existing ERP or web app.
              </p>

              <div className="mt-4 p-3 rounded-xl bg-slate-950 font-mono text-[11px] text-blue-300 border border-slate-800 space-y-1">
                <div className="text-slate-500">// Instant Corporate Transfer API</div>
                <div>POST https://api.nexbank.com/v2/payouts</div>
                <div className="text-emerald-400">{`{ "status": 200, "txnId": "NB_9921_OK" }`}</div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <button
                onClick={() => navigate('/contact')}
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors text-center"
              >
                Request Enterprise API Keys
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Scale stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-blue-400">$64 Billion+</span>
            <p className="text-xs text-slate-400 mt-1 uppercase font-semibold">Processed Annually</p>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-cyan-400">140,000+</span>
            <p className="text-xs text-slate-400 mt-1 uppercase font-semibold">Businesses Powered</p>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400">99.999%</span>
            <p className="text-xs text-slate-400 mt-1 uppercase font-semibold">Payment Engine SLA</p>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-violet-400">45+</span>
            <p className="text-xs text-slate-400 mt-1 uppercase font-semibold">Supported Currencies</p>
          </div>
        </div>
      </section>

    </div>
  );
};
