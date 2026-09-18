import React, { useState, useEffect } from 'react';
import { Award, CheckCircle2, XCircle, RotateCcw, FileText, Check, AlertTriangle, Printer, Sparkles, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Question, OptionId, StudentInfo } from '../types';
import { PROJECT_METADATA } from '../data/quizData';

interface ExamResultsProps {
  questions: Question[];
  userAnswers: Record<number, OptionId | null>;
  timeSpentSeconds: number;
  studentInfo: StudentInfo;
  onRestart: () => void;
  onOpenCertificate: () => void;
  onOpenCircuit: () => void;
}

export const ExamResults: React.FC<ExamResultsProps> = ({
  questions,
  userAnswers,
  timeSpentSeconds,
  studentInfo,
  onRestart,
  onOpenCertificate,
  onOpenCircuit,
}) => {
  const [filter, setFilter] = useState<'all' | 'correct' | 'incorrect'>('all');
  const [expandedQuestions, setExpandedQuestions] = useState<Record<number, boolean>>({});

  const totalQuestions = questions.length;
  let correctCount = 0;
  let incorrectCount = 0;
  let blankCount = 0;

  questions.forEach((q) => {
    const ans = userAnswers[q.id];
    if (!ans) {
      blankCount++;
    } else if (ans === q.correctAnswer) {
      correctCount++;
    } else {
      incorrectCount++;
    }
  });

  const finalScore = Number(((correctCount / totalQuestions) * 10).toFixed(1));
  const percentage = Math.round((correctCount / totalQuestions) * 100);

  // Trigger celebration confetti on high score
  useEffect(() => {
    if (finalScore >= 7.0) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [finalScore]);

  const toggleExpand = (id: number) => {
    setExpandedQuestions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const filteredQuestions = questions.filter((q) => {
    const ans = userAnswers[q.id];
    const isCorrect = ans === q.correctAnswer;
    if (filter === 'correct') return isCorrect;
    if (filter === 'incorrect') return !isCorrect;
    return true;
  });

  // Grade badge styling
  const isExcellent = finalScore >= 9.0;
  const isPassing = finalScore >= 6.0;

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Score Summary Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold text-blue-300 uppercase tracking-widest">
                Resultado Oficial da Avaliação
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
                {studentInfo.name ? `Desempenho de ${studentInfo.name}` : 'Boletim do Aluno'}
              </h2>
              <p className="text-xs text-slate-300 mt-0.5">
                Turma {studentInfo.classGroup || '1121'} • {PROJECT_METADATA.name} ({PROJECT_METADATA.institution})
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                id="view-certificate-top-btn"
                onClick={onOpenCertificate}
                className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
              >
                <Award className="w-4 h-4" />
                <span>Emitir Certificado</span>
              </button>
            </div>
          </div>

          {/* Metric Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            {/* Final Grade */}
            <div className="bg-white/10 backdrop-blur-xs border border-white/10 rounded-2xl p-4">
              <span className="text-xs text-slate-300 font-medium">Nota Final</span>
              <div className="text-3xl sm:text-4xl font-black text-white mt-1">
                {finalScore.toFixed(1).replace('.', ',')}
                <span className="text-sm font-normal text-slate-400 ml-1">/ 10</span>
              </div>
              <span className={`inline-block mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                isExcellent
                  ? 'bg-emerald-500 text-white'
                  : isPassing
                  ? 'bg-blue-500 text-white'
                  : 'bg-rose-500 text-white'
              }`}>
                {isExcellent ? 'Excelente' : isPassing ? 'Aprovado' : 'Revisar Conteúdo'}
              </span>
            </div>

            {/* Total Acertos */}
            <div className="bg-white/10 backdrop-blur-xs border border-white/10 rounded-2xl p-4">
              <span className="text-xs text-emerald-300 font-medium">Acertos</span>
              <div className="text-3xl sm:text-4xl font-black text-emerald-400 mt-1">
                {correctCount}
              </div>
              <span className="text-[11px] text-slate-300 mt-2 block font-medium">
                {percentage}% de aproveitamento
              </span>
            </div>

            {/* Total Erros / Em branco */}
            <div className="bg-white/10 backdrop-blur-xs border border-white/10 rounded-2xl p-4">
              <span className="text-xs text-rose-300 font-medium">Erros / Em Branco</span>
              <div className="text-3xl sm:text-4xl font-black text-rose-400 mt-1">
                {incorrectCount + blankCount}
              </div>
              <span className="text-[11px] text-slate-300 mt-2 block font-medium">
                {blankCount > 0 ? `${blankCount} não respondidas` : 'Todas respondidas'}
              </span>
            </div>

            {/* Tempo */}
            <div className="bg-white/10 backdrop-blur-xs border border-white/10 rounded-2xl p-4">
              <span className="text-xs text-slate-300 font-medium">Tempo Gasto</span>
              <div className="text-2xl sm:text-3xl font-black text-white mt-2">
                {formatTime(timeSpentSeconds)}
              </div>
              <span className="text-[11px] text-slate-300 mt-2 block font-medium">
                Ritmo de avaliação
              </span>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              id="retake-exam-btn"
              onClick={onRestart}
              className="flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold border border-slate-300 rounded-xl transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Refazer Prova</span>
            </button>
            <button
              id="open-circuit-from-results-btn"
              onClick={onOpenCircuit}
              className="flex items-center gap-1.5 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold border border-blue-200 rounded-xl transition-colors cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Ver Bancada do Circuito</span>
            </button>
          </div>

          <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200 text-xs">
            <button
              id="filter-all-btn"
              onClick={() => setFilter('all')}
              className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                filter === 'all' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todas ({questions.length})
            </button>
            <button
              id="filter-correct-btn"
              onClick={() => setFilter('correct')}
              className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                filter === 'correct' ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Acertos ({correctCount})
            </button>
            <button
              id="filter-incorrect-btn"
              onClick={() => setFilter('incorrect')}
              className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                filter === 'incorrect' ? 'bg-rose-600 text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Erros ({incorrectCount + blankCount})
            </button>
          </div>
        </div>
      </div>

      {/* Answer Key Title */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-bold text-slate-900">
            Gabarito Oficial Comentado & Justificativas Técnicas
          </h3>
        </div>
        <span className="text-xs text-slate-500">
          Exibindo {filteredQuestions.length} questões
        </span>
      </div>

      {/* Question List Review */}
      <div className="space-y-4">
        {filteredQuestions.map((q) => {
          const userAns = userAnswers[q.id];
          const isCorrect = userAns === q.correctAnswer;
          const isExpanded = expandedQuestions[q.id] ?? true;

          return (
            <div
              key={q.id}
              className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                isCorrect ? 'border-emerald-200' : 'border-rose-200'
              }`}
            >
              {/* Question Header */}
              <div
                onClick={() => toggleExpand(q.id)}
                className="p-4 sm:p-5 flex items-start justify-between gap-3 cursor-pointer hover:bg-slate-50/70 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                    isCorrect ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                  }`}>
                    {isCorrect ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-slate-900">Questão {q.id}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 font-medium text-slate-600">
                        {q.category}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {q.question}
                    </h4>
                  </div>
                </div>

                <button className="text-slate-400 p-1">
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>

              {/* Collapsible Details */}
              {isExpanded && (
                <div className="px-5 pb-5 pt-1 border-t border-slate-100 space-y-4">
                  {/* Options List */}
                  <div className="grid grid-cols-1 gap-2 pt-2">
                    {q.options.map((opt) => {
                      const isOptionCorrect = opt.id === q.correctAnswer;
                      const wasSelectedByUser = opt.id === userAns;

                      let optBox = 'border-slate-200 bg-slate-50/50 text-slate-700';
                      let badge = 'bg-slate-200 text-slate-700';

                      if (isOptionCorrect) {
                        optBox = 'border-emerald-500 bg-emerald-50/80 text-emerald-950 font-semibold ring-1 ring-emerald-400';
                        badge = 'bg-emerald-600 text-white';
                      } else if (wasSelectedByUser && !isOptionCorrect) {
                        optBox = 'border-rose-400 bg-rose-50/80 text-rose-950 ring-1 ring-rose-300';
                        badge = 'bg-rose-600 text-white';
                      }

                      return (
                        <div
                          key={opt.id}
                          className={`p-3 rounded-xl border text-xs sm:text-sm flex items-start gap-2.5 ${optBox}`}
                        >
                          <span className={`w-5 h-5 rounded-md text-[11px] font-bold flex items-center justify-center shrink-0 ${badge}`}>
                            {opt.id}
                          </span>
                          <span className="flex-1">{opt.text}</span>
                          {isOptionCorrect && (
                            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded shrink-0">
                              Correta (Gabarito)
                            </span>
                          )}
                          {wasSelectedByUser && !isOptionCorrect && (
                            <span className="text-[10px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded shrink-0">
                              Sua Escolha
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation Box */}
                  <div className="bg-blue-50/60 border border-blue-200 rounded-xl p-3.5 text-xs text-slate-800 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-blue-900 font-bold">
                      <Sparkles className="w-3.5 h-3.5 text-blue-700" />
                      <span>Comentário & Explicação do Projeto VIBEELL:</span>
                    </div>
                    <p className="leading-relaxed">{q.explanation}</p>
                    <p className="text-slate-600 pt-1 border-t border-blue-200/60 font-medium">
                      <span className="font-bold text-slate-900">Referencial Técnico:</span> {q.technicalTip}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
