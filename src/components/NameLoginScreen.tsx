import React, { useState } from 'react';
import { User, ArrowRight, Sparkles } from 'lucide-react';
import { isSupabaseConfigured } from '../lib/supabase';

interface NameLoginScreenProps {
  onStart: (studentName: string) => void;
}

export const NameLoginScreen: React.FC<NameLoginScreenProps> = ({ onStart }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = name.trim();
    if (!cleanName) {
      setError('Por favor, digite seu nome ou como prefere ser chamado.');
      return;
    }
    if (cleanName.length < 2) {
      setError('O nome deve ter pelo menos 2 caracteres.');
      return;
    }

    // Save in session storage for persistence on refresh
    sessionStorage.setItem('vibeell_student_name', cleanName);
    onStart(cleanName);
  };

  return (
    <main className="min-h-screen bg-[#090d16] text-white flex flex-col justify-between p-5 max-w-md mx-auto select-none">
      {/* Brand Header */}
      <div className="pt-10 text-center space-y-3">
        <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center mx-auto shadow-inner shadow-blue-500/10">
          <Sparkles className="w-7 h-7" />
        </div>
        <h1 className="text-3xl font-black tracking-tight text-slate-100">
          VIBEELL
        </h1>
        <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
          Simulado Interativo de 50 Questões sobre o Projeto de Acessibilidade
        </p>
      </div>

      {/* Center Form: Only the Name */}
      <div className="my-auto py-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300 block tracking-wide">
              Digite seu Nome Completo
            </label>
            <div className="relative flex items-center">
              <User className="w-5 h-5 text-slate-500 absolute left-4 pointer-events-none" />
              <input
                id="student-name-input"
                type="text"
                autoFocus
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (error) setError(null);
                }}
                placeholder="Ex: Pedro Luka"
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-900 border border-slate-800 text-base text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium"
              />
            </div>
          </div>

          {error && (
            <p className="text-xs text-rose-400 font-medium pl-1 animate-in fade-in">
              {error}
            </p>
          )}

          <button
            id="start-quiz-btn"
            type="submit"
            className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition-all shadow-lg shadow-blue-900/20 mt-3"
          >
            <span>Iniciar Simulado</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <p className="text-[11px] text-slate-500 text-center mt-6 leading-relaxed">
          Ao terminar, sua nota e as questões acertadas e erradas serão gravadas no Supabase.
        </p>
      </div>

      {/* Footer */}
      <div className="pb-4 text-center text-[11px] text-slate-600">
        ETERJ • Turma 1121 • VIBEELL
      </div>
    </main>
  );
};
