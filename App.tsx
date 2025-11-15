
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import PromptEditor from './components/PromptEditor';
import SuggestionsPanel from './components/SuggestionsPanel';
import ExamplesSidebar from './components/ExamplesSidebar';
import { analyzePrompt, enhancePrompt } from './services/geminiService';
import type { AnalysisResult } from './types';

function App() {
  const [prompt, setPrompt] = useState<string>('');
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [enhancedPrompt, setEnhancedPrompt] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSelectExample = useCallback((examplePrompt: string) => {
    setPrompt(examplePrompt);
    setAnalysis(null);
    setEnhancedPrompt(null);
    setError(null);
  }, []);

  const handleAnalyze = useCallback(async () => {
    if (isLoading || !prompt) return;
    setIsLoading(true);
    setError(null);
    setAnalysis(null);
    setEnhancedPrompt(null);
    try {
      const result = await analyzePrompt(prompt);
      setAnalysis(result);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Ocorreu um erro desconhecido.');
    } finally {
      setIsLoading(false);
    }
  }, [prompt, isLoading]);

  const handleEnhance = useCallback(async () => {
    if (isLoading || !prompt) return;
    setIsLoading(true);
    setError(null);
    setAnalysis(null);
    setEnhancedPrompt(null);
    try {
      const result = await enhancePrompt(prompt);
      setEnhancedPrompt(result);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Ocorreu um erro desconhecido.');
    } finally {
      setIsLoading(false);
    }
  }, [prompt, isLoading]);

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col font-sans">
      <Header />
      <main className="flex-grow p-4 md:p-6 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full md:min-h-[calc(100vh-150px)]">
          <div className="lg:col-span-1 h-[400px] md:h-auto">
             <ExamplesSidebar onSelectExample={handleSelectExample} />
          </div>
          <div className="lg:col-span-2 grid grid-rows-2 gap-6 h-[800px] md:h-auto">
            <div className="row-span-1">
              <PromptEditor
                prompt={prompt}
                setPrompt={setPrompt}
                onAnalyze={handleAnalyze}
                onEnhance={handleEnhance}
                isLoading={isLoading}
              />
            </div>
            <div className="row-span-1">
              <SuggestionsPanel 
                analysis={analysis} 
                enhancedPrompt={enhancedPrompt}
                isLoading={isLoading}
                error={error} 
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
