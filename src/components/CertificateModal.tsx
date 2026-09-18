import React from 'react';
import { Award, CheckCircle, Printer, X } from 'lucide-react';
import { StudentInfo } from '../types';
import { PROJECT_METADATA } from '../data/quizData';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentInfo: StudentInfo;
  score: number;
  totalQuestions: number;
  correctCount: number;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  studentInfo,
  score,
  totalQuestions,
  correctCount,
}) => {
  if (!isOpen) return null;

  const studentDisplayName = studentInfo.name.trim() || 'Estudante Avaliado';
  const currentDate = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[92vh] flex flex-col overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Top Control Bar (hidden in print) */}
        <div className="no-print px-6 py-3.5 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-bold">Certificado de Avaliação Técnica</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              id="print-certificate-btn"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / Salvar PDF</span>
            </button>
            <button
              id="close-cert-top-btn"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Paper Canvas */}
        <div className="p-8 sm:p-12 overflow-y-auto bg-gradient-to-br from-amber-50/20 via-white to-slate-50 flex flex-col items-center text-center relative border-8 border-double border-slate-300 m-4 rounded-2xl">
          {/* Institutional Stamp & Seal */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center text-white shadow-lg mb-4 ring-4 ring-blue-100">
            <Award className="w-8 h-8 text-amber-300" />
          </div>

          <span className="text-xs font-black tracking-widest text-blue-900 uppercase">
            {PROJECT_METADATA.institution}
          </span>
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
            {PROJECT_METADATA.event} • Turma 1121
          </span>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading tracking-tight mt-2">
            CERTIFICADO DE DESEMPENHO TÉCNICO
          </h2>
          <div className="w-20 h-1 bg-amber-500 my-4 rounded-full mx-auto" />

          {/* Certificate Body Text */}
          <p className="text-sm sm:text-base text-slate-700 max-w-xl leading-relaxed mt-2">
            Certificamos que o(a) avaliado(a)
          </p>

          <h3 className="text-xl sm:text-2xl font-black text-blue-950 font-heading my-2 border-b-2 border-blue-900 pb-1 px-4 inline-block">
            {studentDisplayName}
          </h3>

          <p className="text-sm sm:text-base text-slate-700 max-w-xl leading-relaxed mt-2">
            concluiu com êxito a avaliação teórica e prática sobre o projeto{' '}
            <strong className="text-slate-900 font-extrabold">{PROJECT_METADATA.name}</strong>{' '}
            (Campainha Acessível com Pulseira Vibratória para Pessoas com Deficiência Auditiva),
            obtendo a nota final:
          </p>

          {/* Score Badge */}
          <div className="my-5 inline-flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-2xl shadow-md border-2 border-amber-400">
            <div className="text-left">
              <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider block">
                Nota Obtida
              </span>
              <span className="text-2xl font-black">
                {score.toFixed(1).replace('.', ',')} / 10,0
              </span>
            </div>
            <div className="h-8 w-px bg-slate-700" />
            <div className="text-left text-xs text-slate-300">
              <span className="font-semibold text-white block">{correctCount} de {totalQuestions} Acertos</span>
              <span>{Math.round((correctCount / totalQuestions) * 100)}% de aproveitamento</span>
            </div>
          </div>

          <p className="text-xs text-slate-500 max-w-lg mb-8">
            Avaliação realizada em {currentDate}. Demonstrou domínio sobre arquitetura de redes locais (Modo AP "Vibeell"), microcontroladores ESP32/ESP32-C3, gerenciamento de energia com TP4056 USB-C e circuito transistorizado com atuador Vibracall.
          </p>

          {/* Signature Lines */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-slate-200 mt-auto">
            <div className="flex flex-col items-center">
              <div className="w-48 border-b border-slate-400 pb-1 text-xs font-semibold text-slate-700 font-mono">
                Tacila Vanessa
              </div>
              <span className="text-[11px] font-bold text-slate-800 mt-1">Professora Orientadora</span>
              <span className="text-[10px] text-slate-500">Coordenação ETERJ</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-48 border-b border-slate-400 pb-1 text-xs font-semibold text-slate-700 font-mono">
                Equipe Turma 1121
              </div>
              <span className="text-[11px] font-bold text-slate-800 mt-1">Projeto VIBEELL</span>
              <span className="text-[10px] text-slate-500">Desenvolvedores Discentes</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar (hidden in print) */}
        <div className="no-print px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">Documento gerado automaticamente pelo sistema de avaliação do VIBEELL</span>
          <button
            id="close-cert-bottom-btn"
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
