import React, { useState } from 'react';
import { useBanking } from '../context/BankingContext';
import { faqList } from '../data/bankingData';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  MessageSquare, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const FaqPage: React.FC = () => {
  const { navigate, setIsChatOpen } = useBanking();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = ['All', 'Accounts', 'Transfers', 'Loans', 'Security', 'General'];

  const filteredFaqs = faqList.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-16 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Hero Section matching diagram */}
      <section className="relative pt-12 md:pt-16 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Knowledge Base</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-base text-slate-300 max-w-xl mx-auto font-light">
          Everything you need to know about NexBank accounts, limits, security, and loans.
        </p>

        {/* Search Bar matching diagram */}
        <div className="pt-4 max-w-xl mx-auto relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. transfer charges, open account, security)..."
            className="w-full bg-slate-900 border border-slate-700 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 shadow-xl"
          />
        </div>

        {/* Category Pills */}
        <div className="pt-2 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Accordion Questions List matching diagram */}
      <section className="space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 text-center text-sm text-slate-400">
            No matching questions found for "{searchQuery}". Try searching with different keywords or ask our 24/7 AI chat.
          </div>
        ) : (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-850 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="p-1 rounded-lg bg-slate-800 text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 bg-slate-950/40 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </section>

      {/* Still need help callout */}
      <section className="p-8 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-4">
        <h3 className="text-xl font-bold text-white">Couldn't find what you were searching for?</h3>
        <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
          Our round-the-clock customer support officers and NexBot AI assistant are ready to assist you anytime.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => setIsChatOpen(true)}
            className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat with NexBot Now</span>
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 font-semibold text-xs border border-slate-700"
          >
            Contact Customer Support Desk
          </button>
        </div>
      </section>

    </div>
  );
};
