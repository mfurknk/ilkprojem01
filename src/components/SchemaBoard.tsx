import React, { useState } from 'react';
import { FIQH_SCHEMA_TREE, SchemaNode } from '../data/schemaData';
import { 
  Network, 
  HelpCircle, 
  BookMarked, 
  Sparkles, 
  ArrowRight, 
  Share2, 
  Check, 
  Layers, 
  Eye, 
  Volume2
} from 'lucide-react';

interface SchemaBoardProps {
  onJumpToTimestamp?: (timeSec: number) => void;
}

export const SchemaBoard: React.FC<SchemaBoardProps> = ({ onJumpToTimestamp }) => {
  const [boardTheme, setBoardTheme] = useState<'chalkboard' | 'parchment'>('chalkboard');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'aynihi' | 'gayrihi' | 'erkan'>('all');
  const [activeNode, setActiveNode] = useState<SchemaNode>(FIQH_SCHEMA_TREE[0]);
  const [copiedNotification, setCopiedNotification] = useState(false);

  // Group nodes logically
  const rootNode = FIQH_SCHEMA_TREE.find(n => n.id === 'root-husn-kubuh')!;
  const aynihiNode = FIQH_SCHEMA_TREE.find(n => n.id === 'hasan-li-aynihi')!;
  const gayrihiNode = FIQH_SCHEMA_TREE.find(n => n.id === 'hasan-li-gayrihi')!;
  
  const aynihiSubNodes = FIQH_SCHEMA_TREE.filter(n => 
    ['li-manen-fi-aynihi', 'sukut-etmeyen', 'sukut-eden', 'sukut-aslen-la-vasfen', 'sukut-aslen-ve-vasfen', 'hasan-fi-vasfihi-namaz', 'mulhak-hasen-fi-vasfihi'].includes(n.id)
  );

  const gayrihiSubNodes = FIQH_SCHEMA_TREE.filter(n => 
    ['gayrihi-la-yeteadda', 'gayrihi-yeteadda'].includes(n.id)
  );

  const handleCopySummary = () => {
    const text = `FIKIH USULÜ DERSİ - HÜSN VE KUBUH ŞEMASI (Hasan ve Kabih)
------------------------------------------------------------
Kural: Hakîm olan zat kabîh olanı emretmez, hasan olanı yasaklamaz.
İyi (Hasan) = İnsana yararlı / menfaatli olan.
Kötü (Kabîh) = İnsana zararlı olan.

1. HASAN Lİ-AYNİHÎ (Özü İtibariyle Güzel):
   A) Li-ma'nen fî aynihî:
      1. Mâ lâ yaqbelü's-sukût: Düşmeyen (Tasdîk bi'l-kalb).
      2. Mâ yaqbelü's-sukût: Düşebilen:
         a) Aslen lâ vasfen: el-İkrâr (ikrahta düşer ama vasfen hasendir, direnip ölürse şehittir).
         b) Aslen ve vasfen:
            - Hasanun li-ma'nen fî vasfihî: Namaz (Ta'zîmullāh; hayızlı kadından hem asıl hem vasıf düşer).
            - Mülhak olanlar: Oruç (Qahru'n-nefs), Zekat (Def-i hâcet), Hac (Şerefu'l-mekân).
              * Özünde kabih gibidir, lakin mahlûkun bi-halkillâh olduğu için vasıtalar yok sayılır ve namaza mülhak kılınır.

2. HASAN Lİ-ĞAYRİHÎ (Başkasından Dolayı Güzel - Özünde Kabih):
   1. Mâ lâ yeteaddâ bi'l-me'mūri bih: Abdest (Özü su meşakkati; gaye namazdır, namaz ayrıca kılınır).
   2. Mâ yeteaddâ bi'l-me'mūri bih: Cihat (Özü tahrîbu'l-bünyân; gayesi İ'lâ-i Kelimetullāh'tır ve gayretle hükmen tahakkuk eder).
------------------------------------------------------------`;
    navigator.clipboard.writeText(text);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  const isChalk = boardTheme === 'chalkboard';

  return (
    <div className="space-y-6">
      {/* Top Banner / Teacher Context Callout */}
      <div className="bg-[#FAF4EB] border border-[#E6DAC8] rounded-xl p-4 lg:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C6D46] mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fıkıh Usulü ve Kelam Klasiği · Menâr & Ahısarî Mütalaası</span>
          </div>
          <h2 className="text-xl lg:text-2xl font-serif-scholarly font-bold text-[#2A241E]">
            Hüsn ve Kubuh Taksimat Tahtası
          </h2>
          <p className="text-xs lg:text-sm text-[#665B4F] mt-1 max-w-3xl leading-relaxed">
            Hoca’nın ders boyunca tahtaya bizzat çizdiği ve <span className="italic font-serif-scholarly text-[#2A241E]">"Bu şemanın sunumunu bir daha yapmayacağım, mutlaka fotoğrafını çekin"</span> dediği meşhur metodolojik taksimat şeması.
          </p>
        </div>

        {/* View Controls & Copy Button */}
        <div className="flex items-center flex-wrap gap-2 shrink-0">
          <div className="flex items-center bg-[#EAE2D5] p-0.5 rounded-lg border border-[#D5C9B8]">
            <button
              onClick={() => setBoardTheme('chalkboard')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                isChalk 
                  ? 'bg-[#1E2621] text-[#E8F0E9] shadow-sm' 
                  : 'text-[#5A4F43] hover:text-[#2A241E]'
              }`}
            >
              Kara Tahta
            </button>
            <button
              onClick={() => setBoardTheme('parchment')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                !isChalk 
                  ? 'bg-[#FFFDF9] text-[#2A241E] shadow-sm' 
                  : 'text-[#5A4F43] hover:text-[#2A241E]'
              }`}
            >
              Parşömen
            </button>
          </div>

          <button
            onClick={handleCopySummary}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-[#2A241E] hover:bg-[#1A1816] text-[#FAF8F5] rounded-lg transition-colors cursor-pointer shadow-sm"
            title="Şemanın metin özetini kopyala"
          >
            {copiedNotification ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Kopyalandı!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Şemayı Kopyala</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Filter Tabs for Focused Study */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        <span className="text-xs font-medium text-[#7D7060] flex items-center gap-1 shrink-0">
          <Eye className="w-3.5 h-3.5" /> İnceleme Odağı:
        </span>
        <button
          onClick={() => setSelectedFilter('all')}
          className={`px-3 py-1 text-xs rounded-full transition-colors cursor-pointer shrink-0 ${
            selectedFilter === 'all'
              ? 'bg-[#2A241E] text-white font-medium shadow-sm'
              : 'bg-[#EFE9DF] text-[#5A4F43] hover:bg-[#E5DDD0]'
          }`}
        >
          Tam Şema
        </button>
        <button
          onClick={() => setSelectedFilter('aynihi')}
          className={`px-3 py-1 text-xs rounded-full transition-colors cursor-pointer shrink-0 ${
            selectedFilter === 'aynihi'
              ? 'bg-[#2B543D] text-white font-medium shadow-sm'
              : 'bg-[#E5ECE7] text-[#2B543D] hover:bg-[#D4E0D7]'
          }`}
        >
          Hasan li-Aynihî (Özü İyi)
        </button>
        <button
          onClick={() => setSelectedFilter('gayrihi')}
          className={`px-3 py-1 text-xs rounded-full transition-colors cursor-pointer shrink-0 ${
            selectedFilter === 'gayrihi'
              ? 'bg-[#7A3E26] text-white font-medium shadow-sm'
              : 'bg-[#F2E5E0] text-[#7A3E26] hover:bg-[#E8D4CD]'
          }`}
        >
          Hasan li-Ğayrihî (Gayrı İyi)
        </button>
        <button
          onClick={() => setSelectedFilter('erkan')}
          className={`px-3 py-1 text-xs rounded-full transition-colors cursor-pointer shrink-0 ${
            selectedFilter === 'erkan'
              ? 'bg-[#8C6D46] text-white font-medium shadow-sm'
              : 'bg-[#EFE9DF] text-[#694E2C] hover:bg-[#E5DDD0]'
          }`}
        >
          İslam'ın 5 Şartı Tahlili
        </button>
      </div>

      {/* Two-Zone Sandbox Split Layout (Constitution Section 2 / Education Ref) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left / Main Stage: Visual Blackboard Diagram (7 Cols) */}
        <div 
          className={`lg:col-span-7 rounded-2xl p-5 lg:p-7 border transition-all duration-300 shadow-md ${
            isChalk 
              ? 'bg-[#19221D] border-[#2C3831] text-[#EAEFEA]' 
              : 'bg-[#FFFDF9] border-[#E5DAC8] text-[#1F1C18]'
          }`}
        >
          {/* Blackboard header indicator */}
          <div className="flex items-center justify-between border-b pb-3 mb-6 border-white/10">
            <div className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${isChalk ? 'bg-amber-300/80 animate-pulse' : 'bg-[#8C6D46]'}`}></span>
              <span className={`text-xs font-mono tracking-wider uppercase ${isChalk ? 'text-stone-400' : 'text-stone-500'}`}>
                HÜSN & KUBUH TAHTA ŞEMASI
              </span>
            </div>
            <span className="font-arabic text-sm text-[#D4AF37]">
              الحُسْنُ والقَبِيحُ في أُصُولِ الفِقْهِ
            </span>
          </div>

          {/* Root Level: Hüsn ve Kubuh */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => setActiveNode(rootNode)}
              className={`w-full max-w-md p-4 rounded-xl border-2 transition-all cursor-pointer text-center group ${
                activeNode.id === rootNode.id 
                  ? isChalk 
                    ? 'border-[#D4AF37] bg-[#222E27] shadow-lg shadow-black/40 ring-2 ring-[#D4AF37]/30' 
                    : 'border-[#8C6D46] bg-[#FAF4EB] shadow-md ring-2 ring-[#8C6D46]/20'
                  : isChalk 
                    ? 'border-emerald-900/60 bg-[#1D2721] hover:border-emerald-700/80' 
                    : 'border-[#E2D4BF] bg-white hover:border-[#8C6D46]/60'
              }`}
            >
              <span className="font-arabic text-xl lg:text-2xl text-[#E8C265] block mb-1">
                {rootNode.arabicTitle}
              </span>
              <h3 className="text-base lg:text-lg font-serif-scholarly font-bold text-inherit">
                {rootNode.title}
              </h3>
              <p className={`text-xs mt-1 leading-normal ${isChalk ? 'text-stone-300' : 'text-[#665B4F]'}`}>
                {rootNode.summary}
              </p>
            </button>

            {/* Downward Fork Connectors */}
            <div className="w-0.5 h-6 bg-current opacity-20 my-1"></div>
            <div className="w-3/4 max-w-md h-0.5 bg-current opacity-20 relative">
              <div className="absolute left-0 -bottom-3 w-0.5 h-3 bg-current opacity-20"></div>
              <div className="absolute right-0 -bottom-3 w-0.5 h-3 bg-current opacity-20"></div>
            </div>
          </div>

          {/* 2 Main Wings: Hasan li-aynihî & Hasan li-ğayrihî */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4 pt-1">
            {/* Wing 1: Hasan li-aynihî */}
            {(selectedFilter === 'all' || selectedFilter === 'aynihi' || selectedFilter === 'erkan') && (
              <div className="space-y-4">
                <button
                  onClick={() => setActiveNode(aynihiNode)}
                  className={`w-full p-3.5 rounded-xl border-2 transition-all cursor-pointer text-left ${
                    activeNode.id === aynihiNode.id 
                      ? isChalk 
                        ? 'border-emerald-400 bg-[#203026] ring-2 ring-emerald-400/20' 
                        : 'border-[#2B543D] bg-[#F2F7F4] ring-2 ring-[#2B543D]/20'
                      : isChalk 
                        ? 'border-emerald-800/60 bg-[#19241D] hover:border-emerald-600' 
                        : 'border-[#D1E0D7] bg-white hover:border-[#2B543D]/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-arabic text-base text-emerald-400 font-bold">
                      {aynihiNode.arabicTitle}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-800/40">
                      ÖZÜ İYİ
                    </span>
                  </div>
                  <h4 className="font-serif-scholarly font-bold text-sm lg:text-base mt-1">
                    {aynihiNode.title}
                  </h4>
                  <p className={`text-xs mt-1 leading-relaxed ${isChalk ? 'text-stone-300' : 'text-stone-600'}`}>
                    {aynihiNode.summary}
                  </p>
                </button>

                {/* Sub Branches of Hasan li-aynihî */}
                <div className="pl-3 border-l-2 border-emerald-800/30 space-y-2.5">
                  {aynihiSubNodes.map((subNode) => {
                    const isSelected = activeNode.id === subNode.id;
                    return (
                      <button
                        key={subNode.id}
                        onClick={() => setActiveNode(subNode)}
                        className={`w-full p-3 rounded-lg border transition-all cursor-pointer text-left text-xs ${
                          isSelected 
                            ? isChalk
                              ? 'border-amber-300 bg-[#253229] font-medium shadow-sm'
                              : 'border-[#8C6D46] bg-[#FAF5EE] font-medium shadow-sm'
                            : isChalk
                              ? 'border-stone-800 bg-[#17201A] hover:border-stone-600'
                              : 'border-stone-200 bg-white hover:border-stone-300'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className="font-serif-scholarly font-bold text-sm text-inherit">
                            {subNode.title}
                          </span>
                          <span className="font-arabic text-xs text-amber-400">
                            {subNode.arabicTitle.split(' ')[0]}
                          </span>
                        </div>
                        <p className={`line-clamp-2 ${isChalk ? 'text-stone-400' : 'text-stone-600'}`}>
                          {subNode.summary}
                        </p>
                        {subNode.examples.length > 0 && (
                          <div className="mt-2 flex items-center gap-1.5 flex-wrap">
                            {subNode.examples.slice(0, 2).map((ex, i) => (
                              <span 
                                key={i} 
                                className={`text-[11px] px-1.5 py-0.5 rounded font-mono ${
                                  isChalk ? 'bg-stone-800 text-stone-300' : 'bg-stone-100 text-stone-700'
                                }`}
                              >
                                {ex.split(' ')[0]}
                              </span>
                            ))}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Wing 2: Hasan li-ğayrihî */}
            {(selectedFilter === 'all' || selectedFilter === 'gayrihi') && (
              <div className="space-y-4">
                <button
                  onClick={() => setActiveNode(gayrihiNode)}
                  className={`w-full p-3.5 rounded-xl border-2 transition-all cursor-pointer text-left ${
                    activeNode.id === gayrihiNode.id 
                      ? isChalk 
                        ? 'border-amber-500 bg-[#2D231E] ring-2 ring-amber-500/20' 
                        : 'border-[#7A3E26] bg-[#FDF5F2] ring-2 ring-[#7A3E26]/20'
                      : isChalk 
                        ? 'border-amber-900/60 bg-[#221B17] hover:border-amber-700' 
                        : 'border-[#EAD3CA] bg-white hover:border-[#7A3E26]/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-arabic text-base text-amber-400 font-bold">
                      {gayrihiNode.arabicTitle}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-800/40">
                      GAYRI İYİ (ÖZÜ ZARAR)
                    </span>
                  </div>
                  <h4 className="font-serif-scholarly font-bold text-sm lg:text-base mt-1">
                    {gayrihiNode.title}
                  </h4>
                  <p className={`text-xs mt-1 leading-relaxed ${isChalk ? 'text-stone-300' : 'text-stone-600'}`}>
                    {gayrihiNode.summary}
                  </p>
                </button>

                {/* Sub Branches of Hasan li-ğayrihî (2 Ok) */}
                <div className="pl-3 border-l-2 border-amber-900/40 space-y-2.5">
                  {gayrihiSubNodes.map((subNode) => {
                    const isSelected = activeNode.id === subNode.id;
                    return (
                      <button
                        key={subNode.id}
                        onClick={() => setActiveNode(subNode)}
                        className={`w-full p-3 rounded-lg border transition-all cursor-pointer text-left text-xs ${
                          isSelected 
                            ? isChalk
                              ? 'border-amber-400 bg-[#30221B] font-medium shadow-sm'
                              : 'border-[#7A3E26] bg-[#FAF3F0] font-medium shadow-sm'
                            : isChalk
                              ? 'border-stone-800 bg-[#1D1714] hover:border-stone-700'
                              : 'border-stone-200 bg-white hover:border-stone-300'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className="font-serif-scholarly font-bold text-sm text-inherit">
                            {subNode.title}
                          </span>
                          <span className="font-arabic text-xs text-amber-400">
                            {subNode.id === 'gayrihi-la-yeteadda' ? 'الوضوء' : 'الجهاد'}
                          </span>
                        </div>
                        <p className={`line-clamp-2 ${isChalk ? 'text-stone-400' : 'text-stone-600'}`}>
                          {subNode.summary}
                        </p>
                        <div className="mt-2 flex items-center gap-1.5 flex-wrap">
                          {subNode.examples.map((ex, i) => (
                            <span 
                              key={i} 
                              className={`text-[11px] px-1.5 py-0.5 rounded font-mono ${
                                isChalk ? 'bg-amber-950/40 text-amber-200' : 'bg-amber-50 text-amber-800'
                              }`}
                            >
                              {ex}
                            </span>
                          ))}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Footnote on Blackboard */}
          <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] opacity-70">
            <span className="font-serif-scholarly italic">
              "Allah Azze ve Celle Hakîm’dir; Hakîm olan zat Kabîh olanı emretmez."
            </span>
            <span className="font-mono">Fıkıh Usulü Dersi · Ahısarî Metni</span>
          </div>
        </div>

        {/* Right Zone: Deep Concept Deck & Analytical Explanation (5 Cols) */}
        <div className="lg:col-span-5 bg-white border border-[#E6DAC8] rounded-2xl p-5 lg:p-6 shadow-sm space-y-5">
          {/* Header of Active Node */}
          <div className="border-b border-[#EFE5D5] pb-4">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#FAF4EB] text-[#8C6D46] border border-[#E6DAC8]">
                {activeNode.category === 'root' ? 'TEMEL KAİDE' : activeNode.category === 'li_aynihi' ? 'Lİ-AYNİHÎ DALI' : 'Lİ-ĞAYRİHÎ DALI'}
              </span>
              <span className="font-arabic text-xl font-bold text-[#8C6D46]">
                {activeNode.arabicTitle}
              </span>
            </div>

            <h3 className="text-xl font-serif-scholarly font-bold text-[#2A241E]">
              {activeNode.title}
            </h3>
            <p className="text-sm text-[#665B4F] mt-1 leading-relaxed">
              {activeNode.summary}
            </p>
          </div>

          {/* Teacher's Verbatim Lesson Quote */}
          <div className="bg-[#FAF7F2] border-l-3 border-[#8C6D46] p-3.5 rounded-r-lg">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#8C6D46] mb-1">
              <BookMarked className="w-3.5 h-3.5" />
              <span>Hoca'nın Dersteki İfadesi:</span>
            </div>
            <p className="text-xs lg:text-sm font-serif-scholarly italic text-[#383027] leading-relaxed">
              "{activeNode.keyQuote}"
            </p>
            {activeNode.audioSec !== undefined && (
              <div className="mt-2.5 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#8A7C6B]">
                  Ders İçi Süre: {Math.floor(activeNode.audioSec / 60)}:{(activeNode.audioSec % 60).toString().padStart(2, '0')}
                </span>
                {onJumpToTimestamp && (
                  <button
                    onClick={() => onJumpToTimestamp(activeNode.audioSec!)}
                    className="flex items-center gap-1 text-xs text-[#8C6D46] hover:text-[#5E472A] font-medium cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Transkripte Git</span>
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Deep Philosophical / Fiqh Explanation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#7D7060] mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" /> Fıkhî & Aklî Temellendirme
            </h4>
            <p className="text-xs lg:text-sm text-[#42392F] leading-relaxed whitespace-pre-line bg-[#FCFBF8] p-3 rounded-lg border border-[#EDE4D6]">
              {activeNode.detailedText}
            </p>
          </div>

          {/* Highlight Key Points */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#7D7060] mb-2 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" /> Dikkat Edilecek Usul Noktaları
            </h4>
            <ul className="space-y-1.5 text-xs text-[#524639]">
              {activeNode.highlightPoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D46] mt-1.5 shrink-0" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Examples In The Box */}
          <div className="border-t border-[#EFE5D5] pt-3">
            <span className="text-xs font-semibold text-[#7D7060] block mb-1.5">
              Derste Zikredilen Misaller:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {activeNode.examples.map((ex, i) => (
                <span 
                  key={i} 
                  className="text-xs px-2.5 py-1 rounded bg-[#EFE8DC] text-[#3D3328] font-medium"
                >
                  {ex}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
