import React, { useState, useEffect } from 'react';
import { QUIZ_QUESTIONS } from './data/quizData';
import { OptionId } from './types';
import { RotateCcw, LogOut, CheckCircle, Cloud, AlertCircle } from 'lucide-react';
import { saveStudentResult, isSupabaseConfigured, supabase } from './lib/supabase';
import { NameLoginScreen } from './components/NameLoginScreen';

export default function App() {
  const [studentName, setStudentName] = useState<string | null>(() => {
    return sessionStorage.getItem('vibeell_student_name') || null;
  });
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, OptionId | null>>({});
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [saveErrorMsg, setSaveErrorMsg] = useState<string | null>(null);

  const total = QUIZ_QUESTIONS.length;
  const q = QUIZ_QUESTIONS[currentIdx];
  const selectedOption = userAnswers[q?.id] ?? null;

  const handleSelectOption = (optionId: OptionId) => {
    setUserAnswers((prev) => ({
      ...prev,
      [q.id]: optionId,
    }));
  };

  const handleNext = () => {
    if (currentIdx < total - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      finishAndSave();
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setUserAnswers({});
    setCurrentIdx(0);
    setIsFinished(false);
    setSaveStatus('idle');
    setSaveErrorMsg(null);
  };

  const handleSignOut = () => {
    sessionStorage.removeItem('vibeell_student_name');
    setStudentName(null);
    handleRestart();
  };

  // Submit and save results to Supabase table
  const finishAndSave = async () => {
    setIsFinished(true);
    setSaveStatus('saving');

    const correctQuestions: number[] = [];
    const wrongQuestions: number[] = [];
    let correctCount = 0;

    const formattedAnswers: Record<string, string> = {};

    QUIZ_QUESTIONS.forEach((item) => {
      const choice = userAnswers[item.id] || 'NÃO_RESPONDIDA';
      formattedAnswers[`Q${item.id}`] = choice;
      if (userAnswers[item.id] === item.correctAnswer) {
        correctCount++;
        correctQuestions.push(item.id);
      } else {
        wrongQuestions.push(item.id);
      }
    });

    const score = Number(((correctCount / total) * 10).toFixed(1));
    const wrongCount = total - correctCount;

    const res = await saveStudentResult({
      student_name: studentName || 'Aluno Sem Nome',
      score,
      correct_count: correctCount,
      wrong_count: wrongCount,
      total_questions: total,
      correct_questions: correctQuestions,
      wrong_questions: wrongQuestions,
      answers: formattedAnswers,
    });

    if (res.success) {
      setSaveStatus('saved');
    } else {
      setSaveStatus('error');
      setSaveErrorMsg(res.error || 'Erro ao sincronizar');
    }
  };

  // If no name chosen yet, ask only for the Name
  if (!studentName) {
    return <NameLoginScreen onStart={(name) => setStudentName(name)} />;
  }

  // Calculate score for display
  let correctCount = 0;
  QUIZ_QUESTIONS.forEach((item) => {
    if (userAnswers[item.id] === item.correctAnswer) {
      correctCount++;
    }
  });
  const score = Number(((correctCount / total) * 10).toFixed(1));

  // Result screen (minimalist, mobile focused)
  if (isFinished) {
    return (
      <main className="min-h-screen bg-[#090d16] text-white flex flex-col justify-between p-4 max-w-md mx-auto selection:bg-blue-600">
        <div className="pt-4 flex items-center justify-between text-xs text-slate-400 border-b border-slate-800/80 pb-3">
          <div className="flex items-center gap-1.5 font-medium text-slate-200">
            <span className="truncate max-w-[200px]">{studentName}</span>
          </div>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-1 text-slate-400 hover:text-rose-400 transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Trocar Nome</span>
          </button>
        </div>

        {/* Supabase status badge */}
        <div className="pt-2">
          {saveStatus === 'saving' && (
            <div className="p-2.5 rounded-xl bg-blue-950/40 border border-blue-800/40 text-blue-300 text-xs flex items-center justify-center gap-2">
              <div className="w-3 h-3 border border-blue-400 border-t-transparent rounded-full animate-spin" />
              <span>Gravando no Supabase...</span>
            </div>
          )}
          {saveStatus === 'saved' && (
            <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800/50 text-emerald-300 text-xs flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Salvo com sucesso na tabela do Supabase!</span>
            </div>
          )}
          {saveStatus === 'error' && (
            <div className="p-2.5 rounded-xl bg-amber-950/40 border border-amber-800/50 text-amber-300 text-[11px] text-center space-y-1">
              <div className="flex items-center justify-center gap-1.5 font-semibold">
                <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>Salvo localmente no aparelho</span>
              </div>
              <p className="text-slate-400 text-[10px]">
                {saveErrorMsg || 'Aguardando tabela no Supabase'}
              </p>
            </div>
          )}
        </div>

        <div className="pt-2 text-center space-y-3">
          <div className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
            Resultado da Prova
          </div>
          <div className="text-5xl font-extrabold text-blue-400 tracking-tight">
            {score.toFixed(1).replace('.', ',')}
            <span className="text-xl text-slate-400 font-normal"> / 10</span>
          </div>
          <div className="flex items-center justify-center gap-4 text-xs">
            <span className="text-emerald-400 font-semibold">
              ✓ {correctCount} acertos
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-rose-400 font-semibold">
              ✗ {total - correctCount} erros
            </span>
          </div>
        </div>

        {/* Minimalist Question list */}
        <div className="my-5 space-y-2.5 max-h-[50vh] overflow-y-auto pr-1">
          {QUIZ_QUESTIONS.map((item, idx) => {
            const userChoice = userAnswers[item.id];
            const isCorrect = userChoice === item.correctAnswer;
            return (
              <div
                key={item.id}
                className={`p-3.5 rounded-2xl border text-xs space-y-1.5 transition-colors ${
                  isCorrect
                    ? 'bg-emerald-950/30 border-emerald-800/40 text-emerald-200'
                    : 'bg-rose-950/30 border-rose-800/40 text-rose-200'
                }`}
              >
                <div className="flex items-center justify-between font-bold">
                  <span>Questão {idx + 1}</span>
                  <span>{isCorrect ? '✓ Acertou' : `✗ Errou (Gabarito: ${item.correctAnswer})`}</span>
                </div>
                <p className="text-slate-100 font-medium text-[13px] leading-snug">
                  {item.question}
                </p>
                <p className="text-slate-400 text-[11px] leading-relaxed pt-1 border-t border-white/5">
                  {item.explanation}
                </p>
              </div>
            );
          })}
        </div>

        <div className="pb-4">
          <button
            id="btn-restart"
            onClick={handleRestart}
            className="w-full py-4 bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white rounded-2xl text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Refazer Simulado</span>
          </button>
        </div>
      </main>
    );
  }

  // Pure Question Screen (only the question and options on mobile)
  return (
    <main className="min-h-screen bg-[#090d16] text-white flex flex-col justify-between p-4 max-w-md mx-auto select-none">
      {/* Top minimal counter + student name */}
      <div className="pt-3">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
          <span>{currentIdx + 1} / {total}</span>
          <div className="flex items-center gap-2">
            <span className="text-slate-300 font-medium truncate max-w-[120px]">{studentName}</span>
            <button
              onClick={handleSignOut}
              title="Trocar de nome"
              className="text-slate-500 hover:text-slate-300 transition-colors p-1"
            >
              <LogOut className="w-3 h-3" />
            </button>
          </div>
        </div>
        <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300 rounded-full"
            style={{ width: `${((currentIdx + 1) / total) * 100}%` }}
          />
        </div>
      </div>

      {/* Center: Question Title + Options */}
      <div className="my-auto py-5 space-y-5">
        <h1 className="text-lg font-bold text-slate-100 leading-snug tracking-tight">
          {q.question}
        </h1>

        <div className="space-y-2.5">
          {q.options.map((opt) => {
            const isSelected = selectedOption === opt.id;
            return (
              <button
                key={opt.id}
                id={`opt-${opt.id}`}
                onClick={() => handleSelectOption(opt.id)}
                className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center gap-3.5 cursor-pointer active:scale-[0.98] ${
                  isSelected
                    ? 'border-blue-500 bg-blue-600/20 text-white shadow-sm ring-1 ring-blue-500'
                    : 'border-slate-800/80 bg-slate-900/90 text-slate-200 hover:border-slate-700'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-xl text-xs font-bold flex items-center justify-center shrink-0 border transition-colors ${
                    isSelected
                      ? 'bg-blue-500 text-white border-blue-400'
                      : 'bg-slate-800 text-slate-400 border-slate-700'
                  }`}
                >
                  {opt.id}
                </div>
                <div className="text-sm font-medium leading-snug flex-1">
                  {opt.text}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom navigation buttons */}
      <div className="pb-3 pt-2 flex items-center gap-3">
        {currentIdx > 0 && (
          <button
            id="btn-prev"
            onClick={handlePrev}
            className="w-28 py-3.5 rounded-2xl text-xs font-bold border border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800 cursor-pointer active:scale-[0.98] transition-all"
          >
            Anterior
          </button>
        )}

        <button
          id="btn-next"
          onClick={handleNext}
          className="flex-1 py-3.5 rounded-2xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white active:scale-[0.98] cursor-pointer shadow-md transition-all text-center"
        >
          {currentIdx === total - 1 ? 'Finalizar Prova' : 'Próxima'}
        </button>
      </div>
    </main>
  );
}
