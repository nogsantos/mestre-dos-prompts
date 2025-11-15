
import React from 'react';
import { EXAMPLE_PROMPTS } from '../constants';
import type { ExamplePrompt } from '../types';

interface ExamplesSidebarProps {
  onSelectExample: (prompt: string) => void;
}

const ExamplesSidebar: React.FC<ExamplesSidebarProps> = ({ onSelectExample }) => {
  return (
    <aside className="p-4 md:p-6 bg-slate-800/50 rounded-lg h-full overflow-y-auto">
      <h2 className="text-xl font-semibold text-slate-200 mb-4">Exemplos de Prompts</h2>
      <div className="space-y-4">
        {EXAMPLE_PROMPTS.map((example, index) => (
          <div
            key={index}
            className="p-3 bg-slate-700/50 rounded-md hover:bg-sky-900/40 transition-colors cursor-pointer border border-transparent hover:border-sky-700"
            onClick={() => onSelectExample(example.prompt)}
          >
            <h3 className="font-semibold text-sky-400">{example.title}</h3>
            <p className="text-sm text-slate-400 mt-1 line-clamp-2">{example.prompt}</p>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default ExamplesSidebar;
