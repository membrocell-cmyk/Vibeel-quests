import React from 'react';
import { Bookmark, CheckCircle2, ChevronLeft, ChevronRight, HelpCircle, AlertCircle, Sparkles } from 'lucide-react';
import { Question, OptionId, ExamMode } from '../types';

interface QuestionCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  selectedOption: OptionId | null;
  onSelectOption: (optionId: OptionId) => void;
  isFlagged?: boolean;
  onToggleFlag?: () => void;
  examMode: ExamMode;
  onNext: () => void;
  onPrev: () => void;
  canGoNext: boolean;
  canGoPrev: boolean;
  isLastQuestion: boolean;
  onFinishExam: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentIndex,
  totalQuestions,
  selectedOption,
  onSelectOption,
  isFlagged = false,
  onToggleFlag,
  examMode,
  onNext,
  onPrev,
  canGoNext,
  canGoPrev,
  isLastQuestion,
  onFinishExam,
}) => {
  const isStudy = examMode === 'study';
  const hasAnswered = selectedOption !== null;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
      {/* Question Header */}
      <div className="p-5 sm:p-6 bg-slate-50/70 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="px-3 py-1 bg-blue-600 text-white font-bold text-xs rounded-lg shadow-2xs tracking-wide">
            QUESTÃO {String(currentIndex + 1).padStart(2, '0')} / {String(totalQuestions).padStart(2, '0')}
          </span>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-slate-200 text-slate-700">
            {question.category}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {onToggleFlag && (
            <button
              id={`flag-question-${question.id}-btn`}
              onClick={onToggleFlag}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border transition-colors ${
                isFlagged
                  ? 'bg-amber-100 text-amber-900 border-amber-300'
                  : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-100'
              }`}
              title="Marcar questão para revisar antes de entregar a prova"
            >
              <Bookmark className={`w-3.5 h-3.5 ${isFlagged ? 'fill-amber-600 text-amber-600' : ''}`} />
              <span>{isFlagged ? 'Marcada p/ Revisão' : 'Marcar p/ Revisar'}</span>
            </button>
          )}

          {isStudy && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Gabarito Imediato Ativo
            </span>
          )}
        </div>
      </div>

      {/* Question Body */}
      <div className="p-5 sm:p-8 space-y-6">
        {/* Enunciado */}
        <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed font-heading">
          {question.question}
        </h2>

        {/* Alternatives List */}
        <div className="space-y-3">
          {question.options.map((option) => {
            const isSelected = selectedOption === option.id;
            const isCorrect = option.id === question.correctAnswer;
            
            // In Study mode: show green for correct, red for incorrect once selected
            let stateStyle = 'border-slate-200 hover:border-blue-400 hover:bg-blue-50/30 bg-white text-slate-800';
            let badgeStyle = 'bg-slate-100 text-slate-700 border-slate-300';

            if (isStudy && hasAnswered) {
              if (isCorrect) {
                stateStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-1 ring-emerald-500';
                badgeStyle = 'bg-emerald-600 text-white border-emerald-600';
              } else if (isSelected && !isCorrect) {
                stateStyle = 'border-rose-400 bg-rose-50 text-rose-950 ring-1 ring-rose-400';
                badgeStyle = 'bg-rose-600 text-white border-rose-600';
              } else {
                stateStyle = 'border-slate-200 bg-slate-50/50 text-slate-400 opacity-60';
                badgeStyle = 'bg-slate-200 text-slate-500 border-slate-300';
              }
            } else if (isSelected) {
              stateStyle = 'border-blue-600 bg-blue-50/70 text-blue-950 ring-2 ring-blue-500 font-semibold';
              badgeStyle = 'bg-blue-600 text-white border-blue-600';
            }

            return (
              <button
                key={option.id}
                id={`option-${question.id}-${option.id}-btn`}
                onClick={() => onSelectOption(option.id)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-start gap-3.5 cursor-pointer ${stateStyle}`}
              >
                <div
                  className={`w-7 h-7 rounded-lg font-bold text-xs flex items-center justify-center shrink-0 border mt-0.5 transition-colors ${badgeStyle}`}
                >
                  {option.id}
                </div>
                <div className="flex-1 text-sm sm:text-base leading-snug">
                  {option.text}
                </div>
                {isStudy && hasAnswered && isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                )}
                {isStudy && hasAnswered && isSelected && !isCorrect && (
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                )}
              </button>
            );
          })}
        </div>

        {/* Study Mode Feedback Box */}
        {isStudy && hasAnswered && (
          <div className={`p-5 rounded-xl border animate-in fade-in duration-200 ${
            selectedOption === question.correctAnswer
              ? 'bg-emerald-50/90 border-emerald-300 text-emerald-900'
              : 'bg-amber-50/90 border-amber-300 text-amber-950'
          }`}>
            <div className="flex items-center gap-2 mb-2 font-bold text-sm">
              {selectedOption === question.correctAnswer ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Excelente! Resposta Correta (Alternativa {question.correctAnswer})</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                  <span>Atenção! A resposta correta é a Alternativa {question.correctAnswer}</span>
                </>
              )}
            </div>
            <p className="text-sm leading-relaxed mb-3">
              {question.explanation}
            </p>
            <div className="text-xs bg-white/70 p-2.5 rounded-lg border border-current/15 font-medium flex items-center gap-1.5">
              <span className="font-bold">Fundamento Técnico:</span>
              <span>{question.technicalTip}</span>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Footer */}
      <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
        <button
          id="prev-question-btn"
          disabled={!canGoPrev}
          onClick={onPrev}
          className={`flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
            canGoPrev
              ? 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100 cursor-pointer'
              : 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed opacity-50'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Anterior</span>
        </button>

        <div className="flex items-center gap-2">
          {isLastQuestion ? (
            <button
              id="finish-exam-btn"
              onClick={onFinishExam}
              className="px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl text-xs font-bold shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Finalizar & Entregar Prova</span>
            </button>
          ) : (
            <button
              id="next-question-btn"
              onClick={onNext}
              className="flex items-center gap-1 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-sm transition-all cursor-pointer"
            >
              <span>Próxima Questão</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
