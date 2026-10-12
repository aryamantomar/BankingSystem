import React from 'react';
import { useBanking } from '../context/BankingContext';
import { 
  ShieldCheck, 
  Zap, 
  Headphones, 
  Smartphone, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Lock, 
  CreditCard, 
  Users, 
  Sparkles,
  ChevronRight,
  Landmark,
  ArrowUpRight
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate, user } = useBanking();

  const keyFeatures = [
    {
      title: 'Secure Banking',
      desc: 'Military-grade 256-bit AES encryption & biometrics.',
      icon: <ShieldCheck className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Instant Transfers',
      desc: 'Zero-fee real-time IMPS, NEFT, RTGS & UPI rails.',
      icon: <Zap className="w-6 h-6 text-cyan-400" />
    },
    {
      title: '24/7 Support',
      desc: 'Human agents & AI assistant ready around the clock.',
      icon: <Headphones className="w-6 h-6 text-emerald-400" />
    },
    {
      title: 'Smart Banking',
      desc: 'Automated savings, smart budgeting, and insights.',
      icon: <Smartphone className="w-6 h-6 text-indigo-400" />
    }
  ];

  const whyChooseUs = [
    {
      title: 'Trusted',
      desc: 'Over 2.4 million satisfied customers worldwide with $18B+ in managed assets.',
      badge: '99.99% Reliability'
    },
    {
      title: 'Fast',
      desc: 'Open a bank account in 3 minutes. Execute transfers in sub-second latency.',
      badge: '< 1s Transfers'
    },
    {
      title: 'Secure',
      desc: 'FDIC insured protection up to $250,000 with continuous AI fraud prevention.',
      badge: 'Zero-Liability'
    },
    {
      title: 'Easy to Use',
      desc: 'Intuitive interface crafted for speed, seamless mobile apps, and clear statements.',
      badge: 'Award-Winning UI'
    }
  ];

  const quickServices = [
    {
      title: 'Personal Banking',
      subtitle: 'Savings, cards, & everyday spending',
      path: '/personal',
      badge: 'Up to 5.25% APY'
    },
    {
      title: 'Business Banking',
      subtitle: 'Corporate accounts & merchant solutions',
      path: '/business',
      badge: 'Custom Limits'
    },
    {
      title: 'Home & Personal Loans',
      subtitle: 'Low interest rates with instant eligibility',
      path: '/loans',
      badge: 'From 6.85% p.a.'
    },
    {
      title: 'Wealth & Investments',
      subtitle: 'Mutual funds, SIPs, and high-yield FDs',
      path: '/investments',
      badge: 'Zero Brokerage'
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      
      {/* Hero Section matching diagram */}
      <section className="relative overflow-hidden pt-12 md:pt-20 pb-16">
        {/* Glow ambient background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading and CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next-Gen Financial Operating System</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Banking Made Simple, <br className="hidden sm:inline" />
                <span className="gradient-text">For a Brighter Tomorrow</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-light">
                Safe, Smart, Secure. Experience frictionless digital banking, instant worldwide transfers, and intelligent wealth building with zero hidden fees.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <button
                  onClick={() => navigate(user ? '/dashboard' : '/open-account')}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-base shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>{user ? 'Go to Your Dashboard' : 'Get Started — Open Free Account'}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => navigate('/services')}
                  className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-semibold text-base transition-colors flex items-center justify-center gap-2"
                >
                  <span>Explore Services</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>

              {/* Regulatory & trust badges */}
              <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>FDIC Insured up to $250k</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Zero Monthly Maintenance Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>256-Bit Military Encryption</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Phone / App Mockup matching diagram */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
                {/* Glow ring */}
                <div className="absolute -inset-1 rounded-[40px] bg-gradient-to-r from-blue-500 to-cyan-500 opacity-30 blur-xl"></div>
                
                {/* Phone chassis */}
                <div className="relative bg-slate-900 border-4 border-slate-700/90 rounded-[36px] shadow-2xl p-4 overflow-hidden">
                  {/* Phone speaker notch */}
                  <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-slate-900"></div>
                  </div>

                  {/* App Screen Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xs font-black">
                        NB
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">NexBank Mobile</div>
                        <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Live Account
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-medium">
                      5.25% APY
                    </span>
                  </div>

                  {/* Virtual Card Graphic */}
                  <div className="mt-4 p-4 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-slate-900 text-white shadow-lg relative overflow-hidden">
                    <div className="absolute -right-4 -bottom-4 w-28 h-28 bg-white/10 rounded-full blur-xl"></div>
                    <div className="flex justify-between items-start">
                      <span className="text-[11px] font-semibold text-blue-200">NexBank Platinum</span>
                      <CreditCard className="w-5 h-5 text-blue-200" />
                    </div>
                    <div className="mt-4">
                      <p className="text-[10px] text-blue-200">Total Available Balance</p>
                      <h3 className="text-2xl font-black tracking-tight">
                        ${(user?.balance ?? 34850.75).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </h3>
                    </div>
                    <div className="mt-4 flex justify-between items-center text-[10px] text-blue-200 font-mono">
                      <span>•••• •••• •••• 9081</span>
                      <span>09/29</span>
                    </div>
                  </div>

                  {/* Quick in-app buttons */}
                  <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                    <button 
                      onClick={() => navigate('/services')} 
                      className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700/60 transition-colors"
                    >
                      <Zap className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                      <span className="text-[10px] font-medium text-slate-200 block">Transfer</span>
                    </button>
                    <button 
                      onClick={() => navigate('/services')} 
                      className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700/60 transition-colors"
                    >
                      <TrendingUp className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                      <span className="text-[10px] font-medium text-slate-200 block">Invest</span>
                    </button>
                    <button 
                      onClick={() => navigate('/loans')} 
                      className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700/60 transition-colors"
                    >
                      <Landmark className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                      <span className="text-[10px] font-medium text-slate-200 block">Loans</span>
                    </button>
                  </div>

                  {/* Mock Activity List */}
                  <div className="mt-4 space-y-2">
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Recent Activity</p>
                    <div className="p-2 rounded-lg bg-slate-800/60 border border-slate-800 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-medium text-white">Direct Deposit (Salary)</div>
                        <div className="text-[10px] text-slate-400">Today, 09:30 AM</div>
                      </div>
                      <span className="font-bold text-emerald-400">+$4,500.00</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-800/60 border border-slate-800 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-medium text-white">Utility AutoPay</div>
                        <div className="text-[10px] text-slate-400">Yesterday</div>
                      </div>
                      <span className="font-bold text-slate-300">-$142.50</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4 Feature Badges matching diagram */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800 group-hover:bg-blue-600/20 border border-slate-700/60 flex items-center justify-center mb-4 transition-colors">
                {feat.icon}
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                {feat.title}
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* "Why Choose NexBank?" Section matching diagram */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Choose NexBank?
          </h2>
          <p className="text-base text-slate-400 mt-3">
            Engineered from first principles to provide superior safety, transparency, and high performance for all your financial needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800/80 relative overflow-hidden"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {item.badge}
              </span>
              <h3 className="text-xl font-bold text-white mt-4">{item.title}</h3>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Banking Portals Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-900 border border-slate-800">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Comprehensive Solutions</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Our Core Banking Verticals</h2>
            </div>
            <button
              onClick={() => navigate('/services')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300"
            >
              <span>View All Banking Services</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickServices.map((service, idx) => (
              <div
                key={idx}
                onClick={() => navigate(service.path)}
                className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-850 cursor-pointer transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-cyan-400 border border-cyan-500/20">
                      {service.badge}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1.5">
                    {service.subtitle}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center text-xs font-semibold text-slate-300 group-hover:text-white">
                  <span>Explore Offerings</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 p-8 sm:p-14 text-white text-center">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Upgrade to Smarter Banking?
            </h2>
            <p className="text-base text-blue-100">
              Open your free digital account in less than 3 minutes. Zero paperwork, instant virtual debit card, and guaranteed high yield interest.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate('/open-account')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-blue-700 hover:bg-slate-100 font-bold text-base shadow-xl transition-all"
              >
                Open Free Account Now
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-800/60 hover:bg-blue-800 text-white border border-blue-400/40 font-semibold text-base transition-colors"
              >
                Speak with a Specialist
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
