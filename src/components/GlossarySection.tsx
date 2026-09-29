import React, { useState } from 'react';
import { GLOSSARY_TERMS, GlossaryTerm } from '../data/glossaryData';
import { BookA, Search, Sparkles, Filter, X } from 'lucide-react';

export const GlossarySection: React.FC = () => {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'husn_kubuh' | 'vakit' | 'kaide'>('all');

  const filteredTerms = GLOSSARY_TERMS.filter(t => {
    if (categoryFilter !== 'all' && t.category !== categoryFilter) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      return (
        t.term.toLowerCase().includes(q) ||
        t.arabic.includes(q) ||
        t.definition.toLowerCase().includes(q) ||
        t.lectureContext.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-[#FAF4EB] border border-[#E6DAC8] rounded-xl p-5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C6D46] mb-1">
          <BookA className="w-3.5 h-3.5" />
          <span>Fıkıh Usulü ve İbadet Istılahları</span>
        </div>
        <h2 className="text-xl lg:text-2xl font-serif-scholarly font-bold text-[#2A241E]">
          Kavram & Istılahat Atlası (معجم المصطلحات)
        </h2>
        <p className="text-xs lg:text-sm text-[#665B4F] mt-1 max-w-3xl leading-relaxed">
          Ders metninde geçen tüm klasik Arapça fıkıh usulü terimleri, lügat ve ıstılah manaları ve Hoca’nın ders içi izahları.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#8A7C6B]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Terim, Arapça metin veya açıklamalarda ara..."
            className="w-full pl-9 pr-8 py-2 text-xs lg:text-sm bg-white border border-[#E0D5C3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8C6D46]/30 text-[#1F1C18]"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setCategoryFilter('all')}
            className={`px-3 py-1.5 text-xs rounded-lg cursor-pointer shrink-0 transition-colors ${
              categoryFilter === 'all'
                ? 'bg-[#2A241E] text-white font-medium shadow-sm'
                : 'bg-[#FAF4EB] text-[#5A4F43] hover:bg-[#EFE5D5]'
            }`}
          >
            Tümü ({GLOSSARY_TERMS.length})
          </button>
          <button
            onClick={() => setCategoryFilter('husn_kubuh')}
            className={`px-3 py-1.5 text-xs rounded-lg cursor-pointer shrink-0 transition-colors ${
              categoryFilter === 'husn_kubuh'
                ? 'bg-[#8C6D46] text-white font-medium shadow-sm'
                : 'bg-[#FAF4EB] text-[#5A4F43] hover:bg-[#EFE5D5]'
            }`}
          >
            Hüsn & Kubuh
          </button>
          <button
            onClick={() => setCategoryFilter('vakit')}
            className={`px-3 py-1.5 text-xs rounded-lg cursor-pointer shrink-0 transition-colors ${
              categoryFilter === 'vakit'
                ? 'bg-[#8C6D46] text-white font-medium shadow-sm'
                : 'bg-[#FAF4EB] text-[#5A4F43] hover:bg-[#EFE5D5]'
            }`}
          >
            Vakit & İbadet
          </button>
          <button
            onClick={() => setCategoryFilter('kaide')}
            className={`px-3 py-1.5 text-xs rounded-lg cursor-pointer shrink-0 transition-colors ${
              categoryFilter === 'kaide'
                ? 'bg-[#8C6D46] text-white font-medium shadow-sm'
                : 'bg-[#FAF4EB] text-[#5A4F43] hover:bg-[#EFE5D5]'
            }`}
          >
            Fıkhî Kaideler
          </button>
        </div>
      </div>

      {/* Glossary Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTerms.map((item) => (
          <div
            key={item.slug}
            className="bg-white border border-[#E6DAC8] rounded-xl p-5 hover:border-[#CBB9A3] transition-all shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="font-arabic text-2xl font-bold text-[#8C6D46]">
                  {item.arabic}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FAF4EB] text-[#8C6D46] border border-[#E6DAC8]">
                  {item.category === 'husn_kubuh' ? 'HÜSN-KUBUH' : item.category === 'vakit' ? 'VAKİT' : 'KAİDE'}
                </span>
              </div>

              <h3 className="font-serif-scholarly font-bold text-base text-[#1F1C18]">
                {item.term}
              </h3>

              <p className="text-xs lg:text-sm text-[#4A3F33] mt-2 leading-relaxed">
                {item.definition}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#F0E6D8] bg-[#FCFAF7] -mx-5 -mb-5 p-3.5 rounded-b-xl">
              <span className="text-[11px] font-semibold text-[#8C6D46] block mb-0.5">
                Dersteki Bağlam:
              </span>
              <p className="text-xs text-[#6B5E4F] italic font-serif-scholarly line-clamp-2">
                "{item.lectureContext}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
