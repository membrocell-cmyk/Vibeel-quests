import React from 'react';
import { X, Users, BookMarked, CheckCircle, ExternalLink, Lightbulb } from 'lucide-react';
import { PROJECT_METADATA } from '../data/quizData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectInfoModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
                ETERJ • {PROJECT_METADATA.event}
              </span>
            </div>
            <h2 className="text-xl font-black tracking-tight">{PROJECT_METADATA.name}</h2>
            <p className="text-xs text-slate-300">{PROJECT_METADATA.subtitle}</p>
          </div>
          <button
            id="close-project-info-btn"
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Institutional Card */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-blue-900 uppercase">Instituição de Ensino</span>
              <p className="text-sm font-semibold text-slate-900">{PROJECT_METADATA.institution}</p>
              <p className="text-xs text-slate-600">{PROJECT_METADATA.event}</p>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-blue-900 uppercase">{PROJECT_METADATA.classGroup}</span>
              <p className="text-xs font-medium text-slate-800">{PROJECT_METADATA.advisor}</p>
            </div>
          </div>

          {/* Team Members */}
          <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              <Users className="w-4 h-4 text-blue-600" />
              <span>Equipe de Desenvolvimento (Turma 1121)</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {PROJECT_METADATA.teamMembers.map((member, i) => (
                <div key={i} className="bg-white border border-slate-200 px-3 py-2 rounded-lg text-xs font-medium text-slate-800 text-center shadow-2xs">
                  {member}
                </div>
              ))}
            </div>
          </div>

          {/* Academic Sections from Poster */}
          <div className="space-y-4">
            {/* Introdução */}
            <div className="border-l-4 border-blue-600 pl-4 py-1">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4 text-blue-600" />
                Introdução & Justificativa Social
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {PROJECT_METADATA.introduction}
              </p>
            </div>

            {/* Metodologia e Desenvolvimento */}
            <div className="border-l-4 border-indigo-600 pl-4 py-1">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <BookMarked className="w-4 h-4 text-indigo-600" />
                Metodologia & Desenvolvimento
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Após etapas de planejamento, montagem de protótipo em bancada e testes práticos com microcontroladores ESP32 e ESP32-C3, foi criada uma solução simples, funcional e inclusiva. O sistema permite a configuração facilitada de redes locais e transmissão de sinal imediata para acionamento do motor Vibracall com transistor chaveador.
              </p>
            </div>

            {/* Conclusão */}
            <div className="border-l-4 border-emerald-600 pl-4 py-1">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                Conclusão dos Testes
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                O VIBEELL apresentou resultados satisfatórios ao transformar o sinal da campainha em vibrações no pulso, permitindo sua percepção por pessoas surdas com total comodidade e segurança. Os testes confirmaram seu pleno funcionamento como tecnologia assistiva de baixo custo.
              </p>
            </div>
          </div>

          {/* Referências */}
          <div className="pt-2 border-t border-slate-200">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
              Referências do Projeto
            </span>
            <ul className="text-xs text-slate-600 space-y-1">
              <li>• Plataforma de Prototipagem Aberta: <a href="https://www.arduino.cc/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.arduino.cc/</a></li>
              <li>• Pulseira elos botão estilo wearable para fixação do conjunto no pulso.</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            id="close-project-modal-bottom-btn"
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors"
          >
            Entendido, fechar
          </button>
        </div>
      </div>
    </div>
  );
};
