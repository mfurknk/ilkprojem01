import React, { useState, useEffect, useRef } from 'react';
import { TRANSCRIPT_DATA, Utterance } from '../data/transcriptData';
import { 
  Search, 
  Play, 
  Pause, 
  RotateCcw, 
  Sliders, 
  Copy, 
  Check, 
  Volume2, 
  Clock, 
  User, 
  Sparkles,
  Info,
  X
} from 'lucide-react';

interface TranscriptViewerProps {
  initialTimestamp?: number | null;
  onAddNote?: (quote: string) => void;
}

export const TranscriptViewer: React.FC<TranscriptViewerProps> = ({ 
  initialTimestamp, 
  onAddNote 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpeaker, setSelectedSpeaker] = useState<string>('all');
  const [selectedSection, setSelectedSection] = useState<'all' | 'giris' | 'ana_ders'>('all');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPlaySec, setCurrentPlaySec] = useState(initialTimestamp || 0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [activeUtteranceId, setActiveUtteranceId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTermModal, setActiveTermModal] = useState<{ term: string; arabic: string; explanation: string } | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const utteranceRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const speakers = Array.from(new Set(TRANSCRIPT_DATA.map(u => u.speaker)));

  // Handle jumping if timestamp passed externally
  useEffect(() => {
    if (initialTimestamp !== undefined && initialTimestamp !== null) {
      setCurrentPlaySec(initialTimestamp);
      const targetUtterance = TRANSCRIPT_DATA.find(u => u.timeSec >= initialTimestamp) || TRANSCRIPT_DATA[0];
      if (targetUtterance) {
        setActiveUtteranceId(targetUtterance.id);
        const el = utteranceRefs.current[targetUtterance.id];
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }
  }, [initialTimestamp]);

  // Audio simulation timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentPlaySec(prev => {
          const next = prev + 1;
          if (next > 4300) {
            setIsPlaying(false);
            return 0;
          }
          return next;
        });
      }, 1000 / playbackSpeed);
    }
    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed]);

  // Update active utterance based on currentPlaySec
  useEffect(() => {
    const current = TRANSCRIPT_DATA.reduce((acc, curr) => {
      if (curr.timeSec <= currentPlaySec) {
        return curr;
      }
      return acc;
    }, TRANSCRIPT_DATA[0]);

    if (current && current.id !== activeUtteranceId) {
      setActiveUtteranceId(current.id);
      if (isPlaying) {
        const el = utteranceRefs.current[current.id];
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    }
  }, [currentPlaySec, isPlaying]);

  // Filter utterances
  const filteredUtterances = TRANSCRIPT_DATA.filter(u => {
    if (selectedSection !== 'all' && u.section !== selectedSection) {
      return false;
    }
    if (selectedSpeaker !== 'all' && u.speaker !== selectedSpeaker) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const inText = u.text.toLowerCase().includes(q);
      const inSpeaker = u.speaker.toLowerCase().includes(q);
      const inTerms = u.arabicTerms?.some(t => t.term.toLowerCase().includes(q) || t.arabic.includes(q)) ?? false;
      const inTopics = u.keyTopics?.some(top => top.toLowerCase().includes(q)) ?? false;
      return inText || inSpeaker || inTerms || inTopics;
    }
    return true;
  });

  const handleCopyQuote = (u: Utterance) => {
    const quote = `[${u.timeStr}] ${u.speaker}: ${u.text}`;
    navigator.clipboard.writeText(quote);
    setCopiedId(u.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const jumpToUtterance = (sec: number, id: string) => {
    setCurrentPlaySec(sec);
    setActiveUtteranceId(id);
    const el = utteranceRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const formatSeconds = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      {/* Top Playback & Search Bar */}
      <div className="bg-white border border-[#E6DAC8] rounded-2xl p-4 lg:p-5 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Simulated Audio Player Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 rounded-full bg-[#2A241E] hover:bg-[#1A1816] text-white flex items-center justify-center transition-transform active:scale-95 cursor-pointer shadow-sm shrink-0"
              title={isPlaying ? 'Durdur' : 'Dersi Oynat (Simülasyon)'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
            </button>

            <button
              onClick={() => {
                setCurrentPlaySec(0);
                setIsPlaying(false);
              }}
              className="p-2 rounded-lg text-[#665B4F] hover:bg-[#FAF4EB] transition-colors cursor-pointer"
              title="Başa Sar"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#8C6D46]" />
                <span className="font-mono text-sm font-semibold text-[#2A241E]">
                  {formatSeconds(currentPlaySec)}
                </span>
                <span className="text-xs text-[#8A7C6B]">/ 01:11:30</span>
              </div>
              <span className="text-[11px] text-[#8A7C6B]">
                {isPlaying ? 'Ders akışı takip ediliyor...' : 'Ses akışı duraklatıldı'}
              </span>
            </div>

            {/* Playback speed selector */}
            <div className="ml-2 flex items-center bg-[#FAF4EB] p-0.5 rounded-lg border border-[#E6DAC8]">
              {[1, 1.25, 1.5, 2].map((speed) => (
                <button
                  key={speed}
                  onClick={() => setPlaybackSpeed(speed)}
                  className={`px-2 py-0.5 text-xs font-mono rounded cursor-pointer ${
                    playbackSpeed === speed
                      ? 'bg-[#2A241E] text-white font-medium'
                      : 'text-[#665B4F] hover:text-[#2A241E]'
                  }`}
                >
                  {speed}x
                </button>
              ))}
            </div>
          </div>

          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#8A7C6B]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Metinde, Arapça terimde veya konuşmacıda ara..."
              className="w-full pl-9 pr-8 py-2 text-xs lg:text-sm bg-[#FAF8F5] border border-[#E0D5C3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8C6D46]/30 text-[#1F1C18] placeholder:text-[#9C8F80]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Audio Progress Timeline Scrubber */}
        <div className="space-y-1.5 pt-1">
          <input
            type="range"
            min={0}
            max={4290}
            value={currentPlaySec}
            onChange={(e) => setCurrentPlaySec(Number(e.target.value))}
            className="w-full h-1.5 bg-[#EAE2D5] rounded-lg appearance-none cursor-pointer accent-[#8C6D46]"
          />
          <div className="flex items-center justify-between text-[11px] text-[#8A7C6B]">
            <button 
              onClick={() => jumpToUtterance(0, 'u-1')}
              className="hover:text-[#2A241E] hover:underline cursor-pointer"
            >
              00:00 Giriş & Mukayyed Emir
            </button>
            <button 
              onClick={() => jumpToUtterance(923, 'u-22')}
              className="hover:text-[#2A241E] hover:underline cursor-pointer font-medium text-[#8C6D46]"
            >
              15:23 Hüsn & Kubuh Tahtası
            </button>
            <button 
              onClick={() => jumpToUtterance(1515, 'u-25')}
              className="hover:text-[#2A241E] hover:underline cursor-pointer"
            >
              25:15 Hasan li-Aynihî
            </button>
            <button 
              onClick={() => jumpToUtterance(3041, 'u-40')}
              className="hover:text-[#2A241E] hover:underline cursor-pointer"
            >
              50:41 Hasan li-Ğayrihî
            </button>
            <button 
              onClick={() => jumpToUtterance(4180, 'u-48')}
              className="hover:text-[#2A241E] hover:underline cursor-pointer"
            >
              01:09:40 Berâet-i Zimmet
            </button>
          </div>
        </div>
      </div>

      {/* Filter Chips & Speaker Filter */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Section Segmented Control */}
        <div className="flex items-center gap-1 p-1 bg-[#EAE2D5] rounded-lg border border-[#D5C9B8]">
          <button
            onClick={() => setSelectedSection('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              selectedSection === 'all'
                ? 'bg-white text-[#2A241E] shadow-sm font-semibold'
                : 'text-[#665B4F] hover:text-[#2A241E]'
            }`}
          >
            Tüm Ders
          </button>
          <button
            onClick={() => setSelectedSection('giris')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              selectedSection === 'giris'
                ? 'bg-white text-[#2A241E] shadow-sm font-semibold'
                : 'text-[#665B4F] hover:text-[#2A241E]'
            }`}
          >
            1. Giriş & Tekrar (00:00 - 15:20)
          </button>
          <button
            onClick={() => setSelectedSection('ana_ders')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              selectedSection === 'ana_ders'
                ? 'bg-white text-[#2A241E] shadow-sm font-semibold'
                : 'text-[#665B4F] hover:text-[#2A241E]'
            }`}
          >
            2. Hüsn ve Kubuh (15:23 - 01:11:30)
          </button>
        </div>

        {/* Speaker Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          <span className="text-xs text-[#7D7060] flex items-center gap-1 shrink-0">
            <User className="w-3.5 h-3.5" /> Konuşmacı:
          </span>
          <button
            onClick={() => setSelectedSpeaker('all')}
            className={`px-2.5 py-1 text-xs rounded-full cursor-pointer shrink-0 transition-colors ${
              selectedSpeaker === 'all'
                ? 'bg-[#2A241E] text-white font-medium'
                : 'bg-[#FAF4EB] text-[#5A4F43] hover:bg-[#EFE5D5]'
            }`}
          >
            Hepsi ({TRANSCRIPT_DATA.length})
          </button>
          {speakers.map((spk) => {
            const count = TRANSCRIPT_DATA.filter(u => u.speaker === spk).length;
            return (
              <button
                key={spk}
                onClick={() => setSelectedSpeaker(spk)}
                className={`px-2.5 py-1 text-xs rounded-full cursor-pointer shrink-0 transition-colors ${
                  selectedSpeaker === spk
                    ? spk === 'Hoca' ? 'bg-[#8C6D46] text-white font-medium' : 'bg-[#3D5A80] text-white font-medium'
                    : 'bg-[#FAF4EB] text-[#5A4F43] hover:bg-[#EFE5D5]'
                }`}
              >
                {spk} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Transcript Utterances List */}
      <div 
        ref={containerRef}
        className="space-y-4 max-w-4xl mx-auto"
      >
        {filteredUtterances.length === 0 ? (
          <div className="bg-white border border-[#E6DAC8] rounded-xl p-8 text-center text-[#7D7060]">
            <p className="text-sm">Aramanızla eşleşen bir konuşma bulunamadı.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedSpeaker('all');
                setSelectedSection('all');
              }}
              className="mt-2 text-xs text-[#8C6D46] underline cursor-pointer"
            >
              Filtreleri Temizle
            </button>
          </div>
        ) : (
          filteredUtterances.map((u) => {
            const isHoca = u.speaker === 'Hoca';
            const isActive = activeUtteranceId === u.id;

            return (
              <div
                key={u.id}
                ref={(el) => { utteranceRefs.current[u.id] = el; }}
                className={`rounded-xl p-4 lg:p-5 transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#FFFBF5] border-[#8C6D46] shadow-md ring-2 ring-[#8C6D46]/20'
                    : isHoca 
                      ? 'bg-white border-[#E8DFCFA0] hover:border-[#D8CCA8]' 
                      : 'bg-[#FCFAF7] border-[#ECE3D5] hover:border-[#D8CCA8]'
                }`}
              >
                {/* Header row: Speaker, Timestamp, Actions */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2">
                    <span 
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-full font-serif-scholarly ${
                        isHoca 
                          ? 'bg-[#2A241E] text-[#FAF8F5]' 
                          : 'bg-[#EAE2D5] text-[#3D3328]'
                      }`}
                    >
                      {u.speaker}
                    </span>

                    <button
                      onClick={() => jumpToUtterance(u.timeSec, u.id)}
                      className="font-mono text-xs text-[#8A7C6B] hover:text-[#2A241E] flex items-center gap-1 cursor-pointer"
                      title="Bu zamandan başlat"
                    >
                      <Volume2 className="w-3 h-3 text-[#8C6D46]" />
                      <span>{u.timeStr}</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {onAddNote && (
                      <button
                        onClick={() => onAddNote(`[${u.timeStr}] ${u.speaker}: ${u.text}`)}
                        className="px-2 py-0.5 text-[11px] text-[#665B4F] hover:bg-[#FAF4EB] rounded border border-transparent hover:border-[#E0D5C3] transition-colors cursor-pointer"
                        title="Ders notlarıma aktar"
                      >
                        Not Al
                      </button>
                    )}

                    <button
                      onClick={() => handleCopyQuote(u)}
                      className="p-1 text-[#8A7C6B] hover:text-[#2A241E] rounded hover:bg-[#FAF4EB] transition-colors cursor-pointer"
                      title="Alıntıyı kopyala"
                    >
                      {copiedId === u.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Utterance Text with Typography */}
                <p className={`text-sm lg:text-[15px] leading-relaxed whitespace-pre-line font-serif-scholarly ${
                  isHoca ? 'text-[#1F1C18]' : 'text-[#383027]'
                }`}>
                  {u.text}
                </p>

                {/* Arabic Technical Terms Callout Row */}
                {u.arabicTerms && u.arabicTerms.length > 0 && (
                  <div className="mt-3 pt-2.5 border-t border-[#F0E8DC] flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-medium text-[#8A7C6B] flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#8C6D46]" />
                      İstılahlar:
                    </span>
                    {u.arabicTerms.map((t, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveTermModal(t)}
                        className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#FAF4EB] hover:bg-[#F2E5D3] text-[#3D3328] border border-[#E6DAC8] text-xs transition-colors cursor-pointer group"
                      >
                        <span className="font-arabic font-bold text-sm text-[#8C6D46] group-hover:text-[#5E472A]">
                          {t.arabic}
                        </span>
                        <span className="font-sans-ui text-[11px]">
                          ({t.term})
                        </span>
                      </button>
                    ))}
                  </div>
                )}

                {/* Key Topics Tagging */}
                {u.keyTopics && u.keyTopics.length > 0 && (
                  <div className="mt-2 flex items-center gap-2 text-[11px] text-[#8A7C6B]">
                    {u.keyTopics.map((top, idx) => (
                      <span key={idx} className="hover:text-[#2A241E]">
                        #{top}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Term Explanation Modal */}
      {activeTermModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 border border-[#E6DAC8] shadow-2xl space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-arabic text-2xl font-bold text-[#8C6D46] block mb-1">
                  {activeTermModal.arabic}
                </span>
                <h3 className="text-lg font-serif-scholarly font-bold text-[#2A241E]">
                  {activeTermModal.term}
                </h3>
              </div>
              <button
                onClick={() => setActiveTermModal(null)}
                className="text-stone-400 hover:text-stone-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#EDE2D2]">
              <div className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#8C6D46] mb-1">
                <Info className="w-3.5 h-3.5" /> Usul Istılahı Tanımı
              </div>
              <p className="text-sm text-[#383027] leading-relaxed">
                {activeTermModal.explanation}
              </p>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setActiveTermModal(null)}
                className="px-4 py-2 text-xs font-medium text-white bg-[#2A241E] hover:bg-[#1A1816] rounded-lg cursor-pointer"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
