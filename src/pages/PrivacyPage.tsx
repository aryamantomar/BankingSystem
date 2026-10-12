import React from 'react';
import { useBanking } from '../context/BankingContext';
import { ScrollReveal } from '../components/ScrollReveal';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  const { navigate } = useBanking();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-10 text-slate-700 font-normal bg-[#fbf9fa]">
      
      {/* Header matching diagram */}
      <ScrollReveal direction="down">
        <div className="space-y-3">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#97144d] hover:text-[#740e3a] mb-2 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#fdf2f6] border border-[#97144d]/20 text-[#97144d] text-xs font-black uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Data Safeguards & Trust</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900">Privacy Policy</h1>
          <p className="text-xs text-slate-500">
            Last revised: October 2026 • Compliant with Gramm-Leach-Bliley Act (GLBA) and GDPR.
          </p>
        </div>
      </ScrollReveal>

      {/* Structured Privacy Content */}
      <ScrollReveal direction="up">
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#150912] border border-slate-200/90 dark:border-[#97144d]/25 space-y-8 text-sm leading-relaxed shadow-[0_20px_45px_-10px_rgba(151,20,77,0.08)]">
          
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-[#fdf2f6] text-[#97144d] flex items-center justify-center text-xs font-black border border-[#97144d]/20">1</span>
              Our Privacy Commitment
            </h2>
            <p className="text-slate-600">
              At NexBank, your financial privacy is sacrosanct. We treat your personal and transactional information with maximum confidentiality. We do not sell, rent, or lease your personally identifiable data to third-party marketers or advertisers under any circumstances.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-[#fdf2f6] text-[#97144d] flex items-center justify-center text-xs font-black border border-[#97144d]/20">2</span>
              Information We Collect
            </h2>
            <p className="text-slate-600">
              We collect information necessary to deliver compliant banking services:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600">
              <li>Identification records (Full legal name, PAN/SSN, driver's license or passport scans).</li>
              <li>Financial activity data (Account balance, transactional records, payment history, recipient details).</li>
              <li>Digital identifiers (IP address, operating system, biometric authentication tokens, fraud analysis flags).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-[#fdf2f6] text-[#97144d] flex items-center justify-center text-xs font-black border border-[#97144d]/20">3</span>
              Bank-Grade Cryptographic Encryption
            </h2>
            <p className="text-slate-600">
              All data in transit is protected by Transport Layer Security (TLS 1.3) with 256-bit AES encryption. Data at rest across our distributed ledger databases is protected by hardware security modules (HSM) conforming to FIPS 140-2 Level 3 standards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-[#fdf2f6] text-[#97144d] flex items-center justify-center text-xs font-black border border-[#97144d]/20">4</span>
              Your Privacy Rights & Controls
            </h2>
            <p className="text-slate-600">
              You have the right to inspect, download a machine-readable copy of your banking records, restrict specific marketing communications, or request account closure subject to regulatory retention laws. You can modify these preferences in your Account Settings.
            </p>
          </section>

          <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
            <span>Data Protection Officer: <span className="text-slate-900 font-bold">dpo@nexbank.com</span></span>
            <button onClick={() => navigate('/terms')} className="text-[#97144d] hover:underline font-bold">
              View Terms & Conditions →
            </button>
          </div>

        </div>
      </ScrollReveal>

    </div>
  );
};
