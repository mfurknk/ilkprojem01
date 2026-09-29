import React, { useState } from 'react';
import { X, Trash2, Plus, Download, Copy, Check, FileText } from 'lucide-react';

export interface StudyNote {
  id: string;
  title: string;
  content: string;
  dateStr: string;
}

interface NotesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  notes: StudyNote[];
  onAddNote: (note: { title: string; content: string }) => void;
  onDeleteNote: (id: string) => void;
}

export const NotesDrawer: React.FC<NotesDrawerProps> = ({
  isOpen,
  onClose,
  notes,
  onAddNote,
  onDeleteNote,
}) => {
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [copiedAll, setCopiedAll] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() && !newContent.trim()) return;
    onAddNote({
      title: newTitle.trim() || 'Ders Notu',
      content: newContent.trim(),
    });
    setNewTitle('');
    setNewContent('');
    setIsAdding(false);
  };

  const handleExportNotes = () => {
    const formatted = notes
      .map(
        (n, i) =>
          `NOT ${i + 1}: ${n.title} (${n.dateStr})\n-------------------------------------\n${n.content}\n\n`
      )
      .join('\n');
    
    const blob = new Blob([formatted], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Fikih_Usulu_Ders_Notlari_${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
  };

  const handleCopyAll = () => {
    const formatted = notes
      .map(
        (n, i) =>
          `NOT ${i + 1}: ${n.title} (${n.dateStr})\n${n.content}\n`
      )
      .join('\n');
    navigator.clipboard.writeText(formatted);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-md bg-[#FAF8F5] border-l border-[#E2D5C3] shadow-2xl h-full flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-[#E8DFCFA0] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#8C6D46]" />
            <h3 className="font-serif-scholarly font-bold text-base text-[#1F1C18]">
              Ders & Mütalaa Notlarım
            </h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#FAF4EB] text-[#8C6D46] font-mono border border-[#E6DAC8]">
              {notes.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-md text-stone-400 hover:text-stone-700 hover:bg-stone-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Bar */}
        <div className="p-3 border-b border-[#E8DFCFA0] flex items-center justify-between gap-2 bg-[#FCFAF7]">
          <button
            onClick={() => setIsAdding(!isAdding)}
            className="flex items-center gap-1 text-xs font-medium px-3 py-1.5 bg-[#2A241E] hover:bg-[#1A1816] text-white rounded-md transition-colors cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Yeni Not Ekle</span>
          </button>

          {notes.length > 0 && (
            <div className="flex items-center gap-1">
              <button
                onClick={handleCopyAll}
                className="p-1.5 text-xs text-[#665B4F] hover:bg-[#FAF4EB] rounded border border-[#E0D5C3] cursor-pointer"
                title="Tümünü Kopyala"
              >
                {copiedAll ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={handleExportNotes}
                className="p-1.5 text-xs text-[#665B4F] hover:bg-[#FAF4EB] rounded border border-[#E0D5C3] cursor-pointer"
                title="Dosya Olarak İndir"
              >
                <Download className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* New Note Form */}
        {isAdding && (
          <form onSubmit={handleSave} className="p-4 bg-white border-b border-[#E8DFCFA0] space-y-3">
            <input
              type="text"
              placeholder="Not Başlığı (örn. Hüsn li-ğayrihî inceliği)"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full px-3 py-1.5 text-xs lg:text-sm border border-[#E0D5C3] rounded-md focus:outline-none focus:ring-1 focus:ring-[#8C6D46] bg-[#FAF8F5]"
            />
            <textarea
              placeholder="Notunuzu yazın veya transkriptten alıntı yapın..."
              rows={4}
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              className="w-full px-3 py-2 text-xs lg:text-sm border border-[#E0D5C3] rounded-md focus:outline-none focus:ring-1 focus:ring-[#8C6D46] bg-[#FAF8F5]"
            />
            <div className="flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsAdding(false)}
                className="px-3 py-1 text-xs text-stone-500 hover:text-stone-700 cursor-pointer"
              >
                İptal
              </button>
              <button
                type="submit"
                className="px-3 py-1 text-xs bg-[#8C6D46] hover:bg-[#6E5434] text-white rounded cursor-pointer"
              >
                Kaydet
              </button>
            </div>
          </form>
        )}

        {/* Notes List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {notes.length === 0 ? (
            <div className="text-center py-12 text-[#8A7C6B]">
              <FileText className="w-8 h-8 mx-auto mb-2 opacity-40" />
              <p className="text-sm font-medium">Henüz not eklenmedi.</p>
              <p className="text-xs mt-1 max-w-xs mx-auto">
                Transkriptteki diyalogların yanındaki <span className="font-semibold text-[#8C6D46]">"Not Al"</span> butonuna basarak veya yukarıdan doğrudan mütalaa notları ekleyebilirsiniz.
              </p>
            </div>
          ) : (
            notes.map((note) => (
              <div
                key={note.id}
                className="bg-white border border-[#E8DFCFA0] rounded-xl p-3.5 shadow-xs space-y-2 group"
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-serif-scholarly font-bold text-sm text-[#1F1C18]">
                    {note.title}
                  </h4>
                  <button
                    onClick={() => onDeleteNote(note.id)}
                    className="opacity-0 group-hover:opacity-100 text-stone-400 hover:text-rose-600 transition-opacity p-0.5 cursor-pointer"
                    title="Notu Sil"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <p className="text-xs text-[#4A3F33] leading-relaxed whitespace-pre-line">
                  {note.content}
                </p>

                <div className="text-[10px] text-[#A39585] font-mono pt-1 border-t border-stone-100">
                  {note.dateStr}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
