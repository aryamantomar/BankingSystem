import React from 'react';
import { useBanking } from '../context/BankingContext';
import { 
  ShieldCheck, 
  Lock, 
  Headphones, 
  Award, 
  ArrowUpRight,
  PhoneCall,
  Mail,
  MapPin
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { NexBankLogo } from './NexBankLogo';

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
    'High Yield Fixed Deposits (7.85%)',
    'Home & Education Loans (From 6.85%)',
    'Merchant POS & Corporate Solutions',
    'Biometric Safe Deposit Vaults'
  ];

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 text-sm relative overflow-hidden">
      
      {/* Trust & Guarantee Banner */}
      <div className="border-b border-slate-100 bg-[#fdf9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ScrollReveal direction="up">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-[#97144d]/10 border border-[#97144d]/20 flex items-center justify-center text-[#97144d]">
                  <ShieldCheck className="w-5 h-5 text-[#97144d]" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-extrabold text-sm">Regulatory Insured</h4>
                  <p className="text-xs text-slate-500">Deposits protected up to $250,000</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-[#97144d]/10 border border-[#97144d]/20 flex items-center justify-center text-[#97144d]">
                  <Lock className="w-5 h-5 text-[#97144d]" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-extrabold text-sm">256-Bit SSL Encryption</h4>
                  <p className="text-xs text-slate-500">Bank-grade end-to-end security</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-[#97144d]/10 border border-[#97144d]/20 flex items-center justify-center text-[#97144d]">
                  <Headphones className="w-5 h-5 text-[#97144d]" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-extrabold text-sm">24/7 Dedicated Support</h4>
                  <p className="text-xs text-slate-500">Toll-free hotline & live chat help</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-[#97144d]/10 border border-[#97144d]/20 flex items-center justify-center text-[#97144d]">
                  <Award className="w-5 h-5 text-[#97144d]" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-extrabold text-sm">Axis-Tier Excellence</h4>
                  <p className="text-xs text-slate-500">Premier Digital Experience 2026</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Main Sitemap Grid matching the diagram */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <ScrollReveal direction="up" delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            
            {/* Brand info */}
            <div className="lg:col-span-2 space-y-4">
              <NexBankLogo size="md" showBadge />
              <p className="text-sm leading-relaxed text-slate-600 max-w-sm">
                NexBank combines the reliability of premier banking with next-generation digital speed. Experience high-yield savings, seamless UPI/IMPS transfers, and personalized wealth management.
              </p>
              <div className="pt-2 text-xs text-slate-600 space-y-1.5">
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="font-semibold text-slate-800">Core Banking Operations: 100% Operational SLA</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5 text-[#97144d]" />
                  <span>Customer Helpline: <strong className="text-slate-900 font-bold">+1 800-NEX-BANK</strong></span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#97144d]" />
                  <span>Email: <strong className="text-slate-900 font-bold">support@nexbank.com</strong></span>
                </p>
              </div>
            </div>

            {/* Primary Navigation */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-4 border-b border-slate-200 pb-2">
                Primary Navigation
              </h3>
              <ul className="space-y-2.5">
                {primaryLinks.map((item) => (
                  <li key={item.path}>
                    <button
                      onClick={() => navigate(item.path)}
                      className="hover:text-[#97144d] transition-colors flex items-center gap-1.5 text-left text-sm font-semibold text-slate-600"
                    >
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other Important Pages */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-4 border-b border-slate-200 pb-2">
                Important Pages
              </h3>
              <ul className="space-y-2.5">
                {importantPages.map((item) => (
                  <li key={item.path}>
                    <button
                      onClick={() => navigate(item.path)}
                      className="hover:text-[#97144d] transition-colors flex items-center gap-1.5 text-left text-sm font-semibold text-slate-600"
                    >
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Banking Services */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-4 border-b border-slate-200 pb-2">
                Banking Services
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                {serviceHighlights.map((srv, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#97144d] font-bold">•</span>
                    <span>{srv}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 p-3 rounded-2xl bg-[#fdf2f6] border border-[#97144d]/20">
                <p className="text-[11px] text-[#97144d] font-bold">Ready to open an account?</p>
                <button
                  onClick={() => navigate('/open-account')}
                  className="mt-2 w-full py-2 text-xs font-bold text-center text-white bg-[#97144d] hover:bg-[#740e3a] rounded-xl transition-all flex items-center justify-center gap-1 shadow-sm"
                >
                  <span>Get Started in 3 Mins</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>

          </div>
        </ScrollReveal>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 NexBank National Association. Inspired by premier Axis Bank architecture. Member FDIC.</p>
          <div className="flex items-center gap-6 text-slate-600 font-semibold">
            <button onClick={() => navigate('/terms')} className="hover:text-[#97144d]">Terms of Use</button>
            <button onClick={() => navigate('/privacy')} className="hover:text-[#97144d]">Privacy Policy</button>
            <button onClick={() => navigate('/faq')} className="hover:text-[#97144d]">Help Center</button>
            <button onClick={() => navigate('/contact')} className="hover:text-[#97144d]">Contact Us</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
