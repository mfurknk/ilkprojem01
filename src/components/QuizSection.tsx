import React, { useState } from 'react';
import { QUIZ_QUESTIONS, QuizQuestion } from '../data/quizData';
import { HelpCircle, CheckCircle, XCircle, RotateCcw, Award, ArrowRight } from 'lucide-react';

export const QuizSection: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qId: string]: string }>({});
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (questionId: string, optionId: string) => {
    if (showResults) return;
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionId }));
  };

  const calculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach(q => {
      if (selectedAnswers[q.id] === q.correctOptionId) {
        score += 1;
      }
    });
    return score;
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  const score = calculateScore();
  const answeredCount = Object.keys(selectedAnswers).length;

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Quiz Intro Header */}
      <div className="bg-[#FAF4EB] border border-[#E6DAC8] rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C6D46] mb-1">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Mütalaa ve İdrak Değerlendirmesi</span>
          </div>
          <h2 className="text-xl lg:text-2xl font-serif-scholarly font-bold text-[#2A241E]">
            Fıkıh Usulü Vaka & Muhakeme Testi
          </h2>
          <p className="text-xs lg:text-sm text-[#665B4F] mt-1 max-w-2xl leading-relaxed">
            Ders boyunca Hoca’nın Salih, Akif, Furkan ve Burak’a yönelttiği sorular ve hüsn-kubuh şemasının temel prensiplerini sınayan 6 adet usul vakası.
          </p>
        </div>

        {/* Score & Actions */}
        <div className="flex items-center gap-3 shrink-0">
          {showResults ? (
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-[#E6DAC8] shadow-xs">
              <Award className="w-5 h-5 text-[#8C6D46]" />
              <div>
                <div className="text-xs text-[#8A7C6B]">Netice:</div>
                <div className="text-sm font-bold font-mono text-[#2A241E]">
                  {score} / {QUIZ_QUESTIONS.length} Doğru
                </div>
              </div>
            </div>
          ) : (
            <div className="text-xs text-[#8A7C6B] bg-white px-3 py-1.5 rounded-lg border border-[#E6DAC8]">
              {answeredCount} / {QUIZ_QUESTIONS.length} Cevaplandı
            </div>
          )}

          {!showResults ? (
            <button
              onClick={() => setShowResults(true)}
              disabled={answeredCount === 0}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                answeredCount > 0 
                  ? 'bg-[#2A241E] hover:bg-[#1A1816] text-white shadow-sm' 
                  : 'bg-stone-200 text-stone-400 cursor-not-allowed'
              }`}
            >
              <span>Testi Bitir</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#2A241E] bg-[#EFE9DF] hover:bg-[#E5DDCF] rounded-lg transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Yeniden Çöz</span>
            </button>
          )}
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-5">
        {QUIZ_QUESTIONS.map((q, index) => {
          const userChoice = selectedAnswers[q.id];
          const isCorrect = userChoice === q.correctOptionId;

          return (
            <div
              key={q.id}
              className="bg-white border border-[#E6DAC8] rounded-2xl p-5 lg:p-6 shadow-xs space-y-4"
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#FAF4EB] border border-[#E6DAC8] text-[#8C6D46] font-mono text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-xs text-[#8A7C6B] font-mono">
                    Ders Atfı: {q.speakerReference}
                  </span>
                </div>

                {showResults && (
                  <div>
                    {isCorrect ? (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <CheckCircle className="w-3.5 h-3.5" /> Doğru
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                        <XCircle className="w-3.5 h-3.5" /> Yanlış
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Question Text */}
              <h3 className="font-serif-scholarly font-bold text-base lg:text-lg text-[#1F1C18] leading-snug">
                {q.question}
              </h3>

              {/* Options */}
              <div className="space-y-2">
                {q.options.map((opt) => {
                  const isSelected = userChoice === opt.id;
                  const isRightAnswer = opt.id === q.correctOptionId;

                  let optionStyle = 'bg-[#FAF8F5] border-[#E8DFCFA0] hover:bg-[#F2ECE2] text-[#2A241E]';

                  if (showResults) {
                    if (isRightAnswer) {
                      optionStyle = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-medium ring-1 ring-emerald-300';
                    } else if (isSelected && !isRightAnswer) {
                      optionStyle = 'bg-rose-50 border-rose-300 text-rose-900 line-through';
                    } else {
                      optionStyle = 'bg-[#FAF8F5] border-stone-200 opacity-60 text-stone-500';
                    }
                  } else if (isSelected) {
                    optionStyle = 'bg-[#FAF4EB] border-[#8C6D46] text-[#1F1C18] ring-2 ring-[#8C6D46]/20 font-medium';
                  }

                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelect(q.id, opt.id)}
                      className={`w-full p-3 lg:p-3.5 rounded-xl border text-left text-xs lg:text-sm transition-all flex items-start gap-3 cursor-pointer ${optionStyle}`}
                    >
                      <span className="w-5 h-5 rounded-md font-mono text-xs flex items-center justify-center shrink-0 border border-current mt-0.5">
                        {opt.id.toUpperCase()}
                      </span>
                      <span className="leading-relaxed">
                        {opt.text}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Rationale and Teacher Reference */}
              {showResults && (
                <div className="mt-3 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DCCB] text-xs lg:text-sm text-[#4A3F33] leading-relaxed">
                  <span className="font-bold text-[#8C6D46] block mb-1">
                    Gerekçeli İzah & Usul İlkesi:
                  </span>
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
