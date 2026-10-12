import React from 'react';
import { useBanking } from '../context/BankingContext';
import { Lock, ShieldCheck, EyeOff, ArrowLeft } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  const { navigate } = useBanking();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-10 text-slate-300">
      
      {/* Header matching diagram */}
      <div className="space-y-3">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 mb-2"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Data Safeguards & Trust</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Privacy Policy</h1>
        <p className="text-xs text-slate-400">
          Last revised: October 2026 • Compliant with Gramm-Leach-Bliley Act (GLBA) and GDPR.
        </p>
      </div>

      {/* Structured Privacy Content */}
      <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 space-y-8 text-sm leading-relaxed">
        
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-cyan-600/20 text-cyan-400 flex items-center justify-center text-xs">1</span>
            Our Privacy Commitment
          </h2>
          <p>
            At NexBank, your financial privacy is sacrosanct. We treat your personal and transactional information with maximum confidentiality. We do not sell, rent, or lease your personally identifiable data to third-party marketers or advertisers under any circumstances.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-cyan-600/20 text-cyan-400 flex items-center justify-center text-xs">2</span>
            Information We Collect
          </h2>
          <p>
            We collect information necessary to deliver compliant banking services:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-300">
            <li>Identification records (Full legal name, SSN/PAN, driver's license or passport scans).</li>
            <li>Financial activity data (Account balance, transactional records, payment history, recipient details).</li>
            <li>Digital identifiers (IP address, operating system, biometric authentication tokens, fraud analysis flags).</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-cyan-600/20 text-cyan-400 flex items-center justify-center text-xs">3</span>
            Bank-Grade Cryptographic Encryption
          </h2>
          <p>
            All data in transit is protected by Transport Layer Security (TLS 1.3) with 256-bit AES encryption. Data at rest across our distributed ledger databases is protected by hardware security modules (HSM) conforming to FIPS 140-2 Level 3 standards.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-cyan-600/20 text-cyan-400 flex items-center justify-center text-xs">4</span>
            Your Privacy Rights & Controls
          </h2>
          <p>
            You have the right to inspect, download a machine-readable copy of your banking records, restrict specific marketing communications, or request account closure subject to regulatory retention laws. You can modify these preferences in your Account Settings.
          </p>
        </section>

        <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
          <span>Data Protection Officer: <span className="text-slate-300">dpo@nexbank.com</span></span>
          <button onClick={() => navigate('/terms')} className="text-cyan-400 hover:underline">
            View Terms & Conditions →
          </button>
        </div>

      </div>

    </div>
  );
};
