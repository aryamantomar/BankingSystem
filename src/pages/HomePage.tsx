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
  Star,
  Check,
  Plane,
  Shield,
  Award
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { BankCardArt } from '../components/BankCardArt';

export const HomePage: React.FC = () => {
  const { navigate, user } = useBanking();

  const keyFeatures = [
    {
      title: 'Secure Banking',
      desc: 'Military-grade 256-bit AES encryption, biometric authorization & fraud guard.',
      icon: <ShieldCheck className="w-6 h-6 text-[#97144d]" />,
      badge: 'Zero-Risk',
      img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Instant Transfers',
      desc: 'Zero-fee real-time IMPS, UPI, NEFT & RTGS rails with instant SMS receipts.',
      icon: <Zap className="w-6 h-6 text-[#97144d]" />,
      badge: 'Sub-Second',
      img: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=400&q=80'
    },
    {
      title: '24/7 Support',
      desc: 'Dedicated private relationship concierge & intelligent AI assistant.',
      icon: <Headphones className="w-6 h-6 text-[#97144d]" />,
      badge: 'Always On',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Smart Banking',
      desc: 'Automated wealth recurring SIP, smart spending tags & tax insights.',
      icon: <Smartphone className="w-6 h-6 text-[#97144d]" />,
      badge: 'AI Powered',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80'
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
      title: 'Premier Digital Banking',
      desc: 'Intuitive interface crafted for clarity, seamless mobile apps, and pristine statements.',
      badge: 'Award Winning'
    }
  ];

  const quickServices = [
    {
      title: 'Personal Banking',
      subtitle: 'Savings, cards, & everyday spending',
      path: '/personal',
      badge: 'Up to 7.10% APY',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Business Banking',
      subtitle: 'Corporate accounts & merchant solutions',
      path: '/business',
      badge: 'Custom Limits',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Home & Personal Loans',
      subtitle: 'Low interest rates with instant eligibility',
      path: '/loans',
      badge: 'From 6.85% p.a.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Wealth & Investments',
      subtitle: 'Mutual funds, SIPs, and high-yield FDs',
      path: '/investments',
      badge: 'Zero Brokerage',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const clientReviews = [
    {
      name: 'Priya Sharma',
      role: 'Venture Partner & Tech Founder',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      comment: 'NexBank’s Premier Metal card and sub-second remittance have transformed how our firm manages multi-currency capital.'
    },
    {
      name: 'Mark Taylor',
      role: 'Commercial Real Estate Director',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
      comment: 'The loan EMI calculator and expedited disbursement process helped us secure prime property without bureaucratic delays.'
    },
    {
      name: 'Sarah Jenkins',
      role: 'Senior Treasury Director',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      comment: 'Intuitive modern interface, transparent 7.85% compound FD yields, and automated SIP wealth building. An absolute pleasure to bank with.'
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
                  <span>Premier Institutional Banking</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#97144d] animate-ping"></span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={100}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
                  Banking Made Simple, <br className="hidden sm:inline" />
                  <span className="gradient-text-premier-light">For a Brighter Tomorrow</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={200}>
                <p className="text-lg sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
                  Safe, Smart, Secure. Experience high-touch banking, sub-second instant transfers, and tailored private wealth management crafted for discerning individuals and enterprises.
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
                    className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white dark:bg-[#1a0a14] hover:bg-slate-50 dark:hover:bg-[#25101e] text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-[#97144d]/30 font-bold text-base transition-all flex items-center justify-center gap-2 shadow-sm hover:border-[#97144d]/40 hover:text-[#97144d] dark:hover:text-[#f43f5e]"
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
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>FDIC Insured up to $250,000</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Zero Minimum Balance Fees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>256-Bit Military Encryption</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Hero Bank Card Art & Mobile Banking Mockup */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <ScrollReveal direction="left" delay={200}>
                <div className="relative w-full max-w-[420px] space-y-4">
                  {/* Floating Luxury Bank Card with Guilloche Art */}
                  <div className="relative z-10 transition-transform duration-500 hover:scale-[1.02]">
                    <BankCardArt
                      cardNumber={user ? user.cardDetails.cardNumber : '4111 8920 4019 9081'}
                      cardHolder={user ? user.cardDetails.cardHolder : 'ARYAMAN TOMAR'}
                      expiry={user ? user.cardDetails.expiry : '10/31'}
                      cvv={user ? user.cardDetails.cvv : '789'}
                      balance={user ? user.balance : 34850.75}
                      variant="privilege"
                    />
                  </div>

                  {/* Supporting Trust & App Stat Card */}
                  <div className="p-4 rounded-2xl bg-white dark:bg-[#150912] border border-slate-200/90 dark:border-[#97144d]/25 shadow-[0_10px_30px_-5px_rgba(151,20,77,0.08)] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#fdf2f6] dark:bg-[#1f0d1b] border border-[#97144d]/20 dark:border-[#97144d]/30 flex items-center justify-center text-[#97144d]">
                        <Zap className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-black text-slate-900">Instant UPI & Wire Rails</div>
                        <div className="text-[10px] text-slate-500">Average settlement: 0.8 seconds</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-black px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      99.99% Uptime
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 4 Feature Badges matching diagram with ScrollReveal & Imagery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-3xl bg-white dark:bg-[#150912] border border-slate-200/90 dark:border-[#97144d]/25 hover:border-[#97144d]/40 transition-all duration-300 hover:-translate-y-2 group shadow-[0_10px_30px_-5px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_35px_-8px_rgba(151,20,77,0.12)] flex flex-col justify-between"
              >
                <div className="h-32 w-full overflow-hidden relative">
                  <img 
                    src={feat.img} 
                    alt={feat.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <span className="absolute bottom-3 right-3 text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-white/90 dark:bg-[#180a14]/90 text-[#97144d] dark:text-[#f43f5e] backdrop-blur-sm shadow-sm">
                    {feat.badge}
                  </span>
                </div>
                <div className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-[#fdf2f6] dark:bg-[#1f0d1b] group-hover:bg-[#97144d] border border-[#97144d]/20 dark:border-[#97144d]/30 flex items-center justify-center transition-all duration-300 mb-3">
                    <span className="text-[#97144d] group-hover:text-white transition-colors">{feat.icon}</span>
                  </div>
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-[#97144d] transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-medium">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Dedicated Card Art & Metal Engineering Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="p-8 sm:p-14 rounded-3xl bg-white dark:bg-[#150912] border border-slate-200/90 dark:border-[#97144d]/25 shadow-[0_20px_50px_-10px_rgba(151,20,77,0.1)] relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fdf2f6] border border-[#97144d]/20 text-[#97144d] text-xs font-black uppercase tracking-wider">
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>Card Engineering & Artistry</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  The Premier Metal Card: <br />
                  <span className="gradient-text-premier-light">Crafted for Global Prestige</span>
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Forged from tungsten-metal composite with micro-etched floral guilloche security waves, 24K gold EMV chip architecture, and zero foreign transaction markup around the globe.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 dark:bg-[#1d0e19] dark:border-[#97144d]/20 space-y-1">
                    <Plane className="w-5 h-5 text-[#97144d]" />
                    <div className="text-xs font-black text-slate-900">Global Lounge Access</div>
                    <div className="text-[11px] text-slate-500">Over 1,400+ international airport lounges</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 dark:bg-[#1d0e19] dark:border-[#97144d]/20 space-y-1">
                    <Percent className="w-5 h-5 text-amber-600" />
                    <div className="text-xs font-black text-slate-900">0% Forex Markup</div>
                    <div className="text-[11px] text-slate-500">True interbank exchange rates worldwide</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 dark:bg-[#1d0e19] dark:border-[#97144d]/20 space-y-1">
                    <Shield className="w-5 h-5 text-emerald-600" />
                    <div className="text-xs font-black text-slate-900">Instant Kill-Switch</div>
                    <div className="text-[11px] text-slate-500">Freeze and unfreeze card with 1 tap</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 dark:bg-[#1d0e19] dark:border-[#97144d]/20 space-y-1">
                    <Award className="w-5 h-5 text-purple-600" />
                    <div className="text-xs font-black text-slate-900">5X Reward Edge</div>
                    <div className="text-[11px] text-slate-500">Points convertible to airline miles & hotels</div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => navigate('/open-account')}
                    className="btn-shimmer px-6 py-3 rounded-xl bg-gradient-to-r from-[#97144d] to-[#c52e69] text-white font-bold text-xs shadow-md shadow-[#97144d]/25"
                  >
                    Claim Your Metal Card
                  </button>
                </div>
              </div>

              {/* Right: Interactive 3-Edition Card Art Switcher Showcase */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="w-full max-w-md">
                  <BankCardArt
                    cardNumber="4111 8920 4019 9081"
                    cardHolder="ARYAMAN TOMAR"
                    expiry="10/31"
                    cvv="789"
                    balance={34850.75}
                    variant="privilege"
                  />
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Core Banking Portals Grid with Real Photography */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#150912] border border-slate-200/90 dark:border-[#97144d]/25 shadow-[0_20px_40px_-10px_rgba(151,20,77,0.08)] relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickServices.map((service, idx) => (
                <div
                  key={idx}
                  onClick={() => navigate(service.path)}
                  className="rounded-2xl bg-[#faf7f9] dark:bg-[#190a16] border border-slate-200/80 dark:border-[#97144d]/25 hover:border-[#97144d]/40 hover:bg-white dark:hover:bg-[#220d1e] cursor-pointer transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-md overflow-hidden"
                >
                  <div className="h-36 w-full overflow-hidden relative">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <span className="absolute top-3 left-3 text-[10px] font-black px-2.5 py-0.5 rounded-full bg-white/90 dark:bg-[#1a0a16]/90 text-[#97144d] dark:text-[#f43f5e] shadow-sm">
                      {service.badge}
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-black text-slate-900 group-hover:text-[#97144d] transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1.5 font-medium">
                        {service.subtitle}
                      </p>
                    </div>
                    <div className="mt-5 pt-3 border-t border-slate-200/70 dark:border-[#97144d]/20 flex items-center text-xs font-bold text-slate-700 group-hover:text-[#97144d]">
                      <span>Explore Offerings</span>
                      <ChevronRight className="w-3.5 h-3.5 ml-1 text-[#97144d]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Customer Testimonials & Verified Portfolios */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-wider text-[#97144d]">Client Endorsements</span>
            <h2 className="text-3xl font-black text-slate-900 mt-1">Trusted by Discerning Clients</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clientReviews.map((rev, idx) => (
              <div 
                key={idx}
                className="p-7 rounded-3xl bg-white dark:bg-[#150912] border border-slate-200/90 dark:border-[#97144d]/25 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  "{rev.comment}"
                </p>
                <div className="pt-3 border-t border-slate-100 dark:border-[#97144d]/20 flex items-center gap-3">
                  <img 
                    src={rev.avatar} 
                    alt={rev.name} 
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#97144d]/30" 
                  />
                  <div>
                    <div className="text-xs font-bold text-slate-900">{rev.name}</div>
                    <div className="text-[10px] text-slate-500">{rev.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Velvet Burgundy CTA Banner with ScrollReveal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#740e3a] via-[#97144d] to-[#ba1e63] p-8 sm:p-14 text-white text-center shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(250,204,21,0.18),transparent_50%)]"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-amber-200 text-xs font-black uppercase tracking-wider backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Priority Digital Onboarding</span>
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
                  className="btn-shimmer w-full sm:w-auto px-8 py-3.5 rounded-xl !bg-white !text-[#97144d] hover:brightness-105 font-black text-base shadow-xl transition-all"
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
