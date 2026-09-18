export type OptionId = 'A' | 'B' | 'C' | 'D';

export interface Option {
  id: OptionId;
  text: string;
}

export interface Question {
  id: number;
  category: 'Acessibilidade' | 'Conectividade Wi-Fi' | 'Eletrônica e Hardware' | 'Lógica de Acionamento' | 'Projeto ETERJ';
  question: string;
  options: Option[];
  correctAnswer: OptionId;
  explanation: string;
  technicalTip: string;
}

export type ExamMode = 'official' | 'study';

export interface StudentInfo {
  name: string;
  registration: string;
  classGroup: string;
}

export interface UserAnswer {
  questionId: number;
  selectedOption: OptionId | null;
  isFlaggedForReview?: boolean;
}

export interface ExamResult {
  score: number; // 0.0 to 10.0
  correctCount: number;
  totalQuestions: number;
  percentage: number;
  timeSpentSeconds: number;
  completedAt: string;
}

export interface PracticalStep {
  stepNumber: number;
  title: string;
  component: string;
  description: string;
  technicalNote: string;
}
