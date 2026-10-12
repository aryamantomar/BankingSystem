import React from 'react';
import { useBanking } from '../context/BankingContext';
import { 
  ShieldCheck, 
  Lock, 
  Headphones, 
  Award, 
  ArrowUpRight,
  Sparkles
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
    'Burgundy High Yield Fixed Deposits',
    'Home & Education Loans (From 6.85%)',
    'Merchant POS & Corporate Solutions',
    'Biometric Safe Deposit Vaults'
  ];

  return (
    <footer className="bg-[#12030c] border-t border-[#97144d]/30 text-slate-400 text-sm relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#97144d]/10 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Trust & Guarantee Banner */}
      <div className="border-b border-[#97144d]/20 bg-[#1e0514]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3.5 group">
              <div className="w-10 h-10 rounded-xl bg-[#97144d]/20 border border-[#97144d]/40 flex items-center justify-center text-[#ea7ea6] group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Regulatory Insured</h4>
                <p className="text-xs text-slate-400">Deposits protected up to $250,000</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 group">
              <div className="w-10 h-10 rounded-xl bg-[#97144d]/20 border border-[#97144d]/40 flex items-center justify-center text-[#ea7ea6] group-hover:scale-110 transition-transform">
                <Lock className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">256-Bit SSL Encryption</h4>
                <p className="text-xs text-slate-400">Bank-grade end-to-end security</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 group">
              <div className="w-10 h-10 rounded-xl bg-[#97144d]/20 border border-[#97144d]/40 flex items-center justify-center text-[#ea7ea6] group-hover:scale-110 transition-transform">
                <Headphones className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">24/7 Dedicated Support</h4>
                <p className="text-xs text-slate-400">Toll-free hotline & live chat help</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 group">
              <div className="w-10 h-10 rounded-xl bg-[#97144d]/20 border border-[#97144d]/40 flex items-center justify-center text-[#ea7ea6] group-hover:scale-110 transition-transform">
                <Award className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Axis-Tier Excellence</h4>
                <p className="text-xs text-slate-400">Premier Digital Experience 2026</p>
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
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#97144d] to-amber-400 flex items-center justify-center shadow-lg shadow-[#97144d]/40">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3L2 21H7.5L12 12.5L16.5 21H22L12 3Z" fill="currentColor" />
                </svg>
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                Nex<span className="text-[#ea7ea6]">Bank</span>
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#97144d] text-white">
                BURGUNDY
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              NexBank combines the reliability and heritage of premier banking with next-generation digital interfaces. Experience high-yield savings, seamless UPI/IMPS transfers, and personalized wealth management.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Core Banking Operations: 100% Operational SLA</span>
              </p>
              <p>Customer Helpline: <span className="text-white font-bold">+1 800-NEX-BANK (639-2265)</span></p>
              <p>Email: <span className="text-white font-bold">support@nexbank.com</span></p>
            </div>
          </div>

          {/* Primary Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-pink-200 mb-4 border-b border-[#97144d]/30 pb-2">
              Primary Navigation
            </h3>
            <ul className="space-y-2.5">
              {primaryLinks.map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => navigate(item.path)}
                    className="hover:text-[#ea7ea6] transition-colors flex items-center gap-1.5 text-left text-sm"
                  >
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Important Pages */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-pink-200 mb-4 border-b border-[#97144d]/30 pb-2">
              Important Pages
            </h3>
            <ul className="space-y-2.5">
              {importantPages.map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => navigate(item.path)}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-left text-sm"
                  >
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Banking Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-pink-200 mb-4 border-b border-[#97144d]/30 pb-2">
              Banking Services
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              {serviceHighlights.map((srv, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-[#dc4e83] font-bold">•</span>
                  <span>{srv}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 p-3 rounded-xl bg-[#1f0615] border border-[#97144d]/40">
              <p className="text-[11px] text-pink-100 font-medium">Ready to open an account?</p>
              <button
                onClick={() => navigate('/open-account')}
                className="mt-2 w-full py-1.5 text-xs font-bold text-center text-white bg-gradient-to-r from-[#97144d] to-[#c52e69] hover:brightness-110 rounded-lg transition-all flex items-center justify-center gap-1 shadow-md shadow-[#97144d]/30"
              >
                <span>Get Started in 3 Mins</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#97144d]/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 NexBank National Association. Inspired by premier Axis Bank architecture. Member FDIC.</p>
          <div className="flex items-center gap-6 text-slate-400">
            <button onClick={() => navigate('/terms')} className="hover:text-white">Terms of Use</button>
            <button onClick={() => navigate('/privacy')} className="hover:text-white">Privacy Policy</button>
            <button onClick={() => navigate('/faq')} className="hover:text-white">Help Center</button>
            <button onClick={() => navigate('/contact')} className="hover:text-white">Contact Us</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
