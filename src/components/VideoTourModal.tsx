import React, { useRef, useState } from 'react';
import { useBanking } from '../context/BankingContext';
import { 
  X, 
  Play, 
  Download, 
  Film, 
  Clock, 
  Sparkles, 
  Subtitles, 
  FileText,
  Volume2
} from 'lucide-react';

interface Chapter {
  time: number;
  label: string;
  badge: string;
}

const CHAPTERS: Chapter[] = [
  { time: 0, label: 'Welcome to NexBank', badge: 'Overview' },
  { time: 15, label: 'Instant Digital Onboarding', badge: '01' },
  { time: 28, label: 'Smart Banking Dashboard', badge: '02' },
  { time: 42, label: 'Core Financial Services', badge: '03' },
  { time: 57, label: 'Financial Intelligence (EMI & SIP)', badge: '04' },
  { time: 71, label: 'Enterprise Banking & Support', badge: '05' },
  { time: 86, label: 'Security Standards & Architecture', badge: '06' },
];

export const VideoTourModal: React.FC = () => {
  const { isVideoTourOpen, setIsVideoTourOpen } = useBanking();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [activeChapter, setActiveChapter] = useState(0);

  if (!isVideoTourOpen) return null;

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const cur = videoRef.current.currentTime;
    for (let i = CHAPTERS.length - 1; i >= 0; i--) {
      if (cur >= CHAPTERS[i].time) {
        setActiveChapter(i);
        break;
      }
    }
  };

  const jumpTo = (time: number, idx: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      videoRef.current.play();
      setActiveChapter(idx);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-5xl bg-[#0f1422] text-white rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#161d31]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#97144d] to-[#dc4e83] flex items-center justify-center shadow-lg shadow-[#97144d]/30">
              <Film className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black tracking-tight text-white">NexBank Video Showcase</h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  Full HD 1080p
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <Subtitles className="w-3 h-3" /> Captioned
                </span>
              </div>
              <p className="text-xs text-slate-400">Complete architectural walkthrough, core banking features & simulators</p>
            </div>
          </div>

          <button
            onClick={() => setIsVideoTourOpen(false)}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-slate-300 hover:text-white"
            aria-label="Close video tour"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Area */}
        <div className="relative bg-black aspect-video w-full flex items-center justify-center overflow-hidden">
          <video
            ref={videoRef}
            src="/nexbank_showcase.mp4"
            controls
            autoPlay
            playsInline
            onTimeUpdate={handleTimeUpdate}
            className="w-full h-full object-contain"
          >
            <track 
              src="/nexbank_showcase.vtt" 
              kind="subtitles" 
              srcLang="en" 
              label="English (Burned & Soft)" 
              default 
            />
            Your browser does not support HTML5 video.
          </video>
        </div>

        {/* Footer & Chapter Quick Navigation */}
        <div className="p-4 sm:p-5 bg-[#121829] border-t border-white/10 space-y-3 overflow-y-auto">
          {/* Chapter Bar */}
          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-semibold">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-[#ec4899]" /> Interactive Chapters:
              </span>
              <span className="text-[11px] text-slate-400">Click any chapter to jump</span>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
              {CHAPTERS.map((ch, idx) => {
                const isActive = activeChapter === idx;
                return (
                  <button
                    key={ch.label}
                    onClick={() => jumpTo(ch.time, idx)}
                    className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border ${
                      isActive
                        ? 'bg-[#97144d] text-white border-rose-400/50 shadow-md shadow-[#97144d]/40 scale-105'
                        : 'bg-white/5 hover:bg-white/10 text-slate-300 border-white/10'
                    }`}
                  >
                    <span className="text-[10px] opacity-75">{ch.badge}</span>
                    <span>{ch.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Download & Spec Info Bar */}
          <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1 text-slate-300 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Faceless Video with Neural Voiceover & Dynamic Progress Bar
              </span>
              <span className="hidden md:inline text-white/20">•</span>
              <span className="hidden md:inline">Duration: 1m 40s (99.98s)</span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="/nexbank_showcase.mp4"
                download="NexBank_Official_Showcase.mp4"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Video (12 MB)</span>
              </a>

              <a
                href="/nexbank_showcase.srt"
                download="NexBank_Subtitles.srt"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-medium transition-colors"
                title="Download SRT Captions"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>.SRT</span>
              </a>

              <a
                href="/nexbank_showcase.vtt"
                download="NexBank_Subtitles.vtt"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-medium transition-colors"
                title="Download VTT Captions"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>.VTT</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
