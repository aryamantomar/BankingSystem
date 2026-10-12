import React, { useState } from 'react';
import { useBanking } from '../context/BankingContext';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
}

export const LiveChatModal: React.FC = () => {
  const { isChatOpen, setIsChatOpen, user } = useBanking();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'bot',
      text: `Hello! I'm NexBot, your 24/7 AI banking concierge. How can I assist you with your NexBank account today?`,
      time: 'Just now'
    }
  ]);
  const [inputText, setInputText] = useState('');

  const quickPrompts = [
    'Check my balance',
    'What are loan interest rates?',
    'How do I transfer funds?',
    'Report lost debit card'
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: 'msg-' + Date.now(),
      sender: 'user',
      text: text.trim(),
      time: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');

    // Simulate smart bot response
    setTimeout(() => {
      const lower = text.toLowerCase();
      let reply = "I understand your query. Our senior customer support specialist has been notified. You can also reach our 24/7 telephone helpline at +1 800-NEX-BANK.";

      if (lower.includes('balance')) {
        if (user) {
          reply = `Your current primary Savings Account balance is $${user.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}.`;
        } else {
          reply = "Please log in to your NexBank account to check your live balance, or click 'Login' on the top bar.";
        }
      } else if (lower.includes('loan') || lower.includes('interest')) {
        reply = "NexBank offers Home Loans starting at 6.85% p.a., Education Loans at 8.10% p.a., and Personal Loans at 9.50% p.a. Check out our interactive Loan EMI Calculator under Loans!";
      } else if (lower.includes('transfer') || lower.includes('imps') || lower.includes('neft')) {
        reply = "You can execute zero-fee transfers instantly via IMPS, UPI, NEFT, or RTGS from your Dashboard or the Services page!";
      } else if (lower.includes('lost') || lower.includes('card') || lower.includes('block')) {
        reply = "EMERGENCY PROTOCOL: If your card has been lost or compromised, we can temporarily freeze your card instantly in your Dashboard security tab or call our emergency hotline at 1800-555-LOCK.";
      } else if (lower.includes('open') || lower.includes('account')) {
        reply = "You can open a 100% digital account in 3 minutes! Click 'Open Account' on the top navigation.";
      }

      const botReply: ChatMessage = {
        id: 'msg-' + (Date.now() + 1),
        sender: 'bot',
        text: reply,
        time: 'Just now'
      };
      setMessages((prev) => [...prev, botReply]);
    }, 600);
  };

  return (
    <>
      {/* Floating launcher trigger */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-2xl shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2 group"
        aria-label="Open Live Chat"
      >
        <MessageSquare className="w-6 h-6 group-hover:rotate-6 transition-transform" />
        <span className="text-sm font-semibold pr-1 hidden sm:inline">24/7 Live Support</span>
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
      </button>

      {/* Chat Window Modal */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[92vw] sm:w-[400px] h-[540px] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-scaleUp">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/30">
                  <Bot className="w-5 h-5" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-900"></span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  NexBot AI Assistant
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                </h4>
                <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                  Online • Avg reply time: instant
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-950/60">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-lg bg-blue-600/30 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                <div
                  className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-tr-none'
                      : 'bg-slate-800 text-slate-200 border border-slate-700/70 rounded-tl-none'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span className={`text-[10px] block mt-1 ${msg.sender === 'user' ? 'text-blue-200 text-right' : 'text-slate-400'}`}>
                    {msg.time}
                  </span>
                </div>
                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-slate-700 flex items-center justify-center text-slate-200 shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Prompts */}
          <div className="p-2 border-t border-slate-800/80 bg-slate-900/90 flex gap-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="whitespace-nowrap text-[11px] px-2.5 py-1 rounded-full bg-slate-800 hover:bg-blue-600/20 text-slate-300 hover:text-blue-300 border border-slate-700 transition-colors shrink-0"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input field */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about accounts, transfers, loans..."
              className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-colors"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
