import React from 'react';
import { BookOpen, FileText } from 'lucide-react';

interface HeaderProps {
  activeTab: 'tahta' | 'transkript' | 'ihtilaflar' | 'sozluk' | 'test';
  setActiveTab: (tab: 'tahta' | 'transkript' | 'ihtilaflar' | 'sozluk' | 'test') => void;
  openNotes: () => void;
  notesCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  openNotes,
  notesCount,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E1D5] px-4 lg:px-8 py-3.5 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-[#2D2823] text-[#FAF8F5] flex items-center justify-center font-serif-scholarly font-bold text-lg shadow-sm">
            ح
          </div>
          <button
            onClick={() => setActiveTab('tahta')}
            className="text-left group cursor-pointer"
          >
            <span className="text-lg lg:text-xl font-serif-scholarly font-bold tracking-tight text-[#1F1C18] block group-hover:text-[#8C6D46] transition-colors">
              Fıkıh Usulü Mütalaa
            </span>
          </button>
        </div>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#6B6155]">
          <button
            onClick={() => setActiveTab('tahta')}
            className={`whitespace-nowrap transition-colors pb-0.5 cursor-pointer ${
              activeTab === 'tahta'
                ? 'text-[#1F1C18] font-semibold border-b-2 border-[#8C6D46]'
                : 'hover:text-[#1F1C18]'
            }`}
          >
            Hüsn & Kubuh Şeması
          </button>

          <button
            onClick={() => setActiveTab('transkript')}
            className={`whitespace-nowrap transition-colors pb-0.5 cursor-pointer ${
              activeTab === 'transkript'
                ? 'text-[#1F1C18] font-semibold border-b-2 border-[#8C6D46]'
                : 'hover:text-[#1F1C18]'
            }`}
          >
            Ders Transkripti
          </button>

          <button
            onClick={() => setActiveTab('ihtilaflar')}
            className={`whitespace-nowrap transition-colors pb-0.5 cursor-pointer ${
              activeTab === 'ihtilaflar'
                ? 'text-[#1F1C18] font-semibold border-b-2 border-[#8C6D46]'
                : 'hover:text-[#1F1C18]'
            }`}
          >
            Fakihler & İhtilaflar
          </button>

          <button
            onClick={() => setActiveTab('sozluk')}
            className={`whitespace-nowrap transition-colors pb-0.5 cursor-pointer ${
              activeTab === 'sozluk'
                ? 'text-[#1F1C18] font-semibold border-b-2 border-[#8C6D46]'
                : 'hover:text-[#1F1C18]'
            }`}
          >
            Kavram Sözlüğü
          </button>

          <button
            onClick={() => setActiveTab('test')}
            className={`whitespace-nowrap transition-colors pb-0.5 cursor-pointer ${
              activeTab === 'test'
                ? 'text-[#1F1C18] font-semibold border-b-2 border-[#8C6D46]'
                : 'hover:text-[#1F1C18]'
            }`}
          >
            Vaka Testi
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={openNotes}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#2D2823] bg-[#EFE9DF] hover:bg-[#E5DDCF] rounded-md transition-colors cursor-pointer border border-[#DDD3C2]"
            title="Kişisel Mütalaa Notları"
          >
            <FileText className="w-3.5 h-3.5 text-[#8C6D46]" />
            <span className="hidden sm:inline">Ders Notlarım</span>
            {notesCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-[#8C6D46] text-white text-[10px] flex items-center justify-center font-mono">
                {notesCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('transkript')}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-[#2D2823] hover:bg-[#1A1816] rounded-md transition-colors whitespace-nowrap cursor-pointer shadow-sm"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Metin Takibi</span>
            <span className="sm:hidden">Takip</span>
          </button>
        </div>
      </div>

      {/* Mobile nav bar row for small screens */}
      <div className="md:hidden flex items-center justify-between border-t border-[#E8E1D5] mt-2.5 pt-2 text-xs font-medium text-[#6B6155] overflow-x-auto gap-2 no-scrollbar">
        <button
          onClick={() => setActiveTab('tahta')}
          className={`px-2 py-1 shrink-0 rounded ${activeTab === 'tahta' ? 'bg-[#EFE9DF] text-[#1F1C18] font-semibold' : ''}`}
        >
          Şema
        </button>
        <button
          onClick={() => setActiveTab('transkript')}
          className={`px-2 py-1 shrink-0 rounded ${activeTab === 'transkript' ? 'bg-[#EFE9DF] text-[#1F1C18] font-semibold' : ''}`}
        >
          Transkript
        </button>
        <button
          onClick={() => setActiveTab('ihtilaflar')}
          className={`px-2 py-1 shrink-0 rounded ${activeTab === 'ihtilaflar' ? 'bg-[#EFE9DF] text-[#1F1C18] font-semibold' : ''}`}
        >
          İhtilaflar
        </button>
        <button
          onClick={() => setActiveTab('sozluk')}
          className={`px-2 py-1 shrink-0 rounded ${activeTab === 'sozluk' ? 'bg-[#EFE9DF] text-[#1F1C18] font-semibold' : ''}`}
        >
          Sözlük
        </button>
        <button
          onClick={() => setActiveTab('test')}
          className={`px-2 py-1 shrink-0 rounded ${activeTab === 'test' ? 'bg-[#EFE9DF] text-[#1F1C18] font-semibold' : ''}`}
        >
          Test
        </button>
      </div>
    </header>
  );
};
