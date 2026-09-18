import React from 'react';
import { Bookmark, CheckCircle, HelpCircle } from 'lucide-react';
import { Question, UserAnswer, OptionId, ExamMode } from '../types';

interface AnswerSheetProps {
  questions: Question[];
  currentQuestionIndex: number;
  userAnswers: Record<number, OptionId | null>;
  flaggedQuestions: Record<number, boolean>;
  onSelectQuestion: (index: number) => void;
  examMode: ExamMode;
  onFinishExam: () => void;
}

export const ExamAnswerSheet: React.FC<AnswerSheetProps> = ({
  questions,
  currentQuestionIndex,
  userAnswers,
  flaggedQuestions,
  onSelectQuestion,
  examMode,
  onFinishExam,
}) => {
  const answeredCount = Object.values(userAnswers).filter(Boolean).length;
  const flaggedCount = Object.values(flaggedQuestions).filter(Boolean).length;
  const progressPercent = Math.round((answeredCount / questions.length) * 100);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 space-y-5">
      {/* Header */}
      <div className="border-b border-slate-200 pb-3">
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Cartão de Respostas
          </h3>
          <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
            {answeredCount} / {questions.length} Respondidas
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Grid of Questions */}
      <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-4 gap-2">
        {questions.map((q, idx) => {
          const isCurrent = idx === currentQuestionIndex;
          const isAnswered = Boolean(userAnswers[q.id]);
          const isFlagged = Boolean(flaggedQuestions[q.id]);
          const selectedVal = userAnswers[q.id];

          let btnClass = 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100';

          if (isAnswered) {
            btnClass = 'bg-blue-600 text-white border-blue-600 font-bold';
          }
          if (isCurrent) {
            btnClass += ' ring-2 ring-blue-500 ring-offset-2';
          }

          return (
            <button
              key={q.id}
              id={`nav-question-${q.id}-btn`}
              onClick={() => onSelectQuestion(idx)}
              className={`relative h-11 rounded-xl border text-xs font-semibold flex flex-col items-center justify-center transition-all cursor-pointer ${btnClass}`}
              title={`Questão ${idx + 1}: ${isAnswered ? `Marcada alternativa ${selectedVal}` : 'Não respondida'}`}
            >
              <span className="text-[10px] opacity-80">Q{idx + 1}</span>
              <span className="text-xs font-bold leading-none">
                {selectedVal || '-'}
              </span>

              {isFlagged && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-500 rounded-full flex items-center justify-center text-white text-[9px] ring-2 ring-white">
                  ★
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="pt-2 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-500">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded bg-blue-600 shrink-0" />
          <span>Respondida (opção gravada)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded bg-slate-100 border border-slate-300 shrink-0" />
          <span>Pendente de resposta</span>
        </div>
        {flaggedCount > 0 && (
          <div className="flex items-center gap-2 text-amber-700">
            <span className="w-3 h-3 rounded-full bg-amber-500 text-white flex items-center justify-center text-[9px] shrink-0">
              ★
            </span>
            <span>{flaggedCount} marcada(s) para revisão</span>
          </div>
        )}
      </div>

      {/* Direct Submit Button */}
      <button
        id="submit-sheet-btn"
        onClick={onFinishExam}
        className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
      >
        <CheckCircle className="w-4 h-4 text-emerald-400" />
        <span>Entregar Prova Agora</span>
      </button>
    </div>
  );
};
