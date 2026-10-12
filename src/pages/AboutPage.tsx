import React from 'react';
import { useBanking } from '../context/BankingContext';
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
      icon: <Target className="w-6 h-6 text-gold-400" />
    },
    {
      title: 'Our Vision',
      desc: 'To stand as the world’s most trusted digital financial institution, pioneering responsible AI, zero-friction global payments, and fair banking for future generations.',
      icon: <Eye className="w-6 h-6 text-[#ea7ea6]" />
    },
    {
      title: 'Our Values',
      desc: 'Integrity above all, unwavering cybersecurity, radical fee transparency, and empathy in customer service. We treat your wealth with the reverence it deserves.',
      icon: <HeartHandshake className="w-6 h-6 text-emerald-400" />
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
    <div className="space-y-20 pb-20">
      
      {/* Hero Section matching diagram */}
      <section className="relative pt-12 md:pt-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#97144d]/30 to-amber-500/20 border border-[#97144d]/50 text-gold-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Crown className="w-3.5 h-3.5" />
            <span>Who We Are</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            About NexBank
          </h1>
          <p className="text-lg sm:text-xl text-pink-100/70 mt-4 max-w-2xl mx-auto font-normal">
            Building a smarter and safer financial future for everyone.
          </p>

          {/* Headquarters architectural visual mock matching diagram */}
          <div className="mt-12 relative rounded-3xl overflow-hidden border border-[#97144d]/40 shadow-2xl max-w-4xl mx-auto">
            <div className="h-72 sm:h-96 w-full bg-gradient-to-tr from-[#3b061d] via-[#1a0411] to-[#25071a] relative flex items-center justify-center p-8 text-center overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ea7ea6_1px,transparent_1px)] [background-size:24px_24px]"></div>
              
              <div className="relative z-10 space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-[#97144d]/40 border border-amber-400/50 flex items-center justify-center mx-auto text-gold-400 shadow-xl">
                  <Building2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white">NexBank Global Headquarters</h3>
                <p className="text-sm text-pink-100/80 max-w-lg mx-auto">
                  Lexington Avenue, New York • Regulated Financial Institution & Tier-4 Vault Infrastructure
                </p>
                <div className="pt-2 flex justify-center gap-4 text-xs font-bold">
                  <span className="px-3.5 py-1 rounded-full bg-[#15040e] text-gold-300 border border-[#97144d]/40">250+ Global Branches</span>
                  <span className="px-3.5 py-1 rounded-full bg-[#15040e] text-pink-200 border border-[#97144d]/40">4,200+ Financial Experts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Core Pillars matching diagram */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {corePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#1b0513]/90 border border-[#97144d]/30 hover:border-[#ea7ea6] transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1.5 group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#2a071c] group-hover:bg-[#97144d] border border-[#97144d]/40 flex items-center justify-center mb-6 transition-all group-hover:scale-110">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-gold-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-pink-100/70 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#97144d]/30 text-xs font-bold text-pink-300/60">
                Guaranteed by NexBank Governance
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Milestones */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-black text-white">Our Journey of Innovation</h2>
          <p className="text-sm text-pink-200/70 mt-2 font-normal">How we evolved from a fintech challenger to a premier worldwide institution.</p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#180411] border border-[#97144d]/30 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:border-pink-400/50 transition-colors"
            >
              <div className="px-3.5 py-1.5 rounded-xl bg-[#97144d]/30 text-gold-300 font-mono font-black text-sm shrink-0 border border-[#97144d]/50">
                {m.year}
              </div>
              <div className="flex-1">
                <h4 className="text-base font-bold text-white">{m.title}</h4>
                <p className="text-xs text-pink-200/60 mt-0.5 font-normal">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-black text-white">Executive Leadership</h2>
          <p className="text-sm text-pink-200/70 mt-2 font-normal">Stewarding financial integrity and technological excellence.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map((person, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#1b0513] border border-[#97144d]/30 text-center space-y-3 shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#97144d] to-amber-400 mx-auto flex items-center justify-center text-white text-xl font-black shadow-lg">
                {person.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <h4 className="text-lg font-bold text-white pt-1">{person.name}</h4>
              <div className="text-xs text-gold-400 font-bold">{person.role}</div>
              <p className="text-xs text-pink-100/70 leading-relaxed pt-2 border-t border-[#97144d]/20 font-normal">
                {person.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1d0514] border border-[#97144d]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="text-2xl font-black text-white">Experience modern banking today</h3>
            <p className="text-sm text-pink-200/70 mt-1 font-normal">Join over 2.4 million account holders worldwide.</p>
          </div>
          <button
            onClick={() => navigate('/open-account')}
            className="btn-shimmer px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#97144d] to-amber-500 hover:brightness-110 text-white font-bold text-sm transition-all shrink-0"
          >
            Open an Account in 3 Mins
          </button>
        </div>
      </section>

    </div>
  );
};
