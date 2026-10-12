import React from 'react';
import { useBanking } from '../context/BankingContext';
import { ScrollReveal } from '../components/ScrollReveal';
import { 
  Building2, 
  Target, 
  Eye, 
  HeartHandshake, 
  Crown,
  Sparkles
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigate } = useBanking();

  const corePillars = [
    {
      title: 'Our Mission',
      desc: 'To simplify financial lives by providing secure, transparent, and hyper-intuitive banking technology that empowers every individual and enterprise to prosper.',
      icon: <Target className="w-6 h-6 text-[#97144d]" />
    },
    {
      title: 'Our Vision',
      desc: 'To stand as the world’s most trusted digital financial institution, pioneering responsible AI, zero-friction global payments, and fair banking for future generations.',
      icon: <Eye className="w-6 h-6 text-[#97144d]" />
    },
    {
      title: 'Our Values',
      desc: 'Integrity above all, unwavering cybersecurity, radical fee transparency, and empathy in customer service. We treat your wealth with the reverence it deserves.',
      icon: <HeartHandshake className="w-6 h-6 text-emerald-600" />
    }
  ];

  const milestones = [
    { year: '2018', title: 'Founded with Purpose', desc: 'NexBank launched with an initial seed round to reinvent retail banking with clean APIs.' },
    { year: '2020', title: '1 Million Accounts', desc: 'Surpassed 1M active customers and achieved full national banking regulatory charter.' },
    { year: '2022', title: 'Corporate Banking Suite', desc: 'Expanded into commercial trade finance and instant merchant payment gateways.' },
    { year: '2024', title: 'Global Operations', desc: 'Established cross-border clearing hubs in New York, London, and Singapore.' },
    { year: '2026', title: 'Axis-Tier Burgundy Architecture', desc: 'Integrated real-time biometric safeguards, automated wealth advisors, and AI support.' }
  ];

  const leadership = [
    { name: 'Dr. Alexander Vance', role: 'Chief Executive Officer & Co-Founder', bio: 'Former Senior VP with 22 years in premier financial infrastructure and wealth management.' },
    { name: 'Elena Rostova', role: 'Chief Technology Officer', bio: 'Pioneered cryptographic payment protocols at MIT Fintech Labs.' },
    { name: 'Marcus Sterling', role: 'Chief Risk & Compliance Officer', bio: 'Ex-Director of Regulatory Banking Compliance with specialized expertise in anti-fraud.' },
    { name: 'Sophia Chen', role: 'Head of Burgundy Experience', bio: 'Designed high-touch private client experiences for leading global consumer platforms.' }
  ];

  return (
    <div className="space-y-24 pb-20 bg-[#fbf9fa]">
      
      {/* Hero Section matching diagram */}
      <section className="relative pt-12 md:pt-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="down">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fdf2f6] border border-[#97144d]/20 text-[#97144d] text-xs font-black uppercase tracking-wider mb-4">
              <Crown className="w-3.5 h-3.5" />
              <span>Who We Are</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
              About NexBank
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mt-4 max-w-2xl mx-auto font-normal">
              Building a smarter and safer financial future for everyone.
            </p>

            {/* Headquarters architectural visual mock matching diagram */}
            <div className="mt-12 relative rounded-3xl overflow-hidden border border-[#97144d]/20 shadow-[0_20px_45px_-10px_rgba(151,20,77,0.1)] max-w-4xl mx-auto">
              <div className="h-72 sm:h-96 w-full bg-gradient-to-tr from-[#fbf0f4] via-[#f7e4eb] to-[#f3d9e2] relative flex items-center justify-center p-8 text-center overflow-hidden">
                <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#97144d_1px,transparent_1px)] [background-size:24px_24px]"></div>
                
                <div className="relative z-10 space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-[#97144d]/30 flex items-center justify-center mx-auto text-[#97144d] shadow-lg">
                    <Building2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">NexBank Global Headquarters</h3>
                  <p className="text-sm text-slate-600 max-w-lg mx-auto">
                    Lexington Avenue, New York • Regulated Financial Institution & Tier-4 Vault Infrastructure
                  </p>
                  <div className="pt-2 flex flex-wrap justify-center gap-3 text-xs font-bold">
                    <span className="px-3.5 py-1 rounded-full bg-white text-[#97144d] border border-[#97144d]/20 shadow-sm">250+ Global Branches</span>
                    <span className="px-3.5 py-1 rounded-full bg-white text-slate-700 border border-slate-200 shadow-sm">4,200+ Financial Experts</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The 3 Core Pillars matching diagram */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {corePillars.map((pillar, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 100}>
              <div className="h-full p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-[#97144d]/40 transition-all duration-300 flex flex-col justify-between shadow-[0_10px_30px_-5px_rgba(151,20,77,0.06)] hover:shadow-[0_20px_40px_-5px_rgba(151,20,77,0.12)] hover:-translate-y-1.5 group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#fdf2f6] group-hover:bg-[#97144d] border border-[#97144d]/20 flex items-center justify-center mb-6 transition-all group-hover:scale-110">
                    {React.cloneElement(pillar.icon, {
                      className: 'w-6 h-6 transition-colors group-hover:text-white'
                    })}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-[#97144d] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100 text-xs font-bold text-slate-400">
                  Guaranteed by NexBank Governance
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Timeline Milestones */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-slate-900">Our Journey of Innovation</h2>
            <p className="text-sm text-slate-500 mt-2 font-normal">How we evolved from a fintech challenger to a premier worldwide institution.</p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:border-[#97144d]/40 transition-colors shadow-sm"
              >
                <div className="px-3.5 py-1.5 rounded-xl bg-[#fdf2f6] text-[#97144d] font-mono font-black text-sm shrink-0 border border-[#97144d]/20">
                  {m.year}
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-bold text-slate-900">{m.title}</h4>
                  <p className="text-xs text-slate-600 mt-0.5 font-normal">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Leadership Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-slate-900">Executive Leadership</h2>
            <p className="text-sm text-slate-500 mt-2 font-normal">Stewarding financial integrity and technological excellence.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((person, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 text-center space-y-3 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#97144d] to-[#c52e69] mx-auto flex items-center justify-center text-white text-xl font-black shadow-md">
                  {person.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <h4 className="text-lg font-bold text-slate-900 pt-1">{person.name}</h4>
                <div className="text-xs text-[#97144d] font-bold">{person.role}</div>
                <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100 font-normal">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#97144d] via-[#800f40] to-[#590a2d] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div>
              <h3 className="text-2xl font-black text-white">Experience modern banking today</h3>
              <p className="text-sm text-pink-100/80 mt-1 font-normal">Join over 2.4 million account holders worldwide.</p>
            </div>
            <button
              onClick={() => navigate('/open-account')}
              className="btn-shimmer px-6 py-3.5 rounded-xl bg-white hover:bg-rose-50 text-[#97144d] font-bold text-sm transition-all shrink-0 shadow-lg"
            >
              Open an Account in 3 Mins
            </button>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
};
