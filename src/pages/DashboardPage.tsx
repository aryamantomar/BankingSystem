import React, { useState } from 'react';
import { useBanking } from '../context/BankingContext';
import { 
  SendHorizontal, 
  Receipt, 
  CreditCard, 
  Download, 
  Lock, 
  Unlock, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Copy, 
  Eye, 
  EyeOff, 
  Check, 
  TrendingUp,
  Crown,
  Sparkles
} from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const { user, transactions, transferFunds, payBill, showToast, navigate } = useBanking();

  const [filterType, setFilterType] = useState<'all' | 'credit' | 'debit'>('all');
  const [showCardNumber, setShowCardNumber] = useState(false);
  const [cardFrozen, setCardFrozen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Quick Action Modal states
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [transferAmount, setTransferAmount] = useState('500');
  const [recipientName, setRecipientName] = useState('David Miller');
  const [recipientAcct, setRecipientAcct] = useState('4092 1198 4402');

  if (!user) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center py-12 px-4 text-center">
        <div className="max-w-md p-8 rounded-3xl bg-[#1d0514] border border-[#97144d]/40 space-y-4 shadow-2xl">
          <h2 className="text-xl font-black text-white">Sign In Required</h2>
          <p className="text-xs text-pink-200/70">Please authenticate to view your personal banking dashboard.</p>
          <button
            onClick={() => navigate('/login')}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#97144d] to-amber-500 text-white font-bold text-xs transition-all shadow-md"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  const handleCopyAccount = () => {
    navigator.clipboard?.writeText(user.accountNumber.replace(/\s/g, ''));
    setCopied(true);
    showToast('Copied to Clipboard', `Account Number ${user.accountNumber} copied.`, 'info');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleQuickTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    const amt = parseFloat(transferAmount);
    if (isNaN(amt) || amt <= 0) return;
    const ok = transferFunds(amt, recipientName, recipientAcct, 'IMPS');
    if (ok) {
      setShowTransferModal(false);
    }
  };

  const handleDownloadStatement = () => {
    showToast('Statement Generated', 'Your October 2026 Monthly Statement PDF has been downloaded.', 'success');
  };

  const filteredTransactions = transactions.filter((t) => {
    if (filterType === 'credit') return t.type === 'credit';
    if (filterType === 'debit') return t.type === 'debit';
    return true;
  });

  return (
    <div className="space-y-10 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      
      {/* Welcome Banner with Axis Burgundy styling */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#5a092c] via-[#240616] to-[#1d0514] border border-[#97144d]/50 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="space-y-1 relative z-10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-wider text-gold-400 flex items-center gap-1">
              <Crown className="w-3.5 h-3.5 text-gold-400" />
              BURGUNDY PRIVATE CLIENT
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            Welcome, {user.name}
          </h1>
          <p className="text-xs text-pink-200/70">
            Account #{user.accountNumber} • IFSC: {user.ifscCode} • Member since {user.joinedDate}
          </p>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 relative z-10">
          <button
            onClick={() => setShowTransferModal(true)}
            className="btn-shimmer px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#97144d] to-amber-500 hover:brightness-110 text-white font-bold text-xs shadow-lg shadow-[#97144d]/30 transition-all flex items-center gap-1.5"
          >
            <SendHorizontal className="w-4 h-4" />
            <span>Send Money</span>
          </button>
          <button
            onClick={() => navigate('/services')}
            className="px-4 py-2.5 rounded-xl bg-[#26081b] hover:bg-[#380b27] text-pink-100 font-bold text-xs border border-[#97144d]/40 transition-colors flex items-center gap-1.5"
          >
            <Receipt className="w-4 h-4 text-gold-400" />
            <span>Pay Bills</span>
          </button>
          <button
            onClick={handleDownloadStatement}
            className="px-4 py-2.5 rounded-xl bg-[#26081b] hover:bg-[#380b27] text-pink-100 font-bold text-xs border border-[#97144d]/40 transition-colors flex items-center gap-1.5"
          >
            <Download className="w-4 h-4 text-[#ea7ea6]" />
            <span>Statement PDF</span>
          </button>
        </div>
      </div>

      {/* Account Balances & Card Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Account Summary Metrics */}
        <div className="lg:col-span-7 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Total Balance Card */}
            <div className="p-6 rounded-3xl bg-[#1d0514] border border-[#97144d]/40 shadow-xl relative overflow-hidden">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-pink-200/70">Available Balance</span>
                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Active
                </span>
              </div>
              <div className="mt-3">
                <h2 className="text-3xl font-black text-white font-mono tracking-tight">
                  ${user.balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </h2>
                <p className="text-[11px] text-gold-300 mt-1 flex items-center gap-1 font-bold">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Earning 7.85% Compound Annual Return</span>
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#97144d]/30 flex items-center justify-between text-xs text-pink-200/60">
                <span>Account Type: <strong className="text-white">{user.accountType}</strong></span>
                <button onClick={handleCopyAccount} className="hover:text-white flex items-center gap-1 font-bold text-gold-300">
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Acct'}</span>
                </button>
              </div>
            </div>

            {/* Monthly In/Out Cashflow Card */}
            <div className="p-6 rounded-3xl bg-[#1d0514] border border-[#97144d]/40 shadow-xl">
              <span className="text-xs font-bold text-pink-200/70">October Cash Flow</span>
              <div className="mt-4 space-y-2.5 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-pink-200/70 flex items-center gap-1">
                    <ArrowDownLeft className="w-3.5 h-3.5 text-emerald-400" /> Total Inflow
                  </span>
                  <span className="font-bold text-emerald-400 font-mono">+$4,720.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-pink-200/70 flex items-center gap-1">
                    <ArrowUpRight className="w-3.5 h-3.5 text-rose-400" /> Total Outflow
                  </span>
                  <span className="font-bold text-rose-400 font-mono">-$1,492.50</span>
                </div>
                <div className="pt-2 border-t border-[#97144d]/30 flex justify-between items-center text-[11px] text-pink-200/60">
                  <span>Net Savings Ratio</span>
                  <span className="font-black text-gold-400 font-mono">+68.3%</span>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Transfer Form Shortcut */}
          <div className="p-6 rounded-3xl bg-[#1d0514] border border-[#97144d]/40 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-black text-white">Instant One-Click Transfer</h3>
              <span className="text-xs text-gold-400 font-bold">Zero Fee Rails</span>
            </div>

            <form onSubmit={handleQuickTransfer} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="text"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                placeholder="Recipient Name"
                required
                className="bg-[#0f0209] border border-[#97144d]/40 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
              />
              <input
                type="number"
                value={transferAmount}
                onChange={(e) => setTransferAmount(e.target.value)}
                placeholder="Amount ($)"
                required
                className="bg-[#0f0209] border border-[#97144d]/40 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400 font-bold"
              />
              <button
                type="submit"
                className="btn-shimmer py-2 px-4 rounded-xl bg-gradient-to-r from-[#97144d] to-amber-500 hover:brightness-110 text-white font-black text-xs transition-all flex items-center justify-center gap-1.5 shadow-md shadow-[#97144d]/30"
              >
                <SendHorizontal className="w-3.5 h-3.5" />
                <span>Send ${transferAmount}</span>
              </button>
            </form>
          </div>
        </div>

        {/* Right: Axis Burgundy Metal Virtual Card Widget */}
        <div className="lg:col-span-5 space-y-4">
          <div className={`p-6 rounded-3xl border transition-all relative overflow-hidden shadow-2xl ${
            cardFrozen
              ? 'bg-[#180411] border-rose-500/40 opacity-75'
              : 'bg-gradient-to-br from-[#3b061d] via-[#740e3a] to-[#97144d] border-amber-400/40'
          }`}>
            <div className="flex justify-between items-center text-xs text-white">
              <span className="font-black tracking-wider text-gold-200">BURGUNDY PRIVATE METAL</span>
              <div className="w-8 h-6 rounded bg-gradient-to-tr from-amber-300 to-amber-500 border border-amber-200 flex items-center justify-center">
                <div className="w-4 h-3 border border-amber-800/40 rounded-sm"></div>
              </div>
            </div>

            <div className="mt-8 space-y-1">
              <span className="text-[10px] text-gold-300 uppercase tracking-wider font-bold">Card Number</span>
              <div className="text-lg sm:text-xl font-mono font-black tracking-widest text-white flex items-center justify-between drop-shadow">
                <span>
                  {showCardNumber
                    ? user.cardDetails.cardNumber
                    : '4111 •••• •••• ' + user.cardDetails.cardNumber.slice(-4)}
                </span>
                <button
                  onClick={() => setShowCardNumber(!showCardNumber)}
                  className="text-gold-300 hover:text-white p-1"
                >
                  {showCardNumber ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="mt-6 flex justify-between items-end text-xs text-pink-200">
              <div>
                <span className="text-[9px] uppercase block text-pink-300/70 font-bold">Cardholder</span>
                <span className="font-black text-white tracking-wider">{user.cardDetails.cardHolder}</span>
              </div>
              <div>
                <span className="text-[9px] uppercase block text-pink-300/70 font-bold">Expires</span>
                <span className="font-mono text-gold-300 font-bold">{user.cardDetails.expiry}</span>
              </div>
              <div>
                <span className="text-[9px] uppercase block text-pink-300/70 font-bold">CVV</span>
                <span className="font-mono text-gold-300 font-bold">{showCardNumber ? user.cardDetails.cvv : '•••'}</span>
              </div>
            </div>

            {cardFrozen && (
              <div className="absolute inset-0 bg-[#0e030a]/85 backdrop-blur-sm flex items-center justify-center flex-col gap-2">
                <Lock className="w-8 h-8 text-rose-400" />
                <span className="text-sm font-black text-rose-300 uppercase tracking-wider">Card Frozen</span>
              </div>
            )}
          </div>

          {/* Card Controls */}
          <div className="flex gap-2 text-xs">
            <button
              onClick={() => {
                setCardFrozen(!cardFrozen);
                showToast(
                  cardFrozen ? 'Card Unfrozen' : 'Card Frozen',
                  cardFrozen ? 'Your Burgundy card is now active for purchases.' : 'Card temporarily blocked from authorizations.',
                  cardFrozen ? 'success' : 'warning'
                );
              }}
              className={`flex-1 py-2.5 rounded-xl border font-bold transition-all flex items-center justify-center gap-1.5 ${
                cardFrozen
                  ? 'bg-emerald-600/20 text-emerald-400 border-emerald-500/30 hover:bg-emerald-600/30'
                  : 'bg-rose-500/20 text-rose-300 border-rose-500/30 hover:bg-rose-500/30'
              }`}
            >
              {cardFrozen ? <Unlock className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
              <span>{cardFrozen ? 'Unfreeze Card' : 'Freeze Card'}</span>
            </button>

            <button
              onClick={() => showToast('Limits Updated', 'Daily contactless and online limit set to $5,000.', 'info')}
              className="flex-1 py-2.5 rounded-xl bg-[#220615] hover:bg-[#340920] text-pink-200 border border-[#97144d]/40 font-bold transition-colors text-center"
            >
              Adjust Limits
            </button>
          </div>
        </div>

      </div>

      {/* Transaction History Section */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#1d0514] border border-[#97144d]/40 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-black text-white">Live Transaction History</h3>
            <p className="text-xs text-pink-200/70 font-normal">Showing recent activity across all linked payment channels.</p>
          </div>

          <div className="flex gap-2">
            {(['all', 'credit', 'debit'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setFilterType(filter)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold capitalize transition-all ${
                  filterType === filter
                    ? 'bg-gradient-to-r from-[#97144d] to-[#c52e69] text-white shadow-md'
                    : 'bg-[#15040f] text-pink-200 border border-[#97144d]/30 hover:bg-[#25071a]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Transactions Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-[#97144d]/30 text-pink-300/70 uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4">Transaction / Description</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Timestamp</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#97144d]/20 text-pink-100/90 font-normal">
              {filteredTransactions.map((t) => (
                <tr key={t.id} className="hover:bg-[#28071c]/60 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                        t.type === 'credit'
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-[#97144d]/30 text-gold-300 border border-[#97144d]/40'
                      }`}>
                        {t.type === 'credit' ? <ArrowDownLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                      </div>
                      <div>
                        <div className="font-bold text-white">{t.description}</div>
                        <div className="text-[10px] text-pink-300/60 font-mono">{t.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-pink-200/80">{t.category}</td>
                  <td className="py-3.5 px-4 text-pink-300/60">{t.date}</td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {t.status}
                    </span>
                  </td>
                  <td className={`py-3.5 px-4 text-right font-mono font-bold text-sm ${
                    t.type === 'credit' ? 'text-emerald-400' : 'text-slate-200'
                  }`}>
                    {t.type === 'credit' ? '+' : '-'}${t.amount.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
