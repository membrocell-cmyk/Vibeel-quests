import React, { useState } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { LogIn, UserPlus, Mail, Lock, AlertCircle, CheckCircle, Smartphone } from 'lucide-react';

interface AuthModalProps {
  onSuccess: (userEmail: string) => void;
}

export const AuthScreen: React.FC<AuthModalProps> = ({ onSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!email.trim() || !password.trim()) {
      setErrorMessage('Preencha seu e-mail e sua senha.');
      return;
    }

    if (!isSupabaseConfigured || !supabase) {
      // Fallback preview mode when keys are not yet provided by the user
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSuccessMessage('Entrando em modo de demonstração (Supabase aguardando credenciais)...');
        setTimeout(() => {
          onSuccess(email.trim());
        }, 600);
      }, 500);
      return;
    }

    setLoading(true);
    try {
      if (isSignUp) {
        const { data, error } = await supabase.auth.signUp({
          email: email.trim(),
          password: password.trim(),
        });
        if (error) throw error;

        if (data.session) {
          onSuccess(data.user?.email || email.trim());
        } else {
          setSuccessMessage('Conta criada com sucesso! Verifique seu e-mail para confirmar o cadastro.');
        }
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password: password.trim(),
        });
        if (error) throw error;
        if (data.user) {
          onSuccess(data.user.email || email.trim());
        }
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Ocorreu um erro ao processar o login.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#090d16] text-white flex flex-col justify-between p-5 max-w-md mx-auto select-none">
      {/* Top Brand / Indicator */}
      <div className="pt-6 text-center space-y-2">
        <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center mx-auto mb-3">
          <Smartphone className="w-6 h-6" />
        </div>
        <h1 className="text-2xl font-black tracking-tight text-slate-100">
          VIBEELL
        </h1>
        <p className="text-xs text-slate-400">
          {isSignUp ? 'Crie sua conta para iniciar o simulado' : 'Entre com sua conta para acessar o simulado'}
        </p>
      </div>

      {/* Main Card Form */}
      <div className="my-auto py-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMessage && (
            <div className="p-3 rounded-xl bg-rose-950/50 border border-rose-800/60 text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          {successMessage && (
            <div className="p-3 rounded-xl bg-emerald-950/50 border border-emerald-800/60 text-emerald-300 text-xs flex items-center gap-2">
              <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>{successMessage}</span>
            </div>
          )}

          {!isSupabaseConfigured && (
            <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-800/50 text-blue-300 text-[11px] leading-relaxed">
              <strong>Supabase pronto para conexão:</strong> Assim que você enviar a URL e a Anon Key, as contas serão salvas no seu projeto oficial. Pode testar digitando qualquer e-mail/senha.
            </div>
          )}

          <div className="space-y-3">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300 block">
                E-mail
              </label>
              <div className="relative flex items-center">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 pointer-events-none" />
                <input
                  id="auth-email-input"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seuemail@exemplo.com"
                  className="w-full pl-10 pr-3 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300 block">
                Senha
              </label>
              <div className="relative flex items-center">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 pointer-events-none" />
                <input
                  id="auth-password-input"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-3 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>
          </div>

          <button
            id="auth-submit-btn"
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md mt-2 disabled:opacity-50"
          >
            {loading ? (
              <span>Processando...</span>
            ) : isSignUp ? (
              <>
                <UserPlus className="w-4 h-4" />
                <span>Cadastrar e Acessar</span>
              </>
            ) : (
              <>
                <LogIn className="w-4 h-4" />
                <span>Entrar no Simulado</span>
              </>
            )}
          </button>
        </form>

        <div className="mt-5 text-center">
          <button
            id="toggle-auth-mode-btn"
            type="button"
            onClick={() => {
              setIsSignUp(!isSignUp);
              setErrorMessage(null);
              setSuccessMessage(null);
            }}
            className="text-xs text-slate-400 hover:text-blue-400 cursor-pointer transition-colors"
          >
            {isSignUp
              ? 'Já tem uma conta? Clique para entrar'
              : 'Não tem conta? Toque aqui para criar'}
          </button>
        </div>
      </div>

      {/* Footer info */}
      <div className="pb-3 text-center text-[11px] text-slate-600">
        Layout mobile VIBEELL • Autenticação Supabase
      </div>
    </main>
  );
};
