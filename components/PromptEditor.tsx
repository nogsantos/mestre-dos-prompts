
import React from 'react';

interface PromptEditorProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onAnalyze: () => void;
  onEnhance: () => void;
  isLoading: boolean;
}

const ActionButton: React.FC<{ onClick: () => void; isLoading: boolean; text: string; primary?: boolean }> = ({ onClick, isLoading, text, primary = false }) => {
  const baseClasses = "px-4 py-2 text-sm font-semibold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 flex items-center justify-center";
  const primaryClasses = "bg-sky-600 text-white hover:bg-sky-500 focus:ring-sky-500";
  const secondaryClasses = "bg-slate-700 text-slate-200 hover:bg-slate-600 focus:ring-slate-500";
  const disabledClasses = "bg-slate-600 text-slate-400 cursor-not-allowed";

  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`${baseClasses} ${isLoading ? disabledClasses : (primary ? primaryClasses : secondaryClasses)}`}
    >
      {isLoading ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Processando...
        </>
      ) : text}
    </button>
  );
};

const PromptEditor: React.FC<PromptEditorProps> = ({ prompt, setPrompt, onAnalyze, onEnhance, isLoading }) => {
  return (
    <div className="p-4 md:p-6 bg-slate-800/50 rounded-lg flex flex-col h-full">
      <h2 className="text-xl font-semibold text-slate-200 mb-4">Editor de Prompt</h2>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Digite ou cole seu prompt aqui..."
        className="flex-grow w-full p-4 bg-slate-900/70 border border-slate-700 rounded-md text-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors resize-none text-base leading-relaxed"
      />
      <div className="mt-4 flex flex-col sm:flex-row gap-2">
        <ActionButton onClick={onAnalyze} isLoading={isLoading} text="Analisar Prompt" />
        <ActionButton onClick={onEnhance} isLoading={isLoading} text="✨ Melhorar Prompt" primary />
      </div>
    </div>
  );
};

export default PromptEditor;
