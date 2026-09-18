import React, { useState, useEffect } from 'react';
import { Wifi, BatteryCharging, Radio, Cpu, Bell, CheckCircle2, RotateCcw, X, Zap } from 'lucide-react';
import { PRACTICAL_STEPS } from '../data/quizData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const InteractiveCircuitModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isButtonPressed, setIsButtonPressed] = useState<boolean>(false);
  const [isVibrating, setIsVibrating] = useState<boolean>(false);
  const [signalStage, setSignalStage] = useState<'idle' | 'doorbell' | 'wifi' | 'esp32' | 'transistor' | 'vibracall'>('idle');
  const [wifiMode, setWifiMode] = useState<'normal' | 'portal'>('normal');

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isButtonPressed) {
      setSignalStage('doorbell');
      
      const t1 = setTimeout(() => setSignalStage('wifi'), 350);
      const t2 = setTimeout(() => setSignalStage('esp32'), 700);
      const t3 = setTimeout(() => setSignalStage('transistor'), 1050);
      const t4 = setTimeout(() => {
        setSignalStage('vibracall');
        setIsVibrating(true);
      }, 1400);
      const t5 = setTimeout(() => {
        setIsButtonPressed(false);
        setIsVibrating(false);
        setSignalStage('idle');
      }, 3200);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
        clearTimeout(t5);
      };
    }
  }, [isButtonPressed]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-lg text-white">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-wide">Bancada & Esquema Técnico - VIBEELL</h2>
              <p className="text-xs text-slate-300">Simulador do fluxo de acionamento sem fio e circuito eletrônico</p>
            </div>
          </div>
          <button
            id="close-circuit-modal-btn"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            title="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Interactive Simulation Sandbox */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-200">
              <div>
                <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">Simulador Prático em Tempo Real</span>
                <h3 className="text-base font-bold text-slate-900">Clique para acionar a campainha e ver a transmissão</h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  id="toggle-wifi-mode-btn"
                  onClick={() => setWifiMode(prev => prev === 'normal' ? 'portal' : 'normal')}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium border transition-colors flex items-center gap-1.5 ${
                    wifiMode === 'portal'
                      ? 'bg-amber-100 text-amber-900 border-amber-300'
                      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  <Wifi className="w-3.5 h-3.5" />
                  {wifiMode === 'portal' ? 'Modo: Rede Local "Vibeell" (AP)' : 'Modo: Wi-Fi Conectado'}
                </button>
              </div>
            </div>

            {/* Circuit Diagram Visual */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              {/* Node 1: Campainha com Push Button */}
              <div className={`p-4 rounded-xl border-2 transition-all text-center flex flex-col items-center justify-between min-h-[170px] ${
                signalStage === 'doorbell'
                  ? 'border-blue-600 bg-blue-50 shadow-md scale-105'
                  : 'border-slate-200 bg-white'
              }`}>
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
                  <Bell className="w-3.5 h-3.5 text-blue-600" />
                  <span>Campainha (Porta)</span>
                </div>
                <div className="my-2">
                  <button
                    id="trigger-doorbell-btn"
                    disabled={isButtonPressed}
                    onClick={() => setIsButtonPressed(true)}
                    className={`w-16 h-16 rounded-full font-bold shadow-sm transition-all flex flex-col items-center justify-center text-xs ${
                      isButtonPressed
                        ? 'bg-blue-600 text-white ring-4 ring-blue-300 scale-95'
                        : 'bg-gradient-to-b from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 active:scale-95 cursor-pointer'
                    }`}
                  >
                    <span>APERTE</span>
                    <span className="text-[10px] font-normal opacity-80">Push Button</span>
                  </button>
                </div>
                <span className="text-[11px] text-slate-500">ESP32 Transmissor</span>
              </div>

              {/* Node 2: Rede Sem Fio */}
              <div className={`p-4 rounded-xl border-2 transition-all text-center flex flex-col items-center justify-between min-h-[170px] ${
                signalStage === 'wifi'
                  ? 'border-indigo-600 bg-indigo-50 shadow-md scale-105'
                  : 'border-slate-200 bg-white'
              }`}>
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
                  <Wifi className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Comunicação Sem Fio</span>
                </div>
                <div className="my-3 flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    signalStage === 'wifi' ? 'bg-indigo-600 text-white animate-bounce' : 'bg-slate-100 text-slate-600'
                  }`}>
                    <Radio className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold text-slate-800 mt-2">
                    {wifiMode === 'portal' ? 'SSID: "Vibeell"' : 'Rede Local (Wi-Fi)'}
                  </span>
                </div>
                <span className="text-[11px] text-slate-500">
                  {wifiMode === 'portal' ? 'Portal de Configuração' : 'Pacote de Dados UDP/TCP'}
                </span>
              </div>

              {/* Node 3: ESP32-C3 & Base do Transistor */}
              <div className={`p-4 rounded-xl border-2 transition-all text-center flex flex-col items-center justify-between min-h-[170px] ${
                signalStage === 'esp32' || signalStage === 'transistor'
                  ? 'border-emerald-600 bg-emerald-50 shadow-md scale-105'
                  : 'border-slate-200 bg-white'
              }`}>
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
                  <Cpu className="w-3.5 h-3.5 text-emerald-600" />
                  <span>ESP32-C3 + Transistor</span>
                </div>
                <div className="my-2 space-y-1.5">
                  <div className={`text-xs px-2.5 py-1 rounded font-mono font-bold ${
                    signalStage === 'esp32' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    GPIO = HIGH
                  </div>
                  <div className="text-[10px] text-slate-600">Corrente na Base (Ib)</div>
                  <div className={`text-xs px-2 py-0.5 rounded font-semibold ${
                    signalStage === 'transistor' || signalStage === 'vibracall'
                      ? 'bg-emerald-700 text-white'
                      : 'bg-slate-200 text-slate-600'
                  }`}>
                    Transistor: Saturado
                  </div>
                </div>
                <span className="text-[11px] text-slate-500">Chave Eletrônica Fechada</span>
              </div>

              {/* Node 4: Pulseira com Motor Vibracall */}
              <div className={`p-4 rounded-xl border-2 transition-all text-center flex flex-col items-center justify-between min-h-[170px] ${
                isVibrating
                  ? 'border-amber-500 bg-amber-50 shadow-lg scale-105 ring-4 ring-amber-200'
                  : 'border-slate-200 bg-white'
              }`}>
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  <span>Pulseira Vibratória</span>
                </div>
                <div className="my-2 flex flex-col items-center">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 border-slate-800 ${
                    isVibrating ? 'bg-amber-400 text-slate-900 animate-vibe' : 'bg-slate-800 text-white'
                  }`}>
                    <span className="text-xl">📳</span>
                  </div>
                  <span className={`text-xs font-bold mt-2 ${isVibrating ? 'text-amber-700' : 'text-slate-600'}`}>
                    {isVibrating ? 'VIBRANDO NO PULSO!' : 'Motor Vibracall'}
                  </span>
                </div>
                <span className="text-[11px] text-slate-500">Alerta Tátil Acessível</span>
              </div>
            </div>

            {/* Status explanation line */}
            <div className="mt-4 p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                <span>
                  {signalStage === 'idle' && 'Aguardando toque na campainha. Pressione o botão acima para ver o trajeto completo.'}
                  {signalStage === 'doorbell' && 'Etapa 1: Push Button pressionado! ESP32 transmissor preparando sinal sem fio.'}
                  {signalStage === 'wifi' && 'Etapa 2: Sinal trafegando pela rede sem fio local entre os microcontroladores.'}
                  {signalStage === 'esp32' && 'Etapa 3: ESP32-C3 recebeu a ordem e envia corrente para a base do transistor.'}
                  {signalStage === 'transistor' && 'Etapa 4: Transistor chaveia, liberando corrente direta da bateria Li-Po.'}
                  {signalStage === 'vibracall' && 'Etapa 5: Motor Vibracall ativado! A pessoa surda sente a vibração no pulso com segurança.'}
                </span>
              </div>
              {isButtonPressed && (
                <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                  Processando...
                </span>
              )}
            </div>
          </div>

          {/* Theoretical Breakdown Tabs */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
              As 4 Etapas Práticas do Projeto (Conteúdo da Prova)
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
              {PRACTICAL_STEPS.map((step, idx) => (
                <button
                  key={step.stepNumber}
                  id={`tab-step-${step.stepNumber}-btn`}
                  onClick={() => setActiveTab(idx)}
                  className={`p-2.5 text-left rounded-xl border text-xs transition-all ${
                    activeTab === idx
                      ? 'border-blue-600 bg-blue-50/80 text-blue-900 font-bold shadow-xs'
                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span className="block text-[10px] text-blue-600">Etapa {step.stepNumber}</span>
                  <span className="line-clamp-1">{step.title}</span>
                </button>
              ))}
            </div>

            {/* Selected Step Card */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-blue-100 text-blue-800">
                      Etapa {PRACTICAL_STEPS[activeTab].stepNumber} de 4
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {PRACTICAL_STEPS[activeTab].component}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {PRACTICAL_STEPS[activeTab].title}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                {PRACTICAL_STEPS[activeTab].description}
              </p>
              <div className="bg-slate-50 border-l-3 border-blue-600 p-3 rounded-r-lg text-xs text-slate-700">
                <span className="font-bold text-slate-900">Destaque Técnico para a Prova: </span>
                {PRACTICAL_STEPS[activeTab].technicalNote}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Projeto VIBEELL • ETERJ XL Feira de Ciências • Turma 1121</span>
          <button
            id="close-circuit-bottom-btn"
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-medium transition-colors"
          >
            Fechar e Voltar à Prova
          </button>
        </div>
      </div>
    </div>
  );
};
