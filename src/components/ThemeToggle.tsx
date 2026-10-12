import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useBanking } from '../context/BankingContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
  size?: 'sm' | 'md';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  showLabel = false,
  size = 'md'
}) => {
  const { theme, toggleTheme } = useBanking();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative inline-flex items-center justify-center gap-2 rounded-xl border transition-all duration-300 select-none group ${
        isDark
          ? 'bg-[#1e111a] hover:bg-[#281523] border-[#97144d]/40 text-amber-300 shadow-[0_0_15px_-3px_rgba(251,191,36,0.2)]'
          : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-[#97144d]/30 text-slate-700 shadow-sm'
      } ${
        size === 'sm' ? 'px-2.5 py-1.5 text-xs' : 'px-3 py-2 text-xs sm:text-sm'
      } ${className}`}
    >
      {/* Icon with rotational animation */}
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400 rotate-0 transition-transform duration-500 group-hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 text-[#97144d] -rotate-12 transition-transform duration-500 group-hover:rotate-0" />
        )}
      </div>

      {showLabel && (
        <span className="font-bold tracking-tight text-xs">
          {isDark ? 'Light' : 'Dark'}
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;
