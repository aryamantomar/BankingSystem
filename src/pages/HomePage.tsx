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
  CreditCard, 
  Sparkles,
  ChevronRight,
  Landmark,
  ArrowUpRight,
  Crown,
  Percent,
  Star
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export const HomePage: React.FC = () => {
  const { navigate, user } = useBanking();

  const keyFeatures = [
    {
      title: 'Secure Banking',
      desc: 'Military-grade 256-bit AES encryption, biometric authorization & fraud guard.',
      icon: <ShieldCheck className="w-6 h-6 text-[#97144d]" />,
      badge: 'Zero-Risk'
    },
    {
      title: 'Instant Transfers',
      desc: 'Zero-fee real-time IMPS, UPI, NEFT & RTGS rails with instant SMS receipts.',
      icon: <Zap className="w-6 h-6 text-[#97144d]" />,
      badge: 'Sub-Second'
    },
    {
      title: '24/7 Support',
      desc: 'Dedicated Burgundy relationship concierge & intelligent AI assistant.',
      icon: <Headphones className="w-6 h-6 text-[#97144d]" />,
      badge: 'Always On'
    },
    {
      title: 'Smart Banking',
      desc: 'Automated wealth recurring SIP, smart spending tags & tax insights.',
      icon: <Smartphone className="w-6 h-6 text-[#97144d]" />,
      badge: 'AI Powered'
    }
  ];

  const whyChooseUs = [
    {
      title: 'Trusted Heritage',
      desc: 'Over 2.4 million satisfied customers worldwide with $18B+ in securely managed assets.',
      badge: '99.99% Reliability'
    },
    {
      title: 'Ultra-Fast Rails',
      desc: 'Open a bank account in 3 minutes. Execute transfers in sub-second settlement latency.',
      badge: '< 1s Transfers'
    },
    {
      title: 'FDIC Guaranteed',
      desc: 'FDIC insured protection up to $250,000 with continuous real-time cyber protection.',
      badge: 'Zero Liability'
    },
    {
      title: 'Axis Burgundy UI',
      desc: 'Intuitive interface crafted for clarity, seamless mobile apps, and pristine statements.',
      badge: 'Award Winning'
    }
  ];

  const quickServices = [
    {
      title: 'Personal Banking',
      subtitle: 'Savings, cards, & everyday spending',
      path: '/personal',
      badge: 'Up to 7.10% APY'
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
    <div className="space-y-24 pb-20 overflow-hidden bg-[#fbf9fa]">
      
      {/* Hero Section matching diagram in Light Mode */}
      <section className="relative pt-12 md:pt-20 pb-16 overflow-hidden">
        {/* Soft radial background tints */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#97144d]/5 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading and CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <ScrollReveal direction="down">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fdf2f6] border border-[#97144d]/20 text-[#97144d] text-xs font-black tracking-wide uppercase shadow-sm">
                  <Crown className="w-3.5 h-3.5 text-amber-500" />
                  <span>Axis-Inspired Burgundy Experience</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#97144d] animate-ping"></span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={100}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
                  Banking Made Simple, <br className="hidden sm:inline" />
                  <span className="gradient-text-axis-light">For a Brighter Tomorrow</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={200}>
                <p className="text-lg sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
                  Safe, Smart, Secure. Experience high-touch banking, sub-second instant transfers, and tailored Burgundy wealth management crafted for discerning individuals and enterprises.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={300}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                  <button
                    onClick={() => navigate(user ? '/dashboard' : '/open-account')}
                    className="btn-shimmer w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#97144d] via-[#ba1e63] to-[#ca8a04] hover:brightness-105 text-white font-extrabold text-base shadow-xl shadow-[#97144d]/25 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>{user ? 'Go to Your Dashboard' : 'Get Started — Open Free Account'}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => navigate('/services')}
                    className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold text-base transition-all flex items-center justify-center gap-2 shadow-sm hover:border-[#97144d]/40 hover:text-[#97144d]"
                  >
                    <span>Explore Services</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </button>
                </div>
              </ScrollReveal>

              {/* Regulatory & trust badges */}
              <ScrollReveal direction="up" delay={400}>
                <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-semibold">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#97144d]" />
                    <span>FDIC Insured up to $250k</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#97144d]" />
                    <span>Zero Monthly Maintenance Fees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#97144d]" />
                    <span>256-Bit Military Encryption</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Floating Interactive Phone / App Mockup with Axis styling */}
            <div className="lg:col-span-5 flex justify-center">
              <ScrollReveal direction="left" delay={200}>
                <div className="relative w-full max-w-[340px] sm:max-w-[380px] animate-float">
                  
                  {/* Subtle soft glow aura */}
                  <div className="absolute -inset-2 rounded-[44px] bg-gradient-to-tr from-[#97144d]/15 via-pink-200/30 to-amber-200/20 opacity-70 blur-2xl"></div>
                  
                  {/* Phone chassis in light mode */}
                  <div className="relative bg-white border-4 border-slate-200 rounded-[38px] shadow-[0_25px_60px_-15px_rgba(151,20,77,0.18)] p-4 overflow-hidden">
                    {/* Phone speaker notch */}
                    <div className="w-24 h-4 bg-slate-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                    </div>

                    {/* App Screen Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-[#97144d] flex items-center justify-center text-white text-xs font-black shadow-md">
                          NB
                        </div>
                        <div>
                          <div className="text-xs font-black text-slate-900 flex items-center gap-1">
                            NexBank Mobile
                            <Crown className="w-3 h-3 text-amber-500 inline" />
                          </div>
                          <div className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Live Account
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#fdf2f6] text-[#97144d] font-black border border-[#97144d]/20">
                        7.85% FD
                      </span>
                    </div>

                    {/* Axis Burgundy Metal Virtual Card Graphic */}
                    <div className="mt-4 p-5 rounded-2xl bg-gradient-to-br from-[#740e3a] via-[#97144d] to-[#3a061d] text-white shadow-xl relative overflow-hidden group hover:rotate-1 transition-transform">
                      {/* Metallic shimmer effect */}
                      <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-amber-400/20 rounded-full blur-2xl"></div>
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-amber-300">BURGUNDY PRIVATE</span>
                          <span className="text-[9px] text-pink-200 block">World Contactless Metal</span>
                        </div>
                        {/* Gold EMV Chip */}
                        <div className="w-8 h-6 rounded bg-gradient-to-tr from-amber-300 to-amber-500 border border-amber-200/60 shadow-sm flex items-center justify-center">
                          <div className="w-4 h-3 border border-amber-800/40 rounded-sm"></div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-[10px] text-pink-200 uppercase font-medium">Available Balance</p>
                        <h3 className="text-2xl font-black tracking-tight text-white font-mono drop-shadow">
                          ${(user?.balance ?? 34850.75).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                        </h3>
                      </div>
                      <div className="mt-4 flex justify-between items-center text-[11px] text-amber-200 font-mono tracking-wider font-bold">
                        <span>4111 •••• •••• 9081</span>
                        <span className="text-white">10/31</span>
                      </div>
                    </div>

                    {/* Quick in-app buttons */}
                    <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                      <button 
                        onClick={() => navigate('/services')} 
                        className="p-2.5 rounded-xl bg-slate-50 hover:bg-[#fdf2f6] border border-slate-200 hover:border-[#97144d]/40 transition-all shadow-sm"
                      >
                        <Zap className="w-4 h-4 text-[#97144d] mx-auto mb-1" />
                        <span className="text-[10px] font-extrabold text-slate-800 block">Transfer</span>
                      </button>
                      <button 
                        onClick={() => navigate('/investments')} 
                        className="p-2.5 rounded-xl bg-slate-50 hover:bg-[#fdf2f6] border border-slate-200 hover:border-[#97144d]/40 transition-all shadow-sm"
                      >
                        <TrendingUp className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                        <span className="text-[10px] font-extrabold text-slate-800 block">Invest</span>
                      </button>
                      <button 
                        onClick={() => navigate('/loans')} 
                        className="p-2.5 rounded-xl bg-slate-50 hover:bg-[#fdf2f6] border border-slate-200 hover:border-[#97144d]/40 transition-all shadow-sm"
                      >
                        <Landmark className="w-4 h-4 text-amber-600 mx-auto mb-1" />
                        <span className="text-[10px] font-extrabold text-slate-800 block">Loans</span>
                      </button>
                    </div>

                    {/* Mock Activity List */}
                    <div className="mt-4 space-y-2">
                      <p className="text-[10px] uppercase font-black text-slate-400 tracking-wider">Recent Activity</p>
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                        <div>
                          <div className="font-bold text-slate-900">Direct Deposit (Salary)</div>
                          <div className="text-[10px] text-slate-400">Today, 09:30 AM</div>
                        </div>
                        <span className="font-extrabold text-emerald-600 font-mono">+$4,500.00</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                        <div>
                          <div className="font-bold text-slate-900">Burgundy Dining Perk</div>
                          <div className="text-[10px] text-slate-400">Yesterday</div>
                        </div>
                        <span className="font-extrabold text-slate-800 font-mono">-$142.50</span>
                      </div>
                    </div>

                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 4 Feature Badges matching diagram with ScrollReveal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#97144d]/40 transition-all duration-300 hover:-translate-y-2 group shadow-[0_10px_30px_-5px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_35px_-8px_rgba(151,20,77,0.12)]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#fdf2f6] group-hover:bg-[#97144d] border border-[#97144d]/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <span className="text-[#97144d] group-hover:text-white transition-colors">{feat.icon}</span>
                  </div>
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {feat.badge}
                  </span>
                </div>
                <h3 className="text-lg font-black text-slate-900 group-hover:text-[#97144d] transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* "Why Choose NexBank?" Section matching diagram with ScrollReveal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-[#97144d] mb-2 block">
              PREMIER REPUTATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Why Choose NexBank?
            </h2>
            <p className="text-base text-slate-600 mt-3 font-normal">
              Inspired by the trusted legacy of Axis Bank, engineered with tomorrow's cutting-edge digital speed.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 100}>
              <div className="p-7 rounded-3xl bg-white border border-slate-200/90 relative overflow-hidden hover:border-[#97144d]/40 transition-all duration-300 hover:-translate-y-2 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_35px_-8px_rgba(151,20,77,0.12)] group">
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#fdf2f6] text-[#97144d] border border-[#97144d]/20">
                  {item.badge}
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-4 group-hover:text-[#97144d] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Core Banking Portals Grid with ScrollReveal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-[0_20px_40px_-10px_rgba(151,20,77,0.08)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#fdf2f6] rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 relative z-10">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#97144d]">Comprehensive Solutions</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">Our Core Banking Verticals</h2>
              </div>
              <button
                onClick={() => navigate('/services')}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#97144d] hover:text-[#740e3a] transition-colors"
              >
                <span>View All Banking Services</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {quickServices.map((service, idx) => (
                <div
                  key={idx}
                  onClick={() => navigate(service.path)}
                  className="p-6 rounded-2xl bg-[#faf7f9] border border-slate-200/80 hover:border-[#97144d]/40 hover:bg-white cursor-pointer transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-black px-2 py-0.5 rounded-full bg-white text-[#97144d] border border-[#97144d]/20 shadow-xs">
                        {service.badge}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#97144d] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <h4 className="text-lg font-black text-slate-900 group-hover:text-[#97144d] transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1.5 font-medium">
                      {service.subtitle}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center text-xs font-bold text-slate-700 group-hover:text-[#97144d]">
                    <span>Explore Offerings</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1 text-[#97144d]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Axis Burgundy CTA Banner with ScrollReveal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#740e3a] via-[#97144d] to-[#ba1e63] p-8 sm:p-14 text-white text-center shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(250,204,21,0.18),transparent_50%)]"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-amber-200 text-xs font-black uppercase tracking-wider backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Burgundy Digital Onboarding</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                Ready to Upgrade to Smarter Banking?
              </h2>
              <p className="text-base text-pink-100 font-normal">
                Open your free digital account in less than 3 minutes. Zero paperwork, instant virtual debit card, and guaranteed high yield interest.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => navigate('/open-account')}
                  className="btn-shimmer w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-[#97144d] hover:bg-slate-50 font-black text-base shadow-xl transition-all"
                >
                  Open Free Account Now
                </button>
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-black/20 hover:bg-black/30 text-white border border-white/20 font-bold text-base transition-colors"
                >
                  Speak with a Specialist
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
};
