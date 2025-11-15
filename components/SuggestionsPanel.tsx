
import React, { useState } from 'react';
import type { AnalysisResult } from '../types';
import CheckIcon from './icons/CheckIcon';
import WarningIcon from './icons/WarningIcon';
import LightBulbIcon from './icons/LightBulbIcon';
import SparklesIcon from './icons/SparklesIcon';

interface SuggestionsPanelProps {
  analysis: AnalysisResult | null;
  enhancedPrompt: string | null;
  isLoading: boolean;
  error: string | null;
}

const SuggestionItem: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
  <li className="flex items-start space-x-3">
    <div className="flex-shrink-0">{icon}</div>
    <span className="text-slate-300">{text}</span>
  </li>
);

const SkeletonLoader: React.FC = () => (
  <div className="space-y-6 animate-pulse">
    {[1, 2, 3].map((i) => (
      <div key={i}>
        <div className="h-6 bg-slate-700 rounded-md w-1/3 mb-3"></div>
        <div className="space-y-2">
          <div className="h-4 bg-slate-700 rounded-md w-full"></div>
          <div className="h-4 bg-slate-700 rounded-md w-5/6"></div>
        </div>
      </div>
    ))}
  </div>
);

const EnhancedPromptDisplay: React.FC<{ prompt: string }> = ({ prompt }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-6">
      <h3 className="flex items-center text-lg font-semibold text-cyan-300 mb-2">
        <SparklesIcon className="w-6 h-6 mr-2" />
        Prompt Melhorado
      </h3>
      <div className="relative p-4 bg-slate-900/70 rounded-md border border-slate-700">
        <p className="text-slate-200 whitespace-pre-wrap font-mono text-sm">{prompt}</p>
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 px-3 py-1 text-xs font-semibold rounded-md bg-slate-700 hover:bg-slate-600 text-slate-200 transition-colors"
        >
          {copied ? 'Copiado!' : 'Copiar'}
        </button>
      </div>
    </div>
  );
};


const SuggestionsPanel: React.FC<SuggestionsPanelProps> = ({ analysis, enhancedPrompt, isLoading, error }) => {
  const hasContent = analysis && (analysis.strengths.length > 0 || analysis.weaknesses.length > 0 || analysis.suggestions.length > 0);

  return (
    <div className="p-4 md:p-6 bg-slate-800/50 rounded-lg overflow-y-auto h-full">
      <h2 className="text-xl font-semibold text-slate-200 mb-4">Análise e Sugestões</h2>
      <div className="p-4 bg-slate-800 rounded-lg min-h-[200px]">
        {isLoading && <SkeletonLoader />}
        {error && !isLoading && <p className="text-red-400">{error}</p>}
        {!isLoading && !error && !hasContent && !enhancedPrompt && (
          <p className="text-slate-500 text-center py-10">Escreva um prompt e clique em "Analisar" ou "Melhorar" para ver os resultados aqui.</p>
        )}
        
        {analysis && hasContent && (
          <div className="space-y-6">
            {analysis.strengths.length > 0 && (
              <div>
                <h3 className="flex items-center text-lg font-semibold text-green-400 mb-2">
                  <CheckIcon className="w-6 h-6 mr-2" /> Pontos Fortes
                </h3>
                <ul className="space-y-2">
                  {analysis.strengths.map((item, i) => <SuggestionItem key={i} icon={<CheckIcon className="w-5 h-5 text-green-500" />} text={item} />)}
                </ul>
              </div>
            )}
            {analysis.weaknesses.length > 0 && (
              <div>
                <h3 className="flex items-center text-lg font-semibold text-yellow-400 mb-2">
                  <WarningIcon className="w-6 h-6 mr-2" /> Pontos a Melhorar
                </h3>
                <ul className="space-y-2">
                  {analysis.weaknesses.map((item, i) => <SuggestionItem key={i} icon={<WarningIcon className="w-5 h-5 text-yellow-500" />} text={item} />)}
                </ul>
              </div>
            )}
            {analysis.suggestions.length > 0 && (
              <div>
                <h3 className="flex items-center text-lg font-semibold text-sky-400 mb-2">
                  <LightBulbIcon className="w-6 h-6 mr-2" /> Sugestões
                </h3>
                <ul className="space-y-2">
                  {analysis.suggestions.map((item, i) => <SuggestionItem key={i} icon={<LightBulbIcon className="w-5 h-5 text-sky-500" />} text={item} />)}
                </ul>
              </div>
            )}
          </div>
        )}
        
        {enhancedPrompt && (
           <EnhancedPromptDisplay prompt={enhancedPrompt} />
        )}

      </div>
    </div>
  );
};

export default SuggestionsPanel;
