import React from 'react';
import { Award, BookOpen, Clock, Info, ShieldCheck, UserCheck, Zap } from 'lucide-react';
import { ExamMode, StudentInfo } from '../types';
import { PROJECT_METADATA } from '../data/quizData';

interface HeaderProps {
  studentInfo: StudentInfo;
  onUpdateStudentInfo: (info: Partial<StudentInfo>) => void;
  examMode: ExamMode;
  onChangeExamMode: (mode: ExamMode) => void;
  timeRemainingSeconds: number;
  isTimerRunning: boolean;
  onOpenCircuitModal: () => void;
  onOpenProjectInfoModal: () => void;
  isExamCompleted: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  studentInfo,
  onUpdateStudentInfo,
  examMode,
  onChangeExamMode,
  timeRemainingSeconds,
  isTimerRunning,
  onOpenCircuitModal,
  onOpenProjectInfoModal,
  isExamCompleted,
}) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
      {/* Top Academic Banner */}
      <div className="bg-slate-900 text-slate-100 text-xs py-2 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-extrabold tracking-wider text-blue-400">ETERJ</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-300 font-medium">{PROJECT_METADATA.institution}</span>
            <span className="hidden sm:inline text-slate-400">•</span>
            <span className="hidden sm:inline text-slate-400">{PROJECT_METADATA.event}</span>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <span className="bg-slate-800 px-2 py-0.5 rounded text-[11px] font-semibold text-blue-300">
              {PROJECT_METADATA.classGroup}
            </span>
            <span className="hidden md:inline text-xs text-slate-400">
              {PROJECT_METADATA.advisor}
            </span>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* Project Branding */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center text-white shadow-xs">
            <span className="text-xl">📳</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-extrabold text-slate-900 tracking-tight flex items-center gap-1.5">
                {PROJECT_METADATA.name}
              </h1>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                Prova Avaliativa
              </span>
            </div>
            <p className="text-xs text-slate-500 line-clamp-1">
              {PROJECT_METADATA.subtitle}
            </p>
          </div>
        </div>

        {/* Action Controls & Info */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Mode Selector */}
          {!isExamCompleted && (
            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs">
              <button
                id="mode-official-btn"
                onClick={() => onChangeExamMode('official')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
                  examMode === 'official'
                    ? 'bg-white text-blue-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Prova Oficial</span>
              </button>
              <button
                id="mode-study-btn"
                onClick={() => onChangeExamMode('study')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
                  examMode === 'study'
                    ? 'bg-white text-emerald-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Modo Estudo</span>
              </button>
            </div>
          )}

          {/* Timer Display for Official Mode */}
          {examMode === 'official' && !isExamCompleted && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-mono font-bold text-slate-800">
              <Clock className={`w-4 h-4 ${isTimerRunning ? 'text-blue-600 animate-pulse' : 'text-slate-400'}`} />
              <span>{formatTime(timeRemainingSeconds)}</span>
            </div>
          )}

          {/* Quick Buttons */}
          <button
            id="open-circuit-bench-btn"
            onClick={onOpenCircuitModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-blue-200 bg-blue-50/70 hover:bg-blue-100 text-blue-700 text-xs font-semibold transition-colors"
          >
            <Zap className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Bancada &</span> Circuito
          </button>

          <button
            id="open-project-details-btn"
            onClick={onOpenProjectInfoModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors"
          >
            <Info className="w-3.5 h-3.5 text-slate-500" />
            <span className="hidden sm:inline">Sobre o</span> Projeto
          </button>
        </div>
      </div>

      {/* Student Identification Bar */}
      <div className="bg-slate-50/70 border-t border-slate-200/80 px-4 py-2 text-xs">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-slate-600">
            <UserCheck className="w-3.5 h-3.5 text-blue-600" />
            <span className="font-semibold text-slate-700">Aluno(a) / Avaliado(a):</span>
            <input
              id="student-name-input"
              type="text"
              placeholder="Digite seu nome completo"
              value={studentInfo.name}
              onChange={(e) => onUpdateStudentInfo({ name: e.target.value })}
              className="bg-white border border-slate-300 px-2.5 py-1 rounded-md text-slate-900 font-medium focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-48 sm:w-64"
            />
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <span>Matrícula / Turma:</span>
            <input
              id="student-class-input"
              type="text"
              placeholder="1121"
              value={studentInfo.classGroup}
              onChange={(e) => onUpdateStudentInfo({ classGroup: e.target.value })}
              className="bg-white border border-slate-300 px-2 py-1 rounded-md text-slate-900 font-medium focus:outline-hidden focus:ring-2 focus:ring-blue-500 w-24 text-center"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
