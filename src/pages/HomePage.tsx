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
  Sparkles,
  ChevronRight,
  Landmark,
  ArrowUpRight,
  Award,
  Crown
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate, user } = useBanking();

  const keyFeatures = [
    {
      title: 'Secure Banking',
      desc: 'Military-grade 256-bit AES encryption, biometric authorization & fraud guard.',
      icon: <ShieldCheck className="w-6 h-6 text-gold-400" />
    },
    {
      title: 'Instant Transfers',
      desc: 'Zero-fee real-time IMPS, UPI, NEFT & RTGS rails with instant SMS receipts.',
      icon: <Zap className="w-6 h-6 text-[#ea7ea6]" />
    },
    {
      title: '24/7 Support',
      desc: 'Dedicated Burgundy relationship concierge & intelligent AI assistant.',
      icon: <Headphones className="w-6 h-6 text-emerald-400" />
    },
    {
      title: 'Smart Banking',
      desc: 'Automated wealth recurring SIP, smart spending tags & tax insights.',
      icon: <Smartphone className="w-6 h-6 text-amber-300" />
    }
  ];

  const whyChooseUs = [
    {
      title: 'Trusted',
      desc: 'Over 2.4 million satisfied customers worldwide with $18B+ in managed assets.',
      badge: '99.99% Reliability',
      color: 'from-[#97144d] to-[#40051e]'
    },
    {
      title: 'Fast',
      desc: 'Open a bank account in 3 minutes. Execute transfers in sub-second latency.',
      badge: '< 1s Transfers',
      color: 'from-[#ba1e63] to-[#731640]'
    },
    {
      title: 'Secure',
      desc: 'FDIC insured protection up to $250,000 with continuous AI fraud prevention.',
      badge: 'Zero-Liability',
      color: 'from-[#801342] to-[#34061a]'
    },
    {
      title: 'Easy to Use',
      desc: 'Intuitive interface crafted for speed, seamless mobile apps, and clear statements.',
      badge: 'Axis Burgundy UI',
      color: 'from-[#97144d] to-[#ca8a04]'
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
    <div className="space-y-20 pb-20 overflow-hidden">
      
      {/* Hero Section matching diagram with Axis Burgundy design */}
      <section className="relative pt-12 md:pt-20 pb-16">
        {/* Glow ambient background in Axis Burgundy & Amber */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#97144d]/20 rounded-full blur-[150px] pointer-events-none -z-10" />
        <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#dc4e83]/15 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading and CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#97144d]/30 via-[#c52e69]/20 to-amber-500/20 border border-[#97144d]/50 text-pink-200 text-xs font-bold tracking-wide uppercase shadow-sm">
                <Crown className="w-3.5 h-3.5 text-gold-400" />
                <span>Axis-Inspired Burgundy Experience</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping"></span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
                Banking Made Simple, <br className="hidden sm:inline" />
                <span className="gradient-text-axis">For a Brighter Tomorrow</span>
              </h1>

              <p className="text-lg sm:text-xl text-pink-100/80 max-w-2xl font-normal leading-relaxed">
                Safe, Smart, Secure. Experience high-touch banking, sub-second instant transfers, and tailored Burgundy wealth management crafted for discerning individuals and enterprises.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <button
                  onClick={() => navigate(user ? '/dashboard' : '/open-account')}
                  className="btn-shimmer w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#97144d] via-[#c52e69] to-[#ca8a04] hover:brightness-110 text-white font-black text-base shadow-xl shadow-[#97144d]/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group border border-white/20"
                >
                  <span>{user ? 'Go to Your Dashboard' : 'Get Started — Open Free Account'}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => navigate('/services')}
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-[#220716] hover:bg-[#34091f] text-pink-100 hover:text-white border border-[#97144d]/50 font-bold text-base transition-all flex items-center justify-center gap-2 shadow-md hover:border-[#ea7ea6]"
                >
                  <span>Explore Services</span>
                  <ChevronRight className="w-4 h-4 text-pink-300" />
                </button>
              </div>

              {/* Regulatory & trust badges */}
              <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-pink-200/70 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-400" />
                  <span>FDIC Insured up to $250k</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-400" />
                  <span>Zero Monthly Maintenance Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-400" />
                  <span>256-Bit Military Encryption</span>
                </div>
              </div>
            </div>

            {/* Right Column: Floating Interactive Phone / App Mockup with Axis styling */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] animate-float">
                
                {/* Glow ring in Axis burgundy */}
                <div className="absolute -inset-2 rounded-[44px] bg-gradient-to-tr from-[#97144d] via-[#ea7ea6] to-amber-400 opacity-40 blur-2xl animate-pulse-slow"></div>
                
                {/* Phone chassis */}
                <div className="relative bg-[#180411] border-4 border-[#97144d]/50 rounded-[38px] shadow-2xl p-4 overflow-hidden backdrop-blur-xl">
                  {/* Phone speaker notch */}
                  <div className="w-24 h-4 bg-[#2b071e] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-[#180411]"></div>
                  </div>

                  {/* App Screen Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#97144d]/30">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#97144d] to-amber-400 flex items-center justify-center text-white text-xs font-black shadow-md">
                        NB
                      </div>
                      <div>
                        <div className="text-xs font-black text-white flex items-center gap-1">
                          NexBank Burgundy
                          <Crown className="w-3 h-3 text-gold-400 inline" />
                        </div>
                        <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Live Account
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#97144d]/30 text-gold-300 font-bold border border-[#97144d]/60">
                      7.85% FD
                    </span>
                  </div>

                  {/* Axis Burgundy Metal Virtual Card Graphic */}
                  <div className="mt-4 p-5 rounded-2xl bg-gradient-to-br from-[#740e3a] via-[#97144d] to-[#2b0415] text-white shadow-2xl relative overflow-hidden border border-amber-400/30 group hover:rotate-1 transition-transform">
                    {/* Metallic shimmer effect */}
                    <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-amber-400/20 rounded-full blur-2xl"></div>
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold-300">BURGUNDY PRIVATE</span>
                      </div>
                      {/* Gold EMV Chip */}
                      <div className="w-8 h-6 rounded bg-gradient-to-tr from-amber-300 to-amber-500 border border-amber-200/60 shadow-sm flex items-center justify-center">
                        <div className="w-4 h-3 border border-amber-700/40 rounded-sm"></div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-[10px] text-pink-200 uppercase font-medium">Available Balance</p>
                      <h3 className="text-2xl font-black tracking-tight text-white font-mono drop-shadow">
                        ${(user?.balance ?? 34850.75).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </h3>
                    </div>
                    <div className="mt-4 flex justify-between items-center text-[11px] text-gold-200 font-mono tracking-wider">
                      <span>4111 •••• •••• 9081</span>
                      <span className="text-white font-bold">10/31</span>
                    </div>
                  </div>

                  {/* Quick in-app buttons with Axis maroon themes */}
                  <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                    <button 
                      onClick={() => navigate('/services')} 
                      className="p-2.5 rounded-xl bg-[#26081b] hover:bg-[#97144d]/40 border border-[#97144d]/30 hover:border-[#ea7ea6] transition-all"
                    >
                      <Zap className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                      <span className="text-[10px] font-bold text-pink-100 block">Transfer</span>
                    </button>
                    <button 
                      onClick={() => navigate('/investments')} 
                      className="p-2.5 rounded-xl bg-[#26081b] hover:bg-[#97144d]/40 border border-[#97144d]/30 hover:border-[#ea7ea6] transition-all"
                    >
                      <TrendingUp className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                      <span className="text-[10px] font-bold text-pink-100 block">Invest</span>
                    </button>
                    <button 
                      onClick={() => navigate('/loans')} 
                      className="p-2.5 rounded-xl bg-[#26081b] hover:bg-[#97144d]/40 border border-[#97144d]/30 hover:border-[#ea7ea6] transition-all"
                    >
                      <Landmark className="w-4 h-4 text-[#ea7ea6] mx-auto mb-1" />
                      <span className="text-[10px] font-bold text-pink-100 block">Loans</span>
                    </button>
                  </div>

                  {/* Mock Activity List */}
                  <div className="mt-4 space-y-2">
                    <p className="text-[10px] uppercase font-bold text-pink-300/70 tracking-wider">Recent Activity</p>
                    <div className="p-2 rounded-xl bg-[#200516] border border-[#97144d]/30 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-bold text-white">Direct Deposit (Salary)</div>
                        <div className="text-[10px] text-pink-200/60">Today, 09:30 AM</div>
                      </div>
                      <span className="font-bold text-emerald-400">+$4,500.00</span>
                    </div>
                    <div className="p-2 rounded-xl bg-[#200516] border border-[#97144d]/30 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-bold text-white">Burgundy Dining Perk</div>
                        <div className="text-[10px] text-pink-200/60">Yesterday</div>
                      </div>
                      <span className="font-bold text-amber-400">-$142.50</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4 Feature Badges matching diagram with cool animation and Axis theme */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#1b0513]/80 border border-[#97144d]/30 hover:border-[#ea7ea6] transition-all duration-300 hover:-translate-y-2 group shadow-xl hover:shadow-[#97144d]/25"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#2a071d] group-hover:bg-[#97144d] border border-[#97144d]/40 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                {feat.icon}
              </div>
              <h3 className="text-lg font-black text-white group-hover:text-gold-300 transition-colors">
                {feat.title}
              </h3>
              <p className="text-xs text-pink-100/70 mt-2 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* "Why Choose NexBank?" Section matching diagram with Axis Burgundy cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-gold-400 mb-2 block">
            PREMIER REPUTATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Why Choose NexBank?
          </h2>
          <p className="text-base text-pink-100/70 mt-3 font-normal">
            Inspired by the trusted legacy of Axis Bank, engineered with tomorrow's cutting-edge digital speed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-gradient-to-b from-[#1e0616] to-[#12030d] border border-[#97144d]/40 relative overflow-hidden hover:border-[#ea7ea6] transition-all duration-300 hover:-translate-y-1.5 shadow-xl group"
            >
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#97144d]/30 text-gold-300 border border-[#97144d]/50">
                {item.badge}
              </span>
              <h3 className="text-xl font-black text-white mt-4 group-hover:text-pink-200 transition-colors">{item.title}</h3>
              <p className="text-sm text-pink-100/70 mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Banking Portals Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#200516] via-[#14030e] to-[#1d0514] border border-[#97144d]/40 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 relative z-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gold-400">Comprehensive Solutions</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Our Core Banking Verticals</h2>
            </div>
            <button
              onClick={() => navigate('/services')}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-pink-300 hover:text-white transition-colors"
            >
              <span>View All Banking Services</span>
              <ArrowUpRight className="w-4 h-4 text-gold-400" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {quickServices.map((service, idx) => (
              <div
                key={idx}
                onClick={() => navigate(service.path)}
                className="p-6 rounded-2xl bg-[#170410]/90 border border-[#97144d]/30 hover:border-[#ea7ea6] hover:bg-[#25071a] cursor-pointer transition-all duration-300 group flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#97144d]/30 text-gold-300 border border-[#97144d]/40">
                      {service.badge}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-pink-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <h4 className="text-lg font-black text-white group-hover:text-gold-300 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-xs text-pink-200/60 mt-1.5">
                    {service.subtitle}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#97144d]/30 flex items-center text-xs font-bold text-pink-200 group-hover:text-white">
                  <span>Explore Offerings</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1 text-gold-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Axis Burgundy CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#740e3a] via-[#97144d] to-[#40051e] p-8 sm:p-14 text-white text-center shadow-2xl border border-amber-400/30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(250,204,21,0.15),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-gold-300 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
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
                className="btn-shimmer w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#40051e] font-black text-base shadow-xl transition-all"
              >
                Open Free Account Now
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-base transition-colors"
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
