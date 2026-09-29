import React, { useState } from 'react';
import { FIQH_DEBATES, FiqhDebate } from '../data/debatesData';
import { Scale, BookOpen, CheckCircle2, ChevronRight, Award, Compass } from 'lucide-react';

export const DebateMatrix: React.FC = () => {
  const [selectedDebate, setSelectedDebate] = useState<FiqhDebate>(FIQH_DEBATES[0]);

  return (
    <div className="space-y-6">
      {/* Intro Box */}
      <div className="bg-[#FAF4EB] border border-[#E6DAC8] rounded-xl p-5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C6D46] mb-1">
          <Scale className="w-3.5 h-3.5" />
          <span>Fıkhî Tahlil & Mezhep İçi Münazaralar</span>
        </div>
        <h2 className="text-xl lg:text-2xl font-serif-scholarly font-bold text-[#2A241E]">
          Klasik Hanefî İhtilafları & Mukayyed Emir Mukayesesi
        </h2>
        <p className="text-xs lg:text-sm text-[#665B4F] mt-1 max-w-3xl leading-relaxed">
          Dersin ilk 15 dakikasında Hoca ve talebelerin (Salih, Akif, Yunus, Taha, Furkan, Sabri, Burak, Yusuf) müzakere ettiği vaktin yapısı, yolcu/hasta ahkâmı ve fakihler arası delil mukayeseleri.
        </p>
      </div>

      {/* Grid: Left List (Navigation) + Right Detailed Comparison View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Debate Selector Cards */}
        <div className="lg:col-span-4 space-y-2.5">
          {FIQH_DEBATES.map((deb) => {
            const isSelected = selectedDebate.id === deb.id;
            return (
              <button
                key={deb.id}
                onClick={() => setSelectedDebate(deb)}
                className={`w-full p-4 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                  isSelected
                    ? 'bg-white border-[#8C6D46] shadow-sm ring-2 ring-[#8C6D46]/20'
                    : 'bg-[#FCFAF7] border-[#E8DFCFA0] hover:bg-white hover:border-[#D8CCA8]'
                }`}
              >
                <div>
                  <span className="font-arabic text-xs text-[#8C6D46] block mb-0.5">
                    {deb.arabicTitle}
                  </span>
                  <h3 className="font-serif-scholarly font-bold text-sm lg:text-base text-[#1F1C18]">
                    {deb.topic}
                  </h3>
                  <p className="text-xs text-[#7A6E5F] line-clamp-2 mt-1">
                    {deb.question}
                  </p>
                </div>
                <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-[#8C6D46] translate-x-1' : 'text-stone-300'}`} />
              </button>
            );
          })}
        </div>

        {/* Right Column: Deep Comparison Matrix */}
        <div className="lg:col-span-8 bg-white border border-[#E6DAC8] rounded-2xl p-5 lg:p-7 shadow-sm space-y-6">
          {/* Header of Debate */}
          <div className="border-b border-[#F0E6D8] pb-4">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#FAF4EB] text-[#8C6D46] border border-[#E6DAC8]">
                MÜZAKERE EDİLEN MESELE
              </span>
              <span className="font-arabic text-lg font-bold text-[#8C6D46]">
                {selectedDebate.arabicTitle}
              </span>
            </div>
            <h3 className="text-xl lg:text-2xl font-serif-scholarly font-bold text-[#2A241E]">
              {selectedDebate.topic}
            </h3>
            <p className="text-sm text-[#54483C] mt-2 font-serif-scholarly italic leading-relaxed">
              "{selectedDebate.question}"
            </p>
          </div>

          {/* Context Callout */}
          <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#EDE2D2] text-xs lg:text-sm text-[#4A3F33] leading-relaxed">
            <span className="font-bold text-[#8C6D46] block mb-1">Mesele Arka Planı ve Vaktin Hükmü:</span>
            {selectedDebate.context}
          </div>

          {/* Scholar Opinions Comparison Grid */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#7D7060] mb-3 flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-[#8C6D46]" /> Fakihlerin Görüş ve Delilleri
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedDebate.opinions.map((op, idx) => (
                <div 
                  key={idx}
                  className={`p-4 rounded-xl border transition-all ${
                    op.status === 'asah'
                      ? 'bg-[#F4F9F6] border-emerald-300 ring-1 ring-emerald-400/20'
                      : op.status === 'mufta_bih'
                        ? 'bg-[#FAF6F2] border-[#C4A480]'
                        : 'bg-[#FCFAF8] border-[#E8DFD0]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span className="font-serif-scholarly font-bold text-base text-[#1F1C18]">
                      {op.scholar}
                    </span>
                    {op.status === 'asah' && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-medium">
                        <Award className="w-3 h-3" /> Asah (En Sahih)
                      </span>
                    )}
                    {op.status === 'mufta_bih' && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-medium">
                        Müftâ Bih
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs lg:text-sm font-medium text-[#2A241E]">
                      <span className="text-[#8C6D46] font-semibold">Hüküm: </span>
                      {op.view}
                    </div>

                    <div className="text-xs text-[#5C5042] bg-white/70 p-2.5 rounded-lg border border-[#EDE2D2] leading-relaxed">
                      <span className="font-semibold text-[#665B4F] block mb-0.5">Delil ve İlle:</span>
                      {op.dalil}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verdict & Usul Principle */}
          <div className="border-t border-[#F0E6D8] pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-[#E8DFCFA0]">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#2A241E] mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Mezhep İçi Netice ve Tercih</span>
              </div>
              <p className="text-xs text-[#5C5042] leading-relaxed">
                {selectedDebate.verdict}
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-[#E8DFCFA0]">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#8C6D46] mb-1">
                <Compass className="w-4 h-4 text-[#8C6D46]" />
                <span>Temel Fıkıh Usulü Kaidesi</span>
              </div>
              <p className="text-xs text-[#5C5042] leading-relaxed">
                {selectedDebate.usulPrinciple}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
