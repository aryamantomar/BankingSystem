import React from 'react';
import { useBanking } from '../context/BankingContext';
import { 
  ShieldCheck, 
  Lock, 
  Headphones, 
  Globe2, 
  Award, 
  ArrowUpRight,
  ExternalLink
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate } = useBanking();

  const primaryLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Personal Banking', path: '/personal' },
    { label: 'Business Banking', path: '/business' },
    { label: 'Our Services', path: '/services' },
    { label: 'Customer Support', path: '/support' },
    { label: 'Login / Sign Up', path: '/login' },
  ];

  const importantPages = [
    { label: 'Account Opening', path: '/open-account' },
    { label: 'Loan Details & Calculator', path: '/loans' },
    { label: 'Investment & Wealth', path: '/investments' },
    { label: 'Contact Us & Branches', path: '/contact' },
    { label: 'Frequently Asked Questions', path: '/faq' },
    { label: 'Terms & Conditions', path: '/terms' },
    { label: 'Privacy Policy & Security', path: '/privacy' },
    { label: '404 Page Preview', path: '/404' },
  ];

  const serviceHighlights = [
    'Funds Transfer (NEFT, RTGS, IMPS, UPI)',
    'Bill Payments & Instant Recharge',
    'High Yield Fixed Deposits',
    'Home & Education Loans',
    'Merchant POS & Corporate Solutions',
    'Safe Deposit Locker Vaults'
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 text-sm">
      {/* Trust & Guarantee Banner */}
      <div className="border-b border-slate-900 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">FDIC / Regulatory Insured</h4>
                <p className="text-xs text-slate-400">Deposits protected up to $250,000</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">256-Bit SSL Encryption</h4>
                <p className="text-xs text-slate-400">Bank-grade end-to-end security</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Headphones className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">24/7 Dedicated Support</h4>
                <p className="text-xs text-slate-400">Toll-free hotline & live chat help</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Award-Winning Digital Tech</h4>
                <p className="text-xs text-slate-400">Best Fintech Banking Solution 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sitemap Grid matching the diagram */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/25">
                <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M4 3h4.2l7.8 11.5V3H20v18h-4.2L8 9.5V21H4V3z" />
                </svg>
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Nex<span className="text-blue-500">Bank</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              NexBank is engineered for modern individuals, forward-thinking startups, and global enterprises. Experience seamless banking, transparent lending, and intelligent investment solutions built for tomorrow.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>All banking systems operating normally (100% Uptime)</span>
              </p>
              <p>Customer Care: <span className="text-slate-200 font-semibold">+1 800-NEX-BANK</span></p>
              <p>Email: <span className="text-slate-200 font-semibold">support@nexbank.com</span></p>
            </div>
          </div>

          {/* Primary Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 border-b border-slate-800 pb-2">
              Primary Navigation
            </h3>
            <ul className="space-y-2.5">
              {primaryLinks.map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => navigate(item.path)}
                    className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-left text-sm"
                  >
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Important Pages */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 border-b border-slate-800 pb-2">
              Important Pages
            </h3>
            <ul className="space-y-2.5">
              {importantPages.map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => navigate(item.path)}
                    className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-left text-sm"
                  >
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Banking Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 border-b border-slate-800 pb-2">
              Banking Services
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              {serviceHighlights.map((srv, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-blue-500 font-bold">•</span>
                  <span>{srv}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 p-3 rounded-xl bg-slate-900 border border-slate-800">
              <p className="text-[11px] text-slate-300 font-medium">Ready to open an account?</p>
              <button
                onClick={() => navigate('/open-account')}
                className="mt-2 w-full py-1.5 text-xs font-semibold text-center text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center justify-center gap-1"
              >
                <span>Get Started in 3 Mins</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 NexBank National Association. All rights reserved. Member FDIC. Equal Housing Lender.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => navigate('/terms')} className="hover:text-slate-300">Terms of Use</button>
            <button onClick={() => navigate('/privacy')} className="hover:text-slate-300">Privacy & Cookies</button>
            <button onClick={() => navigate('/faq')} className="hover:text-slate-300">Help Center</button>
            <button onClick={() => navigate('/contact')} className="hover:text-slate-300">Contact</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
