import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { SchemaBoard } from './components/SchemaBoard';
import { TranscriptViewer } from './components/TranscriptViewer';
import { DebateMatrix } from './components/DebateMatrix';
import { GlossarySection } from './components/GlossarySection';
import { QuizSection } from './components/QuizSection';
import { NotesDrawer, StudyNote } from './components/NotesDrawer';
import { 
  Sparkles, 
  BookOpen, 
  Scale, 
  Layers, 
  HelpCircle, 
  FileText, 
  Clock, 
  Users, 
  BookMarked,
  ArrowRight
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'tahta' | 'transkript' | 'ihtilaflar' | 'sozluk' | 'test'>('tahta');
  const [targetTimestamp, setTargetTimestamp] = useState<number | null>(null);
  const [isNotesOpen, setIsNotesOpen] = useState(false);

  // Persistent notes in localStorage
  const [notes, setNotes] = useState<StudyNote[]>(() => {
    try {
      const saved = localStorage.getItem('usul_study_notes');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return [
      {
        id: 'initial-note-1',
        title: 'Hüsn ve Kubuh Temel Kaidesi',
        content: 'Hakîm olan Allah kabih olanı emretmez, hasan olanı yasaklamaz. Dinde emredilen her şey hasendir. İyi = İnsana yararlı / menfaatli olan; Kötü = İnsana zararlı olan.',
        dateStr: 'Ders Notu'
      },
      {
        id: 'initial-note-2',
        title: 'Mahlûkun bi-halkillâh İnceliği',
        content: 'Oruç (qahru\'n-nefs), zekat (def-i hâcet) ve hac (şerefu\'l-mekân) özünde bedene meşakkat olduğu halde, vasıtaları kulun iradesiyle değil doğrudan Allah\'ın yaratmasıyla var olduğu için yok sayılmış ve İslam\'ın 5 şartı bozulmasın diye Hasan li-aynihî\'ye mülhak edilmiştir.',
        dateStr: 'Mütalaa'
      }
    ];
  });

  useEffect(() => {
    try {
      localStorage.setItem('usul_study_notes', JSON.stringify(notes));
    } catch {
      // ignore
    }
  }, [notes]);

  const handleAddNote = (newNote: { title: string; content: string }) => {
    const noteObj: StudyNote = {
      id: `note-${Date.now()}`,
      title: newNote.title,
      content: newNote.content,
      dateStr: new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })
    };
    setNotes(prev => [noteObj, ...prev]);
  };

  const handleDeleteNote = (id: string) => {
    setNotes(prev => prev.filter(n => n.id !== id));
  };

  const handleJumpFromSchema = (timeSec: number) => {
    setTargetTimestamp(timeSec);
    setActiveTab('transkript');
  };

  const handleAddQuoteToNote = (quote: string) => {
    handleAddNote({
      title: 'Transkript Alıntısı',
      content: quote
    });
    setIsNotesOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1F1C18] flex flex-col font-sans-ui selection:bg-[#E2D5C3]">
      {/* Universal Top Bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openNotes={() => setIsNotesOpen(true)}
        notesCount={notes.length}
      />

      {/* Hero Header Section */}
      <section className="border-b border-[#E8DFCFA0] bg-linear-to-b from-[#F5EFE6] to-[#FAF8F5] py-8 lg:py-10 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#8C6D46] uppercase tracking-wider">
            <span>Fıkıh Usulü Mütalaa Platformu</span>
            <span>·</span>
            <span>Menâr & Ahısarî Metni</span>
            <span>·</span>
            <span>Vakit ve Hüsn-Kubuh Tahlili</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif-scholarly font-bold text-[#1F1C18] tracking-tight leading-tight">
                Hüsn ve Kubuh Nazariyesi & Vakit Taksimatı
              </h1>
              <p className="text-xs sm:text-sm lg:text-base text-[#594E42] mt-2.5 font-serif-scholarly leading-relaxed">
                Klasik Hanefî fıkıh usulünde emrin mahiyeti, mükellefiyetin düşmesi (sükût), nefsi kırma ve ta'zîmullāh illetleri, mezhep içi fetva ihtilafları ve dersin eksiksiz interaktif transkripti.
              </p>
            </div>

            {/* Quick Metrics Bar (Tabular discipline) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 shrink-0 bg-white/80 p-3 rounded-xl border border-[#E6DAC8] shadow-xs text-center">
              <div className="px-2">
                <div className="text-[10px] font-medium text-[#8A7C6B] uppercase tracking-wider">Ders Süresi</div>
                <div className="font-mono text-sm font-bold text-[#2A241E] tabular-nums">01:11:30</div>
              </div>
              <div className="px-2 border-l border-stone-200">
                <div className="text-[10px] font-medium text-[#8A7C6B] uppercase tracking-wider">Konuşmacı</div>
                <div className="font-mono text-sm font-bold text-[#2A241E] tabular-nums">10 Talebe</div>
              </div>
              <div className="px-2 border-l border-stone-200">
                <div className="text-[10px] font-medium text-[#8A7C6B] uppercase tracking-wider">İhtilaflar</div>
                <div className="font-mono text-sm font-bold text-[#2A241E] tabular-nums">4 Mesele</div>
              </div>
              <div className="px-2 border-l border-stone-200">
                <div className="text-[10px] font-medium text-[#8A7C6B] uppercase tracking-wider">Istılahat</div>
                <div className="font-mono text-sm font-bold text-[#2A241E] tabular-nums">18 Terim</div>
              </div>
            </div>
          </div>

          {/* Quick Action Navigation Buttons */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <button
              onClick={() => setActiveTab('tahta')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeTab === 'tahta'
                  ? 'bg-[#2A241E] text-white shadow-sm'
                  : 'bg-white/80 text-[#54483C] hover:bg-white border border-[#E6DAC8]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Tahta Şeması (Chalkboard)</span>
            </button>

            <button
              onClick={() => setActiveTab('transkript')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeTab === 'transkript'
                  ? 'bg-[#2A241E] text-white shadow-sm'
                  : 'bg-white/80 text-[#54483C] hover:bg-white border border-[#E6DAC8]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Tam Metin & Ses Akışı</span>
            </button>

            <button
              onClick={() => setActiveTab('ihtilaflar')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeTab === 'ihtilaflar'
                  ? 'bg-[#2A241E] text-white shadow-sm'
                  : 'bg-white/80 text-[#54483C] hover:bg-white border border-[#E6DAC8]'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              <span>Fakihler & İhtilaflar (Ebu Hanife vs İmameyn)</span>
            </button>

            <button
              onClick={() => setActiveTab('sozluk')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeTab === 'sozluk'
                  ? 'bg-[#2A241E] text-white shadow-sm'
                  : 'bg-white/80 text-[#54483C] hover:bg-white border border-[#E6DAC8]'
              }`}
            >
              <BookMarked className="w-3.5 h-3.5" />
              <span>Istılahat Sözlüğü</span>
            </button>

            <button
              onClick={() => setActiveTab('test')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeTab === 'test'
                  ? 'bg-[#2A241E] text-white shadow-sm'
                  : 'bg-white/80 text-[#54483C] hover:bg-white border border-[#E6DAC8]'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Muhakeme Testi</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-8">
        {activeTab === 'tahta' && (
          <SchemaBoard onJumpToTimestamp={handleJumpFromSchema} />
        )}

        {activeTab === 'transkript' && (
          <TranscriptViewer
            initialTimestamp={targetTimestamp}
            onAddNote={handleAddQuoteToNote}
          />
        )}

        {activeTab === 'ihtilaflar' && <DebateMatrix />}

        {activeTab === 'sozluk' && <GlossarySection />}

        {activeTab === 'test' && <QuizSection />}
      </main>

      {/* Study Notes Slide-out Drawer */}
      <NotesDrawer
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        notes={notes}
        onAddNote={handleAddNote}
        onDeleteNote={handleDeleteNote}
      />

      {/* Scholarly Footer */}
      <footer className="border-t border-[#E8DFCFA0] bg-[#F2EDE4] py-8 px-4 lg:px-8 mt-12 text-[#6B5E4F] text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <p className="font-serif-scholarly font-bold text-sm text-[#2A241E]">
              Fıkıh Usulü ve İslâm Düşüncesi Mütalaa Platformu
            </p>
            <p className="font-serif-scholarly italic">
              "Haydi, berâet-i zimmet asıldır." · Ahısarî Menâr Şerhi & Fıkıh Usulü Tedrisatı
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <button
              onClick={() => setActiveTab('tahta')}
              className="hover:text-[#2A241E] transition-colors cursor-pointer"
            >
              Şema
            </button>
            <button
              onClick={() => setActiveTab('transkript')}
              className="hover:text-[#2A241E] transition-colors cursor-pointer"
            >
              Transkript
            </button>
            <button
              onClick={() => setActiveTab('ihtilaflar')}
              className="hover:text-[#2A241E] transition-colors cursor-pointer"
            >
              İhtilaflar
            </button>
            <button
              onClick={() => setIsNotesOpen(true)}
              className="hover:text-[#2A241E] transition-colors cursor-pointer text-[#8C6D46]"
            >
              Notlarım ({notes.length})
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
