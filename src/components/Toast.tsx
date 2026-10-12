import React from 'react';
import { useBanking } from '../context/BankingContext';
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, dismissToast } = useBanking();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        const getIcon = () => {
          switch (toast.type) {
            case 'success':
              return <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />;
            case 'error':
              return <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />;
            case 'warning':
              return <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />;
            default:
              return <Info className="w-5 h-5 text-[#97144d] shrink-0" />;
          }
        };

        const getBorderColor = () => {
          switch (toast.type) {
            case 'success':
              return 'border-emerald-200 bg-white shadow-emerald-900/5';
            case 'error':
              return 'border-rose-200 bg-white shadow-rose-900/5';
            case 'warning':
              return 'border-amber-200 bg-white shadow-amber-900/5';
            default:
              return 'border-[#97144d]/20 bg-white shadow-[#97144d]/5';
          }
        };

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-start gap-3 p-4 rounded-2xl border shadow-xl backdrop-blur-md transition-all duration-300 animate-slideUp ${getBorderColor()}`}
          >
            {getIcon()}
            <div className="flex-1">
              <h5 className="text-sm font-extrabold text-slate-900 leading-tight">{toast.title}</h5>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">{toast.message}</p>
            </div>
            <button
              onClick={() => dismissToast(toast.id)}
              className="text-slate-400 hover:text-slate-700 p-1 rounded-md transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
