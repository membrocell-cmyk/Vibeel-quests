import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Keys provided by user
export const SUPABASE_PUBLISHABLE_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'sb_publishable_800-4TjW2sY0GTT6RaRzeQ_-96GJuYW';

// Project URL from user
export const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL ||
  'https://qpefwxtnpgyajjmwuldv.supabase.co';

export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_PUBLISHABLE_KEY);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    })
  : null;

export interface QuizSubmission {
  id?: string;
  student_name: string;
  score: number;
  correct_count: number;
  total_questions: number;
  wrong_count: number;
  correct_questions?: number[];
  wrong_questions?: number[];
  answers?: Record<string, string>;
  created_at?: string;
}

/**
 * Saves or updates student exam result in Supabase table 'respostas_simulado' or 'simulados'
 */
export async function saveStudentResult(submission: QuizSubmission): Promise<{ success: boolean; error?: string }> {
  // Always save locally in localStorage as a bulletproof backup
  try {
    const existing = JSON.parse(localStorage.getItem('vibeell_saved_results') || '[]');
    existing.push({ ...submission, saved_at: new Date().toISOString() });
    localStorage.setItem('vibeell_saved_results', JSON.stringify(existing));
  } catch (e) {
    console.warn('Local backup failed', e);
  }

  if (!supabase) {
    return { success: true }; // Local saved
  }

  try {
    // Attempt inserting into 'respostas_simulado'
    const payload = {
      student_name: submission.student_name,
      score: submission.score,
      correct_count: submission.correct_count,
      wrong_count: submission.wrong_count,
      total_questions: submission.total_questions,
      correct_questions: submission.correct_questions,
      wrong_questions: submission.wrong_questions,
      answers: submission.answers,
    };

    const { error: err1 } = await supabase.from('respostas_simulado').insert([payload]);
    if (!err1) return { success: true };

    // Fallback table name: 'simulados' or 'quiz_results'
    const { error: err2 } = await supabase.from('simulados').insert([payload]);
    if (!err2) return { success: true };

    const { error: err3 } = await supabase.from('quiz_results').insert([payload]);
    if (!err3) return { success: true };

    console.warn('Supabase insert note:', err1?.message || err2?.message);
    return { success: false, error: err1?.message };
  } catch (err: any) {
    console.error('Error saving to supabase:', err);
    return { success: false, error: err?.message };
  }
}
